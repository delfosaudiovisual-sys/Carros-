"""Gera src/kit/kit.data.js a partir das peças em CAD de tools/kit/parts.py.

Uso (precisa do CadQuery):  python tools/kit/build.py [peça ...]   (com nomes, refaz só essas e mantém as outras)
Cada peça vira malhas por material: posições quantizadas em 16 bits dentro da caixa da peça e índices em 16 ou
32 bits, ambos guardados como diferenças (comprimem melhor), tudo num bloco binário com gzip e em base64. O motor 3D descomprime uma vez ao abrir
a página (DecompressionStream) e monta as geometrias quando um carro pede a peça.
"""
import base64, gzip, json, math, os, struct, sys, time
import numpy as np
import cadquery as cq
from OCP.BRepMesh import BRepMesh_IncrementalMesh
from OCP.BRep import BRep_Tool
from OCP.TopLoc import TopLoc_Location
from OCP.TopAbs import TopAbs_Orientation

sys.path.insert(0, os.path.dirname(__file__))
import parts as K

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'src', 'kit', 'kit.data.js')

FINE, MID, COARSE = (0.0003, 0.4), (0.0005, 0.45), (0.001, 0.5)   # (desvio máximo da corda em m, ângulo máximo em rad)

# peças genéricas (sistema de coordenadas próprio) e variantes nas coordenadas de cada carro
ITEMS = {
    'alternator': (K.alternator, {}, MID, 'box'),
    'starter': (K.starter, {}, MID, 'box'),
    'compressor': (K.compressor, {}, MID, 'box'),
    'disc_v': (K.disc, dict(vented=True), MID, 'planar'),
    'disc_s206': (K.disc, dict(vented=False, R=0.1235, t=0.013, hat_r=0.065, pcd=0.054), MID, 'planar'),
    'caliper': (K.caliper, {}, FINE, 'box'),
    'pads_v': (K.pads, {}, MID, 'box'),
    'pads_s': (K.pads, dict(R=0.1235, t=0.013), MID, 'box'),
    'booster': (K.brake_booster, {}, MID, 'box'),
    'cv_boot': (K.cv_boot, {}, MID, 'box'),
    'battery': (K.battery, {}, MID, 'box'),
    'oil_filter': (K.oil_filter, {}, MID, 'box'),
    'reservoir': (K.reservoir, {}, (0.006, 0.45), 'box'),
    'res_cap': (K.res_cap, {}, FINE, 'box'),
    'catalytic': (K.catalytic, {}, MID, 'box'),
    'muffler': (K.muffler, {}, COARSE, 'box'),
    # blocos: centro, tamanho, cilindros (z) e posição do filtro de óleo (x, y, z)
    'block_206': (K.engine_block, dict(c=(1.345, 0.46, -0.157), size=(0.23, 0.32, 0.355), cyl_z=[-0.035, -0.117, -0.199, -0.281], filter_at=(1.50, 0.36, -0.20)), COARSE, 'box'),
    'block_civic': (K.engine_block, dict(c=(1.40, 0.465, -0.088), size=(0.23, 0.33, 0.40), cyl_z=[-0.214, -0.130, -0.046, 0.038], filter_at=(1.555, 0.37, -0.04)), COARSE, 'box'),
    'block_tiida': (K.engine_block, dict(c=(1.40, 0.465, -0.088), size=(0.23, 0.33, 0.40), cyl_z=[-0.223, -0.133, -0.043, 0.047], filter_at=(1.555, 0.37, -0.04)), COARSE, 'box'),
    'block_gol': (K.engine_block, dict(c=(1.33, 0.44, -0.092), size=(0.21, 0.32, 0.38), cyl_z=[-0.215, -0.133, -0.051, 0.031], filter_at=(1.477, 0.34, 0.035), iron=True), COARSE, 'box'),
    # câmbios: centro da capa da embreagem, início (z) e raio dela; caixa (centro, tamanho); tampa do fim; bolsões do motor de partida
    'gearbox_206': (K.gearbox, dict(bell_c=(1.34, 0.40), bell_z0=0.02, bell_r=0.152, case_c=(1.30, 0.40, 0.25), case_s=(0.28, 0.26, 0.20), end_z=0.355, pockets=[(1.19, 0.46, 0.05), (1.19, 0.518, 0.03)]), COARSE, 'box'),
    'gearbox_civic': (K.gearbox, dict(bell_c=(1.40, 0.40), bell_z0=0.10, bell_r=0.158, case_c=(1.34, 0.43, 0.32), case_s=(0.30, 0.28, 0.22), end_z=0.435, pockets=[(1.24, 0.46, 0.05), (1.24, 0.518, 0.03)]), COARSE, 'box'),
    'gearbox_tiida': (K.gearbox, dict(bell_c=(1.40, 0.40), bell_z0=0.11, bell_r=0.16, case_c=(1.34, 0.43, 0.33), case_s=(0.30, 0.28, 0.23), end_z=0.45, pockets=[(1.24, 0.46, 0.05), (1.24, 0.518, 0.03)]), COARSE, 'box'),
    'gearbox_gol': (K.gearbox, dict(bell_c=(1.33, 0.36), bell_z0=0.10, bell_r=0.155, case_c=(1.29, 0.39, 0.31), case_s=(0.27, 0.27, 0.22), end_z=0.425, pockets=[(1.18, 0.445, 0.05), (1.18, 0.503, 0.03)]), COARSE, 'box'),
}



