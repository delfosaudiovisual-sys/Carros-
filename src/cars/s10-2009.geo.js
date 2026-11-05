/* ===== Chevrolet S10 Executive 2009 cabine dupla 4x4, 2.8 turbodiesel: geometria 3D =====
   Coordenadas do carro: x para a frente, y para cima, z para a esquerda (lado do motorista). Medidas em metros.
   Medidas do manual (11/2008): 5,260 m de comprimento, entre-eixos 3,122 m, bitolas 1,454 / 1,399 m, 1,661 m de altura,
   balanços de 0,936 m na frente e 1,199 m atrás, pneus 235/70 R16, caçamba de 1,477 × 1,438 m com 0,43 m de altura.
   Picape sobre chassi de longarinas: a carroceria (cabine e caçamba) é uma casca só no gerador, com a fresta entre as duas,
   e a caçamba aberta por cima. Motor longitudinal com o virabrequim ao longo de x. */
(window.CAR_GEO = window.CAR_GEO || {})['s10-2009'] = function (K) {
const { THREE, V, TAU, UPY, S, MAT, std, phy, reg, tag, place, add, kit, pivotOf, box, cyl, tube, route, rod, sph, spring, ribbon, beltPath, plateFromHull,
  gBox, gCyl, gLathe, gTorus, gTube, curveOf, setBar, mono, makeBody, art, ANIM, WHEELS, ROUTES, lerp3 } = K;
const WB = 3.122, XFA = WB / 2, XRA = -WB / 2;     // eixos (x)
const TF = 0.727, TR = 0.70;                       // meia bitola dianteira e traseira
const WR = 0.367, WY = 0.36;                       // raio do pneu 235/70 R16 e altura do centro da roda (carregada)
MAT.chromeTrim = std({ color: 0xdfe3e6, roughness: 0.1, metalness: 1 });
MAT.frame = std({ color: 0x1d1f22, roughness: 0.62, metalness: 0.45 });
MAT.engine = std({ color: 0x3a3e44, roughness: 0.5, metalness: 0.55 });
MAT.engineLt = std({ color: 0x6d7379, roughness: 0.45, metalness: 0.65 });
MAT.diesel = phy({ color: 0xcfc36a, roughness: 0.3, transparent: true, opacity: 0.85 });
MAT.icAlu = std({ color: 0xa3a9af, roughness: 0.38, metalness: 0.8 });
MAT.turbo = std({ color: 0x8a8278, roughness: 0.45, metalness: 0.7 });
MAT.bedLiner = std({ color: 0x18191b, roughness: 0.92 });
MAT.flare = std({ color: 0x2b2d30, roughness: 0.75 });

/* ---------- carroceria: picape cabine dupla (capô longo, cabine alta, caçamba aberta) ---------- */
const BK = {
  zMax: mono([[-2.70, .80], [-2.69, .84], [-2.66, .855], [-1.20, .86], [-1.17, .858], [-1.12, .858], [0, .862], [0.9, .862], [1.6, .862], [2.05, .858], [2.30, .842], [2.40, .82], [2.45, .79], [2.48, .74], [2.497, .68]]),
  yFloor: mono([[-2.70, .74], [-2.60, .725], [-1.22, .72], [-1.19, .60], [-1.16, .52], [0.88, .52], [0.95, .55], [1.10, .56], [2.10, .52], [2.30, .45], [2.497, .42]]),
  yFC: mono([[-2.70, .74], [-2.60, .725], [-1.22, .72], [-1.19, .60], [-1.16, .52], [0.88, .52], [0.95, .55], [1.10, .56], [2.10, .52], [2.30, .45], [2.497, .42]]),
  yBelt: mono([[-2.70, .80], [-2.695, .95], [-2.685, 1.10], [-2.665, 1.17], [-2.62, 1.19], [-1.20, 1.19], [-1.12, 1.20], [0.90, 1.20], [0.98, 1.14], [1.20, 1.11], [2.10, 1.06], [2.32, 1.04], [2.38, 1.03], [2.40, 1.02], [2.405, 1.01], [2.415, .985], [2.44, .905], [2.455, .83], [2.465, .79], [2.48, .76], [2.49, .73], [2.497, .66]]),
  yEdge: mono([[-2.70, .80], [-2.695, .97], [-2.685, 1.14], [-2.665, 1.225], [-2.62, 1.235], [-1.185, 1.235], [-1.172, 1.30], [-1.16, 1.48], [-1.145, 1.58], [-1.10, 1.615], [-1.0, 1.625], [0.12, 1.62], [0.24, 1.585], [0.45, 1.43], [0.70, 1.27], [0.92, 1.155], [0.98, 1.14], [1.40, 1.12], [2.10, 1.09], [2.32, 1.075], [2.38, 1.065], [2.40, 1.055], [2.405, 1.045], [2.415, 1.01], [2.44, .915], [2.455, .835], [2.465, .795], [2.48, .765], [2.49, .735], [2.497, .665]]),
  yTop: mono([[-2.70, .80], [-2.695, .975], [-2.685, 1.145], [-2.665, 1.23], [-2.62, 1.24], [-1.185, 1.24], [-1.172, 1.32], [-1.16, 1.52], [-1.145, 1.625], [-1.10, 1.65], [-1.0, 1.66], [0.12, 1.655], [0.24, 1.62], [0.45, 1.46], [0.70, 1.29], [0.92, 1.17], [0.98, 1.16], [1.40, 1.15], [2.10, 1.12], [2.32, 1.10], [2.38, 1.085], [2.40, 1.075], [2.405, 1.06], [2.415, 1.02], [2.44, .92], [2.455, .84], [2.465, .80], [2.48, .77], [2.49, .74], [2.497, .67]]),
  zEdge: mono([[-2.70, .78], [-2.68, .835], [-2.60, .845], [-1.185, .845], [-1.165, .78], [-1.14, .71], [0.12, .70], [0.30, .72], [0.70, .77], [0.92, .80], [1.0, .805], [2.10, .805], [2.32, .795], [2.42, .77], [2.47, .74], [2.497, .67]])
};
const ROWS = [0.50, 0.56, 0.62, 0.70, 0.78, 0.86, 0.94, 1.02, 1.08, 1.14];
const UPF = [0.35, 0.7, 1.0];
const TOPU = [0.93, 0.86, 0.70, 0.48, 0.24, 0];
/* divisões (x) */
const XF0 = 2.497, XBK = -2.70;
const XGR = 2.405, XGB = 2.455;                    // grade: de cima (no capô) até o para-choque
const XH = 2.39, XC = 0.985, XA = 0.95, XWB = 0.925, XWT = 0.20;   // capô, torpedo, coluna A, base e topo do para-brisa
const XDF = 0.88, XB = -0.20, XBP = -0.15, XD2 = -1.03, XRG = -0.97;   // portas: dianteira até XB, traseira até XD2
const XCB = -1.145, XCG = -1.172, XBF = -1.185;    // traseira da cabine, fresta, frente da caçamba
const XTG = -2.665, XTL = -2.685;                  // tampa da caçamba: aresta de cima e lanternas
const B = makeBody({ XF: XF0, XR: XBK, RA: 0.47, ZN: 0.62, XFA, XRA, WY, BK, ROWS, UPF, TOPU, bulge: [0.012, 0.004],
  cuts: [XGR, XGB, XH, XC, XA, XWB, XWT, XDF, XB, XBP, XD2, XRG, XCB, XCG, XBF, XTG, XTL, 2.41, 2.415, 2.42, 2.425, 2.43, 2.435, 2.44, 2.445, 2.45, 2.46, 2.465, 2.47, 2.48, 2.49, 2.30, 2.36,
    -1.18, -1.175, -1.168, -1.165, -1.16, -1.155, -1.15, -1.14, -1.12, -1.10, -1.06, -0.26, -0.22, 0.90, 0.86, 0.02, 0.40, 0.60,
    -2.695, -2.69, -2.68, -2.675, -2.67, -2.66, -2.65, -2.62, -2.55, -1.30, -1.40] });
const { XF, XR, AF0, AF1, AR0, AR1, J, surf, sRow, onSurf, sAtY, sideZ, topY, rowFn, cst, RS, RF, rectGeo, panel, glass, loop, edgePath, capGeo, capPt, capPatch, flushPanels } = B;
const sm = t => { t = Math.min(1, Math.max(0, t)); return t * t * (3 - 2 * t); };
/* s (arco a partir do centro do topo) onde a superfície passa por um dado |z|, na faixa de cima */
function sAtZ(x, z) { let a = 0, b = sRow(x, J.UE); for (let k = 0; k < 28; k++) { const m = (a + b) / 2; if (surf(x, m).p[2] < z) a = m; else b = m; } return (a + b) / 2; }
const zf = z => x => sAtZ(x, z);

/* ---------- articulações: capô, quatro portas e tampa da caçamba (abre para baixo) ---------- */
let hoodPivot, tailPivot, HINGE, TAILH;
const doorPivot = {}, rdoorPivot = {};
function hingePivot(owner, p, side) { const g = pivotOf(owner, p); g.userData.abs = true; g.userData.owner = owner; g.userData.side = side || 0; return g; }
const dp = s => doorPivot[s], rdp = s => rdoorPivot[s];
function updateProp(v) {
  if (!ANIM.prop) return;
  const p = ANIM.prop, h = v * 1.05, c2 = Math.cos(h), s2 = Math.sin(h);
  const dx = p.Hc.x - HINGE[0], dy = p.Hc.y - HINGE[1];
  setBar(p.mesh, p.A, V(HINGE[0] + dx * c2 - dy * s2, HINGE[1] + dx * s2 + dy * c2, p.Hc.z));
}

function buildBody() {
  HINGE = [XC + 0.012, topY(XC, 0.55) - 0.03, 0];
  TAILH = [XBK + 0.02, 0.80, 0];
  hoodPivot = hingePivot('capo', HINGE);
  tailPivot = hingePivot('tampa_cacamba', TAILH);
  S.forEach(s => {
    const da = [XA - 0.01, 0.95, s * (sideZ(XA - 0.01, 0.95) - 0.03)], ra = [XB - 0.02, 0.95, s * (sideZ(XB - 0.02, 0.95) - 0.03)];
    doorPivot[s] = hingePivot('portas', da, s); rdoorPivot[s] = hingePivot('portas_tras', ra, s);
  });
  art('hood', { pivot: hoodPivot, axis: 'z', max: 1.05, onUpdate: updateProp });
  S.forEach(s => { art('door', { side: s, pivot: doorPivot[s], axis: 'y', max: s * 1.15 }); art('rdoor', { side: s, pivot: rdoorPivot[s], axis: 'y', max: s * 1.10 }); });
  art('tail', { pivot: tailPivot, axis: 'z', max: Math.PI / 2 });
  const r = j => rowFn(j), UEp = rowFn(J.UE, 0.016), SH = { shadow: true };

  /* frente: capô comprido com a entrada de ar, grade cromada larga, faróis retangulares e para-choque com neblina */
  panel('capo', [RF(XC, XGR, r(J.UE), 'LRB')], MAT.paint, { shadow: true, parent: hoodPivot });
  panel('capo', [RF(XC + 0.03, XH - 0.03, rowFn(J.UE, -0.03))], MAT.underDS, { off: -0.018, parent: hoodPivot, fl: 0, res: 0.05 });
  { const g = gBox(0.40, 0.045, 0.40, 0.02), q = surf(1.76, 0);
    const m = add('tomada_capo', g, MAT.paint, [1.76, q.p[1] + 0.012, 0], [0, 0, -0.02], hoodPivot); m.castShadow = true;
    box('tomada_capo', [1.965, q.p[1] + 0.018, 0], [0.012, 0.028, 0.32], MAT.grille, 0.004, null, hoodPivot); }
  panel('grade_torpedo', [RF(XA, XC, r(J.UE), 'LRB')], MAT.plastic);
  const slots = []; for (let k = 0; k < 8; k++) slots.push(RS(0.955, 0.975, cst(0.04 + k * 0.08), cst(0.09 + k * 0.08)));
  panel('grade_torpedo', slots, MAT.grille, { off: 0.0015, fl: 0 });
  /* para-lamas: do torpedo à ponta, acima da linha do para-choque, com a caixa de roda */
  panel('paralamas', [RS(XA, AF1, r(J.SB), r(J.S0), 'LB'), RS(AF1, XGB, r(J.SB), r(J.R058), 'B'), RS(XA, XGR, r(J.UE), r(J.SB), 'LT')], MAT.paint, { shadow: true, fl: 0.03 });
  /* faróis: na face da frente, de T4 (borda da grade) até a quina, e dobrando um pouco na lateral */
  const HL = [RS(XGR, XGB, r(J.T4), r(J.UE))];
  panel('farois', HL, MAT.black, { fl: 0 });
  panel('farois', [RS(XGR + 0.004, XGB - 0.004, rowFn(J.T4, 0.012), rowFn(J.UE, -0.008))], MAT.lampHousing, { off: 0.004, fl: 0 });
  panel('piscas', [RS(XGR + 0.004, XGB - 0.004, rowFn(J.UE, -0.07), rowFn(J.UE, -0.008)), RS(2.37, XGR - 0.004, rowFn(J.SB, 0.004), rowFn(J.R068, -0.004))], MAT.lensAmber, { off: 0.006, fl: 0 });
  panel('farois', HL, MAT.lensClear, { off: 0.012, fl: 0.008, flMat: MAT.chromeTrim });
  S.forEach(s => [0.53, 0.68].forEach(zc => {
    const x = (XGR + XGB) / 2, sv = sAtZ(x, zc), q = surf(x, s * sv), c = [q.p[0] + q.n[0] * 0.003, q.p[1] + q.n[1] * 0.003, q.p[2] + q.n[2] * 0.003];
    const d = add('farois', new THREE.SphereGeometry(0.055, 24, 10, 0, TAU, 0, Math.PI / 2), MAT.reflector, c);
    d.quaternion.setFromUnitVectors(V(0, -1, 0), V(q.n[0], q.n[1], q.n[2])); d.scale.set(1, 0.3, 1);
    sph('farois', [c[0] + q.n[0] * 0.004, c[1] + q.n[1] * 0.004, c[2] + q.n[2] * 0.004], 0.014, MAT.bulb);
  }));
  /* grade cromada: moldura, duas lâminas largas e a gravata no meio */
  panel('grade', [RF(XGR, XGB, r(J.T4))], MAT.grille, { off: 0.002, fl: 0.02, flMat: MAT.grille });
  panel('grade', [RF(XGR, XGR + 0.008, r(J.T4)), RF(XGB - 0.008, XGB, r(J.T4)), RS(XGR, XGB, rowFn(J.T4, -0.02), r(J.T4))], MAT.chromeTrim, { off: 0.012, fl: 0.01, flMat: MAT.chromeTrim });
  [0.33, 0.66].forEach(t => { const x0 = XGR + (XGB - XGR) * t; panel('grade', [RF(x0 - 0.004, x0 + 0.004, rowFn(J.T4, -0.02))], MAT.chromeTrim, { off: 0.016, fl: 0.012, flMat: MAT.chromeTrim }); });
  { const x = (XGR + XGB) / 2, q = surf(x, 0), n = V(q.n[0], q.n[1], q.n[2]), c = [q.p[0] + q.n[0] * 0.03, q.p[1] + q.n[1] * 0.03, 0];
    const e = add('grade', gBox(0.012, 0.055, 0.17, 0.004), MAT.chromeTrim, c); e.quaternion.setFromUnitVectors(V(1, 0, 0), n);
    const e2 = add('grade', gBox(0.012, 0.075, 0.06, 0.003), MAT.chromeTrim, c); e2.quaternion.setFromUnitVectors(V(1, 0, 0), n);
    const e3 = add('grade', gBox(0.01, 0.035, 0.14, 0.003), MAT.yellow, [c[0] + q.n[0] * 0.007, c[1], 0]); e3.quaternion.setFromUnitVectors(V(1, 0, 0), n); }
  /* para-choque: a face de cima (abaixo da grade), as pontas e a face de baixo, com a boca de ar e os faróis de neblina */
  panel('para_choque_d', [RF(XGB, XF, r(J.UE)), RS(XGB, XF, r(J.UE), r(J.R058)), RS(AF1, XF, r(J.R058), r(J.F0), 'T')], MAT.paint, SH);
  panel('para_choque_d', [RF(XGB, XGB + 0.004, r(J.UE))], MAT.chromeTrim, { off: 0.004, fl: 0.004, flMat: MAT.chromeTrim });
  add('para_choque_d', capGeo(true, J.F0, J.T6), MAT.paint).castShadow = true;
  add('para_choque_d', capPatch(true, -0.42, 0.42, z => 0.44, z => 0.52, 0.002, 40, 3), MAT.black);
  add('grade', capPatch(true, -0.40, 0.40, z => 0.45, z => 0.51, 0.004, 40, 3), MAT.grille);
  S.forEach(s => { const p = capPt(true, s * 0.60, 0.48, 0.004); add('neblina', gCyl(0.045, 0.045, 0.02, 'x', 28), MAT.chromeTrim, p); add('neblina', gCyl(0.038, 0.038, 0.022, 'x', 28), MAT.lensWhite, [p[0] + 0.004, p[1], p[2]]); });
  { const p = capPt(true, 0, 0.60, 0.008); box('para_choque_d', p, [0.008, 0.13, 0.40], MAT.plate, 0.01); }

  /* portas dianteiras: forro externo, moldura do vidro, painel interno, vidro, forro de dentro e maçaneta cromada */
  panel('portas', [RS(XB, XA, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: dp, fl: 0.045 });
  panel('portas', [RS(XB, XA, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: dp, fl: 0.035 });
  panel('portas', [RS(XDF, XA, UEp, r(J.SB), 'Rl'), RS(XB, XBP, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: dp, fl: 0.035 });
  panel('portas', [RS(XB + 0.012, XA - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: dp, fl: 0, res: 0.05 });
  glass('vidros_portas', RS(XBP, XDF, UEp, r(J.SB)), dp);
  panel('forros_portas', [RS(XB + 0.02, XA - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: dp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XBP, XDF, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: dp });
  panel('fech_portas', [RS(0.02, 0.18, rowFn(J.R084, -0.014), rowFn(J.R084, 0.014))], MAT.chromeTrim, { off: 0.004, fl: 0.004, flMat: MAT.chromeTrim, parent: dp });
  /* portas traseiras (cabine dupla: mais curtas) */
  panel('portas_tras', [RS(XD2, XB, r(J.SB), r(J.R032), 'LRBt')], MAT.paint, { shadow: true, parent: rdp, fl: 0.045 });
  panel('portas_tras', [RS(XD2, XB, r(J.UE), UEp, 'LRTb')], MAT.paint, { shadow: true, parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XB - 0.05, XB, UEp, r(J.SB), 'Rl'), RS(XD2, XRG, UEp, r(J.SB), 'Lr')], MAT.trim, { parent: rdp, fl: 0.035 });
  panel('portas_tras', [RS(XD2 + 0.012, XB - 0.012, r(J.SB), r(J.R032))], MAT.underDS, { off: -0.05, parent: rdp, fl: 0, res: 0.05 });
  glass('vidros_portas_tras', RS(XRG, XB - 0.05, UEp, r(J.SB)), rdp);
  panel('forros_portas_tras', [RS(XD2 + 0.02, XB - 0.02, rowFn(J.SB, 0.012), rowFn(J.R032, -0.03))], MAT.fabricDS, { off: -0.078, parent: rdp, fl: 0, res: 0.05 });
  panel('borrachas', [RS(XRG, XB - 0.05, rowFn(J.SB, -0.005), rowFn(J.SB, 0.007))], MAT.rubber, { off: 0.003, fl: 0.003, flMat: MAT.rubber, parent: rdp });
  panel('fech_portas', [RS(-0.78, -0.62, rowFn(J.R084, -0.014), rowFn(J.R084, 0.014))], MAT.chromeTrim, { off: 0.004, fl: 0.004, flMat: MAT.chromeTrim, parent: rdp });

  /* cabine: soleiras, coluna C, teto, colunas A, para-brisa e a traseira da cabine com o vidro corrediço */
  panel('cabine', [RS(XD2, XA, r(J.R032), r(J.S0), 'TR'), RS(XCG, XD2, r(J.UE), r(J.S0), 'LR')], MAT.paint, { shadow: true, fl: 0.045 });
  panel('cabine', [RF(XCG, XCB, r(J.UE), 'L')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('teto', [RF(XCB, XWT, r(J.UE), 'b')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('colunas', [RS(XWT, XA, r(J.T1), r(J.UE), 'BRt'), RF(XWB, XA, r(J.T1), 'Rl')], MAT.paint, { shadow: true, fl: 0.035 });
  glass('para_brisa', RF(XWT, XWB, r(J.T1)));
  glass('vidro_tras', RF(-1.163, -1.150, zf(0.56)), null, 0.0025);
  panel('vidro_tras', [RF(-1.158, -1.155, zf(0.18))], MAT.chromeTrim, { off: -0.002, fl: 0 });
  panel('luz_freio', [RF(-1.148, -1.146, zf(0.16))], MAT.lensRed, { off: 0.004, fl: 0.004, flMat: MAT.trim });

  /* caçamba: laterais com a caixa de roda, borda de cima, coluna de trás com a lanterna e a tampa (abre para baixo) */
  panel('cacamba', [RS(XTL, XBF, r(J.UE), r(J.S0), 'L'), RS(XTG, XBF, r(J.T1), r(J.UE), 'L')], MAT.paint, { shadow: true, fl: 0.03 });
  panel('cacamba', [RS(XBK, XTL, r(J.T2), r(J.UE))], MAT.paint, SH);
  panel('lanternas', [RS(XBK, XTL + 0.004, r(J.T1), rowFn(J.UE, -0.004)), RS(XTL + 0.002, -2.665, rowFn(J.UE, 0.004), rowFn(J.SB, 0.06))], MAT.lensRed, { off: 0.006, fl: 0.006, flMat: MAT.trim });
  panel('lanternas', [RS(XBK, XTL + 0.004, rowFn(J.T1, 0.004), rowFn(J.T1, 0.022))], MAT.lensWhite, { off: 0.008, fl: 0 });
  panel('tampa_cacamba', [RF(XBK, XTG, r(J.T2), 'B')], MAT.paint, { shadow: true, parent: tailPivot, fl: 0.03 });
  box('cacamba', [XBK + 0.012, 0.71, 0], [0.02, 0.17, 1.60], MAT.paint, 0.008);   // painel de baixo da traseira, entre o para-choque e a tampa
  panel('tampa_cacamba', [RF(XBK + 0.005, XTG, rowFn(J.T2, -0.02))], MAT.underDS, { off: -0.045, parent: tailPivot, fl: 0, res: 0.05 });
  { const q = surf(-2.693, 0), a = Math.atan2(q.n[1], -q.n[0]);
    box('fech_tampa', [q.p[0] + q.n[0] * 0.008, q.p[1] + q.n[1] * 0.008 + 0.03, 0], [0.012, 0.05, 0.22], MAT.chromeTrim, 0.008, [0, 0, -a], tailPivot);
    box('tampa_cacamba', [q.p[0] + q.n[0] * 0.005, q.p[1] + q.n[1] * 0.005 - 0.07, 0], [0.006, 0.05, 0.90], MAT.trim, 0.004, [0, 0, -a], tailPivot); }
  /* por dentro da caçamba: assoalho com o protetor, paredes, frente e as caixas de roda */
  box('cacamba', [-1.93, 0.775, 0], [1.47, 0.03, 1.44], MAT.underDS);
  box('protetor_cacamba', [-1.93, 0.797, 0], [1.46, 0.012, 1.43], MAT.bedLiner, 0.004);
  for (let k = 0; k < 9; k++) box('protetor_cacamba', [-1.93, 0.806, -0.64 + k * 0.16], [1.42, 0.008, 0.05], MAT.bedLiner, 0.003);
  box('protetor_cacamba', [XBF - 0.02, 1.01, 0], [0.012, 0.42, 1.43], MAT.bedLiner, 0.004);
  S.forEach(s => {
    box('cacamba', [-1.93, 1.0, s * 0.726], [1.47, 0.46, 0.012], MAT.underDS);
    box('protetor_cacamba', [-1.93, 1.0, s * 0.716], [1.46, 0.42, 0.01], MAT.bedLiner, 0.004);
    box('protetor_cacamba', [XRA, 0.88, s * 0.615], [0.86, 0.17, 0.21], MAT.bedLiner, 0.05);
    box('cacamba', [XRA, 0.86, s * 0.62], [0.90, 0.16, 0.22], MAT.underDS, 0.04);
  });
  box('cacamba', [XBF - 0.004, 1.0, 0], [0.012, 0.46, 1.46], MAT.underDS);
  /* fresta entre a cabine e a caçamba: fundo escuro */
  panel('cacamba', [RS(XBF, XCG, r(J.UE), r(J.S0))], MAT.gap, { off: -0.03, fl: 0 });
  /* bocal do tanque: portinhola na lateral esquerda da caçamba, sobre a roda */
  { const z = sideZ(-1.30, 1.07) + 0.002; add('bocal', gCyl(0.065, 0.065, 0.006, 'z', 32), MAT.paint, [-1.30, 1.07, z]); add('bocal', gTorus(0.065, 0.004, 'z', 6, 40), MAT.trim, [-1.30, 1.07, z + 0.003]); }
  /* molduras das caixas de roda: a borda alargada em volta das quatro rodas */
  [[XFA, 'molduras'], [XRA, 'molduras']].forEach(([xa, id]) => S.forEach(s => {
    const P = []; for (let k = 0; k <= 30; k++) { const a = Math.PI * (k / 30), x = xa + Math.cos(a) * 0.485, y = WY + Math.sin(a) * 0.485; P.push([x, y, s * (sideZ(x, Math.max(0.56, y)) + 0.018)]); }
    tube(id, P, 0.03, MAT.flare);
  }));
  /* para-choque traseiro com degrau, cromado, e a luz de placa */
  box('para_choque_t', [-2.735, 0.545, 0], [0.07, 0.15, 1.62], MAT.chromeTrim, 0.025);
  box('para_choque_t', [-2.725, 0.625, 0], [0.09, 0.012, 1.10], MAT.rubber, 0.004);
  box('para_choque_t', [-2.772, 0.545, 0], [0.006, 0.13, 0.40], MAT.plate, 0.01);
  box('luz_placa', [-2.76, 0.62, 0], [0.025, 0.012, 0.10], MAT.bulb, 0.004);
  add('guincho_estepe', gCyl(0.012, 0.012, 0.012, 'x', 16), MAT.black, [-2.772, 0.50, 0.24]);
  /* retrovisores, barras do teto, estribos e ganchos */
  S.forEach(s => {
    const zb = s * (sideZ(XDF - 0.04, 1.22) + 0.01), g = dp(s);
    box('retrovisores', [XDF - 0.05, 1.235, zb + s * 0.07], [0.07, 0.04, 0.14], MAT.black, 0.01, null, g);
    box('retrovisores', [XDF - 0.08, 1.27, zb + s * 0.15], [0.09, 0.17, 0.20], MAT.chromeTrim, 0.03, null, g);
    box('retrovisores', [XDF - 0.126, 1.27, zb + s * 0.15], [0.006, 0.15, 0.18], MAT.glass, 0.01, null, g);
    rod('rack_teto', [0.10, 1.672, s * 0.58], [-1.02, 1.672, s * 0.58], 0.014, MAT.chromeTrim);
    [0.10, -0.46, -1.02].forEach(x => box('rack_teto', [x, 1.665, s * 0.58], [0.06, 0.03, 0.04], MAT.black, 0.008));
    rod('estribos', [0.82, 0.47, s * 0.89], [-1.00, 0.47, s * 0.89], 0.032, MAT.chromeTrim);
    box('estribos', [-0.09, 0.505, s * 0.89], [1.6, 0.012, 0.06], MAT.rubber, 0.004);
    [0.60, -0.10, -0.80].forEach(x => rod('estribos', [x, 0.47, s * 0.89], [x, 0.46, s * 0.58], 0.014, MAT.black));
    box('ganchos', [2.34, 0.43, s * 0.44], [0.10, 0.02, 0.05], MAT.red, 0.008);
    add('ganchos', gTorus(0.03, 0.009, 'z', 8, 20), MAT.red, [2.40, 0.43, s * 0.44]);
    /* dobradiças do capô e da tampa, cabos da tampa */
    const zc = s * 0.66;
    box('dobr_capo', [HINGE[0] + 0.012, HINGE[1] - 0.035, zc], [0.06, 0.055, 0.012], MAT.steelDark, 0.004);
    rod('dobr_capo', [HINGE[0], HINGE[1], zc], [HINGE[0] + 0.09, topY(HINGE[0] + 0.09, 0.66) - 0.014, zc], 0.008, MAT.steelDark, hoodPivot);
    cyl('dobr_tampa', [TAILH[0], TAILH[1], s * 0.70], 0.012, 0.05, 'z', MAT.steel);
    rod('cabos_tampa', [XTG + 0.01, 1.19, s * 0.735], [XBK + 0.02, 0.86, s * 0.735], 0.004, MAT.steel, tailPivot);
    box('fech_tampa', [XTG + 0.005, 1.15, s * 0.73], [0.02, 0.04, 0.02], MAT.steelDark, 0.004);
  });
  add('fech_capo', gTorus(0.012, 0.003, 'z', 6, 16), MAT.steel, [2.32, 1.04, 0], null, hoodPivot);
  /* limpadores */
  const wip = (x0, z0, z1) => { const pts = []; for (let k = 0; k <= 8; k++) { const z = z0 + (z1 - z0) * k / 8, x = x0 - 0.06 * k / 8; pts.push([x, topY(x, z) + 0.014, z]); } tube('limpador', pts, 0.006, MAT.black); };
  wip(0.90, -0.52, 0.08); wip(0.90, 0.10, 0.66);
  flushPanels();
}

/* ===== Chassi de longarinas: duas vigas de ponta a ponta, com o "degrau" sobre o eixo traseiro, e as travessas ===== */
function beam(id, a, b, w, h, mat) {
  const A = V(a[0], a[1], a[2]), Bv = V(b[0], b[1], b[2]), d = Bv.clone().sub(A), L = d.length();
  const m = new THREE.Mesh(gBox(L, h, w, 0.006), mat || MAT.frame);
  m.position.copy(A).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(V(1, 0, 0), d.normalize());
  return place(id, m);
}
const RAIL = [[2.40, 0.47, 0.44], [1.95, 0.47, 0.44], [1.10, 0.46, 0.44], [0.70, 0.46, 0.47], [0.30, 0.46, 0.56], [-0.68, 0.47, 0.56], [-0.90, 0.62, 0.56], [-2.25, 0.64, 0.56], [-2.66, 0.62, 0.56]];
function buildChassis() {
  S.forEach(s => {
    for (let i = 0; i < RAIL.length - 1; i++) { const a = RAIL[i], b = RAIL[i + 1]; beam('longarinas', [a[0], a[1], s * a[2]], [b[0], b[1], s * b[2]], 0.065, 0.15); }
    /* coxins da carroceria (cabine e caçamba) */
    [[1.02, 0.44], [0.20, 0.56], [-0.62, 0.56], [-1.08, 0.56], [-1.50, 0.56], [-2.05, 0.56], [-2.55, 0.56]].forEach(([x, z], k) => {
      const y = k < 4 ? 0.545 : (x > -2.0 ? 0.71 : 0.66);
      add('coxins_cab', gCyl(0.035, 0.035, 0.035, 'y', 20), MAT.rubber, [x, y, s * (z + 0.06)]);
      box('coxins_cab', [x, y - 0.03, s * (z + 0.05)], [0.08, 0.01, 0.10], MAT.frame);
    });
  });
  beam('travessas', [2.30, 0.50, 0.44], [2.30, 0.50, -0.44], 0.06, 0.08);              // travessa do radiador
  box('travessa_motor', [1.95, 0.43, 0], [0.12, 0.09, 0.84], MAT.frame, 0.01);       // travessa da frente do motor
  beam('travessa_torcao', [0.56, 0.40, 0.48], [0.56, 0.40, -0.48], 0.08, 0.06);
  beam('travessas', [0.92, 0.40, 0.46], [0.92, 0.40, -0.46], 0.07, 0.05);             // travessa do câmbio
  beam('travessas', [-0.56, 0.44, 0.56], [-0.56, 0.44, -0.56], 0.06, 0.06);           // travessa do mancal do cardã
  beam('travessas', [-1.10, 0.625, 0.56], [-1.10, 0.625, -0.56], 0.06, 0.07);
  beam('travessas', [-2.10, 0.64, 0.56], [-2.10, 0.64, -0.56], 0.06, 0.07);
  beam('travessas', [-2.66, 0.62, 0.56], [-2.66, 0.62, -0.56], 0.06, 0.08);
  /* protetores de baixo: cárter e diferencial dianteiro, e transferência */
  box('protetor_carter', [1.66, 0.255, 0.02], [0.72, 0.008, 0.70], MAT.frame, 0.004);
  box('protetor_transf', [0.62, 0.315, 0.02], [0.42, 0.008, 0.38], MAT.frame, 0.004);
  S.forEach(s => { box('protetor_carter', [1.30, 0.32, s * 0.33], [0.04, 0.13, 0.04], MAT.frame); box('protetor_transf', [0.62, 0.38, s * 0.20], [0.04, 0.12, 0.03], MAT.frame); });
}

/* ===== Motor MWM Sprint 2.8: longitudinal, virabrequim ao longo de x, cilindro 1 na frente ===== */
const EYc = 0.60, CR = 0.0515, RODL = 0.17;                 // eixo do virabrequim, meio curso (103 mm) e biela
const CYLX = [1.855, 1.75, 1.645, 1.54];                    // cilindros 1..4
const EXC = 1.70;                                           // centro do motor ao longo de x
const XFR = 2.012;                                          // plano das polias e da correia de acessórios
const DECK = 0.862;
ANIM.crank = { x: 0, y: EYc, r: CR, rod: RODL, pid: 'pistoes', rid: 'bielas' };
/* grupo girado 90°: o eixo z local vira o −x do carro (giro horário visto da frente); x local = z do carro */
function xFrame(id, p) { const g = p ? pivotOf(id, p) : new THREE.Group(); if (!p) { g.position.set(EXC, 0, 0); reg(id).group.add(g); } g.rotation.y = -Math.PI / 2; return g; }
const lz = x => -(x - EXC);
function beltX(id, pulleys, x0, w, mat) {        // correia no plano x = x0 (polias dadas por [z, y, r])
  const hull = beltPath(pulleys), pos = [], idx = [], n = hull.length;
  hull.forEach(([z, y]) => { pos.push(x0 - w / 2, y, z, x0 + w / 2, y, z); });
  for (let i = 0; i < n; i++) { const a = i * 2, b = ((i + 1) % n) * 2; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return add(id, g, MAT.belt);
}
function buildEngine() {
  /* bloco de ferro fundido com a saia larga, cabeçote, tampa de válvulas, cárter com o poço na frente */
  box('bloco', [EXC, 0.71, 0], [0.43, 0.30, 0.26], MAT.engine, 0.02);
  box('bloco', [EXC, 0.57, 0], [0.43, 0.10, 0.32], MAT.engine, 0.015);
  for (let k = 0; k < 5; k++) box('bloco', [1.515 + k * 0.105, 0.68, 0.132], [0.02, 0.22, 0.012], MAT.engine, 0.004);
  for (let k = 0; k < 5; k++) box('bloco', [1.515 + k * 0.105, 0.68, -0.132], [0.02, 0.22, 0.012], MAT.engine, 0.004);
  box('junta_cab', [EXC, DECK, 0], [0.44, 0.004, 0.27], MAT.steel);
  box('cabecote', [EXC, 0.92, 0], [0.45, 0.11, 0.29], MAT.engineLt, 0.012);
  box('tampa_valv', [EXC, 1.0, 0], [0.42, 0.05, 0.22], MAT.engine, 0.02);
  for (let k = 0; k < 4; k++) box('tampa_valv', [CYLX[k], 1.027, 0], [0.05, 0.006, 0.18], MAT.engineLt, 0.003);
  add('tampa_oleo', gCyl(0.028, 0.028, 0.03, 'y', 24), MAT.yellow, [1.58, 1.035, -0.07]);
  box('carter', [EXC, 0.495, 0], [0.42, 0.05, 0.28], MAT.engine, 0.01);
  box('carter', [1.59, 0.45, -0.07], [0.22, 0.12, 0.16], MAT.engine, 0.015);   // poço à direita: o diferencial dianteiro fica à esquerda
  box('tampa_dist', [1.955, 0.73, 0], [0.06, 0.48, 0.34], MAT.engineLt, 0.025);
  /* pistões e bielas (animados) */
  const FP = xFrame('pistoes'), FB = xFrame('bielas');
  CYLX.forEach((x, i) => {
    const g = new THREE.Group(); FP.add(g);
    add('pistoes', gCyl(0.0465, 0.0465, 0.06, 'y', 24), MAT.alu, [0, 0.015, 0], null, g);
    for (const dy of [0.036, 0.026]) add('pistoes', gTorus(0.0467, 0.0016, 'y', 4, 24), MAT.steelDark, [0, dy, 0], null, g);
    g.position.set(0, DECK - 0.05, lz(x));
    const r = add('bielas', gBox(0.024, RODL, 0.016, 0.004), MAT.steel, null, null, FB); r.userData.noMerge = true;
    ANIM.pistons.push({ g, z: lz(x), ph: (i === 0 || i === 3) ? 0 : Math.PI }); ANIM.rods.push(r);
  });
  /* virabrequim com 5 mancais, engrenagem na frente e o volante atrás */
  const kp = xFrame('virabrequim', [EXC, EYc, 0]); ANIM.spin.push(kp);
  [1.49, 1.595, 1.70, 1.805, 1.91].forEach(x => add('virabrequim', gCyl(0.03, 0.03, 0.03, 'z'), MAT.steel, [0, 0, lz(x)], null, kp));
  CYLX.forEach((x, i) => {
    const ph = (i === 0 || i === 3) ? 0 : Math.PI, px = CR * Math.sin(ph), py = CR * Math.cos(ph);
    add('virabrequim', gCyl(0.026, 0.026, 0.03, 'z'), MAT.steel, [px, py, lz(x)], null, kp);
    for (const dz of [-0.028, 0.028]) { add('virabrequim', gBox(0.06, 0.10, 0.014, 0.008), MAT.iron, [px / 2, py / 2, lz(x) + dz], null, kp); add('virabrequim', gBox(0.10, 0.04, 0.014, 0.012), MAT.iron, [-px * 0.9, -py * 0.9, lz(x) + dz], null, kp); }
  });
  add('virabrequim', gCyl(0.02, 0.02, 0.12, 'z'), MAT.steel, [0, 0, lz(1.98)], null, kp);
  const pv = xFrame('polia_vira', [EXC, EYc, 0]); ANIM.spin.push(pv);
  add('polia_vira', gCyl(0.085, 0.085, 0.03, 'z', 40), MAT.steelDark, [0, 0, lz(XFR)], null, pv);
  for (const dz of [-0.01, 0, 0.01]) add('polia_vira', gTorus(0.085, 0.002, 'z', 4, 40), MAT.steel, [0, 0, lz(XFR) + dz], null, pv);
  const fw = xFrame('volante_motor', [EXC, EYc, 0]); ANIM.spin.push(fw);
  add('volante_motor', gCyl(0.165, 0.165, 0.03, 'z', 56), MAT.iron, [0, 0, lz(1.455)], null, fw);
  add('volante_motor', gTorus(0.166, 0.006, 'z', 6, 64), MAT.steel, [0, 0, lz(1.455)], null, fw);
  const cl = xFrame('embreagem', [EXC, EYc, 0]); ANIM.spin.push(cl);
  add('embreagem', gCyl(0.12, 0.12, 0.009, 'z', 44), MAT.pad, [0, 0, lz(1.432)], null, cl);
  add('embreagem', gCyl(0.145, 0.135, 0.02, 'z', 44), MAT.steel, [0, 0, lz(1.415)], null, cl);
  add('rol_emb', gTorus(0.034, 0.012, 'x', 8, 24), MAT.alu, [1.39, EYc, 0]);
  add('rol_emb', gCyl(0.045, 0.045, 0.04, 'x', 24), MAT.aluDark, [1.37, EYc, 0]);
  /* trem de engrenagens da distribuição, na frente: virabrequim, intermediária, comando e bomba de alta */
  const gears = [[0, EYc, 0.055], [0.10, 0.74, 0.06], [0, 0.90, 0.07], [0.20, 0.74, 0.05]];
  gears.forEach(([z, y, rr], k) => { add('engrenagens', gCyl(rr, rr, 0.022, 'x', 36), MAT.steel, [1.935, y, z]); add('engrenagens', gTorus(rr, 0.004, 'x', 4, 36), MAT.steelDark, [1.935, y, z]); });
  /* comando no cabeçote (gira à metade), válvulas e balancins */
  const cp = xFrame('comando', [EXC, 0.935, 0]); ANIM.cam.push(cp);
  add('comando', gCyl(0.016, 0.016, 0.44, 'z'), MAT.steel, [0, 0, 0], null, cp);
  CYLX.forEach((x, i) => [-0.022, 0.022].forEach((dz, j) => { const a = [0, Math.PI, Math.PI * 1.5, Math.PI * 0.5][i] + j * 1.2; const m = add('comando', gCyl(0.02, 0.02, 0.012, 'z', 16), MAT.steel, [Math.sin(a) * 0.007, Math.cos(a) * 0.007, lz(x) + dz], null, cp); m.scale.set(1, 1.35, 1); }));
  CYLX.forEach(x => [-0.022, 0.022].forEach(dx => [-0.04, 0.04].forEach(dz => {
    rod('valvulas', [x + dx, 0.875, dz], [x + dx, 0.955, dz], 0.0035, MAT.steel);
    add('valvulas', gCyl(0.012, 0.012, 0.025, 'y', 12, true), MAT.spring, [x + dx, 0.935, dz]);
  })));
  CYLX.forEach(x => box('valvulas', [x, 0.965, 0], [0.07, 0.012, 0.11], MAT.steelDark, 0.004));
  /* correia de acessórios na frente: virabrequim, bomba d’água, alternador, direção, compressor e tensor */
  beltX('correia_acess', [[0, EYc, 0.085], [0, 0.80, 0.065], [0.20, 0.93, 0.05], [-0.24, 0.74, 0.06], [-0.20, 0.54, 0.06], [0.16, 0.70, 0.035]], XFR, 0.02);
  add('tensor_acess', gCyl(0.035, 0.035, 0.024, 'x', 24), MAT.steel, [XFR, 0.70, 0.16]);
  box('tensor_acess', [XFR - 0.02, 0.73, 0.18], [0.02, 0.08, 0.025], MAT.steelDark, 0.006);
  /* coxins: um de cada lado do bloco, na travessa do chassi */
  S.forEach(s => {
    const id = s > 0 ? 'coxim_esq' : 'coxim_dir';
    box(id, [1.66, 0.50, s * 0.25], [0.10, 0.07, 0.08], MAT.rubber, 0.012);
    box(id, [1.66, 0.56, s * 0.19], [0.08, 0.12, 0.03], MAT.engine, 0.006);
    box(id, [1.66, 0.455, s * 0.30], [0.12, 0.02, 0.10], MAT.frame);
  });
  /* lubrificação: bomba, filtro e resfriador do lado direito, vareta e respiro */
  box('bomba_oleo', [1.90, 0.53, 0], [0.06, 0.10, 0.16], MAT.aluDark, 0.01);
  tube('bomba_oleo', [[1.88, 0.50, 0], [1.86, 0.43, 0.02], [1.80, 0.42, 0.02]], 0.01, MAT.steel);
  kit('filtro_oleo', 'oil_filter', { at: [1.66, 0.63, -0.205], rot: [0, Math.PI / 2, 0], s: [1.15, 1.2, 1.2] });
  box('resfriador_oleo', [1.66, 0.63, -0.158], [0.16, 0.08, 0.03], MAT.aluDark, 0.006);
  tube('resfriador_oleo', [[1.58, 0.63, -0.17], [1.52, 0.70, -0.20], [1.50, 0.80, -0.17]], 0.007, MAT.hose);
  rod('vareta', [1.56, 0.58, -0.16], [1.53, 1.02, -0.17], 0.005, MAT.steel);
  add('vareta', gTorus(0.014, 0.004, 'z', 6, 18), MAT.yellow, [1.53, 1.035, -0.17]);
  rod('respiro', [1.52, 1.02, 0.08], [1.47, 1.04, 0.13], 0.009, MAT.hose);
  /* bomba de vácuo atrás do alternador, sensores */
  add('bomba_vacuo', gCyl(0.04, 0.04, 0.05, 'x', 24), MAT.aluDark, [1.875, 0.93, 0.20]);
  tube('mang_vacuo', [[1.85, 0.95, 0.20], [1.60, 1.06, 0.30], [1.30, 1.04, 0.36], [1.13, 0.95, 0.38]], 0.008, MAT.hose);
  tube('mang_vacuo', [[1.40, 1.05, 0.10], [1.10, 0.70, 0.10], [0.80, 0.45, 0.10]], 0.004, MAT.cable);
  add('sens_ckp', gCyl(0.011, 0.011, 0.04, 'y', 12), MAT.black, [1.47, 0.78, 0.12]);
  add('sens_cmp', gCyl(0.012, 0.012, 0.03, 'x', 12), MAT.black, [1.99, 0.92, -0.08]);
  add('sens_ect', gCyl(0.009, 0.009, 0.035, 'y', 12), MAT.black, [1.93, 0.99, 0.08]);
  add('sens_oleo', gCyl(0.01, 0.01, 0.03, 'z', 12), MAT.black, [1.80, 0.62, 0.17]);
}

/* ===== Ar: tomada atrás do farol direito, filtro, turbo do lado direito, intercooler em cima do motor e coletor do lado esquerdo ===== */
const TX = 1.70, TYt = 0.83, TZ = -0.32;   // turbo: eixo ao longo de x, turbina atrás e compressor na frente
function buildAir() {
  tube('tomada_ar', [[2.30, 0.98, -0.66], [2.25, 0.95, -0.60], [2.18, 0.90, -0.54]], 0.045, MAT.plastic);
  box('caixa_filtro', [2.04, 0.86, -0.50], [0.30, 0.20, 0.22], MAT.plastic, 0.03);
  add('caixa_filtro', gCyl(0.10, 0.10, 0.06, 'x', 28), MAT.plastic, [2.205, 0.86, -0.50]);
  box('filtro_ar', [2.04, 0.86, -0.50], [0.26, 0.17, 0.15], MAT.paper, 0.01);
  for (let k = -4; k <= 4; k++) box('filtro_ar', [2.04 + k * 0.026, 0.95, -0.50], [0.006, 0.01, 0.14], MAT.paper);
  tube('duto_ar', [[1.89, 0.86, -0.50], [1.85, 0.86, -0.42], [1.83, 0.84, -0.35], [1.81, TYt, TZ]], 0.04, MAT.hose);
  /* turbo Garrett: carcaça da turbina (ferro) e do compressor (alumínio) */
  add('turbo', gCyl(0.07, 0.07, 0.07, 'x', 28), MAT.turbo, [TX - 0.03, TYt, TZ]);
  add('turbo', gTorus(0.055, 0.03, 'x', 10, 28), MAT.turbo, [TX - 0.04, TYt, TZ]);
  add('turbo', gCyl(0.03, 0.03, 0.06, 'x', 20), MAT.steel, [TX + 0.035, TYt, TZ]);
  add('turbo', gCyl(0.075, 0.075, 0.06, 'x', 28), MAT.alu, [TX + 0.085, TYt, TZ]);
  add('turbo', gTorus(0.06, 0.028, 'x', 10, 28), MAT.alu, [TX + 0.09, TYt, TZ]);
  tube('turbo', [[TX + 0.03, TYt + 0.06, TZ], [TX + 0.05, 0.95, -0.22], [1.78, 0.96, -0.15]], 0.004, MAT.steel);
  /* intercooler sob a entrada do capô: o ar vem do turbo e desce para o coletor */
  box('intercooler', [1.76, 1.072, 0], [0.36, 0.05, 0.56], MAT.icAlu, 0.008);
  for (let k = -12; k <= 12; k++) box('intercooler', [1.76, 1.098, k * 0.021], [0.34, 0.004, 0.003], MAT.aluDark);
  S.forEach(s => box('intercooler', [1.76, 1.072, s * 0.30], [0.30, 0.06, 0.04], MAT.icAlu, 0.012));
  tube('mang_intercooler', [[TX + 0.12, TYt, TZ], [1.86, 0.88, -0.34], [1.86, 1.0, -0.33], [1.82, 1.07, -0.31]], 0.03, MAT.hose);
  tube('mang_intercooler', [[1.70, 1.07, 0.31], [1.66, 1.02, 0.30], [1.60, 0.97, 0.25], [1.56, 0.95, 0.21]], 0.03, MAT.hose);
  /* coletor de admissão do lado esquerdo, com os dutos curtos e o sensor de pressão */
  box('coletor_adm', [EXC, 0.95, 0.205], [0.42, 0.07, 0.07], MAT.alu, 0.02);
  CYLX.forEach(x => box('coletor_adm', [x, 0.92, 0.16], [0.05, 0.05, 0.04], MAT.alu, 0.01));
  route('coletor_adm', [[1.56, 0.95, 0.21], [1.70, 0.95, 0.205], [1.84, 0.94, 0.20]]);
  box('sens_map', [1.50, 0.99, 0.205], [0.03, 0.025, 0.03], MAT.black, 0.004);
}

/* ===== Diesel common rail: tanque, bomba elétrica, filtro com separador, bomba de alta, rail e injetores ===== */
function buildFuel() {
  box('tanque', [-0.70, 0.42, 0.30], [0.64, 0.24, 0.44], MAT.black, 0.04);
  S.forEach(s => box('tanque', [-0.70 + s * 0.20, 0.42, 0.30], [0.025, 0.25, 0.46], MAT.frame));
  add('bomba_baixa', gCyl(0.055, 0.055, 0.02, 'y', 28), MAT.plastic, [-0.85, 0.55, 0.30]);
  add('bomba_baixa', gCyl(0.03, 0.03, 0.16, 'y', 20), MAT.steelDark, [-0.85, 0.46, 0.30]);
  box('boia', [-0.70, 0.38, 0.38], [0.06, 0.02, 0.04], MAT.black, 0.006);
  rod('boia', [-0.85, 0.42, 0.30], [-0.70, 0.38, 0.38], 0.003, MAT.steel);
  tube('bocal', [[-1.30, 1.07, 0.84], [-1.30, 1.00, 0.76], [-1.16, 0.72, 0.62], [-1.0, 0.54, 0.46], [-0.98, 0.48, 0.42]], 0.025, MAT.black);
  /* linhas: [0] do tanque ao filtro, [1] do filtro à bomba de alta; retorno ao tanque */
  tube('linhas_comb', [[-0.85, 0.56, 0.28], [-0.40, 0.48, 0.50], [0.40, 0.47, 0.51], [0.95, 0.50, 0.51], [1.15, 0.70, 0.56], [1.28, 0.80, 0.58]], 0.005, MAT.steel);
  tube('linhas_comb', [[1.30, 0.82, 0.555], [1.55, 0.86, 0.40], [1.80, 0.78, 0.28], [1.86, 0.74, 0.25]], 0.005, MAT.steel);
  tube('retorno', [[1.52, 1.01, 0.12], [1.40, 1.0, 0.20], [1.10, 0.62, 0.50], [0.40, 0.49, 0.49], [-0.40, 0.49, 0.48], [-0.80, 0.56, 0.36]], 0.004, MAT.cable);
  /* filtro de diesel com o copo e o sensor de água embaixo */
  add('filtro_comb', gCyl(0.045, 0.045, 0.16, 'y', 28), MAT.steelDark, [1.30, 0.82, 0.58]);
  box('filtro_comb', [1.30, 0.915, 0.58], [0.11, 0.03, 0.11], MAT.alu, 0.01);
  add('sens_agua', gCyl(0.025, 0.025, 0.05, 'y', 20), MAT.black, [1.30, 0.715, 0.58]);
  /* bomba de alta Bosch CP3 do lado esquerdo, movida pela engrenagem da distribuição */
  add('bomba_alta', gCyl(0.05, 0.05, 0.14, 'x', 28), MAT.alu, [1.86, 0.74, 0.21]);
  box('bomba_alta', [1.86, 0.80, 0.21], [0.10, 0.05, 0.08], MAT.alu, 0.01);
  box('regulador', [1.80, 0.745, 0.27], [0.03, 0.03, 0.04], MAT.black, 0.004);
  /* rail em cima, do lado esquerdo, e os tubos: [0] bomba–rail, [1..4] rail–injetores */
  add('rail', gCyl(0.016, 0.016, 0.42, 'x', 18), MAT.steel, [EXC, 1.04, 0.125]);
  add('sens_rail', gCyl(0.012, 0.012, 0.04, 'x', 12), MAT.black, [1.93, 1.04, 0.125]);
  tube('tubos_alta', [[1.86, 0.80, 0.21], [1.90, 0.90, 0.20], [1.92, 1.03, 0.14], [1.91, 1.04, 0.13]], 0.0045, MAT.steel);
  CYLX.forEach(x => tube('tubos_alta', [[x, 1.04, 0.125], [x, 1.065, 0.08], [x, 1.06, 0.02]], 0.0045, MAT.steel));
  /* injetores no meio de cada cilindro, saindo pela tampa de válvulas */
  CYLX.forEach(x => { rod('bicos', [x, 0.90, 0], [x, 1.065, 0], 0.012, MAT.steelDark); box('bicos', [x, 1.06, 0.02], [0.03, 0.025, 0.04], MAT.black, 0.004); });
  /* velas aquecedoras (kit para frio), uma por cilindro, do lado direito do cabeçote */
  CYLX.forEach(x => rod('velas_aquec', [x, 0.93, -0.06], [x, 0.98, -0.17], 0.005, MAT.steel));
  tube('velas_aquec', CYLX.map(x => [x, 0.985, -0.175]), 0.0025, MAT.cable);
  box('ecu', [1.10, 0.84, 0.60], [0.18, 0.13, 0.035], MAT.box, 0.006);
  box('ecu', [1.10, 0.92, 0.60], [0.08, 0.03, 0.03], MAT.black, 0.004);
  rod('pedal_acel', [0.80, 0.64, 0.24], [0.76, 0.86, 0.24], 0.006, MAT.steelDark);
  box('pedal_acel', [0.74, 0.66, 0.24], [0.015, 0.14, 0.06], MAT.rubber, 0.006, [0, 0, -0.35]);
}

/* ===== Arrefecimento: radiador com a ventoinha viscosa, ventilador auxiliar na frente e reservatório do lado direito ===== */
function buildCooling() {
  box('radiador', [2.20, 0.74, 0], [0.04, 0.46, 0.70], MAT.aluDark);
  for (let k = -11; k <= 11; k++) box('radiador', [2.222, 0.74, k * 0.03], [0.003, 0.44, 0.004], MAT.alu);
  box('radiador', [2.20, 0.98, 0], [0.05, 0.035, 0.72], MAT.black, 0.008);
  box('radiador', [2.20, 0.50, 0], [0.05, 0.035, 0.72], MAT.black, 0.008);
  box('radiador', [2.16, 0.74, 0], [0.012, 0.46, 0.70], MAT.plastic);
  add('ventoinha', gTorus(0.215, 0.012, 'x', 8, 48), MAT.plastic, [2.10, 0.80, 0]);
  add('ventoinha', gCyl(0.065, 0.065, 0.07, 'x', 24), MAT.aluDark, [2.04, 0.80, 0]);
  { const fan = new THREE.Group(); fan.position.set(2.085, 0.80, 0); reg('ventoinha').group.add(fan); ANIM.fans = [fan]; ANIM.fan = fan;
    for (let k = 0; k < 7; k++) { const m = add('ventoinha', gBox(0.006, 0.17, 0.05, 0.003), MAT.plastic, [0, 0.12 * Math.cos(k * TAU / 7), 0.12 * Math.sin(k * TAU / 7)], [k * TAU / 7, 0.35, 0], fan); m.rotation.order = 'XYZ'; } }
  add('vent_aux', gTorus(0.15, 0.01, 'x', 8, 40), MAT.plastic, [2.30, 0.74, 0.16]);
  add('vent_aux', gCyl(0.045, 0.045, 0.05, 'x', 20), MAT.black, [2.29, 0.74, 0.16]);
  kit('vaso', 'reservoir', { at: [1.56, 0.96, -0.56], s: [0.14, 0.16, 0.09], mats: { tank: MAT.coolantTank } });
  kit('vaso', 'res_cap', { at: [1.56, 1.04, -0.56], mats: { tankNeck: MAT.coolantTank } });
  tube('vaso', [[1.60, 0.92, -0.52], [1.90, 0.98, -0.30], [2.18, 0.99, -0.25]], 0.005, MAT.hose);
  add('bomba_agua', gCyl(0.06, 0.06, 0.05, 'x', 28), MAT.aluDark, [1.985, 0.80, 0]);
  add('bomba_agua', gCyl(0.065, 0.065, 0.02, 'x', 28), MAT.steel, [XFR, 0.80, 0]);
  box('termostato', [1.97, 0.99, -0.05], [0.06, 0.05, 0.06], MAT.aluDark, 0.008);
  tube('mang_sup', [[1.99, 1.0, -0.06], [2.08, 1.01, -0.12], [2.16, 0.98, -0.20], [2.18, 0.97, -0.22]], 0.02, MAT.hose);
  tube('mang_inf', [[2.18, 0.54, 0.22], [2.08, 0.56, 0.18], [2.0, 0.66, 0.10], [1.99, 0.76, 0.05]], 0.02, MAT.hose);
  tube('mang_aquec', [[1.50, 0.90, -0.15], [1.30, 0.95, -0.25], [1.10, 0.92, -0.20], [1.0, 0.90, -0.16]], 0.009, MAT.hose);
  tube('mang_aquec', [[1.0, 0.86, -0.08], [1.15, 0.82, -0.12], [1.40, 0.76, -0.16], [1.52, 0.74, -0.15]], 0.009, MAT.hose);
}

/* ===== Escapamento: coletor e turbina do lado direito, tubo por baixo da cabine, silencioso e saída atrás à direita ===== */
function buildExhaust() {
  CYLX.forEach(x => tube('coletor_esc', [[x, 0.89, -0.15], [x, 0.87, -0.20], [(x + TX) / 2, 0.85, -0.25], [TX - 0.06, TYt, TZ + 0.02]], 0.02, MAT.iron));
  box('coletor_esc', [EXC, 0.89, -0.155], [0.44, 0.06, 0.02], MAT.iron, 0.006);
  box('protetor', [TX, 0.92, -0.32], [0.30, 0.01, 0.22], MAT.alu, 0.004);
  box('protetor', [TX, 0.86, -0.43], [0.30, 0.12, 0.008], MAT.alu, 0.004);
  tube('tubo_diant', [[TX - 0.07, TYt, TZ], [1.55, 0.74, -0.34], [1.40, 0.50, -0.34], [1.10, 0.33, -0.32], [0.50, 0.31, -0.32], [0.10, 0.31, -0.32]], 0.03, MAT.exhaust);
  kit('silencioso', 'muffler', { at: [-0.30, 0.32, -0.32], s: [1.7, 1.25, 1.2] });
  tube('tubo_tras', [[-0.58, 0.32, -0.32], [-1.0, 0.35, -0.38], [-1.30, 0.48, -0.40], [-1.56, 0.49, -0.40], [-1.85, 0.47, -0.42], [-2.30, 0.43, -0.48], [-2.62, 0.40, -0.50]], 0.028, MAT.exhaust);
  [[1.05, 0.40, -0.32], [-0.62, 0.40, -0.32], [-1.20, 0.52, -0.40], [-2.20, 0.53, -0.48]].forEach(p => box('coxins_esc', p, [0.03, 0.05, 0.02], MAT.rubber, 0.005));
}

/* ===== Elétrica: bateria e caixa de fusíveis à esquerda, alternador e partida, chicote, buzina, lavador ===== */
function buildElectric() {
  kit('bateria', 'battery', { at: [2.03, 0.84, 0.50], s: [1.12, 1.0, 1.0] });
  box('bateria', [2.03, 0.735, 0.50], [0.22, 0.01, 0.27], MAT.frame);
  tube('cabos_bat', [[2.0, 0.95, 0.42], [1.90, 0.90, 0.32], [1.75, 0.66, 0.26], [1.62, 0.56, 0.22]], 0.009, MAT.redCable);
  tube('cabos_bat', [[2.05, 0.95, 0.59], [2.10, 0.80, 0.62], [2.08, 0.60, 0.46]], 0.009, MAT.cable);
  box('caixa_fus_motor', [1.80, 0.92, 0.58], [0.14, 0.10, 0.10], MAT.black, 0.01);
  box('caixa_fus_painel', [0.78, 0.92, 0.70], [0.12, 0.14, 0.04], MAT.black, 0.008);
  kit('alternador', 'alternator', { at: [XFR, 0.93, 0.20], rot: [0, -Math.PI / 2, 0], s: [1.15, 1.15, 1.05] });
  kit('motor_partida', 'starter', { at: [1.58, 0.55, 0.205], rot: [0, Math.PI / 2, 0], s: 1.1 });
  tube('chicote', [[0.90, 0.95, 0.62], [1.20, 1.00, 0.60], [1.50, 1.05, 0.40], [1.75, 1.05, 0.22], [1.90, 1.02, 0.0], [1.95, 0.96, -0.15]], 0.012, MAT.harness);
  tube('chicote', [[1.80, 0.95, 0.58], [1.50, 0.90, 0.62], [1.10, 0.84, 0.62], [0.85, 0.70, 0.60], [0.60, 0.48, 0.52], [-0.50, 0.50, 0.52], [-1.50, 0.66, 0.52], [-2.50, 0.66, 0.52], [-2.66, 0.95, 0.70]], 0.009, MAT.harness);
  tube('chicote', [[0.62, 0.46, 0.45], [0.66, 0.44, 0.18]], 0.006, MAT.harness);
  add('buzina', gCyl(0.05, 0.05, 0.02, 'x', 24), MAT.black, [2.36, 0.62, -0.30]);
  add('limpador', gCyl(0.04, 0.04, 0.11, 'x', 20), MAT.black, [0.97, 1.12, -0.30]);
  rod('limpador', [0.95, 1.14, -0.50], [0.95, 1.14, 0.12], 0.005, MAT.steel);
  kit('lavador', 'reservoir', { at: [1.58, 0.90, 0.58], s: [0.14, 0.18, 0.10], mats: { tank: MAT.whiteRes } });
  kit('lavador', 'res_cap', { at: [1.58, 0.99, 0.58], s: 0.8, mats: { black: MAT.blue, tankNeck: MAT.whiteRes } });
  add('ign_chave', gCyl(0.022, 0.022, 0.05, 'y', 16), MAT.steelDark, [0.60, 1.12, 0.29]);
  box('comutadores', [0.52, 1.20, 0.47], [0.03, 0.03, 0.08], MAT.black, 0.008);
  box('comutadores', [0.52, 1.20, 0.27], [0.03, 0.03, 0.08], MAT.black, 0.008);
}

/* ===== Embreagem, câmbio de 5 marchas e caixa de transferência atrás dele ===== */
function buildTransmission() {
  /* capa seca em cone, caixa do câmbio e a extensão onde a transferência se prende */
  add('cambio', gLathe([[0.20, 0], [0.19, 0.06], [0.14, 0.16], [0.11, 0.20]], 'x', 40), MAT.alu, [1.47, EYc, 0]).rotation.z = Math.PI;
  box('cambio', [1.05, 0.56, 0], [0.48, 0.20, 0.20], MAT.alu, 0.04);
  box('cambio', [0.83, 0.52, 0], [0.12, 0.15, 0.17], MAT.alu, 0.03);
  rod('alavanca', [0.97, 0.65, 0], [0.36, 0.98, 0], 0.01, MAT.steel);
  sph('alavanca', [0.35, 1.00, 0], 0.035, MAT.black);
  add('alavanca', gCyl(0.03, 0.08, 0.10, 'y', 20), MAT.black, [0.42, 0.93, 0]);
  box('coxim_cambio', [0.92, 0.445, 0], [0.10, 0.04, 0.10], MAT.rubber, 0.01);
  /* embreagem hidráulica: cilindro-mestre no corta-fogo, reservatório ao lado do do freio, tubo até o atuador */
  add('cil_emb_mestre', gCyl(0.014, 0.014, 0.10, 'x', 16), MAT.alu, [1.06, 0.92, 0.54]);
  kit('reserv_emb', 'reservoir', { at: [1.16, 1.0, 0.56], s: [0.05, 0.06, 0.05], mats: { tank: MAT.fluid } });
  kit('reserv_emb', 'res_cap', { at: [1.16, 1.035, 0.56], s: 0.7, mats: { tankNeck: MAT.fluid } });
  tube('tubo_emb', [[1.11, 0.92, 0.54], [1.25, 0.85, 0.40], [1.38, 0.66, 0.22], [1.40, 0.62, 0.06]], 0.003, MAT.steel);
  rod('pedal_emb', [0.92, 0.92, 0.46], [0.84, 0.70, 0.46], 0.008, MAT.steelDark);
  box('pedal_emb', [0.83, 0.69, 0.46], [0.02, 0.05, 0.08], MAT.rubber, 0.006, [0, 0, -0.2]);
}
/* ===== Tração 4x4: transferência, cardãs, diferencial dianteiro do lado esquerdo, eixo traseiro com Trac-Lock ===== */
const DFX = XFA + 0.04, DFY = 0.37, DFZ = 0.17;       // diferencial dianteiro
const XTR = 0.62;                                     // transferência
function ujoint(id, p, r) { add(id, gTorus(r || 0.03, 0.008, 'x', 6, 20), MAT.steelDark, p); }
function buildDriveline() {
  box('transferencia', [XTR, 0.48, 0.05], [0.30, 0.22, 0.26], MAT.alu, 0.05);
  add('transferencia', gCyl(0.09, 0.09, 0.08, 'x', 28), MAT.alu, [XTR + 0.12, 0.46, 0.17]);
  add('motor_transf', gCyl(0.04, 0.04, 0.10, 'y', 20), MAT.black, [XTR, 0.64, -0.06]);
  box('motor_transf', [XTR, 0.70, -0.06], [0.06, 0.03, 0.06], MAT.black, 0.006);
  /* cardã traseiro em duas partes: transferência → mancal central → diferencial */
  tube('cardan_tras', [[XTR - 0.16, 0.46, 0], [0.10, 0.45, 0], [-0.55, 0.43, 0], [-1.00, 0.41, 0], [-1.36, 0.39, 0]], 0.035, MAT.steel);
  add('cardan_tras', gCyl(0.045, 0.045, 0.12, 'x', 20), MAT.steelDark, [XTR - 0.24, 0.46, 0]);
  [[XTR - 0.32, 0.455, 0], [-0.62, 0.43, 0], [-1.33, 0.39, 0]].forEach(p => ujoint('cruzetas', p, 0.035));
  add('mancal_cardan', gTorus(0.05, 0.02, 'x', 8, 24), MAT.rubber, [-0.55, 0.43, 0]);
  box('mancal_cardan', [-0.55, 0.47, 0], [0.04, 0.03, 0.16], MAT.frame);
  /* cardã dianteiro: saída da frente da transferência, à esquerda, até o diferencial */
  tube('cardan_diant', [[XTR + 0.16, 0.46, 0.17], [1.0, 0.43, 0.17], [DFX - 0.13, DFY, DFZ]], 0.028, MAT.steel);
  [[XTR + 0.17, 0.46, 0.17], [DFX - 0.14, DFY, DFZ]].forEach(p => ujoint('cruzetas', p, 0.03));
  /* diferencial dianteiro e o tubo com o atuador de acoplamento do lado direito */
  add('dif_diant', new THREE.SphereGeometry(0.10, 24, 16), MAT.aluDark, [DFX, DFY, DFZ]);
  add('dif_diant', gCyl(0.05, 0.06, 0.10, 'x', 20), MAT.aluDark, [DFX - 0.08, DFY, DFZ]);
  add('atuador_eixo', gCyl(0.04, 0.04, 0.42, 'z', 20), MAT.aluDark, [DFX, DFY, -0.14]);
  box('atuador_eixo', [DFX + 0.06, DFY + 0.03, -0.24], [0.05, 0.05, 0.06], MAT.black, 0.008);
  tube('atuador_eixo', [[DFX + 0.06, DFY + 0.06, -0.24], [DFX, 0.60, -0.20], [1.20, 0.62, -0.10], [XTR + 0.05, 0.62, -0.06]], 0.003, MAT.cable);
  S.forEach(s => {
    const z0 = s > 0 ? DFZ + 0.09 : -0.35;
    tube('semieixos_diant', [[XFA, WY, z0], [XFA, WY, s * 0.45], [XFA, WY, s * 0.64]], 0.016, MAT.steel);
    kit('coifas', 'cv_boot', { at: [XFA, WY, s * 0.63], rot: s > 0 ? [0, Math.PI, 0] : null, s: 1.2 });
    kit('coifas', 'cv_boot', { at: [XFA, WY, z0 + s * 0.005], rot: s > 0 ? null : [0, Math.PI, 0], s: 1.2 });
  });
  /* eixo traseiro rígido: carcaça com o diferencial (Trac-Lock), tubos e semieixos */
  add('eixo_tras', gCyl(0.042, 0.042, 1.20, 'z', 20), MAT.frame, [XRA, WY, 0]);
  S.forEach(s => add('eixo_tras', gCyl(0.06, 0.06, 0.04, 'z', 24), MAT.frame, [XRA, WY, s * 0.60]));
  add('dif_tras', new THREE.SphereGeometry(0.14, 28, 18), MAT.frame, [XRA, WY, 0]);
  add('dif_tras', gCyl(0.06, 0.07, 0.14, 'x', 24), MAT.frame, [XRA + 0.14, WY + 0.015, 0]);
  add('dif_tras', gCyl(0.13, 0.13, 0.02, 'x', 32), MAT.steelDark, [XRA - 0.12, WY, 0]);
  S.forEach(s => add('semieixos_tras', gCyl(0.018, 0.018, 0.58, 'z', 14), MAT.steel, [XRA, WY, s * 0.36]));
}

/* ===== Rodas aro 16, pneus 235/70 R16 e o estepe sob a caçamba ===== */
const TIRE_PROF = [[0.215, -0.10], [0.236, -0.114], [0.30, -0.118], [0.345, -0.112], [0.362, -0.095], [0.367, -0.066], [0.367, 0.066], [0.362, 0.095], [0.345, 0.112], [0.30, 0.118], [0.236, 0.114], [0.215, 0.10]];
function alloyGeo() {
  const sh = new THREE.Shape(); sh.absarc(0, 0, 0.198, 0, TAU, false);
  for (let k = 0; k < 6; k++) {                      // seis janelas entre seis raios
    const a0 = k * TAU / 6 + 0.16, a1 = (k + 1) * TAU / 6 - 0.16, h = new THREE.Path();
    h.moveTo(Math.cos(a0) * 0.09, Math.sin(a0) * 0.09);
    h.absarc(0, 0, 0.175, a0 + 0.05, a1 - 0.05, false);
    h.lineTo(Math.cos(a1) * 0.09, Math.sin(a1) * 0.09);
    h.absarc(0, 0, 0.09, a1, a0, true);
    sh.holes.push(h);
  }
  return new THREE.ExtrudeGeometry(sh, { depth: 0.016, bevelEnabled: true, bevelThickness: 0.004, bevelSize: 0.004, bevelSegments: 1, curveSegments: 10 });
}
function buildWheels() {
  const ag = alloyGeo();
  [XFA, XRA].forEach(X => S.forEach(s => {
    const front = X === XFA, zc = s * (front ? TF : TR), flip = s < 0 ? [0, Math.PI, 0] : null, c = V(X, WY, zc);
    let yaw = null;
    if (front) { yaw = pivotOf('mangas', [X, WY, zc]); Object.assign(yaw.userData, { abs: true, owner: 'mangas', side: s, absPos: c.clone() }); }
    const spin = new THREE.Group();
    if (yaw) yaw.add(spin); else { spin.position.copy(c); reg('pneus').group.add(spin); }
    Object.assign(spin.userData, { abs: true, owner: front ? 'mangas' : 'pneus', side: s, absPos: c.clone() });
    WHEELS.push({ X, s, front, yaw, spin });
    const t = add('pneus', gLathe(TIRE_PROF, 'z', 60), MAT.tire, [X, WY, zc], flip, spin); t.castShadow = true;
    add('rodas', gCyl(0.20, 0.20, 0.18, 'z', 40, true), MAT.alu, [X, WY, zc], null, spin);
    add('rodas', gTorus(0.207, 0.006, 'z', 6, 48), MAT.alu, [X, WY, zc + 0.09], null, spin);
    add('rodas', gTorus(0.207, 0.006, 'z', 6, 48), MAT.alu, [X, WY, zc - 0.09], null, spin);
    add('rodas', gLathe([[0.05, 0.0], [0.11, 0.004], [0.17, -0.014], [0.198, -0.034]], 'z', 40), MAT.aluDark, [X, WY, zc + s * 0.03], flip, spin);
    add('rodas', ag, MAT.alu, [X, WY, zc + s * 0.06], flip, spin);
    add('rodas', gCyl(0.05, 0.055, 0.016, 'z', 32), MAT.chromeTrim, [X, WY, zc + s * 0.082], null, spin);
  }));
  /* estepe de aço deitado sob a traseira, no cabo do guincho */
  add('estepe', gLathe(TIRE_PROF.map(([r, z]) => [r * 0.97, z]), 'y', 48), MAT.tire, [-2.24, 0.43, 0]);
  add('estepe', gCyl(0.19, 0.19, 0.17, 'y', 36), MAT.wheelSteel, [-2.24, 0.43, 0]);
  rod('guincho_estepe', [-2.24, 0.52, 0], [-2.24, 0.60, 0], 0.006, MAT.steel);
  box('guincho_estepe', [-2.40, 0.60, 0.10], [0.14, 0.06, 0.10], MAT.black, 0.01);
  rod('guincho_estepe', [-2.47, 0.60, 0.15], [-2.75, 0.51, 0.24], 0.008, MAT.steelDark);
  box('macaco', [-1.10, 0.64, -0.55], [0.12, 0.10, 0.28], MAT.red, 0.01);
}

/* ===== Suspensão: frente de braços sobrepostos com barras de torção; atrás, feixes de molas sobre o eixo ===== */
function shock(id, a, b, r) {
  const A = V(...a), Bv = V(...b), m = A.clone().lerp(Bv, 0.55);
  rod(id, a, [m.x, m.y, m.z], r || 0.024, MAT.black); rod(id, [m.x, m.y, m.z], b, 0.009, MAT.chrome);
  [a, b].forEach(p => add(id, gTorus(0.016, 0.006, 'z', 6, 14), MAT.rubber, p));
}
function arm(id, inA, inB, outer, r) { rod(id, inA, outer, r, MAT.frame); rod(id, inB, outer, r, MAT.frame); [inA, inB].forEach(p => add(id, gCyl(0.028, 0.028, 0.05, 'x', 16), MAT.rubber, p)); }
function buildSuspension() {
  S.forEach(s => {
    const WF = WHEELS.find(w => w.front && w.s === s), WRr = WHEELS.find(w => !w.front && w.s === s);
    const z = v => s * v;
    /* bandejas (A) e pivôs */
    arm('bandeja_inf', [XFA - 0.15, 0.36, z(0.40)], [XFA + 0.14, 0.36, z(0.40)], [XFA, 0.24, z(0.62)], 0.018);
    arm('bandeja_sup', [XFA - 0.12, 0.70, z(0.47)], [XFA + 0.10, 0.70, z(0.47)], [XFA, 0.58, z(0.61)], 0.014);
    sph('pivos', [XFA, 0.24, z(0.62)], 0.026, MAT.steelDark); sph('pivos', [XFA, 0.58, z(0.61)], 0.022, MAT.steelDark);
    /* manga: liga os dois pivôs e leva o cubo (gira com o esterço) */
    rod('mangas', [XFA, 0.25, z(0.635)], [XFA, 0.57, z(0.625)], 0.03, MAT.iron, WF.yaw);
    box('mangas', [XFA - 0.10, 0.30, z(0.64)], [0.14, 0.03, 0.03], MAT.iron, 0.008, null, WF.yaw);
    add('cubos_diant', gCyl(0.06, 0.06, 0.08, 'z', 24), MAT.steel, [XFA, WY, z(0.67)], null, WF.yaw);
    /* barra de torção: da bandeja de baixo até a travessa, com o braço de regulagem */
    rod('barras_torcao', [XFA - 0.15, 0.36, z(0.40)], [0.56, 0.37, z(0.42)], 0.016, MAT.steelDark);
    box('travessa_torcao', [0.56, 0.37, z(0.42)], [0.06, 0.10, 0.05], MAT.frame, 0.008);
    rod('travessa_torcao', [0.56, 0.33, z(0.42)], [0.56, 0.31, z(0.42)], 0.008, MAT.steel);
    shock('amort_diant', [XFA + 0.02, 0.28, z(0.55)], [XFA + 0.04, 0.80, z(0.48)]);
    rod('barra_estab', [XFA + 0.10, 0.28, z(0.58)], [XFA + 0.30, 0.42, z(0.46)], 0.008, MAT.steelDark);
    /* freio dianteiro: disco ventilado e pinça atrás do eixo */
    kit('discos', 'disc_v', { at: [XFA, WY, z(0.69)], rot: s > 0 ? null : [0, Math.PI, 0], s: [1.12, 1.12, 1.0], parent: WF.spin });
    const ang = Math.PI * 0.85, rotC = s > 0 ? [0, 0, ang] : [0, Math.PI, Math.PI - ang];
    kit('pincas', 'caliper', { at: [XFA, WY, z(0.69)], rot: rotC, s: 1.12, parent: WF.yaw });
    kit('pastilhas', 'pads_v', { at: [XFA, WY, z(0.69)], rot: rotC, s: 1.12, parent: WF.yaw });
    add('sens_roda', gCyl(0.009, 0.009, 0.04, 'y', 12), MAT.black, [XFA - 0.07, WY + 0.08, z(0.655)], null, WF.yaw);
    tube('sens_roda', [[XFA - 0.07, WY + 0.105, z(0.655)], [XFA - 0.05, 0.62, z(0.55)], [XFA - 0.10, 0.62, z(0.44)]], 0.0025, MAT.cable);
    /* traseira: feixe de molas sobre o eixo, olhal na frente, jumelo atrás, grampos em "U" */
    const zs = z(0.56), feixe = [];
    for (let k = 0; k <= 16; k++) { const x = -0.96 + (-2.18 + 0.96) * k / 16, t = (x - XRA) / 0.61; feixe.push([x, 0.425 + 0.085 * t * t, zs]); }
    for (let L = 0; L < 4; L++) { const n = Math.round(8 - L * 2), part = feixe.slice(n, 17 - n); if (part.length > 2) tube('feixe_molas', part.map(p => [p[0], p[1] - L * 0.012, p[2]]), 0.008, MAT.spring, false, null, 40, 4); }
    add('feixe_molas', gTorus(0.02, 0.007, 'z', 6, 14), MAT.spring, [-0.96, 0.51, zs]);
    rod('jumelos', [-2.18, 0.51, zs], [-2.22, 0.58, zs], 0.012, MAT.frame);
    box('feixe_molas', [-0.96, 0.54, zs], [0.06, 0.06, 0.06], MAT.frame, 0.006);
    [-0.05, 0.05].forEach(dx => { rod('grampos_u', [XRA + dx, 0.45, zs + 0.04], [XRA + dx, 0.30, zs + 0.04], 0.007, MAT.steel); rod('grampos_u', [XRA + dx, 0.45, zs - 0.04], [XRA + dx, 0.30, zs - 0.04], 0.007, MAT.steel); });
    box('grampos_u', [XRA, 0.30, zs], [0.14, 0.012, 0.10], MAT.steelDark);
    const dx = s > 0 ? 0.08 : -0.08;
    shock('amort_tras', [XRA + dx, 0.30, z(0.50)], [XRA + dx * 3.2, 0.62, z(0.50)]);
    /* freio traseiro: tambor com as sapatas e o cilindro de roda */
    add('tambores', gCyl(0.15, 0.15, 0.075, 'z', 40), MAT.iron, [XRA, WY, z(0.63)], null, WRr.spin);
    add('tambores', gTorus(0.15, 0.006, 'z', 6, 40), MAT.steel, [XRA, WY, z(0.665)], null, WRr.spin);
    add('sapatas', gTorus(0.13, 0.012, 'z', 6, 40), MAT.pad, [XRA, WY, z(0.62)]);
    box('cil_roda', [XRA, WY + 0.12, z(0.60)], [0.06, 0.02, 0.025], MAT.steelDark, 0.004);
    add('sens_roda', gCyl(0.009, 0.009, 0.04, 'y', 12), MAT.black, [XRA + 0.07, WY + 0.06, z(0.58)]);
    tube('cabos_freio', [[XRA - 0.02, WY + 0.05, z(0.58)], [XRA + 0.30, 0.42, z(0.48)], [-0.60, 0.42, z(0.30)], [-0.30, 0.42, 0.0]], 0.004, MAT.cable);
  });
  tube('barra_estab', [[XFA + 0.30, 0.42, -0.46], [XFA + 0.36, 0.42, -0.30], [XFA + 0.36, 0.42, 0.30], [XFA + 0.30, 0.42, 0.46]], 0.014, MAT.steelDark);
}

/* ===== Freios: pedal, servo com bomba de vácuo, cilindro-mestre, ABS, tubulações e o freio de estacionamento de pedal ===== */
function buildBrakes() {
  kit('servo', 'booster', { at: [1.07, 0.92, 0.40], rot: [0, Math.PI / 2, 0], s: 1.05 });
  add('cil_mestre', gCyl(0.025, 0.025, 0.14, 'x', 20), MAT.alu, [1.24, 0.92, 0.40]);
  kit('reserv_freio', 'reservoir', { at: [1.23, 0.985, 0.40], s: [0.09, 0.06, 0.08], mats: { tank: MAT.fluid } });
  kit('reserv_freio', 'res_cap', { at: [1.23, 1.02, 0.40], s: 0.9, mats: { tankNeck: MAT.fluid } });
  box('abs', [1.30, 0.70, 0.52], [0.13, 0.10, 0.12], MAT.aluDark, 0.01);
  box('abs', [1.36, 0.70, 0.52], [0.03, 0.08, 0.10], MAT.black, 0.004);
  /* tubulações: [0] para a roda dianteira esquerda, [1] para a direita, [2] pelo chassi até o eixo traseiro */
  tube('tubos_freio', [[1.30, 0.70, 0.58], [1.42, 0.64, 0.56], [XFA - 0.04, 0.62, 0.52], [XFA - 0.02, 0.45, 0.62]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.30, 0.70, 0.46], [1.40, 0.62, 0.0], [1.45, 0.60, -0.48], [XFA - 0.02, 0.45, -0.62]], 0.003, MAT.steel);
  tube('tubos_freio', [[1.26, 0.68, 0.52], [1.0, 0.50, 0.52], [0.0, 0.50, 0.51], [-1.20, 0.57, 0.50], [-1.45, 0.52, 0.30], [XRA, WY + 0.06, 0.20], [XRA, WY + 0.08, 0.58]], 0.003, MAT.steel);
  rod('pedal_freio', [0.92, 0.94, 0.34], [0.83, 0.70, 0.34], 0.008, MAT.steelDark);
  box('pedal_freio', [0.82, 0.69, 0.34], [0.02, 0.06, 0.09], MAT.rubber, 0.006, [0, 0, -0.2]);
  rod('pedal_freio', [0.92, 0.92, 0.34], [1.00, 0.92, 0.40], 0.006, MAT.steel);
  rod('freio_estac', [0.85, 0.96, 0.58], [0.76, 0.76, 0.60], 0.008, MAT.steelDark);
  box('freio_estac', [0.75, 0.75, 0.60], [0.02, 0.05, 0.07], MAT.rubber, 0.006, [0, 0, -0.2]);
  tube('cabos_freio', [[0.85, 0.94, 0.60], [0.80, 0.62, 0.62], [0.50, 0.46, 0.40], [-0.30, 0.42, 0.0]], 0.004, MAT.cable);
}

/* ===== Direção: caixa na longarina esquerda, braço Pitman, barra central, braço intermediário e barras com terminais ===== */
function buildSteering() {
  box('caixa_dir', [1.86, 0.56, 0.33], [0.14, 0.12, 0.12], MAT.iron, 0.02);
  add('caixa_dir', gCyl(0.045, 0.045, 0.10, 'x', 20), MAT.iron, [1.95, 0.57, 0.33]);
  rod('braco_pitman', [1.86, 0.51, 0.33], [1.80, 0.39, 0.32], 0.016, MAT.frame);
  rod('braco_inter', [1.86, 0.49, -0.33], [1.80, 0.39, -0.32], 0.016, MAT.frame);
  box('braco_inter', [1.86, 0.51, -0.33], [0.05, 0.06, 0.05], MAT.frame, 0.006);
  rod('barra_central', [1.80, 0.39, 0.32], [1.80, 0.39, -0.32], 0.017, MAT.frame);
  S.forEach(s => {
    const inner = V(1.80, 0.39, s * 0.28), outer = V(XFA + 0.12, 0.33, s * 0.63);
    const bar = add('barras_dir', new THREE.CylinderGeometry(0.011, 0.011, 1, 12), MAT.steel); bar.userData.noMerge = true; setBar(bar, inner, outer);
    const ball = sph('barras_dir', [outer.x, outer.y, outer.z], 0.02, MAT.steelDark); ball.userData.noMerge = true;
    ANIM.tie.push({ s, bar, ball, inner, outer, pid: 'barras_dir' });
  });
  add('bomba_dir', gCyl(0.055, 0.055, 0.10, 'x', 24), MAT.aluDark, [1.96, 0.74, -0.24]);
  add('bomba_dir', gCyl(0.06, 0.06, 0.02, 'x', 24), MAT.steel, [XFR, 0.74, -0.24]);
  kit('reserv_dir', 'reservoir', { at: [1.20, 0.99, -0.42], s: [0.07, 0.08, 0.07], mats: { tank: MAT.whiteRes } });
  kit('reserv_dir', 'res_cap', { at: [1.20, 1.035, -0.42], s: 0.8, mats: { tankNeck: MAT.whiteRes } });
  tube('mang_dir', [[1.92, 0.74, -0.24], [1.95, 0.64, -0.05], [1.92, 0.60, 0.22], [1.88, 0.58, 0.30]], 0.009, MAT.hose);
  tube('mang_dir', [[1.82, 0.57, 0.31], [1.70, 0.80, 0.10], [1.40, 0.98, -0.30], [1.22, 0.96, -0.40]], 0.008, MAT.hose);
  tube('mang_dir', [[1.20, 0.95, -0.44], [1.50, 0.86, -0.40], [1.90, 0.78, -0.28]], 0.008, MAT.hose);
  tube('coluna', [[1.90, 0.59, 0.33], [1.40, 0.82, 0.37], [1.05, 0.98, 0.38], [0.78, 1.10, 0.38], [0.60, 1.20, 0.38]], 0.018, MAT.steelDark);
  sph('coluna', [1.40, 0.82, 0.37], 0.026, MAT.steel);
  const c = V(0.52, 1.25, 0.38), ax = V(-0.70, 0.71, 0).normalize();
  const sw = pivotOf('volante_dir', [c.x, c.y, c.z]);
  Object.assign(sw.userData, { abs: true, owner: 'volante_dir', absPos: c.clone() });
  ANIM.wheel = { g: sw, ax };
  const w = add('volante_dir', gTorus(0.19, 0.018, 'z', 10, 56), MAT.black, [c.x, c.y, c.z], null, sw);
  w.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
  const hub = add('airbag_mot', gCyl(0.085, 0.09, 0.06, 'y', 28), MAT.black, [c.x + ax.x * 0.012, c.y + ax.y * 0.012, c.z], null, sw);
  hub.quaternion.setFromUnitVectors(UPY, ax);
  const u = V(0, 0, 1), v = ax.clone().cross(u).normalize();
  [-0.18, Math.PI + 0.18, -Math.PI / 2].forEach(a => {   // dois raios quase na horizontal e um embaixo
    const d = u.clone().multiplyScalar(Math.cos(a)).addScaledVector(v, Math.sin(a));
    rod('volante_dir', [c.x, c.y, c.z], [c.x + d.x * 0.185, c.y + d.y * 0.185, c.z + d.z * 0.185], 0.013, MAT.black, sw);
  });
  const cs = add('cabo_espiral', gTorus(0.05, 0.012, 'z', 8, 28), MAT.black, [c.x - ax.x * 0.035, c.y - ax.y * 0.035, c.z]);
  cs.quaternion.setFromUnitVectors(V(0, 0, 1), ax);
}

/* ===== Ar-condicionado ===== */
function buildAC() {
  kit('compressor', 'compressor', { at: [XFR, 0.54, -0.20], rot: [0, -Math.PI / 2, 0], s: 1.1 });
  box('condensador', [2.255, 0.74, 0], [0.02, 0.42, 0.68], MAT.alu);
  for (let k = -10; k <= 10; k++) box('condensador', [2.266, 0.74, k * 0.031], [0.002, 0.40, 0.003], MAT.aluDark);
  add('filtro_secador', gCyl(0.032, 0.032, 0.20, 'y', 20), MAT.alu, [2.24, 0.72, 0.40]);
  box('pressostato', [2.20, 0.84, 0.40], [0.025, 0.03, 0.025], MAT.black, 0.004);
  tube('tubos_ac', [[1.90, 0.56, -0.20], [2.05, 0.58, -0.30], [2.20, 0.66, -0.36], [2.255, 0.86, -0.32]], 0.009, MAT.alu);
  tube('tubos_ac', [[2.24, 0.62, 0.40], [2.10, 0.66, 0.55], [1.50, 0.80, 0.62], [1.10, 0.86, 0.56], [1.02, 0.90, 0.30]], 0.006, MAT.alu);
  tube('tubos_ac', [[1.02, 0.88, 0.22], [1.30, 0.80, -0.10], [1.70, 0.60, -0.25], [1.90, 0.55, -0.22]], 0.011, MAT.alu);
  box('valv_exp', [1.005, 0.89, 0.26], [0.025, 0.05, 0.05], MAT.aluDark, 0.004);
  box('evaporador', [0.84, 0.86, -0.30], [0.06, 0.18, 0.24], MAT.alu);
  box('rad_aquec', [0.84, 0.84, 0.0], [0.045, 0.15, 0.20], MAT.copper);
  box('vent_interno', [0.70, 0.80, -0.50], [0.10, 0.10, 0.14], MAT.black, 0.03);
  box('caixa_ar', [0.80, 0.86, -0.06], [0.24, 0.24, 0.62], MAT.plastic, 0.02);
  [-0.07, 0, 0.07].forEach(zz => add('comandos_clima', gCyl(0.022, 0.022, 0.02, 'x', 20), MAT.plastic, [0.585, 1.02, zz]));
}

/* ===== Interior da cabine dupla ===== */
function buildInterior() {
  box('cabine', [-0.11, 0.575, 0], [2.02, 0.012, 1.56], MAT.underDS);              // assoalho da cabine
  box('cabine', [0.10, 0.62, 0], [1.60, 0.10, 0.24], MAT.underDS, 0.03);          // túnel do câmbio e do cardã
  { const sh = new THREE.Shape([[1.0, 1.15], [0.97, 0.80], [0.90, 0.58], [0.88, 0.58], [0.95, 0.80], [0.98, 1.15]].map(p => new THREE.Vector2(p[0], p[1])));
    const fg = new THREE.ExtrudeGeometry(sh, { depth: 1.52, bevelEnabled: false }); fg.translate(0, 0, -0.76); add('corta_fogo', fg, MAT.under); }
  box('painel', [0.74, 1.05, 0], [0.32, 0.26, 1.50], MAT.dash, 0.05);
  box('painel', [0.62, 1.16, 0], [0.10, 0.06, 1.44], MAT.dash, 0.02);
  box('quadro', [0.60, 1.21, 0.38], [0.04, 0.12, 0.30], MAT.black, 0.01);
  box('quadro', [0.585, 1.21, 0.38], [0.006, 0.09, 0.25], MAT.glass);
  box('radio', [0.595, 1.04, 0], [0.03, 0.09, 0.18], MAT.black, 0.006);
  box('botoes_4x4', [0.597, 0.985, 0], [0.02, 0.025, 0.12], MAT.black, 0.004);
  [-0.04, 0, 0.04].forEach(zz => box('botoes_4x4', [0.588, 0.985, zz], [0.004, 0.016, 0.03], MAT.lensAmber));
  box('airbag_pass', [0.66, 1.17, -0.38], [0.14, 0.012, 0.28], MAT.dash, 0.006);
  box('srs', [0.30, 0.64, 0], [0.10, 0.04, 0.12], MAT.yellow, 0.006);
  box('console', [0.12, 0.70, 0], [0.50, 0.10, 0.22], MAT.dash, 0.02);
  S.forEach(s => {
    box('bancos_diant', [0.02, 0.84, s * 0.38], [0.52, 0.12, 0.50], MAT.fabric, 0.04);
    box('bancos_diant', [-0.27, 1.20, s * 0.38], [0.11, 0.66, 0.50], MAT.fabric, 0.045, [0, 0, 0.16]);
    box('bancos_diant', [-0.33, 1.59, s * 0.38], [0.09, 0.17, 0.28], MAT.fabric, 0.03, [0, 0, 0.16]);
    box('bancos_diant', [0.02, 0.73, s * 0.38], [0.44, 0.10, 0.40], MAT.steelDark, 0.01);
    rod('cintos', [-0.18, 1.55, s * 0.76], [-0.20, 0.88, s * 0.16], 0.009, MAT.black);
    rod('cintos', [-0.30, 0.84, s * 0.68], [-0.20, 0.88, s * 0.16], 0.009, MAT.black);
    rod('cintos', [-1.02, 1.50, s * 0.72], [-0.80, 0.90, s * 0.20], 0.008, MAT.black);
    cyl('alto_falantes', [0.66, 0.78, s * 0.80], 0.08, 0.03, 'z', MAT.black, null, dp(s));
    cyl('alto_falantes', [-0.50, 0.78, s * 0.80], 0.07, 0.03, 'z', MAT.black, null, rdp(s));
    rod('maq_vidro', [0.70, 0.80, s * 0.80], [0.10, 1.14, s * 0.80], 0.008, MAT.steelDark, dp(s));
    cyl('maq_vidro', [0.40, 0.97, s * 0.805], 0.035, 0.04, 'z', MAT.black, null, dp(s));
    rod('maq_vidro_tras', [-0.90, 0.80, s * 0.80], [-0.34, 1.14, s * 0.80], 0.008, MAT.steelDark, rdp(s));
    cyl('maq_vidro_tras', [-0.62, 0.97, s * 0.805], 0.035, 0.04, 'z', MAT.black, null, rdp(s));
    box('dobradicas', [XA - 0.02, 1.06, s * (sideZ(XA - 0.02, 1.06) - 0.03)], [0.03, 0.06, 0.04], MAT.steelDark, 0.004);
    box('dobradicas', [XA - 0.02, 0.72, s * (sideZ(XA - 0.02, 0.72) - 0.03)], [0.03, 0.06, 0.04], MAT.steelDark, 0.004);
    box('dobradicas', [XB - 0.03, 1.06, s * (sideZ(XB - 0.03, 1.06) - 0.03)], [0.03, 0.06, 0.04], MAT.steelDark, 0.004);
    box('dobradicas', [XB - 0.03, 0.72, s * (sideZ(XB - 0.03, 0.72) - 0.03)], [0.03, 0.06, 0.04], MAT.steelDark, 0.004);
    box('caixas_roda', [XFA, 0.86, s * 0.70], [0.80, 0.02, 0.24], MAT.liner, 0.01);
  });
  box('banco_tras', [-0.78, 0.86, 0], [0.46, 0.12, 1.36], MAT.fabric, 0.04);
  box('banco_tras', [-1.02, 1.20, 0], [0.10, 0.58, 1.36], MAT.fabric, 0.045, [0, 0, 0.10]);
  box('retrovisor_int', [0.30, 1.56, 0], [0.02, 0.06, 0.22], MAT.black, 0.01);
  rod('retrovisor_int', [0.30, 1.585, 0], [0.25, 1.605, 0], 0.006, MAT.black);
  box('fech_capo', [2.32, 1.00, 0], [0.04, 0.04, 0.06], MAT.steelDark, 0.006);
  tube('fech_capo', [[2.32, 0.98, 0.03], [2.25, 0.96, 0.42], [1.60, 0.98, 0.66], [0.90, 0.80, 0.70], [0.78, 0.66, 0.70]], 0.003, MAT.cable);
  {
    const g = new THREE.Group(); reg('capo').group.add(g);
    const m = add('capo', new THREE.CylinderGeometry(0.005, 0.005, 1, 8), MAT.steel, null, null, g);
    ANIM.prop = { mesh: m, A: V(2.28, 1.00, -0.55), Hc: V(2.20, topY(2.20, 0.55) - 0.02, -0.55) };
    setBar(m, ANIM.prop.A, V(2.28, 1.0, -0.10)); m.visible = false;
  }
}

/* ===== Fixadores e encaixes: posições ===== */
function fxPositions() {
  const P = {}, A = (id, p, d, s, mount) => ((P[id] = P[id] || { pts: [], paths: [] }).pts.push([p, d, s, mount]));
  const Bp = (id, pts, r, mount, closed) => ((P[id] = P[id] || { pts: [], paths: [] }).paths.push([pts, r, mount, closed]));
  const up = [0, 1, 0], dn = [0, -1, 0], px = [1, 0, 0], nx = [-1, 0, 0], pz = [0, 0, 1], nz = [0, 0, -1];
  const nrm = (x, s) => surf(x, s).n, neg = v => [-v[0], -v[1], -v[2]];
  const sd = s => [0, 0, s];
  /* rodas: 6 porcas por roda (0–5 dianteira esquerda, 6–11 dianteira direita, 12–17 traseira esquerda, 18–23 traseira direita) */
  [XFA, XRA].forEach((X, xi) => S.forEach((s, si) => { const zc = s * ((xi ? TR : TF) + 0.10); for (let k = 0; k < 6; k++) { const a = Math.PI / 2 + k * TAU / 6; A('fx_roda', [X + 0.07 * Math.cos(a), WY + 0.07 * Math.sin(a), zc], sd(s), 0.018, 'w' + (xi * 2 + si)); } }));
  S.forEach((s, si) => A('fx_cubo', [XFA, WY, s * (TF + 0.10)], sd(s), 0.03, 'w' + si));
  A('fx_carter', [1.59, 0.388, -0.07], dn, 0.012);
  for (let k = 0; k < 9; k++) S.forEach(s => A('fx_cabecote', [1.49 + k * 0.053, 0.978, s * 0.12], up, 0.011));
  for (let k = 0; k < 5; k++) S.forEach(s => A('fx_tampa_valv', [1.51 + k * 0.095, 1.028, s * 0.10], up, 0.008));
  S.forEach(s => [1.62, 1.70].forEach(x => A('fx_coxins', [x, 0.468, s * 0.30], up, 0.011)));
  [[0.04, 0.04], [0.04, -0.04], [-0.04, 0.04], [-0.04, -0.04]].forEach(([dy, dz]) => A('fx_turbo', [TX - 0.09, TYt + dy, TZ + 0.06 + dz], [0, 0, -1], 0.008));
  CYLX.forEach(x => [-0.02, 0.02].forEach(dx => A('fx_coletor_esc', [x + dx, 0.905, -0.168], nz, 0.008)));
  [[1.62, 0.25], [1.62, -0.25], [1.90, 0.25], [1.90, -0.25]].forEach(([x, z]) => A('fx_intercooler', [x, 1.10, z], up, 0.009));
  [[1.85, 0.87, -0.34], [1.82, 1.06, -0.31], [1.69, 1.06, 0.31], [1.57, 0.95, 0.215]].forEach(p => A('fx_abracadeiras', p, up, 0.009));
  CYLX.forEach(x => A('fx_bicos', [x + 0.03, 1.035, 0.03], up, 0.009));
  CYLX.forEach(x => { A('fx_tubos_alta', [x, 1.06, 0.03], up, 0.007); A('fx_tubos_alta', [x, 1.045, 0.11], up, 0.007); });
  A('fx_tubos_alta', [1.86, 0.825, 0.21], up, 0.007); A('fx_tubos_alta', [1.915, 1.04, 0.135], px, 0.007);
  A('fx_filtro_comb', [1.27, 0.915, 0.61], up, 0.009); A('fx_filtro_comb', [1.33, 0.915, 0.61], up, 0.009); A('fx_filtro_comb', [1.30, 0.69, 0.58], dn, 0.01);
  [[-0.50, 0.53], [-1.00, 0.53]].forEach(([x, y]) => S.forEach(s => A('fx_tanque', [x, 0.30, 0.30 + s * 0.20], dn, 0.01)));
  S.forEach(s => { A('fx_radiador', [2.20, 1.0, s * 0.30], up, 0.01); A('fx_radiador', [2.20, 0.48, s * 0.30], dn, 0.01); });
  [[1.99, 1.0, -0.06], [2.18, 0.97, -0.22], [2.18, 0.54, 0.22], [1.99, 0.76, 0.05]].forEach(p => A('fx_mangueiras', p, up, 0.009));
  A('fx_ventoinha', [2.06, 0.80, 0], px, 0.016);
  A('fx_alternador', [1.95, 0.99, 0.26], up, 0.01); A('fx_alternador', [1.95, 0.87, 0.14], pz, 0.01);
  A('fx_partida', [1.45, 0.60, 0.22], nx, 0.01); A('fx_partida', [1.45, 0.50, 0.22], nx, 0.01);
  A('fx_bateria', [2.0, 0.95, 0.42], up, 0.012); A('fx_bateria', [2.05, 0.95, 0.59], up, 0.012); A('fx_bateria', [1.93, 0.86, 0.50], nx, 0.012);
  [[0.48, -0.14], [0.60, -0.14], [0.48, -0.26], [0.60, -0.26]].forEach(([y, z]) => A('fx_compressor', [1.99, y, z], px, 0.009));
  [[0.79, -0.19], [0.69, -0.19], [0.74, -0.30]].forEach(([y, z]) => A('fx_bomba_dir', [1.99, y, z], px, 0.009));
  for (let k = 0; k < 8; k++) { const a = k * TAU / 8; A('fx_cambio', [1.46, EYc + 0.19 * Math.cos(a), 0.19 * Math.sin(a)], nx, 0.011); }
  A('fx_coxim_cambio', [0.95, 0.43, 0.05], dn, 0.01); A('fx_coxim_cambio', [0.89, 0.43, -0.05], dn, 0.01);
  A('fx_bujoes_cambio', [1.05, 0.60, 0.102], pz, 0.012); A('fx_bujoes_cambio', [1.05, 0.458, 0], dn, 0.012);
  for (let k = 0; k < 6; k++) { const a = k * TAU / 6; A('fx_transf', [XTR + 0.16, 0.48 + 0.10 * Math.cos(a), 0.05 + 0.10 * Math.sin(a)], px, 0.009); }
  A('fx_bujoes_transf', [XTR, 0.52, 0.182], pz, 0.012); A('fx_bujoes_transf', [XTR, 0.368, 0.05], dn, 0.012);
  for (let k = 0; k < 4; k++) { const a = Math.PI / 4 + k * TAU / 4; A('fx_cardan_t', [-1.385, 0.39 + 0.045 * Math.cos(a), 0.045 * Math.sin(a)], nx, 0.008); }
  S.forEach(s => A('fx_cardan_t', [-0.55, 0.487, s * 0.07], up, 0.009));
  for (let k = 0; k < 4; k++) { const a = Math.PI / 4 + k * TAU / 4; A('fx_cardan_d', [DFX - 0.135, DFY + 0.04 * Math.cos(a), DFZ + 0.04 * Math.sin(a)], nx, 0.008); }
  for (let k = 0; k < 4; k++) { const a = Math.PI / 4 + k * TAU / 4; A('fx_cardan_d', [XTR + 0.165, 0.46 + 0.04 * Math.cos(a), 0.17 + 0.04 * Math.sin(a)], px, 0.008); }
  A('fx_dif_d', [DFX + 0.05, DFY + 0.05, DFZ + 0.07], pz, 0.012); A('fx_dif_d', [DFX, DFY - 0.10, DFZ], dn, 0.012);
  A('fx_dif_t', [XRA, WY + 0.02, 0.14], pz, 0.012);
  for (let k = 0; k < 10; k++) { const a = k * TAU / 10; A('fx_dif_t', [XRA - 0.131, WY + 0.11 * Math.cos(a), 0.11 * Math.sin(a)], nx, 0.008); }
  S.forEach(s => { const z0 = s > 0 ? DFZ + 0.09 : -0.35; for (let k = 0; k < 6; k++) { const a = k * TAU / 6; A('fx_semieixo_d', [XFA + 0.035 * Math.cos(a), WY + 0.035 * Math.sin(a), z0], sd(s), 0.007); } });
  S.forEach(s => { const zs = s * 0.56; [-0.05, 0.05].forEach(dx => [-0.04, 0.04].forEach(dz => A('fx_grampos', [XRA + dx, 0.292, zs + dz], dn, 0.01))); });
  S.forEach(s => { const zs = s * 0.56; A('fx_feixe', [-0.96, 0.51, zs + s * 0.04], sd(s), 0.011); A('fx_feixe', [-2.18, 0.51, zs + s * 0.04], sd(s), 0.011); A('fx_feixe', [-2.22, 0.58, zs + s * 0.04], sd(s), 0.011); });
  S.forEach(s => { A('fx_amort_d', [XFA + 0.04, 0.80, s * 0.50], sd(s), 0.01); A('fx_amort_d', [XFA + 0.02, 0.28, s * 0.57], sd(s), 0.01); });
  S.forEach(s => { const dx = s > 0 ? 0.08 : -0.08; A('fx_amort_t', [XRA + dx * 3.2, 0.62, s * 0.52], sd(s), 0.01); A('fx_amort_t', [XRA + dx, 0.30, s * 0.52], sd(s), 0.01); });
  S.forEach(s => [XFA - 0.15, XFA + 0.14].forEach(x => A('fx_bandeja', [x, 0.36, s * 0.37], neg(sd(s)), 0.012)));
  S.forEach(s => [XFA - 0.12, XFA + 0.10].forEach(x => A('fx_bandeja_sup', [x, 0.73, s * 0.47], up, 0.011)));
  S.forEach(s => { A('fx_pivos', [XFA, 0.205, s * 0.62], dn, 0.011); A('fx_pivos', [XFA, 0.61, s * 0.61], up, 0.011); });
  S.forEach(s => A('fx_torcao', [0.56, 0.31, s * 0.42], dn, 0.011));
  S.forEach((s, si) => { const ang = Math.PI * 0.85; [[0.11, 0.04], [0.11, -0.04], [0.085, 0.07], [0.085, -0.07]].forEach(([rr, t]) => A('fx_pinca', [XFA + Math.cos(ang) * rr - Math.sin(ang) * t, WY + Math.sin(ang) * rr + Math.cos(ang) * t, s * 0.655], neg(sd(s)), 0.009, 'y' + si)); });
  [[0.40, 0.98], [0.40, 0.86], [0.48, 0.98], [0.48, 0.86]].forEach(([z, y]) => A('fx_servo', [0.985, y, z - 0.04], nx, 0.009));
  A('fx_servo', [1.17, 0.95, 0.43], px, 0.008); A('fx_servo', [1.17, 0.89, 0.37], px, 0.008);
  [[1.83, 0.53], [1.89, 0.53], [1.86, 0.61]].forEach(([x, y]) => A('fx_caixa_dir', [x, y, 0.395], pz, 0.011));
  A('fx_pitman', [1.86, 0.51, 0.37], pz, 0.013);
  A('fx_braco_inter', [1.85, 0.53, -0.365], nz, 0.011); A('fx_braco_inter', [1.87, 0.49, -0.365], nz, 0.011);
  S.forEach(s => { A('fx_terminais', [XFA + 0.12, 0.31, s * 0.63], dn, 0.01); A('fx_terminais', [1.80, 0.37, s * 0.28], dn, 0.01); });
  A('fx_volante', [0.52, 1.25, 0.38], [-0.70, 0.71, 0], 0.012, 'sw');
  A('fx_airbag', [0.555, 1.21, 0.30], [-0.70, 0.71, 0], 0.008, 'sw'); A('fx_airbag', [0.555, 1.21, 0.46], [-0.70, 0.71, 0], 0.008, 'sw');
  S.forEach(s => [[0.26, 0.20], [0.26, -0.20], [-0.22, 0.20], [-0.22, -0.20]].forEach(([dx, dz]) => A('fx_bancos', [0.02 + dx, 0.69, s * 0.38 + dz], up, 0.009)));
  S.forEach(s => { A('fx_cintos', [-0.18, 1.55, s * 0.76], sd(s), 0.009); A('fx_cintos', [-0.30, 0.84, s * 0.68], sd(s), 0.009); A('fx_cintos', [-1.02, 1.50, s * 0.72], sd(s), 0.009); });
  /* lataria */
  S.forEach(s => { [1.15, 1.85].forEach(x => A('fx_capo', [x, topY(x, 0.66) - 0.02, s * 0.66], dn, 0.009, 'hood')); });
  [-0.04, 0.04].forEach(z => A('fx_fech_capo', [2.32, 1.02, z], px, 0.008));
  [[-0.30, 1.04], [-0.10, 1.04], [0.10, 1.04], [0.30, 1.04], [-0.25, 0.83], [0.25, 0.83]].forEach(([z, y]) => A('fx_grade', [2.38, y, z], px, 0.008));
  S.forEach(s => { A('fx_parachoque', [2.36, 0.48, s * 0.40], dn, 0.01); A('fx_parachoque', [2.36, 0.48, s * 0.48], dn, 0.01); });
  S.forEach(s => A('fx_parachoque', [2.22, 0.62, s * 0.80], sd(s), 0.009));
  S.forEach(s => [0.48, 0.60].forEach(z => A('fx_parachoque_t', [-2.70, 0.545, s * z], nx, 0.01)));
  S.forEach(s => [[0.20, 1.03], [0.40, 1.03], [0.70, 0.98]].forEach(([z, y]) => A('fx_farol', [2.38, y, s * (z + 0.30)], px, 0.008)));
  S.forEach(s => [1.10, 0.90].forEach(y => A('fx_lanterna', [-2.675, y, s * 0.79], px, 0.008)));
  S.forEach(s => { [1.20, 1.60, 2.00].forEach(x => A('fx_paralama', [x, topY(x, 0.78) - 0.004, s * 0.77], up, 0.008)); A('fx_paralama', [2.30, 0.90, s * (sideZ(2.30, 0.90) - 0.01)], sd(s), 0.008); A('fx_paralama', [XA - 0.01, 0.75, s * (sideZ(XA - 0.01, 0.75) - 0.01)], sd(s), 0.008); });
  [XFA, XRA].forEach(xa => S.forEach(s => [0.35, 0.65, 0.85, 0.15].forEach(t => { const a = Math.PI * t, x = xa + Math.cos(a) * 0.485, y = WY + Math.sin(a) * 0.485; A('fx_molduras', [x, y, s * (sideZ(x, Math.max(0.56, y)) + 0.03)], sd(s), 0.007); })));
  S.forEach(s => [0.2, 0.4, 0.6, 0.8].forEach(t => { const a = Math.PI * t; A('fx_forros', [XFA + Math.cos(a) * 0.45, WY + Math.sin(a) * 0.45, s * 0.80], dn, 0.007); }));
  /* dobradiças: por porta, 4 na coluna (0–3) e o limitador (4); 0–4 dianteira esq., 5–9 dianteira dir., 10–14 traseira esq., 15–19 traseira dir. */
  [[XA - 0.02, 'door'], [XB - 0.03, 'rdoor']].forEach(([x, m]) => S.forEach(s => {
    [1.06, 0.72].forEach(y => [-0.012, 0.012].forEach(dy => A('fx_dobradicas', [x, y + dy, s * (sideZ(x, y) - 0.012)], nx, 0.008)));
    A('fx_dobradicas', [x - 0.06, 0.90, s * (sideZ(x - 0.06, 0.90) - 0.04)], nx, 0.008, m);
  }));
  [[XB + 0.005, 'door'], [XD2 + 0.005, 'rdoor']].forEach(([x, m]) => S.forEach(s => [0.96, 0.92, 0.88].forEach(y => A('fx_fech_portas', [x, y, s * (sideZ(x, y) - 0.012)], px, 0.007, m))));
  S.forEach(s => [[-0.03, 0], [0.03, 0.02], [0, -0.03]].forEach(([dx, dy]) => A('fx_retrovisor', [XDF - 0.06 + dx, 1.235 + dy, s * (sideZ(XDF - 0.06, 1.22) - 0.03)], neg(sd(s)), 0.007, 'door')));
  S.forEach(s => [0.30, 0.55].forEach(x => A('fx_vidro_porta', [x, 1.10, s * 0.80], neg(sd(s)), 0.007, 'door')));
  S.forEach(s => [-0.45, -0.70].forEach(x => A('fx_vidro_porta_t', [x, 1.10, s * 0.80], neg(sd(s)), 0.007, 'rdoor')));
  S.forEach(s => [[0.70, 0.80], [0.10, 1.14], [0.70, 1.10], [0.15, 0.80]].forEach(([x, y]) => A('fx_maq_vidro', [x, y, s * 0.79], neg(sd(s)), 0.007, 'door')));
  S.forEach(s => [[-0.90, 0.80], [-0.34, 1.14], [-0.40, 0.80]].forEach(([x, y]) => A('fx_maq_vidro_t', [x, y, s * 0.79], neg(sd(s)), 0.007, 'rdoor')));
  S.forEach(s => { for (let k = 0; k < 7; k++) { const t = k / 6; A('fx_forro_porta', [XB + 0.06 + t * (XA - XB - 0.12), k % 2 ? 0.62 : 1.12, s * 0.77], neg(sd(s)), 0.007, 'door'); } });
  S.forEach(s => { for (let k = 0; k < 6; k++) { const t = k / 5; A('fx_forro_porta_t', [XD2 + 0.06 + t * (XB - XD2 - 0.12), k % 2 ? 0.62 : 1.12, s * 0.77], neg(sd(s)), 0.007, 'rdoor'); } });
  S.forEach(s => A('fx_tampa_cac', [TAILH[0], TAILH[1], s * 0.72], sd(s), 0.012));
  S.forEach(s => { A('fx_cabos_tampa', [XTG + 0.01, 1.19, s * 0.735], sd(s), 0.008); A('fx_cabos_tampa', [XBK + 0.02, 0.86, s * 0.735], sd(s), 0.008, 'tail'); });
  S.forEach(s => A('fx_fech_tampa', [XBK + 0.03, 1.15, s * 0.70], sd(s), 0.009, 'tail'));
  S.forEach(s => A('fx_fech_tampa', [XTG + 0.005, 1.15, s * 0.735], px, 0.009));
  S.forEach(s => [-1.50, -2.05, -2.55].forEach(x => A('fx_cacamba', [x, 0.575, s * 0.62], dn, 0.011)));
  S.forEach(s => [1.02, 0.20, -0.62, -1.08].forEach(x => A('fx_coxins_cab', [x, 0.505, s * (x > 0.9 ? 0.50 : 0.62)], dn, 0.011)));
  S.forEach(s => [0.60, -0.10, -0.80].forEach(x => A('fx_estribos', [x, 0.47, s * 0.60], sd(s), 0.009)));
  S.forEach(s => [0.10, -0.46, -1.02].forEach(x => A('fx_rack', [x, 1.682, s * 0.58], up, 0.007)));
  S.forEach(s => [2.30, 2.36].forEach(x => A('fx_ganchos', [x, 0.445, s * 0.44], up, 0.01)));
  [[1.40, 0.30], [1.40, -0.26], [1.95, 0.30], [1.95, -0.26]].forEach(([x, z]) => A('fx_protetor', [x, 0.25, z], dn, 0.01));
  [[0.45, 0.18], [0.45, -0.14], [0.79, 0.18], [0.79, -0.14]].forEach(([x, z]) => A('fx_protetor_t', [x, 0.31, z], dn, 0.01));
  A('fx_estepe', [-2.772, 0.50, 0.24], px, 0.01); A('fx_estepe', [-2.24, 0.56, 0], up, 0.01);
  [-0.22, 0.38].forEach(z => A('fx_limpador', [0.90, topY(0.90, z) + 0.018, z], up, 0.009));
  [-0.55, -0.33, -0.11, 0.11, 0.33, 0.55].forEach(z => A('fx_grade_torpedo', [0.965, topY(0.965, z) + 0.004, z], up, 0.008));
  /* cordões de cola dos vidros e soldas */
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
  Bp('fx_cola_vidro_tras', toPts(bead(-1.163, -1.150, zf(0.56), 0.002), -0.008), 0.0045, null, true);
  for (let k = 0; k < 14; k++) { const x = XWT - 0.04 - k * (XWT + 1.10) / 13; S.forEach(s => A('fx_solda_teto', onSurf(x, s * (sRow(x, J.UE) - 0.012), 0.002), up, 0.005)); }
  for (let k = 0; k < 8; k++) { const t = k / 7, x = XWB + (XWT - XWB) * t; S.forEach(s => A('fx_solda_colunas', onSurf(x, s * (sRow(x, J.T1) + 0.02), 0.002), nrm(x, s * sRow(x, J.T1)), 0.005)); }
  return P;
}

return {
  build() {
    buildBody(); buildChassis(); buildEngine(); buildAir(); buildFuel(); buildCooling(); buildExhaust(); buildElectric();
    buildTransmission(); buildDriveline(); buildWheels(); buildSuspension(); buildBrakes(); buildSteering(); buildAC(); buildInterior();
  },
  fxPositions
};
};
