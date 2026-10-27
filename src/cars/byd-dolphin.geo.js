/* ===== BYD Dolphin 2024 (95 cv, bateria Blade de 44,9 kWh): geometria 3D =====
   Coordenadas do carro: x para a frente, y para cima, z para a esquerda (lado do motorista). Medidas em metros.
   Hatch 4,125 × 1,770 × 1,570 m, entre-eixos 2,70 m, bitola 1,53 m, pneus 195/60 R16. Conjunto elétrico "8 em 1" transversal
   na frente (motor à direita, −z; redutor e diferencial no meio), bateria de lâminas sob o assoalho, entre os eixos;
   porta de recarga no para-lama dianteiro direito. */
(window.CAR_GEO = window.CAR_GEO || {})['byd-dolphin'] = function (K) {
const { THREE, V, TAU, UPY, S, MAT, std, phy, reg, tag, place, add, kit, pivotOf, box, cyl, tube, route, rod, sph, spring, ribbon, beltPath, plateFromHull,
  gBox, gCyl, gLathe, gTorus, gTube, curveOf, setBar, mono, makeBody, art, ANIM, WHEELS, ROUTES, lerp3 } = K;
const WB = 2.70, XFA = WB / 2, XRA = -WB / 2;      // eixos dianteiro e traseiro (x)
const TRK = 0.765, WR = 0.320, WY = 0.315;         // bitola/2, raio do pneu 195/60 R16, altura do centro da roda
const KD = [0.05, 0.01, 0.025];                    // peças de suspensão do kit (desenhadas para o Tiida) levadas para a roda do Dolphin
MAT.chromeTrim = std({ color: 0xd9dde0, roughness: 0.12, metalness: 1 });
MAT.acPipe = std({ color: 0xa9adb2, roughness: 0.3, metalness: 0.85 });
MAT.airbag = std({ color: 0xd8d2c4, roughness: 0.9 });
MAT.hv = std({ color: 0xe8711c, roughness: 0.5 });                       // cabos e conectores de alta tensão: sempre laranja
MAT.cell = std({ color: 0x263f66, roughness: 0.42, metalness: 0.45 });   // lâminas da bateria (caixa de alumínio com filme isolante)
MAT.packAlu = std({ color: 0x9da3a9, roughness: 0.48, metalness: 0.75 });
MAT.busbar = std({ color: 0xc27a45, roughness: 0.35, metalness: 0.9 });
MAT.screen = std({ color: 0x0b0f15, roughness: 0.12, metalness: 0.3, emissive: 0x0b1c2c });
MAT.edrive = std({ color: 0x8e959c, roughness: 0.42, metalness: 0.8 });
MAT.edriveDark = std({ color: 0x3e444b, roughness: 0.5, metalness: 0.6 });
MAT.coolantBlue = std({ color: 0x4fa3d9, roughness: 0.3, transparent: true, opacity: 0.85 });

/* ---------- carroceria: hatch de 5 portas, alto, frente curta e fechada (sem grade), traseira com faixa de luz ---------- */
const BK = {
  zMax: mono([[-1.985, .55], [-1.979, .65], [-1.965, .73], [-1.935, .795], [-1.885, .838], [-1.78, .866], [-1.55, .88], [-1.2, .885], [0, .885], [1.2, .885], [1.55, .878], [1.78, .862], [1.92, .835], [2.02, .795], [2.08, .75], [2.11, .70], [2.128, .64], [2.137, .58], [2.14, .52]]),
  yFloor: mono([[-1.985, .41], [-1.97, .35], [-1.94, .31], [-1.80, .275], [-1.55, .235], [-1.10, .19], [0, .19], [0.95, .19], [1.40, .21], [1.80, .22], [2.0, .245], [2.10, .27], [2.14, .31]]),
  yFC: mono([[-1.985, .41], [-1.94, .40], [-1.60, .37], [-1.45, .31], [-1.15, .19], [0.95, .19], [1.40, .21], [1.80, .22], [2.0, .245], [2.10, .27], [2.14, .31]]),
  yBelt: mono([[-1.985, .62], [-1.975, .66], [-1.96, .70], [-1.93, .85], [-1.90, .95], [-1.86, 1.015], [-1.78, 1.05], [-1.6, 1.065], [-1.3, 1.06], [-0.9, 1.048], [-0.4, 1.033], [0, 1.02], [0.5, 1.004], [0.95, .985], [1.15, .95], [1.5, .885], [1.8, .84], [1.95, .81], [2.0, .795], [2.04, .775], [2.07, .748], [2.095, .712], [2.115, .672], [2.13, .628], [2.14, .59]]),
  yEdge: mono([[-1.985, .615], [-1.98, .655], [-1.97, .695], [-1.955, .75], [-1.93, .85], [-1.90, .93], [-1.87, 1.01], [-1.84, 1.08], [-1.80, 1.165], [-1.74, 1.29], [-1.68, 1.40], [-1.62, 1.475], [-1.55, 1.497], [-1.35, 1.52], [-1.0, 1.536], [-0.5, 1.546], [-0.1, 1.54], [0.05, 1.525], [0.20, 1.492], [0.35, 1.40], [0.55, 1.255], [0.75, 1.115], [0.93, .995], [1.2, .955], [1.5, .915], [1.8, .868], [1.95, .838], [2.0, .823], [2.04, .80], [2.07, .767], [2.095, .725], [2.115, .682], [2.13, .635], [2.14, .595]]),
  yTop: mono([[-1.985, .62], [-1.98, .66], [-1.97, .70], [-1.955, .76], [-1.93, .86], [-1.90, .94], [-1.87, 1.02], [-1.84, 1.09], [-1.80, 1.18], [-1.74, 1.31], [-1.68, 1.42], [-1.62, 1.50], [-1.55, 1.522], [-1.35, 1.545], [-1.0, 1.56], [-0.5, 1.57], [-0.1, 1.565], [0.05, 1.55], [0.20, 1.515], [0.35, 1.42], [0.55, 1.27], [0.75, 1.13], [0.93, 1.01], [1.2, .975], [1.5, .935], [1.8, .885], [1.95, .855], [2.0, .84], [2.04, .815], [2.07, .78], [2.095, .735], [2.115, .69], [2.13, .64], [2.14, .60]]),
  zEdge: mono([[-1.985, .44], [-1.975, .56], [-1.95, .65], [-1.90, .71], [-1.80, .725], [-1.5, .71], [-1.0, .70], [0, .70], [0.20, .705], [0.5, .75], [0.93, .80], [1.2, .80], [1.5, .79], [1.8, .74], [1.95, .69], [2.04, .63], [2.10, .57], [2.13, .50], [2.14, .44]])
};
const ROWS = [0.28, 0.34, 0.43, 0.51, 0.61, 0.66, 0.74, 0.82, 0.90, 0.97];
const UPF = [0.35, 0.7, 1.0];
const TOPU = [0.975, 0.9, 0.72, 0.48, 0.24, 0];
/* divisões (x) */
const XH = 1.98, XC = 1.06, XA = 0.95, XWB = 0.93, XDF = 0.86, XWT = 0.20, XB = -0.10, XBP = -0.05, XD2 = -0.96, XRG = -0.90, XQ2 = -1.00,
  XT = -1.60, XT2 = -1.62, XG = -1.84, XL = -1.955, XN = 2.05, XLT = 1.82, XLL = -1.905, XLS = -1.78;
const B = makeBody({ XF: 2.14, XR: -1.985, RA: 0.395, ZN: 0.66, XFA, XRA, WY, BK, ROWS, UPF, TOPU, bulge: [0.03, 0.018],
  cuts: [XH, XC, XA, XWB, XDF, XWT, XB, XBP, XD2, XRG, XQ2, XT, XT2, XG, XL, XN, XLT, XLL, XLS, 2.0, 2.02, 2.07, 2.09, 2.11, 2.125, -0.15, -0.12, 0.94, 0.88, 1.90,
    -1.10, -1.18, -1.26, -1.30, -1.36, -1.44, -1.50, -1.875, -1.89, -1.92, -1.94, -1.965, -1.975, -1.70, -1.66] });
const { XF, XR, AF0, AF1, AR0, AR1, J, surf, sRow, onSurf, sAtY, sideZ, topY, rowFn, cst, RS, RF, rectGeo, panel, glass, loop, edgePath, capGeo, capPt, capPatch, flushPanels } = B;

/* vidro lateral fixo com a "barbatana": a borda de baixo sobe para trás e a de trás inclina com a coluna */
const XQS = -1.30, XQW = -1.46;
const sm = t => { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); };
const qBot = x => sAtY(x, BK.yBelt(x) + 0.11 * sm((-1.06 - x) / 0.26));
const qTop = x => x >= XQS ? sRow(x, J.UE) : sRow(x, J.UE) + (qBot(x) - sRow(x, J.UE)) * Math.min(1, (XQS - x) / (XQS - XQW));
/* faróis finos: correm pelo ombro do para-lama a partir de XLT; a borda de baixo desce até a altura de R068 */
const fLb = x => { const t = sm((x - XLT) / (2.0 - XLT)); return sRow(x, J.UE) + (sRow(x, J.R068) - sRow(x, J.UE)) * t; };
const fIn = rowFn(J.T3, 0.012);
/* lanternas nos cantos, logo abaixo do vidro, ligadas pela faixa de luz da tampa */
const tCut = x => sRow(x, J.T3) + (sRow(x, J.UE) - 0.012 - sRow(x, J.T3)) * sm((x - (XG - 0.025)) / 0.025);
const lOut = x => sAtY(x, 0.955) + (sRow(x, J.UE) - sAtY(x, 0.955)) * sm((x - (XLS - 0.05)) / 0.05);

