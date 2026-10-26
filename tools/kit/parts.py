"""Peças em CAD (CadQuery) para o app: cada função devolve uma lista de (material, sólido).

Medidas em metros. Cada peça tem um sistema de coordenadas próprio, descrito na função; o carro só posiciona,
gira e escala (ver kit() em src/engine/engine.js). Os nomes de material são as chaves de MAT no motor 3D.
As formas seguem o tipo de peça (aletas, orelhas de fixação, canais da polia, aletas de ventilação do disco),
não o desenho de um fabricante.
"""
import math
import cadquery as cq


def lathe(pts):
    """Sólido de revolução em torno do eixo z; pts = [(raio, z), ...] fechando o perfil (pontos repetidos são ignorados)."""
    q = [pts[0]]
    for p in pts[1:]:
        if abs(p[0] - q[-1][0]) > 1e-7 or abs(p[1] - q[-1][1]) > 1e-7:
            q.append(p)
    if len(q) > 2 and abs(q[0][0] - q[-1][0]) < 1e-7 and abs(q[0][1] - q[-1][1]) < 1e-7:
        q.pop()
    return cq.Workplane('XZ').polyline(q).close().revolve(360, (0, 0, 0), (0, 1, 0))


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
