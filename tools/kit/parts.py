"""Peças em CAD (CadQuery) para o app: cada função devolve uma lista de (material, sólido).

Medidas em metros. Cada peça tem um sistema de coordenadas próprio, descrito na função; o carro só posiciona,
gira e escala (ver kit() em src/engine/engine.js). Os nomes de material são as chaves de MAT no motor 3D.
As formas seguem o tipo de peça (aletas, orelhas de fixação, canais da polia, aletas de ventilação do disco),
não o desenho de um fabricante.
"""
import math
import cadquery as cq


def _clean(pts):
    q = [pts[0]]
    for p in pts[1:]:
        if abs(p[0] - q[-1][0]) > 1e-7 or abs(p[1] - q[-1][1]) > 1e-7:
            q.append(p)
    if len(q) > 2 and abs(q[0][0] - q[-1][0]) < 1e-7 and abs(q[0][1] - q[-1][1]) < 1e-7:
        q.pop()
    return q


def lathe(pts):
    """Sólido de revolução em torno do eixo z; pts = [(raio, z), ...] fechando o perfil (pontos repetidos são ignorados)."""
    return cq.Workplane('XZ').polyline(_clean(pts)).close().revolve(360, (0, 0, 0), (0, 1, 0))


def cyl(r, z0, z1, x=0.0, y=0.0):
    return cq.Workplane('XY').workplane(offset=z0).center(x, y).circle(r).extrude(z1 - z0)


def cyl_x(r, x0, x1, y=0.0, z=0.0):
    return cq.Workplane('YZ').workplane(offset=x0).center(y, z).circle(r).extrude(x1 - x0)


def cyl_y(r, y0, y1, x=0.0, z=0.0):
    # plano XZ tem a normal para -y: extrude negativo cresce para +y
    return cq.Workplane('XZ').workplane(offset=-y0).center(x, z).circle(r).extrude(-(y1 - y0))


def box(cx, cy, cz, sx, sy, sz):
    return cq.Workplane('XY').box(sx, sy, sz).translate((cx, cy, cz))


def safe_fillet(w, sel, r):
    try:
        return w.edges(sel).fillet(r)
    except Exception:
        return w


def vpulley(r, w, grooves, bore=0.0, z0=0.0):
    """Polia de correia poli-V: canais em V no perfil (revolução), face em z0."""
    pts = [(bore, z0), (r, z0), (r, z0 + 0.002)]
    pitch = (w - 0.004) / grooves
    for k in range(grooves):
        a = z0 + 0.002 + k * pitch
        pts += [(r - 0.0025, a + pitch * 0.5), (r, a + pitch)]
    pts += [(r, z0 + w), (bore, z0 + w)]
    return lathe(pts)


def ring_cuts(w, n, r, z0, z1, width, depth, phase=0.0):
    """Corta n janelas retangulares radiais numa parede cilíndrica."""
    for k in range(n):
        a = phase + k * 360.0 / n
        s = box(r, 0, (z0 + z1) / 2, depth, width, z1 - z0).rotate((0, 0, 0), (0, 0, 1), a)
        w = w.cut(s)
    return w


# ---------- elétrica e acessórios ----------

def alternator():
    """Eixo z. Polia de 6 canais de z=0 a 0,022; carcaça para +z até ~0,135. Orelhas de fixação a −135° e +45°."""
    R = 0.0625
    pulley = vpulley(0.03, 0.022, 6, 0.0)
    nut = cq.Workplane('XY').polygon(6, 0.022).extrude(0.008).translate((0, 0, -0.006))
    front = lathe([(0.0, 0.022), (0.021, 0.022), (0.024, 0.029), (R - 0.008, 0.034), (R - 0.002, 0.044), (R, 0.068), (0.0, 0.068)])
    front = ring_cuts(front, 10, 0.043, 0.029, 0.036, 0.007, 0.026)
    stator = lathe([(0.0, 0.068), (R + 0.002, 0.068), (R + 0.002, 0.088), (0.0, 0.088)])
    rear = lathe([(0.0, 0.088), (R, 0.088), (R - 0.002, 0.112), (R - 0.009, 0.122), (0.0, 0.122)])
    rear = ring_cuts(rear, 8, R - 0.002, 0.093, 0.108, 0.012, 0.008, 22.5)
    a = math.radians(-135)
    ex, ey = math.cos(a) * (R + 0.006), math.sin(a) * (R + 0.006)
    ears = (cyl(0.011, 0.03, 0.052, ex, ey).union(cyl(0.011, 0.094, 0.116, ex, ey))
            .union(box(ex * 0.8, ey * 0.8, 0.041, 0.016, 0.016, 0.022).rotate((ex * 0.8, ey * 0.8, 0), (ex * 0.8, ey * 0.8, 1), -135))
            .union(box(ex * 0.8, ey * 0.8, 0.105, 0.016, 0.016, 0.022).rotate((ex * 0.8, ey * 0.8, 0), (ex * 0.8, ey * 0.8, 1), -135)))
    ears = ears.cut(cyl(0.0055, 0.02, 0.13, ex, ey))
    a2 = math.radians(45)
    tx, ty = math.cos(a2) * (R + 0.005), math.sin(a2) * (R + 0.005)
    lug = cyl(0.01, 0.094, 0.114, tx, ty).cut(cyl(0.0045, 0.09, 0.12, tx, ty))
    alu = front.union(rear).union(ears).union(lug)
    cover = lathe([(0.0, 0.122), (0.042, 0.122), (0.040, 0.131), (0.030, 0.134), (0.0, 0.134)])
    stud = cyl(0.0035, 0.12, 0.142, 0.022, 0.02).union(cq.Workplane('XY').polygon(6, 0.012).extrude(0.004).translate((0.022, 0.02, 0.133)))
    plug = box(-0.024, 0.026, 0.128, 0.022, 0.014, 0.014)
    return [('steelDark', pulley.union(nut)), ('alu', alu), ('steelDark', stator), ('black', cover.union(plug)), ('copper', stud)]


def starter():
    """Eixo z, centro do motor em z=0. Nariz com o pinhão para −z, flange com 2 orelhas (±y) em z≈−0,08, solenoide em +y."""
    can = lathe([(0.0, -0.045), (0.042, -0.045), (0.042, 0.078), (0.039, 0.086), (0.0, 0.086)])
    for z in (-0.02, 0.05):
        can = can.union(lathe([(0.0, z), (0.0432, z), (0.0432, z + 0.004), (0.0, z + 0.004)]))
    bolts = cyl(0.004, 0.084, 0.092, 0.03, 0.0).union(cyl(0.004, 0.084, 0.092, -0.03, 0.0))
    nose = lathe([(0.0, -0.112), (0.021, -0.112), (0.027, -0.1), (0.04, -0.085), (0.045, -0.06), (0.044, -0.045), (0.0, -0.045)])
    flange = (cq.Workplane('XY').workplane(offset=-0.085).circle(0.045).extrude(0.01)
              .union(cq.Workplane('XY').workplane(offset=-0.085).center(0, 0.05).circle(0.012).extrude(0.01))
              .union(cq.Workplane('XY').workplane(offset=-0.085).center(0, -0.05).circle(0.012).extrude(0.01))
              .union(box(0, 0.025, -0.08, 0.018, 0.05, 0.01)).union(box(0, -0.025, -0.08, 0.018, 0.05, 0.01)))
    flange = flange.cut(cyl(0.0055, -0.09, -0.07, 0, 0.05)).cut(cyl(0.0055, -0.09, -0.07, 0, -0.05))
    pinion = cq.Workplane('XY').polygon(11, 0.032).extrude(0.016).translate((0, 0, -0.126))
    sol = lathe([(0.0, -0.062), (0.024, -0.062), (0.024, 0.032), (0.021, 0.04), (0.0, 0.04)]).translate((0, 0.058, 0))
    sol = sol.union(box(0, 0.042, -0.012, 0.03, 0.02, 0.06))
    studs = cyl(0.004, 0.035, 0.052, 0.009, 0.058).union(cyl(0.003, 0.035, 0.048, -0.01, 0.062))
    return [('steelDark', can.union(bolts)), ('aluDark', nose.union(flange)), ('steel', pinion), ('steel', sol), ('copper', studs)]