# ---------- cabeçote, tampa, coletores, protetor de calor e cárter: nas medidas de cada motor ----------
# Cada lista reproduz o desenho do carro (src/cars): faces do cabeçote, janelas, dutos, posição dos parafusos
# (os fixadores do app ficam sobre as orelhas e torres modeladas aqui) e onde encostam sensores, mangueiras e o catalisador.
def _mid(zs):
    zs = sorted(zs)
    return [(zs[i] + zs[i + 1]) / 2 for i in range(len(zs) - 1)]


def engine_items():
    E = {}
    # Nissan MR18DE (Tiida): admissão na frente (+x), escape para o corta-fogo
    zt, cy_t, mains_t = -0.088, [-0.223, -0.133, -0.043, 0.047], [-0.268, -0.178, -0.088, 0.002, 0.092]
    E['head_tiida'] = (K.cylinder_head, dict(c=(1.40, 0.69, zt), size=(0.26, 0.11, 0.40), cyl_z=cy_t, ex_dir=-1, port_y=0.685, in_y=0.69,
        ends=[('box', 1.355, 0.70, 0.118, 0.07, 0.05, 0.012), ('cyl', 1.37, 0.71, 0.112, 0.142, 0.019), ('cyl', 1.34, 0.71, 0.112, 0.132, 0.011),
              ('cyl', 1.40, 0.66, 0.112, 0.128, 0.013), ('box', 1.40, 0.758, 0.111, 0.15, 0.045, 0.014)], eye=(1.29, 0.112, 1)), MID)
    E['cover_tiida'] = (K.valve_cover, dict(c=(1.40, 0.782, zt), size=(0.235, 0.064, 0.38), mat='covers', wells=[(1.40, z) for z in cy_t], well_r=0.014,
        towers=[(1.40 + sd * 0.105, z) for z in mains_t for sd in (1, -1)], filler=(1.47, -0.24, 0.028, 0.815),
        ribs=[(1.345, 0.817, -0.088, 0.012, 0.006, 0.29), (1.455, 0.817, -0.07, 0.012, 0.006, 0.26)],
        nipples=[((1.50, 0.785, 0.06), (1.518, 0.785, 0.06), 0.012)]), MID)
    E['intake_tiida'] = (K.intake_manifold, dict(runners=[[(1.532, 0.69, z), (1.57, 0.68, z), (1.61, 0.70, z), (1.645, 0.75, z), (1.668, 0.785, z)] for z in cy_t], r=0.02,
        plenum=((1.685, 0.79, -0.108), (0.12, 0.10, 0.34), 0.03), flange=(1.532, 1.546, 0.652, 0.728, -0.262, 0.086), mat='plastic',
        neck=([(1.69, 0.785, 0.03), (1.69, 0.785, 0.056), (1.69, 0.785, 0.082)], 0.031), tb=((1.69, 0.785, 0.084, 0.085, 0.085, 0.008), '|Z'),
        bosses=[((1.545, 0.70, z), (1.556, 0.712, z), 0.012) for z in cy_t] + [((1.61, 0.712, z + 0.012), (1.61, 0.748, z + 0.012), 0.0045) for z in cy_t],
        ribs=[(1.746, 0.79, z, 0.006, 0.07, 0.006) for z in _mid(cy_t)]), MID)
    E['exhaust_tiida'] = (K.exhaust_manifold, dict(prims=[[(1.27, 0.685, z), (1.235, 0.66, z * 0.8 - 0.02), (1.205, 0.605, -0.092)] for z in cy_t], r=0.018,
        flange=(1.258, 1.27, 0.655, 0.715, -0.26, 0.08), ears=[((1.258, y, z), (1.27, y, z), 0.011) for y in (0.66, 0.715) for z in (-0.268, -0.178, -0.088, 0.002)],
        collector=((1.205, 0.62, -0.092), (1.18, 0.572, -0.09), 0.028), outlet=(1.18, 0.568, -0.09, 0.075, False),
        boss=((1.20, 0.575, -0.105), (1.218, 0.598, -0.118), 0.012)), MID)
    E['shield_tiida'] = (K.heat_shield, dict(x_in=1.262, x_out=1.145, y_top=0.738, y_bot=0.61, z0=-0.27, z1=0.075, ribs=(-0.19, -0.095, 0.0), tabs=(-0.23, 0.04)), MID)
    E['pan_tiida'] = (lambda: K.oil_pan(c=(1.40, 0.30, -0.093), size=(0.225, 0.39), depth=0.048, mat='aluDark', taper=0.0, flange=(0.003, 0.003, 0.008), ribs=6)
                      + K.oil_pan(c=(1.40, 0.252, -0.098), size=(0.205, 0.36), depth=0.072, mat='steelDark', taper=7.0, flange=(0.006, 0.006, 0.004),
                                  drain=(1.46, -0.18), beads=(0.215,)), {}, MID)
    # Honda D17 (Civic): mesma disposição do Tiida
    zc, cy_c = -0.088, [-0.214, -0.130, -0.046, 0.038]
    E['head_civic'] = (K.cylinder_head, dict(c=(1.40, 0.686, zc), size=(0.245, 0.10, 0.40), cyl_z=cy_c, ex_dir=-1, port_y=0.685, in_y=0.69,
        ends=[('box', 1.355, 0.695, 0.118, 0.07, 0.05, 0.012), ('cyl', 1.37, 0.705, 0.112, 0.142, 0.019), ('cyl', 1.34, 0.70, 0.112, 0.132, 0.011),
              ('box', 1.40, 0.752, 0.111, 0.07, 0.05, 0.014)], eye=(1.29, 0.112, 1)), MID)
    E['cover_civic'] = (K.valve_cover, dict(c=(1.40, 0.766, zc), size=(0.20, 0.06, 0.37), mat='box', wells=[(1.40, z) for z in cy_c], well_r=0.014,
        towers=[(1.40 + sd * 0.085, z) for z in (-0.26, -0.088, 0.08) for sd in (1, -1)], filler=(1.45, 0.03, 0.028, 0.799),
        ribs=[(1.348, 0.798, -0.088, 0.012, 0.006, 0.30), (1.452, 0.798, -0.13, 0.012, 0.006, 0.22), (1.40, 0.799, -0.26, 0.17, 0.008, 0.02), (1.40, 0.799, 0.08, 0.17, 0.008, 0.02)],
        nipples=[((1.485, 0.775, -0.20), (1.502, 0.775, -0.20), 0.012)]), MID)
    E['intake_civic'] = (K.intake_manifold, dict(runners=[[(1.5245, 0.69, z), (1.56, 0.68, z), (1.61, 0.70, z), (1.645, 0.75, z), (1.668, 0.785, z)] for z in cy_c], r=0.02,
        plenum=((1.685, 0.79, -0.108), (0.12, 0.10, 0.34), 0.03), flange=(1.5245, 1.5365, 0.652, 0.728, -0.253, 0.077), mat='aluDark',
        neck=([(1.69, 0.785, 0.03), (1.69, 0.785, 0.056), (1.69, 0.785, 0.082)], 0.031), tb=((1.69, 0.785, 0.084, 0.085, 0.085, 0.008), '|Z'),
        bosses=[((1.545, 0.70, z), (1.556, 0.712, z), 0.012) for z in cy_c], ribs=[(1.746, 0.79, z, 0.006, 0.07, 0.006) for z in _mid(cy_c)]), MID)
    E['exhaust_civic'] = (K.exhaust_manifold, dict(prims=[[(1.2775, 0.685, z), (1.24, 0.66, z * 0.8 - 0.02), (1.205, 0.605, -0.092)] for z in cy_c], r=0.018,
        flange=(1.2655, 1.2775, 0.655, 0.715, -0.253, 0.077), ears=[((1.2655, y, z), (1.2775, y, z), 0.011) for y in (0.66, 0.715) for z in (-0.256, -0.172, -0.088, -0.004)],
        collector=((1.205, 0.62, -0.092), (1.18, 0.572, -0.09), 0.028), outlet=(1.18, 0.568, -0.09, 0.075, False),
        boss=((1.20, 0.575, -0.105), (1.218, 0.598, -0.118), 0.012)), MID)
    E['shield_civic'] = (K.heat_shield, dict(x_in=1.27, x_out=1.145, y_top=0.738, y_bot=0.61, z0=-0.26, z1=0.07, ribs=(-0.18, -0.09, 0.0), tabs=(-0.22, 0.03)), MID)
    E['pan_civic'] = (K.oil_pan, dict(c=(1.40, 0.30, -0.098), size=(0.205, 0.35), depth=0.11, mat='aluDark', taper=4.0, flange=(0.0115, 0.0175, 0.008),
        drain=(1.46, -0.18), ribs=5), MID)
    # VW EA111 8V (Gol): escape na frente, admissão para o corta-fogo, velas inclinadas na frente do cabeçote
    zg, cy_g = -0.092, [-0.215, -0.133, -0.051, 0.031]
    E['head_gol'] = (K.cylinder_head, dict(c=(1.33, 0.655, zg), size=(0.22, 0.10, 0.38), cyl_z=cy_g, ex_dir=1, port_y=0.645, in_y=0.645,
        ends=[('box', 1.36, 0.705, 0.1, 0.06, 0.05, 0.006)], wells=[((1.362, 0.609, z), (1.43, 0.745, z), 0.013) for z in cy_g]), MID)
    E['cover_gol'] = (K.valve_cover, dict(c=(1.33, 0.745, zg), size=(0.16, 0.05, 0.36), mat='aluDark', r_top=0.015,
        towers=[(1.33 + sd * 0.07, z) for z in (-0.255, -0.15, -0.035, 0.07) for sd in (1, -1)], filler=(1.31, -0.262, 0.024, 0.771),
        ribs=[(1.33, 0.771, zg + k * 0.045, 0.13, 0.006, 0.012) for k in range(-3, 4)], nipples=[((1.258, 0.762, -0.17), (1.244, 0.762, -0.17), 0.011)]), MID)
    E['intake_gol'] = (K.intake_manifold, dict(runners=[[(1.222, 0.645, z), (1.185, 0.62, z), (1.14, 0.64, z), (1.115, 0.69, z), (1.11, 0.715, z)] for z in cy_g], r=0.019,
        plenum=((1.11, 0.705, -0.112), (0.09, 0.09, 0.33), 0.028), flange=(1.208, 1.22, 0.612, 0.678, -0.252, 0.068), mat='plastic',
        neck=([(1.11, 0.705, 0.045), (1.11, 0.705, 0.07), (1.11, 0.705, 0.094)], 0.03), tb=((1.11, 0.705, 0.098, 0.085, 0.085, 0.008), '|Z'),
        bosses=[((1.209, 0.658, z), (1.202, 0.672, z), 0.011) for z in cy_g] + [((1.17, 0.638, z + 0.012), (1.17, 0.672, z + 0.012), 0.0045) for z in cy_g],
        ribs=[(1.064, 0.705, z, 0.006, 0.07, 0.006) for z in _mid(cy_g)]), MID)
    E['exhaust_gol'] = (K.exhaust_manifold, dict(prims=[[(1.44, 0.645, z), (1.485, 0.625, z * 0.8 - 0.02), (1.525, 0.592, -0.10)] for z in cy_g], r=0.018,
        flange=(1.44, 1.452, 0.615, 0.675, -0.25, 0.066), ears=[((1.44, y, z), (1.452, y, z), 0.011) for y in (0.62, 0.675) for z in (-0.256, -0.174, -0.092, -0.010)],
        collector=((1.523, 0.605, -0.10), (1.54, 0.556, -0.10), 0.026), outlet=(1.54, 0.552, -0.10, 0.073, True),
        boss=((1.53, 0.57, -0.118), (1.542, 0.59, -0.13), 0.012)), MID)
    E['shield_gol'] = (K.heat_shield, dict(x_in=1.448, x_out=1.575, y_top=0.715, y_bot=0.66, z0=-0.225, z1=0.075, ribs=(-0.15, -0.07, 0.01), tabs=(-0.20, 0.05)), MID)
    E['pan_gol'] = (K.oil_pan, dict(c=(1.33, 0.28, -0.102), size=(0.19, 0.35), depth=0.094, mat='steelDark', taper=6.0, flange=(0.0075, 0.01, 0.008),
        sump=(-0.26, -0.06, 0.06), drain=(1.38, -0.18), beads=(0.25,)), MID)
    # PSA TU3 (206): escape na frente, admissão atrás com o plenum alto, bobina compacta em cima da tampa
    zp, cy_p = -0.157, [-0.035, -0.117, -0.199, -0.281]
    E['head_206'] = (K.cylinder_head, dict(c=(1.35, 0.676, zp), size=(0.24, 0.104, 0.35), cyl_z=cy_p, ex_dir=1, port_y=0.67, in_y=0.675,
        ends=[('box', 1.37, 0.68, 0.021, 0.05, 0.05, 0.008)], eye=(1.45, 0.018, 1)), MID)
    E['cover_206'] = (K.valve_cover, dict(c=(1.345, 0.758, zp), size=(0.19, 0.056, 0.33), mat='plastic', r_top=0.016, wells=[(1.37, z) for z in cy_p], well_r=0.013,
        bosses=[(x, z) for x in (1.30, 1.39) for z in (-0.03, -0.157, -0.28)], filler=(1.29, -0.07, 0.026, 0.787),
        nipples=[((1.272, 0.776, -0.30), (1.262, 0.792, -0.296), 0.01)]), MID)
    E['intake_206'] = (K.intake_manifold, dict(runners=[[(1.23, 0.675, z), (1.17, 0.685, z), (1.115, 0.75, z), (1.13, 0.81, z), (1.15, 0.84, z)] for z in cy_p], r=0.019,
        plenum=((1.15, 0.845, -0.157), (0.12, 0.07, 0.33), 0.025), flange=(1.218, 1.23, 0.64, 0.71, -0.316, 0.0), mat='plastic',
        neck=([(1.256, 0.86, -0.03), (1.22, 0.855, -0.05), (1.19, 0.85, -0.07)], 0.029), tb=((1.258, 0.86, -0.03, 0.008, 0.085, 0.085), '|X'),
        bosses=[((1.198, 0.69, z), (1.188, 0.706, z), 0.011) for z in cy_p], ribs=[(1.089, 0.845, z, 0.006, 0.05, 0.006) for z in _mid(cy_p)]), MID)
    E['exhaust_206'] = (K.exhaust_manifold, dict(prims=[[(1.47, 0.67, z), (1.53, 0.64, z * 0.8 - 0.02), (1.568, 0.585, -0.12)] for z in cy_p], r=0.018,
        flange=(1.47, 1.482, 0.64, 0.70, -0.316, 0.0), ears=[((1.47, y, z), (1.482, y, z), 0.011) for y in (0.645, 0.70) for z in (-0.24, -0.158, -0.076, 0.005)],
        collector=((1.568, 0.60, -0.12), (1.575, 0.532, -0.12), 0.026), outlet=(1.575, 0.528, -0.12, 0.069, True),
        boss=((1.585, 0.555, -0.099), (1.60, 0.585, -0.097), 0.012)), MID)
    E['shield_206'] = (K.heat_shield, dict(x_in=1.478, x_out=1.61, y_top=0.725, y_bot=0.62, z0=-0.325, z1=0.02, ribs=(-0.25, -0.157, -0.06), tabs=(-0.29, -0.02)), MID)
    E['pan_206'] = (K.oil_pan, dict(c=(1.345, 0.30, -0.16), size=(0.205, 0.315), depth=0.11, mat='aluDark', taper=4.0, flange=(0.0125, 0.0175, 0.008),
        drain=(1.40, -0.22), ribs=4), MID)
    for k, (fn, kw, q) in E.items():
        if k.startswith(('intake_', 'exhaust_')):
            q = (0.001, 0.5)   # superfícies varridas: com a malha média sairiam com o dobro de triângulos
        ITEMS[k] = (fn, kw, q, 'box')


