/* ===== Nissan Tiida 1.8 S 2010/2011 (C11): geometria 3D =====
   Coordenadas do carro: x para a frente, y para cima, z para a esquerda (lado do motorista). Medidas em metros.
   Hatch 4,295 × 1,695 × 1,535 m, entre-eixos 2,60 m, pneus 185/65 R15. Motor MR18DE transversal: corrente à direita (−z),
   câmbio à esquerda (+z), admissão virada para a frente e escape para o corta-fogo. */
(window.CAR_GEO = window.CAR_GEO || {})['tiida-c11'] = function (K) {
const { THREE, V, TAU, UPY, S, MAT, std, phy, reg, tag, place, add, kit, pivotOf, box, cyl, tube, route, rod, sph, spring, ribbon, beltPath, plateFromHull,
  gBox, gCyl, gLathe, gTorus, gTube, curveOf, setBar, mono, makeBody, art, ANIM, WHEELS, ROUTES, lerp3 } = K;
const WB = 2.60, XFA = WB / 2, XRA = -WB / 2;      // eixos dianteiro e traseiro (x)
const TRK = 0.74, WR = 0.311, WY = 0.305;          // bitola/2, raio do pneu 185/65 R15, altura do centro da roda
MAT.chromeTrim = std({ color: 0xd9dde0, roughness: 0.12, metalness: 1 });
MAT.acPipe = std({ color: 0xa9adb2, roughness: 0.3, metalness: 0.85 });
MAT.airbag = std({ color: 0xd8d2c4, roughness: 0.9 });
MAT.lensWhite = phy({ color: 0xeef0f2, roughness: 0.08, transparent: true, opacity: 0.9, clearcoat: 1 });
MAT.lampHousing = std({ color: 0x3a3f45, roughness: 0.25, metalness: 0.9 });
MAT.chain = std({ color: 0x6d7278, roughness: 0.45, metalness: 0.85 });
MAT.covers = std({ color: 0x2b2e32, roughness: 0.55, metalness: 0.3 });

/* ---------- carroceria: hatch de 5 portas, teto alto e tampa traseira quase de pé ---------- */
const BK = {
  zMax: mono([[-2.065, .50], [-2.058, .60], [-2.045, .68], [-2.02, .74], [-1.98, .785], [-1.92, .815], [-1.80, .835], [-1.6, .843], [-1.3, .8475], [0, .8475], [1.5, .845], [1.75, .835], [1.95, .81], [2.08, .77], [2.16, .71], [2.21, .61], [2.23, .50]]),
  yFloor: mono([[-2.065, .36], [-2.03, .31], [-1.90, .28], [-1.65, .25], [-1.2, .205], [0, .185], [0.9, .19], [1.5, .20], [1.9, .215], [2.12, .245], [2.23, .30]]),
  yFC: mono([[-2.065, .36], [-1.95, .37], [-1.70, .37], [-1.48, .34], [-1.10, .33], [-0.90, .30], [-0.40, .30], [-0.28, .24], [0.70, .24], [0.95, .22], [1.5, .20], [1.9, .215], [2.12, .245], [2.23, .30]]),
  yBelt: mono([[-2.065, .60], [-2.05, .63], [-2.035, .65], [-2.0, .80], [-1.96, .93], [-1.92, 1.0], [-1.86, 1.04], [-1.78, 1.06], [-1.6, 1.07], [-1.3, 1.07], [-1.0, 1.06], [-0.4, 1.045], [0, 1.03], [0.5, 1.005], [0.9, .985], [1.1, .955], [1.5, .89], [1.8, .845], [2.0, .80], [2.12, .76], [2.20, .70], [2.23, .62]]),
  yEdge: mono([[-2.065, .61], [-2.05, .645], [-2.035, .665], [-2.02, .76], [-2.0, .87], [-1.98, .965], [-1.96, 1.04], [-1.92, 1.15], [-1.86, 1.28], [-1.80, 1.37], [-1.74, 1.43], [-1.72, 1.445], [-1.6, 1.47], [-1.3, 1.485], [-1.0, 1.49], [-0.4, 1.495], [0.0, 1.49], [0.22, 1.46], [0.45, 1.34], [0.70, 1.17], [0.93, 1.035], [1.2, .99], [1.5, .935], [1.8, .875], [2.0, .83], [2.12, .785], [2.20, .715], [2.23, .645]]),
  yTop: mono([[-2.065, .615], [-2.05, .65], [-2.035, .67], [-2.02, .77], [-2.0, .88], [-1.98, .975], [-1.96, 1.045], [-1.92, 1.165], [-1.86, 1.30], [-1.80, 1.40], [-1.74, 1.46], [-1.72, 1.475], [-1.6, 1.505], [-1.3, 1.525], [-1.0, 1.53], [-0.4, 1.535], [0.0, 1.53], [0.22, 1.49], [0.45, 1.37], [0.70, 1.20], [0.93, 1.065], [1.2, 1.01], [1.5, .955], [1.8, .895], [2.0, .845], [2.12, .80], [2.20, .72], [2.23, .64]]),
  zEdge: mono([[-2.065, .44], [-2.05, .56], [-2.03, .64], [-2.0, .69], [-1.96, .71], [-1.8, .70], [-1.4, .675], [-1.0, .665], [0.0, .665], [0.22, .67], [0.5, .72], [0.93, .77], [1.2, .765], [1.5, .745], [1.8, .70], [2.0, .65], [2.12, .59], [2.20, .51], [2.23, .44]])
};
const ROWS = [0.27, 0.33, 0.42, 0.50, 0.60, 0.645, 0.72, 0.80, 0.88, 0.95];
const UPF = [0.35, 0.7, 1.0];
const TOPU = [0.975, 0.9, 0.72, 0.48, 0.24, 0];
/* divisões (x) */
const XH = 2.06, XC = 1.06, XA = 0.95, XWB = 0.93, XDF = 0.86, XWT = 0.22, XB = -0.12, XBP = -0.07, XD2 = -0.90, XRG = -0.84, XQ2 = -0.95, XQ = -1.30,
  XT = -1.72, XT2 = -1.74, XG = -1.96, XLF = -1.90, XL = -2.035, XHL = 1.92, XN = 2.195;
const B = makeBody({ XF: 2.23, XR: -2.065, RA: 0.385, ZN: 0.56, XFA, XRA, WY, BK, ROWS, UPF, TOPU,
  cuts: [XH, XC, XA, XWB, XDF, XWT, XB, XBP, XD2, XRG, XQ2, XQ, XT, XT2, XG, XLF, XL, XHL, XN, 2.10, 2.205, 2.15, 2.04, -0.17, -0.135, 0.94, 2.0, 1.93, 0.88,
    -2.055, -2.045, -2.025, -2.02, -2.01, -2.0, -1.99, -1.98, -1.97, -1.95, -1.93, -1.92, -1.88, -1.86, -1.84, -1.82, -1.80, -1.78, -1.76, -1.70, -1.66, -1.62, -1.58] });
const { XF, XR, AF0, AF1, AR0, AR1, J, surf, sRow, onSurf, sAtY, sideZ, topY, rowFn, cst, RS, RF, panel, glass, loop, edgePath, capGeo, flushPanels } = B;

/* ---------- articulações: capô, quatro portas e tampa traseira ---------- */
let hoodPivot, tailPivot, HINGE, TAILH;
const doorPivot = {}, rdoorPivot = {}, DOORAX = {}, RDOORAX = {}, STRUT = {};
function hingePivot(owner, p, side) { const g = pivotOf(owner, p); g.userData.abs = true; g.userData.owner = owner; g.userData.side = side || 0; return g; }
const dp = s => doorPivot[s], rdp = s => rdoorPivot[s];
function updateProp(v) {
  if (!ANIM.prop) return;
  const p = ANIM.prop, h = v * 1.0, c2 = Math.cos(h), s2 = Math.sin(h);
  const dx = p.Hc.x - HINGE[0], dy = p.Hc.y - HINGE[1];
  setBar(p.mesh, p.A, V(HINGE[0] + dx * c2 - dy * s2, HINGE[1] + dx * s2 + dy * c2, p.Hc.z));
}
/* amortecedores a gás da tampa: o corpo fica preso na carroceria e a haste acompanha a tampa */
function updateStruts(v) {
  const a = -v * 1.15, c = Math.cos(a), sn = Math.sin(a);
  ANIM.struts.forEach(st => {
    const dx = st.Gc.x - TAILH[0], dy = st.Gc.y - TAILH[1];
    const G = V(TAILH[0] + dx * c - dy * sn, TAILH[1] + dx * sn + dy * c, st.Gc.z);
    const d = G.clone().sub(st.B), L = d.length(); d.normalize();
    setBar(st.body, st.B, st.B.clone().addScaledVector(d, Math.min(0.24, L * 0.6)));
    setBar(st.pin, G, G.clone().addScaledVector(d, -(L - 0.18)));
  });
}

function buildBody() {
  HINGE = [XC + 0.012, topY(XC, 0.52) - 0.03, 0];
  TAILH = [XT + 0.004, topY(XT, 0.45) - 0.012, 0];
  hoodPivot = hingePivot('capo', HINGE);
  tailPivot = hingePivot('tampa_tras', TAILH);
  S.forEach(s => {
    DOORAX[s] = [XA + 0.016, 0.72, s * (sideZ(XA + 0.016, 0.72) - 0.03)]; doorPivot[s] = hingePivot('portas', DOORAX[s], s);
    RDOORAX[s] = [XB - 0.014, 0.72, s * (sideZ(XB - 0.014, 0.72) - 0.03)]; rdoorPivot[s] = hingePivot('portas_tras', RDOORAX[s], s);
  });
  art('hood', { pivot: hoodPivot, axis: 'z', max: 1.0, onUpdate: updateProp });
  S.forEach(s => { art('door', { side: s, pivot: doorPivot[s], axis: 'y', max: s * 1.1 }); art('rdoor', { side: s, pivot: rdoorPivot[s], axis: 'y', max: s * 1.05 }); });
  art('tail', { pivot: tailPivot, axis: 'z', max: -1.15, onUpdate: updateStruts });
  const r = j => rowFn(j), UEp = rowFn(J.UE, 0.016), SH = { shadow: true };

  /* frente: capô, grade do torpedo, para-lamas, para-choque, faróis e grade */
  panel('capo', [RF(XC, XH, r(J.UE), 'LRB')], MAT.paint, { shadow: true, parent: hoodPivot });
  panel('capo', [RF(XC + 0.03, XH - 0.03, rowFn(J.UE, -0.03))], MAT.underDS, { off: -0.016, parent: hoodPivot, fl: 0, res: 0.05 });
  panel('grade_torpedo', [RF(XA, XC, r(J.UE), 'LRB')], MAT.plastic);
  const slots = []; for (let k = 0; k < 7; k++) slots.push(RS(0.985, 1.035, cst(0.035 + k * 0.085), cst(0.085 + k * 0.085)));
  panel('grade_torpedo', slots, MAT.grille, { off: 0.0015, fl: 0 });
  panel('paralamas', [
    RS(XA, AF1, r(J.R058), r(J.S0), 'LRB'), RS(XA, AF1, r(J.SB), r(J.R058), 'L'),
    RS(AF1, XHL, r(J.SB), r(J.R058), 'RB'), RS(XA, XH, r(J.UE), r(J.SB), 'LRT')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('para_choque_d', [RS(AF1, XN, r(J.R058), r(J.F0), 'LT'), RS(XN, XF, r(J.R058), r(J.F0)), RS(XN, XF, r(J.SB), r(J.R058), 'L'), RF(XN, XF, r(J.SB), 'L')], MAT.paint, SH);
  add('para_choque_d', capGeo(true, J.F0, J.T6), MAT.paint).castShadow = true;
  /* faróis grandes: sobem do canto da grade e correm para trás pelo para-lama */
  const HT = rowFn(J.T3, 0.012), HL = [RS(XH, XN, HT, r(J.SB)), RS(XHL, XN, r(J.SB), r(J.R058))];
  panel('farois', HL, MAT.black, { fl: 0 });
  panel('farois', [RS(XH + 0.006, XN - 0.006, rowFn(J.T3, 0.02), r(J.SB)), RS(XHL + 0.008, XN - 0.006, r(J.SB), rowFn(J.R058, -0.008))], MAT.lampHousing, { off: 0.003, fl: 0 });
  panel('farois', [RS(XHL + 0.03, 2.02, rowFn(J.R058, -0.036), rowFn(J.R058, -0.012))], MAT.lensAmber, { off: 0.006, fl: 0 });
  panel('farois', HL, MAT.lensClear, { off: 0.013, fl: 0.009, flMat: MAT.trim });
  S.forEach(s => [[2.135, (sRow(2.135, J.T3) + sRow(2.135, J.UE)) / 2 + 0.014, 0.046], [2.06, sRow(2.06, J.SB) + 0.006, 0.042]].forEach(([x, sv, rr]) => {
    const q = surf(x, s * sv), c = [q.p[0] + q.n[0] * 0.002, q.p[1] + q.n[1] * 0.002, q.p[2] + q.n[2] * 0.002];
    const d = add('farois', new THREE.SphereGeometry(rr, 24, 10, 0, TAU, 0, Math.PI / 2), MAT.reflector, c);
    d.quaternion.setFromUnitVectors(V(0, -1, 0), V(q.n[0], q.n[1], q.n[2])); d.scale.set(1, 0.4, 1);
    const bz = add('farois', gTorus(rr * 1.03, 0.0022, 'y', 6, 32), MAT.chromeTrim || MAT.chrome, c); bz.quaternion.copy(d.quaternion);   // aro cromado do refletor
    sph('farois', [c[0] + q.n[0] * 0.003, c[1] + q.n[1] * 0.003, c[2] + q.n[2] * 0.003], rr * 0.26, MAT.bulb);
  }));
  /* grade entre os faróis: moldura cromada, duas lâminas e um emblema redondo genérico */
  panel('grade', [RF(XH, XN, HT)], MAT.grille, { off: 0.002, fl: 0 });
  panel('grade', [RF(XH + 0.004, XH + 0.022, rowFn(J.T3, -0.008))], MAT.chromeTrim, { off: 0.007, fl: 0.003, flMat: MAT.chromeTrim });
  [2.115, 2.155].forEach(x => panel('grade', [RF(x, x + 0.012, rowFn(J.T3, -0.02))], MAT.chromeTrim, { off: 0.006, fl: 0.002, flMat: MAT.chromeTrim }));
  {
    const q = surf(2.11, 0), n = V(q.n[0], q.n[1], q.n[2]), c = [q.p[0] + q.n[0] * 0.012, q.p[1] + q.n[1] * 0.012, 0];
    const e = add('grade', gCyl(0.034, 0.034, 0.008, 'y', 32), MAT.chrome, c); e.quaternion.setFromUnitVectors(V(0, 1, 0), n);
    const t = add('grade', gTorus(0.034, 0.004, 'z', 6, 36), MAT.chromeTrim, c); t.quaternion.setFromUnitVectors(V(0, 0, 1), n);
  }
  /* para-choque: placa no meio e a entrada de ar larga embaixo */
  add('grade_inf', capGeo(true, J.R032, J.R040, 0.42, 0.004), MAT.grille);
  box('para_choque_d', [2.255, 0.52, 0], [0.008, 0.13, 0.40], MAT.plate, 0.01);

  /* portas dianteiras: forro externo, moldura do vidro, painel interno, vidro, forro de dentro */
  panel('portas', [RS(XB, XA, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: dp, fl: 0.045 });
  panel('portas', [RS(XB, XA, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: dp, fl: 0.035 });
  panel('portas', [RS(XDF, XA, UEp, r(J.SB), 'Rl'), RS(XB, XBP, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: dp, fl: 0.035 });
  panel('portas', [RS(XB + 0.012, XA - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: dp, fl: 0, res: 0.05 });
  glass('vidros_portas', RS(XBP, XDF, UEp, r(J.SB)), dp);
  panel('forros_portas', [RS(XB + 0.02, XA - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: dp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XBP, XDF, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: dp });
  panel('fech_portas', [RS(0.02, 0.15, rowFn(J.R084, -0.022), rowFn(J.R084, 0.022))], MAT.trim, { off: 0.003, fl: 0.003, flMat: MAT.trim, parent: dp });
  S.forEach(s => loop('fech_portas', edgePath(0.035, 0.135, x => s * sRow(x, J.R084), 10), 0.0075, MAT.chromeTrim, 0.011, dp(s)));   // maçaneta: barra cromada sobre o rebaixo
  /* portas traseiras */
  panel('portas_tras', [RS(XD2, XB, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: rdp, fl: 0.045 });
  panel('portas_tras', [RS(XD2, XB, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XB - 0.05, XB, UEp, r(J.SB), 'Rl'), RS(XD2, XRG, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XD2 + 0.012, XB - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: rdp, fl: 0, res: 0.05 });
  glass('vidros_portas_tras', RS(XRG, XB - 0.05, UEp, r(J.SB)), rdp);
  panel('forros_portas_tras', [RS(XD2 + 0.02, XB - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: rdp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XRG, XB - 0.05, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: rdp });
  panel('fech_portas', [RS(-0.74, -0.61, rowFn(J.R084, -0.022), rowFn(J.R084, 0.022))], MAT.trim, { off: 0.003, fl: 0.003, flMat: MAT.trim, parent: rdp });
  S.forEach(s => loop('fech_portas', edgePath(-0.725, -0.625, x => s * sRow(x, J.R084), 10), 0.0075, MAT.chromeTrim, 0.011, rdp(s)));

  /* laterais, soleiras, teto, colunas e vidros fixos (soldados ou colados) */
  panel('soleiras', [RS(XD2, XA, r(J.R032), r(J.S0), 'TR')], MAT.paint, { shadow: true, fl: 0.045 });
  panel('laterais', [
    RS(AR1, XD2, r(J.R032), r(J.S0)), RS(AR1, XD2, r(J.SB), r(J.R032), 'Rt'),
    RS(AR0, AR1, r(J.R0615), r(J.S0), 'LB'), RS(AR0, AR1, r(J.SB), r(J.R0615)),
    RS(XLF, AR0, r(J.SB), r(J.R0615), 'LB'),
    RS(XLF, XT, r(J.UE), r(J.SB), 'LT'), RS(XT, XQ, r(J.UE), r(J.SB), 'r'), RS(XQ2, XD2, r(J.UE), r(J.SB), 'lR')], MAT.paint, { shadow: true, fl: 0.04 });
  glass('vidros_laterais', RS(XQ, XQ2, r(J.UE), r(J.SB)));
  panel('teto', [RF(XT, XQ, r(J.UE), 'L'), RF(XQ, XD2, r(J.UE), 'b'), RF(XD2, XWT, r(J.UE), 'Br')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('colunas', [RS(XWT, XA, r(J.T1), r(J.UE), 'BRt'), RF(XWB, XA, r(J.T1), 'Rl')], MAT.paint, { shadow: true, fl: 0.035 });
  glass('para_brisa', RF(XWT, XWB, r(J.T1)));

  /* traseira: tampa com vidro, aerofólio, placa e luz de freio; para-choque, painel traseiro e lanternas altas */
  panel('tampa_tras', [RF(XL, XG, r(J.UE), 'LBr'), RS(XG, XT2, r(J.T2), r(J.UE), 'Bt'), RF(XT2, XT, r(J.UE), 'RBl')], MAT.paint, { shadow: true, parent: tailPivot, fl: 0.03 });
  panel('tampa_tras', [RF(XL + 0.02, XG - 0.01, rowFn(J.UE, -0.04))], MAT.underDS, { off: -0.03, parent: tailPivot, fl: 0, res: 0.05 });
  glass('vidro_tras', RF(XG, XT2, r(J.T2)), tailPivot);
  box('tampa_tras', [XT - 0.035, topY(XT - 0.035, 0) + 0.008, 0], [0.08, 0.014, 1.0], MAT.paint, 0.006, [0, 0, -0.12], tailPivot);
  panel('tampa_tras', [RF(-2.018, -1.994, cst(0.2))], MAT.plate, { off: 0.006, fl: 0.005, flMat: MAT.plate, parent: tailPivot });
  panel('tampa_tras', [RF(-1.986, -1.979, cst(0.34))], MAT.chromeTrim, { off: 0.005, fl: 0.003, flMat: MAT.chromeTrim, parent: tailPivot });
  S.forEach(s => { const q = onSurf(-1.99, s * 0.11, 0.008); box('luz_placa', q, [0.016, 0.012, 0.05], MAT.bulb, 0.004, null, tailPivot); });
  box('luz_freio', [XT - 0.065, topY(XT - 0.065, 0) + 0.006, 0], [0.025, 0.018, 0.30], MAT.lensRed, 0.006, [0, 0, -0.3], tailPivot);
  panel('para_choque_t', [RS(XR, XL, r(J.R0615), r(J.F0)), RS(XL, AR0, r(J.R0615), r(J.F0), 'TR'), RF(XR, XL, r(J.R0615), 'R')], MAT.paint, SH);
  add('para_choque_t', capGeo(false, J.F0, J.T6), MAT.paint).castShadow = true;
  add('para_choque_t', capGeo(false, J.R026, J.R032, 0.55, 0.003), MAT.trim);
  box('painel_tras', [-2.005, 0.50, 0], [0.012, 0.28, 1.16], MAT.underDS);
  box('painel_tras', [-2.0, 0.645, 0], [0.04, 0.006, 1.16], MAT.underDS);
  const hY = y => x => sAtY(x, y);
  panel('lanternas', [RS(XL, XLF, r(J.UE), r(J.R0615))], MAT.lensRed, { off: 0.008, fl: 0.008, flMat: MAT.lensRed });
  panel('lanternas', [RS(-1.975, XLF + 0.015, hY(0.945), hY(0.905))], MAT.lensAmber, { off: 0.0095, fl: 0 });
  panel('lanternas', [RS(-1.975, XLF + 0.015, hY(0.865), hY(0.83))], MAT.lensWhite, { off: 0.0095, fl: 0 });
  S.forEach(s => sph('lanternas', onSurf(-1.95, s * sAtY(-1.95, 0.76), -0.006), 0.022, MAT.bulb));

  /* assoalho e caixas de roda */
  panel('monobloco', [RS(AR0, 0.95, r(J.F2), r(J.F0)), RS(AR1, AF0, r(J.S0), r(J.F2))], MAT.underDS, { fl: 0, res: 0.06 });
  panel('caixas_roda', [RS(AF0, AF1, r(J.S0), r(J.F2)), RS(AR0, AR1, r(J.S0), r(J.F2))], MAT.liner, { fl: 0, res: 0.04 });

  /* borrachas de vedação: portas, tampa, capô, para-brisa e vidros laterais */
  S.forEach(s => {
    const ring = (x0, x1) => {
      const P = [];
      edgePath(x0 + 0.012, x1 - 0.012, x => s * (sRow(x, J.R032) + 0.006), 30).forEach(p => P.push(p));
      for (let k = 1; k <= 10; k++) { const x = x1 - 0.012, t = k / 10; P.push([x, s * (sRow(x, J.R032) + (sRow(x, J.UE) - sRow(x, J.R032)) * t)]); }
      edgePath(x1 - 0.02, x0 + 0.012, x => s * (sRow(x, J.UE) + 0.004), 30).forEach(p => P.push(p));
      for (let k = 1; k < 10; k++) { const x = x0 + 0.012, t = k / 10; P.push([x, s * (sRow(x, J.UE) + (sRow(x, J.R032) - sRow(x, J.UE)) * t)]); }
      loop('borrachas', P, 0.008, MAT.rubber, -0.016, null, true);
    };
    ring(XB, XA); ring(XD2, XB);
    const Q = [], vs = (x, a, b, n) => { for (let k = 1; k < n; k++) { const t = k / n; Q.push([x, s * (a(x) + (b(x) - a(x)) * t)]); } };
    const lo = x => sRow(x, J.SB) - 0.003, hi = x => sRow(x, J.UE) + 0.003;
    edgePath(XQ + 0.004, XQ2 - 0.004, x => s * lo(x), 12).forEach(p => Q.push(p)); vs(XQ2 - 0.004, lo, hi, 8);
    edgePath(XQ2 - 0.004, XQ + 0.004, x => s * hi(x), 12).forEach(p => Q.push(p)); vs(XQ + 0.004, hi, lo, 8);
    loop('borrachas', Q, 0.004, MAT.rubber, 0.001, null, true);
  });
  {
    const P = [], e = x => sRow(x, J.UE) - 0.006;
    for (let k = 0; k <= 16; k++) { const x = XL + 0.012; P.push([x, -e(x) + 2 * e(x) * k / 16]); }
    edgePath(XL + 0.012, XT - 0.012, x => e(x), 40).forEach(p => P.push(p));
    for (let k = 0; k <= 16; k++) { const x = XT - 0.012; P.push([x, e(x) - 2 * e(x) * k / 16]); }
    edgePath(XT - 0.012, XL + 0.012, x => -e(x), 40).forEach(p => P.push(p));
    loop('borrachas', P, 0.008, MAT.rubber, -0.016, null, true);
    const H = []; for (let k = 0; k <= 20; k++) { const x = XC + 0.012, e2 = sRow(x, J.UE) - 0.03; H.push([x, -e2 + 2 * e2 * k / 20]); }
    loop('borrachas', H, 0.007, MAT.rubber, -0.02);
    const W = [], w = x => sRow(x, J.T1) - 0.004;
    edgePath(XWB - 0.004, XWT + 0.004, x => -w(x), 18).forEach(p => W.push(p));
    for (let k = 1; k < 20; k++) { const x = XWT + 0.004; W.push([x, -w(x) + 2 * w(x) * k / 20]); }
    edgePath(XWT + 0.004, XWB - 0.004, x => w(x), 18).forEach(p => W.push(p));
    loop('borrachas', W, 0.004, MAT.rubber, 0.001);
  }

  /* detalhes externos: repetidores, retrovisores, dobradiças, fechaduras, máquinas de vidro */
  S.forEach(s => {
    const q = surf(1.58, s * sAtY(1.58, 0.76));
    sph('piscas_lat', [q.p[0], q.p[1], q.p[2]], 0.028, MAT.lensAmber, null, [1, 0.45, 0.25]);
    const b = onSurf(0.905, s * (sRow(0.905, J.SB) - 0.012), 0);
    box('retrovisores', [b[0], b[1] + 0.014, b[2] + s * 0.022], [0.08, 0.05, 0.045], MAT.trim, 0.012, null, dp(s));
    box('retrovisores', [b[0] - 0.035, b[1] + 0.038, b[2] + s * 0.10], [0.11, 0.115, 0.17], MAT.paint, 0.04, null, dp(s));
    box('retrovisores', [b[0] - 0.092, b[1] + 0.038, b[2] + s * 0.102], [0.004, 0.092, 0.145], MAT.chrome, 0.002, null, dp(s));
    /* dobradiças e limitadores: portas dianteiras e traseiras */
    [[DOORAX[s], dp(s), XA], [RDOORAX[s], rdp(s), XB]].forEach(([ax, par, xa]) => {
      [0.54, 0.82].forEach(y => {
        box('dobradicas', [xa + 0.034, y, s * (sideZ(xa + 0.034, y) - 0.044)], [0.04, 0.055, 0.03], MAT.steelDark, 0.004);
        box('dobradicas', [xa - 0.016, y, ax[2] - s * 0.004], [0.045, 0.05, 0.012], MAT.steelDark, 0.003, null, par);
        cyl('dobradicas', [ax[0], y, ax[2]], 0.007, 0.07, 'y', MAT.steel);
      });
      rod('dobradicas', [xa + 0.038, 0.68, s * (sideZ(xa + 0.038, 0.68) - 0.07)], [xa - 0.04, 0.68, s * (sideZ(xa - 0.04, 0.68) - 0.055)], 0.007, MAT.steelDark, par);
    });
    /* fechaduras, batentes e varetas */
    [[XB, dp(s), 0.10], [XD2, rdp(s), -0.67]].forEach(([xe, par, xh]) => {
      const zl = s * (sideZ(xe + 0.015, 0.76) - 0.03);
      box('fech_portas', [xe + 0.016, 0.76, zl], [0.022, 0.075, 0.04], MAT.steelDark, 0.004, null, par);
      rod('fech_portas', [xh, 0.88, s * (sideZ(xh, 0.88) - 0.02)], [xe + 0.02, 0.77, zl], 0.003, MAT.steel, par);
      add('fech_portas', gTorus(0.012, 0.003, 'x', 6, 16), MAT.steel, [xe - 0.012, 0.76, s * (sideZ(xe - 0.01, 0.76) - 0.03)]);
    });
    /* máquinas de vidro elétricas e alto-falantes (dentro das portas) */
    rod('maq_vidro', [0.02, 0.54, s * 0.77], [0.70, 0.90, s * 0.77], 0.008, MAT.steelDark, dp(s));
    rod('maq_vidro', [0.02, 0.90, s * 0.765], [0.70, 0.54, s * 0.765], 0.008, MAT.steelDark, dp(s));
    cyl('maq_vidro', [0.36, 0.72, s * 0.775], 0.04, 0.04, 'z', MAT.black, null, dp(s));
    rod('maq_vidro_tras', [-0.72, 0.56, s * 0.77], [-0.26, 0.90, s * 0.77], 0.008, MAT.steelDark, rdp(s));
    cyl('maq_vidro_tras', [-0.49, 0.72, s * 0.775], 0.035, 0.04, 'z', MAT.black, null, rdp(s));
    cyl('alto_falantes', [0.74, 0.43, s * 0.765], 0.075, 0.03, 'z', MAT.black, null, dp(s));
    cyl('alto_falantes', [-0.36, 0.45, s * 0.765], 0.065, 0.03, 'z', MAT.black, null, rdp(s));
    /* dobradiças do capô */
    const zc = s * 0.58;
    box('dobr_capo', [HINGE[0] + 0.012, HINGE[1] - 0.035, zc], [0.06, 0.055, 0.012], MAT.steelDark, 0.004);
    cyl('dobr_capo', [HINGE[0], HINGE[1], zc], 0.007, 0.03, 'z', MAT.steel);
    rod('dobr_capo', [HINGE[0], HINGE[1], zc], [HINGE[0] + 0.09, topY(HINGE[0] + 0.09, 0.58) - 0.014, zc], 0.008, MAT.steelDark, hoodPivot);
    /* dobradiças da tampa traseira, no fim do teto */
    const zt = s * 0.45;
    box('dobr_tampa', [TAILH[0] + 0.03, TAILH[1] + 0.004, zt], [0.05, 0.012, 0.04], MAT.steelDark, 0.003);
    cyl('dobr_tampa', [TAILH[0], TAILH[1], zt], 0.007, 0.05, 'z', MAT.steel);
    rod('dobr_tampa', [TAILH[0], TAILH[1], zt], [TAILH[0] - 0.075, topY(TAILH[0] - 0.075, 0.45) - 0.014, zt], 0.008, MAT.steelDark, tailPivot);
    /* amortecedores a gás da tampa (reposicionados quando a tampa abre) */
    const g = new THREE.Group(); reg('amort_tampa').group.add(g);
    const body = add('amort_tampa', new THREE.CylinderGeometry(0.012, 0.012, 1, 12), MAT.black, null, null, g);
    const pin = add('amort_tampa', new THREE.CylinderGeometry(0.006, 0.006, 1, 10), MAT.chrome, null, null, g);
    STRUT[s] = { B: V(-1.78, 1.36, s * 0.615), Gc: V(-1.97, 1.0, s * 0.635) };
    ANIM.struts.push({ body, pin, B: STRUT[s].B, Gc: STRUT[s].Gc });
  });
  /* fechaduras da tampa e do capô (lingueta) e portinhola do combustível */
  box('fech_tampa', [XL + 0.03, 0.70, 0], [0.03, 0.04, 0.07], MAT.steelDark, 0.004, null, tailPivot);
  add('fech_tampa', gTorus(0.013, 0.003, 'x', 6, 16), MAT.steel, [XL + 0.012, 0.66, 0]);
  add('fech_capo', gTorus(0.012, 0.003, 'z', 6, 16), MAT.steel, [2.0, 0.82, 0], null, hoodPivot);
  { const z = sideZ(-1.55, 0.90) + 0.002; add('bocal', gCyl(0.075, 0.075, 0.006, 'z', 32), MAT.paint, [-1.55, 0.90, -z]); add('bocal', gTorus(0.075, 0.004, 'z', 6, 40), MAT.trim, [-1.55, 0.90, -z - 0.003]); }
  /* limpadores: dois na frente e um no vidro traseiro, com motor dentro da tampa */
  const wip = (x0, z0, z1) => { const pts = []; for (let k = 0; k <= 8; k++) { const z = z0 + (z1 - z0) * k / 8, x = x0 - 0.05 * k / 8; pts.push([x, topY(x, z) + 0.014, z]); } tube('limpador', pts, 0.006, MAT.black); };
  wip(0.90, -0.46, 0.10); wip(0.90, 0.06, 0.62);
  { const a = onSurf(XG + 0.02, 0, 0.014), b2 = onSurf(XG + 0.19, 0.34, 0.014); rod('limpador_tras', a, b2, 0.006, MAT.black, tailPivot); cyl('limpador_tras', [XG + 0.045, topY(XG + 0.045, 0) - 0.05, 0], 0.032, 0.08, 'x', MAT.black, null, tailPivot); }
  flushPanels();
}

/* ===== Motor MR18DE (1.8 16V, dois comandos, corrente), admissão, ignição, arrefecimento e escape ===== */
const EXc = 1.40, EYc = 0.40;                          // eixo do virabrequim
const CYLZ = [-0.223, -0.133, -0.043, 0.047];          // cilindros 1..4 (o 1 fica do lado da corrente, à direita)
const MAINS = [-0.268, -0.178, -0.088, 0.002, 0.092];  // apoios do virabrequim
const CR = 0.04055, RODL = 0.136;                      // meio curso (81,1 mm) e biela
const ZB = -0.088;                                     // centro do bloco ao longo do carro
const ZT = -0.33, ZA = -0.385;                         // planos da corrente e da correia de acessórios
const CXI = 1.445, CXE = 1.355, CY = 0.76;             // comandos de admissão (frente) e de escape (atrás)
const CHAIN = beltPath([[EXc, EYc, 0.03], [1.478, 0.57, 0.012], [CXI, CY, 0.052], [CXE, CY, 0.052], [1.322, 0.57, 0.012]]);
ANIM.crank = { x: EXc, y: EYc, r: CR, rod: RODL, pid: 'pistoes', rid: 'bielas' };

function buildEngine() {
  /* bloco de alumínio, cárter em duas partes, cabeçote largo de duplo comando, tampa e bobinas */
  kit('bloco', 'block_tiida');
  kit('carter', 'pan_tiida');
  box('junta_cab', [EXc, 0.633, ZB], [0.236, 0.004, 0.396], MAT.steel);
  kit('cabecote', 'head_tiida');
  kit('tampa_valv', 'cover_tiida');
  add('tampa_oleo', gCyl(0.026, 0.026, 0.022, 'y', 24), MAT.black, [EXc + 0.07, 0.822, -0.24]);
  CYLZ.forEach(z => {
    box('bobinas', [EXc, 0.828, z], [0.04, 0.032, 0.05], MAT.coil, 0.006);
    box('bobinas', [EXc + 0.03, 0.828, z], [0.026, 0.02, 0.024], MAT.black, 0.003);
    add('bobinas', gCyl(0.011, 0.011, 0.08, 'y', 12), MAT.coil, [EXc, 0.775, z]);
    rod('velas', [EXc, 0.655, z], [EXc, 0.70, z], 0.0068, MAT.steel);
    rod('velas', [EXc, 0.70, z], [EXc, 0.735, z], 0.008, MAT.plate);
  });
  /* pistões e bielas (animados) */
  CYLZ.forEach((z, i) => {
    const g = new THREE.Group(); reg('pistoes').group.add(g);
    add('pistoes', gCyl(0.041, 0.041, 0.048, 'y', 24), MAT.alu, [0, 0.012, 0], null, g);
    for (const dy of [0.03, 0.022]) add('pistoes', gTorus(0.0412, 0.0016, 'y', 4, 24), MAT.steelDark, [0, dy, 0], null, g);
    add('pistoes', gCyl(0.009, 0.009, 0.05, 'z', 10), MAT.steel, [0, 0, 0], null, g);
    g.position.set(EXc, 0.582, z);
    const r = add('bielas', gBox(0.02, RODL, 0.014, 0.004), MAT.steel); r.userData.noMerge = true;
    ANIM.pistons.push({ g, z, ph: (i === 0 || i === 3) ? 0 : Math.PI }); ANIM.rods.push(r);
  });
  /* virabrequim (pivô) com a engrenagem da corrente na ponta direita */
  const kp = pivotOf('virabrequim', [EXc, EYc, 0]); ANIM.spin.push(kp);
  MAINS.forEach(z => add('virabrequim', gCyl(0.025, 0.025, 0.03, 'z'), MAT.steel, [0, 0, z], null, kp));
  CYLZ.forEach((z, i) => {
    const ph = (i === 0 || i === 3) ? 0 : Math.PI, px = CR * Math.sin(ph), py = CR * Math.cos(ph);
    add('virabrequim', gCyl(0.021, 0.021, 0.026, 'z'), MAT.steel, [px, py, z], null, kp);
    for (const dz of [-0.022, 0.022]) {
      add('virabrequim', gBox(0.05, 0.085, 0.012, 0.006), MAT.iron, [px / 2, py / 2, z + dz], null, kp);
      add('virabrequim', gBox(0.085, 0.035, 0.012, 0.01), MAT.iron, [-px * 0.9, -py * 0.9, z + dz], null, kp);
    }
  });
  add('virabrequim', gCyl(0.018, 0.018, 0.13, 'z'), MAT.steel, [0, 0, -0.32], null, kp);
  add('virabrequim', gCyl(0.03, 0.03, 0.014, 'z', 20), MAT.steel, [0, 0, ZT], null, kp);
  add('virabrequim', gCyl(0.04, 0.04, 0.012, 'z'), MAT.steel, [0, 0, 0.11], null, kp);
  const pv = pivotOf('polia_vira', [EXc, EYc, 0]); ANIM.spin.push(pv);
  add('polia_vira', gCyl(0.068, 0.068, 0.024, 'z', 36), MAT.steelDark, [0, 0, ZA], null, pv);
  for (const dz of [-0.008, 0, 0.008]) add('polia_vira', gTorus(0.068, 0.002, 'z', 4, 36), MAT.steel, [0, 0, ZA + dz], null, pv);
  add('polia_vira', gCyl(0.02, 0.02, 0.03, 'z', 16), MAT.steel, [0, 0, ZA + 0.012], null, pv);
  const fw = pivotOf('volante_motor', [EXc, EYc, 0]); ANIM.spin.push(fw);
  add('volante_motor', gCyl(0.14, 0.14, 0.022, 'z', 48), MAT.iron, [0, 0, 0.128], null, fw);
  add('volante_motor', gTorus(0.141, 0.005, 'z', 6, 60), MAT.steel, [0, 0, 0.128], null, fw);
  const cl = pivotOf('embreagem', [EXc, EYc, 0]); ANIM.spin.push(cl);
  add('embreagem', gCyl(0.10, 0.10, 0.008, 'z', 40), MAT.pad, [0, 0, 0.144], null, cl);
  add('embreagem', gCyl(0.12, 0.113, 0.018, 'z', 40), MAT.steel, [0, 0, 0.158], null, cl);
  add('embreagem', gTorus(0.062, 0.012, 'z', 6, 30), MAT.steelDark, [0, 0, 0.171], null, cl);
  add('rol_emb', gTorus(0.028, 0.009, 'z', 8, 24), MAT.steel, [EXc, EYc, 0.186]);
  rod('rol_emb', [EXc, EYc + 0.03, 0.188], [EXc + 0.05, 0.58, 0.21], 0.007, MAT.steelDark);
  /* dois comandos no cabeçote, cada um com 8 cames; tuchos de copo e 16 válvulas */
  [[CXI, 0], [CXE, Math.PI * 0.6]].forEach(([cx, ph0]) => {
    const cp = pivotOf('comando', [cx, CY, 0]); ANIM.cam.push(cp);
    add('comando', gCyl(0.013, 0.013, 0.40, 'z'), MAT.steel, [0, 0, -0.10], null, cp);
    CYLZ.forEach((z, i) => [-0.017, 0.017].forEach(dz => {
      const a = ph0 + [0, Math.PI, Math.PI * 1.5, Math.PI * 0.5][i];
      const m = add('comando', gCyl(0.017, 0.017, 0.011, 'z', 16), MAT.steel, [Math.sin(a) * 0.006, Math.cos(a) * 0.006, z + dz], null, cp);
      m.scale.set(1, 1.35, 1); m.rotation.z = -a;
    }));
    if (cx === CXE) { add('comando', gCyl(0.052, 0.052, 0.012, 'z', 40), MAT.steel, [0, 0, ZT], null, cp); add('comando', gCyl(0.009, 0.009, 0.03, 'z', 8), MAT.black, [0.03, 0, ZT - 0.004], null, cp); }
    MAINS.forEach(z => box('comando', [cx, CY + 0.018, z], [0.04, 0.012, 0.02], MAT.alu, 0.003));
    CYLZ.forEach(z => [-0.017, 0.017].forEach(dz => {
      add('tuchos', gCyl(0.0145, 0.0145, 0.018, 'y', 16), MAT.steelDark, [cx, 0.735, z + dz]);
      rod('valvulas', [cx, 0.637, z + dz], [cx, 0.725, z + dz], 0.0032, MAT.steel);
      add('valvulas', gCyl(cx === CXI ? 0.0155 : 0.0135, cx === CXI ? 0.0155 : 0.0135, 0.003, 'y', 16), MAT.steel, [cx, 0.638, z + dz]);
      add('valvulas', gCyl(0.010, 0.010, 0.03, 'y', 12, true), MAT.spring, [cx, 0.705, z + dz]);
    }));
  });
  /* variador de fase (CVTC) na ponta do comando de admissão e a válvula solenoide que o comanda */
  const vp = pivotOf('cvtc', [CXI, CY, 0]); ANIM.cam.push(vp);
  add('cvtc', gCyl(0.052, 0.052, 0.012, 'z', 40), MAT.steel, [0, 0, ZT], null, vp);
  add('cvtc', gCyl(0.042, 0.042, 0.028, 'z', 32), MAT.aluDark, [0, 0, ZT + 0.022], null, vp);
  add('cvtc', gCyl(0.012, 0.012, 0.03, 'z', 8), MAT.black, [0.026, 0, ZT - 0.004], null, vp);
  add('cvtc', gCyl(0.013, 0.013, 0.06, 'x', 16), MAT.black, [1.535, 0.72, -0.25]);
  box('cvtc', [1.575, 0.72, -0.25], [0.025, 0.03, 0.025], MAT.black, 0.004);
  /* corrente de comando (lado direito): virabrequim, dois comandos, guia fixa e guia do tensor */
  ribbon('corrente', CHAIN, ZT, 0.012, MAT.chain);
  box('tensor_corr', [1.484, 0.585, ZT], [0.012, 0.18, 0.016], MAT.black, 0.004, [0, 0, -0.16]);
  box('tensor_corr', [1.316, 0.585, ZT], [0.012, 0.18, 0.016], MAT.black, 0.004, [0, 0, 0.16]);
  box('tensor_corr', [1.505, 0.50, ZT - 0.004], [0.03, 0.05, 0.03], MAT.aluDark, 0.005);
  rod('tensor_corr', [1.50, 0.52, ZT], [1.49, 0.55, ZT], 0.005, MAT.steel);
  plateFromHull('tampa_corr', CHAIN, 0.035, ZT - 0.037, 0.012, MAT.aluDark);
  /* correia de acessórios: virabrequim, compressor do ar, tensor automático, alternador e bomba d'água */
  const ab = beltPath([[EXc, EYc, 0.072], [1.62, 0.31, 0.0565], [1.665, 0.50, 0.03], [1.62, 0.68, 0.031], [1.47, 0.63, 0.047]]);
  ribbon('correia_acess', ab, ZA, 0.018, MAT.belt);
  box('tensor_acess', [1.625, 0.48, ZA + 0.022], [0.08, 0.024, 0.016], MAT.steelDark, 0.006, [0, 0, 0.6]);
  add('tensor_acess', gCyl(0.03, 0.03, 0.022, 'z', 24), MAT.steel, [1.665, 0.50, ZA]);
  add('tensor_acess', gCyl(0.024, 0.024, 0.05, 'z', 16), MAT.black, [1.59, 0.46, ZA + 0.04]);
  /* coxins: direito (sobre a tampa da corrente), do câmbio e tirante traseiro */
  box('coxim_dir', [1.40, 0.81, -0.52], [0.09, 0.065, 0.075], MAT.rubber, 0.012);
  rod('coxim_dir', [1.40, 0.745, -0.34], [1.40, 0.80, -0.49], 0.013, MAT.steelDark);
  box('coxim_dir', [1.40, 0.81, -0.585], [0.11, 0.03, 0.05], MAT.steelDark);
  box('coxim_cambio', [1.36, 0.62, 0.44], [0.08, 0.06, 0.08], MAT.rubber, 0.012);
  box('coxim_cambio', [1.36, 0.64, 0.56], [0.06, 0.03, 0.16], MAT.steelDark);
  rod('coxim_cambio', [1.36, 0.56, 0.38], [1.36, 0.61, 0.43], 0.012, MAT.steelDark);
  add('coxim_tras', gCyl(0.03, 0.03, 0.05, 'x', 20), MAT.rubber, [1.06, 0.27, 0.10]);
  rod('coxim_tras', [1.28, 0.32, 0.10], [1.07, 0.27, 0.10], 0.014, MAT.steelDark);
  /* lubrificação: bomba na ponta do virabrequim, pescador, filtro, vareta e respiro */
  box('bomba_oleo', [EXc, 0.39, -0.30], [0.13, 0.13, 0.026], MAT.aluDark, 0.01);
  tube('bomba_oleo', [[EXc - 0.02, 0.33, -0.28], [EXc - 0.03, 0.215, -0.22], [EXc - 0.02, 0.205, -0.14]], 0.008, MAT.steel);
  kit('filtro_oleo', 'oil_filter', { at: [1.555, 0.37, -0.04], s: [0.94, 0.95, 0.95] });
  rod('vareta', [1.505, 0.30, 0.08], [1.55, 0.82, 0.085], 0.005, MAT.steel);
  add('vareta', gTorus(0.014, 0.004, 'x', 6, 18), MAT.yellow, [1.552, 0.835, 0.085]);
  rod('respiro', [1.535, 0.785, 0.06], [1.62, 0.84, 0.10], 0.008, MAT.hose);
  add('respiro', gCyl(0.011, 0.011, 0.02, 'x', 12), MAT.black, [1.525, 0.785, 0.06]);
}

function buildIntake() {
  /* tomada, caixa do filtro (sobre o câmbio) com o sensor de massa de ar na saída, duto, borboleta eletrônica e coletor plástico na frente */
  tube('tomada_ar', [[2.0, 0.80, 0.24], [1.90, 0.805, 0.28], [1.80, 0.80, 0.33], [1.75, 0.79, 0.36]], 0.03, MAT.plastic);
  box('caixa_filtro', [1.62, 0.765, 0.40], [0.24, 0.14, 0.24], MAT.plastic, 0.025);
  box('caixa_filtro', [1.62, 0.812, 0.40], [0.245, 0.006, 0.245], MAT.black);
  box('filtro_ar', [1.62, 0.79, 0.40], [0.20, 0.032, 0.20], MAT.paper, 0.004);
  for (let k = -3; k <= 3; k++) box('filtro_ar', [1.62 + k * 0.026, 0.808, 0.40], [0.006, 0.006, 0.19], MAT.paper);
  add('maf', gCyl(0.036, 0.036, 0.05, 'z', 24), MAT.black, [1.60, 0.80, 0.265]);
  box('maf', [1.60, 0.84, 0.265], [0.03, 0.03, 0.03], MAT.black, 0.004);
  tube('duto_ar', [[1.60, 0.80, 0.235], [1.64, 0.81, 0.20], [1.68, 0.79, 0.165], [1.69, 0.785, 0.15]], 0.033, MAT.hose);
  add('tbi', gCyl(0.034, 0.034, 0.06, 'z', 28), MAT.aluDark, [1.69, 0.785, 0.115]);
  box('tbi', [1.735, 0.79, 0.115], [0.03, 0.06, 0.05], MAT.black, 0.006);
  rod('pedal_acel', [0.70, 0.36, 0.24], [0.68, 0.60, 0.24], 0.006, MAT.steelDark);
  box('pedal_acel', [0.66, 0.36, 0.24], [0.015, 0.13, 0.055], MAT.rubber, 0.006, [0, 0, -0.35]);
  box('pedal_acel', [0.71, 0.60, 0.24], [0.03, 0.05, 0.05], MAT.black, 0.006);
  kit('coletor_adm', 'intake_tiida');
  route('coletor_adm', [[1.69, 0.785, 0.09], [1.69, 0.785, 0.06], [1.688, 0.788, 0.03]]);
  CYLZ.forEach(z => route('coletor_adm', [[1.53, 0.69, z], [1.57, 0.68, z], [1.61, 0.70, z], [1.64, 0.74, z]]));
  add('galeria', gCyl(0.011, 0.011, 0.32, 'z'), MAT.steel, [1.565, 0.728, ZB]);
  add('galeria', gCyl(0.016, 0.016, 0.03, 'z', 16), MAT.steelDark, [1.565, 0.728, ZB - 0.18]);
  CYLZ.forEach(z => { rod('bicos', [1.565, 0.722, z], [1.545, 0.70, z], 0.0085, MAT.black); rod('bicos', [1.545, 0.70, z], [1.535, 0.69, z], 0.004, MAT.steel); });
  add('purga', gCyl(0.016, 0.016, 0.04, 'y', 16), MAT.black, [1.63, 0.86, -0.24]);
  /* linha de combustível no cofre (sistema sem retorno: só uma linha de ida) */
  tube('linhas_comb', [[0.95, 0.215, -0.36], [1.05, 0.42, -0.42], [1.30, 0.62, -0.42], [1.48, 0.73, -0.33], [1.565, 0.728, -0.27]], 0.005, MAT.steel);
  /* partida a frio do flex: reservatório de gasolina, bombinha, eletroválvula e um tubinho para cada cilindro */
  kit('res_pf', 'reservoir', { at: [1.66, 0.72, -0.60], s: [0.07, 0.12, 0.07], mats: { tank: MAT.whiteRes } });
  kit('res_pf', 'res_cap', { at: [1.66, 0.78, -0.60], s: 0.85, mats: { tankNeck: MAT.whiteRes } });
  add('bomba_pf', gCyl(0.017, 0.017, 0.05, 'y', 16), MAT.black, [1.66, 0.635, -0.60]);
  box('valv_pf', [1.70, 0.875, -0.33], [0.03, 0.025, 0.03], MAT.black, 0.004);
  tube('tubos_pf', [[1.66, 0.61, -0.60], [1.72, 0.66, -0.52], [1.745, 0.82, -0.40], [1.70, 0.875, -0.345]], 0.004, MAT.cable);
  CYLZ.forEach(z => tube('tubos_pf', [[1.70, 0.87, -0.315], [1.67, 0.85, (z - 0.315) / 2], [1.61, 0.745, z + 0.012]], 0.0028, MAT.cable));
}

function buildIgnitionCooling() {
  box('ecu', [1.62, 0.74, 0.585], [0.16, 0.12, 0.035], MAT.box, 0.006);
  box('ecu', [1.62, 0.81, 0.585], [0.06, 0.025, 0.03], MAT.black, 0.004);
  add('sens_ckp', gCyl(0.011, 0.011, 0.04, 'y', 12), MAT.black, [1.30, 0.31, 0.13]);
  [CXI, CXE].forEach(x => add('sens_cmp', gCyl(0.013, 0.013, 0.03, 'z', 16), MAT.black, [x, CY, 0.125]));
  add('sens_ect', gCyl(0.008, 0.008, 0.04, 'y', 12), MAT.black, [1.40, 0.66, 0.13]);
  add('sens_det', gCyl(0.016, 0.016, 0.018, 'x', 16), MAT.black, [1.525, 0.47, -0.088]);
  rod('sonda', [1.218, 0.598, -0.118], [1.254, 0.644, -0.145], 0.009, MAT.steel);
  tube('sonda', [[1.254, 0.644, -0.145], [1.30, 0.80, -0.06], [1.44, 0.85, 0.05]], 0.003, MAT.cable);
  rod('sonda2', [1.16, 0.30, -0.10], [1.20, 0.33, -0.12], 0.009, MAT.steel);
  tube('sonda2', [[1.20, 0.33, -0.12], [1.26, 0.48, -0.20], [1.36, 0.82, -0.18]], 0.003, MAT.cable);
  add('sens_oleo', gCyl(0.01, 0.01, 0.03, 'x', 12), MAT.black, [1.525, 0.45, -0.22]);
  /* arrefecimento: radiador com tanques em cima e embaixo e dois eletroventiladores atrás */
  box('radiador', [1.93, 0.48, 0], [0.028, 0.30, 0.62], MAT.aluDark);
  for (let k = -9; k <= 9; k++) box('radiador', [1.945, 0.48, k * 0.031], [0.003, 0.29, 0.004], MAT.alu);
  box('radiador', [1.93, 0.645, 0], [0.04, 0.035, 0.64], MAT.black, 0.008);
  box('radiador', [1.93, 0.315, 0], [0.04, 0.035, 0.64], MAT.black, 0.008);
  add('tampa_rad', gCyl(0.022, 0.022, 0.02, 'y', 24), MAT.steel, [1.93, 0.675, -0.20]);
  add('tampa_rad', gCyl(0.012, 0.012, 0.025, 'y', 16), MAT.black, [1.93, 0.69, -0.20]);
  [0.155, -0.165].forEach(z => {
    add('ventoinha', gTorus(0.135, 0.011, 'x', 8, 48), MAT.plastic, [1.895, 0.48, z]);
    add('ventoinha', gCyl(0.04, 0.04, 0.05, 'x', 20), MAT.black, [1.875, 0.48, z]);
    const fan = new THREE.Group(); fan.position.set(1.888, 0.48, z); reg('ventoinha').group.add(fan); (ANIM.fans = ANIM.fans || []).push(fan);
    for (let k = 0; k < 5; k++) { const m = add('ventoinha', gBox(0.006, 0.12, 0.034, 0.003), MAT.plastic, [0, 0.07 * Math.cos(k * TAU / 5), 0.07 * Math.sin(k * TAU / 5)], [k * TAU / 5, 0.35, 0], fan); m.rotation.order = 'XYZ'; }
  });
  box('ventoinha', [1.90, 0.48, 0], [0.012, 0.30, 0.62], MAT.plastic);
  ANIM.fan = ANIM.fans[0];
  kit('vaso', 'reservoir', { at: [1.84, 0.62, -0.56], s: [0.09, 0.15, 0.10], mats: { tank: MAT.coolantTank } });
  kit('vaso', 'res_cap', { at: [1.84, 0.695, -0.56], mats: { tankNeck: MAT.coolantTank } });
  tube('vaso', [[1.84, 0.70, -0.52], [1.90, 0.71, -0.40], [1.93, 0.69, -0.22]], 0.0045, MAT.hose);
  box('termostato', [1.505, 0.50, 0.115], [0.055, 0.06, 0.05], MAT.aluDark, 0.008);
  /* bomba d'água presa na tampa da corrente, com a polia no plano da correia de acessórios */
  add('bomba_agua', gCyl(0.042, 0.042, 0.022, 'z', 24), MAT.aluDark, [1.47, 0.63, ZT - 0.05]);
  add('bomba_agua', gCyl(0.047, 0.047, 0.02, 'z', 28), MAT.steel, [1.47, 0.63, ZA]);
  add('bomba_agua', gCyl(0.012, 0.012, 0.03, 'z', 12), MAT.steelDark, [1.47, 0.63, ZA - 0.016]);
  tube('mang_sup', [[1.37, 0.71, 0.14], [1.52, 0.725, 0.20], [1.72, 0.70, 0.24], [1.91, 0.64, 0.24]], 0.017, MAT.hose);
  tube('mang_inf', [[1.91, 0.33, -0.22], [1.78, 0.34, -0.14], [1.66, 0.42, 0.02], [1.53, 0.49, 0.115]], 0.017, MAT.hose);
  tube('mang_aquec', [[1.34, 0.71, 0.13], [1.18, 0.66, 0.12], [1.06, 0.66, 0.04], [0.99, 0.67, 0.03]], 0.009, MAT.hose);
  tube('mang_aquec', [[0.99, 0.65, -0.04], [1.10, 0.60, -0.12], [1.25, 0.57, -0.30], [1.40, 0.60, -0.39], [1.45, 0.62, -0.395]], 0.009, MAT.hose);
}

function buildExhaust() {
  /* coletor atrás do motor, voltado para o corta-fogo, com o catalisador logo embaixo */
  kit('coletor_esc', 'exhaust_tiida');
  CYLZ.forEach(z => route('coletor_esc', [[1.27, 0.685, z], [1.235, 0.66, z * 0.8 - 0.02], [1.20, 0.585, -0.10]]));
  kit('protetor', 'shield_tiida');
  kit('catalisador', 'catalytic', { at: [1.18, 0.45, -0.09] });
  tube('tubo_diant', [[1.18, 0.335, -0.09], [1.16, 0.22, -0.06], [1.06, 0.19, -0.02], [0.60, 0.185, 0.0], [0.25, 0.19, 0.02]], 0.023, MAT.exhaust);
  for (let k = -4; k <= 4; k++) add('tubo_diant', gTorus(0.030, 0.003, 'x', 4, 20), MAT.steelDark, [0.92 + k * 0.012, 0.187, -0.006]);
  add('tubo_diant', gCyl(0.029, 0.029, 0.11, 'x', 20), MAT.steel, [0.92, 0.187, -0.006]);
  add('silenc_inter', gCyl(0.058, 0.058, 0.46, 'x', 28), MAT.exhaust, [-0.03, 0.195, 0.02]);
  /* o tubo traseiro passa por baixo da travessa do eixo e vai ao silencioso, do lado esquerdo */
  tube('tubo_tras', [[-0.27, 0.195, 0.02], [-0.55, 0.20, 0.06], [-1.0, 0.205, 0.20], [-1.30, 0.21, 0.32], [-1.58, 0.255, 0.44]], 0.022, MAT.exhaust);
  kit('silenc_tras', 'muffler', { at: [-1.77, 0.255, 0.46] });
  tube('silenc_tras', [[-1.94, 0.255, 0.48], [-2.0, 0.25, 0.49], [-2.09, 0.25, 0.49]], 0.024, MAT.chrome);
  [[0.75, 0.20, -0.01], [-0.40, 0.21, 0.04], [-1.0, 0.215, 0.20], [-1.92, 0.30, 0.47], [-1.62, 0.30, 0.45]].forEach(p => box('coxins_esc', [p[0], p[1] + 0.04, p[2]], [0.03, 0.05, 0.02], MAT.rubber, 0.005));
}

function buildElectricTrans() {
  kit('bateria', 'battery', { at: [1.85, 0.60, 0.50], s: [1.03, 1.0, 0.917] });
  tube('cabos_bat', [[1.809, 0.705, 0.418], [1.76, 0.68, 0.30], [1.62, 0.62, 0.24], [1.45, 0.60, 0.27], [1.33, 0.60, 0.32], [1.27, 0.55, 0.30], [1.249, 0.52, 0.288]], 0.008, MAT.redCable);
  tube('cabos_bat', [[1.809, 0.705, 0.582], [1.88, 0.66, 0.66], [1.86, 0.52, 0.70]], 0.008, MAT.cable);
  tube('cabos_bat', [[1.34, 0.50, 0.42], [1.38, 0.56, 0.52], [1.40, 0.60, 0.60]], 0.006, MAT.cable);
  box('caixa_fus_motor', [1.47, 0.70, 0.62], [0.12, 0.10, 0.12], MAT.black, 0.01);
  box('caixa_fus_painel', [0.56, 0.52, 0.62], [0.12, 0.12, 0.05], MAT.black, 0.008);
  box('bcm', [0.60, 0.62, 0.52], [0.12, 0.03, 0.15], MAT.box, 0.006);
  kit('alternador', 'alternator', { at: [1.62, 0.68, ZA - 0.011] });
  kit('motor_partida', 'starter', { at: [1.24, 0.46, 0.235] });
  /* chicote: da cabine à central e ao motor; e da cabine até a bomba no tanque */
  tube('chicote', [[0.62, 0.62, 0.50], [0.90, 0.76, 0.55], [1.10, 0.87, 0.52], [1.45, 0.82, 0.60], [1.60, 0.82, 0.57], [1.55, 0.87, 0.30], [1.50, 0.875, 0.10], [1.48, 0.87, -0.25], [1.30, 0.89, -0.40]], 0.011, MAT.harness);
  tube('chicote', [[1.55, 0.74, 0.60], [1.20, 0.80, 0.63], [0.95, 0.72, 0.62], [0.58, 0.58, 0.62], [0.44, 0.26, 0.72], [-0.55, 0.26, 0.72], [-0.68, 0.36, 0.30], [-0.70, 0.345, -0.16]], 0.009, MAT.harness);
  add('buzina', gCyl(0.045, 0.045, 0.02, 'x', 24), MAT.black, [2.12, 0.44, 0.30]);
  add('limpador', gCyl(0.036, 0.036, 0.10, 'x', 20), MAT.black, [1.00, 0.95, -0.28]);
  rod('limpador', [0.97, 0.97, -0.46], [0.97, 0.97, 0.10], 0.005, MAT.steel);
  kit('lavador', 'reservoir', { at: [2.02, 0.44, -0.50], s: [0.10, 0.18, 0.12], mats: { tank: MAT.whiteRes } });
  tube('lavador', [[2.02, 0.53, -0.52], [1.98, 0.70, -0.56], [1.95, 0.80, -0.58]], 0.012, MAT.whiteRes);
  kit('lavador', 'res_cap', { at: [1.95, 0.805, -0.58], s: 0.8, mats: { black: MAT.blue, tankNeck: MAT.whiteRes } });
  tube('lavador', [[1.95, 0.42, -0.45], [1.40, 0.30, -0.66], [0.40, 0.24, -0.72], [-1.20, 0.30, -0.70], [-1.60, 1.30, -0.60], [-1.72, 1.44, -0.05]], 0.0028, MAT.cable);
  /* câmbio manual de 6 marchas (lado esquerdo) com embreagem hidráulica */
  kit('cambio', 'gearbox_tiida');
  add('diferencial', gCyl(0.09, 0.09, 0.26, 'z', 32), MAT.alu, [1.29, 0.305, 0.20]);
  add('diferencial', gTorus(0.075, 0.01, 'z', 6, 36), MAT.steel, [1.29, 0.305, 0.13]);
  S.forEach(s => {
    const zi = s > 0 ? 0.33 : 0.07;
    const pts = s > 0 ? [[1.29, WY, zi], [1.30, WY, 0.48], [XFA, WY, s * 0.645]] : [[1.29, WY, zi], [1.30, WY, -0.18], [XFA, WY, s * 0.645]];
    tube('semieixos', pts, 0.013, MAT.steel);
    /* coifas sanfonadas: a boca grande fica na junta (na roda por fora, no câmbio por dentro) */
    kit('semieixos', 'cv_boot', { at: [XFA, WY, s * 0.64], rot: s > 0 ? [0, Math.PI, 0] : null });
    kit('semieixos', 'cv_boot', { at: [1.295, WY, (s > 0 ? 0.37 : 0.03) - s * 0.035], rot: s > 0 ? null : [0, Math.PI, 0] });
  });
  tube('cabos_cambio', [[1.30, 0.58, 0.31], [1.12, 0.62, 0.24], [0.98, 0.42, 0.10], [0.60, 0.25, 0.03], [0.25, 0.30, 0.0]], 0.0045, MAT.cable);
  tube('cabos_cambio', [[1.32, 0.58, 0.35], [1.14, 0.63, 0.27], [0.99, 0.43, 0.12], [0.60, 0.255, 0.05], [0.25, 0.31, 0.02]], 0.0045, MAT.cable);
  rod('alavanca', [0.22, 0.34, 0], [0.18, 0.64, 0], 0.008, MAT.steel);
  sph('alavanca', [0.18, 0.665, 0], 0.03, MAT.black);
  add('alavanca', gCyl(0.02, 0.07, 0.08, 'y', 20), MAT.black, [0.21, 0.45, 0]);
  add('cil_emb_mestre', gCyl(0.013, 0.013, 0.09, 'x', 16), MAT.alu, [1.06, 0.74, 0.27]);
  add('cil_emb_aux', gCyl(0.016, 0.016, 0.07, 'x', 16), MAT.alu, [1.47, 0.58, 0.25]);
  tube('tubo_emb', [[1.10, 0.74, 0.27], [1.16, 0.78, 0.36], [1.19, 0.79, 0.41]], 0.003, MAT.steel);
  tube('tubo_emb', [[1.10, 0.735, 0.27], [1.22, 0.72, 0.30], [1.38, 0.64, 0.29], [1.44, 0.59, 0.255]], 0.003, MAT.steel);
}

/* ===== Ar-condicionado: compressor, condensador, filtro secador, válvula de expansão, evaporador e tubulações ===== */
function buildAC() {
  kit('compressor', 'compressor', { at: [1.62, 0.31, ZA - 0.012] });
  box('condensador', [1.968, 0.48, -0.01], [0.016, 0.30, 0.60], MAT.alu);
  for (let k = -9; k <= 9; k++) box('condensador', [1.978, 0.48, k * 0.031 - 0.01], [0.002, 0.29, 0.003], MAT.aluDark);
  add('filtro_secador', gCyl(0.03, 0.03, 0.20, 'y', 20), MAT.alu, [1.955, 0.47, -0.355]);
  box('pressostato', [1.88, 0.565, -0.39], [0.025, 0.03, 0.025], MAT.black, 0.004);
  tube('tubos_ac', [[1.634, 0.40, -0.245], [1.75, 0.42, -0.25], [1.86, 0.56, -0.30], [1.968, 0.61, -0.30]], 0.008, MAT.acPipe);
  tube('tubos_ac', [[1.955, 0.38, -0.355], [1.85, 0.48, -0.42], [1.60, 0.60, -0.48], [1.25, 0.74, -0.45], [1.02, 0.72, -0.36]], 0.006, MAT.acPipe);
  tube('tubos_ac', [[1.02, 0.70, -0.30], [1.20, 0.72, -0.40], [1.42, 0.62, -0.43], [1.58, 0.44, -0.30], [1.607, 0.40, -0.245]], 0.011, MAT.acPipe);
  box('valv_exp', [1.005, 0.71, -0.33], [0.025, 0.05, 0.05], MAT.aluDark, 0.004);
  box('evaporador', [0.80, 0.66, -0.30], [0.06, 0.18, 0.22], MAT.alu);
  for (let k = -3; k <= 3; k++) box('evaporador', [0.832, 0.66, -0.30 + k * 0.03], [0.002, 0.17, 0.004], MAT.aluDark);
  box('rad_aquec', [0.80, 0.63, 0.0], [0.045, 0.15, 0.19], MAT.copper);
  for (let k = -2; k <= 2; k++) box('rad_aquec', [0.825, 0.63, k * 0.035], [0.002, 0.14, 0.004], MAT.aluDark);
  tube('rad_aquec', [[0.99, 0.67, 0.03], [0.92, 0.67, 0.035], [0.83, 0.68, 0.04]], 0.008, MAT.copper);
  tube('rad_aquec', [[0.99, 0.65, -0.04], [0.92, 0.65, -0.045], [0.83, 0.66, -0.05]], 0.008, MAT.copper);
  box('filtro_cabine', [0.68, 0.70, -0.42], [0.02, 0.10, 0.22], MAT.paper, 0.003);
  add('vent_interno', gCyl(0.075, 0.075, 0.10, 'y', 28), MAT.black, [0.62, 0.60, -0.52]);
  box('caixa_ar', [0.74, 0.68, -0.04], [0.24, 0.24, 0.58], MAT.plastic, 0.02);
  [-0.07, 0, 0.07].forEach(z => add('comandos_clima', gCyl(0.022, 0.022, 0.02, 'x', 20), MAT.plastic, [0.475, 0.76, z]));
  box('comandos_clima', [0.478, 0.72, 0], [0.006, 0.02, 0.06], MAT.black, 0.003);
}

/* ===== Rodas, suspensão (McPherson na frente, eixo de torção atrás), freios com ABS e direção elétrica ===== */
const TIRE_PROF = [[0.196, -0.083], [0.214, -0.0935], [0.262, -0.0945], [0.296, -0.089], [0.309, -0.075], [0.311, -0.052], [0.311, 0.052], [0.309, 0.075], [0.296, 0.089], [0.262, 0.0945], [0.214, 0.0935], [0.196, 0.083]];
function hubcapGeo() {
  const sh = new THREE.Shape(); sh.absarc(0, 0, 0.185, 0, TAU, false);
  for (let k = 0; k < 8; k++) {
    const a0 = k * TAU / 8 + 0.14, a1 = (k + 1) * TAU / 8 - 0.14, h = new THREE.Path();
    h.moveTo(Math.cos(a0) * 0.10, Math.sin(a0) * 0.10);
    h.absarc(0, 0, 0.165, a0, a1, false);
    h.lineTo(Math.cos(a1) * 0.10, Math.sin(a1) * 0.10);
    h.absarc(0, 0, 0.10, a1, a0, true);
    sh.holes.push(h);
  }
  return new THREE.ExtrudeGeometry(sh, { depth: 0.012, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 1, curveSegments: 10 });
}
function buildWheels() {
  const hc = hubcapGeo();
  [XFA, XRA].forEach(X => S.forEach(s => {
    const zc = s * TRK, flip = s < 0 ? [0, Math.PI, 0] : null, front = X === XFA, c = V(X, WY, zc);
    let yaw = null;
    if (front) { yaw = pivotOf('mangas', [X, WY, zc]); Object.assign(yaw.userData, { abs: true, owner: 'mangas', side: s, absPos: c.clone() }); }
    const spin = new THREE.Group();
    if (yaw) yaw.add(spin); else { spin.position.copy(c); reg('pneus').group.add(spin); }
    Object.assign(spin.userData, { abs: true, owner: front ? 'mangas' : 'pneus', side: s, absPos: c.clone() });
    WHEELS.push({ X, s, front, yaw, spin });
    const t = add('pneus', gLathe(TIRE_PROF, 'z', 56), MAT.tire, [X, WY, zc], flip, spin); t.castShadow = true;
    add('rodas', gCyl(0.19, 0.19, 0.15, 'z', 40, true), MAT.wheelSteel, [X, WY, zc], null, spin);
    add('rodas', gTorus(0.198, 0.006, 'z', 6, 48), MAT.wheelSteel, [X, WY, zc + 0.075], null, spin);
    add('rodas', gTorus(0.198, 0.006, 'z', 6, 48), MAT.wheelSteel, [X, WY, zc - 0.075], null, spin);
    add('rodas', gLathe([[0.034, 0.0], [0.10, 0.004], [0.17, -0.012], [0.188, -0.03]], 'z', 40), MAT.wheelSteel, [X, WY, zc + s * 0.024], flip, spin);
    add('calotas', hc, MAT.hubcap, [X, WY, zc + s * 0.078], flip, spin);
    add('calotas', gCyl(0.05, 0.056, 0.012, 'z', 32), MAT.hubcap, [X, WY, zc + s * 0.094], null, spin);
  }));
  /* estepe deitado no poço, sob o assoalho do porta-malas */
  add('estepe', gLathe(TIRE_PROF, 'y', 48), MAT.tire, [-1.66, 0.43, 0]);
  add('estepe', gCyl(0.19, 0.19, 0.13, 'y', 36, true), MAT.wheelSteel, [-1.66, 0.43, 0]);
  add('estepe', gCyl(0.17, 0.17, 0.006, 'y', 36), MAT.wheelSteel, [-1.66, 0.445, 0]);
  rod('estepe', [-1.66, 0.37, 0], [-1.66, 0.53, 0], 0.006, MAT.steel);
  box('macaco', [-1.66, 0.50, 0.42], [0.30, 0.05, 0.08], MAT.steelDark, 0.01);
  rod('macaco', [-1.81, 0.50, 0.30], [-1.51, 0.50, 0.30], 0.008, MAT.steel);
}

function buildSuspensionBrakes() {
  S.forEach(s => {
    const WF = WHEELS.find(w => w.front && w.s === s), WRr = WHEELS.find(w => !w.front && w.s === s);
    /* ---- frente: McPherson ---- */
    const bot = [XFA + 0.012, 0.42, s * 0.635], top = [XFA + 0.03, 0.87, s * 0.56];
    rod('amort_diant', bot, lerp3(bot, top, 0.53), 0.026, MAT.steelDark);
    rod('amort_diant', lerp3(bot, top, 0.5), top, 0.011, MAT.chrome);
    rod('amort_diant', lerp3(bot, top, 0.44), lerp3(bot, top, 0.455), 0.085, MAT.steelDark);
    spring('molas_diant', lerp3(bot, top, 0.46), lerp3(bot, top, 0.92), 0.072, 0.0072, 5.5, MAT.spring);
    rod('coxins_amort', lerp3(bot, top, 0.93), lerp3(bot, top, 0.985), 0.06, MAT.rubber);
    add('coxins_amort', gTorus(0.047, 0.006, 'y', 6, 24), MAT.steel, lerp3(bot, top, 0.95));
    box('mangas', [XFA, 0.31, s * 0.66], [0.06, 0.21, 0.05], MAT.iron, 0.01, null, WF.yaw);
    add('mangas', gCyl(0.042, 0.042, 0.05, 'z', 24), MAT.steel, [XFA, WY, s * 0.72], null, WF.yaw);
    rod('mangas', [XFA - 0.02, 0.37, s * 0.65], [XFA - 0.14, 0.37, s * 0.625], 0.012, MAT.iron, WF.yaw);
    rod('mangas', [XFA, 0.39, s * 0.66], bot, 0.02, MAT.iron, WF.yaw);
    const bj = [XFA, 0.18, s * 0.655];
    rod('bandejas', bj, [XFA + 0.10, 0.21, s * 0.37], 0.016, MAT.steelDark);
    rod('bandejas', bj, [XFA - 0.24, 0.21, s * 0.40], 0.016, MAT.steelDark);
    rod('bandejas', [XFA + 0.08, 0.21, s * 0.43], [XFA - 0.20, 0.21, s * 0.43], 0.012, MAT.steelDark);
    sph('bandejas', bj, 0.021, MAT.steel);
    add('bandejas', gCyl(0.024, 0.024, 0.05, 'x', 16), MAT.rubber, [XFA + 0.10, 0.21, s * 0.37]);
    add('bandejas', gCyl(0.032, 0.032, 0.045, 'y', 16), MAT.rubber, [XFA - 0.24, 0.21, s * 0.40]);
    rod('barra_estab', [XFA - 0.07, 0.29, s * 0.56], [XFA + 0.012, 0.50, s * 0.63], 0.007, MAT.steel);
    box('barra_estab', [XFA - 0.26, 0.27, s * 0.30], [0.04, 0.035, 0.04], MAT.rubber, 0.008);
    box('subchassi', [1.38, 0.215, s * 0.42], [0.66, 0.05, 0.065], MAT.steelDark, 0.01);
    /* freio dianteiro: disco ventilado, pinça flutuante e sensor do ABS na manga */
    kit('discos', 'disc_v', { at: [XFA, WY, s * 0.695], rot: s > 0 ? null : [0, Math.PI, 0], parent: WF.spin });
    add('sens_roda', gTorus(0.075, 0.004, 'z', 4, 40), MAT.steelDark, [XFA, WY, s * 0.675], null, WF.spin);
    /* pinça: peça de CAD desenhada em +x e girada para trás e para cima; do lado direito ela é espelhada (pistão para dentro) */
    const ang = Math.atan2(0.05, -0.10), rotC = s > 0 ? [0, 0, ang] : [0, Math.PI, Math.PI - ang];
    const rp = (r, t, z) => [XFA + Math.cos(ang) * r - Math.sin(ang) * t, WY + Math.sin(ang) * r + Math.cos(ang) * t, s * z];
    kit('pincas', 'caliper', { at: [XFA, WY, s * 0.695], rot: rotC, parent: WF.yaw });
    kit('pastilhas', 'pads_v', { at: [XFA, WY, s * 0.695], rot: rotC, parent: WF.yaw });
    tube('tubos_freio', [rp(0.14, -0.02 * s, 0.657), [XFA - 0.03, 0.48, s * 0.625], [XFA - 0.02, 0.58, s * 0.585]], 0.005, MAT.rubber);
    add('sens_roda', gCyl(0.009, 0.009, 0.04, 'y', 12), MAT.black, [XFA + 0.07, WY + 0.07, s * 0.67], null, WF.yaw);
    tube('sens_roda', [[XFA + 0.07, WY + 0.095, s * 0.67], [XFA + 0.02, 0.50, s * 0.63], [XFA + 0.01, 0.62, s * 0.59]], 0.0025, MAT.cable);
    /* ---- traseira: eixo de torção (dois braços e uma travessa), molas e amortecedores separados ---- */
    const bu = [-0.86, 0.33, s * 0.62], hub = [XRA, WY, s * 0.655];
    rod('eixo_tras', bu, hub, 0.03, MAT.steelDark);
    box('eixo_tras', [XRA, 0.29, s * 0.60], [0.16, 0.14, 0.03], MAT.steelDark, 0.01);
    box('eixo_tras', [XRA + 0.05, 0.315, s * 0.55], [0.15, 0.018, 0.13], MAT.steelDark, 0.006);
    add('buchas_eixo', gCyl(0.04, 0.04, 0.06, 'z', 20), MAT.rubber, bu);
    box('buchas_eixo', [-0.86, 0.36, s * 0.62], [0.08, 0.06, 0.08], MAT.steelDark, 0.006);
    box('cubo_tras', [XRA, 0.33, s * 0.655], [0.07, 0.22, 0.04], MAT.iron, 0.01);
    add('cubo_tras', gCyl(0.03, 0.03, 0.07, 'z', 20), MAT.steel, [XRA, WY, s * 0.68]);
    add('sens_roda', gCyl(0.009, 0.009, 0.04, 'y', 12), MAT.black, [XRA - 0.07, WY + 0.07, s * 0.665]);
    tube('sens_roda', [[XRA - 0.07, WY + 0.095, s * 0.665], [XRA - 0.02, 0.48, s * 0.60], [XRA + 0.10, 0.56, s * 0.56]], 0.0025, MAT.cable);
    spring('molas_tras', [XRA + 0.05, 0.325, s * 0.55], [XRA + 0.05, 0.60, s * 0.55], 0.06, 0.0068, 5, MAT.spring);
    add('molas_tras', gCyl(0.065, 0.065, 0.012, 'y', 24), MAT.rubber, [XRA + 0.05, 0.605, s * 0.55]);
    const sb = [XRA - 0.06, 0.235, s * 0.60], st = [XRA - 0.10, 0.64, s * 0.565];
    rod('amort_tras', sb, lerp3(sb, st, 0.55), 0.024, MAT.steelDark);
    rod('amort_tras', lerp3(sb, st, 0.5), st, 0.01, MAT.chrome);
    add('tambores', gCyl(0.10, 0.10, 0.05, 'z', 40), MAT.iron, [XRA, WY, s * 0.70], null, WRr.spin);
    add('tambores', gCyl(0.11, 0.11, 0.006, 'z', 40), MAT.steelDark, [XRA, WY, s * 0.672], null, WRr.spin);
    for (const a of [0, Math.PI]) { const m = add('sapatas', new THREE.TorusGeometry(0.086, 0.01, 6, 20, Math.PI * 0.8), MAT.pad, [XRA, WY, s * 0.70]); m.rotation.z = a + Math.PI * 0.1; }
    add('sapatas', gCyl(0.012, 0.012, 0.06, 'x', 12), MAT.steel, [XRA, WY + 0.075, s * 0.695]);
    tube('freio_mao', [[-0.05, 0.22, 0.0], [-0.40, 0.205, s * 0.30], [-0.70, 0.205, s * 0.43], [-1.05, 0.25, s * 0.60], [XRA, WY - 0.05, s * 0.675]], 0.004, MAT.cable);
  });
  /* travessa do eixo traseiro: perfil aberto que torce, logo à frente das rodas */
  add('eixo_tras', gCyl(0.035, 0.035, 1.22, 'z', 20), MAT.steelDark, [-1.13, 0.30, 0]);
  box('eixo_tras', [-1.13, 0.33, 0], [0.06, 0.012, 1.18], MAT.steelDark);
  /* barra estabilizadora e subchassi dianteiro */
  tube('barra_estab', [[XFA - 0.07, 0.29, -0.56], [XFA - 0.24, 0.275, -0.50], [XFA - 0.26, 0.27, -0.30], [XFA - 0.26, 0.27, 0.30], [XFA - 0.24, 0.275, 0.50], [XFA - 0.07, 0.29, 0.56]], 0.011, MAT.steel);
  box('subchassi', [1.70, 0.215, 0], [0.05, 0.05, 0.90], MAT.steelDark, 0.01);
  box('subchassi', [1.06, 0.215, 0], [0.06, 0.05, 0.90], MAT.steelDark, 0.01);
  /* hidráulica: servo, cilindro-mestre, ABS e as linhas (ABS → frente esquerda, frente direita, traseira, ramais; mestre → ABS) */
  kit('servo', 'booster', { at: [1.06, 0.70, 0.42], rot: [0, Math.PI / 2, 0] });
  add('cil_mestre', gCyl(0.025, 0.025, 0.13, 'x', 20), MAT.alu, [1.19, 0.71, 0.42]);
  kit('reserv_freio', 'reservoir', { at: [1.19, 0.775, 0.42], s: [0.06, 0.07, 0.09], mats: { tank: MAT.fluid } });
  kit('reserv_freio', 'res_cap', { at: [1.19, 0.81, 0.42], s: 0.9, mats: { tankNeck: MAT.fluid } });
  box('abs', [1.22, 0.58, 0.52], [0.10, 0.09, 0.10], MAT.aluDark, 0.01);
  add('abs', gCyl(0.03, 0.03, 0.06, 'x', 20), MAT.black, [1.30, 0.58, 0.52]);
  box('abs', [1.165, 0.58, 0.52], [0.012, 0.08, 0.09], MAT.black, 0.004);
  box('abs', [1.22, 0.525, 0.52], [0.12, 0.01, 0.12], MAT.steelDark);
  tube('tubos_freio', [[1.22, 0.625, 0.55], [1.26, 0.66, 0.58], [1.30, 0.62, 0.60], [XFA - 0.02, 0.58, 0.585]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.20, 0.625, 0.49], [1.16, 0.60, 0.20], [1.20, 0.52, -0.45], [XFA - 0.02, 0.58, -0.585]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.18, 0.54, 0.50], [1.02, 0.30, 0.46], [0.40, 0.205, 0.46], [-0.80, 0.215, 0.46], [-1.02, 0.34, 0.44], [-1.05, 0.36, -0.44]], 0.003, MAT.steel);
  S.forEach(s => tube('tubos_freio', [[-1.05, 0.36, s * 0.44], [-1.15, 0.36, s * 0.58], [XRA, WY + 0.075, s * 0.67]], 0.003, MAT.steel));
  tube('tubos_freio', [[1.25, 0.72, 0.43], [1.30, 0.70, 0.47], [1.27, 0.64, 0.51], [1.24, 0.625, 0.52]], 0.003, MAT.steel);
  tube('mang_vacuo', [[1.64, 0.84, -0.12], [1.50, 0.88, 0.12], [1.28, 0.84, 0.32], [1.12, 0.73, 0.38]], 0.008, MAT.hose);
  rod('pedal_freio', [0.73, 0.66, 0.34], [0.68, 0.38, 0.34], 0.008, MAT.steelDark);
  box('pedal_freio', [0.672, 0.365, 0.34], [0.02, 0.05, 0.075], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('pedal_emb', [0.73, 0.66, 0.46], [0.68, 0.38, 0.46], 0.008, MAT.steelDark);
  box('pedal_emb', [0.672, 0.365, 0.46], [0.02, 0.05, 0.07], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('freio_mao', [-0.24, 0.42, 0.0], [0.02, 0.49, 0.0], 0.014, MAT.black);
}

function buildSteering() {
  /* caixa de direção mecânica (pinhão e cremalheira); a assistência fica na coluna, sob o painel */
  add('caixa_dir', gCyl(0.026, 0.026, 0.70, 'z', 20), MAT.alu, [1.13, 0.37, 0]);
  add('caixa_dir', gCyl(0.03, 0.03, 0.09, 'y', 20), MAT.alu, [1.13, 0.41, 0.26]);
  box('caixa_dir', [1.13, 0.385, 0.20], [0.045, 0.035, 0.06], MAT.aluDark, 0.008);
  S.forEach(s => {
    for (let k = 0; k < 6; k++) add('caixa_dir', gTorus(0.028, 0.007, 'z', 6, 20), MAT.rubber, [1.13, 0.37, s * (0.36 + k * 0.014)]);
    const inner = V(1.13, 0.37, s * 0.44), outer = V(XFA - 0.14, 0.37, s * 0.625);
    const bar = add('barras_axiais', new THREE.CylinderGeometry(0.009, 0.009, 1, 12), MAT.steel); bar.userData.noMerge = true; setBar(bar, inner, outer);
    const ball = sph('barras_axiais', [outer.x, outer.y, outer.z], 0.018, MAT.steelDark); ball.userData.noMerge = true;
    ANIM.tie.push({ s, bar, ball, inner, outer, pid: 'barras_axiais' });
  });
  tube('coluna', [[1.13, 0.45, 0.26], [0.96, 0.58, 0.31], [0.70, 0.76, 0.35], [0.42, 0.97, 0.37]], 0.017, MAT.steelDark);
  sph('coluna', [0.96, 0.58, 0.31], 0.024, MAT.steel);
  /* direção elétrica: redutor em volta da coluna, motor ao lado e o módulo eletrônico */
  add('eps', gCyl(0.045, 0.045, 0.09, 'x', 24), MAT.aluDark, [0.66, 0.79, 0.352]);
  add('eps', gCyl(0.036, 0.036, 0.13, 'z', 24), MAT.black, [0.64, 0.84, 0.30]);
  box('eps', [0.62, 0.86, 0.42], [0.09, 0.03, 0.08], MAT.box, 0.006);
  const c = V(0.36, 1.015, 0.37), ax = V(-0.82, 0.57, 0).normalize();
  const sw = pivotOf('volante_dir', [c.x, c.y, c.z]);
  Object.assign(sw.userData, { abs: true, owner: 'volante_dir', absPos: c.clone() });
  ANIM.wheel = { g: sw, ax };
  const w = add('volante_dir', gTorus(0.185, 0.017, 'z', 10, 56), MAT.black, [c.x, c.y, c.z], null, sw);
  w.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
  const hub = add('airbag_mot', gCyl(0.085, 0.09, 0.06, 'y', 28), MAT.black, [c.x + ax.x * 0.012, c.y + ax.y * 0.012, c.z], null, sw);
  hub.quaternion.setFromUnitVectors(UPY, ax);
  const u = V(0, 0, 1), v = ax.clone().cross(u).normalize();
  [Math.PI / 2, Math.PI * 7 / 6, -Math.PI / 6].forEach(a => {
    const d = u.clone().multiplyScalar(Math.cos(a)).addScaledVector(v, Math.sin(a));
    rod('volante_dir', [c.x, c.y, c.z], [c.x + d.x * 0.18, c.y + d.y * 0.18, c.z + d.z * 0.18], 0.012, MAT.black, sw);
  });
  const cs = add('cabo_espiral', gTorus(0.05, 0.012, 'z', 8, 28), MAT.black, [c.x - ax.x * 0.035, c.y - ax.y * 0.035, c.z]);
  cs.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
  add('ign_chave', gCyl(0.022, 0.022, 0.05, 'y', 16), MAT.steelDark, [0.52, 0.90, 0.29]);
  box('comutadores', [0.44, 0.96, 0.47], [0.03, 0.03, 0.08], MAT.black, 0.008);
  box('comutadores', [0.44, 0.96, 0.27], [0.03, 0.03, 0.08], MAT.black, 0.008);
}

function buildFuelRear() {
  box('tanque', [-0.75, 0.245, 0.0], [0.52, 0.16, 0.80], MAT.plastic, 0.045);
  add('bomba_comb', gCyl(0.055, 0.055, 0.13, 'y', 24), MAT.whiteRes, [-0.70, 0.26, -0.18]);
  add('bomba_comb', gCyl(0.078, 0.078, 0.008, 'y', 28), MAT.black, [-0.70, 0.328, -0.18]);
  rod('boia', [-0.70, 0.23, -0.18], [-0.56, 0.20, 0.05], 0.003, MAT.steel);
  box('boia', [-0.56, 0.20, 0.05], [0.04, 0.02, 0.03], MAT.black, 0.005);
  tube('linhas_comb', [[-0.70, 0.335, -0.22], [-0.55, 0.345, -0.30], [-0.46, 0.30, -0.38], [-0.40, 0.215, -0.40], [0.40, 0.205, -0.38], [0.95, 0.215, -0.36]], 0.005, MAT.steel);
  tube('bocal', [[-1.55, 0.90, -0.80], [-1.52, 0.80, -0.62], [-1.40, 0.62, -0.50], [-1.20, 0.42, -0.44], [-1.05, 0.34, -0.38], [-0.98, 0.31, -0.33]], 0.022, MAT.black);
  add('canister', gCyl(0.04, 0.04, 0.22, 'x', 24), MAT.black, [-0.75, 0.20, -0.50]);
  tube('canister', [[-0.80, 0.33, -0.28], [-0.88, 0.30, -0.42], [-0.88, 0.22, -0.50]], 0.004, MAT.cable);
  tube('canister', [[-0.64, 0.20, -0.50], [-0.40, 0.205, -0.46], [0.80, 0.215, -0.44], [1.02, 0.45, -0.42], [1.30, 0.80, -0.30], [1.62, 0.86, -0.24]], 0.004, MAT.cable);
}

function buildInterior() {
  box('painel', [0.66, 0.87, 0], [0.38, 0.30, 1.40], MAT.dash, 0.05);
  box('painel', [0.52, 1.04, 0.37], [0.14, 0.05, 0.32], MAT.dash, 0.02);
  box('painel', [0.46, 0.62, 0], [0.12, 0.24, 0.24], MAT.dash, 0.02);
  box('painel', [0.48, 0.80, -0.40], [0.02, 0.13, 0.34], MAT.plastic, 0.01);
  box('quadro', [0.50, 0.98, 0.37], [0.02, 0.11, 0.29], MAT.black, 0.01);
  [[0.27, 0.045], [0.47, 0.045]].forEach(([z, r]) => {
    add('quadro', gCyl(r, r, 0.004, 'x', 32), MAT.grille, [0.488, 0.98, z]);
    add('quadro', gTorus(r, 0.003, 'x', 4, 32), MAT.chrome, [0.487, 0.98, z]);
  });
  box('quadro', [0.488, 0.98, 0.37], [0.004, 0.05, 0.08], MAT.lensAmber);
  box('radio', [0.47, 0.87, 0], [0.02, 0.05, 0.18], MAT.black, 0.004);
  box('radio', [0.459, 0.875, 0], [0.002, 0.015, 0.08], MAT.lensAmber);
  box('airbag_pass', [0.62, 1.025, -0.38], [0.14, 0.012, 0.28], MAT.dash, 0.006);
  box('airbag_pass', [0.63, 0.995, -0.38], [0.12, 0.05, 0.24], MAT.airbag, 0.01);
  box('srs', [0.34, 0.30, 0], [0.10, 0.04, 0.12], MAT.yellow, 0.006);
  box('console', [0.06, 0.37, 0], [0.62, 0.12, 0.22], MAT.dash, 0.03);
  S.forEach(s => {
    box('bancos_diant', [-0.12, 0.46, s * 0.37], [0.52, 0.12, 0.49], MAT.fabric, 0.04);
    box('bancos_diant', [-0.42, 0.82, s * 0.37], [0.11, 0.62, 0.49], MAT.fabric, 0.045, [0, 0, 0.18]);
    box('bancos_diant', [-0.49, 1.20, s * 0.37], [0.08, 0.14, 0.25], MAT.fabric, 0.03, [0, 0, 0.18]);
    for (const dz of [-0.18, 0.18]) box('bancos_diant', [-0.12, 0.35, s * 0.37 + dz], [0.46, 0.02, 0.03], MAT.steelDark);
    rod('cintos', [-0.18, 1.20, s * 0.74], [-0.34, 0.52, s * 0.16], 0.009, MAT.black);
    rod('cintos', [-0.50, 0.44, s * 0.64], [-0.34, 0.52, s * 0.16], 0.009, MAT.black);
    box('cintos', [-0.19, 0.46, s * 0.74], [0.06, 0.10, 0.04], MAT.black, 0.01);
    rod('cintos', [-1.28, 1.10, s * 0.68], [-1.0, 0.52, s * 0.20], 0.008, MAT.black);
  });
  box('banco_tras', [-0.96, 0.46, 0], [0.48, 0.12, 1.24], MAT.fabric, 0.04);
  box('banco_tras', [-1.24, 0.79, 0], [0.10, 0.58, 1.24], MAT.fabric, 0.045, [0, 0, 0.22]);
  box('porta_malas', [-1.66, 0.555, 0], [0.62, 0.02, 1.18], MAT.carpet, 0.005);
  box('porta_malas', [-1.60, 1.03, 0], [0.46, 0.012, 1.22], MAT.carpet, 0.005);
  box('retrovisor_int', [0.30, 1.40, 0], [0.02, 0.06, 0.21], MAT.black, 0.01);
  rod('retrovisor_int', [0.30, 1.425, 0], [0.25, 1.445, 0], 0.006, MAT.black);
}

function buildStructure() {
  const sh = new THREE.Shape([[1.02, 0.99], [0.99, 0.60], [0.84, 0.24], [0.82, 0.24], [0.97, 0.60], [1.0, 0.99]].map(p => new THREE.Vector2(p[0], p[1])));
  const fg = new THREE.ExtrudeGeometry(sh, { depth: 1.30, bevelEnabled: false }); fg.translate(0, 0, -0.65);
  add('corta_fogo', fg, MAT.under);
  box('monobloco', [1.01, 0.97, 0], [0.10, 0.05, 1.32], MAT.under);
  S.forEach(s => {
    add('monobloco', gCyl(0.088, 0.088, 0.10, 'y', 32), MAT.paint, [XFA + 0.03, 0.85, s * 0.56]);
    box('monobloco', [1.45, 0.38, s * 0.52], [1.05, 0.08, 0.07], MAT.under, 0.01);
    add('monobloco', gCyl(0.075, 0.075, 0.08, 'y', 32), MAT.under, [XRA - 0.10, 0.66, s * 0.565]);
    box('travessa_frontal', [1.99, 0.52, s * 0.38], [0.04, 0.48, 0.04], MAT.paint);
  });
  box('travessa_frontal', [1.99, 0.77, 0], [0.05, 0.05, 1.22], MAT.paint, 0.01);
  box('travessa_frontal', [1.99, 0.27, 0], [0.04, 0.04, 0.82], MAT.paint);
  box('viga_dianteira', [2.15, 0.42, 0], [0.05, 0.10, 1.04], MAT.steelDark, 0.01);
  box('viga_traseira', [-1.985, 0.48, 0], [0.05, 0.10, 1.04], MAT.steelDark, 0.01);
  box('fech_capo', [2.0, 0.80, 0], [0.04, 0.04, 0.06], MAT.steelDark, 0.006);
  tube('fech_capo', [[1.99, 0.785, 0.03], [1.92, 0.76, 0.42], [1.40, 0.68, 0.62], [0.90, 0.58, 0.66], [0.62, 0.42, 0.66]], 0.003, MAT.cable);
  box('fech_capo', [0.62, 0.42, 0.655], [0.06, 0.03, 0.02], MAT.black, 0.005);
  { // vareta do capô: presa na travessa, apoia no capô quando aberto
    const g = new THREE.Group(); reg('capo').group.add(g);
    const m = add('capo', new THREE.CylinderGeometry(0.005, 0.005, 1, 8), MAT.steel, null, null, g);
    ANIM.prop = { mesh: m, A: V(1.99, 0.80, -0.50), Hc: V(1.92, topY(1.92, 0.50) - 0.02, -0.50) };
    setBar(m, ANIM.prop.A, V(1.99, 0.80, -0.10)); m.visible = false;
  }
}

/* ===== Fixadores e encaixes: posições ===== */
function fxPositions() {
  const P = {}, A = (id, p, d, s, mount) => ((P[id] = P[id] || { pts: [], paths: [] }).pts.push([p, d, s, mount]));
  const Bp = (id, pts, r, mount, closed) => ((P[id] = P[id] || { pts: [], paths: [] }).paths.push([pts, r, mount, closed]));
  const up = [0, 1, 0], dn = [0, -1, 0], px = [1, 0, 0], nx = [-1, 0, 0], pz = [0, 0, 1], nz = [0, 0, -1];
  const nrm = (x, s) => surf(x, s).n, neg = v => [-v[0], -v[1], -v[2]];
  /* ---- mecânica ---- */
  [XFA, XRA].forEach((X, xi) => S.forEach((s, si) => { for (let k = 0; k < 4; k++) { const a = Math.PI / 4 + k * Math.PI / 2; A('fx_roda', [X + 0.05 * Math.cos(a), WY + 0.05 * Math.sin(a), s * 0.805], [0, 0, s], 0.017, 'w' + (xi * 2 + si)); } }));
  S.forEach((s, si) => A('fx_cubo', [XFA, WY, s * 0.805], [0, 0, s], 0.03, 'w' + si));
  MAINS.forEach(z => { A('fx_cabecote', [EXc - 0.075, 0.746, z], up, 0.013); A('fx_cabecote', [EXc + 0.075, 0.746, z], up, 0.013); });
  CYLZ.forEach((z, i) => { const ph = (i === 0 || i === 3) ? 0 : Math.PI; for (const dz of [-0.012, 0.012]) A('fx_bielas', [EXc + 0.03, EYc + CR * Math.cos(ph) - 0.02, z + dz], px, 0.008); });
  MAINS.forEach(z => { A('fx_mancais', [EXc - 0.045, 0.30, z], dn, 0.012); A('fx_mancais', [EXc + 0.045, 0.30, z], dn, 0.012); });
  for (let k = 0; k < 6; k++) { const x = EXc - 0.10 + k * 0.04; A('fx_carter', [x, 0.246, 0.085], dn, 0.008); A('fx_carter', [x, 0.246, -0.281], dn, 0.008); }
  [-0.03, -0.20].forEach(z => { A('fx_carter', [EXc - 0.1055, 0.246, z], dn, 0.008); A('fx_carter', [EXc + 0.1055, 0.246, z], dn, 0.008); });
  A('fx_bujao', [EXc + 0.06, 0.178, -0.18], dn, 0.014);
  CYLZ.forEach(z => A('fx_velas', [EXc, 0.66, z], up, 0.01));
  CYLZ.forEach(z => A('fx_bobinas', [EXc + 0.032, 0.845, z + 0.02], up, 0.007));
  MAINS.forEach(z => { A('fx_tampa_valv', [EXc - 0.105, 0.816, z], up, 0.009); A('fx_tampa_valv', [EXc + 0.105, 0.816, z], up, 0.009); });
  [-0.178, -0.088, 0.002, -0.268].forEach(z => { A('fx_coletor_esc', [1.256, 0.66, z], nx, 0.011); A('fx_coletor_esc', [1.256, 0.715, z], nx, 0.011); });
  [-0.178, -0.088, 0.002].forEach(z => { A('fx_coletor_adm', [1.548, 0.715, z], px, 0.009); A('fx_coletor_adm', [1.548, 0.66, z], px, 0.009); });
  A('fx_galeria', [1.565, 0.742, 0.04], up, 0.008); A('fx_galeria', [1.565, 0.742, -0.22], up, 0.008);
  [[0.03, 0.03], [-0.03, 0.03], [0.03, -0.03], [-0.03, -0.03]].forEach(([dx, dy]) => A('fx_tbi', [1.69 + dx, 0.785 + dy, 0.088], nz, 0.006));
  A('fx_polia_vira', [EXc, EYc, ZA - 0.014], nz, 0.02);
  {
    let cx = 0, cy = 0; CHAIN.forEach(p => { cx += p[0]; cy += p[1]; }); cx /= CHAIN.length; cy /= CHAIN.length;
    for (let k = 0; k < 18; k++) {
      const p = CHAIN[Math.floor(k * CHAIN.length / 18)], dx = p[0] - cx, dy = p[1] - cy, L = Math.hypot(dx, dy) || 1;
      A('fx_tampa_corr', [p[0] + dx / L * 0.022, p[1] + dy / L * 0.022, ZT - 0.043], nz, 0.008);
    }
  }
  A('fx_alternador', [1.572, 0.632, ZA + 0.105], pz, 0.011); A('fx_alternador', [1.668, 0.728, ZA + 0.103], pz, 0.011);
  [[1.24, 0.51, 0.162], [1.24, 0.41, 0.162]].forEach(p => A('fx_partida', p, pz, 0.012));
  [[1.40, 0.845, -0.50], [1.40, 0.845, -0.54], [1.36, 0.82, -0.60]].forEach(p => A('fx_coxins', p, up, 0.013));
  [[1.36, 0.655, 0.42], [1.36, 0.665, 0.52], [1.36, 0.665, 0.60]].forEach(p => A('fx_coxins', p, up, 0.013));
  A('fx_coxins', [1.06, 0.30, 0.10], up, 0.013);
  for (let k = 0; k < 7; k++) { const a = -0.3 + k * 0.9; A('fx_cambio', [EXc + 0.165 * Math.cos(a), EYc + 0.165 * Math.sin(a), 0.115], pz, 0.012); }
  A('fx_bujoes_cambio', [1.32, 0.29, 0.35], dn, 0.014); A('fx_bujoes_cambio', [1.49, 0.40, 0.35], px, 0.014);
  for (let k = 0; k < 6; k++) { const a = k * TAU / 6; A('fx_plato', [EXc + 0.108 * Math.cos(a), EYc + 0.108 * Math.sin(a), 0.168], pz, 0.008); A('fx_volante', [EXc + 0.03 * Math.cos(a), EYc + 0.03 * Math.sin(a), 0.14], pz, 0.009); }
  [[1.62, 0.376, -0.229], [1.62, 0.244, -0.229], [1.62, 0.376, -0.317]].forEach(p => A('fx_compressor', p, pz, 0.01));
  [[1.17, 0.53, 0.47], [1.27, 0.53, 0.47], [1.22, 0.53, 0.57]].forEach(p => A('fx_abs', p, up, 0.009));
  S.forEach((s, si) => {
    const ang = Math.atan2(0.05, -0.10), rp = (r, t, z) => [XFA + Math.cos(ang) * r - Math.sin(ang) * t, WY + Math.sin(ang) * r + Math.cos(ang) * t, s * z];
    const yw = 'y' + si, wh = 'w' + si;
    for (const k of [-1, 1]) { A('fx_pinca', rp(0.094, 0.06 * k, 0.639), [0, 0, -s], 0.011, yw); A('fx_pinca', rp(0.112, 0.06 * k, 0.664), [0, 0, -s], 0.012, yw); }
    A('fx_sens_roda', [XFA + 0.07, WY + 0.098, s * 0.67], up, 0.007, yw);
    for (let k = 0; k < 3; k++) { const a = k * TAU / 3 + 0.5; A('fx_amort_d', [XFA + 0.03 + 0.05 * Math.cos(a), 0.892, s * 0.56 + 0.05 * Math.sin(a)], up, 0.011); }
    A('fx_amort_d', [XFA + 0.04, 0.41, s * 0.64], px, 0.012); A('fx_amort_d', [XFA + 0.04, 0.45, s * 0.64], px, 0.012);
    A('fx_bandeja', [XFA + 0.13, 0.21, s * 0.37], px, 0.013); A('fx_bandeja', [XFA - 0.24, 0.24, s * 0.40], up, 0.013); A('fx_bandeja', [XFA, 0.157, s * 0.655], dn, 0.013);
    for (const x of [1.70, 1.06]) A('fx_subchassi', [x, 0.19, s * 0.42], dn, 0.016);
    for (const dy of [-0.025, 0.025]) A('fx_eixo_t', [-0.86, 0.36 + dy, s * 0.665], [0, 0, s], 0.013);
    A('fx_amort_t', [XRA - 0.06, 0.205, s * 0.60], dn, 0.013); A('fx_amort_t', [XRA - 0.10, 0.665, s * 0.585], up, 0.013); A('fx_amort_t', [XRA - 0.10, 0.665, s * 0.545], up, 0.013);
    A('fx_sens_roda', [XRA - 0.07, WY + 0.098, s * 0.665], up, 0.007);
    for (const x of [-0.52, -0.98]) A('fx_tanque', [x, 0.33, s > 0 ? 0.34 : -0.34], up, 0.012);
    for (const x of [0.12, -0.36]) for (const dz of [-0.18, 0.18]) A('fx_bancos', [x, 0.365, s * 0.37 + dz], up, 0.011);
    A('fx_cintos', [-0.18, 1.20, s * 0.73], [0, 0, -s], 0.011); A('fx_cintos', [-0.50, 0.44, s * 0.635], [0, 0, -s], 0.011); A('fx_cintos', [-0.34, 0.38, s * 0.16], up, 0.011);
    A('fx_caixa_dir', [XFA - 0.14, 0.345, s * 0.625], dn, 0.011, yw);
    for (const dx of [-0.03, 0.03]) A('fx_caixa_dir', [1.13 + dx, 0.40, s * 0.20], up, 0.011);
  });
  A('fx_bateria', [1.81, 0.715, 0.41], up, 0.008); A('fx_bateria', [1.81, 0.715, 0.59], up, 0.008); A('fx_bateria', [1.93, 0.52, 0.50], up, 0.01);
  [[1.18, 0.56, -0.07], [1.18, 0.56, -0.11], [0.98, 0.187, 0.02], [0.98, 0.187, -0.03], [-1.58, 0.275, 0.42], [-1.58, 0.275, 0.47]].forEach((p, i) => A('fx_escape', p, i < 2 ? up : i < 4 ? px : up, 0.01));
  A('fx_sonda', [1.218, 0.598, -0.118], [0.56, 0.71, -0.41], 0.013); A('fx_sonda', [1.17, 0.31, -0.11], [0.4, 0.9, 0], 0.013);
  A('fx_sens_ckp', [1.30, 0.335, 0.13], up, 0.007);
  for (let k = 0; k < 4; k++) { const a = k * TAU / 4 + 0.4; A('fx_bomba_agua', [1.47 + 0.035 * Math.cos(a), 0.63 + 0.035 * Math.sin(a), ZT - 0.063], nz, 0.007); }
  [[1.49, 0.53, 0.142], [1.53, 0.48, 0.142]].forEach(p => A('fx_termostato', p, pz, 0.008));
  A('fx_volante_dir', [0.345, 1.025, 0.37], [-0.82, 0.57, 0], 0.014, 'sw');
  A('fx_airbag', [0.40, 0.995, 0.30], [-0.82, 0.57, 0], 0.008, 'sw'); A('fx_airbag', [0.40, 0.995, 0.44], [-0.82, 0.57, 0], 0.008, 'sw');
  [[0.72, 0.86, 0.30], [0.72, 0.86, 0.42], [0.58, 0.91, 0.37], [0.965, 0.60, 0.31]].forEach(p => A('fx_coluna', p, up, 0.01));
  A('fx_estepe', [-1.66, 0.54, 0], up, 0.016);
  [[1.37, 0.71, 0.14], [1.91, 0.64, 0.24], [1.91, 0.33, -0.22], [1.53, 0.49, 0.125], [0.99, 0.67, 0.03], [1.34, 0.71, 0.13], [1.75, 0.79, 0.36], [1.69, 0.79, 0.15], [1.64, 0.84, -0.12], [1.12, 0.73, 0.38]].forEach(p => A('fx_mangueiras', p, up, 0.007));
  A('fx_filtro_oleo', [1.513, 0.37, -0.04], px, 0.012);
  A('fx_ecu', [1.56, 0.79, 0.565], pz, 0.007); A('fx_ecu', [1.68, 0.69, 0.565], pz, 0.007);
  A('fx_limpador', [0.89, topY(0.89, 0.46) + 0.014, -0.46], up, 0.009); A('fx_limpador', [0.89, topY(0.89, 0.06) + 0.014, 0.06], up, 0.009);
  A('fx_limpador', onSurf(XG + 0.02, 0, 0.022), nrm(XG + 0.02, 0), 0.009, 'tail');

  /* ---- lataria: parafusos ---- */
  S.forEach(s => {
    [1.10, 1.36, 1.62, 1.88].forEach(x => A('fx_paralama', onSurf(x, s * (sRow(x, J.UE) + 0.006), -0.012), up, 0.008));
    A('fx_paralama', onSurf(2.0, s * (sRow(2.0, J.SB) + sRow(2.0, J.R058)) / 2, -0.014), nrm(2.0, s * 0.4), 0.008);
    A('fx_paralama', onSurf(0.965, s * (sRow(0.965, J.S0) - 0.012), -0.008), nrm(0.965, s * sRow(0.965, J.S0)), 0.008);
    A('fx_paralama', onSurf(0.958, s * sAtY(0.958, 0.88), -0.03), nx, 0.008);
    [0.46, 0.56].forEach(y => A('fx_parachoque', onSurf(AF1 + 0.035, s * sAtY(AF1 + 0.035, y), -0.012), nrm(AF1 + 0.035, s * sAtY(AF1 + 0.035, y)), 0.007));
    [0.40, 0.50].forEach(y => A('fx_parachoque_t', onSurf(AR0 - 0.035, s * sAtY(AR0 - 0.035, y), -0.012), nrm(AR0 - 0.035, s * sAtY(AR0 - 0.035, y)), 0.007));
    A('fx_parachoque', onSurf(2.18, s * (sRow(2.18, J.F0) - 0.26), 0.002), dn, 0.007);
    A('fx_parachoque_t', onSurf(-2.03, s * (sRow(-2.03, J.F0) - 0.30), 0.002), dn, 0.007);
    A('fx_guias_pcd', onSurf(1.95, s * sRow(1.95, J.R058), -0.016), [0, 0, s], 0.02);
    A('fx_guias_pct', onSurf(-1.88, s * sRow(-1.88, J.R0615), -0.016), [0, 0, s], 0.02);
    for (let k = 0; k < 6; k++) { const x = AF0 + 0.06 + k * 0.13; A('fx_forros', onSurf(x, s * (sRow(x, J.S0) - 0.008), -0.006), dn, 0.009); }
    for (const dx of [0.05, 0.08]) A('fx_capo', [HINGE[0] + dx, topY(HINGE[0] + dx, 0.58) - 0.03, s * 0.58], dn, 0.009, 'hood');
    for (const dy of [-0.05, -0.02]) A('fx_capo', [HINGE[0] + 0.012, HINGE[1] + dy, s * 0.587], [0, 0, s], 0.009);
    /* dobradiças e limitadores: portas da frente (mount 'door') e de trás (mount 'rdoor') */
    [[XA, DOORAX[s], 'door'], [XB, RDOORAX[s], 'rdoor']].forEach(([xa, ax, mt]) => {
      [0.54, 0.82].forEach(y => {
        for (const dy of [-0.015, 0.015]) {
          A('fx_dobradicas', [xa + 0.036, y + dy, s * (sideZ(xa + 0.036, y) - 0.028)], [0, 0, s], 0.009);
          A('fx_dobradicas', [xa - 0.018, y + dy, ax[2] + s * 0.003], [0, 0, s], 0.009, mt);
        }
      });
      A('fx_dobradicas', [xa + 0.04, 0.68, s * (sideZ(xa + 0.04, 0.68) - 0.055)], px, 0.009);
    });
    [[XB, 'door'], [XD2, 'rdoor']].forEach(([xe, mt]) => {
      [0.73, 0.76, 0.79].forEach(y => A('fx_fech_portas', [xe + 0.004, y, s * (sideZ(xe + 0.015, y) - 0.03)], nx, 0.007, mt));
      [0.74, 0.78].forEach(y => A('fx_fech_portas', [xe - 0.006, y, s * (sideZ(xe - 0.01, y) - 0.03)], px, 0.008));
    });
    [[0, 0.012], [0.02, -0.01], [-0.02, -0.01]].forEach(([dx, dy]) => { const p = onSurf(0.905 + dx, s * (sRow(0.905, J.SB) - 0.012), -0.025); A('fx_retrovisor', [p[0], p[1] + dy, p[2]], [0, 0, -s], 0.008, 'door'); });
    [0.18, 0.52].forEach(x => A('fx_vidro_porta', [x, 0.66, s * 0.772], [0, 0, s], 0.008, 'door'));
    [-0.64, -0.32].forEach(x => A('fx_vidro_porta_t', [x, 0.66, s * 0.772], [0, 0, s], 0.008, 'rdoor'));
    [[0.02, 0.56], [0.02, 0.88], [0.70, 0.56], [0.70, 0.88]].forEach(([x, y]) => A('fx_maq_vidro', [x, y, s * 0.748], [0, 0, -s], 0.008, 'door'));
    [[-0.72, 0.58], [-0.26, 0.88], [-0.49, 0.68]].forEach(([x, y]) => A('fx_maq_vidro_t', [x, y, s * 0.748], [0, 0, -s], 0.008, 'rdoor'));
    for (let k = 0; k < 4; k++) {
      const x = -0.02 + k * 0.26;
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.SB) + 0.03), -0.074), [0, 0, s], 0.01, 'door');
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.R032) - 0.045), -0.074), [0, 0, s], 0.01, 'door');
    }
    for (let k = 0; k < 3; k++) {
      const x = -0.82 + k * 0.30;
      A('fx_forro_porta_t', onSurf(x, s * (sRow(x, J.SB) + 0.03), -0.074), [0, 0, s], 0.01, 'rdoor');
      A('fx_forro_porta_t', onSurf(x, s * (sRow(x, J.R032) - 0.045), -0.074), [0, 0, s], 0.01, 'rdoor');
    }
    /* tampa traseira: dobradiças (porca no teto e parafuso na tampa) e pinos dos amortecedores */
    for (const dz of [-0.018, 0.018]) {
      A('fx_tampa', [TAILH[0] + 0.03, TAILH[1] - 0.004, s * 0.45 + dz], dn, 0.009);
      A('fx_tampa', [TAILH[0] - 0.06, topY(TAILH[0] - 0.06, 0.45) - 0.024, s * 0.45 + dz], dn, 0.009, 'tail');
    }
    A('fx_amort_tampa', [STRUT[s].B.x, STRUT[s].B.y, STRUT[s].B.z], [0, 0, s], 0.009);
    A('fx_amort_tampa', [STRUT[s].Gc.x, STRUT[s].Gc.y, STRUT[s].Gc.z], [0, 0, s], 0.009, 'tail');
    [[2.0, J.SB, 0.004], [2.17, J.SB, 0.004]].forEach(([x, j, d]) => A('fx_farol', onSurf(x, s * (sRow(x, j) + d), -0.02), up, 0.008));
    A('fx_farol', onSurf(2.10, s * (sRow(2.10, J.R058) - 0.006), -0.02), dn, 0.008);
    [0.75, 0.88, 1.0].forEach(y => { const x = -1.95, sv = s * sAtY(x, y); A('fx_lanterna', onSurf(x, sv, -0.03), neg(nrm(x, sv)), 0.007); });
    A('fx_travessa', [1.99, 0.798, s * 0.52], up, 0.011); A('fx_travessa', [1.99, 0.798, s * 0.58], up, 0.011);
    A('fx_viga', [2.178, 0.39, s * 0.46], px, 0.012); A('fx_viga', [2.178, 0.45, s * 0.46], px, 0.012);
    A('fx_viga_t', [-2.013, 0.45, s * 0.46], nx, 0.012); A('fx_viga_t', [-2.013, 0.51, s * 0.46], nx, 0.012);
  });
  [-0.34, -0.12, 0.12, 0.34].forEach(sv => A('fx_parachoque', onSurf(2.07, sv, -0.014), up, 0.007));
  A('fx_parachoque', onSurf(2.18, sRow(2.18, J.F0), 0.002), dn, 0.007);
  [-0.40, -0.14, 0.14, 0.40].forEach(sv => A('fx_parachoque_t', onSurf(-2.05, sv, -0.01), [-0.3, 1, 0], 0.007));
  A('fx_fech_capo', [2.0, 0.822, 0.02], up, 0.01); A('fx_fech_capo', [2.0, 0.822, -0.02], up, 0.01);
  for (const dz of [-0.025, 0.025]) { A('fx_fech_tampa', [XL + 0.03, 0.725, dz], dn, 0.008, 'tail'); A('fx_fech_tampa', [XL + 0.02, 0.648, dz * 1.4], up, 0.008); }
  [-0.30, -0.10, 0.10, 0.30].forEach(sv => A('fx_grade', onSurf(2.15, sv, -0.006), neg(nrm(2.15, sv)), 0.008));
  [-0.56, -0.34, -0.12, 0.12, 0.34, 0.56].forEach(sv => A('fx_grade_torpedo', onSurf(XC - 0.03, sv, 0.001), up, 0.009));
  { const z = sideZ(-1.55, 0.90) - 0.02; [0.85, 0.95].forEach(y => A('fx_bocal', [-1.55, y, -z], nz, 0.008)); }

  /* ---- lataria: pontos de solda ---- */
  const W = (id, x, s, off) => A(id, onSurf(x, s, off == null ? 0.001 : off), nrm(x, s), 0.011);
  const along = (x0, x1, step, f) => { const n = Math.max(1, Math.round(Math.abs(x1 - x0) / step)); for (let k = 0; k <= n; k++) f(x0 + (x1 - x0) * k / n); };
  const across = (x, S0, step, f) => { const n = Math.max(1, Math.round(2 * S0 / step)); for (let k = 0; k <= n; k++) f(-S0 + 2 * S0 * k / n); };
  S.forEach(s => {
    along(XT + 0.02, XWT - 0.02, 0.045, x => W('fx_solda_teto', x, s * (sRow(x, J.UE) - 0.012)));
    along(XD2 - 0.012, AR1 + 0.005, 0.02, x => W('fx_solda_laterais', x, s * (sRow(x, J.S0) - 0.01)));
    along(AR0 + 0.03, AR1 - 0.03, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.S0) - 0.012)));
    along(XLF + 0.02, AR0 - 0.02, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.R0615) - 0.012)));
    along(XLF + 0.02, XQ - 0.01, 0.04, x => W('fx_solda_laterais', x, s * (sRow(x, J.UE) - 0.008)));
    { const x = XD2 - 0.012, a = sRow(x, J.UE) + 0.01, b = sRow(x, J.R032); for (let k = 0; k <= 10; k++) W('fx_solda_laterais', x, s * (a + (b - a) * k / 10)); }
    along(XD2 + 0.03, XA - 0.03, 0.05, x => { W('fx_solda_soleiras', x, s * (sRow(x, J.R032) + 0.012)); W('fx_solda_soleiras', x, s * (sRow(x, J.S0) + 0.02)); });
    along(XWT + 0.02, XA - 0.04, 0.045, x => W('fx_solda_colunas', x, s * (sRow(x, J.UE) - 0.012)));
    for (let k = 0; k <= 8; k++) { const y = 0.38 + k * 0.03; A('fx_solda_painel_tras', [-2.012, y, s * 0.575], nx, 0.011); }
  });
  across(XWT - 0.012, sRow(XWT, J.T1) - 0.03, 0.07, sv => W('fx_solda_teto', XWT - 0.012, sv));
  across(XT + 0.014, sRow(XT, J.UE) - 0.03, 0.07, sv => W('fx_solda_teto', XT + 0.014, sv));
  across(XWB + 0.006, sRow(XWB, J.T1) - 0.02, 0.07, sv => W('fx_solda_colunas', XWB + 0.006, sv));
  for (let k = 0; k <= 18; k++) A('fx_solda_painel_tras', [-2.012, 0.63, -0.54 + k * 0.06], nx, 0.011);

  /* ---- colas (cordões) ---- */
  const bead = (x0, x1, hi, inset) => {
    const P = [], a = x0 + inset, b = x1 - inset, L = x => -(hi(x) - inset), H = x => hi(x) - inset, n = 16;
    for (let k = 0; k <= n; k++) { const x = a + (b - a) * k / n; P.push([x, L(x)]); }
    for (let k = 1; k < 10; k++) { const t = k / 10; P.push([b, L(b) + (H(b) - L(b)) * t]); }
    for (let k = n; k >= 0; k--) { const x = a + (b - a) * k / n; P.push([x, H(x)]); }
    for (let k = 9; k >= 1; k--) { const t = k / 10; P.push([a, L(a) + (H(a) - L(a)) * t]); }
    return P;
  };
  const toPts = (P, off) => P.map(([x, s]) => onSurf(x, s, off));
  Bp('fx_cola_parabrisa', toPts(bead(XWT, XWB, x => sRow(x, J.T1), 0.014), -0.008), 0.0045, null, true);
  Bp('fx_cola_vidro_tras', toPts(bead(XG, XT2, x => sRow(x, J.T2), 0.014), -0.008), 0.0045, 'tail', true);
  S.forEach(s => {
    const Q = [], lo = x => sRow(x, J.SB) - 0.012, hi = x => sRow(x, J.UE) + 0.012, a = XQ + 0.012, b = XQ2 - 0.012;
    edgePath(a, b, x => s * lo(x), 12).forEach(p => Q.push(p));
    for (let k = 1; k < 8; k++) { const t = k / 8; Q.push([b, s * (lo(b) + (hi(b) - lo(b)) * t)]); }
    edgePath(b, a, x => s * hi(x), 12).forEach(p => Q.push(p));
    for (let k = 1; k < 8; k++) { const t = k / 8; Q.push([a, s * (hi(a) + (lo(a) - hi(a)) * t)]); }
    Bp('fx_cola_laterais', toPts(Q, -0.008), 0.0045, null, true);
  });
  return P;
}

return {
  build() {
    buildBody(); buildEngine(); buildIntake(); buildIgnitionCooling(); buildExhaust(); buildElectricTrans(); buildAC();
    buildWheels(); buildSuspensionBrakes(); buildSteering(); buildFuelRear(); buildInterior(); buildStructure();
  },
  fxPositions
};
};