def compressor():
    """Eixo z. Polia da embreagem de z=0 a 0,024; corpo para +z até ~0,175. Orelhas de fixação em cima e embaixo (±y)."""
    R = 0.058
    pulley = vpulley(0.056, 0.024, 4, 0.03)
    plate = lathe([(0.0, -0.004), (0.045, -0.004), (0.045, 0.0), (0.0, 0.0)])
    rivets = cq.Workplane('XY')
    for k in range(3):
        a = math.radians(90 + k * 120)
        rivets = rivets.union(cyl(0.004, -0.007, -0.003, math.cos(a) * 0.03, math.sin(a) * 0.03))
    hub = cyl(0.012, -0.009, -0.003)
    head = lathe([(0.0, 0.024), (0.05, 0.024), (R, 0.036), (R, 0.05), (0.0, 0.05)])
    body = lathe([(0.0, 0.05), (R, 0.05), (R, 0.16), (R - 0.004, 0.17), (0.0, 0.17)])
    for z in (0.07, 0.1, 0.13):
        body = body.union(lathe([(0.0, z), (R + 0.002, z), (R + 0.002, z + 0.004), (0.0, z + 0.004)]))
    ears = cq.Workplane('XY')
    for sy in (1, -1):
        for (z0, z1) in ((0.055, 0.08), (0.14, 0.168)):
            e = cyl(0.011, z0, z1, 0, sy * (R + 0.008)).union(box(0, sy * (R + 0.001), (z0 + z1) / 2, 0.018, 0.016, z1 - z0))
            ears = ears.union(e.cut(cyl(0.005, z0 - 0.01, z1 + 0.01, 0, sy * (R + 0.008))))
    block = box(0.0, R + 0.01, 0.152, 0.05, 0.022, 0.032)
    # descarga (fina) na frente, sucção (grossa) atrás
    ports = cyl_y(0.011, R + 0.02, R + 0.034, -0.013, 0.152).union(cyl_y(0.009, R + 0.02, R + 0.034, 0.014, 0.152))
    plug = box(R + 0.004, 0.0, 0.035, 0.012, 0.016, 0.02)
    return [('steelDark', pulley), ('steel', plate.union(rivets).union(hub)), ('alu', head.union(body).union(ears)),
            ('aluDark', block.union(ports)), ('black', plug)]


# ---------- freios ----------

def disc(vented=True, R=0.13, t=0.022, hat_r=0.07, pcd=0.05, holes=4):
    """Eixo z, plano do disco em z=0 (faces de atrito em ±t/2). Chapéu do cubo para +z (lado de fora da roda)."""
    ri = 0.074
    if vented:
        ring = cq.Workplane('XY').circle(R).circle(ri).extrude(0.0075)
        rotor = ring.translate((0, 0, -t / 2)).union(ring.translate((0, 0, t / 2 - 0.0075)))
        n = 32
        for k in range(n):
            v = box((ri + R) / 2, 0, 0, R - ri - 0.004, 0.0045, t - 0.014).rotate((0, 0, 0), (0, 0, 1), k * 360.0 / n)
            rotor = rotor.union(v)
    else:
        rotor = cq.Workplane('XY').circle(R).circle(ri).extrude(t).translate((0, 0, -t / 2))
    # chapéu: parede (hat_r − 0,007 a hat_r), tampo com o furo central e a aba que entra na pista de atrito
    hat = lathe([(hat_r - 0.007, t / 2 - 0.006), (ri + 0.006, t / 2 - 0.006), (ri + 0.006, t / 2), (hat_r, t / 2),
                 (hat_r, t / 2 + 0.019), (0.03, t / 2 + 0.019), (0.03, t / 2 + 0.013), (hat_r - 0.007, t / 2 + 0.013)])
    for k in range(holes):
        a = k * 2 * math.pi / holes + math.pi / 4
        hat = hat.cut(cyl(0.0065, t / 2, t / 2 + 0.03, math.cos(a) * pcd, math.sin(a) * pcd))
    return [('disc', rotor.union(hat))]


def caliper(R=0.13):
    """Disco no plano z=0 com centro na origem; a pinça fica em +x (raio ≈ 0,11), o lado do pistão em −z (dentro da roda)."""
    k = R / 0.13
    body = box(0.108 * k, 0, -0.034, 0.05, 0.096, 0.026)
    body = safe_fillet(body, '|Z', 0.012)
    bore = cyl(0.027, -0.05, -0.021, 0.106 * k, 0)
    bridge = box(0.142 * k, 0, 0.0, 0.016, 0.088, 0.072)
    bridge = safe_fillet(bridge, '|Y', 0.006)
    fingers = box(0.118 * k, 0, 0.027, 0.04, 0.09, 0.012)
    fingers = safe_fillet(fingers, '|Z', 0.01)
    fingers = fingers.cut(box(0.106 * k, 0, 0.027, 0.026, 0.03, 0.02))
    cal = body.union(bore).union(bridge).union(fingers)
    bleed = cyl_x(0.004, 0.128 * k, 0.146 * k, 0.022, -0.036).union(cq.Workplane('YZ').polygon(6, 0.012).extrude(0.004).translate((0.14 * k, 0.022, -0.036)))
    banjo = cyl_x(0.008, 0.128 * k, 0.14 * k, -0.02, -0.038)
    carrier = cq.Workplane('XY')
    for sy in (1, -1):
        carrier = carrier.union(box(0.142 * k, sy * 0.06, 0.0, 0.014, 0.012, 0.05)).union(box(0.112 * k, sy * 0.06, -0.026, 0.06 * k, 0.012, 0.01))
    pins = cyl(0.007, -0.056, -0.028, 0.094 * k, 0.06).union(cyl(0.007, -0.056, -0.028, 0.094 * k, -0.06))
    boots = cyl(0.0095, -0.044, -0.031, 0.094 * k, 0.06).union(cyl(0.0095, -0.044, -0.031, 0.094 * k, -0.06))
    return [('caliper', cal), ('steel', bleed.union(banjo).union(pins)), ('steelDark', carrier), ('rubber', boots)]


def pads(R=0.13, t=0.022):
    """Duas pastilhas em arco, centradas em +x, uma de cada lado do disco (z=±t/2)."""
    ro, ri, span = R - 0.006, R - 0.056, 0.85
    pts = [(math.cos(-span / 2 + i * span / 12) * ro, math.sin(-span / 2 + i * span / 12) * ro) for i in range(13)]
    pts += [(math.cos(span / 2 - i * span / 12) * ri, math.sin(span / 2 - i * span / 12) * ri) for i in range(13)]
    lining = cq.Workplane('XY').polyline(pts).close().extrude(0.0055)
    plate = cq.Workplane('XY').polyline(pts).close().extrude(0.004)
    lin = lining.translate((0, 0, t / 2 + 0.0005)).union(lining.translate((0, 0, -t / 2 - 0.006)))
    bp = plate.translate((0, 0, t / 2 + 0.006)).union(plate.translate((0, 0, -t / 2 - 0.010)))
    return [('pad', lin), ('steelDark', bp)]


def brake_booster(R=0.115, d=0.12):
    """Servo-freio a vácuo: eixo z, face de trás (corta-fogo) em z=−d/2, frente (cilindro-mestre) em +d/2."""
    rear = lathe([(0.0, -d / 2), (R * 0.45, -d / 2), (R * 0.86, -d / 2 + 0.014), (R, -0.014), (R, 0.0), (0.0, 0.0)])
    front = lathe([(0.0, 0.0), (R, 0.0), (R, 0.012), (R * 0.88, d / 2 - 0.012), (R * 0.42, d / 2), (0.0, d / 2)])
    seam = lathe([(R - 0.004, -0.004), (R + 0.006, -0.003), (R + 0.006, 0.003), (R - 0.004, 0.004)])
    boss = cyl(0.036, d / 2 - 0.004, d / 2 + 0.008)
    shell = rear.union(front).union(seam).union(boss)
    for k in range(3):   # nervuras rasas na casca da frente
        a = math.radians(30 + k * 120)
        shell = shell.union(box(math.cos(a) * R * 0.66, math.sin(a) * R * 0.66, d / 2 - 0.011, 0.05, 0.006, 0.006)
                            .rotate((math.cos(a) * R * 0.66, math.sin(a) * R * 0.66, 0), (math.cos(a) * R * 0.66, math.sin(a) * R * 0.66, 1), math.degrees(a)))
    studs = cq.Workplane('XY')
    for dx in (-0.034, 0.034):
        studs = studs.union(cyl(0.004, d / 2 + 0.008, d / 2 + 0.03, dx, 0.0))
    for k in range(4):
        a = math.radians(45 + k * 90)
        studs = studs.union(cyl(0.004, -d / 2 - 0.028, -d / 2, math.cos(a) * 0.055, math.sin(a) * 0.055))
    grommet = cyl(0.012, d / 2 - 0.014, d / 2 + 0.006, 0.0, R * 0.62).union(cyl(0.007, d / 2 + 0.006, d / 2 + 0.022, 0.0, R * 0.62))
    boot = lathe([(0.0, -d / 2 - 0.035), (0.008, -d / 2 - 0.035), (0.012, -d / 2 - 0.02), (0.022, -d / 2), (0.0, -d / 2)])
    return [('black', shell), ('zinc', studs), ('rubber', grommet.union(boot))]