engine_items()


# ---------- suspensão e direção: lado esquerdo nas coordenadas do carro (o app espelha para o direito) ----------
def suspension_items():
    E = {}
    def rp(XFA, WY, r, t):
        a = math.atan2(0.05, -0.10)
        return (XFA + math.cos(a) * r - math.sin(a) * t, WY + math.sin(a) * r + math.cos(a) * t)

    def studs3(x, y, z):
        return [(x + 0.05 * math.cos(k * 2 * math.pi / 3 + 0.5), y, z + 0.05 * math.sin(k * 2 * math.pi / 3 + 0.5)) for k in range(3)]

    C = {
        'tiida': dict(XFA=1.30, XRA=-1.30, WY=0.305, bot=(1.312, 0.42, 0.635), top=(1.33, 0.87, 0.56), r=0.026, seat=0.085, topr=0.075, bolts=(0.41, 0.45),
                      studs=studs3(1.33, 0.892, 0.56), lk=((1.23, 0.29, 0.598), (1.27, 0.50, 0.645)), kz=(0.632, 0.68), up=(1.312, 0.47, 0.667),
                      bj=(1.30, 0.18, 0.655), sa=((1.28, 0.37, 0.652), (1.16, 0.37, 0.625)), ear=(0.112, 0.06, 0.645, 0.668), abs=(1.37, 0.36, 0.67),
                      F=(1.40, 0.21, 0.37), R=(1.06, 0.21, 0.40)),
        'civic': dict(XFA=1.31, XRA=-1.31, WY=0.305, bot=(1.322, 0.42, 0.63), top=(1.34, 0.86, 0.56), r=0.026, seat=0.085, topr=0.075, bolts=(0.41, 0.45),
                      studs=studs3(1.34, 0.882, 0.56), lk=((1.24, 0.29, 0.598), (1.28, 0.50, 0.64)), kz=(0.627, 0.675), up=(1.322, 0.47, 0.662),
                      bj=(1.31, 0.18, 0.65), sa=((1.29, 0.37, 0.647), (1.17, 0.37, 0.62)), ear=(0.112, 0.06, 0.64, 0.663), abs=None,
                      F=(1.41, 0.21, 0.37), R=(1.07, 0.21, 0.40)),
        'gol': dict(XFA=1.2325, XRA=-1.2325, WY=0.292, bot=(1.2445, 0.40, 0.605), top=(1.2625, 0.83, 0.535), r=0.025, seat=0.082, topr=0.072, bolts=(0.39, 0.43),
                    studs=[(1.2625 + dx, 0.872, 0.535) for dx in (-0.04, 0.04)], lk=((1.1625, 0.28, 0.568), (1.2025, 0.47, 0.615)), kz=(0.60, 0.645), up=(1.2445, 0.45, 0.637),
                    bj=(1.2325, 0.17, 0.625), sa=((1.2125, 0.35, 0.62), (1.1025, 0.35, 0.595)), ear=(0.1075, 0.0576, 0.612, 0.632), abs=None,
                    F=(1.3325, 0.20, 0.35), R=(1.0025, 0.20, 0.38)),
        '206': dict(XFA=1.2215, XRA=-1.2215, WY=0.29, bot=(1.2335, 0.40, 0.635), top=(1.2515, 0.83, 0.565), r=0.026, seat=0.08, topr=0.072, bolts=(0.39, 0.43),
                    studs=studs3(1.2515, 0.852, 0.565), lk=((1.1615, 0.28, 0.598), (1.1915, 0.47, 0.645)), kz=(0.63, 0.68), up=(1.2335, 0.45, 0.667),
                    bj=(1.2215, 0.185, 0.645), sa=((1.2015, 0.33, 0.645), (1.0915, 0.33, 0.62)), ear=(0.1064, 0.057, 0.652, 0.67), abs=None,
                    F=(1.3215, 0.21, 0.37), R=(1.0015, 0.21, 0.38)),
    }
    for car, d in C.items():
        E['strut_' + car] = (K.strut, dict(bot=d['bot'], top=d['top'], r=d['r'], seat_r=d['seat'], top_r=d['topr'], bolts_y=d['bolts'], link=d['lk'][1]))
        E['mount_' + car] = (K.strut_mount, dict(bot=d['bot'], top=d['top'], studs=d['studs']))
        er, et, ez0, ez1 = d['ear']
        ears = [(*rp(d['XFA'], d['WY'], er, k * et), ez0, ez1) for k in (1, -1)]
        E['knuckle_' + car] = (K.knuckle, dict(wc=(d['XFA'], d['WY']), z0=d['kz'][0], z1=d['kz'][1], upper=d['up'], bj=d['bj'], sa0=d['sa'][0], sa1=d['sa'][1], ears=ears, abs_boss=d['abs']))
        E['arm_' + car] = (K.lower_arm, dict(bj=d['bj'], F=d['F'], R=d['R']))
        E['link_' + car] = (K.stab_link, dict(p0=d['lk'][0], p1=d['lk'][1]))
    # caixas de direção (inteiras, nos dois lados)
    E['rack_tiida'] = (K.steering_rack, dict(c=(1.13, 0.37), half=0.35, pinion_z=0.26, clamps=(-0.15, 0.15), boot=(0.35, 0.44)))
    E['rack_civic'] = (K.steering_rack, dict(c=(1.13, 0.37), half=0.35, pinion_z=0.26, clamps=(-0.15, 0.15), boot=(0.35, 0.44), r=0.028, hyd=(-0.23, -0.01, 0.036), valve=True))
    E['rack_gol'] = (K.steering_rack, dict(c=(1.06, 0.35), half=0.33, pinion_z=0.25, clamps=(-0.14, 0.14), boot=(0.33, 0.41), hyd=(-0.23, -0.01, 0.034), valve=True))
    E['rack_206'] = (K.steering_rack, dict(c=(1.07, 0.33), half=0.35, pinion_z=0.26, clamps=(-0.15, 0.15), boot=(0.35, 0.44)))
    # traseira
    E['beam_tiida'] = (K.torsion_beam, dict(bu=(-0.86, 0.33, 0.62), hub=(-1.30, 0.305, 0.655), beam=(-1.13, 0.30), spring=(-1.25, 0.315, 0.55), shock_b=(-1.36, 0.235, 0.60), half=0.64))
    E['beam_gol'] = (K.torsion_beam, dict(bu=(-0.80, 0.31, 0.585), hub=(-1.2325, 0.292, 0.62), beam=(-1.02, 0.29), spring=(-1.1825, 0.305, 0.525), shock_b=(-1.2925, 0.225, 0.575), half=0.60))
    E['tarm_206'] = (K.trailing_arm, dict(pivot=(-0.87, 0.30), z0=0.595, z1=0.645, hub=(-1.2215, 0.29), hub_z=0.66, shock_b=(-1.3215, 0.22), shock_z=0.615))
    E['shock_tiida'] = (K.shock, dict(bot=(-1.36, 0.235, 0.60), top=(-1.40, 0.64, 0.565), eye_bot='y', plate_top=((-1.40, 0.643, 0.565), (0.05, 0.08))))
    E['shock_gol'] = (K.shock, dict(bot=(-1.2925, 0.225, 0.575), top=(-1.3325, 0.62, 0.54), r=0.023, eye_bot='y', stud=0.025))
    E['shock_206'] = (K.shock, dict(bot=(-1.3215, 0.22, 0.60), top=(-1.2515, 0.53, 0.54), r=0.022, body_to=0.58, eye_bot='z', stud=0.008))
    XRA = -1.31
    E['shock_civic'] = (K.shock, dict(bot=(XRA - 0.02, 0.23, 0.53), top=(XRA - 0.06, 0.74, 0.52), seats=((0.31, 0.07), (0.89, 0.068)), eye_bot='y',
                                      plate_top=((XRA - 0.06, 0.743, 0.50), (0.05, 0.08))))
    E['rknuckle_civic'] = (K.rear_knuckle, dict(wc=(XRA, 0.305), z0=0.63, z1=0.68, bosses=[((XRA, 0.46, 0.63), 'x', 0.014, 0.04), ((XRA, 0.20, 0.63), 'x', 0.016, 0.05),
                                                                                        ((XRA + 0.04, 0.29, 0.65), 'z', 0.016, 0.03)]))
    E['uarm_civic'] = (K.link_arm, dict(p0=(XRA, 0.46, 0.63), p1=(XRA - 0.03, 0.50, 0.42), w=0.03, h=0.02, eyes=[((XRA, 0.46, 0.63), 'x', 0.016, 0.035), ((XRA - 0.03, 0.50, 0.42), 'x', 0.02, 0.04)]))
    E['larm_civic'] = (lambda: K.link_arm((XRA, 0.20, 0.63), (XRA + 0.06, 0.24, 0.30), 0.04, 0.022, [((XRA, 0.20, 0.63), 'x', 0.018, 0.05), ((XRA + 0.06, 0.24, 0.30), 'x', 0.022, 0.05)])
                            + K.link_arm((XRA, 0.20, 0.63), (XRA - 0.09, 0.24, 0.30), 0.036, 0.02, [((XRA - 0.09, 0.24, 0.30), 'x', 0.02, 0.045)])
                            + [('steelDark', K.safe_fillet(K.box(XRA - 0.02, 0.215, 0.53, 0.08, 0.006, 0.05), '|Y', 0.01))], {})
    E['tlink_civic'] = (K.link_arm, dict(p0=(XRA + 0.04, 0.29, 0.65), p1=(XRA + 0.46, 0.28, 0.62), w=0.035, h=0.05, eyes=[((XRA + 0.04, 0.29, 0.65), 'z', 0.018, 0.03), ((XRA + 0.46, 0.28, 0.62), 'z', 0.032, 0.04)]))
    for k, (fn, kw) in E.items():
        ITEMS[k] = (fn, kw, MID, 'box')