/* lado único (porta de recarga no para-lama direito): mesma superfície, um lado só */
function oneSide(id, r, sign, mat, off, parent) {
  const R = rectGeo(r, sign, off || 0), g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(R.pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(R.nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(R.uv, 2)); g.setIndex(R.idx);
  return add(id, g, mat, null, null, parent);
}

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
    DOORAX[s] = [XA + 0.016, 0.74, s * (sideZ(XA + 0.016, 0.74) - 0.03)]; doorPivot[s] = hingePivot('portas', DOORAX[s], s);
    RDOORAX[s] = [XB - 0.014, 0.74, s * (sideZ(XB - 0.014, 0.74) - 0.03)]; rdoorPivot[s] = hingePivot('portas_tras', RDOORAX[s], s);
  });
  art('hood', { pivot: hoodPivot, axis: 'z', max: 1.0, onUpdate: updateProp });
  S.forEach(s => { art('door', { side: s, pivot: doorPivot[s], axis: 'y', max: s * 1.1 }); art('rdoor', { side: s, pivot: rdoorPivot[s], axis: 'y', max: s * 1.05 }); });
  art('tail', { pivot: tailPivot, axis: 'z', max: -1.15, onUpdate: updateStruts });
  const r = j => rowFn(j), UEp = rowFn(J.UE, 0.016), SH = { shadow: true }, ins = (f, d) => x => f(x) + d;

  /* frente: capô curto, grade do torpedo, para-lamas, para-choque fechado, faróis finos */
  panel('capo', [RF(XC, XH, r(J.UE), 'LRB')], MAT.paint, { shadow: true, parent: hoodPivot });
  panel('capo', [RF(XC + 0.03, XH - 0.03, rowFn(J.UE, -0.03))], MAT.underDS, { off: -0.016, parent: hoodPivot, fl: 0, res: 0.05 });
  panel('grade_torpedo', [RF(XA, XC, r(J.UE), 'LRB')], MAT.plastic);
  const slots = []; for (let k = 0; k < 7; k++) slots.push(RS(0.985, 1.035, cst(0.035 + k * 0.088), cst(0.085 + k * 0.088)));
  panel('grade_torpedo', slots, MAT.grille, { off: 0.0015, fl: 0 });
  panel('paralamas', [
    RS(XA, AF1, r(J.R058), r(J.S0), 'LRB'), RS(XA, AF1, r(J.SB), r(J.R058), 'L'), RS(AF1, XLT, r(J.SB), r(J.R058), 'B'),
    RS(XLT, XN, fLb, r(J.R058), 'TBR'), RS(XA, XLT, r(J.UE), r(J.SB), 'LT')], MAT.paint, { shadow: true, fl: 0.03 });
  /* para-choque: a frente fechada entre os faróis (sem grade: o carro não tem radiador grande) faz parte dele */
  panel('para_choque_d', [RS(AF1, XN, r(J.R058), r(J.F0), 'LT'), RF(XN, XF, r(J.R058), 'L'), RS(XN, XF, r(J.R058), r(J.F0)), RF(XH, XN, fIn, 'LR')], MAT.paint, SH);
  add('para_choque_d', capGeo(true, J.F0, J.T6), MAT.paint).castShadow = true;
  const HL = [RS(XLT, XH, r(J.UE), fLb), RS(XH, XN, fIn, fLb)];
  panel('farois', HL, MAT.black, { fl: 0 });
  panel('farois', [RS(XLT + 0.03, XH, rowFn(J.UE, 0.006), ins(fLb, -0.006)), RS(XH + 0.004, XN - 0.004, ins(fIn, 0.008), ins(fLb, -0.006))], MAT.lampHousing, { off: 0.003, fl: 0 });
  /* assinatura de LED: um filete branco ao longo da borda de cima do farol */
  panel('farois', [RS(XLT + 0.05, XH, rowFn(J.UE, 0.012), rowFn(J.UE, 0.022)), RS(XH + 0.006, XH + 0.016, ins(fIn, 0.01), ins(fLb, -0.01))], MAT.bulb, { off: 0.005, fl: 0 });
  panel('farois', HL, MAT.lensClear, { off: 0.01, fl: 0.007, flMat: MAT.trim });
  S.forEach(s => [[2.025, 0.62, 0.032], [2.0, 0.35, 0.03]].forEach(([x, f, rr]) => {
    const sv = fIn(x) + (fLb(x) - fIn(x)) * f, q = surf(x, s * sv), c = [q.p[0] + q.n[0] * 0.002, q.p[1] + q.n[1] * 0.002, q.p[2] + q.n[2] * 0.002];
    const d = add('farois', new THREE.SphereGeometry(rr, 24, 10, 0, TAU, 0, Math.PI / 2), MAT.reflector, c);
    d.quaternion.setFromUnitVectors(V(0, -1, 0), V(q.n[0], q.n[1], q.n[2])); d.scale.set(1, 0.35, 1);
    sph('farois', [c[0] + q.n[0] * 0.003, c[1] + q.n[1] * 0.003, c[2] + q.n[2] * 0.003], rr * 0.3, MAT.bulb);
  }));
  /* emblema na frente fechada */
  { const q = surf(2.02, 0), n = V(q.n[0], q.n[1], q.n[2]), c = [q.p[0] + q.n[0] * 0.006, q.p[1] + q.n[1] * 0.006, 0];
    const e = add('para_choque_d', gBox(0.006, 0.034, 0.13, 0.012), MAT.chromeTrim, c); e.quaternion.setFromUnitVectors(V(1, 0, 0), n); }
  /* boca de ar inferior em trapézio, com as "barbatanas" verticais nos cantos; placa por cima */
  const trap = (wT, wB, y0, y1) => [z => y0, z => { const a = Math.abs(z); return a <= wT ? y1 : y1 - (y1 - y0) * (a - wT) / (wB - wT); }];
  const TO = trap(0.36, 0.44, 0.33, 0.455), TI = trap(0.345, 0.42, 0.342, 0.443);
  add('para_choque_d', capPatch(true, -0.44, 0.44, TO[0], TO[1], 0.0015, 48, 5), MAT.black);
  add('grade_inf', capPatch(true, -0.42, 0.42, TI[0], TI[1], 0.003, 48, 5), MAT.grille);
  S.forEach(s => {
    const f = z => Math.sin(Math.PI * Math.min(1, Math.max(0, (Math.abs(z) - 0.455) / 0.04)));
    add('para_choque_d', capPatch(true, s > 0 ? 0.455 : -0.495, s > 0 ? 0.495 : -0.455, z => 0.36 + 0.02 * (1 - f(z)), z => 0.52 - 0.05 * (1 - f(z)), 0.002, 8, 6), MAT.black);
  });
  { const p = capPt(true, 0, 0.52, 0.009); box('para_choque_d', p, [0.008, 0.13, 0.40], MAT.plate, 0.01); }

  /* portas dianteiras: forro externo, moldura do vidro, painel interno, vidro, forro de dentro */
  panel('portas', [RS(XB, XA, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: dp, fl: 0.045 });
  panel('portas', [RS(XB, XA, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: dp, fl: 0.035 });
  panel('portas', [RS(XDF, XA, UEp, r(J.SB), 'Rl'), RS(XB, XBP, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: dp, fl: 0.035 });
  panel('portas', [RS(XB + 0.012, XA - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: dp, fl: 0, res: 0.05 });
  glass('vidros_portas', RS(XBP, XDF, UEp, r(J.SB)), dp);
  panel('forros_portas', [RS(XB + 0.02, XA - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: dp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XBP, XDF, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: dp });
  panel('frisos', [RS(XBP, XA - 0.01, rowFn(J.SB, 0.008), rowFn(J.SB, 0.02))], MAT.chromeTrim, { off: 0.004, fl: 0.003, flMat: MAT.chromeTrim, parent: dp });
  /* maçaneta embutida (fica rente à porta e sai quando destrava) */
  panel('fech_portas', [RS(0.06, 0.24, rowFn(J.R084, -0.016), rowFn(J.R084, 0.016))], MAT.trim, { off: 0.002, fl: 0.003, flMat: MAT.trim, parent: dp });
  S.forEach(s => loop('fech_portas', edgePath(0.075, 0.225, x => s * sRow(x, J.R084), 12), 0.008, MAT.paint, 0.006, dp(s)));
  /* portas traseiras */
  panel('portas_tras', [RS(XD2, XB, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: rdp, fl: 0.045 });
  panel('portas_tras', [RS(XD2, XB, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XB - 0.05, XB, UEp, r(J.SB), 'Rl'), RS(XD2, XRG, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XD2 + 0.012, XB - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: rdp, fl: 0, res: 0.05 });
  glass('vidros_portas_tras', RS(XRG, XB - 0.05, UEp, r(J.SB)), rdp);
  panel('forros_portas_tras', [RS(XD2 + 0.02, XB - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: rdp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XRG, XB - 0.05, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: rdp });
  panel('frisos', [RS(XD2 + 0.01, XB - 0.012, rowFn(J.SB, 0.008), rowFn(J.SB, 0.02))], MAT.chromeTrim, { off: 0.004, fl: 0.003, flMat: MAT.chromeTrim, parent: rdp });
  panel('fech_portas', [RS(-0.86, -0.68, rowFn(J.R084, -0.016), rowFn(J.R084, 0.016))], MAT.trim, { off: 0.002, fl: 0.003, flMat: MAT.trim, parent: rdp });
  S.forEach(s => loop('fech_portas', edgePath(-0.845, -0.695, x => s * sRow(x, J.R084), 12), 0.008, MAT.paint, 0.006, rdp(s)));

  /* laterais, soleiras, teto, colunas e vidros fixos */
  panel('soleiras', [RS(XD2, XA, r(J.R032), r(J.S0), 'TR')], MAT.paint, { shadow: true, fl: 0.045 });
  panel('soleiras', [RS(XD2 + 0.02, XA - 0.02, rowFn(J.S0, -0.06), rowFn(J.S0, -0.005))], MAT.trim, { off: 0.004, fl: 0.004, flMat: MAT.trim });
  panel('laterais', [
    RS(AR1, XD2, r(J.R032), r(J.S0)), RS(AR1, XD2, r(J.SB), r(J.R032), 'Rt'),
    RS(AR0, AR1, r(J.R0615), r(J.S0), 'LB'), RS(AR0, AR1, r(J.SB), r(J.R0615)),
    RS(XLS, AR0, r(J.SB), r(J.R0615), 'LB'), RS(XL, XLL, r(J.UE), r(J.R0615), 'LT'), RS(XLL, XLS, lOut, r(J.R0615), 'T'),
    RS(XLS, XQW, r(J.UE), r(J.SB), 'LT'), RS(XQW, XQS, r(J.UE), qTop, 'b'), RS(XQW, XQ2, qBot, r(J.SB), 't'), RS(XQ2, XD2, r(J.UE), r(J.SB), 'lR')], MAT.paint, { shadow: true, fl: 0.04 });
  glass('vidros_laterais', RS(XQW, XQ2, qTop, qBot));
  /* friso cromado da "barbatana": acompanha a borda de baixo do vidro fixo e sobe com ela */
  S.forEach(s => loop('frisos', edgePath(XQW + 0.012, XQ2 - 0.004, x => s * (qBot(x) + 0.012), 28), 0.0055, MAT.chromeTrim, 0.004));
  panel('teto', [RF(XT, XQ2, r(J.UE), 'L'), RF(XQ2, XD2, r(J.UE), 'b'), RF(XD2, XWT, r(J.UE), 'Br')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('colunas', [RS(XWT, XA, r(J.T1), r(J.UE), 'BRt'), RF(XWB, XA, r(J.T1), 'Rl')], MAT.paint, { shadow: true, fl: 0.035 });
  glass('para_brisa', RF(XWT, XWB, r(J.T1)));

  /* traseira: tampa com vidro, aerofólio, faixa de luz e placa; para-choque e lanternas nos cantos */
  panel('tampa_tras', [RF(XL, XLL, r(J.UE), 'LBr'), RF(XLL, XG, tCut, 'B'), RS(XG, XT2, r(J.T2), r(J.UE), 'Bt'), RF(XT2, XT, r(J.UE), 'RBl')], MAT.paint, { shadow: true, parent: tailPivot, fl: 0.03 });
  panel('tampa_tras', [RF(XL + 0.02, XG - 0.01, rowFn(J.UE, -0.05))], MAT.underDS, { off: -0.03, parent: tailPivot, fl: 0, res: 0.05 });
  glass('vidro_tras', RF(XG, XT2, r(J.T2)), tailPivot);
  box('tampa_tras', [XT - 0.03, topY(XT - 0.03, 0) + 0.008, 0], [0.07, 0.014, 1.0], MAT.paint, 0.006, [0, 0, -0.1], tailPivot);
  /* faixa de luz de lado a lado, entre as lanternas */
  panel('faixa_luz', [RF(-1.885, -1.872, tCut)], MAT.lensRed, { off: 0.005, fl: 0.004, flMat: MAT.trim, parent: tailPivot });
  /* placa numa chapa plana (a tampa é curva ali), inclinada como a tampa */
  { const q = surf(-1.9295, 0), a = Math.atan2(q.n[1], -q.n[0]);
    box('tampa_tras', [q.p[0] + q.n[0] * 0.007, q.p[1] + q.n[1] * 0.007, 0], [0.008, 0.13, 0.40], MAT.plate, 0.01, [0, 0, -a], tailPivot); }
  panel('tampa_tras', [RF(-1.902, -1.896, cst(0.30))], MAT.chromeTrim, { off: 0.005, fl: 0.003, flMat: MAT.chromeTrim, parent: tailPivot });
  S.forEach(s => { const q = onSurf(-1.908, s * 0.11, 0.008); box('luz_placa', q, [0.012, 0.012, 0.045], MAT.bulb, 0.004, null, tailPivot); });
  box('luz_freio', [XT - 0.06, topY(XT - 0.06, 0) + 0.006, 0], [0.025, 0.016, 0.34], MAT.lensRed, 0.006, [0, 0, -0.25], tailPivot);
  { const q = onSurf(-1.899, 0, 0.012); cyl('camera_re', q, 0.011, 0.02, 'x', MAT.black, null, tailPivot); }   // no friso cromado, acima da placa
  panel('para_choque_t', [RS(XR, XL, r(J.R0615), r(J.F0)), RS(XL, AR0, r(J.R0615), r(J.F0), 'TR'), RF(XR, XL, r(J.R0615), 'R')], MAT.paint, SH);
  add('para_choque_t', capGeo(false, J.F0, J.T6), MAT.paint).castShadow = true;
  add('para_choque_t', capPatch(false, -0.56, 0.56, z => 0.42, z => 0.47, 0.003, 40, 2), MAT.trim);
  [-0.42, -0.15, 0.15, 0.42].forEach(z => { const p = capPt(false, z, 0.55, 0.002); cyl('sensores_estac', p, 0.011, 0.012, 'x', MAT.paint); });
  box('painel_tras', [-1.90, 0.56, 0], [0.012, 0.30, 1.18], MAT.underDS);
  box('painel_tras', [-1.915, 0.715, 0], [0.05, 0.006, 1.18], MAT.underDS);
  const LT = [RS(XLL, XG, tCut, r(J.UE)), RS(XLL, XLS, r(J.UE), lOut)];
  panel('lanternas', LT, MAT.lampHousing, { off: 0.003, fl: 0 });
  panel('lanternas', LT, MAT.lensRed, { off: 0.009, fl: 0.007, flMat: MAT.trim });
  panel('lanternas', [RS(XLL + 0.004, XLL + 0.016, x => tCut(x) + 0.03, x => sRow(x, J.UE) + 0.02)], MAT.lensWhite, { off: 0.0115, fl: 0 });
  panel('lanternas', [RS(-1.87, -1.85, x => sRow(x, J.UE) + 0.012, x => Math.max(sRow(x, J.UE) + 0.03, lOut(x) - 0.012))], MAT.lensAmber, { off: 0.0115, fl: 0 });
  S.forEach(s => sph('lanternas', onSurf(-1.885, s * (tCut(-1.885) + sRow(-1.885, J.UE)) / 2, -0.004), 0.018, MAT.bulb));

  /* porta de recarga: tampinha no para-lama dianteiro direito, sobre a roda */
  const PRx0 = 1.70, PRx1 = 1.84, PRlo = x => sAtY(x, 0.885), PRhi = x => sAtY(x, 0.775);
  oneSide('porta_recarga', RS(PRx0, PRx1, PRlo, PRhi), -1, MAT.paint, 0.003);
  oneSide('porta_recarga', RS(PRx0 + 0.006, PRx1 - 0.006, PRlo, PRhi), -1, MAT.gap, -0.004);

  /* assoalho só atrás e na frente da bateria (no meio, quem fecha por baixo é a própria caixa da bateria) e caixas de roda */
  panel('monobloco', [RS(AR0, -1.13, r(J.F2), r(J.F0)), RS(0.97, 1.05, r(J.F2), r(J.F0)), RS(AR1, AF0, r(J.S0), r(J.F2))], MAT.underDS, { fl: 0, res: 0.06 });
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
    const lo = x => qBot(x) - 0.003, hi = x => Math.min(qTop(x) + 0.003, lo(x));
    edgePath(XQW + 0.004, XQ2 - 0.004, x => s * lo(x), 18).forEach(p => Q.push(p)); vs(XQ2 - 0.004, lo, hi, 8);
    edgePath(XQ2 - 0.004, XQW + 0.004, x => s * hi(x), 24).forEach(p => Q.push(p));
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
    const b = onSurf(0.905, s * (sRow(0.905, J.SB) - 0.012), 0);
    box('retrovisores', [b[0], b[1] + 0.014, b[2] + s * 0.022], [0.08, 0.05, 0.045], MAT.trim, 0.012, null, dp(s));
    box('retrovisores', [b[0] - 0.035, b[1] + 0.04, b[2] + s * 0.10], [0.11, 0.115, 0.18], MAT.paint, 0.045, null, dp(s));
    box('retrovisores', [b[0] - 0.092, b[1] + 0.04, b[2] + s * 0.102], [0.004, 0.092, 0.15], MAT.chrome, 0.002, null, dp(s));
    box('piscas_lat', [b[0] - 0.02, b[1] + 0.006, b[2] + s * 0.13], [0.07, 0.012, 0.09], MAT.lensAmber, 0.004, null, dp(s));   // repetidor no retrovisor
    [[DOORAX[s], dp(s), XA], [RDOORAX[s], rdp(s), XB]].forEach(([ax, par, xa]) => {
      [0.56, 0.84].forEach(y => {
        box('dobradicas', [xa + 0.034, y, s * (sideZ(xa + 0.034, y) - 0.044)], [0.04, 0.055, 0.03], MAT.steelDark, 0.004);
        box('dobradicas', [xa - 0.016, y, ax[2] - s * 0.004], [0.045, 0.05, 0.012], MAT.steelDark, 0.003, null, par);
        cyl('dobradicas', [ax[0], y, ax[2]], 0.007, 0.07, 'y', MAT.steel);
      });
      rod('dobradicas', [xa + 0.038, 0.70, s * (sideZ(xa + 0.038, 0.70) - 0.07)], [xa - 0.04, 0.70, s * (sideZ(xa - 0.04, 0.70) - 0.055)], 0.007, MAT.steelDark, par);
    });
    [[XB, dp(s), 0.15], [XD2, rdp(s), -0.77]].forEach(([xe, par, xh]) => {
      const zl = s * (sideZ(xe + 0.015, 0.78) - 0.03);
      box('fech_portas', [xe + 0.016, 0.78, zl], [0.022, 0.075, 0.04], MAT.steelDark, 0.004, null, par);
      rod('fech_portas', [xh, 0.90, s * (sideZ(xh, 0.90) - 0.02)], [xe + 0.02, 0.79, zl], 0.003, MAT.steel, par);
      add('fech_portas', gTorus(0.012, 0.003, 'x', 6, 16), MAT.steel, [xe - 0.012, 0.78, s * (sideZ(xe - 0.01, 0.78) - 0.03)]);
    });
    rod('maq_vidro', [0.02, 0.56, s * 0.80], [0.70, 0.92, s * 0.80], 0.008, MAT.steelDark, dp(s));
    rod('maq_vidro', [0.02, 0.92, s * 0.795], [0.70, 0.56, s * 0.795], 0.008, MAT.steelDark, dp(s));
    cyl('maq_vidro', [0.36, 0.74, s * 0.805], 0.04, 0.04, 'z', MAT.black, null, dp(s));
    rod('maq_vidro_tras', [-0.80, 0.58, s * 0.80], [-0.34, 0.92, s * 0.80], 0.008, MAT.steelDark, rdp(s));
    cyl('maq_vidro_tras', [-0.57, 0.74, s * 0.805], 0.035, 0.04, 'z', MAT.black, null, rdp(s));
    cyl('alto_falantes', [0.74, 0.46, s * 0.795], 0.075, 0.03, 'z', MAT.black, null, dp(s));
    cyl('alto_falantes', [-0.44, 0.48, s * 0.795], 0.065, 0.03, 'z', MAT.black, null, rdp(s));
    const zc = s * 0.62;
    box('dobr_capo', [HINGE[0] + 0.012, HINGE[1] - 0.035, zc], [0.06, 0.055, 0.012], MAT.steelDark, 0.004);
    cyl('dobr_capo', [HINGE[0], HINGE[1], zc], 0.007, 0.03, 'z', MAT.steel);
    rod('dobr_capo', [HINGE[0], HINGE[1], zc], [HINGE[0] + 0.09, topY(HINGE[0] + 0.09, 0.62) - 0.014, zc], 0.008, MAT.steelDark, hoodPivot);
    const zt = s * 0.47;
    box('dobr_tampa', [TAILH[0] + 0.03, TAILH[1] + 0.004, zt], [0.05, 0.012, 0.04], MAT.steelDark, 0.003);
    cyl('dobr_tampa', [TAILH[0], TAILH[1], zt], 0.007, 0.05, 'z', MAT.steel);
    rod('dobr_tampa', [TAILH[0], TAILH[1], zt], [TAILH[0] - 0.075, topY(TAILH[0] - 0.075, 0.47) - 0.014, zt], 0.008, MAT.steelDark, tailPivot);
    const g = new THREE.Group(); reg('amort_tampa').group.add(g);
    const body = add('amort_tampa', new THREE.CylinderGeometry(0.012, 0.012, 1, 12), MAT.black, null, null, g);
    const pin = add('amort_tampa', new THREE.CylinderGeometry(0.006, 0.006, 1, 10), MAT.chrome, null, null, g);
    STRUT[s] = { B: V(-1.66, 1.40, s * 0.64), Gc: V(-1.84, 1.04, s * 0.66) };
    ANIM.struts.push({ body, pin, B: STRUT[s].B, Gc: STRUT[s].Gc });
  });
  box('fech_tampa', [XL + 0.035, 0.80, 0], [0.03, 0.04, 0.07], MAT.steelDark, 0.004, null, tailPivot);
  add('fech_tampa', gTorus(0.013, 0.003, 'x', 6, 16), MAT.steel, [XL + 0.01, 0.745, 0]);
  add('fech_capo', gTorus(0.012, 0.003, 'z', 6, 16), MAT.steel, [1.93, 0.82, 0], null, hoodPivot);
  const wip = (x0, z0, z1) => { const pts = []; for (let k = 0; k <= 8; k++) { const z = z0 + (z1 - z0) * k / 8, x = x0 - 0.05 * k / 8; pts.push([x, topY(x, z) + 0.014, z]); } tube('limpador', pts, 0.006, MAT.black); };
  wip(0.90, -0.50, 0.10); wip(0.90, 0.06, 0.66);
  { const a = onSurf(XG + 0.02, 0, 0.014), b2 = onSurf(XG + 0.17, 0.34, 0.014); rod('limpador_tras', a, b2, 0.006, MAT.black, tailPivot); cyl('limpador_tras', [XG + 0.045, topY(XG + 0.045, 0) - 0.05, 0], 0.032, 0.08, 'x', MAT.black, null, tailPivot); }
  flushPanels();
}

/* ===== Conjunto elétrico "8 em 1": motor, redutor e diferencial embaixo; eletrônica de potência num bloco em cima ===== */
const MX = 1.46, MY = 0.43, MR = 0.118, MZ0 = -0.40, MZ1 = -0.13;     // motor síncrono de ímãs (eixo ao longo de z, do lado direito)
const DX = 1.35, DY = WY, DZ = -0.03;                                 // diferencial, na altura dos semieixos
const IX = 1.60, IY = 0.47, IZ = -0.06;                               // eixo intermediário do redutor
function buildEDrive() {
  /* motor: carcaça com aletas, tampa do lado direito, estator de cobre e rotor com ímãs (gira) */
  const mzc = (MZ0 + MZ1) / 2, mL = MZ1 - MZ0;
  add('motor_el', gCyl(MR, MR, mL, 'z', 40), MAT.edrive, [MX, MY, mzc]);
  for (let k = 1; k <= 6; k++) add('motor_el', gTorus(MR + 0.003, 0.0045, 'z', 6, 40), MAT.edrive, [MX, MY, MZ0 + mL * k / 7]);
  add('motor_el', gCyl(MR * 0.94, MR * 0.94, 0.022, 'z', 40), MAT.edriveDark, [MX, MY, MZ0 - 0.008]);
  add('motor_el', gCyl(MR * 0.84, MR * 0.84, mL * 0.86, 'z', 36, true), MAT.copper, [MX, MY, mzc]);
  const rp = pivotOf('rotor', [MX, MY, 0]); ANIM.spin.push(rp);
  add('rotor', gCyl(0.072, 0.072, mL * 0.8, 'z', 28), MAT.steelDark, [0, 0, mzc], null, rp);
  add('rotor', gCyl(0.017, 0.017, 0.36, 'z', 14), MAT.steel, [0, 0, mzc + 0.03], null, rp);
  for (let k = 0; k < 8; k++) { const a = k * TAU / 8; add('rotor', gBox(0.012, 0.03, mL * 0.78, 0.002), MAT.iron, [Math.cos(a) * 0.066, Math.sin(a) * 0.066, mzc], [0, 0, a], rp); }
  add('resolver', gTorus(0.04, 0.008, 'z', 6, 28), MAT.black, [MX, MY, MZ0 - 0.024]);
  box('resolver', [MX + 0.05, MY + 0.03, MZ0 - 0.024], [0.03, 0.02, 0.016], MAT.black, 0.004);
  /* redutor de uma marcha: carcaça que liga o motor, o eixo intermediário e o diferencial */
  add('redutor', gCyl(0.105, 0.105, 0.21, 'z', 36), MAT.edrive, [MX, MY, -0.025]);
  add('redutor', gCyl(0.125, 0.125, 0.21, 'z', 40), MAT.edrive, [DX, DY, -0.025]);
  add('redutor', gCyl(0.09, 0.09, 0.21, 'z', 32), MAT.edrive, [IX - 0.07, IY - 0.04, -0.025]);
  box('redutor', [(MX + DX) / 2, (MY + DY) / 2, -0.025], [0.16, 0.13, 0.21], MAT.edrive, 0.03, [0, 0, -0.75]);
  for (const z of [-0.128, 0.078]) add('redutor', gTorus(0.126, 0.005, 'z', 6, 40), MAT.edriveDark, [DX, DY, z]);
  const gp = pivotOf('redutor', [IX - 0.07, IY - 0.04, 0]); ANIM.spin.push(gp);
  add('redutor', gCyl(0.07, 0.07, 0.03, 'z', 30), MAT.steel, [0, 0, -0.06], null, gp);
  add('redutor', gCyl(0.03, 0.03, 0.03, 'z', 18), MAT.steel, [0, 0, 0.0], null, gp);
  box('redutor', [DX + 0.05, DY - 0.11, 0.02], [0.03, 0.02, 0.03], MAT.steelDark, 0.004);    // bujão de dreno
  box('redutor', [DX + 0.13, DY + 0.02, 0.06], [0.02, 0.03, 0.03], MAT.steelDark, 0.004);    // bujão de abastecimento
  const dpv = pivotOf('diferencial', [DX, DY, 0]); ANIM.spin.push(dpv);
  add('diferencial', gCyl(0.08, 0.08, 0.13, 'z', 32), MAT.alu, [0, 0, DZ], null, dpv);
  add('diferencial', gTorus(0.098, 0.012, 'z', 6, 40), MAT.steel, [0, 0, DZ - 0.07], null, dpv);
  add('trava_p', gCyl(0.018, 0.018, 0.06, 'y', 16), MAT.black, [DX + 0.10, DY + 0.12, 0.06]);
  box('trava_p', [DX + 0.10, DY + 0.16, 0.06], [0.03, 0.02, 0.03], MAT.black, 0.004);
  /* eletrônica de potência em dois andares: inversor e distribuição embaixo, carregador e conversor em cima */
  box('inversor', [1.47, 0.615, -0.25], [0.30, 0.11, 0.30], MAT.edrive, 0.012);
  for (let k = -3; k <= 3; k++) box('inversor', [1.47 + k * 0.04, 0.565, -0.25], [0.006, 0.02, 0.28], MAT.edriveDark);
  box('pdu', [1.46, 0.615, 0.02], [0.28, 0.11, 0.24], MAT.edrive, 0.012);
  [-0.02, 0.06].forEach(z => add('pdu', gCyl(0.018, 0.018, 0.04, 'x', 16), MAT.hv, [1.30, 0.60, z]));
  [0.10, 0.12].forEach(z => add('pdu', gCyl(0.012, 0.012, 0.03, 'x', 12), MAT.hv, [1.30, 0.64, z]));
  box('obc', [1.47, 0.70, -0.22], [0.30, 0.06, 0.34], MAT.edrive, 0.01);
  box('dcdc', [1.46, 0.70, 0.04], [0.28, 0.06, 0.18], MAT.edrive, 0.01);
  add('dcdc', gCyl(0.008, 0.008, 0.03, 'z', 12), MAT.redCable, [1.42, 0.70, 0.14]);
  box('vcu', [1.625, 0.62, -0.06], [0.02, 0.07, 0.12], MAT.box, 0.006);
  box('bms', [1.625, 0.62, 0.08], [0.02, 0.07, 0.10], MAT.box, 0.006);
  box('conj_eletrico', [1.47, 0.737, -0.10], [0.32, 0.012, 0.58], MAT.edriveDark, 0.006);
  box('conj_eletrico', [1.47, 0.745, -0.10], [0.10, 0.004, 0.14], MAT.plate);
  S.forEach(s => box('conj_eletrico', [1.47, 0.55, s > 0 ? 0.15 : -0.405], [0.30, 0.10, 0.012], MAT.edriveDark, 0.004));
  /* coxins: um em cada longarina e o tirante de baixo, no subchassi */
  box('coxim_dir', [1.58, 0.52, -0.47], [0.09, 0.065, 0.075], MAT.rubber, 0.012);
  rod('coxim_dir', [1.52, 0.45, -0.40], [1.58, 0.51, -0.44], 0.013, MAT.steelDark);
  box('coxim_dir', [1.58, 0.52, -0.52], [0.11, 0.03, 0.05], MAT.steelDark);
  box('coxim_esq', [1.55, 0.50, 0.47], [0.08, 0.06, 0.08], MAT.rubber, 0.012);
  rod('coxim_esq', [1.42, 0.46, 0.08], [1.55, 0.49, 0.44], 0.012, MAT.steelDark);
  add('coxim_tras', gCyl(0.03, 0.03, 0.05, 'x', 20), MAT.rubber, [1.12, 0.26, -0.03]);
  rod('coxim_tras', [1.28, 0.24, -0.03], [1.13, 0.26, -0.03], 0.014, MAT.steelDark);
  /* semieixos: o direito passa atrás e embaixo do motor */
  S.forEach(s => {
    const zi = s > 0 ? DZ + 0.10 : DZ - 0.10;
    tube('semieixos', [[DX, WY, zi], [DX + 0.003, WY, s * 0.45], [XFA, WY, s * 0.665]], 0.013, MAT.steel);
    kit('semieixos', 'cv_boot', { at: [XFA, WY, s * 0.665], rot: s > 0 ? [0, Math.PI, 0] : null });
    kit('semieixos', 'cv_boot', { at: [DX, WY, zi + s * 0.035], rot: s > 0 ? null : [0, Math.PI, 0] });
  });
  rod('pedal_acel', [0.74, 0.40, 0.22], [0.72, 0.62, 0.22], 0.006, MAT.steelDark);
  box('pedal_acel', [0.70, 0.40, 0.22], [0.015, 0.13, 0.055], MAT.rubber, 0.006, [0, 0, -0.35]);
  box('pedal_acel', [0.75, 0.62, 0.22], [0.03, 0.05, 0.05], MAT.black, 0.006);
}

/* ===== Alta tensão: bateria de lâminas sob o assoalho, cabos laranja, porta de recarga e carregador portátil ===== */
const PX0 = -1.10, PX1 = 0.95, PY0 = 0.135, PY1 = 0.27, PZ = 0.60;
function buildHV() {
  const pxc = (PX0 + PX1) / 2, pL = PX1 - PX0;
  box('bateria_at', [pxc, PY0 + 0.012, 0], [pL, 0.024, 2 * PZ], MAT.packAlu, 0.012);
  box('bateria_at', [pxc, PY1 - 0.007, 0], [pL - 0.02, 0.014, 2 * PZ - 0.02], MAT.edriveDark, 0.008);
  S.forEach(s => box('bateria_at', [pxc, (PY0 + PY1) / 2, s * (PZ - 0.008)], [pL, PY1 - PY0, 0.016], MAT.packAlu, 0.004));
  [PX0 + 0.008, PX1 - 0.008].forEach(x => box('bateria_at', [x, (PY0 + PY1) / 2, 0], [0.016, PY1 - PY0, 2 * PZ], MAT.packAlu, 0.004));
  for (let k = 0; k < 7; k++) box('bateria_at', [PX0 + 0.12 + k * (pL - 0.24) / 6, PY0 - 0.003, 0], [0.05, 0.01, 2 * PZ - 0.06], MAT.packAlu, 0.003);
  S.forEach(s => box('bateria_at', [pxc, 0.25, s * (PZ + 0.03)], [pL - 0.06, 0.012, 0.06], MAT.packAlu, 0.003));   // abas de fixação nas soleiras
  /* 104 células de lâmina em série, de través, uma ao lado da outra */
  const N = 104, cx0 = -0.98, cx1 = 0.78;
  for (let k = 0; k < N; k++) box('celulas', [cx0 + (cx1 - cx0) * (k + 0.5) / N, 0.205, 0], [0.0128, 0.088, 0.905], MAT.cell);
  box('celulas', [(cx0 + cx1) / 2, 0.252, 0.44], [cx1 - cx0, 0.006, 0.02], MAT.busbar);
  box('celulas', [(cx0 + cx1) / 2, 0.252, -0.44], [cx1 - cx0, 0.006, 0.02], MAT.busbar);
  /* placa fria embaixo das células: o fluido do ar-condicionado esfria (ou a bomba de calor aquece) a bateria direto */
  box('placa_fria', [(cx0 + cx1) / 2, 0.155, 0], [cx1 - cx0 + 0.04, 0.008, 0.95], MAT.alu);
  { const P = []; for (let k = 0; k <= 9; k++) { const z = -0.42 + k * 0.093; P.push([k % 2 ? cx1 : cx0, 0.150, z], [k % 2 ? cx0 : cx1, 0.150, z]); } tube('placa_fria', P, 0.006, MAT.acPipe); }
  tube('placa_fria', [[cx1, 0.150, -0.42], [0.88, 0.16, -0.42], [0.93, 0.20, -0.30], [0.99, 0.21, -0.30]], 0.007, MAT.acPipe);
  tube('placa_fria', [[cx0, 0.150, 0.42], [-1.0, 0.17, 0.5], [0.80, 0.24, 0.52], [0.93, 0.22, -0.24], [0.99, 0.22, -0.24]], 0.007, MAT.acPipe);
  /* coletores de dados das células (tensão e temperatura de cada uma) e o chicote até o BMS */
  for (let k = 0; k < 8; k++) box('bic', [cx0 + 0.11 + k * (cx1 - cx0 - 0.22) / 7, 0.258, 0.30], [0.09, 0.008, 0.07], MAT.box, 0.002);
  tube('bic', [[cx0 + 0.05, 0.262, 0.30], [cx1 - 0.05, 0.262, 0.30], [0.90, 0.24, 0.30], [0.99, 0.20, 0.30]], 0.004, MAT.harness);
  /* conectores na frente da caixa: dois de potência (laranja), o de dados e a válvula de respiro */
  [0.10, -0.10].forEach(z => { add('conector_at', gCyl(0.024, 0.024, 0.05, 'x', 20), MAT.hv, [PX1 + 0.025, 0.205, z]); box('conector_at', [PX1 + 0.006, 0.205, z], [0.012, 0.07, 0.07], MAT.black, 0.004); });
  add('conector_at', gCyl(0.016, 0.016, 0.04, 'x', 16), MAT.black, [PX1 + 0.02, 0.205, 0.30]);
  add('conector_at', gCyl(0.02, 0.02, 0.012, 'x', 16), MAT.black, [PX1 + 0.008, 0.20, 0.45]);
  /* cabos laranja: bateria → caixa de distribuição; distribuição → compressor; porta de recarga → carregador */
  tube('cabos_at', [[PX1 + 0.05, 0.205, 0.10], [1.02, 0.24, 0.10], [1.12, 0.40, 0.07], [1.22, 0.56, 0.06], [1.30, 0.60, 0.06]], 0.013, MAT.hv);
  tube('cabos_at', [[PX1 + 0.05, 0.205, -0.10], [1.03, 0.24, -0.08], [1.13, 0.40, -0.05], [1.23, 0.56, -0.03], [1.30, 0.60, -0.02]], 0.013, MAT.hv);
  tube('cabos_at', [[1.30, 0.64, 0.11], [1.36, 0.58, 0.24], [1.55, 0.48, 0.30], [1.70, 0.38, 0.32], [1.74, 0.36, 0.38]], 0.008, MAT.hv);
  const pr = surf(1.77, -sAtY(1.77, 0.83)), pn = V(pr.n[0], pr.n[1], pr.n[2]);
  const pin = [pr.p[0] - pn.x * 0.05, pr.p[1] - pn.y * 0.05, pr.p[2] - pn.z * 0.05];
  tube('cabos_at', [pin, [1.72, 0.80, -0.68], [1.62, 0.77, -0.50], [1.52, 0.74, -0.33], [1.47, 0.73, -0.24]], 0.012, MAT.hv);
  /* porta de recarga: tomada CCS2 (Tipo 2 em cima, os dois pinos de corrente contínua embaixo), atrás da tampinha */
  const at = (d, up) => [pr.p[0] - pn.x * d, pr.p[1] - pn.y * d + (up || 0), pr.p[2] - pn.z * d];
  const so = add('porta_recarga', gCyl(0.036, 0.036, 0.04, 'y', 28), MAT.black, at(0.03, 0.016)); so.quaternion.setFromUnitVectors(UPY, pn);
  const sd = add('porta_recarga', gBox(0.10, 0.11, 0.035, 0.01), MAT.black, at(0.035, -0.006)); sd.quaternion.setFromUnitVectors(V(0, 0, 1), pn);
  [-0.016, 0.016].forEach(dx => { const m = add('porta_recarga', gCyl(0.01, 0.01, 0.02, 'y', 14), MAT.plastic, [at(0.012, -0.03)[0] + dx, at(0.012, -0.03)[1], at(0.012, -0.03)[2]]); m.quaternion.setFromUnitVectors(UPY, pn); });
  /* carregador portátil guardado no porta-malas */
  box('cabo_recarga', [-1.66, 0.42, 0.34], [0.22, 0.08, 0.14], MAT.black, 0.02);
  add('cabo_recarga', gTorus(0.09, 0.012, 'y', 8, 32), MAT.black, [-1.66, 0.40, 0.14]);
}

/* ===== Arrefecimento do motor e da eletrônica, e a bomba de calor (aquece e esfria cabine e bateria) ===== */
function buildThermal() {
  box('radiador', [1.99, 0.44, 0], [0.024, 0.24, 0.56], MAT.aluDark);
  for (let k = -8; k <= 8; k++) box('radiador', [2.003, 0.44, k * 0.031], [0.003, 0.23, 0.004], MAT.alu);
  box('radiador', [1.99, 0.575, 0], [0.036, 0.03, 0.58], MAT.black, 0.006);
  box('radiador', [1.99, 0.305, 0], [0.036, 0.03, 0.58], MAT.black, 0.006);
  add('ventoinha', gTorus(0.125, 0.011, 'x', 8, 48), MAT.plastic, [1.955, 0.44, 0]);
  add('ventoinha', gCyl(0.04, 0.04, 0.05, 'x', 20), MAT.black, [1.935, 0.44, 0]);
  { const fan = new THREE.Group(); fan.position.set(1.948, 0.44, 0); reg('ventoinha').group.add(fan); ANIM.fans = [fan]; ANIM.fan = fan;
    for (let k = 0; k < 7; k++) { const m = add('ventoinha', gBox(0.006, 0.105, 0.03, 0.003), MAT.plastic, [0, 0.065 * Math.cos(k * TAU / 7), 0.065 * Math.sin(k * TAU / 7)], [k * TAU / 7, 0.35, 0], fan); m.rotation.order = 'XYZ'; } }
  box('ventoinha', [1.962, 0.44, 0], [0.012, 0.26, 0.56], MAT.plastic);
  box('condensador', [2.022, 0.44, 0], [0.014, 0.25, 0.60], MAT.alu);
  for (let k = -9; k <= 9; k++) box('condensador', [2.031, 0.44, k * 0.031], [0.002, 0.24, 0.003], MAT.aluDark);
  /* bomba d'água elétrica, reservatório e mangueiras: radiador → eletrônica → motor → bomba → radiador */
  add('bomba_agua', gCyl(0.034, 0.034, 0.08, 'x', 20), MAT.black, [1.74, 0.30, -0.32]);
  add('bomba_agua', gCyl(0.03, 0.03, 0.05, 'x', 20), MAT.aluDark, [1.80, 0.30, -0.32]);
  kit('vaso', 'reservoir', { at: [1.64, 0.68, -0.62], s: [0.08, 0.12, 0.10], mats: { tank: MAT.coolantTank } });
  kit('vaso', 'res_cap', { at: [1.64, 0.74, -0.62], mats: { tankNeck: MAT.coolantTank } });
  tube('vaso', [[1.64, 0.62, -0.58], [1.72, 0.58, -0.48], [1.90, 0.58, -0.24], [1.98, 0.585, -0.20]], 0.0045, MAT.hose);
  tube('mang_sup', [[1.98, 0.56, -0.22], [1.86, 0.62, -0.30], [1.70, 0.63, -0.38], [1.62, 0.61, -0.40]], 0.014, MAT.hose);
  tube('mang_inf', [[1.40, 0.33, -0.40], [1.55, 0.29, -0.36], [1.70, 0.30, -0.32]], 0.014, MAT.hose);
  tube('mang_inf', [[1.84, 0.30, -0.32], [1.92, 0.31, -0.26], [1.98, 0.32, -0.22]], 0.014, MAT.hose);
  tube('mang_inf', [[1.47, 0.56, -0.40], [1.47, 0.53, -0.415], [1.46, 0.50, -0.41]], 0.012, MAT.hose);
  add('sens_temp', gCyl(0.008, 0.008, 0.04, 'y', 12), MAT.black, [1.78, 0.645, -0.34]);
  /* bomba de calor: compressor elétrico (alta tensão), módulo de válvulas e as linhas */
  add('compressor', gCyl(0.065, 0.065, 0.20, 'z', 28), MAT.alu, [1.76, 0.33, 0.30]);
  box('compressor', [1.76, 0.33, 0.43], [0.13, 0.12, 0.06], MAT.aluDark, 0.012);
  add('compressor', gCyl(0.012, 0.012, 0.03, 'x', 12), MAT.hv, [1.70, 0.36, 0.43]);
  box('modulo_termico', [1.17, 0.60, 0.24], [0.14, 0.14, 0.24], MAT.aluDark, 0.012);
  for (let k = 0; k < 4; k++) add('modulo_termico', gCyl(0.016, 0.016, 0.05, 'y', 14), MAT.black, [1.13 + (k % 2) * 0.08, 0.695, 0.16 + Math.floor(k / 2) * 0.16]);
  for (let k = 0; k < 6; k++) box('modulo_termico', [1.255, 0.60, 0.17 + k * 0.028], [0.03, 0.12, 0.006], MAT.alu);
  box('pressostato', [1.70, 0.43, 0.26], [0.025, 0.03, 0.025], MAT.black, 0.004);
  box('pressostato', [1.16, 0.56, 0.38], [0.025, 0.03, 0.025], MAT.black, 0.004);
  tube('tubos_ac', [[1.76, 0.40, 0.24], [1.86, 0.48, 0.25], [1.96, 0.54, 0.27], [2.022, 0.555, 0.28]], 0.008, MAT.acPipe);
  tube('tubos_ac', [[2.022, 0.325, 0.28], [1.86, 0.27, 0.40], [1.50, 0.34, 0.46], [1.28, 0.52, 0.36], [1.24, 0.58, 0.30]], 0.007, MAT.acPipe);
  tube('tubos_ac', [[1.10, 0.66, 0.18], [1.02, 0.70, 0.06], [0.90, 0.70, -0.10]], 0.008, MAT.acPipe);
  tube('tubos_ac', [[1.10, 0.62, 0.30], [1.02, 0.66, 0.16], [0.90, 0.66, 0.02]], 0.009, MAT.acPipe);
  tube('tubos_ac', [[1.10, 0.55, 0.20], [1.03, 0.40, -0.10], [1.0, 0.24, -0.24], [0.99, 0.22, -0.24]], 0.007, MAT.acPipe);
  tube('tubos_ac', [[0.99, 0.21, -0.30], [1.04, 0.36, -0.20], [1.12, 0.54, 0.16]], 0.007, MAT.acPipe);
  tube('tubos_ac', [[1.22, 0.56, 0.18], [1.42, 0.46, 0.28], [1.62, 0.36, 0.30], [1.69, 0.33, 0.30]], 0.011, MAT.acPipe);
  /* na cabine: caixa do ar com evaporador, condensador interno (aquece), ventilador e filtro */
  box('evaporador', [0.80, 0.68, -0.30], [0.06, 0.18, 0.22], MAT.alu);
  for (let k = -3; k <= 3; k++) box('evaporador', [0.832, 0.68, -0.30 + k * 0.03], [0.002, 0.17, 0.004], MAT.aluDark);
  box('cond_int', [0.80, 0.65, 0.0], [0.045, 0.15, 0.19], MAT.alu);
  for (let k = -2; k <= 2; k++) box('cond_int', [0.825, 0.65, k * 0.035], [0.002, 0.14, 0.004], MAT.aluDark);
  tube('cond_int', [[0.90, 0.70, -0.10], [0.85, 0.70, -0.05], [0.83, 0.70, 0.02]], 0.007, MAT.acPipe);
  box('filtro_cabine', [0.68, 0.72, -0.42], [0.02, 0.10, 0.22], MAT.paper, 0.003);
  add('vent_interno', gCyl(0.075, 0.075, 0.10, 'y', 28), MAT.black, [0.62, 0.62, -0.52]);
  box('caixa_ar', [0.74, 0.70, -0.04], [0.24, 0.24, 0.58], MAT.plastic, 0.02);
  box('comandos_clima', [0.46, 0.88, 0], [0.012, 0.03, 0.20], MAT.black, 0.004);
  [-0.07, -0.025, 0.025, 0.07].forEach(z => box('comandos_clima', [0.453, 0.88, z], [0.004, 0.012, 0.03], MAT.chromeTrim, 0.002));
}

/* ===== 12 V: bateria auxiliar (carregada pelo conversor DC-DC), fusíveis, módulos, luzes, buzina e limpadores ===== */
function buildLowVoltage() {
  kit('bateria', 'battery', { at: [1.80, 0.57, 0.47], s: [0.82, 0.88, 0.78] });
  tube('cabos_bat', [[1.765, 0.66, 0.40], [1.70, 0.70, 0.30], [1.55, 0.72, 0.18], [1.44, 0.71, 0.14]], 0.007, MAT.redCable);
  tube('cabos_bat', [[1.765, 0.66, 0.54], [1.86, 0.62, 0.62], [1.86, 0.50, 0.66]], 0.007, MAT.cable);
  tube('cabos_bat', [[1.70, 0.66, 0.44], [1.40, 0.70, 0.52], [1.14, 0.70, 0.54]], 0.006, MAT.redCable);
  box('caixa_fus_motor', [1.14, 0.71, 0.56], [0.12, 0.10, 0.12], MAT.black, 0.01);
  box('caixa_fus_painel', [0.56, 0.54, 0.62], [0.12, 0.12, 0.05], MAT.black, 0.008);
  box('bcm', [0.60, 0.64, 0.52], [0.12, 0.03, 0.15], MAT.box, 0.006);
  tube('chicote', [[0.62, 0.64, 0.50], [0.90, 0.78, 0.55], [1.10, 0.80, 0.56], [1.40, 0.78, 0.40], [1.62, 0.66, 0.10], [1.62, 0.66, -0.10]], 0.011, MAT.harness);
  tube('chicote', [[1.14, 0.70, 0.50], [1.30, 0.76, 0.20], [1.60, 0.78, -0.30], [1.80, 0.76, -0.55], [1.96, 0.70, -0.60]], 0.009, MAT.harness);
  tube('chicote', [[0.58, 0.60, 0.62], [0.44, 0.33, 0.72], [-0.55, 0.33, 0.72], [-1.10, 0.36, 0.70], [-1.70, 0.60, 0.66], [-1.86, 0.95, 0.50]], 0.009, MAT.harness);
  add('buzina', gCyl(0.045, 0.045, 0.02, 'x', 24), MAT.black, [2.06, 0.47, 0.32]);
  add('avas', gCyl(0.045, 0.03, 0.05, 'x', 24), MAT.black, [2.05, 0.47, -0.32]);
  box('avas', [2.02, 0.47, -0.32], [0.02, 0.07, 0.07], MAT.black, 0.008);
  add('limpador', gCyl(0.036, 0.036, 0.10, 'x', 20), MAT.black, [1.00, 0.96, -0.30]);
  rod('limpador', [0.97, 0.98, -0.50], [0.97, 0.98, 0.10], 0.005, MAT.steel);
  kit('lavador', 'reservoir', { at: [1.96, 0.44, -0.56], s: [0.10, 0.16, 0.10], mats: { tank: MAT.whiteRes } });
  tube('lavador', [[1.96, 0.52, -0.58], [1.92, 0.68, -0.62], [1.90, 0.79, -0.64]], 0.012, MAT.whiteRes);
  kit('lavador', 'res_cap', { at: [1.90, 0.795, -0.64], s: 0.8, mats: { black: MAT.blue, tankNeck: MAT.whiteRes } });
  tube('lavador', [[1.95, 0.40, -0.50], [1.40, 0.32, -0.70], [0.40, 0.33, -0.74], [-1.20, 0.36, -0.72], [-1.58, 1.36, -0.62], [-1.62, 1.48, -0.05]], 0.0028, MAT.cable);
  box('comutadores', [0.42, 0.98, 0.48], [0.03, 0.03, 0.08], MAT.black, 0.008);
  box('comutadores', [0.42, 0.98, 0.28], [0.03, 0.03, 0.08], MAT.black, 0.008);
}

/* ===== Rodas de liga 16", suspensão (McPherson na frente, eixo de torção atrás), freios a disco nas quatro rodas e direção elétrica ===== */
const TIRE_PROF = [[0.205, -0.085], [0.222, -0.0965], [0.27, -0.0975], [0.305, -0.092], [0.318, -0.078], [0.320, -0.054], [0.320, 0.054], [0.318, 0.078], [0.305, 0.092], [0.27, 0.0975], [0.222, 0.0965], [0.205, 0.085]];
function alloyGeo() {
  const sh = new THREE.Shape(); sh.absarc(0, 0, 0.196, 0, TAU, false);
  for (let k = 0; k < 5; k++) {                         // cinco raios largos, torcidos como uma turbina
    const a0 = k * TAU / 5 + 0.30, a1 = (k + 1) * TAU / 5 - 0.05, h = new THREE.Path();
    h.moveTo(Math.cos(a0) * 0.085, Math.sin(a0) * 0.085);
    h.absarc(0, 0, 0.176, a0 + 0.12, a1, false);
    h.lineTo(Math.cos(a1 - 0.25) * 0.085, Math.sin(a1 - 0.25) * 0.085);
    h.absarc(0, 0, 0.085, a1 - 0.25, a0, true);
    sh.holes.push(h);
  }
  return new THREE.ExtrudeGeometry(sh, { depth: 0.014, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 1, curveSegments: 10 });
}
function buildWheels() {
  const ag = alloyGeo();
  [XFA, XRA].forEach(X => S.forEach(s => {
    const zc = s * TRK, flip = s < 0 ? [0, Math.PI, 0] : null, front = X === XFA, c = V(X, WY, zc);
    let yaw = null;
    if (front) { yaw = pivotOf('mangas', [X, WY, zc]); Object.assign(yaw.userData, { abs: true, owner: 'mangas', side: s, absPos: c.clone() }); }
    const spin = new THREE.Group();
    if (yaw) yaw.add(spin); else { spin.position.copy(c); reg('pneus').group.add(spin); }
    Object.assign(spin.userData, { abs: true, owner: front ? 'mangas' : 'pneus', side: s, absPos: c.clone() });
    WHEELS.push({ X, s, front, yaw, spin });
    const t = add('pneus', gLathe(TIRE_PROF, 'z', 56), MAT.tire, [X, WY, zc], flip, spin); t.castShadow = true;
    add('rodas', gCyl(0.198, 0.198, 0.16, 'z', 40, true), MAT.alu, [X, WY, zc], null, spin);
    add('rodas', gTorus(0.205, 0.006, 'z', 6, 48), MAT.alu, [X, WY, zc + 0.08], null, spin);
    add('rodas', gTorus(0.205, 0.006, 'z', 6, 48), MAT.alu, [X, WY, zc - 0.08], null, spin);
    add('rodas', gLathe([[0.034, 0.0], [0.10, 0.004], [0.17, -0.012], [0.196, -0.03]], 'z', 40), MAT.aluDark, [X, WY, zc + s * 0.024], flip, spin);
    add('rodas', ag, MAT.alu, [X, WY, zc + s * 0.074], flip, spin);
    add('rodas', gCyl(0.042, 0.046, 0.012, 'z', 32), MAT.black, [X, WY, zc + s * 0.092], null, spin);
  }));
  /* sem estepe: kit de reparo (selante e compressor) no fundo do porta-malas */
  box('kit_pneu', [-1.72, 0.42, -0.20], [0.20, 0.10, 0.16], MAT.black, 0.015);
  add('kit_pneu', gCyl(0.045, 0.045, 0.12, 'y', 20), MAT.whiteRes, [-1.72, 0.44, 0.02]);
}

function buildSuspensionBrakes() {
  S.forEach(s => {
    const WF = WHEELS.find(w => w.front && w.s === s), WRr = WHEELS.find(w => !w.front && w.s === s);
    const mir = s > 0 ? null : [1, 1, -1], off = [KD[0], KD[1], s * KD[2]], offR = [-KD[0], KD[1], s * KD[2]];
    /* ---- frente: McPherson ---- */
    const bot = [XFA + 0.012, 0.43, s * 0.66], top = [XFA + 0.03, 0.88, s * 0.585];
    kit('amort_diant', 'strut_tiida', { s: mir, at: off });
    spring('molas_diant', lerp3(bot, top, 0.46), lerp3(bot, top, 0.92), 0.072, 0.0072, 5.5, MAT.spring);
    kit('coxins_amort', 'mount_tiida', { s: mir, at: off });
    kit('mangas', 'knuckle_tiida', { s: mir, parent: WF.yaw, at: off });
    add('mangas', gCyl(0.028, 0.028, 0.06, 'z', 20), MAT.steel, [XFA, WY, s * 0.745], null, WF.yaw);
    kit('bandejas', 'arm_tiida', { s: mir, at: off });
    kit('barra_estab', 'link_tiida', { s: mir, at: off });
    box('barra_estab', [XFA - 0.21, 0.28, s * 0.32], [0.04, 0.035, 0.04], MAT.rubber, 0.008);
    box('subchassi', [1.43, 0.225, s * 0.44], [0.66, 0.05, 0.065], MAT.steelDark, 0.01);
    /* freio dianteiro: disco ventilado, pinça flutuante e sensor do ABS */
    kit('discos', 'disc_v', { at: [XFA, WY, s * 0.72], rot: s > 0 ? null : [0, Math.PI, 0], parent: WF.spin });
    add('sens_roda', gTorus(0.075, 0.004, 'z', 4, 40), MAT.steelDark, [XFA, WY, s * 0.70], null, WF.spin);
    const ang = Math.atan2(0.05, -0.10), rotC = s > 0 ? [0, 0, ang] : [0, Math.PI, Math.PI - ang];
    const rp = (r, t, z) => [XFA + Math.cos(ang) * r - Math.sin(ang) * t, WY + Math.sin(ang) * r + Math.cos(ang) * t, s * z];
    kit('pincas', 'caliper', { at: [XFA, WY, s * 0.72], rot: rotC, parent: WF.yaw });
    kit('pastilhas', 'pads_v', { at: [XFA, WY, s * 0.72], rot: rotC, parent: WF.yaw });
    tube('tubos_freio', [rp(0.14, -0.02 * s, 0.682), [XFA - 0.03, 0.49, s * 0.65], [XFA - 0.02, 0.59, s * 0.61]], 0.005, MAT.rubber);
    add('sens_roda', gCyl(0.009, 0.009, 0.04, 'y', 12), MAT.black, [XFA + 0.07, WY + 0.07, s * 0.695], null, WF.yaw);
    tube('sens_roda', [[XFA + 0.07, WY + 0.095, s * 0.695], [XFA + 0.02, 0.51, s * 0.655], [XFA + 0.01, 0.63, s * 0.615]], 0.0025, MAT.cable);
    /* ---- traseira: eixo de torção, molas e amortecedores separados ---- */
    const bu = [-0.91, 0.34, s * 0.645];
    add('buchas_eixo', gCyl(0.04, 0.04, 0.06, 'z', 20), MAT.rubber, bu);
    box('buchas_eixo', [-0.91, 0.37, s * 0.645], [0.08, 0.06, 0.08], MAT.steelDark, 0.006);
    box('cubo_tras', [XRA, 0.34, s * 0.68], [0.07, 0.22, 0.04], MAT.iron, 0.01);
    add('cubo_tras', gCyl(0.03, 0.03, 0.07, 'z', 20), MAT.steel, [XRA, WY, s * 0.705]);
    add('sens_roda', gCyl(0.009, 0.009, 0.04, 'y', 12), MAT.black, [XRA - 0.07, WY + 0.07, s * 0.69]);
    tube('sens_roda', [[XRA - 0.07, WY + 0.095, s * 0.69], [XRA - 0.02, 0.49, s * 0.625], [XRA + 0.10, 0.57, s * 0.585]], 0.0025, MAT.cable);
    spring('molas_tras', [XRA + 0.05, 0.335, s * 0.575], [XRA + 0.05, 0.61, s * 0.575], 0.06, 0.0068, 5, MAT.spring);
    add('molas_tras', gCyl(0.065, 0.065, 0.012, 'y', 24), MAT.rubber, [XRA + 0.05, 0.615, s * 0.575]);
    kit('amort_tras', 'shock_tiida', { s: mir, at: offR });
    /* freio traseiro: disco sólido, pinça com o motor do freio de estacionamento elétrico */
    kit('discos_tras', 'disc_s206', { at: [XRA, WY, s * 0.725], rot: s > 0 ? null : [0, Math.PI, 0], parent: WRr.spin });
    const angR = Math.atan2(0.06, 0.10), rotR = s > 0 ? [0, 0, angR] : [0, Math.PI, Math.PI - angR];
    kit('pincas_tras', 'caliper', { at: [XRA, WY, s * 0.725], rot: rotR, s: 0.86 });
    kit('pastilhas_tras', 'pads_s', { at: [XRA, WY, s * 0.725], rot: rotR, s: 0.86 });
    const em = [XRA + Math.cos(angR) * 0.115 - Math.sin(angR) * 0.0, WY + Math.sin(angR) * 0.115 + 0.02, s * 0.68];
    add('epb', gCyl(0.024, 0.024, 0.085, 'x', 18), MAT.black, em);
    tube('epb', [[em[0] - 0.04, em[1], em[2]], [XRA + 0.05, 0.50, s * 0.60], [-1.00, 0.36, s * 0.60], [-0.60, 0.33, s * 0.66]], 0.003, MAT.cable);
    tube('tubos_freio', [[XRA + 0.08, WY + 0.08, s * 0.69], [XRA + 0.06, 0.45, s * 0.63], [-1.12, 0.37, s * 0.46]], 0.003, MAT.steel);
  });
  kit('eixo_tras', 'beam_tiida', { at: [-KD[0], KD[1], 0], s: [1, 1, 1.034] });
  tube('barra_estab', [[XFA - 0.02, 0.30, -0.59], [XFA - 0.19, 0.285, -0.52], [XFA - 0.21, 0.28, -0.32], [XFA - 0.21, 0.28, 0.32], [XFA - 0.19, 0.285, 0.52], [XFA - 0.02, 0.30, 0.59]], 0.011, MAT.steel);
  box('subchassi', [1.75, 0.225, 0], [0.05, 0.05, 0.92], MAT.steelDark, 0.01);
  box('subchassi', [1.11, 0.225, 0], [0.06, 0.05, 0.92], MAT.steelDark, 0.01);
  /* freio integrado (IPB): pedal com sensor, motor que gera a pressão, ABS/ESP e reservatório num bloco só */
  box('ipb', [1.07, 0.70, 0.42], [0.15, 0.12, 0.13], MAT.aluDark, 0.012);
  add('ipb', gCyl(0.04, 0.04, 0.09, 'y', 24), MAT.black, [1.10, 0.60, 0.42]);
  box('ipb', [1.13, 0.71, 0.49], [0.03, 0.06, 0.03], MAT.black, 0.004);
  kit('reserv_freio', 'reservoir', { at: [1.07, 0.785, 0.42], s: [0.06, 0.06, 0.09], mats: { tank: MAT.fluid } });
  kit('reserv_freio', 'res_cap', { at: [1.07, 0.815, 0.42], s: 0.9, mats: { tankNeck: MAT.fluid } });
  tube('tubos_freio', [[1.13, 0.68, 0.46], [1.24, 0.66, 0.56], [1.32, 0.62, 0.61], [XFA - 0.02, 0.59, 0.61]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.12, 0.67, 0.38], [1.16, 0.62, 0.10], [1.22, 0.62, -0.45], [XFA - 0.02, 0.59, -0.61]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.05, 0.64, 0.45], [1.0, 0.34, 0.66], [0.40, 0.29, 0.66], [-0.80, 0.30, 0.66], [-1.12, 0.37, 0.46], [-1.14, 0.37, -0.46]], 0.003, MAT.steel);
  rod('pedal_freio', [0.78, 0.68, 0.34], [0.72, 0.41, 0.34], 0.008, MAT.steelDark);
  box('pedal_freio', [0.712, 0.395, 0.34], [0.02, 0.05, 0.08], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('pedal_freio', [0.78, 0.66, 0.34], [1.00, 0.70, 0.42], 0.006, MAT.steel);
}

function buildSteering() {
  kit('caixa_dir', 'rack_tiida', { at: [KD[0], KD[1], 0] });
  S.forEach(s => {
    const inner = V(1.18, 0.38, s * 0.44), outer = V(XFA - 0.14, 0.38, s * 0.65);
    const bar = add('barras_axiais', new THREE.CylinderGeometry(0.009, 0.009, 1, 12), MAT.steel); bar.userData.noMerge = true; setBar(bar, inner, outer);
    const ball = sph('barras_axiais', [outer.x, outer.y, outer.z], 0.018, MAT.steelDark); ball.userData.noMerge = true;
    ANIM.tie.push({ s, bar, ball, inner, outer, pid: 'barras_axiais' });
  });
  tube('coluna', [[1.18, 0.46, 0.26], [1.00, 0.60, 0.31], [0.74, 0.78, 0.35], [0.46, 0.98, 0.37]], 0.017, MAT.steelDark);
  sph('coluna', [1.00, 0.60, 0.31], 0.024, MAT.steel);
  add('eps', gCyl(0.045, 0.045, 0.09, 'x', 24), MAT.aluDark, [0.70, 0.81, 0.352]);
  add('eps', gCyl(0.036, 0.036, 0.13, 'z', 24), MAT.black, [0.68, 0.86, 0.30]);
  box('eps', [0.66, 0.88, 0.42], [0.09, 0.03, 0.08], MAT.box, 0.006);
  const c = V(0.40, 1.03, 0.37), ax = V(-0.82, 0.57, 0).normalize();
  const sw = pivotOf('volante_dir', [c.x, c.y, c.z]);
  Object.assign(sw.userData, { abs: true, owner: 'volante_dir', absPos: c.clone() });
  ANIM.wheel = { g: sw, ax };
  const w = add('volante_dir', gTorus(0.18, 0.017, 'z', 10, 56), MAT.black, [c.x, c.y, c.z], null, sw);
  w.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
  const hub = add('airbag_mot', gCyl(0.08, 0.085, 0.06, 'y', 28), MAT.black, [c.x + ax.x * 0.012, c.y + ax.y * 0.012, c.z], null, sw);
  hub.quaternion.setFromUnitVectors(UPY, ax);
  const u = V(0, 0, 1), v = ax.clone().cross(u).normalize();
  [0, Math.PI, -Math.PI / 2].forEach(a => {                // dois raios na horizontal e um embaixo
    const d = u.clone().multiplyScalar(Math.cos(a)).addScaledVector(v, Math.sin(a));
    rod('volante_dir', [c.x, c.y, c.z], [c.x + d.x * 0.175, c.y + d.y * 0.175, c.z + d.z * 0.175], 0.013, MAT.black, sw);
  });
  const cs = add('cabo_espiral', gTorus(0.05, 0.012, 'z', 8, 28), MAT.black, [c.x - ax.x * 0.035, c.y - ax.y * 0.035, c.z]);
  cs.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
}

function buildInterior() {
  /* painel baixo e fino, com a tela giratória de 12,8" no meio e o quadro digital pequeno atrás do volante */
  box('painel', [0.70, 0.89, 0], [0.34, 0.24, 1.44], MAT.dash, 0.05);
  box('painel', [0.56, 0.98, 0], [0.08, 0.04, 1.38], MAT.dash, 0.02);
  box('painel', [0.50, 0.66, 0], [0.12, 0.22, 0.22], MAT.dash, 0.02);
  box('quadro', [0.52, 1.03, 0.37], [0.03, 0.07, 0.17], MAT.screen, 0.008);
  box('quadro', [0.534, 1.03, 0.37], [0.012, 0.08, 0.18], MAT.black, 0.008);
  box('tela', [0.50, 1.10, 0], [0.022, 0.19, 0.31], MAT.screen, 0.01);
  box('tela', [0.512, 1.10, 0], [0.014, 0.205, 0.325], MAT.black, 0.012);
  add('tela', gCyl(0.04, 0.04, 0.04, 'x', 24), MAT.black, [0.53, 1.10, 0]);
  box('airbag_pass', [0.64, 1.005, -0.38], [0.14, 0.012, 0.28], MAT.dash, 0.006);
  box('airbag_pass', [0.65, 0.975, -0.38], [0.12, 0.05, 0.24], MAT.airbag, 0.01);
  box('srs', [0.30, 0.34, 0], [0.10, 0.04, 0.12], MAT.yellow, 0.006);
  /* console central "flutuante": seletor giratório, botão de partida e o freio de estacionamento elétrico */
  box('console', [0.22, 0.56, 0], [0.42, 0.04, 0.20], MAT.dash, 0.015);
  box('console', [0.04, 0.42, 0], [0.50, 0.10, 0.20], MAT.dash, 0.02);
  rod('console', [0.43, 0.56, 0], [0.48, 0.70, 0], 0.03, MAT.dash);
  add('seletor', gCyl(0.028, 0.03, 0.03, 'y', 28), MAT.chromeTrim, [0.30, 0.59, 0]);
  add('seletor', gTorus(0.03, 0.003, 'y', 6, 28), MAT.black, [0.30, 0.605, 0]);
  box('botao_ligar', [0.34, 0.585, 0.06], [0.03, 0.01, 0.03], MAT.black, 0.006);
  box('botao_ligar', [0.34, 0.591, 0.06], [0.02, 0.002, 0.02], MAT.lensAmber);
  box('epb', [0.22, 0.585, 0.06], [0.04, 0.012, 0.025], MAT.black, 0.004);
  S.forEach(s => {
    box('bancos_diant', [-0.12, 0.50, s * 0.38], [0.52, 0.12, 0.50], MAT.fabric, 0.04);
    box('bancos_diant', [-0.42, 0.88, s * 0.38], [0.11, 0.66, 0.50], MAT.fabric, 0.045, [0, 0, 0.18]);
    box('bancos_diant', [-0.50, 1.27, s * 0.38], [0.09, 0.18, 0.30], MAT.fabric, 0.03, [0, 0, 0.18]);
    for (const dz of [-0.18, 0.18]) box('bancos_diant', [-0.12, 0.39, s * 0.38 + dz], [0.46, 0.02, 0.03], MAT.steelDark);
    rod('cintos', [-0.18, 1.24, s * 0.76], [-0.34, 0.56, s * 0.16], 0.009, MAT.black);
    rod('cintos', [-0.50, 0.48, s * 0.66], [-0.34, 0.56, s * 0.16], 0.009, MAT.black);
    box('cintos', [-0.19, 0.50, s * 0.76], [0.06, 0.10, 0.04], MAT.black, 0.01);
    rod('cintos', [-1.30, 1.14, s * 0.70], [-1.02, 0.56, s * 0.20], 0.008, MAT.black);
    /* airbags laterais (no encosto) e de cortina (no friso do teto) */
    box('airbags_lat', [-0.42, 0.95, s * 0.62], [0.08, 0.20, 0.04], MAT.airbag, 0.01, [0, 0, 0.18]);
    tube('airbags_lat', [[0.20, 1.44, s * 0.70], [-0.30, 1.48, s * 0.70], [-0.90, 1.47, s * 0.70], [-1.35, 1.44, s * 0.69]], 0.014, MAT.airbag);
  });
  box('banco_tras', [-0.98, 0.50, 0], [0.48, 0.12, 1.28], MAT.fabric, 0.04);
  box('banco_tras', [-1.26, 0.84, 0], [0.10, 0.60, 1.28], MAT.fabric, 0.045, [0, 0, 0.22]);
  box('porta_malas', [-1.68, 0.48, 0], [0.48, 0.02, 1.04], MAT.carpet, 0.005);
  box('porta_malas', [-1.62, 1.05, 0], [0.40, 0.012, 1.24], MAT.carpet, 0.005);
  box('retrovisor_int', [0.26, 1.44, 0], [0.02, 0.06, 0.21], MAT.black, 0.01);
  rod('retrovisor_int', [0.26, 1.465, 0], [0.21, 1.485, 0], 0.006, MAT.black);
}

function buildStructure() {
  const sh = new THREE.Shape([[1.06, 1.0], [1.03, 0.62], [0.96, 0.30], [0.94, 0.30], [1.01, 0.62], [1.04, 1.0]].map(p => new THREE.Vector2(p[0], p[1])));
  const fg = new THREE.ExtrudeGeometry(sh, { depth: 1.34, bevelEnabled: false }); fg.translate(0, 0, -0.67);
  add('corta_fogo', fg, MAT.under);
  box('monobloco', [1.01, 0.935, 0], [0.08, 0.05, 1.30], MAT.under);             // caixa do torpedo, embaixo da grade
  box('monobloco', [-0.07, 0.295, 0], [2.06, 0.012, 1.26], MAT.underDS);           // assoalho da cabine, sobre a bateria
  S.forEach(s => {
    add('monobloco', gCyl(0.088, 0.088, 0.10, 'y', 32), MAT.paint, [XFA + 0.08, 0.86, s * 0.585]);
    box('monobloco', [1.46, 0.38, s * 0.53], [1.02, 0.08, 0.07], MAT.under, 0.01);
    add('monobloco', gCyl(0.075, 0.075, 0.08, 'y', 32), MAT.under, [XRA - 0.10, 0.67, s * 0.59]);
    box('monobloco', [-0.07, 0.24, s * 0.655], [2.10, 0.10, 0.05], MAT.under, 0.01);   // longarinas das soleiras, onde a bateria é presa
    box('travessa_frontal', [2.00, 0.44, s * 0.31], [0.03, 0.30, 0.03], MAT.paint);
  });
  box('travessa_frontal', [2.00, 0.61, 0], [0.04, 0.04, 1.10], MAT.paint, 0.01);
  box('travessa_frontal', [2.00, 0.28, 0], [0.04, 0.04, 0.70], MAT.paint);
  box('viga_dianteira', [2.08, 0.42, 0], [0.05, 0.10, 1.0], MAT.steelDark, 0.01);
  box('viga_traseira', [-1.935, 0.50, 0], [0.05, 0.10, 1.04], MAT.steelDark, 0.01);
  box('fech_capo', [1.97, 0.79, 0], [0.04, 0.04, 0.06], MAT.steelDark, 0.006);
  tube('fech_capo', [[1.96, 0.775, 0.03], [1.90, 0.76, 0.42], [1.40, 0.70, 0.64], [0.95, 0.60, 0.68], [0.66, 0.44, 0.68]], 0.003, MAT.cable);
  box('fech_capo', [0.66, 0.44, 0.675], [0.06, 0.03, 0.02], MAT.black, 0.005);
  {
    const g = new THREE.Group(); reg('capo').group.add(g);
    const m = add('capo', new THREE.CylinderGeometry(0.005, 0.005, 1, 8), MAT.steel, null, null, g);
    ANIM.prop = { mesh: m, A: V(2.0, 0.63, -0.50), Hc: V(1.88, topY(1.88, 0.50) - 0.02, -0.50) };
    setBar(m, ANIM.prop.A, V(2.0, 0.63, -0.10)); m.visible = false;
  }
}

/* ===== Fixadores e encaixes: posições ===== */
function fxPositions() {
  const P = {}, A = (id, p, d, s, mount) => ((P[id] = P[id] || { pts: [], paths: [] }).pts.push([p, d, s, mount]));
  const Bp = (id, pts, r, mount, closed) => ((P[id] = P[id] || { pts: [], paths: [] }).paths.push([pts, r, mount, closed]));
  const up = [0, 1, 0], dn = [0, -1, 0], px = [1, 0, 0], nx = [-1, 0, 0], pz = [0, 0, 1], nz = [0, 0, -1];
  const nrm = (x, s) => surf(x, s).n, neg = v => [-v[0], -v[1], -v[2]];
  /* ---- rodas, trem de força e alta tensão ---- */
  [XFA, XRA].forEach((X, xi) => S.forEach((s, si) => { for (let k = 0; k < 5; k++) { const a = Math.PI / 2 + k * TAU / 5; A('fx_roda', [X + 0.057 * Math.cos(a), WY + 0.057 * Math.sin(a), s * 0.835], [0, 0, s], 0.017, 'w' + (xi * 2 + si)); } }));
  S.forEach((s, si) => A('fx_cubo', [XFA, WY, s * 0.835], [0, 0, s], 0.03, 'w' + si));
  /* bateria de tração: parafusos nas abas laterais (7 por lado) e 2 na frente e 2 atrás */
  S.forEach(s => { for (let k = 0; k < 7; k++) A('fx_bat', [PX0 + 0.08 + k * (PX1 - PX0 - 0.16) / 6, 0.258, s * (PZ + 0.03)], dn, 0.013); });
  [[PX1 - 0.01, 0.35], [PX1 - 0.01, -0.35], [PX0 + 0.01, 0.35], [PX0 + 0.01, -0.35]].forEach(([x, z]) => A('fx_bat', [x, PY0 + 0.004, z], dn, 0.013));
  [0.10, -0.10, 0.30].forEach(z => A('fx_conector_at', [PX1 + 0.05, 0.205, z], px, 0.012));
  [[1.36, 0.745, -0.36], [1.36, 0.745, 0.16], [1.60, 0.745, -0.36], [1.60, 0.745, 0.16]].forEach(p => A('fx_conj', p, up, 0.009));
  [[1.58, 0.555, -0.45], [1.58, 0.555, -0.49], [1.55, 0.535, 0.45], [1.55, 0.535, 0.49], [1.12, 0.29, -0.03]].forEach(p => A('fx_coxins', p, up, 0.013));
  A('fx_redutor', [DX + 0.05, DY - 0.12, 0.02], dn, 0.012); A('fx_redutor', [DX + 0.14, DY + 0.02, 0.06], px, 0.012);
  { const pr = surf(1.77, -sAtY(1.77, 0.83)); for (const [dx, dy] of [[-0.045, 0.04], [0.045, 0.04], [-0.045, -0.05], [0.045, -0.05]]) A('fx_porta_recarga', [pr.p[0] + dx - pr.n[0] * 0.02, pr.p[1] + dy - pr.n[1] * 0.02, pr.p[2] - pr.n[2] * 0.02], neg(pr.n), 0.007); }
  [[1.76, 0.40, 0.25], [1.76, 0.26, 0.25], [1.76, 0.40, 0.36]].forEach(p => A('fx_compressor', p, pz, 0.01));
  [[1.11, 0.535, 0.13], [1.23, 0.535, 0.13], [1.17, 0.535, 0.35]].forEach(p => A('fx_modulo', p, dn, 0.009));
  [[1.0, 0.66, 0.37], [1.0, 0.66, 0.47], [1.0, 0.74, 0.37], [1.0, 0.74, 0.47]].forEach(p => A('fx_ipb', p, nx, 0.009));
  S.forEach((s, si) => {
    const ang = Math.atan2(0.05, -0.10), rp = (r, t, z) => [XFA + Math.cos(ang) * r - Math.sin(ang) * t, WY + Math.sin(ang) * r + Math.cos(ang) * t, s * z];
    const yw = 'y' + si;
    for (const k of [-1, 1]) { A('fx_pinca', rp(0.094, 0.06 * k, 0.664), [0, 0, -s], 0.011, yw); A('fx_pinca', rp(0.112, 0.06 * k, 0.689), [0, 0, -s], 0.012, yw); }
    const angR = Math.atan2(0.06, 0.10), rr = (r, t, z) => [XRA + Math.cos(angR) * r - Math.sin(angR) * t, WY + Math.sin(angR) * r + Math.cos(angR) * t, s * z];
    for (const k of [-1, 1]) { A('fx_pinca_t', rr(0.082, 0.052 * k, 0.672), [0, 0, -s], 0.01); A('fx_pinca_t', rr(0.098, 0.052 * k, 0.694), [0, 0, -s], 0.011); }
    A('fx_epb', [XRA + Math.cos(angR) * 0.115 - 0.045, WY + Math.sin(angR) * 0.115 + 0.02, s * 0.68], nx, 0.008);
    A('fx_sens_roda', [XFA + 0.07, WY + 0.098, s * 0.695], up, 0.007, yw);
    for (let k = 0; k < 3; k++) { const a = k * TAU / 3 + 0.5; A('fx_amort_d', [XFA + 0.08 + 0.05 * Math.cos(a), 0.902, s * 0.585 + 0.05 * Math.sin(a)], up, 0.011); }
    A('fx_amort_d', [XFA + 0.0884, 0.419, s * 0.6943], px, 0.012); A('fx_amort_d', [XFA + 0.09, 0.459, s * 0.6876], px, 0.012);
    A('fx_bandeja', [XFA + 0.18, 0.22, s * 0.395], px, 0.013); A('fx_bandeja', [XFA - 0.19, 0.25, s * 0.425], up, 0.013); A('fx_bandeja', [XFA + 0.05, 0.167, s * 0.68], dn, 0.013);
    for (const x of [1.75, 1.11]) A('fx_subchassi', [x, 0.20, s * 0.44], dn, 0.016);
    for (const dy of [-0.025, 0.025]) A('fx_eixo_t', [-0.91, 0.37 + dy, s * 0.69], [0, 0, s], 0.013);
    A('fx_amort_t', [XRA - 0.11, 0.215, s * 0.625], dn, 0.013); A('fx_amort_t', [XRA - 0.15, 0.66, s * 0.61], up, 0.013); A('fx_amort_t', [XRA - 0.15, 0.66, s * 0.57], up, 0.013);
    A('fx_sens_roda', [XRA - 0.07, WY + 0.098, s * 0.69], up, 0.007);
    for (const x of [0.12, -0.36]) for (const dz of [-0.18, 0.18]) A('fx_bancos', [x, 0.395, s * 0.38 + dz], up, 0.011);
    A('fx_cintos', [-0.18, 1.24, s * 0.75], [0, 0, -s], 0.011); A('fx_cintos', [-0.50, 0.48, s * 0.655], [0, 0, -s], 0.011); A('fx_cintos', [-0.34, 0.42, s * 0.16], up, 0.011);
    A('fx_caixa_dir', [XFA - 0.14, 0.355, s * 0.65], dn, 0.011, yw);
    for (const dx of [-0.03, 0.03]) A('fx_caixa_dir', [1.18 + dx, 0.41, s * 0.15], up, 0.011);
  });
  A('fx_bateria', [1.765, 0.665, 0.40], up, 0.008); A('fx_bateria', [1.765, 0.665, 0.54], up, 0.008); A('fx_bateria', [1.88, 0.50, 0.47], up, 0.01);
  A('fx_volante_dir', [0.385, 1.04, 0.37], [-0.82, 0.57, 0], 0.014, 'sw');
  A('fx_airbag', [0.44, 1.01, 0.30], [-0.82, 0.57, 0], 0.008, 'sw'); A('fx_airbag', [0.44, 1.01, 0.44], [-0.82, 0.57, 0], 0.008, 'sw');
  [[0.76, 0.88, 0.30], [0.76, 0.88, 0.42], [0.62, 0.93, 0.37], [1.005, 0.62, 0.31]].forEach(p => A('fx_coluna', p, up, 0.01));
  [[1.98, 0.56, -0.22], [1.62, 0.61, -0.40], [1.40, 0.33, -0.40], [1.70, 0.30, -0.32], [1.84, 0.30, -0.32], [1.98, 0.32, -0.22], [1.47, 0.56, -0.40]].forEach(p => A('fx_mangueiras', p, up, 0.007));
  A('fx_limpador', [0.89, topY(0.89, 0.50) + 0.014, -0.50], up, 0.009); A('fx_limpador', [0.89, topY(0.89, 0.06) + 0.014, 0.06], up, 0.009);
  A('fx_limpador', onSurf(XG + 0.02, 0, 0.022), nrm(XG + 0.02, 0), 0.009, 'tail');

  /* ---- lataria: parafusos ---- */
  S.forEach(s => {
    [1.10, 1.36, 1.62, 1.86].forEach(x => A('fx_paralama', onSurf(x, s * (sRow(x, J.UE) + 0.006), -0.012), up, 0.008));
    A('fx_paralama', onSurf(2.0, s * (sRow(2.0, J.SB) + sRow(2.0, J.R058)) / 2, -0.014), nrm(2.0, s * 0.4), 0.008);
    A('fx_paralama', onSurf(0.965, s * (sRow(0.965, J.S0) - 0.012), -0.008), nrm(0.965, s * sRow(0.965, J.S0)), 0.008);
    A('fx_paralama', onSurf(0.958, s * sAtY(0.958, 0.90), -0.03), nx, 0.008);
    [0.47, 0.57].forEach(y => A('fx_parachoque', onSurf(AF1 + 0.035, s * sAtY(AF1 + 0.035, y), -0.012), nrm(AF1 + 0.035, s * sAtY(AF1 + 0.035, y)), 0.007));
    [0.42, 0.52].forEach(y => A('fx_parachoque_t', onSurf(AR0 - 0.035, s * sAtY(AR0 - 0.035, y), -0.012), nrm(AR0 - 0.035, s * sAtY(AR0 - 0.035, y)), 0.007));
    A('fx_parachoque', onSurf(2.10, s * (sRow(2.10, J.F0) - 0.26), 0.002), dn, 0.007);
    A('fx_parachoque_t', onSurf(-1.95, s * (sRow(-1.95, J.F0) - 0.30), 0.002), dn, 0.007);
    A('fx_guias_pcd', onSurf(1.95, s * sRow(1.95, J.R058), -0.016), [0, 0, s], 0.02);
    A('fx_guias_pct', onSurf(-1.84, s * sRow(-1.84, J.R0615), -0.016), [0, 0, s], 0.02);
    for (let k = 0; k < 6; k++) { const x = AF0 + 0.06 + k * 0.13; A('fx_forros', onSurf(x, s * (sRow(x, J.S0) - 0.008), -0.006), dn, 0.009); }
    for (const dx of [0.05, 0.08]) A('fx_capo', [HINGE[0] + dx, topY(HINGE[0] + dx, 0.62) - 0.03, s * 0.62], dn, 0.009, 'hood');
    for (const dy of [-0.05, -0.02]) A('fx_capo', [HINGE[0] + 0.012, HINGE[1] + dy, s * 0.627], [0, 0, s], 0.009);
    [[XA, DOORAX[s], 'door'], [XB, RDOORAX[s], 'rdoor']].forEach(([xa, ax, mt]) => {
      [0.56, 0.84].forEach(y => {
        for (const dy of [-0.015, 0.015]) {
          A('fx_dobradicas', [xa + 0.036, y + dy, s * (sideZ(xa + 0.036, y) - 0.028)], [0, 0, s], 0.009);
          A('fx_dobradicas', [xa - 0.018, y + dy, ax[2] + s * 0.003], [0, 0, s], 0.009, mt);
        }
      });
      A('fx_dobradicas', [xa + 0.04, 0.70, s * (sideZ(xa + 0.04, 0.70) - 0.055)], px, 0.009);
    });
    [[XB, 'door'], [XD2, 'rdoor']].forEach(([xe, mt]) => {
      [0.75, 0.78, 0.81].forEach(y => A('fx_fech_portas', [xe + 0.004, y, s * (sideZ(xe + 0.015, y) - 0.03)], nx, 0.007, mt));
      [0.76, 0.80].forEach(y => A('fx_fech_portas', [xe - 0.006, y, s * (sideZ(xe - 0.01, y) - 0.03)], px, 0.008));
    });
    [[0, 0.012], [0.02, -0.01], [-0.02, -0.01]].forEach(([dx, dy]) => { const p = onSurf(0.905 + dx, s * (sRow(0.905, J.SB) - 0.012), -0.025); A('fx_retrovisor', [p[0], p[1] + dy, p[2]], [0, 0, -s], 0.008, 'door'); });
    [0.18, 0.52].forEach(x => A('fx_vidro_porta', [x, 0.68, s * 0.80], [0, 0, s], 0.008, 'door'));
    [-0.72, -0.40].forEach(x => A('fx_vidro_porta_t', [x, 0.68, s * 0.80], [0, 0, s], 0.008, 'rdoor'));
    [[0.02, 0.58], [0.02, 0.90], [0.70, 0.58], [0.70, 0.90]].forEach(([x, y]) => A('fx_maq_vidro', [x, y, s * 0.778], [0, 0, -s], 0.008, 'door'));
    [[-0.80, 0.60], [-0.34, 0.90], [-0.57, 0.70]].forEach(([x, y]) => A('fx_maq_vidro_t', [x, y, s * 0.778], [0, 0, -s], 0.008, 'rdoor'));
    for (let k = 0; k < 4; k++) {
      const x = -0.02 + k * 0.26;
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.SB) + 0.03), -0.074), [0, 0, s], 0.01, 'door');
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.R032) - 0.045), -0.074), [0, 0, s], 0.01, 'door');
    }
    for (let k = 0; k < 3; k++) {
      const x = -0.88 + k * 0.30;
      A('fx_forro_porta_t', onSurf(x, s * (sRow(x, J.SB) + 0.03), -0.074), [0, 0, s], 0.01, 'rdoor');
      A('fx_forro_porta_t', onSurf(x, s * (sRow(x, J.R032) - 0.045), -0.074), [0, 0, s], 0.01, 'rdoor');
    }
    for (const dz of [-0.018, 0.018]) {
      A('fx_tampa', [TAILH[0] + 0.03, TAILH[1] - 0.004, s * 0.47 + dz], dn, 0.009);
      A('fx_tampa', [TAILH[0] - 0.06, topY(TAILH[0] - 0.06, 0.47) - 0.024, s * 0.47 + dz], dn, 0.009, 'tail');
    }
    A('fx_amort_tampa', [STRUT[s].B.x, STRUT[s].B.y, STRUT[s].B.z], [0, 0, s], 0.009);
    A('fx_amort_tampa', [STRUT[s].Gc.x, STRUT[s].Gc.y, STRUT[s].Gc.z], [0, 0, s], 0.009, 'tail');
    [[1.90, 0.004], [2.03, 0.004]].forEach(([x, d]) => A('fx_farol', onSurf(x, s * (sRow(x, J.UE) + d), -0.02), up, 0.008));
    A('fx_farol', onSurf(2.02, s * (fLb(2.02) - 0.006), -0.02), dn, 0.008);
    [0.97, 1.01, 1.05].forEach(y => { const x = -1.85, sv = s * sAtY(x, y); A('fx_lanterna', onSurf(x, sv, -0.03), neg(nrm(x, sv)), 0.007); });
    A('fx_travessa', [2.00, 0.638, s * 0.42], up, 0.011); A('fx_travessa', [2.00, 0.638, s * 0.50], up, 0.011);
    A('fx_viga', [2.108, 0.39, s * 0.46], px, 0.012); A('fx_viga', [2.108, 0.45, s * 0.46], px, 0.012);
    A('fx_viga_t', [-1.963, 0.47, s * 0.46], nx, 0.012); A('fx_viga_t', [-1.963, 0.53, s * 0.46], nx, 0.012);
  });
  [-0.34, -0.12, 0.12, 0.34].forEach(sv => A('fx_parachoque', onSurf(1.99, sv, -0.014), up, 0.007));
  A('fx_parachoque', onSurf(2.10, sRow(2.10, J.F0), 0.002), dn, 0.007);
  [-0.40, -0.14, 0.14, 0.40].forEach(sv => A('fx_parachoque_t', onSurf(-1.96, sv, -0.01), [-0.3, 1, 0], 0.007));
  A('fx_fech_capo', [1.97, 0.812, 0.02], up, 0.01); A('fx_fech_capo', [1.97, 0.812, -0.02], up, 0.01);
  for (const dz of [-0.025, 0.025]) { A('fx_fech_tampa', [XL + 0.035, 0.825, dz], dn, 0.008, 'tail'); A('fx_fech_tampa', [XL + 0.012, 0.722, dz * 1.4], up, 0.008); }
  [-0.56, -0.34, -0.12, 0.12, 0.34, 0.56].forEach(sv => A('fx_grade_torpedo', onSurf(XC - 0.03, sv, 0.001), up, 0.009));

  /* ---- lataria: pontos de solda ---- */
  const W = (id, x, s, off) => A(id, onSurf(x, s, off == null ? 0.001 : off), nrm(x, s), 0.011);
  const along = (x0, x1, step, f) => { const n = Math.max(1, Math.round(Math.abs(x1 - x0) / step)); for (let k = 0; k <= n; k++) f(x0 + (x1 - x0) * k / n); };
  const across = (x, S0, step, f) => { const n = Math.max(1, Math.round(2 * S0 / step)); for (let k = 0; k <= n; k++) f(-S0 + 2 * S0 * k / n); };
  S.forEach(s => {
    along(XT + 0.02, XWT - 0.02, 0.045, x => W('fx_solda_teto', x, s * (sRow(x, J.UE) - 0.012)));
    along(XD2 - 0.012, AR1 + 0.005, 0.02, x => W('fx_solda_laterais', x, s * (sRow(x, J.S0) - 0.01)));
    along(AR0 + 0.03, AR1 - 0.03, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.S0) - 0.012)));
    along(XLS + 0.02, AR0 - 0.02, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.R0615) - 0.012)));
    along(XLS + 0.02, XQS - 0.01, 0.04, x => W('fx_solda_laterais', x, s * (sRow(x, J.UE) - 0.008)));
    { const x = XD2 - 0.012, a = sRow(x, J.UE) + 0.01, b = sRow(x, J.R032); for (let k = 0; k <= 10; k++) W('fx_solda_laterais', x, s * (a + (b - a) * k / 10)); }
    along(XD2 + 0.03, XA - 0.03, 0.05, x => { W('fx_solda_soleiras', x, s * (sRow(x, J.R032) + 0.012)); W('fx_solda_soleiras', x, s * (sRow(x, J.S0) + 0.02)); });
    along(XWT + 0.02, XA - 0.04, 0.045, x => W('fx_solda_colunas', x, s * (sRow(x, J.UE) - 0.012)));
    for (let k = 0; k <= 8; k++) { const y = 0.43 + k * 0.03; A('fx_solda_painel_tras', [-1.907, y, s * 0.58], nx, 0.011); }
  });
  across(XWT - 0.012, sRow(XWT, J.T1) - 0.03, 0.07, sv => W('fx_solda_teto', XWT - 0.012, sv));
  across(XT + 0.014, sRow(XT, J.UE) - 0.03, 0.07, sv => W('fx_solda_teto', XT + 0.014, sv));
  across(XWB + 0.006, sRow(XWB, J.T1) - 0.02, 0.07, sv => W('fx_solda_colunas', XWB + 0.006, sv));
  for (let k = 0; k <= 18; k++) A('fx_solda_painel_tras', [-1.907, 0.69, -0.54 + k * 0.06], nx, 0.011);

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
    const Q = [], lo = x => qBot(x) - 0.012, hi = x => Math.min(qTop(x) + 0.012, lo(x)), a = XQW + 0.03, b = XQ2 - 0.012;
    edgePath(a, b, x => s * lo(x), 14).forEach(p => Q.push(p));
    for (let k = 1; k < 8; k++) { const t = k / 8; Q.push([b, s * (lo(b) + (hi(b) - lo(b)) * t)]); }
    edgePath(b, a, x => s * hi(x), 14).forEach(p => Q.push(p));
    for (let k = 1; k < 8; k++) { const t = k / 8; Q.push([a, s * (hi(a) + (lo(a) - hi(a)) * t)]); }
    Bp('fx_cola_laterais', toPts(Q, -0.008), 0.0045, null, true);
  });
  return P;
}

return {
  build() {
    buildBody(); buildEDrive(); buildHV(); buildThermal(); buildLowVoltage();
    buildWheels(); buildSuspensionBrakes(); buildSteering(); buildInterior(); buildStructure();
  },
  fxPositions
};
};