def cv_boot(R=0.036, r=0.013, L=0.07, n=5):
    """Coifa sanfonada da junta homocinética: eixo z, boca grande (na junta) em z=0 e boca pequena (no eixo) em z=L."""
    z0, z1 = 0.011, L - 0.014
    pts = [(0.0, 0.0), (R, 0.0), (R, z0)]
    for k in range(n):
        a, b = z0 + (z1 - z0) * k / n, z0 + (z1 - z0) * (k + 1) / n
        pk = R - (R - r - 0.008) * (k + 0.5) / n
        vl = R - (R - r - 0.004) * (k + 1) / n - 0.006
        pts += [(pk, (a + b) / 2), (max(vl, r + 0.002), b)]
    pts += [(r + 0.002, z1), (r + 0.002, L), (0.0, L)]
    boot = lathe(pts)
    bands = lathe([(R - 0.002, 0.002), (R + 0.0025, 0.002), (R + 0.0025, 0.008), (R - 0.002, 0.008)]).union(
        lathe([(r, L - 0.009), (r + 0.0045, L - 0.009), (r + 0.0045, L - 0.003), (r, L - 0.003)]))
    return [('rubber', boot), ('steel', bands)]


# ---------- bateria, filtro e reservatórios ----------

def battery():
    """Caixa centrada na origem: 0,175 (x) × 0,19 (y) × 0,24 (z). Polos em (−0,04; topo; ∓0,09): positivo em −z."""
    case = box(0, -0.0125, 0, 0.175, 0.165, 0.24)
    case = safe_fillet(case, '|Y', 0.008)
    foot = box(0, -0.09, 0, 0.183, 0.01, 0.246)
    lid = box(0, 0.079, 0, 0.177, 0.018, 0.242)
    lid = safe_fillet(lid, '|Y', 0.008)
    panel = box(0.012, 0.09, 0, 0.11, 0.006, 0.17)
    panel = safe_fillet(panel, '|Y', 0.01)
    caps = cq.Workplane('XY')
    for k in range(6):
        caps = caps.union(cyl_y(0.008, 0.093, 0.096, 0.045, -0.075 + k * 0.03))
    posts = cq.Workplane('XY')
    for z in (-0.09, 0.09):
        posts = posts.union(cyl_y(0.012, 0.086, 0.092, -0.04, z)).union(
            cq.Workplane('XZ').workplane(offset=-0.092).center(-0.04, z).circle(0.0095).workplane(offset=-0.016).circle(0.0082).loft())
    plus = cyl_y(0.0125, 0.1, 0.106, -0.04, -0.09)
    minus = cyl_y(0.0125, 0.1, 0.106, -0.04, 0.09)
    return [('batt', case.union(foot)), ('black', lid.union(panel).union(caps)), ('zinc', posts), ('red', plus), ('black', minus)]


def oil_filter():
    """Eixo x, centro na origem, 0,085 de comprimento e raio 0,038. A base (que encosta no bloco) fica em −x."""
    can = lathe([(0.0, -0.036), (0.036, -0.036), (0.038, -0.03), (0.038, 0.03), (0.034, 0.04), (0.02, 0.0435), (0.0, 0.0435)])
    flutes = cq.Workplane('XY')
    for k in range(16):
        flutes = flutes.union(box(0.035, 0, 0.034, 0.006, 0.006, 0.012).rotate((0, 0, 0), (0, 0, 1), k * 22.5))
    can = can.cut(flutes)
    base = lathe([(0.0, -0.0425), (0.037, -0.0425), (0.039, -0.038), (0.039, -0.034), (0.0, -0.034)])
    sh = lambda w: w.rotate((0, 0, 0), (0, 1, 0), 90)
    return [('blue', sh(can)), ('steelDark', sh(base))]


def reservoir():
    """Tanque soprado de plástico, caixa unitária centrada (1 × 1 × 1), para ser escalado no tamanho do carro."""
    body = box(0, 0, 0, 1.0, 1.0, 1.0)
    body = safe_fillet(body, '|Y', 0.16)
    body = safe_fillet(body, '>Y or <Y', 0.12)
    seam = box(0, 0.08, 0, 1.03, 0.025, 1.03)
    seam = safe_fillet(seam, '|Y', 0.17)
    marks = box(0.505, 0.22, 0.0, 0.02, 0.018, 0.34).union(box(0.505, -0.18, 0.0, 0.02, 0.018, 0.34))
    tab = box(-0.56, 0.3, 0.0, 0.14, 0.2, 0.3).cut(cyl_x(0.06, -0.7, -0.4, 0.3, 0.0))
    return [('tank', body.union(seam).union(marks).union(tab))]


def res_cap(r=0.022):
    """Tampa com gargalo, centrada em x, z; base do gargalo em y=0. Aletas de pegada em volta."""
    neck = cyl_y(r * 0.8, -0.006, 0.008)
    cap = cq.Workplane('XZ').workplane(offset=-0.008).polygon(20, 2 * r).extrude(-0.018)
    top = cq.Workplane('XZ').workplane(offset=-0.026).circle(r * 0.92).extrude(-0.003)
    return [('tankNeck', neck), ('black', cap.union(top))]


# ---------- escapamento ----------

def catalytic():
    """Eixo y (vertical), centro na origem: corpo de 0,15 com cones até as flanges e um protetor de calor em +x."""
    body = lathe([(0.0, -0.075), (0.06, -0.075), (0.06, 0.075), (0.0, 0.075)])
    cones = lathe([(0.0, 0.075), (0.06, 0.075), (0.024, 0.112), (0.0, 0.112)]).union(
        lathe([(0.0, -0.112), (0.024, -0.112), (0.06, -0.075), (0.0, -0.075)]))
    sh = lambda w: w.rotate((0, 0, 0), (1, 0, 0), -90)
    shield = cq.Workplane('XY').circle(0.068).circle(0.065).extrude(0.14).translate((0, 0, -0.07))
    shield = shield.intersect(box(0.06, 0, 0, 0.12, 0.13, 0.15))
    for z in (-0.04, 0.0, 0.04):
        shield = shield.union(cq.Workplane('XY').circle(0.0695).circle(0.0655).extrude(0.006).translate((0, 0, z - 0.003)).intersect(box(0.06, 0, 0, 0.12, 0.13, 0.15)))
    fl = cq.Workplane('XY')
    for zz in (0.112, -0.118):
        f = cq.Workplane('XY').workplane(offset=zz).polygon(3, 0.075).extrude(0.006)
        f = safe_fillet(f, '|Z', 0.01).cut(cyl(0.0045, zz - 0.01, zz + 0.02, 0.022, 0.0))
        fl = fl.union(f)
    return [('cat', sh(body.union(cones))), ('aluDark', sh(shield)), ('steelDark', sh(fl))]


def muffler():
    """Eixo x, centro na origem, 0,34 de comprimento; seção oval 0,07 (y) × 0,091 (z), costuras enroladas nas pontas."""
    shell = cq.Workplane('YZ').ellipse(0.07, 0.091).extrude(0.33).translate((-0.165, 0, 0))
    shell = safe_fillet(shell, '%ELLIPSE', 0.012)
    seams = cq.Workplane('XY')
    for x in (-0.162, 0.156):
        seams = seams.union(cq.Workplane('YZ').workplane(offset=x).ellipse(0.0725, 0.0935).extrude(0.006))
    band = cq.Workplane('YZ').workplane(offset=-0.004).ellipse(0.0715, 0.0925).ellipse(0.069, 0.09).extrude(0.008)
    return [('exhaust', shell), ('steelDark', seams.union(band))]


