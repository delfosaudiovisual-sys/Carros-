"""Gera src/kit/kit.data.js a partir das peças em CAD de tools/kit/parts.py.

Uso (precisa do CadQuery):  python tools/kit/build.py [peça ...]   (com nomes, refaz só essas e mantém as outras)
Cada peça vira malhas por material: posições quantizadas em 16 bits dentro da caixa da peça e índices em 16 ou
32 bits, tudo num bloco binário comprimido com gzip e guardado em base64. O motor 3D descomprime uma vez ao abrir
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
            q = np.round((V - lo) / size * 65535).astype(np.uint16)
            wide = len(V) > 65535
            off = len(blob)
            blob += q.astype('<u2').tobytes()
            pad4(blob)
            ioff = len(blob)
            blob += T.astype('<u4' if wide else '<u2').tobytes()
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
        f.write('   Malhas quantizadas em 16 bits e comprimidas com gzip; o motor 3D descomprime ao abrir a página. */\n')
        f.write('window.CAR_KIT = { items: ' + json.dumps(index, separators=(',', ':')) + ',\n  b64: "' + b64 + '" };\n')
    print(f'bruto {len(raw)/1024:.0f} KB, gzip {len(gz)/1024:.0f} KB, base64 {len(b64)/1024:.0f} KB, total {time.time() - t00:.0f}s')


if __name__ == '__main__':
    main(set(sys.argv[1:]) or None)
