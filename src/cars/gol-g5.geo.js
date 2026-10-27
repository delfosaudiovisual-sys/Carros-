/* ===== VW Gol G5 1.6 Power 2010/2011: geometria 3D =====
   Coordenadas do carro: x para a frente, y para cima, z para a esquerda (lado do motorista). Medidas em metros.
   Hatch 3,899 × 1,656 × 1,464 m, entre-eixos 2,465 m, pneus 195/55 R15. Motor EA111 transversal: correia dentada à direita (−z),
   câmbio à esquerda (+z), escape virado para a frente (radiador) e admissão para o corta-fogo. */
(window.CAR_GEO = window.CAR_GEO || {})['gol-g5'] = function (K) {
const { THREE, V, TAU, UPY, S, MAT, std, phy, reg, tag, place, add, kit, pivotOf, box, cyl, tube, route, rod, sph, spring, ribbon, beltPath, plateFromHull,
  gBox, gCyl, gLathe, gTorus, gTube, curveOf, setBar, mono, makeBody, art, ANIM, WHEELS, ROUTES, lerp3 } = K;
const WB = 2.465, XFA = WB / 2, XRA = -WB / 2;     // eixos dianteiro e traseiro (x)
const TRK = 0.705, WR = 0.298, WY = 0.292;         // bitola/2, raio do pneu 195/55 R15, altura do centro da roda
MAT.chromeTrim = std({ color: 0xd9dde0, roughness: 0.12, metalness: 1 });
MAT.acPipe = std({ color: 0xa9adb2, roughness: 0.3, metalness: 0.85 });
MAT.psFluid = phy({ color: 0xc8b98a, roughness: 0.35, transparent: true, opacity: 0.85 });
MAT.covers = std({ color: 0x2b2e32, roughness: 0.55, metalness: 0.3 });
MAT.alloyWheel = std({ color: 0xc3c8cd, roughness: 0.26, metalness: 0.88 });

/* ---------- carroceria: hatch de 4 portas, coluna traseira larga sem vidro e tampa traseira quase de pé ---------- */
const BK = {
  zMax: mono([[-1.90, .50], [-1.895, .60], [-1.885, .67], [-1.865, .73], [-1.83, .775], [-1.78, .80], [-1.68, .818], [-1.5, .826], [-1.23, .828], [0, .828], [1.3, .826], [1.5, .817], [1.68, .795], [1.80, .762], [1.88, .72], [1.93, .67], [1.96, .62], [1.98, .57], [1.992, .52], [1.998, .48], [2.0, .45]]),
  yFloor: mono([[-1.90, .35], [-1.87, .30], [-1.76, .27], [-1.55, .24], [-1.15, .20], [0, .18], [0.85, .185], [1.4, .195], [1.72, .21], [1.90, .24], [1.96, .26], [2.0, .30]]),
  yFC: mono([[-1.90, .35], [-1.80, .36], [-1.58, .36], [-1.38, .33], [-1.05, .32], [-0.86, .29], [-0.42, .29], [-0.30, .235], [0.66, .235], [0.88, .215], [1.4, .195], [1.72, .21], [1.90, .24], [1.96, .26], [2.0, .30]]),
  yBelt: mono([[-1.90, .58], [-1.885, .61], [-1.87, .635], [-1.855, .70], [-1.835, .78], [-1.81, .85], [-1.785, .91], [-1.76, .955], [-1.70, .99], [-1.62, 1.005], [-1.45, 1.015], [-1.2, 1.015], [-0.9, 1.005], [-0.4, .99], [0, .98], [0.45, .955], [0.80, .915], [1.0, .89], [1.35, .84], [1.6, .80], [1.78, .76], [1.84, .74], [1.87, .725], [1.90, .70], [1.93, .662], [1.955, .628], [1.975, .607], [1.99, .595], [2.0, .585]]),
  yEdge: mono([[-1.90, .60], [-1.885, .63], [-1.87, .655], [-1.855, .735], [-1.835, .82], [-1.81, .895], [-1.785, .945], [-1.76, .985], [-1.72, 1.055], [-1.66, 1.16], [-1.60, 1.245], [-1.53, 1.33], [-1.49, 1.37], [-1.47, 1.385], [-1.35, 1.405], [-1.0, 1.418], [-0.5, 1.422], [-0.1, 1.42], [0.10, 1.395], [0.30, 1.285], [0.55, 1.11], [0.80, .95], [0.92, .93], [1.1, .915], [1.4, .87], [1.65, .815], [1.80, .78], [1.84, .768], [1.87, .75], [1.90, .72], [1.93, .677], [1.955, .64], [1.975, .617], [1.99, .604], [2.0, .595]]),
  yTop: mono([[-1.90, .605], [-1.885, .635], [-1.87, .66], [-1.855, .745], [-1.835, .835], [-1.81, .91], [-1.785, .96], [-1.76, 1.0], [-1.72, 1.075], [-1.66, 1.185], [-1.60, 1.27], [-1.53, 1.355], [-1.49, 1.40], [-1.47, 1.415], [-1.35, 1.44], [-1.0, 1.458], [-0.5, 1.464], [-0.1, 1.462], [0.10, 1.43], [0.30, 1.315], [0.55, 1.135], [0.80, .975], [0.92, .955], [1.1, .94], [1.4, .895], [1.65, .835], [1.80, .795], [1.84, .783], [1.87, .765], [1.90, .735], [1.93, .69], [1.955, .65], [1.975, .625], [1.99, .61], [2.0, .60]]),
  zEdge: mono([[-1.90, .44], [-1.885, .55], [-1.865, .63], [-1.84, .675], [-1.80, .695], [-1.65, .68], [-1.30, .655], [-1.0, .645], [-0.1, .645], [0.10, .65], [0.35, .70], [0.80, .75], [1.05, .745], [1.4, .725], [1.65, .685], [1.82, .625], [1.90, .575], [1.95, .52], [1.98, .475], [2.0, .43]])
};
const ROWS = [0.26, 0.32, 0.40, 0.48, 0.57, 0.615, 0.69, 0.77, 0.85, 0.91];
const UPF = [0.35, 0.7, 1.0];
const TOPU = [0.975, 0.9, 0.72, 0.48, 0.24, 0];
/* divisões (x) */
const XH = 1.86, XC = 0.92, XA = 0.82, XWB = 0.80, XDF = 0.73, XWT = 0.10, XB = -0.19, XBP = -0.14, XD2 = -0.85, XRG = -0.79, XDV = -0.60,
  XT = -1.47, XT2 = -1.49, XG = -1.76, XLF = -1.745, XL = -1.87, XHL = 1.75, XN = 1.965;
const B = makeBody({ XF: 2.0, XR: -1.90, RA: 0.37, ZN: 0.54, XFA, XRA, WY, BK, ROWS, UPF, TOPU, bulge: [0.035, 0.018],
  cuts: [XH, XC, XA, XWB, XDF, XWT, XB, XBP, XD2, XRG, XDV, XT, XT2, XG, XLF, XL, XHL, XN, XDV - 0.012, XDV + 0.012, -0.03, 0.10, -0.70, -0.57, 0.775, 0.95, 1.90, 1.93, 1.95, 1.98,
    -1.895, -1.885, -1.865, -1.857, -1.85, -1.84, -1.831, -1.828, -1.826, -1.822, -1.815, -1.80, -1.79, -1.78, -1.77, -1.75, -1.72, -1.68, -1.64, -1.60, -1.56, -1.52, -1.50] });
const { XF, XR, AF0, AF1, AR0, AR1, J, surf, sRow, onSurf, sAtY, sideZ, topY, rowFn, cst, RS, RF, panel, glass, loop, edgePath, capGeo, capPt, capPatch, flushPanels } = B;
/* as lanternas ocupam os cantos (de tCut até a lateral, dobrando até XLS); a parte de baixo da tampa fica entre elas */
const XLS = -1.80;
const tCut = x => { const t = Math.min(1, Math.max(0, (x - (-1.80)) / (XG - (-1.80)))); return sRow(x, J.T3) + (sRow(x, J.UE) - 0.01 - sRow(x, J.T3)) * Math.pow(t, 2.5); };
const lOut = x => { const t = Math.min(1, Math.max(0, (x - XL) / (XLS - XL))); return sRow(x, J.R0615) + (sRow(x, J.UE) - sRow(x, J.R0615)) * Math.pow(t, 2); };

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
    setBar(st.body, st.B, st.B.clone().addScaledVector(d, Math.min(0.22, L * 0.6)));
    setBar(st.pin, G, G.clone().addScaledVector(d, -(L - 0.16)));
  });
}