# ---------- motor e câmbio (gerados nas coordenadas de cada carro) ----------

def engine_block(c, size, cyl_z, front=1, filter_at=None, iron=False):
    """Bloco em linha de 4 cilindros. c = centro, size = (x, y, z). front = +1 se o lado do escape/filtro for +x."""
    cx, cy, cz = c
    sx, sy, sz = size
    top, bot = cy + sy / 2, cy - sy / 2
    blk = box(cx, cy, cz, sx - 0.016, sy, sz)
    blk = safe_fillet(blk, '|Y', 0.012)
    deck = box(cx, top - 0.008, cz, sx, 0.016, sz + 0.004)
    skirt = box(cx, bot + 0.05, cz, sx + 0.006, 0.1, sz - 0.01)
    skirt = safe_fillet(skirt, '|Y', 0.01)
    b = blk.union(deck).union(skirt)
    for z in cyl_z:
        for sd in (1, -1):
            bul = cyl_y(0.04, top - 0.18, top - 0.016, cx + sd * (sx / 2 - 0.036), z)
            b = b.union(bul)
    for i in range(len(cyl_z) - 1):
        zm = (cyl_z[i] + cyl_z[i + 1]) / 2
        for sd in (1, -1):
            b = b.union(box(cx + sd * (sx / 2 + 0.001), bot + 0.055, zm, 0.012, 0.09, 0.008))
    plugs = cq.Workplane('XY')
    for i in range(len(cyl_z) - 1):
        zm = (cyl_z[i] + cyl_z[i + 1]) / 2
        plugs = plugs.union(cyl_x(0.013, cx - front * (sx / 2 + 0.006) - 0.002, cx - front * (sx / 2 + 0.006) + 0.002, top - 0.09, zm))
    if filter_at:
        fx, fy, fz = filter_at
        face = cx + front * (sx / 2 - 0.008)
        base = fx - front * 0.0425
        if (base - face) * front > 0.002:
            b = b.union(cyl_x(0.04, min(face, base), max(face, base), fy, fz))
    return [('iron' if iron else 'alu', b), ('steel', plugs)]


def gearbox(bell_c, bell_z0, bell_r, case_c, case_s, end_z, diff_c=None, pockets=()):
    """Câmbio transversal: capa da embreagem (cone), caixa com nervuras, tampa do fim com parafusos e torre de engates."""
    bx, by = bell_c
    bell = lathe([(0.0, 0.0), (bell_r, 0.0), (bell_r - 0.003, 0.03), (bell_r - 0.022, 0.13), (0.0, 0.13)]).translate((bx, by, bell_z0))
    flange = lathe([(bell_r - 0.01, 0.0), (bell_r + 0.008, 0.0), (bell_r + 0.008, 0.01), (bell_r - 0.01, 0.01)]).translate((bx, by, bell_z0))
    cx, cy, cz = case_c
    sx, sy, sz = case_s
    case = box(cx, cy, cz, sx, sy, sz)
    case = safe_fillet(case, '|Z', 0.03)
    g = bell.union(flange).union(case)
    for k in range(4):
        y = cy - sy / 2 + (k + 0.6) * sy / 4.4
        g = g.union(box(cx, y, cz, sx + 0.008, 0.008, sz * 0.86))
    for k in range(3):
        z = cz - sz / 2 + (k + 0.5) * sz / 3
        g = g.union(box(cx + sx / 2 + 0.002, cy, z, 0.008, sy * 0.8, 0.008))
    if diff_c:
        dx, dy = diff_c
        g = g.union(cq.Workplane('XY').workplane(offset=cz - sz / 2).center(dx, dy).circle(0.092).extrude(sz))
    for (px_, py_, pr) in pockets:   # bolsões onde o motor de partida encosta na capa
        g = g.cut(cq.Workplane('XY').workplane(offset=bell_z0 + 0.012).center(px_, py_).circle(pr).extrude(cz + sz / 2 - bell_z0))
    cover = box(cx, cy, end_z, sx - 0.05, sy - 0.05, 0.022)
    cover = safe_fillet(cover, '|Z', 0.03)
    tower = box(cx - sx * 0.15, cy + sy / 2 + 0.02, cz + sz * 0.15, 0.07, 0.045, 0.07)
    tower = safe_fillet(tower, '|Y', 0.012)
    bolts = cq.Workplane('XY')
    for k in range(10):
        a = k * 2 * math.pi / 10
        bolts = bolts.union(cq.Workplane('XY').polygon(6, 0.011).extrude(0.006).translate((bx + math.cos(a) * (bell_r + 0.002), by + math.sin(a) * (bell_r + 0.002), bell_z0 + 0.01)))
    for k in range(8):
        a = k * 2 * math.pi / 8
        bolts = bolts.union(cq.Workplane('XY').polygon(6, 0.010).extrude(0.006).translate((cx + math.cos(a) * (sx / 2 - 0.035), cy + math.sin(a) * (sy / 2 - 0.035), end_z + 0.011)))
    return [('alu', g), ('aluDark', cover.union(tower)), ('steel', bolts)]


# ---------- cabeçote, tampa de válvulas, coletores e cárter (nas coordenadas de cada carro) ----------

def cyl_between(r, p0, p1):
    a, b = cq.Vector(*p0), cq.Vector(*p1)
    return cq.Workplane('XY').add(cq.Solid.makeCylinder(r, (b - a).Length, a, (b - a).normalized()))


def swept(pts, r):
    """Tubo de raio r ao longo de uma curva suave pelos pontos (a mesma ideia dos tubos do app)."""
    path = cq.Wire.assembleEdges([cq.Edge.makeSpline([cq.Vector(*p) for p in pts])])
    t = path.tangentAt(0)
    ref = cq.Vector(0, 0, 1) if abs(t.z) < 0.9 else cq.Vector(1, 0, 0)
    plane = cq.Plane(origin=cq.Vector(*pts[0]), xDir=t.cross(ref).normalized(), normal=t)
    return cq.Workplane(plane).circle(r).sweep(cq.Workplane('XY').add(path), transition='round')


def cylinder_head(c, size, cyl_z, ex_dir, port_y, in_y=None, ends=(), wells=(), eye=None):
    """Cabeçote: base (deck) e trilho da tampa mais largos que o miolo, nervuras entre os cilindros nas duas faces,
    ressalto de cada janela de escape, faixa da flange de admissão, ressaltos nas pontas (saída d'água, sensores,
    suportes) e olhal de içamento. ex_dir = +1 se o escape fica em +x."""
    cx, cy, cz = c
    sx, sy, sz = size
    top, bot = cy + sy / 2, cy - sy / 2
    deck = safe_fillet(box(cx, bot + 0.009, cz, sx, 0.018, sz), '|Y', 0.006)
    core = safe_fillet(box(cx, cy, cz, sx - 0.016, sy - 0.004, sz - 0.008), '|Y', 0.01)
    rail = safe_fillet(box(cx, top - 0.008, cz, sx, 0.016, sz), '|Y', 0.008)
    h = deck.union(core).union(rail)
    zs = sorted(cyl_z)
    ribs = [(zs[i] + zs[i + 1]) / 2 for i in range(len(zs) - 1)] + [cz - sz / 2 + 0.02, cz + sz / 2 - 0.02]
    for face in (1, -1):
        xf = cx + face * (sx / 2 - 0.008)
        for zm in ribs:
            h = h.union(box(xf + face * 0.004, cy, zm, 0.008, sy - 0.02, 0.01))
    xe, xi = cx + ex_dir * sx / 2, cx - ex_dir * sx / 2
    for z in zs:
        h = h.union(safe_fillet(box(xe + ex_dir * 0.002, port_y, z, 0.004, 0.046, 0.052), '|X', 0.01))
    span = zs[-1] - zs[0] + 0.08
    h = h.union(safe_fillet(box(xi - ex_dir * 0.002, port_y if in_y is None else in_y, (zs[0] + zs[-1]) / 2, 0.004, 0.056, span), '|X', 0.012))
    for e in ends:
        if e[0] == 'cyl':
            _, x, y, z0, z1, r = e
            h = h.union(cyl(r, z0, z1, x, y))
        else:
            h = h.union(safe_fillet(box(*e[1:]), '|Z', 0.006))
    for (p0, p1, r) in wells:
        h = h.cut(cyl_between(r, p0, p1))
    if eye:
        x, ze, d = eye
        pl = safe_fillet(box(x, top + 0.016, ze + d * 0.003, 0.04, 0.048, 0.006), '|Z', 0.014)
        h = h.union(pl.cut(cyl(0.009, ze - 0.01, ze + 0.02, x, top + 0.026)))
    return [('alu', h)]