suspension_items()

def mesh_of(shape, tol, ang):
    """Malha com tolerância absoluta (em metros). O tessellate do CadQuery refaz a malha com tolerância relativa ao
    tamanho de cada aresta, o que afina demais as peças pequenas; aqui a malha é feita uma vez e lida face a face."""
    BRepMesh_IncrementalMesh(shape.wrapped, tol, False, ang, True)
    V, T, off = [], [], 0
    for f in shape.Faces():
        loc = TopLoc_Location()
        poly = BRep_Tool.Triangulation_s(f.wrapped, loc)
        if poly is None:
            continue
        tr = loc.Transformation()
        rev = f.wrapped.Orientation() == TopAbs_Orientation.TopAbs_REVERSED
        for i in range(1, poly.NbNodes() + 1):
            p = poly.Node(i).Transformed(tr)
            V.append((p.X(), p.Y(), p.Z()))
        for t in poly.Triangles():
            a, b, c = t.Value(1) + off - 1, t.Value(2) + off - 1, t.Value(3) + off - 1
            T.append((a, c, b) if rev else (a, b, c))
        off += poly.NbNodes()
    return np.array(V, dtype=np.float64).reshape(-1, 3), np.array(T, dtype=np.int64).reshape(-1, 3)


def previous():
    """Lê o kit.data.js atual (para refazer só algumas peças e manter as outras como estão)."""
    if not os.path.exists(OUT):
        return {}, b''
    src = open(OUT).read()
    if 'v: 2,' not in src:   # formato antigo: refaz tudo
        return {}, b''
    items = json.loads(src.split('items: ', 1)[1].split(',\n  b64: ', 1)[0])
    raw = gzip.decompress(base64.b64decode(src.split('b64: "', 1)[1].split('"', 1)[0]))
    return items, raw