function buildBody() {
  HINGE = [XC + 0.012, topY(XC, 0.52) - 0.03, 0];
  TAILH = [XT + 0.004, topY(XT, 0.43) - 0.012, 0];
  hoodPivot = hingePivot('capo', HINGE);
  tailPivot = hingePivot('tampa_tras', TAILH);
  S.forEach(s => {
    DOORAX[s] = [XA + 0.016, 0.69, s * (sideZ(XA + 0.016, 0.69) - 0.03)]; doorPivot[s] = hingePivot('portas', DOORAX[s], s);
    RDOORAX[s] = [XB - 0.014, 0.69, s * (sideZ(XB - 0.014, 0.69) - 0.03)]; rdoorPivot[s] = hingePivot('portas_tras', RDOORAX[s], s);
  });
  art('hood', { pivot: hoodPivot, axis: 'z', max: 1.0, onUpdate: updateProp });
  S.forEach(s => { art('door', { side: s, pivot: doorPivot[s], axis: 'y', max: s * 1.1 }); art('rdoor', { side: s, pivot: rdoorPivot[s], axis: 'y', max: s * 1.05 }); });
  art('tail', { pivot: tailPivot, axis: 'z', max: -1.15, onUpdate: updateStruts });
  const r = j => rowFn(j), UEp = rowFn(J.UE, 0.016), SH = { shadow: true };

  /* frente: capô, grade do torpedo, para-lamas, para-choque, faróis altos e grade estreita */
  panel('capo', [RF(XC, XH, r(J.UE), 'LRB')], MAT.paint, { shadow: true, parent: hoodPivot });
  panel('capo', [RF(XC + 0.03, XH - 0.03, rowFn(J.UE, -0.03))], MAT.underDS, { off: -0.016, parent: hoodPivot, fl: 0, res: 0.05 });
  panel('grade_torpedo', [RF(XA, XC, r(J.UE), 'LRB')], MAT.plastic);
  const slots = []; for (let k = 0; k < 7; k++) slots.push(RS(0.85, 0.895, cst(0.035 + k * 0.08), cst(0.08 + k * 0.08)));
  panel('grade_torpedo', slots, MAT.grille, { off: 0.0015, fl: 0 });
  /* faróis largos: canto de dentro junto da grade, contornam o canto e afinam para trás pelo para-lama até XLT */
  const XLT = 1.66, sUE = x => sRow(x, J.UE);
  const Lb = x => { const t = Math.min(1, Math.max(0, (x - XLT) / (1.90 - XLT))); return sUE(x) + (sRow(x, J.R058) - sUE(x)) * (1 - Math.pow(1 - t, 1.8)); };
  panel('paralamas', [
    RS(XA, AF1, r(J.R058), r(J.S0), 'LRB'), RS(XA, AF1, r(J.SB), r(J.R058), 'L'), RS(AF1, XLT, r(J.SB), r(J.R058), 'B'),
    RS(XLT, 1.90, Lb, r(J.R058), 'TB'), RS(XA, XLT, r(J.UE), r(J.SB), 'LT')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('para_choque_d', [RS(AF1, XN, r(J.R058), r(J.F0), 'LT'), RS(XN, XF, r(J.R058), r(J.F0)), RS(XN, XF, r(J.SB), r(J.R058), 'L'), RF(XN, XF, r(J.SB), 'L')], MAT.paint, SH);
  add('para_choque_d', capGeo(true, J.F0, J.T6), MAT.paint).castShadow = true;
  add('para_choque_d', capGeo(true, J.F0, J.R026, 0.62, 0.002), MAT.trim);
  /* faróis grandes de máscara escura: sobem do canto da grade e correm para trás pelo para-lama */
  const HT = rowFn(J.T4, 0.012), HL = [RS(XLT, XH, r(J.UE), Lb), RS(XH, XN, HT, Lb)], ins = (f, d) => x => f(x) + d;
  panel('farois', HL, MAT.black, { fl: 0 });
  panel('farois', [RS(XLT + 0.03, XH, rowFn(J.UE, 0.006), ins(Lb, -0.006)), RS(XH + 0.006, XN - 0.006, rowFn(J.T4, 0.02), ins(Lb, -0.006))], MAT.lampHousing, { off: 0.003, fl: 0 });
  panel('farois', [RS(1.76, 1.90, x => Lb(x) - 0.028, ins(Lb, -0.008))], MAT.lensAmber, { off: 0.006, fl: 0 });
  panel('farois', HL, MAT.lensClear, { off: 0.01, fl: 0.007, flMat: MAT.trim });
  S.forEach(s => [[1.915, (sRow(1.915, J.T4) + sRow(1.915, J.UE)) / 2 + 0.01, 0.046], [1.93, sRow(1.93, J.T4) + 0.065, 0.03], [1.895, (sRow(1.895, J.SB) + sRow(1.895, J.R058)) / 2, 0.036]].forEach(([x, sv, rr]) => {
    const q = surf(x, s * sv), c = [q.p[0] + q.n[0] * 0.002, q.p[1] + q.n[1] * 0.002, q.p[2] + q.n[2] * 0.002];
    const d = add('farois', new THREE.SphereGeometry(rr, 24, 10, 0, TAU, 0, Math.PI / 2), MAT.reflector, c);
    d.quaternion.setFromUnitVectors(V(0, -1, 0), V(q.n[0], q.n[1], q.n[2])); d.scale.set(1, 0.4, 1);
    const bz = add('farois', gTorus(rr * 1.03, 0.0022, 'y', 6, 32), MAT.chromeTrim, c); bz.quaternion.copy(d.quaternion);   // aro cromado do refletor
    sph('farois', [c[0] + q.n[0] * 0.003, c[1] + q.n[1] * 0.003, c[2] + q.n[2] * 0.003], rr * 0.26, MAT.bulb);
  }));
  /* grade estreita entre os faróis: friso horizontal e um emblema redondo genérico */
  panel('grade', [RF(XH, XN, HT)], MAT.black, { off: -0.003, fl: 0.005 });
  [1.888, 1.912, 1.936].forEach(x => panel('grade', [RF(x, x + 0.009, rowFn(J.T4, -0.006))], MAT.plastic, { off: 0.0, fl: 0.004, flMat: MAT.plastic }));
  panel('grade', [RF(XH + 0.004, XH + 0.012, rowFn(J.T4, -0.004))], MAT.chromeTrim, { off: 0.004, fl: 0.004, flMat: MAT.chromeTrim });
  {
    const q = surf(1.915, 0), n = V(q.n[0], q.n[1], q.n[2]), c = [q.p[0] + q.n[0] * 0.012, q.p[1] + q.n[1] * 0.012, 0];
    const e = add('grade', gCyl(0.03, 0.03, 0.008, 'y', 32), MAT.chrome, c); e.quaternion.setFromUnitVectors(V(0, 1, 0), n);
    const t = add('grade', gTorus(0.03, 0.004, 'z', 6, 36), MAT.chromeTrim, c); t.quaternion.setFromUnitVectors(V(0, 0, 1), n);
  }
  /* para-choque: a placa no meio e a grade grande de baixo */
  /* grade grande de baixo em trapézio (mais larga embaixo), moldura preta, placa por cima */
  const trap = (wT, wB, y0, y1) => [z => y0, z => { const a = Math.abs(z); return a <= wT ? y1 : y1 - (y1 - y0) * (a - wT) / (wB - wT); }];
  const TO = trap(0.40, 0.54, 0.305, 0.475), TI = trap(0.385, 0.515, 0.318, 0.462);
  add('para_choque_d', capPatch(true, -0.54, 0.54, TO[0], TO[1], 0.0015, 54, 6), MAT.black);
  add('grade_inf', capPatch(true, -0.515, 0.515, TI[0], TI[1], 0.003, 54, 6), MAT.grille);
  { const p = capPt(true, 0, 0.43, 0.009); box('para_choque_d', p, [0.008, 0.13, 0.40], MAT.plate, 0.01); }

  /* portas dianteiras: forro externo, moldura do vidro, painel interno, vidro, forro de dentro */
  panel('portas', [RS(XB, XA, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: dp, fl: 0.045 });
  panel('portas', [RS(XB, XA, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: dp, fl: 0.035 });
  panel('portas', [RS(XDF, XA, UEp, r(J.SB), 'Rl'), RS(XB, XBP, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: dp, fl: 0.035 });
  panel('portas', [RS(XB + 0.012, XA - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: dp, fl: 0, res: 0.05 });
  panel('portas', [RS(XB + 0.01, XA - 0.01, rowFn(J.R048, -0.018), rowFn(J.R048, 0.018))], MAT.trim, { off: 0.004, fl: 0.004, flMat: MAT.trim, parent: dp });   // friso lateral
  glass('vidros_portas', RS(XBP, XDF, UEp, r(J.SB)), dp);
  panel('forros_portas', [RS(XB + 0.02, XA - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: dp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XBP, XDF, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: dp });
  panel('fech_portas', [RS(-0.03, 0.10, rowFn(J.R084, -0.022), rowFn(J.R084, 0.022))], MAT.trim, { off: 0.003, fl: 0.003, flMat: MAT.trim, parent: dp });
  S.forEach(s => loop('fech_portas', edgePath(-0.015, 0.085, x => s * sRow(x, J.R084), 10), 0.0075, MAT.trim, 0.011, dp(s)));   // maçaneta de puxar
  /* portas traseiras: vidro móvel e o pedaço fixo atrás da divisória */
  panel('portas_tras', [RS(XD2, XB, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: rdp, fl: 0.045 });
  panel('portas_tras', [RS(XD2, XB, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XB - 0.05, XB, UEp, r(J.SB), 'Rl'), RS(XD2, XRG, UEp, r(J.SB), 'Lr'), RS(XDV - 0.012, XDV + 0.012, UEp, r(J.SB))], MAT.trim, { parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XD2 + 0.012, XB - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: rdp, fl: 0, res: 0.05 });
  panel('portas_tras', [RS(XD2 + 0.01, XB - 0.01, rowFn(J.R048, -0.018), rowFn(J.R048, 0.018))], MAT.trim, { off: 0.004, fl: 0.004, flMat: MAT.trim, parent: rdp });
  glass('vidros_portas_tras', RS(XDV + 0.012, XB - 0.05, UEp, r(J.SB)), rdp);
  glass('vidros_portas_tras', RS(XRG, XDV - 0.012, UEp, r(J.SB)), rdp, 0.016);
  panel('forros_portas_tras', [RS(XD2 + 0.02, XB - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: rdp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XRG, XB - 0.05, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: rdp });
  panel('fech_portas', [RS(-0.70, -0.57, rowFn(J.R084, -0.022), rowFn(J.R084, 0.022))], MAT.trim, { off: 0.003, fl: 0.003, flMat: MAT.trim, parent: rdp });
  S.forEach(s => loop('fech_portas', edgePath(-0.685, -0.585, x => s * sRow(x, J.R084), 10), 0.0075, MAT.trim, 0.011, rdp(s)));

  /* laterais com a coluna traseira larga, soleiras, teto, colunas e para-brisa (soldados ou colados) */
  panel('soleiras', [RS(XD2, XA, r(J.R032), r(J.S0), 'TR')], MAT.paint, { shadow: true, fl: 0.045 });
  panel('laterais', [
    RS(AR1, XD2, r(J.SB), r(J.S0), 'R'),
    RS(AR0, AR1, r(J.R0615), r(J.S0), 'LB'), RS(AR0, AR1, r(J.SB), r(J.R0615)),
    RS(XLS, AR0, r(J.SB), r(J.R0615), 'LB'), RS(XL, XLS, lOut, r(J.R0615), 'LTB'),
    RS(XLS, XT, r(J.UE), r(J.SB), 'LT'), RS(XT, XD2, r(J.UE), r(J.SB), 'R')], MAT.paint, { shadow: true, fl: 0.04 });
  panel('teto', [RF(XT, XD2, r(J.UE), 'L'), RF(XD2, XWT, r(J.UE), 'Br')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('colunas', [RS(XWT, XA, r(J.T1), r(J.UE), 'BRt'), RF(XWB, XA, r(J.T1), 'Rl')], MAT.paint, { shadow: true, fl: 0.035 });
  glass('para_brisa', RF(XWT, XWB, r(J.T1)));

  /* traseira: tampa com vidro, aerofólio com a luz de freio e a placa; para-choque, painel traseiro e lanternas nos cantos */
  panel('tampa_tras', [RF(XL, XG, tCut, 'LBr'), RS(XG, XT2, r(J.T2), r(J.UE), 'Bt'), RF(XT2, XT, r(J.UE), 'RBl')], MAT.paint, { shadow: true, parent: tailPivot, fl: 0.03 });
  panel('tampa_tras', [RF(XL + 0.02, XG - 0.01, x => tCut(x) - 0.03)], MAT.underDS, { off: -0.03, parent: tailPivot, fl: 0, res: 0.05 });
  glass('vidro_tras', RF(XG, XT2, r(J.T2)), tailPivot);
  box('tampa_tras', [XT - 0.03, topY(XT - 0.03, 0) + 0.008, 0], [0.075, 0.014, 0.95], MAT.paint, 0.006, [0, 0, -0.16], tailPivot);
  panel('tampa_tras', [RF(-1.857, -1.831, cst(0.2))], MAT.plate, { off: 0.006, fl: 0.005, flMat: MAT.plate, parent: tailPivot });
  panel('tampa_tras', [RF(-1.826, -1.82, cst(0.30))], MAT.chromeTrim, { off: 0.005, fl: 0.003, flMat: MAT.chromeTrim, parent: tailPivot });
  S.forEach(s => { const q = onSurf(-1.829, s * 0.11, 0.008); box('luz_placa', q, [0.014, 0.012, 0.045], MAT.bulb, 0.004, null, tailPivot); });
  box('luz_freio', [XT - 0.055, topY(XT - 0.055, 0) + 0.004, 0], [0.022, 0.016, 0.26], MAT.lensRed, 0.006, [0, 0, -0.35], tailPivot);
  panel('para_choque_t', [RS(XR, XL, r(J.R0615), r(J.F0)), RS(XL, AR0, r(J.R0615), r(J.F0), 'TR'), RF(XR, XL, r(J.R0615), 'R')], MAT.paint, SH);
  add('para_choque_t', capGeo(false, J.F0, J.T6), MAT.paint).castShadow = true;
  add('para_choque_t', capGeo(false, J.F0, J.R032, 0.62, 0.003), MAT.trim);
  box('painel_tras', [-1.85, 0.49, 0], [0.012, 0.26, 1.06], MAT.underDS);
  box('painel_tras', [-1.848, 0.626, 0], [0.04, 0.006, 1.06], MAT.underDS);
  const hY = y => x => sAtY(x, y);
  const LT = [RS(XL, XLS, tCut, lOut), RS(XLS, XG, tCut, r(J.UE))];   // vermelho com faixas âmbar (pisca) e branca (ré)
  panel('lanternas', LT, MAT.lampHousing, { off: 0.003, fl: 0 });
  panel('lanternas', LT, MAT.lensRed, { off: 0.009, fl: 0.007, flMat: MAT.trim });
  panel('lanternas', [RS(-1.802, -1.781, x => tCut(x) + 0.012, x => Math.min(sRow(x, J.UE) + 0.03, lOut(x)) - 0.008)], MAT.lensAmber, { off: 0.0115, fl: 0 });
  panel('lanternas', [RS(-1.838, -1.817, x => tCut(x) + 0.012, x => Math.min(sRow(x, J.UE) + 0.03, lOut(x)) - 0.008)], MAT.lensWhite, { off: 0.0115, fl: 0 });
  S.forEach(s => sph('lanternas', onSurf(-1.80, s * (tCut(-1.80) + sRow(-1.80, J.UE)) / 2, -0.004), 0.02, MAT.bulb));

  /* assoalho e caixas de roda */
  panel('monobloco', [RS(AR0, 0.90, r(J.F2), r(J.F0)), RS(AR1, AF0, r(J.S0), r(J.F2))], MAT.underDS, { fl: 0, res: 0.06 });
  panel('caixas_roda', [RS(AF0, AF1, r(J.S0), r(J.F2)), RS(AR0, AR1, r(J.S0), r(J.F2))], MAT.liner, { fl: 0, res: 0.04 });

  /* borrachas de vedação: portas, tampa, capô e para-brisa */
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
    const q = surf(0.96, s * sAtY(0.96, 0.71));
    sph('piscas_lat', [q.p[0], q.p[1], q.p[2]], 0.026, MAT.lensAmber, null, [1, 0.45, 0.25]);
    const b = onSurf(0.775, s * (sRow(0.775, J.SB) - 0.012), 0);
    box('retrovisores', [b[0], b[1] + 0.014, b[2] + s * 0.022], [0.08, 0.05, 0.045], MAT.trim, 0.012, null, dp(s));
    box('retrovisores', [b[0] - 0.032, b[1] + 0.034, b[2] + s * 0.095], [0.09, 0.095, 0.15], MAT.paint, 0.035, null, dp(s));
    box('retrovisores', [b[0] - 0.079, b[1] + 0.034, b[2] + s * 0.097], [0.004, 0.075, 0.125], MAT.chrome, 0.002, null, dp(s));
    /* dobradiças e limitadores: portas dianteiras e traseiras */
    [[DOORAX[s], dp(s), XA], [RDOORAX[s], rdp(s), XB]].forEach(([ax, par, xa]) => {
      [0.52, 0.79].forEach(y => {
        box('dobradicas', [xa + 0.034, y, s * (sideZ(xa + 0.034, y) - 0.044)], [0.04, 0.055, 0.03], MAT.steelDark, 0.004);
        box('dobradicas', [xa - 0.016, y, ax[2] - s * 0.004], [0.045, 0.05, 0.012], MAT.steelDark, 0.003, null, par);
        cyl('dobradicas', [ax[0], y, ax[2]], 0.007, 0.07, 'y', MAT.steel);
      });
      rod('dobradicas', [xa + 0.038, 0.655, s * (sideZ(xa + 0.038, 0.655) - 0.07)], [xa - 0.04, 0.655, s * (sideZ(xa - 0.04, 0.655) - 0.055)], 0.007, MAT.steelDark, par);
    });
    /* fechaduras, batentes e varetas */
    [[XB, dp(s), 0.04], [XD2, rdp(s), -0.64]].forEach(([xe, par, xh]) => {
      const zl = s * (sideZ(xe + 0.015, 0.74) - 0.03);
      box('fech_portas', [xe + 0.016, 0.74, zl], [0.022, 0.075, 0.04], MAT.steelDark, 0.004, null, par);
      rod('fech_portas', [xh, 0.85, s * (sideZ(xh, 0.85) - 0.02)], [xe + 0.02, 0.75, zl], 0.003, MAT.steel, par);
      add('fech_portas', gTorus(0.012, 0.003, 'x', 6, 16), MAT.steel, [xe - 0.012, 0.74, s * (sideZ(xe - 0.01, 0.74) - 0.03)]);
    });
    /* máquinas de vidro e alto-falantes (dentro das portas) */
    rod('maq_vidro', [-0.02, 0.52, s * 0.75], [0.62, 0.86, s * 0.75], 0.008, MAT.steelDark, dp(s));
    rod('maq_vidro', [-0.02, 0.86, s * 0.745], [0.62, 0.52, s * 0.745], 0.008, MAT.steelDark, dp(s));
    cyl('maq_vidro', [0.30, 0.69, s * 0.755], 0.04, 0.04, 'z', MAT.black, null, dp(s));
    rod('maq_vidro_tras', [-0.70, 0.54, s * 0.75], [-0.30, 0.86, s * 0.75], 0.008, MAT.steelDark, rdp(s));
    cyl('maq_vidro_tras', [-0.50, 0.70, s * 0.755], 0.034, 0.04, 'z', MAT.black, null, rdp(s));
    cyl('alto_falantes', [0.64, 0.42, s * 0.745], 0.07, 0.03, 'z', MAT.black, null, dp(s));
    cyl('alto_falantes', [-0.42, 0.44, s * 0.745], 0.06, 0.03, 'z', MAT.black, null, rdp(s));
    /* dobradiças do capô */
    const zc = s * 0.56;
    box('dobr_capo', [HINGE[0] + 0.012, HINGE[1] - 0.035, zc], [0.06, 0.055, 0.012], MAT.steelDark, 0.004);
    cyl('dobr_capo', [HINGE[0], HINGE[1], zc], 0.007, 0.03, 'z', MAT.steel);
    rod('dobr_capo', [HINGE[0], HINGE[1], zc], [HINGE[0] + 0.09, topY(HINGE[0] + 0.09, 0.56) - 0.014, zc], 0.008, MAT.steelDark, hoodPivot);
    /* dobradiças da tampa traseira, no fim do teto */
    const zt = s * 0.43;
    box('dobr_tampa', [TAILH[0] + 0.03, TAILH[1] + 0.004, zt], [0.05, 0.012, 0.04], MAT.steelDark, 0.003);
    cyl('dobr_tampa', [TAILH[0], TAILH[1], zt], 0.007, 0.05, 'z', MAT.steel);
    rod('dobr_tampa', [TAILH[0], TAILH[1], zt], [TAILH[0] - 0.07, topY(TAILH[0] - 0.07, 0.43) - 0.014, zt], 0.008, MAT.steelDark, tailPivot);
    /* amortecedores a gás da tampa (reposicionados quando a tampa abre) */
    const g = new THREE.Group(); reg('amort_tampa').group.add(g);
    const body = add('amort_tampa', new THREE.CylinderGeometry(0.011, 0.011, 1, 12), MAT.black, null, null, g);
    const pin = add('amort_tampa', new THREE.CylinderGeometry(0.0055, 0.0055, 1, 10), MAT.chrome, null, null, g);
    STRUT[s] = { B: V(-1.53, 1.29, s * 0.60), Gc: V(-1.715, 0.99, s * 0.615) };
    ANIM.struts.push({ body, pin, B: STRUT[s].B, Gc: STRUT[s].Gc });
  });
  /* fechaduras da tampa e do capô (lingueta) e portinhola do combustível */
  box('fech_tampa', [XL + 0.03, 0.70, 0], [0.03, 0.04, 0.07], MAT.steelDark, 0.004, null, tailPivot);
  add('fech_tampa', gTorus(0.013, 0.003, 'x', 6, 16), MAT.steel, [XL + 0.014, 0.648, 0]);
  add('fech_capo', gTorus(0.012, 0.003, 'z', 6, 16), MAT.steel, [1.785, 0.775, 0], null, hoodPivot);
  { const z = sideZ(-1.48, 0.86) + 0.002; add('bocal', gCyl(0.068, 0.068, 0.006, 'z', 32), MAT.paint, [-1.48, 0.86, -z]); add('bocal', gTorus(0.068, 0.004, 'z', 6, 40), MAT.trim, [-1.48, 0.86, -z - 0.003]); }
  /* limpadores: dois na frente e um no vidro traseiro, com motor dentro da tampa */
  const wip = (x0, z0, z1) => { const pts = []; for (let k = 0; k <= 8; k++) { const z = z0 + (z1 - z0) * k / 8, x = x0 - 0.05 * k / 8; pts.push([x, topY(x, z) + 0.014, z]); } tube('limpador', pts, 0.006, MAT.black); };
  wip(0.775, -0.44, 0.08); wip(0.775, 0.04, 0.58);
  { const a = onSurf(XG + 0.02, 0, 0.014), b2 = onSurf(XG + 0.17, 0.32, 0.014); rod('limpador_tras', a, b2, 0.006, MAT.black, tailPivot); cyl('limpador_tras', [XG + 0.045, topY(XG + 0.045, 0) - 0.05, 0], 0.03, 0.08, 'x', MAT.black, null, tailPivot); }
  flushPanels();
}

/* ===== Motor EA111 1.6 8V (um comando, tuchos hidráulicos, correia dentada), admissão, ignição, arrefecimento e escape ===== */
const EXc = 1.33, EYc = 0.36;                          // eixo do virabrequim
const CYLZ = [-0.215, -0.133, -0.051, 0.031];          // cilindros 1..4 (o 1 fica do lado da correia, à direita)
const MAINS = [-0.256, -0.174, -0.092, -0.010, 0.072]; // apoios do virabrequim
const CR = 0.04345, RODL = 0.144;                      // meio curso (86,9 mm) e biela
const ZB = -0.092;                                     // centro do bloco ao longo do carro
const ZT = -0.30, ZA = -0.348;                         // planos da correia dentada e da correia de acessórios
const CX = EXc, CY = 0.725;                            // comando único
const XPU = EXc - 0.095, YPU = 0.48;                   // bomba d'água, na correia dentada
const XTE = EXc + 0.065, YTE = 0.52;                   // tensor da correia dentada
const TB = beltPath([[EXc, EYc, 0.032], [XTE, YTE, 0.024], [CX, CY, 0.06], [XPU, YPU, 0.034]]);
ANIM.crank = { x: EXc, y: EYc, r: CR, rod: RODL, pid: 'pistoes', rid: 'bielas' };

function buildEngine() {
  /* bloco de ferro, cárter de chapa, cabeçote de alumínio e tampa de válvulas */
  kit('bloco', 'block_gol');
  kit('carter', 'pan_gol');
  box('junta_cab', [EXc, 0.603, ZB], [0.214, 0.004, 0.384], MAT.steel);
  kit('cabecote', 'head_gol');
  kit('tampa_valv', 'cover_gol');
  add('tampa_oleo', gCyl(0.022, 0.022, 0.02, 'y', 24), MAT.black, [EXc - 0.02, 0.78, -0.262]);
  /* velas inclinadas na frente do cabeçote */
  CYLZ.forEach(z => {
    rod('velas', [EXc + 0.035, 0.615, z], [EXc + 0.058, 0.66, z], 0.0068, MAT.steel);
    rod('velas', [EXc + 0.058, 0.66, z], [EXc + 0.08, 0.705, z], 0.0085, MAT.plate);
  });
  /* pistões e bielas (animados) */
  CYLZ.forEach((z, i) => {
    const g = new THREE.Group(); reg('pistoes').group.add(g);
    add('pistoes', gCyl(0.038, 0.038, 0.048, 'y', 24), MAT.alu, [0, 0.012, 0], null, g);
    for (const dy of [0.03, 0.022]) add('pistoes', gTorus(0.0382, 0.0016, 'y', 4, 24), MAT.steelDark, [0, dy, 0], null, g);
    add('pistoes', gCyl(0.009, 0.009, 0.05, 'z', 10), MAT.steel, [0, 0, 0], null, g);
    g.position.set(EXc, 0.548, z);
    const r = add('bielas', gBox(0.02, RODL, 0.014, 0.004), MAT.steel); r.userData.noMerge = true;
    ANIM.pistons.push({ g, z, ph: (i === 0 || i === 3) ? 0 : Math.PI }); ANIM.rods.push(r);
  });
  /* virabrequim (pivô) com a engrenagem da correia na ponta direita */
  const kp = pivotOf('virabrequim', [EXc, EYc, 0]); ANIM.spin.push(kp);
  MAINS.forEach(z => add('virabrequim', gCyl(0.024, 0.024, 0.028, 'z'), MAT.steel, [0, 0, z], null, kp));
  CYLZ.forEach((z, i) => {
    const ph = (i === 0 || i === 3) ? 0 : Math.PI, px = CR * Math.sin(ph), py = CR * Math.cos(ph);
    add('virabrequim', gCyl(0.02, 0.02, 0.024, 'z'), MAT.steel, [px, py, z], null, kp);
    for (const dz of [-0.021, 0.021]) {
      add('virabrequim', gBox(0.048, 0.09, 0.012, 0.006), MAT.iron, [px / 2, py / 2, z + dz], null, kp);
      add('virabrequim', gBox(0.085, 0.035, 0.012, 0.01), MAT.iron, [-px * 0.9, -py * 0.9, z + dz], null, kp);
    }
  });
  add('virabrequim', gCyl(0.018, 0.018, 0.10, 'z'), MAT.steel, [0, 0, -0.30], null, kp);
  add('virabrequim', gCyl(0.032, 0.032, 0.026, 'z', 24), MAT.steel, [0, 0, ZT], null, kp);
  add('virabrequim', gCyl(0.04, 0.04, 0.012, 'z'), MAT.steel, [0, 0, 0.104], null, kp);
  const pv = pivotOf('polia_vira', [EXc, EYc, 0]); ANIM.spin.push(pv);
  add('polia_vira', gCyl(0.068, 0.068, 0.022, 'z', 36), MAT.steelDark, [0, 0, ZA], null, pv);
  for (const dz of [-0.007, 0, 0.007]) add('polia_vira', gTorus(0.068, 0.002, 'z', 4, 36), MAT.steel, [0, 0, ZA + dz], null, pv);
  add('polia_vira', gCyl(0.02, 0.02, 0.03, 'z', 16), MAT.steel, [0, 0, ZA + 0.012], null, pv);
  const fw = pivotOf('volante_motor', [EXc, EYc, 0]); ANIM.spin.push(fw);
  add('volante_motor', gCyl(0.135, 0.135, 0.022, 'z', 48), MAT.iron, [0, 0, 0.118], null, fw);
  add('volante_motor', gTorus(0.136, 0.005, 'z', 6, 60), MAT.steel, [0, 0, 0.118], null, fw);
  const cl = pivotOf('embreagem', [EXc, EYc, 0]); ANIM.spin.push(cl);
  add('embreagem', gCyl(0.095, 0.095, 0.008, 'z', 40), MAT.pad, [0, 0, 0.134], null, cl);
  add('embreagem', gCyl(0.115, 0.108, 0.018, 'z', 40), MAT.steel, [0, 0, 0.148], null, cl);
  add('embreagem', gTorus(0.06, 0.012, 'z', 6, 30), MAT.steelDark, [0, 0, 0.161], null, cl);
  add('rol_emb', gTorus(0.027, 0.009, 'z', 8, 24), MAT.steel, [EXc, EYc, 0.174]);
  /* comando único com 8 cames, tuchos hidráulicos e 8 válvulas (admissão atrás, escape na frente) */
  const cp = pivotOf('comando', [CX, CY, 0]); ANIM.cam.push(cp);
  add('comando', gCyl(0.013, 0.013, 0.39, 'z'), MAT.steel, [0, 0, ZB - 0.02], null, cp);
  CYLZ.forEach((z, i) => [-0.018, 0.018].forEach((dz, k) => {
    const a = (i * Math.PI / 2) + (k ? Math.PI * 0.6 : 0);
    const m = add('comando', gCyl(0.017, 0.017, 0.011, 'z', 16), MAT.steel, [Math.sin(a) * 0.006, Math.cos(a) * 0.006, z + dz], null, cp);
    m.scale.set(1, 1.35, 1); m.rotation.z = -a;
  }));
  MAINS.forEach(z => box('comando', [CX, CY + 0.012, z], [0.05, 0.012, 0.02], MAT.alu, 0.003));
  CYLZ.forEach(z => [-0.018, 0.018].forEach((dz, k) => {
    const xv = CX + (k ? 0.012 : -0.012);
    add('tuchos', gCyl(0.0145, 0.0145, 0.018, 'y', 16), MAT.steelDark, [CX, 0.69, z + dz]);
    rod('valvulas', [xv, 0.608, z + dz], [CX, 0.68, z + dz], 0.0032, MAT.steel);
    add('valvulas', gCyl(k ? 0.0135 : 0.0155, k ? 0.0135 : 0.0155, 0.003, 'y', 16), MAT.steel, [xv, 0.609, z + dz]);
    add('valvulas', gCyl(0.010, 0.010, 0.028, 'y', 12, true), MAT.spring, [CX + (k ? 0.003 : -0.003), 0.664, z + dz]);
  }));
  const cpp = pivotOf('polia_comando', [CX, CY, 0]); ANIM.cam.push(cpp);
  add('polia_comando', gCyl(0.06, 0.06, 0.022, 'z', 40), MAT.steel, [0, 0, ZT], null, cpp);
  add('polia_comando', gCyl(0.008, 0.008, 0.03, 'z', 8), MAT.black, [0.03, 0, ZT - 0.004], null, cpp);
  for (let k = 0; k < 5; k++) { const a = k * TAU / 5 + 0.3; add('polia_comando', gCyl(0.011, 0.011, 0.024, 'z', 12), MAT.steelDark, [Math.cos(a) * 0.036, Math.sin(a) * 0.036, ZT - 0.001], null, cpp); }
  /* correia dentada (lado direito): virabrequim, tensor, comando e bomba d'água */
  ribbon('correia_dent', TB, ZT, 0.024, MAT.belt);
  add('tensor_dent', gCyl(0.024, 0.024, 0.026, 'z', 24), MAT.steel, [XTE, YTE, ZT]);
  add('tensor_dent', gCyl(0.01, 0.01, 0.03, 'z', 12), MAT.steelDark, [XTE + 0.006, YTE + 0.004, ZT - 0.004]);
  box('tensor_dent', [XTE + 0.014, YTE + 0.03, ZT - 0.014], [0.008, 0.03, 0.004], MAT.yellow, 0.001);
  plateFromHull('capas_correia', TB, 0.022, ZT - 0.034, 0.01, MAT.covers);
  /* correia de acessórios: virabrequim, compressor do ar, alternador, bomba da direção e tensor */
  const ab = beltPath([[EXc, EYc, 0.068], [1.575, 0.285, 0.0565], [1.60, 0.625, 0.0285], [1.10, 0.61, 0.056], [1.14, 0.46, 0.028]]);
  ribbon('correia_acess', ab, ZA, 0.018, MAT.belt);
  add('tensor_acess', gCyl(0.028, 0.028, 0.022, 'z', 24), MAT.steel, [1.14, 0.46, ZA]);
  box('tensor_acess', [1.17, 0.44, ZA + 0.022], [0.07, 0.022, 0.016], MAT.steelDark, 0.006, [0, 0, -0.5]);
  add('tensor_acess', gCyl(0.022, 0.022, 0.045, 'z', 16), MAT.black, [1.20, 0.42, ZA + 0.04]);
  /* coxins: direito (sobre a correia), do câmbio (sob a bateria) e tirante traseiro */
  box('coxim_dir', [EXc, 0.80, -0.47], [0.09, 0.065, 0.075], MAT.rubber, 0.012);
  rod('coxim_dir', [EXc - 0.05, 0.70, -0.28], [EXc - 0.02, 0.785, -0.44], 0.013, MAT.steelDark);
  box('coxim_dir', [EXc, 0.80, -0.535], [0.11, 0.03, 0.05], MAT.steelDark);
  box('coxim_cambio', [1.26, 0.585, 0.43], [0.08, 0.06, 0.08], MAT.rubber, 0.012);
  box('coxim_cambio', [1.26, 0.605, 0.54], [0.06, 0.03, 0.14], MAT.steelDark);
  rod('coxim_cambio', [1.26, 0.52, 0.38], [1.26, 0.57, 0.42], 0.012, MAT.steelDark);
  add('coxim_tras', gCyl(0.03, 0.03, 0.05, 'x', 20), MAT.rubber, [1.03, 0.255, -0.02]);
  rod('coxim_tras', [1.25, 0.22, -0.02], [1.04, 0.25, -0.02], 0.014, MAT.steelDark);
  /* lubrificação: bomba na ponta do virabrequim, pescador, filtro na frente, vareta e respiro */
  box('bomba_oleo', [EXc, 0.35, -0.272], [0.13, 0.11, 0.02], MAT.aluDark, 0.01);
  tube('bomba_oleo', [[EXc - 0.02, 0.30, -0.255], [EXc - 0.03, 0.21, -0.20], [EXc - 0.02, 0.20, -0.13]], 0.008, MAT.steel);
  kit('filtro_oleo', 'oil_filter', { at: [1.477, 0.34, 0.035] });
  rod('vareta', [1.44, 0.29, 0.115], [1.48, 0.77, 0.12], 0.005, MAT.steel);
  add('vareta', gTorus(0.014, 0.004, 'x', 6, 18), MAT.yellow, [1.482, 0.785, 0.12]);
  tube('respiro', [[1.237, 0.762, -0.17], [1.20, 0.78, -0.17], [1.14, 0.76, -0.16]], 0.008, MAT.hose);
  add('respiro', gCyl(0.011, 0.011, 0.02, 'x', 12), MAT.black, [1.237, 0.762, -0.17]);
}

function buildIntake() {
  /* tomada na frente, caixa do filtro em cima do motor, duto descendo por trás até a borboleta, coletor voltado para o corta-fogo */
  tube('tomada_ar', [[1.75, 0.70, 0.22], [1.65, 0.75, 0.18], [1.53, 0.795, 0.10], [1.47, 0.805, 0.04]], 0.028, MAT.plastic);
  box('caixa_filtro', [EXc + 0.02, 0.805, -0.08], [0.24, 0.06, 0.31], MAT.plastic, 0.02);
  box('caixa_filtro', [EXc + 0.02, 0.836, -0.08], [0.245, 0.006, 0.315], MAT.black);
  for (const z of [-0.23, 0.07]) for (const x of [EXc - 0.06, EXc + 0.10]) box('caixa_filtro', [x, 0.82, z], [0.02, 0.03, 0.012], MAT.black, 0.003);
  box('filtro_ar', [EXc + 0.02, 0.81, -0.08], [0.20, 0.024, 0.27], MAT.paper, 0.004);
  for (let k = -3; k <= 3; k++) box('filtro_ar', [EXc + 0.02 + k * 0.026, 0.823, -0.08], [0.006, 0.005, 0.26], MAT.paper);
  tube('duto_ar', [[1.24, 0.80, 0.04], [1.17, 0.79, 0.10], [1.125, 0.765, 0.16], [1.11, 0.73, 0.185], [1.11, 0.705, 0.17]], 0.03, MAT.hose);
  add('tbi', gCyl(0.033, 0.033, 0.05, 'z', 28), MAT.aluDark, [1.11, 0.705, 0.13]);
  box('tbi', [1.06, 0.705, 0.13], [0.03, 0.06, 0.05], MAT.black, 0.006);
  rod('pedal_acel', [0.66, 0.32, 0.24], [0.64, 0.58, 0.24], 0.006, MAT.steelDark);
  box('pedal_acel', [0.62, 0.33, 0.24], [0.015, 0.12, 0.055], MAT.rubber, 0.006, [0, 0, -0.35]);
  box('pedal_acel', [0.67, 0.58, 0.24], [0.03, 0.05, 0.05], MAT.black, 0.006);
  kit('coletor_adm', 'intake_gol');
  route('coletor_adm', [[1.11, 0.705, 0.045], [1.11, 0.705, 0.075], [1.11, 0.705, 0.105]]);
  CYLZ.forEach(z => route('coletor_adm', [[1.222, 0.645, z], [1.185, 0.62, z], [1.14, 0.64, z], [1.115, 0.69, z]]));
  box('sens_map', [1.11, 0.758, -0.10], [0.03, 0.02, 0.03], MAT.black, 0.004);
  add('galeria', gCyl(0.011, 0.011, 0.31, 'z'), MAT.steel, [1.195, 0.69, ZB]);
  add('galeria', gCyl(0.016, 0.016, 0.03, 'z', 16), MAT.steelDark, [1.195, 0.69, ZB - 0.17]);
  CYLZ.forEach(z => { rod('bicos', [1.195, 0.684, z], [1.205, 0.664, z], 0.0085, MAT.black); rod('bicos', [1.205, 0.664, z], [1.212, 0.652, z], 0.004, MAT.steel); });
  add('purga', gCyl(0.016, 0.016, 0.04, 'y', 16), MAT.black, [1.06, 0.80, -0.22]);
  /* linha de combustível no cofre (sistema sem retorno: só uma linha de ida) */
  tube('linhas_comb', [[0.85, 0.215, -0.40], [0.93, 0.40, -0.42], [1.00, 0.62, -0.40], [1.08, 0.72, -0.36], [1.15, 0.72, -0.29], [1.195, 0.69, -0.262]], 0.005, MAT.steel);
  /* partida a frio do flex: reservatório de gasolina, bombinha, eletroválvula e um tubinho para cada cilindro */
  kit('res_pf', 'reservoir', { at: [1.66, 0.70, -0.55], s: [0.07, 0.11, 0.07], mats: { tank: MAT.whiteRes } });
  kit('res_pf', 'res_cap', { at: [1.66, 0.755, -0.55], s: 0.85, mats: { tankNeck: MAT.whiteRes } });
  add('bomba_pf', gCyl(0.016, 0.016, 0.05, 'y', 16), MAT.black, [1.66, 0.62, -0.55]);
  box('valv_pf', [1.07, 0.79, -0.29], [0.03, 0.025, 0.03], MAT.black, 0.004);
  tube('tubos_pf', [[1.66, 0.595, -0.55], [1.62, 0.68, -0.50], [1.45, 0.82, -0.40], [1.20, 0.82, -0.33], [1.085, 0.795, -0.30]], 0.004, MAT.cable);
  CYLZ.forEach(z => tube('tubos_pf', [[1.07, 0.785, -0.27], [1.10, 0.76, (z - 0.27) / 2], [1.17, 0.67, z + 0.012]], 0.0028, MAT.cable));
}

function buildIgnitionCooling() {
  box('ecu', [1.04, 0.73, 0.60], [0.16, 0.12, 0.035], MAT.box, 0.006);
  box('ecu', [1.04, 0.80, 0.60], [0.06, 0.025, 0.03], MAT.black, 0.004);
  /* bobina dupla na ponta esquerda do cabeçote e os quatro cabos até as velas */
  box('bobina', [EXc + 0.03, 0.715, 0.13], [0.08, 0.07, 0.04], MAT.coil, 0.008);
  box('bobina', [EXc + 0.03, 0.715, 0.106], [0.06, 0.05, 0.01], MAT.steelDark, 0.002);
  CYLZ.forEach((z, i) => {
    const e = [EXc + 0.06, 0.69 + i * 0.014, 0.11];
    tube('cabos_vela', [[EXc + 0.083, 0.71, z], [EXc + 0.10, 0.722, z + 0.03], [EXc + 0.10, 0.726, 0.075 + i * 0.004], e], 0.0045, MAT.cable);
    rod('cabos_vela', [EXc + 0.078, 0.698, z], [EXc + 0.092, 0.725, z], 0.008, MAT.black);
  });
  add('sens_ckp', gCyl(0.011, 0.011, 0.04, 'y', 12), MAT.black, [EXc - 0.07, 0.30, 0.085]);
  add('sens_cmp', gCyl(0.012, 0.012, 0.028, 'z', 16), MAT.black, [EXc - 0.075, 0.70, -0.27]);
  add('sens_ect', gCyl(0.008, 0.008, 0.035, 'y', 12), MAT.black, [EXc - 0.05, 0.69, 0.12]);
  add('sens_det', gCyl(0.016, 0.016, 0.018, 'x', 16), MAT.black, [EXc - 0.114, 0.44, ZB]);
  rod('sonda', [1.542, 0.59, -0.13], [1.566, 0.63, -0.154], 0.009, MAT.steel);
  tube('sonda', [[1.566, 0.63, -0.154], [1.59, 0.68, -0.14], [1.585, 0.73, -0.08], [1.50, 0.76, 0.0]], 0.003, MAT.cable);
  rod('sonda2', [1.53, 0.30, -0.10], [1.575, 0.31, -0.12], 0.009, MAT.steel);
  tube('sonda2', [[1.575, 0.31, -0.12], [1.61, 0.45, -0.16], [1.605, 0.64, -0.17], [1.57, 0.74, -0.13]], 0.003, MAT.cable);
  add('sens_oleo', gCyl(0.01, 0.01, 0.03, 'x', 12), MAT.black, [1.445, 0.41, 0.09]);
  /* arrefecimento: radiador com caixas laterais e um eletroventilador atrás */
  box('radiador', [1.72, 0.46, 0], [0.028, 0.30, 0.60], MAT.aluDark);
  for (let k = -9; k <= 9; k++) box('radiador', [1.735, 0.46, k * 0.03], [0.003, 0.29, 0.004], MAT.alu);
  S.forEach(s => box('radiador', [1.72, 0.46, s * 0.31], [0.04, 0.32, 0.035], MAT.black, 0.008));
  add('ventoinha', gTorus(0.15, 0.011, 'x', 8, 48), MAT.plastic, [1.685, 0.46, 0.05]);
  add('ventoinha', gCyl(0.045, 0.045, 0.05, 'x', 20), MAT.black, [1.662, 0.46, 0.05]);
  {
    const fan = new THREE.Group(); fan.position.set(1.676, 0.46, 0.05); reg('ventoinha').group.add(fan); ANIM.fans = [fan]; ANIM.fan = fan;
    for (let k = 0; k < 5; k++) { const m = add('ventoinha', gBox(0.006, 0.13, 0.036, 0.003), MAT.plastic, [0, 0.075 * Math.cos(k * TAU / 5), 0.075 * Math.sin(k * TAU / 5)], [k * TAU / 5, 0.35, 0], fan); m.rotation.order = 'XYZ'; }
  }
  box('ventoinha', [1.692, 0.46, 0], [0.012, 0.30, 0.60], MAT.plastic);
  kit('vaso', 'reservoir', { at: [1.00, 0.75, -0.48], s: [0.09, 0.12, 0.10], mats: { tank: MAT.coolantTank } });
  kit('vaso', 'res_cap', { at: [1.00, 0.81, -0.48], mats: { tankNeck: MAT.coolantTank } });
  tube('vaso', [[1.00, 0.80, -0.44], [1.10, 0.83, -0.41], [1.35, 0.835, -0.40], [1.58, 0.72, -0.36], [1.70, 0.62, -0.31]], 0.0045, MAT.hose);
  /* flange de água na ponta esquerda do cabeçote; válvula termostática na frente do bloco, na volta do radiador */
  box('flange_agua', [EXc - 0.05, 0.645, 0.115], [0.06, 0.06, 0.035], MAT.plastic, 0.008);
  add('flange_agua', gCyl(0.018, 0.018, 0.03, 'z', 16), MAT.plastic, [EXc - 0.05, 0.645, 0.14]);
  box('termostato', [1.465, 0.48, 0.07], [0.05, 0.055, 0.05], MAT.aluDark, 0.008);
  /* bomba d'água presa no bloco, com a polia na correia dentada */
  add('bomba_agua', gCyl(0.034, 0.034, 0.024, 'z', 24), MAT.steel, [XPU, YPU, ZT]);
  add('bomba_agua', gCyl(0.046, 0.046, 0.022, 'z', 24), MAT.aluDark, [XPU, YPU, ZT + 0.025]);
  add('bomba_agua', gCyl(0.012, 0.012, 0.03, 'z', 12), MAT.steelDark, [XPU, YPU, ZT - 0.014]);
  tube('mang_sup', [[EXc - 0.05, 0.645, 0.155], [1.32, 0.635, 0.20], [1.47, 0.63, 0.25], [1.62, 0.61, 0.28], [1.70, 0.58, 0.29]], 0.017, MAT.hose);
  tube('mang_inf', [[1.70, 0.34, 0.29], [1.62, 0.36, 0.26], [1.53, 0.42, 0.15], [1.49, 0.47, 0.085]], 0.017, MAT.hose);
  tube('mang_aquec', [[EXc - 0.075, 0.645, 0.13], [1.18, 0.62, 0.13], [1.05, 0.62, 0.07], [0.95, 0.66, 0.03]], 0.009, MAT.hose);
  tube('mang_aquec', [[0.95, 0.64, -0.04], [1.02, 0.60, -0.12], [1.12, 0.53, -0.22], [XPU, YPU + 0.02, ZT + 0.03]], 0.009, MAT.hose);
}

function buildExhaust() {
  /* coletor na frente do motor, voltado para o radiador, com o catalisador logo embaixo */
  kit('coletor_esc', 'exhaust_gol');
  CYLZ.forEach(z => route('coletor_esc', [[1.442, 0.645, z], [1.485, 0.625, z * 0.8 - 0.02], [1.52, 0.55, -0.10]]));
  kit('protetor', 'shield_gol');
  kit('catalisador', 'catalytic', { at: [1.54, 0.44, -0.10], rot: [0, Math.PI, 0], s: [0.97, 0.95, 0.97] });
  tube('tubo_diant', [[1.54, 0.33, -0.10], [1.52, 0.22, -0.07], [1.42, 0.16, -0.03], [1.10, 0.162, 0.0], [0.60, 0.172, 0.0], [0.25, 0.18, 0.02]], 0.022, MAT.exhaust);
  for (let k = -4; k <= 4; k++) add('tubo_diant', gTorus(0.029, 0.003, 'x', 4, 20), MAT.steelDark, [0.86 + k * 0.012, 0.166, 0.0]);
  add('tubo_diant', gCyl(0.028, 0.028, 0.11, 'x', 20), MAT.steel, [0.86, 0.166, 0.0]);
  add('silenc_inter', gCyl(0.055, 0.055, 0.44, 'x', 28), MAT.exhaust, [-0.10, 0.185, 0.02]);
  /* o tubo traseiro passa ao lado do tanque e por baixo da travessa do eixo e vai ao silencioso, do lado esquerdo */
  tube('tubo_tras', [[-0.32, 0.185, 0.02], [-0.45, 0.19, 0.20], [-0.95, 0.20, 0.24], [-1.22, 0.215, 0.32], [-1.45, 0.25, 0.40]], 0.021, MAT.exhaust);
  kit('silenc_tras', 'muffler', { at: [-1.61, 0.255, 0.42], s: [0.88, 0.94, 0.94] });
  tube('silenc_tras', [[-1.76, 0.255, 0.44], [-1.84, 0.25, 0.45], [-1.93, 0.25, 0.45]], 0.022, MAT.chrome);
  [[0.70, 0.176, -0.01], [-0.40, 0.19, 0.12], [-0.95, 0.205, 0.24], [-1.76, 0.30, 0.44], [-1.47, 0.30, 0.41]].forEach(p => box('coxins_esc', [p[0], p[1] + 0.04, p[2]], [0.03, 0.05, 0.02], MAT.rubber, 0.005));
}

function buildElectricTrans() {
  /* bateria sobre o câmbio, com o porta-fusíveis preso no positivo */
  kit('bateria', 'battery', { at: [1.42, 0.72, 0.42], rot: [0, -Math.PI / 2, 0], s: [0.971, 0.947, 0.833] });
  box('caixa_fus_motor', [1.49, 0.835, 0.40], [0.06, 0.028, 0.10], MAT.black, 0.006);
  box('caixa_fus_motor', [1.49, 0.85, 0.40], [0.05, 0.004, 0.08], MAT.red, 0.001);
  tube('cabos_bat', [[1.495, 0.815, 0.381], [1.47, 0.80, 0.33], [1.40, 0.74, 0.31], [1.30, 0.64, 0.31], [1.22, 0.56, 0.31], [1.189, 0.505, 0.292]], 0.008, MAT.redCable);
  tube('cabos_bat', [[1.345, 0.815, 0.381], [1.30, 0.78, 0.48], [1.30, 0.66, 0.56]], 0.008, MAT.cable);
  tube('cabos_bat', [[1.30, 0.50, 0.42], [1.32, 0.56, 0.52], [1.34, 0.60, 0.58]], 0.006, MAT.cable);
  box('caixa_fus_painel', [0.52, 0.52, 0.60], [0.12, 0.12, 0.05], MAT.black, 0.008);
  kit('alternador', 'alternator', { at: [1.60, 0.625, ZA - 0.011], s: [0.93, 0.93, 0.9] });
  kit('motor_partida', 'starter', { at: [1.18, 0.445, 0.235] });
  /* chicote: da cabine à central e por cima do motor até o alternador; e da cabine até a bomba no tanque */
  tube('chicote', [[0.50, 0.82, 0.32], [0.62, 0.70, 0.50], [0.86, 0.74, 0.56], [1.04, 0.80, 0.58], [1.12, 0.80, 0.40], [1.20, 0.795, 0.25], [1.20, 0.795, 0.0], [1.21, 0.80, -0.25], [1.40, 0.82, -0.38], [1.58, 0.72, -0.30], [1.60, 0.69, -0.26]], 0.011, MAT.harness);
  tube('chicote', [[0.56, 0.58, 0.60], [0.40, 0.26, 0.68], [-0.50, 0.26, 0.68], [-0.62, 0.35, 0.30], [-0.68, 0.345, -0.22]], 0.009, MAT.harness);
  add('buzina', gCyl(0.045, 0.045, 0.02, 'x', 24), MAT.black, [1.90, 0.40, 0.30]);
  add('limpador', gCyl(0.034, 0.034, 0.10, 'x', 20), MAT.black, [0.96, 0.87, -0.26]);
  rod('limpador', [0.94, 0.90, -0.42], [0.94, 0.90, 0.08], 0.005, MAT.steel);
  kit('lavador', 'reservoir', { at: [1.85, 0.44, -0.50], s: [0.09, 0.16, 0.12], mats: { tank: MAT.whiteRes } });
  tube('lavador', [[1.85, 0.52, -0.52], [1.82, 0.65, -0.55], [1.80, 0.73, -0.56]], 0.012, MAT.whiteRes);
  kit('lavador', 'res_cap', { at: [1.80, 0.735, -0.56], s: 0.8, mats: { black: MAT.blue, tankNeck: MAT.whiteRes } });
  tube('lavador', [[1.85, 0.37, -0.45], [1.40, 0.28, -0.62], [0.40, 0.22, -0.68], [-1.10, 0.28, -0.66], [-1.45, 1.20, -0.58], [-1.50, 1.36, -0.05]], 0.0028, MAT.cable);
  /* câmbio manual de 5 marchas (lado esquerdo) */
  kit('cambio', 'gearbox_gol');
  add('diferencial', gCyl(0.085, 0.085, 0.24, 'z', 32), MAT.alu, [1.19, WY, 0.20]);
  add('diferencial', gTorus(0.072, 0.01, 'z', 6, 36), MAT.steel, [1.19, WY, 0.13]);
  S.forEach(s => {
    const zi = s > 0 ? 0.32 : 0.08;
    const pts = s > 0 ? [[1.19, WY, zi], [1.21, WY, 0.46], [XFA, WY, s * 0.615]] : [[1.19, WY, zi], [1.20, WY, -0.18], [XFA, WY, s * 0.615]];
    tube('semieixos', pts, 0.013, MAT.steel);
    /* coifas sanfonadas: a boca grande fica na junta (na roda por fora, no câmbio por dentro) */
    kit('semieixos', 'cv_boot', { at: [XFA, WY, s * 0.61], rot: s > 0 ? [0, Math.PI, 0] : null, s: 0.97 });
    kit('semieixos', 'cv_boot', { at: [1.195, WY, (s > 0 ? 0.36 : 0.04) - s * 0.035], rot: s > 0 ? null : [0, Math.PI, 0], s: 0.97 });
  });
  /* embreagem a cabo: garfo com a alavanca por fora, atrás da capa do câmbio */
  rod('garfo_emb', [EXc, EYc + 0.03, 0.175], [1.25, 0.50, 0.16], 0.007, MAT.steelDark);
  rod('garfo_emb', [1.25, 0.49, 0.15], [1.25, 0.61, 0.185], 0.008, MAT.steelDark);
  box('garfo_emb', [1.25, 0.50, 0.15], [0.03, 0.03, 0.03], MAT.aluDark, 0.004);
  tube('cabo_emb', [[0.66, 0.60, 0.46], [0.84, 0.55, 0.46], [0.95, 0.53, 0.44], [1.05, 0.58, 0.32], [1.15, 0.62, 0.24], [1.25, 0.61, 0.185]], 0.0045, MAT.cable);
  add('cabo_emb', gCyl(0.012, 0.012, 0.03, 'x', 12), MAT.rubber, [0.92, 0.535, 0.445]);
  tube('cabos_cambio', [[1.20, 0.53, 0.30], [1.05, 0.55, 0.24], [0.92, 0.40, 0.10], [0.60, 0.25, 0.03], [0.25, 0.30, 0.0]], 0.0045, MAT.cable);
  tube('cabos_cambio', [[1.22, 0.53, 0.34], [1.07, 0.56, 0.27], [0.93, 0.41, 0.12], [0.60, 0.255, 0.05], [0.25, 0.31, 0.02]], 0.0045, MAT.cable);
  rod('alavanca', [0.22, 0.34, 0], [0.18, 0.62, 0], 0.008, MAT.steel);
  sph('alavanca', [0.18, 0.645, 0], 0.03, MAT.black);
  add('alavanca', gCyl(0.02, 0.07, 0.08, 'y', 20), MAT.black, [0.21, 0.43, 0]);
}

/* ===== Ar-condicionado: compressor, condensador, filtro secador, válvula de expansão, evaporador e tubulações ===== */
function buildAC() {
  kit('compressor', 'compressor', { at: [1.575, 0.285, ZA - 0.012] });
  box('condensador', [1.755, 0.46, -0.01], [0.016, 0.30, 0.60], MAT.alu);
  for (let k = -9; k <= 9; k++) box('condensador', [1.765, 0.46, k * 0.03 - 0.01], [0.002, 0.29, 0.003], MAT.aluDark);
  add('filtro_secador', gCyl(0.028, 0.028, 0.20, 'y', 20), MAT.alu, [1.745, 0.45, -0.37]);
  box('pressostato', [1.70, 0.58, -0.39], [0.025, 0.03, 0.025], MAT.black, 0.004);
  tube('tubos_ac', [[1.589, 0.377, -0.208], [1.63, 0.42, -0.26], [1.66, 0.45, -0.32], [1.68, 0.52, -0.36], [1.73, 0.60, -0.355], [1.755, 0.61, -0.31]], 0.008, MAT.acPipe);
  tube('tubos_ac', [[1.745, 0.35, -0.37], [1.66, 0.42, -0.44], [1.45, 0.62, -0.47], [1.15, 0.73, -0.43], [0.97, 0.71, -0.36]], 0.006, MAT.acPipe);
  tube('tubos_ac', [[0.97, 0.69, -0.30], [1.12, 0.69, -0.38], [1.32, 0.55, -0.42], [1.50, 0.43, -0.32], [1.54, 0.42, -0.24], [1.562, 0.377, -0.208]], 0.011, MAT.acPipe);
  box('valv_exp', [0.945, 0.70, -0.33], [0.025, 0.05, 0.05], MAT.aluDark, 0.004);
  box('evaporador', [0.74, 0.64, -0.30], [0.06, 0.17, 0.22], MAT.alu);
  for (let k = -3; k <= 3; k++) box('evaporador', [0.772, 0.64, -0.30 + k * 0.03], [0.002, 0.16, 0.004], MAT.aluDark);
  /* radiador do aquecedor: dentro da caixa de ar, com os dois tubos atravessando o corta-fogo */
  box('rad_aquec', [0.74, 0.61, 0.0], [0.045, 0.14, 0.19], MAT.copper);
  for (let k = -2; k <= 2; k++) box('rad_aquec', [0.765, 0.61, k * 0.035], [0.002, 0.13, 0.004], MAT.aluDark);
  tube('rad_aquec', [[0.95, 0.66, 0.03], [0.86, 0.66, 0.035], [0.77, 0.66, 0.04]], 0.008, MAT.copper);
  tube('rad_aquec', [[0.95, 0.64, -0.04], [0.86, 0.64, -0.045], [0.77, 0.64, -0.05]], 0.008, MAT.copper);
  box('filtro_cabine', [0.86, 0.915, -0.42], [0.12, 0.012, 0.20], MAT.paper, 0.003);
  add('vent_interno', gCyl(0.07, 0.07, 0.10, 'y', 28), MAT.black, [0.58, 0.60, -0.50]);
  box('caixa_ar', [0.68, 0.66, -0.04], [0.22, 0.22, 0.56], MAT.plastic, 0.02);
  [-0.07, 0, 0.07].forEach(z => add('comandos_clima', gCyl(0.022, 0.022, 0.02, 'x', 20), MAT.plastic, [0.425, 0.74, z]));
  box('comandos_clima', [0.428, 0.70, 0], [0.006, 0.02, 0.06], MAT.black, 0.003);
}

/* ===== Rodas de liga, suspensão (McPherson na frente, eixo de torção atrás), freios sem ABS e direção hidráulica ===== */
const TIRE_PROF = [[0.192, -0.088], [0.205, -0.097], [0.245, -0.0985], [0.278, -0.094], [0.293, -0.08], [0.298, -0.056], [0.298, 0.056], [0.293, 0.08], [0.278, 0.094], [0.245, 0.0985], [0.205, 0.097], [0.192, 0.088]];
function alloyGeo() {
  /* face da roda de liga: cinco raios largos com janelas entre eles */
  const sh = new THREE.Shape(); sh.absarc(0, 0, 0.186, 0, TAU, false);
  for (let k = 0; k < 5; k++) {
    const a0 = k * TAU / 5 + 0.27, a1 = (k + 1) * TAU / 5 - 0.27, h = new THREE.Path();
    h.moveTo(Math.cos(a0 + 0.12) * 0.078, Math.sin(a0 + 0.12) * 0.078);
    h.absarc(0, 0, 0.162, a0, a1, false);
    h.lineTo(Math.cos(a1 - 0.12) * 0.078, Math.sin(a1 - 0.12) * 0.078);
    h.absarc(0, 0, 0.078, a1 - 0.12, a0 + 0.12, true);
    sh.holes.push(h);
  }
  const hub = new THREE.Path(); hub.absarc(0, 0, 0.02, 0, TAU, true); sh.holes.push(hub);
  return new THREE.ExtrudeGeometry(sh, { depth: 0.018, bevelEnabled: true, bevelThickness: 0.005, bevelSize: 0.005, bevelSegments: 2, curveSegments: 14 });
}
function buildWheels() {
  const face = alloyGeo();
  [XFA, XRA].forEach(X => S.forEach(s => {
    const zc = s * TRK, flip = s < 0 ? [0, Math.PI, 0] : null, front = X === XFA, c = V(X, WY, zc);
    let yaw = null;
    if (front) { yaw = pivotOf('mangas', [X, WY, zc]); Object.assign(yaw.userData, { abs: true, owner: 'mangas', side: s, absPos: c.clone() }); }
    const spin = new THREE.Group();
    if (yaw) yaw.add(spin); else { spin.position.copy(c); reg('pneus').group.add(spin); }
    Object.assign(spin.userData, { abs: true, owner: front ? 'mangas' : 'pneus', side: s, absPos: c.clone() });
    WHEELS.push({ X, s, front, yaw, spin });
    const t = add('pneus', gLathe(TIRE_PROF, 'z', 56), MAT.tire, [X, WY, zc], flip, spin); t.castShadow = true;
    add('rodas', gCyl(0.188, 0.188, 0.15, 'z', 40, true), MAT.wheelSteel, [X, WY, zc], null, spin);
    add('rodas', gTorus(0.191, 0.006, 'z', 6, 48), MAT.alloyWheel, [X, WY, zc + s * 0.075], null, spin);
    add('rodas', gTorus(0.191, 0.006, 'z', 6, 48), MAT.wheelSteel, [X, WY, zc - s * 0.075], null, spin);
    add('rodas', gLathe([[0.17, 0.0], [0.187, 0.012], [0.19, 0.03]], 'z', 48), MAT.alloyWheel, [X, WY, zc + s * 0.045], flip, spin);
    add('rodas', face, MAT.alloyWheel, [X, WY, zc + s * 0.035], flip, spin);
    add('rodas', gCyl(0.07, 0.07, 0.02, 'z', 32), MAT.alloyWheel, [X, WY, zc + s * 0.042], null, spin);
    add('rodas', gCyl(0.028, 0.032, 0.012, 'z', 24), MAT.steelDark, [X, WY, zc + s * 0.058], null, spin);
  }));
  /* estepe deitado no poço, sob o assoalho do porta-malas */
  add('estepe', gLathe(TIRE_PROF, 'y', 48), MAT.tire, [-1.55, 0.42, 0]);
  add('estepe', gCyl(0.188, 0.188, 0.13, 'y', 36, true), MAT.wheelSteel, [-1.55, 0.42, 0]);
  add('estepe', gCyl(0.17, 0.17, 0.006, 'y', 36), MAT.wheelSteel, [-1.55, 0.435, 0]);
  rod('estepe', [-1.55, 0.36, 0], [-1.55, 0.52, 0], 0.006, MAT.steel);
  box('macaco', [-1.55, 0.50, 0.40], [0.28, 0.05, 0.08], MAT.steelDark, 0.01);
  rod('macaco', [-1.69, 0.50, 0.28], [-1.41, 0.50, 0.28], 0.008, MAT.steel);
}

function buildSuspensionBrakes() {
  S.forEach(s => {
    const WF = WHEELS.find(w => w.front && w.s === s), WRr = WHEELS.find(w => !w.front && w.s === s);
    /* ---- frente: McPherson ---- */
    const bot = [XFA + 0.012, 0.40, s * 0.605], top = [XFA + 0.03, 0.83, s * 0.535];
    /* amortecedor, coxim, manga, bandeja e bieleta vêm do CAD desenhados no lado esquerdo; no direito vão espelhados */
    const mir = s > 0 ? null : [1, 1, -1];
    kit('amort_diant', 'strut_gol', { s: mir });
    spring('molas_diant', lerp3(bot, top, 0.46), lerp3(bot, top, 0.92), 0.07, 0.007, 5.5, MAT.spring);
    kit('coxins_amort', 'mount_gol', { s: mir });
    kit('mangas', 'knuckle_gol', { s: mir, parent: WF.yaw });
    add('mangas', gCyl(0.028, 0.028, 0.06, 'z', 20), MAT.steel, [XFA, WY, s * 0.685], null, WF.yaw);
    kit('bandejas', 'arm_gol', { s: mir });
    kit('barra_estab', 'link_gol', { s: mir });
    box('barra_estab', [XFA - 0.27, 0.265, s * 0.28], [0.04, 0.035, 0.04], MAT.rubber, 0.008);
    box('subchassi', [1.33, 0.205, s * 0.40], [0.62, 0.05, 0.065], MAT.steelDark, 0.01);
    /* freio dianteiro: disco ventilado e pinça flutuante */
    kit('discos', 'disc_v', { at: [XFA, WY, s * 0.66], rot: s > 0 ? null : [0, Math.PI, 0], s: 0.96, parent: WF.spin });
    /* pinça: peça de CAD desenhada em +x e girada para trás e para cima; do lado direito ela é espelhada (pistão para dentro) */
    const ang = Math.atan2(0.05, -0.10), rotC = s > 0 ? [0, 0, ang] : [0, Math.PI, Math.PI - ang];
    const rp = (r, t, z) => [XFA + Math.cos(ang) * r - Math.sin(ang) * t, WY + Math.sin(ang) * r + Math.cos(ang) * t, s * z];
    kit('pincas', 'caliper', { at: [XFA, WY, s * 0.66], rot: rotC, s: 0.96, parent: WF.yaw });
    kit('pastilhas', 'pads_v', { at: [XFA, WY, s * 0.66], rot: rotC, s: 0.96, parent: WF.yaw });
    tube('tubos_freio', [rp(0.1344, -0.0192 * s, 0.6235), [XFA - 0.03, 0.47, s * 0.60], [XFA - 0.02, 0.56, s * 0.56]], 0.005, MAT.rubber);
    /* ---- traseira: eixo de torção (dois braços e uma travessa), molas e amortecedores separados ---- */
    const bu = [-0.80, 0.31, s * 0.585], hub = [XRA, WY, s * 0.62];
    add('buchas_eixo', gCyl(0.038, 0.038, 0.06, 'z', 20), MAT.rubber, bu);
    box('buchas_eixo', [-0.80, 0.34, s * 0.585], [0.08, 0.06, 0.08], MAT.steelDark, 0.006);
    box('cubo_tras', [XRA, 0.32, s * 0.62], [0.07, 0.21, 0.04], MAT.iron, 0.01);
    add('cubo_tras', gCyl(0.03, 0.03, 0.07, 'z', 20), MAT.steel, [XRA, WY, s * 0.645]);
    spring('molas_tras', [XRA + 0.05, 0.315, s * 0.525], [XRA + 0.05, 0.58, s * 0.525], 0.058, 0.0066, 5, MAT.spring);
    add('molas_tras', gCyl(0.062, 0.062, 0.012, 'y', 24), MAT.rubber, [XRA + 0.05, 0.585, s * 0.525]);
    const sb = [XRA - 0.06, 0.225, s * 0.575], st = [XRA - 0.10, 0.62, s * 0.54];
    kit('amort_tras', 'shock_gol', { s: mir });
    add('tambores', gCyl(0.092, 0.092, 0.05, 'z', 40), MAT.iron, [XRA, WY, s * 0.665], null, WRr.spin);
    add('tambores', gCyl(0.10, 0.10, 0.006, 'z', 40), MAT.steelDark, [XRA, WY, s * 0.638], null, WRr.spin);
    for (const a of [0, Math.PI]) { const m = add('sapatas', new THREE.TorusGeometry(0.078, 0.009, 6, 20, Math.PI * 0.8), MAT.pad, [XRA, WY, s * 0.665]); m.rotation.z = a + Math.PI * 0.1; }
    add('sapatas', gCyl(0.011, 0.011, 0.055, 'x', 12), MAT.steel, [XRA, WY + 0.068, s * 0.66]);
    tube('freio_mao', [[-0.05, 0.22, 0.0], [-0.40, 0.205, s * 0.28], [-0.68, 0.205, s * 0.40], [-1.00, 0.25, s * 0.56], [XRA, WY - 0.05, s * 0.64]], 0.004, MAT.cable);
  });
  /* travessa do eixo traseiro: perfil aberto que torce, logo à frente das rodas */
  kit('eixo_tras', 'beam_gol');
  /* barra estabilizadora e subchassi dianteiro */
  tube('barra_estab', [[XFA - 0.07, 0.28, -0.53], [XFA - 0.24, 0.27, -0.47], [XFA - 0.27, 0.265, -0.28], [XFA - 0.27, 0.265, 0.28], [XFA - 0.24, 0.27, 0.47], [XFA - 0.07, 0.28, 0.53]], 0.011, MAT.steel);
  box('subchassi', [1.62, 0.205, 0], [0.05, 0.05, 0.86], MAT.steelDark, 0.01);
  box('subchassi', [1.02, 0.225, 0], [0.06, 0.05, 0.86], MAT.steelDark, 0.01);
  /* hidráulica: servo, cilindro-mestre de dois circuitos, válvula equalizadora e as linhas */
  kit('servo', 'booster', { at: [1.00, 0.70, 0.40], rot: [0, Math.PI / 2, 0], s: [0.913, 0.913, 1] });
  add('cil_mestre', gCyl(0.024, 0.024, 0.12, 'x', 20), MAT.alu, [1.12, 0.71, 0.40]);
  kit('reserv_freio', 'reservoir', { at: [1.12, 0.772, 0.40], s: [0.06, 0.07, 0.09], mats: { tank: MAT.fluid } });
  kit('reserv_freio', 'res_cap', { at: [1.12, 0.807, 0.40], s: 0.9, mats: { tankNeck: MAT.fluid } });
  tube('tubos_freio', [[1.10, 0.68, 0.43], [1.14, 0.62, 0.52], [1.18, 0.58, 0.56], [XFA - 0.02, 0.56, 0.56]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.10, 0.68, 0.38], [1.06, 0.62, 0.20], [1.10, 0.52, -0.40], [XFA - 0.02, 0.56, -0.56]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.08, 0.67, 0.42], [0.96, 0.40, 0.46], [0.70, 0.21, 0.46], [-0.60, 0.21, 0.46], [-0.88, 0.30, 0.30], [-0.95, 0.345, 0.17]], 0.003, MAT.steel);
  S.forEach(s => tube('tubos_freio', [[-0.96, 0.345, 0.11], [-1.08, 0.35, s * 0.40], [XRA, WY + 0.07, s * 0.635]], 0.003, MAT.steel));
  box('valv_equal', [-0.96, 0.345, 0.14], [0.05, 0.04, 0.06], MAT.aluDark, 0.006);
  rod('valv_equal', [-0.96, 0.325, 0.16], [-1.02, 0.325, 0.20], 0.004, MAT.steel);
  spring('valv_equal', [-0.975, 0.325, 0.168], [-1.005, 0.325, 0.188], 0.006, 0.0015, 4, MAT.spring);
  tube('mang_vacuo', [[1.10, 0.75, 0.04], [1.08, 0.79, 0.18], [1.06, 0.77, 0.32], [1.06, 0.74, 0.36]], 0.008, MAT.hose);
  rod('pedal_freio', [0.69, 0.64, 0.36], [0.64, 0.36, 0.36], 0.008, MAT.steelDark);
  box('pedal_freio', [0.632, 0.345, 0.36], [0.02, 0.05, 0.075], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('pedal_emb', [0.69, 0.64, 0.46], [0.64, 0.36, 0.46], 0.008, MAT.steelDark);
  box('pedal_emb', [0.632, 0.345, 0.46], [0.02, 0.05, 0.07], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('freio_mao', [-0.24, 0.42, 0.0], [0.02, 0.49, 0.0], 0.014, MAT.black);
}

function buildSteering() {
  /* caixa de direção hidráulica: cremalheira com cilindro, válvula no pinhão (lado do motorista) e mangueiras até a bomba */
  kit('caixa_dir', 'rack_gol');
  /* tubos de aço da válvula até as duas pontas do cilindro de assistência */
  tube('caixa_dir', [[1.045, 0.378, 0.18], [1.035, 0.383, 0.08], [1.04, 0.378, -0.005]], 0.0035, MAT.steel);
  tube('caixa_dir', [[1.075, 0.378, 0.18], [1.085, 0.383, 0.0], [1.08, 0.378, -0.225]], 0.0035, MAT.steel);
  S.forEach(s => {
    const inner = V(1.06, 0.35, s * 0.41), outer = V(XFA - 0.13, 0.35, s * 0.595);
    const bar = add('barras_axiais', new THREE.CylinderGeometry(0.009, 0.009, 1, 12), MAT.steel); bar.userData.noMerge = true; setBar(bar, inner, outer);
    const ball = sph('barras_axiais', [outer.x, outer.y, outer.z], 0.017, MAT.steelDark); ball.userData.noMerge = true;
    ANIM.tie.push({ s, bar, ball, inner, outer, pid: 'barras_axiais' });
  });
  add('bomba_dir', gCyl(0.05, 0.05, 0.08, 'z', 24), MAT.alu, [1.10, 0.61, -0.295]);
  add('bomba_dir', gCyl(0.056, 0.056, 0.022, 'z', 28), MAT.steelDark, [1.10, 0.61, ZA]);
  add('reserv_dir', gCyl(0.04, 0.04, 0.09, 'y', 24), MAT.psFluid, [1.57, 0.765, -0.50]);
  add('reserv_dir', gCyl(0.024, 0.024, 0.02, 'y', 20), MAT.black, [1.57, 0.82, -0.50]);
  tube('mang_dir', [[1.10, 0.665, -0.255], [1.08, 0.66, -0.15], [1.03, 0.52, 0.0], [1.03, 0.43, 0.14], [1.06, 0.40, 0.19]], 0.008, MAT.hose);
  tube('mang_dir', [[1.06, 0.38, 0.17], [1.04, 0.45, -0.05], [1.10, 0.62, -0.38], [1.30, 0.74, -0.46], [1.54, 0.73, -0.50]], 0.008, MAT.hose);
  tube('mang_dir', [[1.57, 0.72, -0.47], [1.30, 0.70, -0.40], [1.14, 0.66, -0.31], [1.11, 0.66, -0.29]], 0.009, MAT.hose);
  tube('coluna', [[1.06, 0.435, 0.25], [0.93, 0.54, 0.30], [0.62, 0.76, 0.35], [0.36, 0.925, 0.37]], 0.017, MAT.steelDark);
  sph('coluna', [0.93, 0.54, 0.30], 0.024, MAT.steel);
  /* volante de três raios com a tampa da buzina no centro */
  const c = V(0.30, 0.97, 0.37), ax = V(-0.82, 0.57, 0).normalize();
  const sw = pivotOf('volante_dir', [c.x, c.y, c.z]);
  Object.assign(sw.userData, { abs: true, owner: 'volante_dir', absPos: c.clone() });
  ANIM.wheel = { g: sw, ax };
  const w = add('volante_dir', gTorus(0.185, 0.017, 'z', 10, 56), MAT.black, [c.x, c.y, c.z], null, sw);
  w.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
  const hub = add('volante_dir', gCyl(0.07, 0.078, 0.05, 'y', 28), MAT.black, [c.x + ax.x * 0.012, c.y + ax.y * 0.012, c.z], null, sw);
  hub.quaternion.setFromUnitVectors(UPY, ax);
  const u = V(0, 0, 1), v = ax.clone().cross(u).normalize();
  [Math.PI / 2, Math.PI * 7 / 6, -Math.PI / 6].forEach(a => {
    const d = u.clone().multiplyScalar(Math.cos(a)).addScaledVector(v, Math.sin(a));
    rod('volante_dir', [c.x, c.y, c.z], [c.x + d.x * 0.18, c.y + d.y * 0.18, c.z + d.z * 0.18], 0.012, MAT.black, sw);
  });
  add('ign_chave', gCyl(0.022, 0.022, 0.05, 'y', 16), MAT.steelDark, [0.46, 0.86, 0.29]);
  box('comutadores', [0.38, 0.92, 0.47], [0.03, 0.03, 0.08], MAT.black, 0.008);
  box('comutadores', [0.38, 0.92, 0.27], [0.03, 0.03, 0.08], MAT.black, 0.008);
}

function buildFuelRear() {
  box('tanque', [-0.68, 0.245, -0.14], [0.46, 0.15, 0.56], MAT.plastic, 0.045);
  add('bomba_comb', gCyl(0.05, 0.05, 0.13, 'y', 24), MAT.whiteRes, [-0.68, 0.26, -0.22]);
  add('bomba_comb', gCyl(0.072, 0.072, 0.008, 'y', 28), MAT.black, [-0.68, 0.325, -0.22]);
  rod('boia', [-0.68, 0.23, -0.22], [-0.56, 0.20, -0.02], 0.003, MAT.steel);
  box('boia', [-0.56, 0.20, -0.02], [0.04, 0.02, 0.03], MAT.black, 0.005);
  tube('linhas_comb', [[-0.68, 0.335, -0.26], [-0.55, 0.345, -0.34], [-0.46, 0.30, -0.45], [-0.40, 0.215, -0.45], [-0.36, 0.205, -0.45]], 0.005, MAT.steel);
  tube('linhas_comb', [[-0.24, 0.205, -0.45], [0.40, 0.205, -0.42], [0.85, 0.215, -0.40]], 0.005, MAT.steel);
  add('filtro_comb', gCyl(0.025, 0.025, 0.12, 'x', 20), MAT.alu, [-0.30, 0.205, -0.45]);
  box('filtro_comb', [-0.30, 0.232, -0.45], [0.03, 0.012, 0.05], MAT.steelDark, 0.003);
  tube('bocal', [[-1.48, 0.86, -0.78], [-1.45, 0.76, -0.62], [-1.32, 0.58, -0.46], [-1.12, 0.40, -0.40], [-0.98, 0.32, -0.38], [-0.91, 0.30, -0.36]], 0.022, MAT.black);
  add('canister', gCyl(0.04, 0.04, 0.16, 'y', 24), MAT.black, [1.62, 0.50, -0.46]);
  tube('canister', [[-0.80, 0.33, -0.30], [-0.88, 0.30, -0.44], [-0.70, 0.21, -0.50], [0.40, 0.21, -0.50], [0.85, 0.22, -0.46], [1.10, 0.30, -0.42], [1.45, 0.42, -0.44], [1.60, 0.43, -0.46]], 0.004, MAT.cable);
  tube('canister', [[1.62, 0.59, -0.46], [1.55, 0.76, -0.44], [1.40, 0.84, -0.36], [1.20, 0.84, -0.30], [1.08, 0.82, -0.24], [1.06, 0.80, -0.22]], 0.004, MAT.cable);
}

function buildInterior() {
  box('painel', [0.58, 0.835, 0], [0.34, 0.27, 1.34], MAT.dash, 0.05);
  box('painel', [0.47, 0.995, 0.37], [0.13, 0.045, 0.30], MAT.dash, 0.02);
  box('painel', [0.42, 0.60, 0], [0.12, 0.24, 0.24], MAT.dash, 0.02);
  box('painel', [0.42, 0.78, -0.40], [0.02, 0.12, 0.32], MAT.plastic, 0.01);
  box('quadro', [0.44, 0.94, 0.37], [0.02, 0.10, 0.28], MAT.black, 0.01);
  [[0.28, 0.043], [0.46, 0.043]].forEach(([z, r]) => {
    add('quadro', gCyl(r, r, 0.004, 'x', 32), MAT.grille, [0.428, 0.94, z]);
    add('quadro', gTorus(r, 0.003, 'x', 4, 32), MAT.chrome, [0.427, 0.94, z]);
  });
  box('quadro', [0.428, 0.94, 0.37], [0.004, 0.045, 0.07], MAT.lensAmber);
  box('radio', [0.41, 0.84, 0], [0.02, 0.05, 0.18], MAT.black, 0.004);
  box('radio', [0.399, 0.845, 0], [0.002, 0.015, 0.08], MAT.lensAmber);
  box('console', [0.02, 0.36, 0], [0.62, 0.12, 0.22], MAT.dash, 0.03);
  S.forEach(s => {
    box('bancos_diant', [-0.20, 0.44, s * 0.36], [0.50, 0.11, 0.46], MAT.fabric, 0.04);
    box('bancos_diant', [-0.48, 0.79, s * 0.36], [0.10, 0.60, 0.46], MAT.fabric, 0.045, [0, 0, 0.18]);
    box('bancos_diant', [-0.545, 1.16, s * 0.36], [0.08, 0.13, 0.24], MAT.fabric, 0.03, [0, 0, 0.18]);
    for (const dz of [-0.17, 0.17]) box('bancos_diant', [-0.20, 0.335, s * 0.36 + dz], [0.44, 0.02, 0.03], MAT.steelDark);
    rod('cintos', [-0.24, 1.17, s * 0.70], [-0.40, 0.50, s * 0.16], 0.009, MAT.black);
    rod('cintos', [-0.56, 0.42, s * 0.61], [-0.40, 0.50, s * 0.16], 0.009, MAT.black);
    box('cintos', [-0.25, 0.44, s * 0.70], [0.06, 0.10, 0.04], MAT.black, 0.01);
    rod('cintos', [-1.24, 1.08, s * 0.64], [-0.96, 0.50, s * 0.20], 0.008, MAT.black);
  });
  box('banco_tras', [-0.92, 0.44, 0], [0.46, 0.11, 1.08], MAT.fabric, 0.04);
  box('banco_tras', [-1.18, 0.77, 0], [0.10, 0.56, 1.08], MAT.fabric, 0.045, [0, 0, 0.22]);
  box('porta_malas', [-1.53, 0.535, 0], [0.62, 0.02, 1.08], MAT.carpet, 0.005);
  box('porta_malas', [-1.47, 0.99, 0], [0.40, 0.012, 1.10], MAT.carpet, 0.005);
  box('retrovisor_int', [0.20, 1.37, 0], [0.02, 0.06, 0.21], MAT.black, 0.01);
  rod('retrovisor_int', [0.20, 1.395, 0], [0.15, 1.42, 0], 0.006, MAT.black);
}

function buildStructure() {
  const sh = new THREE.Shape([[0.90, 0.93], [0.93, 0.60], [0.80, 0.235], [0.78, 0.235], [0.91, 0.60], [0.88, 0.93]].map(p => new THREE.Vector2(p[0], p[1])));
  const fg = new THREE.ExtrudeGeometry(sh, { depth: 1.26, bevelEnabled: false }); fg.translate(0, 0, -0.63);
  add('corta_fogo', fg, MAT.under);
  box('monobloco', [0.90, 0.91, 0], [0.09, 0.05, 1.28], MAT.under);
  S.forEach(s => {
    add('monobloco', gCyl(0.085, 0.085, 0.10, 'y', 32), MAT.paint, [XFA + 0.03, 0.82, s * 0.535]);
    box('monobloco', [1.365, 0.37, s * 0.50], [0.83, 0.075, 0.065], MAT.under, 0.01);
    add('monobloco', gCyl(0.07, 0.07, 0.08, 'y', 32), MAT.under, [XRA - 0.10, 0.64, s * 0.545]);
    box('travessa_frontal', [1.785, 0.47, s * 0.37], [0.035, 0.46, 0.035], MAT.paint);
  });
  box('travessa_frontal', [1.785, 0.72, 0], [0.045, 0.045, 1.14], MAT.paint, 0.01);
  box('travessa_frontal', [1.785, 0.25, 0], [0.035, 0.035, 0.78], MAT.paint);
  box('viga_dianteira', [1.955, 0.42, 0], [0.045, 0.10, 0.96], MAT.steelDark, 0.01);
  box('viga_traseira', [-1.874, 0.47, 0], [0.035, 0.09, 0.96], MAT.steelDark, 0.01);
  box('fech_capo', [1.785, 0.755, 0], [0.04, 0.04, 0.06], MAT.steelDark, 0.006);
  tube('fech_capo', [[1.775, 0.74, 0.03], [1.72, 0.72, 0.40], [1.30, 0.66, 0.60], [0.90, 0.56, 0.64], [0.60, 0.40, 0.64]], 0.003, MAT.cable);
  box('fech_capo', [0.60, 0.40, 0.635], [0.06, 0.03, 0.02], MAT.black, 0.005);
  { // vareta do capô: presa no painel frontal, apoia no capô quando aberto
    const g = new THREE.Group(); reg('capo').group.add(g);
    const m = add('capo', new THREE.CylinderGeometry(0.005, 0.005, 1, 8), MAT.steel, null, null, g);
    ANIM.prop = { mesh: m, A: V(1.785, 0.745, -0.42), Hc: V(1.70, topY(1.70, 0.42) - 0.02, -0.42) };
    setBar(m, ANIM.prop.A, V(1.785, 0.745, -0.05)); m.visible = false;
  }
}

/* ===== Fixadores e encaixes: posições ===== */
function fxPositions() {
  const P = {}, A = (id, p, d, s, mount) => ((P[id] = P[id] || { pts: [], paths: [] }).pts.push([p, d, s, mount]));
  const Bp = (id, pts, r, mount, closed) => ((P[id] = P[id] || { pts: [], paths: [] }).paths.push([pts, r, mount, closed]));
  const up = [0, 1, 0], dn = [0, -1, 0], px = [1, 0, 0], nx = [-1, 0, 0], pz = [0, 0, 1], nz = [0, 0, -1];
  const nrm = (x, s) => surf(x, s).n, neg = v => [-v[0], -v[1], -v[2]];
  /* ---- mecânica ---- */
  [XFA, XRA].forEach((X, xi) => S.forEach((s, si) => { for (let k = 0; k < 4; k++) { const a = Math.PI / 4 + k * Math.PI / 2; A('fx_roda', [X + 0.05 * Math.cos(a), WY + 0.05 * Math.sin(a), s * 0.762], [0, 0, s], 0.016, 'w' + (xi * 2 + si)); } }));
  S.forEach((s, si) => A('fx_cubo', [XFA, WY, s * 0.766], [0, 0, s], 0.026, 'w' + si));
  MAINS.forEach(z => { A('fx_cabecote', [EXc - 0.075, 0.708, z], up, 0.012); A('fx_cabecote', [EXc + 0.075, 0.708, z], up, 0.012); });
  CYLZ.forEach((z, i) => { const ph = (i === 0 || i === 3) ? 0 : Math.PI; for (const dz of [-0.012, 0.012]) A('fx_bielas', [EXc + 0.03, EYc + CR * Math.cos(ph) - 0.02, z + dz], px, 0.008); });
  MAINS.forEach(z => { A('fx_mancais', [EXc - 0.045, 0.285, z], dn, 0.011); A('fx_mancais', [EXc + 0.045, 0.285, z], dn, 0.011); });
  for (let k = 0; k < 5; k++) { const x = EXc - 0.08 + k * 0.04; A('fx_carter', [x, 0.27, 0.078], dn, 0.007); A('fx_carter', [x, 0.27, -0.282], dn, 0.007); }
  [-0.03, -0.17].forEach(z => { A('fx_carter', [EXc - 0.099, 0.27, z], dn, 0.007); A('fx_carter', [EXc + 0.099, 0.27, z], dn, 0.007); });
  A('fx_bujao', [EXc + 0.05, 0.184, -0.18], dn, 0.013);
  CYLZ.forEach(z => A('fx_velas', [EXc + 0.04, 0.625, z], [0.45, 0.89, 0], 0.01));
  [[EXc - 0.005, 0.75], [EXc + 0.065, 0.75], [EXc + 0.03, 0.682]].forEach(([x, y]) => A('fx_bobina', [x, y, 0.152], pz, 0.007));
  for (const z of [-0.255, -0.15, -0.035, 0.07]) { A('fx_tampa_valv', [EXc - 0.07, 0.772, z], up, 0.008); A('fx_tampa_valv', [EXc + 0.07, 0.772, z], up, 0.008); }
  [-0.174, -0.092, -0.010, -0.256].forEach(z => { A('fx_coletor_esc', [1.454, 0.62, z], px, 0.011); A('fx_coletor_esc', [1.454, 0.675, z], px, 0.011); });
  [-0.174, -0.092, -0.010].forEach(z => { A('fx_coletor_adm', [1.206, 0.67, z], nx, 0.009); A('fx_coletor_adm', [1.206, 0.62, z], nx, 0.009); });
  A('fx_galeria', [1.195, 0.704, 0.03], up, 0.008); A('fx_galeria', [1.195, 0.704, -0.21], up, 0.008);
  [[0.03, 0.03], [-0.03, 0.03], [0.03, -0.03], [-0.03, -0.03]].forEach(([dx, dy]) => A('fx_tbi', [1.11 + dx, 0.705 + dy, 0.104], pz, 0.006));
  A('fx_polia_vira', [EXc, EYc, ZA - 0.014], nz, 0.02);
  {
    let cx = 0, cy = 0; TB.forEach(p => { cx += p[0]; cy += p[1]; }); cx /= TB.length; cy /= TB.length;
    for (let k = 0; k < 6; k++) {
      const p = TB[Math.floor((k + 0.5) * TB.length / 6)], dx = p[0] - cx, dy = p[1] - cy, L = Math.hypot(dx, dy) || 1;
      A('fx_capas', [p[0] + dx / L * 0.014, p[1] + dy / L * 0.014, ZT - 0.04], nz, 0.008);
    }
  }
  A('fx_tensor_dent', [XTE + 0.006, YTE + 0.004, ZT - 0.02], nz, 0.011);
  A('fx_polia_comando', [CX, CY, ZT - 0.014], nz, 0.014);
  for (let k = 0; k < 3; k++) { const a = k * TAU / 3 + 0.5; A('fx_bomba_agua', [XPU + 0.05 * Math.cos(a), YPU + 0.05 * Math.sin(a), ZT + 0.014], nz, 0.007); }
  [[-0.022, 0.02], [0.022, 0.02], [0, -0.022]].forEach(([dx, dy]) => A('fx_flange', [EXc - 0.05 + dx, 0.645 + dy, 0.134], pz, 0.007));
  [[1.49, 0.46, 0.07], [1.49, 0.50, 0.07]].forEach(p => A('fx_termostato', p, px, 0.008));
  A('fx_alternador', [1.555, 0.580, ZA + 0.093], pz, 0.011); A('fx_alternador', [1.644, 0.669, ZA + 0.092], pz, 0.011);
  [[1.18, 0.495, 0.162], [1.18, 0.395, 0.162]].forEach(p => A('fx_partida', p, pz, 0.011));
  [[EXc, 0.835, -0.45], [EXc, 0.835, -0.49], [EXc - 0.04, 0.817, -0.55]].forEach(p => A('fx_coxins', p, up, 0.012));
  [[1.26, 0.617, 0.41], [1.26, 0.622, 0.50], [1.26, 0.622, 0.58]].forEach(p => A('fx_coxins', p, up, 0.012));
  A('fx_coxins', [1.03, 0.287, -0.02], up, 0.012);
  for (let k = 0; k < 7; k++) { const a = -0.3 + k * 0.9; A('fx_cambio', [EXc + 0.16 * Math.cos(a), EYc + 0.16 * Math.sin(a), 0.105], pz, 0.011); }
  A('fx_bujao_cambio', [1.427, 0.36, 0.33], px, 0.013);
  for (let k = 0; k < 6; k++) { const a = k * TAU / 6; A('fx_plato', [EXc + 0.103 * Math.cos(a), EYc + 0.103 * Math.sin(a), 0.158], pz, 0.008); A('fx_volante', [EXc + 0.03 * Math.cos(a), EYc + 0.03 * Math.sin(a), 0.13], pz, 0.009); }
  A('fx_cabo_emb', [0.66, 0.60, 0.46], nx, 0.008); A('fx_cabo_emb', [1.25, 0.61, 0.185], up, 0.008);
  [[1.575, 0.351, -0.192], [1.575, 0.219, -0.192], [1.575, 0.351, -0.28]].forEach(p => A('fx_compressor', p, pz, 0.01));
  [[1.07, 0.655, -0.253], [1.13, 0.655, -0.253], [1.10, 0.57, -0.253]].forEach(p => A('fx_bomba_dir', p, pz, 0.01));
  [[1.10, 0.665, -0.24], [1.06, 0.40, 0.205], [1.57, 0.715, -0.465]].forEach(p => A('fx_mang_dir', p, up, 0.009));
  S.forEach((s, si) => {
    const ang = Math.atan2(0.05, -0.10), rp = (r, t, z) => [XFA + Math.cos(ang) * r - Math.sin(ang) * t, WY + Math.sin(ang) * r + Math.cos(ang) * t, s * z];
    const yw = 'y' + si;
    for (const k of [-1, 1]) { A('fx_pinca', rp(0.0902, 0.0576 * k, 0.6062), [0, 0, -s], 0.011, yw); A('fx_pinca', rp(0.1075, 0.0576 * k, 0.6302), [0, 0, -s], 0.012, yw); }
    for (const dx of [-0.04, 0.04]) A('fx_amort_d', [XFA + 0.03 + dx, 0.872, s * 0.535], up, 0.011);
    A('fx_amort_d', [XFA + 0.0383, 0.3889, s * 0.6392], px, 0.012); A('fx_amort_d', [XFA + 0.04, 0.4289, s * 0.6327], px, 0.012);
    A('fx_bandeja', [XFA + 0.13, 0.20, s * 0.35], px, 0.012); A('fx_bandeja', [XFA - 0.23, 0.23, s * 0.38], up, 0.012); A('fx_bandeja', [XFA, 0.148, s * 0.625], dn, 0.012);
    for (const x of [1.62, 1.02]) A('fx_subchassi', [x, 0.178, s * 0.40], dn, 0.015);
    A('fx_eixo_t', [-0.80, 0.34, s * 0.627], [0, 0, s], 0.013);
    A('fx_amort_t', [XRA - 0.06, 0.195, s * 0.575], dn, 0.012); A('fx_amort_t', [XRA - 0.10, 0.645, s * 0.54], up, 0.012);
    for (const x of [-0.52, -0.86]) A('fx_tanque', [x, 0.326, s > 0 ? 0.11 : -0.39], up, 0.011);
    for (const x of [0.03, -0.43]) for (const dz of [-0.17, 0.17]) A('fx_bancos', [x, 0.345, s * 0.36 + dz], up, 0.011);
    A('fx_cintos', [-0.24, 1.17, s * 0.69], [0, 0, -s], 0.011); A('fx_cintos', [-0.56, 0.42, s * 0.605], [0, 0, -s], 0.011); A('fx_cintos', [-0.40, 0.37, s * 0.16], up, 0.011);
    A('fx_caixa_dir', [XFA - 0.13, 0.325, s * 0.595], dn, 0.011, yw);
    for (const dx of [-0.03, 0.03]) A('fx_caixa_dir', [1.06 + dx, 0.38, s * 0.14], up, 0.011);
  });
  [[-0.96, 0.367, 0.12], [-0.96, 0.367, 0.16]].forEach(p => A('fx_valv_equal', p, up, 0.008)); A('fx_valv_equal', [-1.02, 0.33, 0.20], up, 0.007);
  A('fx_bateria', [1.49, 0.832, 0.37], up, 0.008); A('fx_bateria', [1.35, 0.832, 0.37], up, 0.008); A('fx_bateria', [1.42, 0.64, 0.52], pz, 0.01);
  [[1.54, 0.312, -0.06], [1.54, 0.312, -0.14], [0.92, 0.166, 0.03], [0.92, 0.166, -0.03], [-1.45, 0.275, 0.38], [-1.45, 0.275, 0.43]].forEach((p, i) => A('fx_escape', p, i < 2 ? dn : i < 4 ? px : up, 0.01));
  A('fx_sonda', [1.542, 0.59, -0.13], [0.45, 0.75, -0.45], 0.012); A('fx_sonda', [1.535, 0.302, -0.105], [0.9, 0.2, 0], 0.012);
  A('fx_sens_ckp', [EXc - 0.07, 0.322, 0.085], up, 0.007);
  A('fx_filtro_comb', [-0.362, 0.205, -0.45], nx, 0.008); A('fx_filtro_comb', [-0.238, 0.205, -0.45], px, 0.008); A('fx_filtro_comb', [-0.30, 0.24, -0.45], up, 0.007);
  A('fx_volante_dir', [0.285, 0.98, 0.37], [-0.82, 0.57, 0], 0.014, 'sw');
  [[0.68, 0.83, 0.30], [0.68, 0.83, 0.42], [0.52, 0.88, 0.37], [0.935, 0.565, 0.30]].forEach(p => A('fx_coluna', p, up, 0.01));
  A('fx_estepe', [-1.55, 0.53, 0], up, 0.015);
  [[EXc - 0.05, 0.645, 0.155], [1.70, 0.58, 0.29], [1.70, 0.34, 0.29], [1.49, 0.47, 0.095], [0.95, 0.66, 0.03], [EXc - 0.075, 0.645, 0.13], [1.47, 0.805, 0.04], [1.11, 0.705, 0.165], [1.10, 0.75, 0.04], [1.06, 0.74, 0.36]].forEach(p => A('fx_mangueiras', p, up, 0.007));
  A('fx_filtro_oleo', [1.434, 0.34, 0.035], px, 0.012);
  A('fx_ecu', [0.98, 0.78, 0.582], nz, 0.007); A('fx_ecu', [1.10, 0.68, 0.582], nz, 0.007);
  A('fx_res_pf', [1.695, 0.73, -0.55], px, 0.007); A('fx_res_pf', [1.695, 0.67, -0.55], px, 0.007);
  A('fx_vaso', [1.045, 0.79, -0.48], px, 0.007); A('fx_vaso', [1.045, 0.71, -0.48], px, 0.007);
  A('fx_limpador', [0.765, topY(0.765, 0.44) + 0.014, -0.44], up, 0.009); A('fx_limpador', [0.765, topY(0.765, 0.04) + 0.014, 0.04], up, 0.009);
  A('fx_limpador', onSurf(XG + 0.02, 0, 0.022), nrm(XG + 0.02, 0), 0.009, 'tail');

  /* ---- lataria: parafusos ---- */
  S.forEach(s => {
    [1.02, 1.26, 1.50, 1.74].forEach(x => A('fx_paralama', onSurf(x, s * (sRow(x, J.UE) + 0.006), -0.012), up, 0.008));
    A('fx_paralama', onSurf(1.79, s * (sRow(1.79, J.SB) + sRow(1.79, J.R058)) / 2, -0.014), nrm(1.79, s * 0.4), 0.008);
    A('fx_paralama', onSurf(0.835, s * (sRow(0.835, J.S0) - 0.012), -0.008), nrm(0.835, s * sRow(0.835, J.S0)), 0.008);
    A('fx_paralama', onSurf(0.832, s * sAtY(0.832, 0.85), -0.03), nx, 0.008);
    [0.44, 0.54].forEach(y => A('fx_parachoque', onSurf(AF1 + 0.035, s * sAtY(AF1 + 0.035, y), -0.012), nrm(AF1 + 0.035, s * sAtY(AF1 + 0.035, y)), 0.007));
    [0.40, 0.50].forEach(y => A('fx_parachoque_t', onSurf(AR0 - 0.035, s * sAtY(AR0 - 0.035, y), -0.012), nrm(AR0 - 0.035, s * sAtY(AR0 - 0.035, y)), 0.007));
    A('fx_parachoque', onSurf(1.95, s * (sRow(1.95, J.F0) - 0.24), 0.002), dn, 0.007);
    A('fx_parachoque_t', onSurf(-1.86, s * (sRow(-1.86, J.F0) - 0.28), 0.002), dn, 0.007);
    A('fx_guias_pcd', onSurf(1.76, s * sRow(1.76, J.R058), -0.016), [0, 0, s], 0.02);
    A('fx_guias_pct', onSurf(-1.79, s * sRow(-1.79, J.R0615), -0.016), [0, 0, s], 0.02);
    for (let k = 0; k < 6; k++) { const x = AF0 + 0.06 + k * 0.125; A('fx_forros', onSurf(x, s * (sRow(x, J.S0) - 0.008), -0.006), dn, 0.009); }
    for (const dx of [0.05, 0.08]) A('fx_capo', [HINGE[0] + dx, topY(HINGE[0] + dx, 0.56) - 0.03, s * 0.56], dn, 0.009, 'hood');
    for (const dy of [-0.05, -0.02]) A('fx_capo', [HINGE[0] + 0.012, HINGE[1] + dy, s * 0.567], [0, 0, s], 0.009);
    /* dobradiças e limitadores: portas da frente (mount 'door') e de trás (mount 'rdoor') */
    [[XA, DOORAX[s], 'door'], [XB, RDOORAX[s], 'rdoor']].forEach(([xa, ax, mt]) => {
      [0.52, 0.79].forEach(y => {
        for (const dy of [-0.015, 0.015]) {
          A('fx_dobradicas', [xa + 0.036, y + dy, s * (sideZ(xa + 0.036, y) - 0.028)], [0, 0, s], 0.009);
          A('fx_dobradicas', [xa - 0.018, y + dy, ax[2] + s * 0.003], [0, 0, s], 0.009, mt);
        }
      });
      A('fx_dobradicas', [xa + 0.04, 0.655, s * (sideZ(xa + 0.04, 0.655) - 0.055)], px, 0.009);
    });
    [[XB, 'door'], [XD2, 'rdoor']].forEach(([xe, mt]) => {
      [0.71, 0.74, 0.77].forEach(y => A('fx_fech_portas', [xe + 0.004, y, s * (sideZ(xe + 0.015, y) - 0.03)], nx, 0.007, mt));
      [0.72, 0.76].forEach(y => A('fx_fech_portas', [xe - 0.006, y, s * (sideZ(xe - 0.01, y) - 0.03)], px, 0.008));
    });
    [[0, 0.012], [0.02, -0.01], [-0.02, -0.01]].forEach(([dx, dy]) => { const p = onSurf(0.775 + dx, s * (sRow(0.775, J.SB) - 0.012), -0.025); A('fx_retrovisor', [p[0], p[1] + dy, p[2]], [0, 0, -s], 0.008, 'door'); });
    [0.12, 0.46].forEach(x => A('fx_vidro_porta', [x, 0.64, s * 0.752], [0, 0, s], 0.008, 'door'));
    [-0.48, -0.30].forEach(x => A('fx_vidro_porta_t', [x, 0.64, s * 0.752], [0, 0, s], 0.008, 'rdoor'));
    [[-0.02, 0.54], [-0.02, 0.84], [0.62, 0.54], [0.62, 0.84]].forEach(([x, y]) => A('fx_maq_vidro', [x, y, s * 0.728], [0, 0, -s], 0.008, 'door'));
    [[-0.70, 0.56], [-0.30, 0.84], [-0.50, 0.66]].forEach(([x, y]) => A('fx_maq_vidro_t', [x, y, s * 0.728], [0, 0, -s], 0.008, 'rdoor'));
    for (let k = 0; k < 4; k++) {
      const x = -0.08 + k * 0.25;
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.SB) + 0.03), -0.074), [0, 0, s], 0.01, 'door');
      A('fx_forro_porta', onSurf(x, s * (sRow(x, J.R032) - 0.045), -0.074), [0, 0, s], 0.01, 'door');
    }
    for (let k = 0; k < 3; k++) {
      const x = -0.78 + k * 0.27;
      A('fx_forro_porta_t', onSurf(x, s * (sRow(x, J.SB) + 0.03), -0.074), [0, 0, s], 0.01, 'rdoor');
      A('fx_forro_porta_t', onSurf(x, s * (sRow(x, J.R032) - 0.045), -0.074), [0, 0, s], 0.01, 'rdoor');
    }
    /* tampa traseira: dobradiças (porca no teto e parafuso na tampa) e pinos dos amortecedores */
    for (const dz of [-0.018, 0.018]) {
      A('fx_tampa', [TAILH[0] + 0.03, TAILH[1] - 0.004, s * 0.43 + dz], dn, 0.009);
      A('fx_tampa', [TAILH[0] - 0.055, topY(TAILH[0] - 0.055, 0.43) - 0.024, s * 0.43 + dz], dn, 0.009, 'tail');
    }
    A('fx_amort_tampa', [STRUT[s].B.x, STRUT[s].B.y, STRUT[s].B.z], [0, 0, s], 0.009);
    A('fx_amort_tampa', [STRUT[s].Gc.x, STRUT[s].Gc.y, STRUT[s].Gc.z], [0, 0, s], 0.009, 'tail');
    [[1.80, J.SB, 0.004], [1.93, J.SB, 0.004]].forEach(([x, j, d]) => A('fx_farol', onSurf(x, s * (sRow(x, j) + d), -0.02), up, 0.008));
    A('fx_farol', onSurf(1.86, s * (sRow(1.86, J.R058) - 0.006), -0.02), dn, 0.008);
    [0.70, 0.80, 0.90].forEach(y => { const x = -1.81, sv = s * sAtY(x, y); A('fx_lanterna', onSurf(x, sv, -0.03), neg(nrm(x, sv)), 0.007); });
    A('fx_travessa', [1.785, 0.743, s * 0.50], up, 0.011); A('fx_travessa', [1.785, 0.743, s * 0.56], up, 0.011);
    A('fx_viga', [1.933, 0.39, s * 0.44], px, 0.012); A('fx_viga', [1.933, 0.45, s * 0.44], px, 0.012);
    A('fx_viga_t', [-1.857, 0.44, s * 0.44], nx, 0.012); A('fx_viga_t', [-1.857, 0.50, s * 0.44], nx, 0.012);
  });
  [-0.32, -0.11, 0.11, 0.32].forEach(sv => A('fx_parachoque', onSurf(1.90, sv, -0.014), up, 0.007));
  A('fx_parachoque', onSurf(1.95, sRow(1.95, J.F0), 0.002), dn, 0.007);
  [-0.38, -0.13, 0.13, 0.38].forEach(sv => A('fx_parachoque_t', onSurf(-1.885, sv, -0.01), [-0.3, 1, 0], 0.007));
  A('fx_fech_capo', [1.785, 0.777, 0.02], up, 0.01); A('fx_fech_capo', [1.785, 0.777, -0.02], up, 0.01);
  for (const dz of [-0.025, 0.025]) { A('fx_fech_tampa', [XL + 0.03, 0.722, dz], dn, 0.008, 'tail'); A('fx_fech_tampa', [XL + 0.024, 0.641, dz * 1.4], up, 0.008); }
  [-0.28, -0.09, 0.09, 0.28].forEach(sv => A('fx_grade', onSurf(1.93, sv, -0.006), neg(nrm(1.93, sv)), 0.008));
  [-0.54, -0.32, -0.11, 0.11, 0.32, 0.54].forEach(sv => A('fx_grade_torpedo', onSurf(XC - 0.03, sv, 0.001), up, 0.009));
  { const z = sideZ(-1.48, 0.86) - 0.02; [0.81, 0.91].forEach(y => A('fx_bocal', [-1.48, y, -z], nz, 0.008)); }

  /* ---- lataria: pontos de solda ---- */
  const W = (id, x, s, off) => A(id, onSurf(x, s, off == null ? 0.001 : off), nrm(x, s), 0.011);
  const along = (x0, x1, step, f) => { const n = Math.max(1, Math.round(Math.abs(x1 - x0) / step)); for (let k = 0; k <= n; k++) f(x0 + (x1 - x0) * k / n); };
  const across = (x, S0, step, f) => { const n = Math.max(1, Math.round(2 * S0 / step)); for (let k = 0; k <= n; k++) f(-S0 + 2 * S0 * k / n); };
  S.forEach(s => {
    along(XT + 0.02, XWT - 0.02, 0.045, x => W('fx_solda_teto', x, s * (sRow(x, J.UE) - 0.012)));
    along(AR0 + 0.03, AR1 - 0.03, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.S0) - 0.012)));
    along(XLF + 0.02, AR0 - 0.02, 0.05, x => W('fx_solda_laterais', x, s * (sRow(x, J.R0615) - 0.012)));
    along(XLF + 0.02, XD2 - 0.02, 0.04, x => W('fx_solda_laterais', x, s * (sRow(x, J.UE) - 0.008)));
    { const x = XD2 - 0.012, a = sRow(x, J.UE) + 0.01, b = sRow(x, J.S0) - 0.01; for (let k = 0; k <= 14; k++) W('fx_solda_laterais', x, s * (a + (b - a) * k / 14)); }
    along(XD2 + 0.03, XA - 0.03, 0.05, x => { W('fx_solda_soleiras', x, s * (sRow(x, J.R032) + 0.012)); W('fx_solda_soleiras', x, s * (sRow(x, J.S0) + 0.02)); });
    along(XWT + 0.02, XA - 0.04, 0.045, x => W('fx_solda_colunas', x, s * (sRow(x, J.UE) - 0.012)));
    for (let k = 0; k <= 8; k++) { const y = 0.37 + k * 0.028; A('fx_solda_painel_tras', [-1.857, y, s * 0.53], nx, 0.011); }
  });
  across(XWT - 0.012, sRow(XWT, J.T1) - 0.03, 0.07, sv => W('fx_solda_teto', XWT - 0.012, sv));
  across(XT + 0.014, sRow(XT, J.UE) - 0.03, 0.07, sv => W('fx_solda_teto', XT + 0.014, sv));
  across(XWB + 0.006, sRow(XWB, J.T1) - 0.02, 0.07, sv => W('fx_solda_colunas', XWB + 0.006, sv));
  for (let k = 0; k <= 17; k++) A('fx_solda_painel_tras', [-1.857, 0.62, -0.51 + k * 0.06], nx, 0.011);

  /* ---- colas (cordões) ---- */
  const bead = (x0, x1, hi, inset) => {
    const Q = [], a = x0 + inset, b = x1 - inset, L = x => -(hi(x) - inset), H = x => hi(x) - inset, n = 16;
    for (let k = 0; k <= n; k++) { const x = a + (b - a) * k / n; Q.push([x, L(x)]); }
    for (let k = 1; k < 10; k++) { const t = k / 10; Q.push([b, L(b) + (H(b) - L(b)) * t]); }
    for (let k = n; k >= 0; k--) { const x = a + (b - a) * k / n; Q.push([x, H(x)]); }
    for (let k = 9; k >= 1; k--) { const t = k / 10; Q.push([a, L(a) + (H(a) - L(a)) * t]); }
    return Q;
  };
  const toPts = (Q, off) => Q.map(([x, s]) => onSurf(x, s, off));
  Bp('fx_cola_parabrisa', toPts(bead(XWT, XWB, x => sRow(x, J.T1), 0.014), -0.008), 0.0045, null, true);
  Bp('fx_cola_vidro_tras', toPts(bead(XG, XT2, x => sRow(x, J.T2), 0.014), -0.008), 0.0045, 'tail', true);
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