def valve_cover(c, size, mat, wells=(), well_r=0.015, towers=(), bosses=(), filler=None, ribs=(), nipples=(), r_top=0.02):
    """Tampa de válvulas: aba de vedação, casco com cantos arredondados, torres e ressaltos dos parafusos,
    poços das bobinas ou cabos, nervuras, gargalo do óleo e bico do respiro."""
    cx, cy, cz = c
    sx, sy, sz = size
    top, bot = cy + sy / 2, cy - sy / 2
    fl = safe_fillet(box(cx, bot + 0.004, cz, sx, 0.008, sz), '|Y', 0.022)
    sh = safe_fillet(box(cx, cy + 0.003, cz, sx - 0.012, sy - 0.006, sz - 0.012), '|Y', 0.02)
    sh = safe_fillet(sh, '>Y', r_top)
    v = fl.union(sh)
    for (x, z) in towers:
        v = v.union(cyl_y(0.0095, bot + 0.006, top - 0.002, x, z))
    for (x, z) in bosses:
        v = v.union(cyl_y(0.009, top - 0.004, top + 0.002, x, z))
    for b in ribs:
        v = v.union(safe_fillet(box(*b), '|Y', min(b[3], b[5]) * 0.45))
    if filler:
        x, z, r, y1 = filler
        v = v.union(cyl_y(r, top - 0.008, y1, x, z))
    for (p0, p1, r) in nipples:
        v = v.union(cyl_between(r, p0, p1))
    for (x, z) in wells:
        v = v.union(cyl_y(well_r + 0.006, top - 0.006, top + 0.003, x, z))
        v = v.cut(cyl_y(well_r, top - 0.05, top + 0.01, x, z))
    return [(mat, v)]