def pad4(blob):
    if len(blob) % 4:
        blob += b'\0' * (4 - len(blob) % 4)


def main(only=None):
    blob = bytearray()
    index = {}
    t00 = time.time()
    old, raw0 = previous() if only else ({}, b'')
    for name, (fn, kw, (tol, ang), uv) in ITEMS.items():
        if only and name not in only:
            if name in old:   # copia a peça já gerada
                e = old[name]
                for sb in e['sub']:
                    nv, nt, w = sb['nv'], sb['nt'], sb['w']
                    v = raw0[sb['v']:sb['v'] + nv * 6]
                    i = raw0[sb['i']:sb['i'] + nt * 3 * (4 if w else 2)]
                    sb['v'] = len(blob); blob += v; pad4(blob)
                    sb['i'] = len(blob); blob += i; pad4(blob)
                index[name] = e
            continue
        t0 = time.time()
        subs = []
        for mat, w in fn(**kw):
            vals = [v for v in w.vals() if hasattr(v, 'wrapped')]
            shape = vals[0] if len(vals) == 1 else cq.Compound.makeCompound(vals)
            V, T = mesh_of(shape, tol, ang)
            if len(T):
                subs.append((mat, V, T))
        allv = np.concatenate([s[1] for s in subs])
        lo, hi = allv.min(0), allv.max(0)
        size = np.maximum(hi - lo, 1e-6)
        entry = {'min': [round(float(x), 6) for x in lo], 'size': [round(float(x), 6) for x in size], 'uv': uv, 'sub': []}
        for mat, V, T in subs:
            # posições em 16 bits dentro da caixa da peça; guardadas como diferença para o vértice anterior, um eixo
            # de cada vez (x de todos, depois y, depois z), e os índices também em diferença: o gzip comprime o dobro
            q = np.round((V - lo) / size * 65535).astype(np.int64)
            wide = len(V) > 65535
            dq = np.diff(q, axis=0, prepend=np.zeros((1, 3), np.int64)) % 65536
            dI = np.diff(T.reshape(-1), prepend=0) % ((1 << 32) if wide else 65536)
            off = len(blob)
            blob += dq.T.astype('<u2').tobytes()
            pad4(blob)
            ioff = len(blob)
            blob += dI.astype('<u4' if wide else '<u2').tobytes()
            pad4(blob)
            entry['sub'].append({'m': mat, 'nv': int(len(V)), 'nt': int(len(T)), 'v': off, 'i': ioff, 'w': 1 if wide else 0})
        index[name] = entry
        nt = sum(len(s[2]) for s in subs)
        print(f'{name:16s} {nt:6d} triângulos  {time.time() - t0:5.1f}s')
    raw = bytes(blob)
    gz = gzip.compress(raw, 9)
    b64 = base64.b64encode(gz).decode()
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w') as f:
        f.write('/* ===== Peças em CAD (gerado por tools/kit/build.py: não edite à mão) =====\n')
        f.write('   Malhas quantizadas em 16 bits, em diferenças, comprimidas com gzip; o motor 3D descomprime ao abrir a página. */\n')
        f.write('window.CAR_KIT = { v: 2, items: ' + json.dumps(index, separators=(',', ':')) + ',\n  b64: "' + b64 + '" };\n')
    print(f'bruto {len(raw)/1024:.0f} KB, gzip {len(gz)/1024:.0f} KB, base64 {len(b64)/1024:.0f} KB, total {time.time() - t00:.0f}s')


if __name__ == '__main__':
    main(set(sys.argv[1:]) or None)