def intake_manifold(runners, r, plenum, flange, mat, neck=None, tb=None, bosses=(), ribs=()):
    """Coletor de admissão: plenum, um duto curvo por cilindro, flange no cabeçote, pescoço e flange da borboleta,
    ressaltos dos bicos e bicos da partida a frio, nervuras do plástico."""
    pc, ps, pf = plenum
    m = safe_fillet(box(*pc, *ps), '|Z', pf)
    for pts in runners:
        m = m.union(swept(pts, r))
    if neck:
        m = m.union(swept(*neck))
    x0, x1, y0, y1, z0, z1 = flange
    m = m.union(safe_fillet(box((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, abs(x1 - x0), y1 - y0, z1 - z0), '|X', 0.01))
    if tb:
        b, sel = tb
        m = m.union(safe_fillet(box(*b), sel, 0.012))
    for (p0, p1, rb) in bosses:
        m = m.union(cyl_between(rb, p0, p1))
    for b in ribs:
        m = m.union(box(*b))
    return [(mat, m)]


def exhaust_manifold(prims, r, flange, ears, collector, outlet, boss=None):
    """Coletor de escape: um tubo por cilindro até o coletor, flange inteiriça com orelhas nos prisioneiros,
    ressalto da sonda lambda e flange de três furos que encosta no catalisador, com prisioneiros e porcas."""
    m = None
    for pts in prims:
        s = swept(pts, r)
        m = s if m is None else m.union(s)
    p0, p1, rc = collector
    m = m.union(cyl_between(rc, p0, p1))
    x0, x1, y0, y1, z0, z1 = flange
    fl = safe_fillet(box((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, abs(x1 - x0), y1 - y0, z1 - z0), '|X', 0.008)
    for (a, b, re) in ears:
        fl = fl.union(cyl_between(re, a, b))
    m = m.union(fl)
    if boss:
        bp0, bp1, br = boss
        m = m.union(cyl_between(br, bp0, bp1))
    ox, oy, oz, od, flip = outlet
    a0 = math.pi if flip else 0.0
    tri = [(ox + math.cos(a0 + k * 2 * math.pi / 3) * od / 2, oz + math.sin(a0 + k * 2 * math.pi / 3) * od / 2) for k in range(3)]
    of = cq.Workplane('XZ').workplane(offset=-oy).polyline(tri).close().extrude(-0.008)
    m = m.union(safe_fillet(of, '|Y', 0.012))
    studs = cq.Workplane('XY')
    for (tx, tz) in tri:
        sx_, sz_ = ox + (tx - ox) * 0.62, oz + (tz - oz) * 0.62
        studs = studs.union(cyl_y(0.004, oy - 0.012, oy + 0.016, sx_, sz_)).union(
            cq.Workplane('XZ').workplane(offset=-(oy + 0.008)).center(sx_, sz_).polygon(6, 0.012).extrude(-0.006))
    return [('exhaust', m), ('steel', studs)]


def heat_shield(x_in, x_out, y_top, y_bot, z0, z1, ribs=(), bend=0.018, t=0.0015, tabs=()):
    """Protetor de calor de chapa: tampo sobre o coletor e aba descendo do lado de fora, com dobra arredondada,
    frisos estampados e as orelhas de fixação perto do cabeçote."""
    d = 1 if x_out > x_in else -1

    def sheet(to, ti, za, zb):
        cxa, cya = x_out - d * bend, y_top - bend
        ro, ri = bend + to, bend - ti
        k = 0.70710678
        w = (cq.Workplane('XY').workplane(offset=za)
             .moveTo(x_in, y_top + to).lineTo(cxa, y_top + to)
             .threePointArc((cxa + d * ro * k, cya + ro * k), (x_out + d * to, cya))
             .lineTo(x_out + d * to, y_bot).lineTo(x_out - d * ti, y_bot).lineTo(x_out - d * ti, cya)
             .threePointArc((cxa + d * ri * k, cya + ri * k), (cxa, y_top - ti))
             .lineTo(x_in, y_top - ti).close())
        return w.extrude(zb - za)
    s = sheet(t / 2, t / 2, z0, z1)
    for zr in ribs:
        s = s.union(sheet(t / 2 + 0.0022, t / 2, zr - 0.005, zr + 0.005))
    for zt in tabs:
        s = s.union(box(x_in + d * 0.004, y_top - 0.011, zt, 0.008, 0.022, 0.018).cut(cyl_x(0.0035, x_in - 0.01, x_in + 0.02, y_top - 0.014, zt)))
    return [('aluDark', s)]


def oil_pan(c, size, depth, mat, taper=6.0, flange=(0.01, 0.01, 0.008), sump=None, drain=None, beads=(), ribs=0):
    """Cárter: aba de vedação, corpo com inclinação de molde (e poço mais fundo onde fica o bujão), frisos
    estampados (chapa) ou nervuras (alumínio fundido) e o ressalto do bujão."""
    cx, ytop, cz = c
    sx, sz = size
    fwx, fwz, ft = flange
    p = safe_fillet(box(cx, ytop - ft / 2, cz, sx + 2 * fwx, ft, sz + 2 * fwz), '|Y', 0.014)
    tg = math.tan(math.radians(taper))

    def tapered(xc, zc, wx, wz, dep):
        pl = cq.Plane(origin=(xc, ytop - ft + 0.001, zc), xDir=(1, 0, 0), normal=(0, -1, 0))
        w = cq.Workplane(pl).rect(wx, wz).extrude(dep - ft + 0.001, taper=taper)
        return safe_fillet(w, 'not >Y', 0.008)
    shallow = depth if not sump else sump[2]
    p = p.union(tapered(cx, cz, sx, sz, shallow))
    if sump:   # o poço é arredondado antes de juntar (o arredondamento da peça inteira falha na emenda)
        za, zb, _ = sump
        p = p.union(tapered(cx, (za + zb) / 2, sx - 2 * tg * 0.01, zb - za, depth))
    for yb in beads:   # friso em volta, acompanhando a inclinação
        sh = (ytop - ft - yb) * tg
        ring = box(cx, yb, cz, sx - 2 * sh + 0.006, 0.006, sz - 2 * sh + 0.006).cut(box(cx, yb, cz, sx - 2 * sh - 0.004, 0.01, sz - 2 * sh - 0.004))
        p = p.union(ring)
    if ribs:
        hh = min(depth, shallow) * 0.8
        sh = (ft + hh / 2) * tg
        for k in range(ribs):
            z = cz - sz / 2 + (k + 0.5) * sz / ribs
            for sd in (1, -1):
                p = p.union(box(cx + sd * (sx / 2 - sh + 0.002), ytop - ft - hh / 2, z, 0.006, hh, 0.006))
    if drain:
        dx, dz = drain
        yb = ytop - depth
        p = p.union(cyl_y(0.016, yb - 0.004, yb + 0.008, dx, dz))
    return [(mat, p)]


# ---------- suspensão e direção (nas coordenadas de cada carro, lado esquerdo; o direito é espelhado no app) ----------

def frame(origin, axis, ref=(1, 0, 0)):
    """Plano com y local = eixo, x local o mais perto possível de ref e z = x × eixo."""
    a = cq.Vector(*axis).normalized()
    r = cq.Vector(*ref)
    if abs(r.dot(a)) > 0.95:
        r = cq.Vector(0, 0, 1)
    x = (r - a * r.dot(a)).normalized()
    return cq.Plane(origin=cq.Vector(*origin), xDir=x, normal=x.cross(a))


def lathe_at(pts, origin, axis, ref=(1, 0, 0)):
    """Revolução de pts = [(raio, altura)] em torno do eixo que sai de origin na direção axis."""
    return cq.Workplane(frame(origin, axis, ref)).polyline(_clean(pts)).close().revolve(360, (0, 0, 0), (0, 1, 0))


def lbox(pl, c, size):
    """Caixa no sistema local do plano (x, y = eixo, z)."""
    return cq.Workplane(pl).transformed(offset=c).box(*size)


def bar(p0, p1, w, h, up=(0, 1, 0), r=0.005):
    """Barra de seção retangular de cantos arredondados entre dois pontos; h na direção de up, w na transversal."""
    A = cq.Vector(*p1) - cq.Vector(*p0)
    a = A.normalized()
    u = cq.Vector(*up)
    u = (u - a * u.dot(a)).normalized()
    pl = cq.Plane(origin=cq.Vector(*p0), xDir=a.cross(u), normal=a)
    b = cq.Workplane(pl).rect(w, h).extrude(A.Length)
    try:
        b = b.edges(cq.selectors.ParallelDirSelector(a)).fillet(min(r, w * 0.45, h * 0.45))
    except Exception:
        pass
    return b


def plate3(pts, t):
    """Chapa plana pelo polígono de pontos 3D (o plano sai dos três primeiros), com espessura t."""
    P = [cq.Vector(*p) for p in pts]
    n = (P[1] - P[0]).cross(P[2] - P[0]).normalized()
    x = (P[1] - P[0]).normalized()
    y = n.cross(x)
    pl = cq.Plane(origin=P[0], xDir=x, normal=n)
    loc = [((p - P[0]).dot(x), (p - P[0]).dot(y)) for p in P]
    return cq.Workplane(pl).polyline(loc).close().extrude(t / 2, both=True)


def bellows(ra, rb, h0, h1, n, amp=0.004):
    """Perfil de sanfona (raio ra em h0 até rb em h1, n gomos) para lathe_at; fecha no eixo."""
    pts = [(0.0, h0), (ra, h0)]
    for k in range(n):
        t0, t1 = k / n, (k + 1) / n
        rp = ra + (rb - ra) * (t0 + t1) / 2
        pts += [(rp + amp, h0 + (h1 - h0) * (t0 + t1) / 2), (ra + (rb - ra) * t1, h0 + (h1 - h0) * t1)]
    pts += [(0.0, h1)]
    return pts


def strut(bot, top, r=0.026, body_to=0.53, seat_at=0.445, seat_r=0.085, top_seat=0.925, top_r=0.075, rod_r=0.011,
          bolts_y=(0.41, 0.45), link=None):
    """Amortecedor McPherson: tubo com fundo, garra de dois parafusos que abraça a manga (para fora), suporte da
    bieleta, prato inferior da mola com aba, coifa sanfonada sobre a haste, prato superior e a haste cromada."""
    B, T = cq.Vector(*bot), cq.Vector(*top)
    A = T - B
    L, a = A.Length, A.normalized()
    pl = frame(bot, A)
    xa, za = pl.xDir, pl.zDir
    h = body_to * L
    body = lathe_at([(0.0, -0.006), (r - 0.005, -0.006), (r, 0.0), (r, h), (r - 0.005, h + 0.006), (rod_r + 0.003, h + 0.009), (0.0, h + 0.009)], bot, A)
    zl = 0.032
    loc = [(yb - B.y - zl * za.y) / a.y for yb in bolts_y]
    y0, y1 = min(loc) - 0.022, max(loc) + 0.024
    for sx in (1, -1):
        body = body.union(lbox(pl, (sx * 0.0215, (y0 + y1) / 2, 0.024), (0.005, y1 - y0, 0.05)))
    for ly in loc:
        c = B + a * ly + za * zl
        body = body.union(cyl_between(0.009, (c - xa * 0.027).toTuple(), (c + xa * 0.027).toTuple()))
    hs = seat_at * L
    body = body.union(lathe_at([(r - 0.002, hs - 0.012), (r + 0.012, hs - 0.012), (seat_r - 0.008, hs - 0.004), (seat_r, hs + 0.006),
                                (seat_r - 0.005, hs + 0.008), (seat_r - 0.011, hs + 0.002), (r - 0.002, hs + 0.002)], bot, A))
    if link:   # aba da bieleta, atrás do tubo; o pino da bieleta passa por ela
        P = cq.Vector(*link) - B
        lx, ly, lz = P.dot(xa), P.dot(a), P.dot(za)
        body = body.union(lbox(pl, (lx / 2, ly, lz - 0.026), (abs(lx) + 0.024, 0.032, 0.005)))
    ht = top_seat * L
    seat2 = lathe_at([(rod_r + 0.004, ht - 0.004), (top_r - 0.006, ht - 0.004), (top_r, ht + 0.002), (top_r - 0.004, ht + 0.006), (rod_r + 0.004, ht + 0.006)], bot, A)
    boot = lathe_at(bellows(0.022, 0.017, h + 0.006, ht - 0.03, 9, 0.003), bot, A)
    rod = lathe_at([(0.0, h), (rod_r, h), (rod_r, L), (0.0, L)], bot, A)
    return [('steelDark', body.union(seat2)), ('rubber', boot), ('chrome', rod)]


def strut_mount(bot, top, studs, f0=0.93, f1=0.985, r=0.06):
    """Coxim superior: borracha, rolamento, chapa de apoio com os prisioneiros (pontos dados) e a porca da haste."""
    B, T = cq.Vector(*bot), cq.Vector(*top)
    A = T - B
    L = A.Length
    h0, h1 = f0 * L, f1 * L
    rub = lathe_at([(0.0, h0), (r - 0.01, h0), (r, h0 + 0.01), (r - 0.004, h1 - 0.006), (0.0, h1 - 0.006)], bot, A)
    ring = lathe_at([(r * 0.62, h0 + 0.012), (r * 0.86, h0 + 0.012), (r * 0.86, h0 + 0.022), (r * 0.62, h0 + 0.022)], bot, A)
    plate = lathe_at([(0.0, h1 - 0.007), (r + 0.006, h1 - 0.007), (r + 0.006, h1 - 0.001), (0.0, h1 - 0.001)], bot, A)
    nut = cq.Workplane(frame(top, A)).transformed(offset=(0, h1 - L - 0.001, 0), rotate=(-90, 0, 0)).polygon(6, 0.022).extrude(0.012)
    st = cq.Workplane('XY')
    for p in studs:
        q = cq.Vector(*p)
        st = st.union(cyl_y(0.005, q.y - 0.03, q.y + 0.004, q.x, q.z))
    return [('rubber', rub), ('steel', ring.union(st)), ('steelDark', plate.union(nut))]


def knuckle(wc, z0, z1, upper, bj, sa0, sa1, ears=(), abs_boss=None, bore=0.024, r=0.05):
    """Manga de eixo (fundida): alojamento do rolamento, braço que sobe até a garra do amortecedor, braço até o pivô
    da bandeja (com o parafuso de aperto), braço de direção com o olhal do terminal, orelhas do suporte da pinça
    e ressalto do sensor do ABS."""
    wx, wy = wc
    zm = (z0 + z1) / 2
    k = cyl(r, z0, z1, wx, wy)
    k = k.union(bar((wx, wy + 0.02, zm), upper, 0.034, 0.028, up=(0, 0, 1), r=0.008))
    bx, by, bz = bj
    k = k.union(bar((wx, wy - 0.02, zm), (bx, by + 0.055, bz), 0.04, 0.03, up=(0, 0, 1), r=0.008))
    k = k.union(cyl_y(0.021, by + 0.03, by + 0.062, bx, bz))
    k = k.union(cyl_x(0.008, bx - 0.026, bx + 0.026, by + 0.046, bz + 0.018))
    k = k.union(bar(sa0, sa1, 0.03, 0.022, up=(0, 1, 0), r=0.007))
    ex, ey, ez = sa1
    k = k.union(cyl_y(0.016, ey - 0.015, ey + 0.015, ex, ez).cut(cyl_y(0.0065, ey - 0.03, ey + 0.03, ex, ez)))
    for (x, y, za, zb) in ears:
        k = k.union(cyl(0.013, za, zb, x, y)).union(bar((wx, wy, (za + zb) / 2), (x, y, (za + zb) / 2), 0.026, 0.018, up=(0, 0, 1), r=0.006))
    if abs_boss:
        x, y, z = abs_boss
        k = k.union(cyl_y(0.012, y - 0.016, y + 0.008, x, z)).union(bar((wx, wy, z), (x, y - 0.008, z), 0.02, 0.016, up=(0, 0, 1), r=0.005))
    k = k.cut(cyl(bore, z0 - 0.01, z1 + 0.01, wx, wy))
    return [('iron', k)]


def lower_arm(bj, F, R, w=0.045, h=0.022):
    """Bandeja de chapa estampada em L: duas pernas de seção fechada, alma com furo de alívio, caixa do pivô com
    coifa e pino, bucha dianteira (eixo x) em olhal e bucha traseira vertical em copo."""
    arm = bar(bj, F, w, h).union(bar(bj, R, w, h))
    c = [(bj[i] * 0.5 + F[i] * 0.25 + R[i] * 0.25) for i in range(3)]
    web = plate3([[bj[i] * 0.78 + F[i] * 0.22 for i in range(3)], [F[i] * 0.86 + bj[i] * 0.14 for i in range(3)],
                  [R[i] * 0.86 + bj[i] * 0.14 for i in range(3)], [bj[i] * 0.78 + R[i] * 0.22 for i in range(3)]], 0.004)
    web = web.cut(cyl_y(0.024, c[1] - 0.05, c[1] + 0.05, c[0], c[2]))
    bx, by, bz = bj
    house = cyl_y(0.027, by - 0.012, by + 0.012, bx, bz)
    arm = arm.union(web).union(house)
    fx, fy, fz = F
    eye = cyl_x(0.027, fx - 0.026, fx + 0.026, fy, fz)
    rx, ry, rz = R
    cup = cyl_y(0.037, ry - 0.012, ry + 0.012, rx, rz)
    arm = arm.union(eye).union(cup)
    boot = cq.Workplane('XZ').workplane(offset=-(by + 0.012)).center(bx, bz).circle(0.022).workplane(offset=-0.022).circle(0.011).loft()
    rub = cyl_x(0.02, fx - 0.029, fx + 0.029, fy, fz).union(cyl_y(0.033, ry - 0.024, ry + 0.023, rx, rz)).union(boot)
    pin = cyl_x(0.009, fx - 0.035, fx + 0.035, fy, fz).union(cyl_y(0.009, ry - 0.03, ry + 0.03, rx, rz)).union(cyl_y(0.008, by + 0.03, by + 0.05, bx, bz))
    return [('steelDark', arm), ('rubber', rub), ('steel', pin)]


def stab_link(p0, p1, r=0.006):
    """Bieleta da barra estabilizadora: haste, as duas caixas de articulação com coifa e os pinos."""
    P0, P1 = cq.Vector(*p0), cq.Vector(*p1)
    a = (P1 - P0).normalized()
    e0, e1 = P0 + a * 0.012, P1 - a * 0.012
    rod = cyl_between(r, e0.toTuple(), e1.toTuple())
    hs = cyl(0.013, p0[2] - 0.011, p0[2] + 0.011, p0[0], p0[1]).union(cyl(0.013, p1[2] - 0.011, p1[2] + 0.011, p1[0], p1[1]))
    boots = cyl(0.01, p0[2] - 0.02, p0[2] - 0.011, p0[0], p0[1]).union(cyl(0.01, p1[2] - 0.02, p1[2] - 0.011, p1[0], p1[1]))
    pins = cyl(0.005, p0[2] - 0.034, p0[2] - 0.02, p0[0], p0[1]).union(cyl(0.005, p1[2] - 0.034, p1[2] - 0.02, p1[0], p1[1]))
    eye = cyl(0.016, p0[2] - 0.04, p0[2] - 0.032, p0[0], p0[1])
    return [('steel', rod.union(pins)), ('steelDark', hs.union(eye)), ('rubber', boots)]


def steering_rack(c, half, pinion_z, clamps, boot, r=0.026, hyd=None, valve=None):
    """Caixa de direção: tubo da cremalheira com as pontas reforçadas, torre do pinhão com o eixo estriado, corpo da
    válvula (hidráulica) ou do pinhão, cilindro de assistência, abraçadeiras de fixação com coxim e as coifas."""
    cx, cy = c
    h = cyl(r, -half, half, cx, cy)
    for sd in (1, -1):
        h = h.union(cyl(r + 0.005, sd * half - (0.025 if sd > 0 else 0), sd * half + (0 if sd > 0 else 0.025), cx, cy))
    tw = cyl_y(0.03, cy - 0.005, cy + 0.085, cx, pinion_z).union(cyl_y(0.034, cy + 0.07, cy + 0.085, cx, pinion_z))
    body = safe_fillet(box(cx, cy + 0.015, pinion_z - 0.055, 0.05, 0.04, 0.07), '|Z', 0.01)
    if valve:
        body = body.union(cyl_y(0.024, cy + 0.03, cy + 0.06, cx, pinion_z - 0.06))
    h = h.union(tw).union(body)
    if hyd:
        z0, z1, rh = hyd
        h = h.union(cyl(rh, z0, z1, cx, cy)).union(cyl(rh + 0.004, z0, z0 + 0.012, cx, cy)).union(cyl(rh + 0.004, z1 - 0.012, z1, cx, cy))
    shaft = cyl_y(0.011, cy + 0.085, cy + 0.11, cx, pinion_z)
    clamp_m = cq.Workplane('XY')
    rub = cq.Workplane('XY')
    for z in clamps:
        band = cq.Workplane('XY').workplane(offset=z - 0.02).center(cx, cy).circle(r + 0.012).circle(r + 0.006).extrude(0.04).intersect(box(cx, cy + 0.02, z, 0.1, 0.05, 0.05))
        ears = box(cx, cy + 0.028, z, 0.09, 0.006, 0.04)
        clamp_m = clamp_m.union(band).union(ears)
        rub = rub.union(cyl(r + 0.006, z - 0.018, z + 0.018, cx, cy).cut(cyl(r, z - 0.03, z + 0.03, cx, cy)))
    b0, b1 = boot
    for sd in (1, -1):
        prof = bellows(r + 0.004, 0.012, 0.0, b1 - b0, 7, 0.005)
        rub = rub.union(lathe_at(prof, (cx, cy, sd * b0), (0, 0, sd)))
    return [('alu', h), ('steel', shaft), ('steelDark', clamp_m), ('rubber', rub)]


def shock(bot, top, r=0.024, body_to=0.55, rod_r=0.0095, cover=True, eye_bot=None, plate_top=None, seats=None, stud=0.0):
    """Amortecedor traseiro: tubo, guarda-pó sobre a haste, haste cromada, fixação de baixo (olhal com bucha ou
    pino com coxins) e chapa de cima com os furos dos parafusos."""
    B, T = cq.Vector(*bot), cq.Vector(*top)
    A = T - B
    L = A.Length
    h = body_to * L
    body = lathe_at([(0.0, 0.0), (r - 0.004, 0.0), (r, 0.006), (r, h), (r - 0.004, h + 0.005), (0.0, h + 0.005)], bot, A)
    rod = lathe_at([(0.0, h), (rod_r, h), (rod_r, L), (0.0, L)], bot, A)
    if stud:   # pino roscado na ponta de cima, com a arruela
        rod = rod.union(lathe_at([(0.0, L), (0.006, L), (0.006, L + stud), (0.0, L + stud)], bot, A))
    parts = [('steelDark', body), ('chrome', rod)]
    if cover:
        parts.append(('black', lathe_at([(r + 0.002, h + 0.02), (r + 0.006, h + 0.02), (r + 0.006, L * 0.9), (rod_r + 0.003, L * 0.9 + 0.01), (rod_r + 0.003, L * 0.9 + 0.004), (r + 0.002, L * 0.9 - 0.004)], bot, A)))
    rub = cq.Workplane('XY')
    if eye_bot == 'z':
        parts[0] = ('steelDark', body.union(cyl(0.017, bot[2] - 0.022, bot[2] + 0.022, bot[0], bot[1])))
        rub = rub.union(cyl(0.012, bot[2] - 0.024, bot[2] + 0.024, bot[0], bot[1]))
    elif eye_bot == 'y':
        rub = rub.union(cyl_y(0.02, bot[1] - 0.024, bot[1] - 0.004, bot[0], bot[2]))
    if seats:   # amortecedor com a mola em volta (pratos de baixo e de cima)
        (f0, r0), (f1, r1) = seats
        parts.append(('steelDark', lathe_at([(r, f0 * L - 0.006), (r0, f0 * L - 0.002), (r0, f0 * L + 0.004), (r, f0 * L + 0.002)], bot, A)
                      .union(lathe_at([(rod_r + 0.004, f1 * L - 0.003), (r1, f1 * L - 0.003), (r1, f1 * L + 0.005), (rod_r + 0.004, f1 * L + 0.005)], bot, A))))
    if plate_top:
        (px, py, pz), (sx, sz) = plate_top
        parts.append(('steel', safe_fillet(box(px, py, pz, sx, 0.006, sz), '|Y', 0.006)))
    parts.append(('rubber', rub.union(lathe_at([(0.0, L - 0.018), (0.018, L - 0.018), (0.018, L - 0.006), (0.0, L - 0.006)], bot, A))))
    return parts


def torsion_beam(bu, hub, beam, spring, shock_b, half, arm=(0.045, 0.07)):
    """Eixo traseiro de torção: braços longitudinais de seção caixão com olhal da bucha na frente, travessa em U
    aberto para baixo (é ela que torce), pratos das molas, suportes de baixo dos amortecedores e flanges dos cubos."""
    bx, by = beam
    w, hh, t = 0.09, 0.07, 0.004
    U = [(bx - w / 2, by - hh / 2), (bx - w / 2, by + hh / 2), (bx + w / 2, by + hh / 2), (bx + w / 2, by - hh / 2),
         (bx + w / 2 - t, by - hh / 2), (bx + w / 2 - t, by + hh / 2 - t), (bx - w / 2 + t, by + hh / 2 - t), (bx - w / 2 + t, by - hh / 2)]
    m = cq.Workplane('XY').workplane(offset=-half).polyline(U).close().extrude(2 * half)
    for sd in (1, -1):
        B = (bu[0], bu[1], sd * bu[2])
        H = (hub[0], hub[1], sd * hub[2])
        m = m.union(bar(B, H, arm[0], arm[1], r=0.012))
        m = m.union(cyl(0.047, sd * bu[2] - 0.025, sd * bu[2] + 0.025, bu[0], bu[1]))
        m = m.union(safe_fillet(box(hub[0], hub[1], sd * (hub[2] - 0.022), 0.13, 0.13, 0.008), '|Z', 0.03))
        sx, sy, sz = spring
        f = (sx - bu[0]) / (hub[0] - bu[0])   # onde o braço passa na altura do prato
        za = bu[2] + (hub[2] - bu[2]) * f
        m = m.union(lathe([(0.0, -0.004), (0.068, -0.004), (0.072, 0.006), (0.066, 0.008), (0.062, 0.002), (0.0, 0.002)]).rotate((0, 0, 0), (1, 0, 0), -90).translate((sx, sy, sd * sz)))
        m = m.union(safe_fillet(box(sx, sy - 0.008, sd * (sz + za) / 2, 0.11, 0.012, za - sz), '|Y', 0.02))
        hx, hy, hz = shock_b
        zf = hub[2] - 0.022
        m = m.union(safe_fillet(box(hx, hy - 0.014, sd * hz, 0.05, 0.006, 0.05), '|Y', 0.01))
        m = m.union(box(hx + 0.02, (hy - 0.014 + hub[1]) / 2, sd * (hz - 0.022 + zf) / 2, 0.006, abs(hub[1] - hy + 0.014) + 0.01, zf - hz + 0.022))
    return [('steelDark', m)]


def trailing_arm(pivot, z0, z1, hub, hub_z, shock_b, shock_z, r=0.056):
    """Braço arrastado (206): bossa do pivô em volta da travessa, braço fundido até o cubo, ponta de eixo e a
    orelha de baixo do amortecedor."""
    px, py = pivot
    zm = (z0 + z1) / 2
    m = cyl(r, z0, z1, px, py)
    m = m.union(bar((px, py - 0.01, zm), (hub[0], hub[1], hub_z), 0.05, 0.075, r=0.014))
    m = m.union(cyl(0.036, hub_z - 0.035, hub_z + 0.004, hub[0], hub[1]))
    sx, sy = shock_b
    m = m.union(bar((hub[0], hub[1] - 0.02, hub_z - 0.03), (sx, sy, shock_z - 0.015), 0.03, 0.03, up=(0, 0, 1), r=0.006))
    m = m.union(cyl(0.018, shock_z - 0.03, shock_z + 0.008, sx, sy))
    return [('steelDark', m)]


def rear_knuckle(wc, z0, z1, bosses, bore=0.02):
    """Manga traseira (Civic): alojamento do cubo e os ressaltos dos braços (pontos com eixo e raio), ligados por nervuras."""
    wx, wy = wc
    zm = (z0 + z1) / 2
    k = cyl(0.045, z0, z1, wx, wy)
    for (p, axis, rb, ln) in bosses:
        x, y, z = p
        k = k.union(bar((wx, wy, zm), (x, y, z), 0.03, 0.026, up=(0, 0, 1), r=0.007))
        if axis == 'x':
            k = k.union(cyl_x(rb, x - ln / 2, x + ln / 2, y, z))
        elif axis == 'y':
            k = k.union(cyl_y(rb, y - ln / 2, y + ln / 2, x, z))
        else:
            k = k.union(cyl(rb, z - ln / 2, z + ln / 2, x, y))
    return [('iron', k.cut(cyl(bore, z0 - 0.01, z1 + 0.01, wx, wy)))]


def link_arm(p0, p1, w, h, eyes, up=(0, 1, 0)):
    """Braço de ligação com olhal de bucha em cada ponta; eyes = [(ponto, eixo, raio externo, comprimento)]."""
    m = bar(p0, p1, w, h, up=up, r=0.006)
    rub = cq.Workplane('XY')
    for (p, axis, ro, ln) in eyes:
        x, y, z = p
        mk = {'x': lambda rr, l: cyl_x(rr, x - l / 2, x + l / 2, y, z), 'y': lambda rr, l: cyl_y(rr, y - l / 2, y + l / 2, x, z),
              'z': lambda rr, l: cyl(rr, z - l / 2, z + l / 2, x, y)}[axis]
        m = m.union(mk(ro, ln))
        rub = rub.union(mk(ro - 0.006, ln + 0.006))
    return [('steelDark', m), ('rubber', rub)]
