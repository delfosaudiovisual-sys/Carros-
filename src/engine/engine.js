/* ===== Casca da página de um carro: cabeçalho, palco 3D, barra e painéis ===== */
function appHTML(CAR, opts) {
  const e = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const many = (opts.count || 1) > 1;
  const tap = matchMedia('(hover: hover) and (pointer: fine)').matches ? 'Clique' : 'Toque';
  return `<div id="app" class="${opts.enter ? 'entering' : ''}">
  <div id="menu" role="menu" aria-label="Opções do modelo" hidden></div>
  <header>
    <button id="carBtn" class="brand" type="button" ${many ? 'aria-haspopup="dialog" aria-expanded="false"' : 'disabled'} aria-label="${e(CAR.title)}${many ? '. Trocar de carro' : ''}">
      <span class="num" aria-hidden="true">${e(CAR.badge)}</span>
      <span class="txt"><strong><span class="full">${e(CAR.title)}</span><span class="short">${e(CAR.short || CAR.name)}</span></strong><span>${e(CAR.sub)}</span></span>
      ${many ? `<span class="swap" aria-hidden="true"><i></i><span>Trocar carro</span></span>` : ''}
    </button>
    <button id="fichaBtn" class="hbtn" type="button" aria-label="Ficha técnica">Ficha<span class="wide-only"> técnica</span></button>
    <div class="search"><input id="q" type="search" placeholder="Buscar peça, código ou parafuso" autocomplete="off" enterkeyhint="search" aria-label="Buscar peça, código ou parafuso" role="combobox" aria-autocomplete="list" aria-expanded="false" aria-controls="qres"><kbd class="slash" aria-hidden="true">/</kbd><ul id="qres" role="listbox" aria-label="Resultados da busca" hidden></ul></div>
  </header>
  <main id="stage">
    <canvas id="c" aria-label="Modelo 3D do ${e(CAR.name)}. ${tap} numa peça para ver detalhes."></canvas>
    <div id="labels"></div>
    <div id="tip" hidden></div>
    <div id="toolbar">
      <div class="seg" id="viewseg" role="group" aria-label="Visualização">
        <button data-v="solid" aria-pressed="false">Lataria</button><button data-v="xray" aria-pressed="true">Raio-x</button><button data-v="mech" aria-pressed="false">Só mecânica</button>
      </div>
      <button class="tbtn mbtn" data-menu="abrir" aria-haspopup="true" aria-expanded="false">Abrir</button>
      <button class="tbtn mbtn" data-menu="mostrar" aria-haspopup="true" aria-expanded="false">Mostrar</button>
      <button class="tbtn mbtn" data-menu="vistas" aria-haspopup="true" aria-expanded="false">Vistas</button>
      <button class="tbtn mbtn more" data-menu="mais" aria-haspopup="true" aria-expanded="false">Mais</button>
    </div>
    <div id="hint" hidden>${tap} numa peça para ver o que ela faz${tap === 'Clique' ? ' · setas para andar' : ''}</div>
    <div id="navpad" role="group" aria-label="Andar com a câmera">
      <div class="np-vert"><button data-nav="u" aria-label="Subir"><i class="ic i-up"></i></button><button data-nav="d" aria-label="Descer"><i class="ic i-down"></i></button></div>
      <div class="np-cross">
        <button data-nav="f" class="np-f" aria-label="Para a frente"><i class="ic i-fwd"></i></button>
        <button data-nav="l" class="np-l" aria-label="Para a esquerda"><i class="ic i-left"></i></button>
        <button data-nav="home" class="np-c" aria-label="Voltar à vista inicial"><i class="ic i-home"></i></button>
        <button data-nav="r" class="np-r" aria-label="Para a direita"><i class="ic i-right"></i></button>
        <button data-nav="b" class="np-b" aria-label="Para trás"><i class="ic i-back"></i></button>
      </div>
    </div>
  </main>
  <div id="panel">
    <button id="grab" aria-label="Expandir painel"></button>
    <aside id="left">
      <nav id="tabs" role="tablist">
        <button role="tab" id="tab-sistemas" data-tab="sistemas" aria-selected="true" aria-controls="tabbody">Sistemas</button>
        <button role="tab" id="tab-fluxos" data-tab="fluxos" aria-selected="false" aria-controls="tabbody" tabindex="-1">Como funciona</button>
        <button role="tab" id="tab-sintomas" data-tab="sintomas" aria-selected="false" aria-controls="tabbody" tabindex="-1">Sintomas</button>
        <button role="tab" id="tab-revisoes" data-tab="revisoes" aria-selected="false" aria-controls="tabbody" tabindex="-1">Revisões</button>
      </nav>
      <div id="tabbody" role="tabpanel" aria-labelledby="tab-sistemas"></div>
    </aside>
    <aside id="right"><div id="detail"></div></aside>
  </div>
</div>`;
}

/* ===== Motor do app: recebe um carro (dados + geometria) e monta a cena 3D e a interface =====
   Cada carro é registrado em window.CARS por um arquivo de src/cars/. O motor devolve { leave, destroy }. */
window.mountCar = function mountCar(CAR, opts) {
'use strict';
opts = opts || {};
const D = CAR.data();
const { SYS, PARTS, FIX, FXKIND, SYMPTOMS, FLOWS, MAINT, SPECS, GUIDES, EXV } = D;
const PROC = Object.assign({}, D.PROC, (window.CAR_PROC || {})[CAR.id]);   // por peça: { oem, alt, f (ferramentas), pre, d: [desmontar], m: [montar] }

/* ---------- códigos: referência do app para cada peça e fixador (o código original vem de PROC) ---------- */
const SYS_ABBR = { motor: 'MOT', ar: 'ADM', comb: 'CMB', ign: 'IGN', arref: 'ARF', esc: 'ESC', ele: 'ELE', trans: 'TRM', freio: 'FRE', susp: 'SUS', dir: 'DIR', carro: 'CAR', int: 'INT', clima: 'CLI' };
const CODE = {};
(() => {
  const cnt = {}; let k = 0;
  for (const id in PARTS) { const s = PARTS[id].s, n = cnt[s] = (cnt[s] || 0) + 1; CODE[id] = `${CAR.codePrefix}-${SYS_ABBR[s] || s.slice(0, 3).toUpperCase()}-${String(n).padStart(2, '0')}`; }
  for (const id in FIX) CODE[id] = `${CAR.codePrefix}-FX-${String(++k).padStart(2, '0')}`;
})();

/* ===== Núcleo 3D: constantes, materiais, registro de peças e utilitários ===== */
if (THREE.ColorManagement) THREE.ColorManagement.legacyMode = false;
const TAU = Math.PI * 2;
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const UPY = new THREE.Vector3(0, 1, 0);

let carRoot;                     // grupo raiz do carro
const REG = {};                  // id -> { id, group, meshes: [] }
const ROUTES = {};               // id -> trajetos dos tubos (pontos em coordenadas do carro), na ordem em que foram criados
const ANIM = { spin: [], cam: [], pistons: [], rods: [], fan: null, theta: 0, struts: [], prop: null, wheel: null, tie: [], crank: null };
const WHEELS = [];               // rodas: pivô de giro (e de esterço na frente)
const ARTS = [];                 // articulações: capô, portas e tampas girando nas dobradiças

function reg(id) {
  let r = REG[id];
  if (!r) {
    const g = new THREE.Group(); g.name = id; carRoot.add(g);
    r = REG[id] = { id, group: g, meshes: [] };
  }
  return r;
}
function tag(id, m) {
  m.userData.pid = id; m.userData.baseMat = m.material;
  reg(id).meshes.push(m);
  return m;
}
function place(id, m, parent) {                 // pivôs de dobradiça recebem peças em coordenadas do carro
  const par = parent || reg(id).group; par.add(m);
  if (par.userData.abs) m.position.sub(par.userData.absPos || par.position);
  return tag(id, m);
}
function add(id, geo, mat, p, r, parent) {
  const m = new THREE.Mesh(geo, mat);
  if (p) m.position.set(p[0], p[1], p[2]);
  if (r) m.rotation.set(r[0] || 0, r[1] || 0, r[2] || 0);
  return place(id, m, parent);
}
function pivotOf(id, p) {
  const g = new THREE.Group(); g.position.set(p[0], p[1], p[2]);
  reg(id).group.add(g); return g;
}

/* ---------- materiais ---------- */
const std = o => new THREE.MeshStandardMaterial(o);
const phy = o => new THREE.MeshPhysicalMaterial(o);
const MAT = {
  paint: phy(Object.assign({ color: 0x0b0c0f, roughness: 0.34, metalness: 0.25, clearcoat: 1, clearcoatRoughness: 0.16 }, CAR.paint || {})),
  trim: std({ color: 0x141517, roughness: 0.7 }),
  bumperTop: std({ color: 0x4f5358, roughness: 0.85 }),
  under: std({ color: 0x25272a, roughness: 0.95 }),
  liner: std({ color: 0x101112, roughness: 0.95, side: THREE.DoubleSide }),
  glass: phy({ color: 0x18222a, roughness: 0.03, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false }),
  lensClear: phy({ color: 0xf2f5f7, roughness: 0.02, transparent: true, opacity: 0.16, depthWrite: false, clearcoat: 1 }),
  reflector: std({ color: 0xd9dde1, roughness: 0.18, metalness: 1 }),
  lensRed: phy({ color: 0xb0121c, roughness: 0.12, transparent: true, opacity: 0.88 }),
  lensAmber: std({ color: 0xe38a18, roughness: 0.25, emissive: 0x2a1200 }),
  bulb: std({ color: 0xfff4d6, roughness: 0.2, emissive: 0x6b5a2a }),
  chrome: std({ color: 0xe8eaec, roughness: 0.1, metalness: 1 }),
  alu: std({ color: 0xb6bcc2, roughness: 0.4, metalness: 0.72 }),
  aluDark: std({ color: 0x858b91, roughness: 0.48, metalness: 0.7 }),
  iron: std({ color: 0x55595e, roughness: 0.6, metalness: 0.55 }),
  steel: std({ color: 0x9aa0a6, roughness: 0.42, metalness: 0.8 }),
  steelDark: std({ color: 0x3b3f44, roughness: 0.55, metalness: 0.6 }),
  black: std({ color: 0x1a1b1d, roughness: 0.6 }),
  plastic: std({ color: 0x232528, roughness: 0.7 }),
  rubber: std({ color: 0x121213, roughness: 0.92 }),
  tire: std({ color: 0x151516, roughness: 0.88 }),
  hose: std({ color: 0x18191a, roughness: 0.78 }),
  zinc: std({ color: 0xcfc9ad, roughness: 0.32, metalness: 0.85 }),
  copper: std({ color: 0xb87333, roughness: 0.35, metalness: 0.9 }),
  hubcap: std({ color: 0xbfc3c7, roughness: 0.3, metalness: 0.55 }),
  wheelSteel: std({ color: 0x2b2d30, roughness: 0.5, metalness: 0.6 }),
  coolantTank: phy({ color: 0xe7b27c, roughness: 0.35, transparent: true, opacity: 0.8 }),
  whiteRes: phy({ color: 0xece9df, roughness: 0.4, transparent: true, opacity: 0.85 }),
  fabric: std({ color: 0x2a2d31, roughness: 1 }),
  dash: std({ color: 0x1c1e21, roughness: 0.85 }),
  red: std({ color: 0xb3261e, roughness: 0.5 }),
  yellow: std({ color: 0xe6c11c, roughness: 0.45 }),
  blue: std({ color: 0x2a5db0, roughness: 0.5 }),
  batt: std({ color: 0x1f2226, roughness: 0.55 }),
  box: std({ color: 0x6e747a, roughness: 0.4, metalness: 0.7 }),
  coil: std({ color: 0x1e2022, roughness: 0.45 }),
  cat: std({ color: 0x86827b, roughness: 0.45, metalness: 0.7 }),
  exhaust: std({ color: 0x6b5d50, roughness: 0.7, metalness: 0.45 }),
  belt: std({ color: 0x1b1b1b, roughness: 0.85, side: THREE.DoubleSide }),
  pad: std({ color: 0x4a4038, roughness: 0.9 }),
  disc: std({ color: 0x8e9297, roughness: 0.33, metalness: 0.9 }),
  caliper: std({ color: 0x5e6166, roughness: 0.5, metalness: 0.6 }),
  spring: std({ color: 0x2c2f33, roughness: 0.4, metalness: 0.6 }),
  harness: std({ color: 0x202020, roughness: 0.7 }),
  plate: std({ color: 0xdcdfd8, roughness: 0.6 }),
  grille: std({ color: 0x0c0d0e, roughness: 0.8 }),
  cable: std({ color: 0x2a2a2a, roughness: 0.6 }),
  redCable: std({ color: 0x9e1c1c, roughness: 0.55 }),
  fluid: phy({ color: 0xdcd29e, roughness: 0.3, transparent: true, opacity: 0.85 }),
  carpet: std({ color: 0x1b1c1e, roughness: 1 }),
  gap: std({ color: 0x050506, roughness: 0.95, side: THREE.DoubleSide }),
  frit: std({ color: 0x0a0b0c, roughness: 0.55, side: THREE.DoubleSide }),
  underDS: std({ color: 0x25272a, roughness: 0.95, side: THREE.DoubleSide }),
  fabricDS: std({ color: 0x2a2d31, roughness: 1, side: THREE.DoubleSide }),
  clip: std({ color: 0x9aa1a8, roughness: 0.6 }),
  weld: std({ color: 0xd08a3a, roughness: 0.45, metalness: 0.6 }),
  glue: std({ color: 0x2e3440, roughness: 0.35 }),
  guide: std({ color: 0x6f767e, roughness: 0.6 }),
  tape: std({ color: 0xe2ddd2, roughness: 0.8 }),
  paper: std({ color: 0xe6d9b8, roughness: 0.95 })
};

/* ---------- geometrias ---------- */
function gBox(w, h, d, r) {
  if (r && THREE.RoundedBoxGeometry) return new THREE.RoundedBoxGeometry(w, h, d, 2, Math.min(r, w / 2, h / 2, d / 2) * 0.999);
  return new THREE.BoxGeometry(w, h, d);
}
function gCyl(r1, r2, h, axis, seg, open) {
  const g = new THREE.CylinderGeometry(r1, r2, h, seg || 24, 1, !!open);
  if (axis === 'x') g.rotateZ(-Math.PI / 2);
  else if (axis === 'z') g.rotateX(Math.PI / 2);
  return g;
}
function gLathe(prof, axis, seg) {
  const g = new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(r, y)), seg || 40);
  if (axis === 'x') g.rotateZ(-Math.PI / 2);
  else if (axis === 'z') g.rotateX(Math.PI / 2);
  return g;
}
function gTorus(R, r, axis, rs, ts) {
  const g = new THREE.TorusGeometry(R, r, rs || 10, ts || 40);   // eixo z por padrão
  if (axis === 'y') g.rotateX(Math.PI / 2);
  else if (axis === 'x') g.rotateY(Math.PI / 2);
  return g;
}
function curveOf(pts, closed) {
  return new THREE.CatmullRomCurve3(pts.map(p => V(p[0], p[1], p[2])), !!closed, 'centripetal', 0.5);
}
function gTube(pts, r, seg, closed, rad) {
  return new THREE.TubeGeometry(curveOf(pts, closed), seg || Math.max(16, pts.length * 12), r, rad || 10, !!closed);
}

/* peças por atalho (posições em coordenadas do carro: x para frente, y para cima, z para a esquerda) */
function box(id, c, s, mat, r, rot, parent) { return add(id, gBox(s[0], s[1], s[2], r), mat, c, rot, parent); }
function cyl(id, c, rad, len, axis, mat, rot, parent, seg) { return add(id, gCyl(rad, rad, len, axis, seg), mat, c, rot, parent); }
function tube(id, pts, r, mat, closed, parent, seg, rad) { (ROUTES[id] = ROUTES[id] || []).push(pts); return add(id, gTube(pts, r, seg || 0, closed, rad), mat, null, null, parent); }
function rod(id, a, b, r, mat, parent, seg, r2) {
  const A = V(a[0], a[1], a[2]), B = V(b[0], b[1], b[2]); const d = B.clone().sub(A); const L = d.length();
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r2 == null ? r : r2, r, L, seg || 12), mat);
  m.position.copy(A).addScaledVector(d, 0.5);
  m.quaternion.setFromUnitVectors(UPY, d.normalize());
  return place(id, m, parent);
}
function setBar(m, a, b) {                        // cilindro de altura 1 esticado entre a e b
  const d = b.clone().sub(a), L = d.length();
  m.position.copy(a).addScaledVector(d, 0.5); m.quaternion.setFromUnitVectors(UPY, d.normalize()); m.scale.set(1, Math.max(L, 1e-4), 1);
}
function sph(id, c, r, mat, parent, sx) {
  const m = add(id, new THREE.SphereGeometry(r, 16, 12), mat, c, null, parent);
  if (sx) m.scale.set(sx[0], sx[1], sx[2]);
  return m;
}
const S = [1, -1];               // lado esquerdo (+z) e direito (-z)
const lerp3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];

/* mola helicoidal ao longo de um eixo a→b */
class Helix extends THREE.Curve {
  constructor(R, h, turns) { super(); this.R = R; this.h = h; this.t = turns; }
  getPoint(u, t = new THREE.Vector3()) { const a = u * this.t * TAU; return t.set(Math.cos(a) * this.R, u * this.h, Math.sin(a) * this.R); }
}
function spring(id, a, b, R, wire, turns, mat) {
  const A = V(...a), B = V(...b); const d = B.clone().sub(A); const L = d.length();
  const m = new THREE.Mesh(new THREE.TubeGeometry(new Helix(R, L, turns), Math.round(turns * 28), wire, 6, false), mat);
  m.position.copy(A); m.quaternion.setFromUnitVectors(UPY, d.normalize());
  return place(id, m);
}

/* correia: fita que contorna polias (fecho convexo dos círculos) no plano z = z0 */
function beltPath(pulleys) {
  const pts = [];
  pulleys.forEach(([x, y, r]) => { for (let k = 0; k < 48; k++) { const a = k / 48 * TAU; pts.push([x + Math.cos(a) * r, y + Math.sin(a) * r]); } });
  pts.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const p of pts) { while (lo.length >= 2 && cross(lo[lo.length - 2], lo[lo.length - 1], p) <= 0) lo.pop(); lo.push(p); }
  for (let i = pts.length - 1; i >= 0; i--) { const p = pts[i]; while (up.length >= 2 && cross(up[up.length - 2], up[up.length - 1], p) <= 0) up.pop(); up.push(p); }
  up.pop(); lo.pop();
  return lo.concat(up);
}
function ribbon(id, hull, z0, w, mat) {
  const pos = [], idx = []; const n = hull.length;
  hull.forEach(([x, y]) => { pos.push(x, y, z0 - w / 2, x, y, z0 + w / 2); });
  for (let i = 0; i < n; i++) { const a = i * 2, b = ((i + 1) % n) * 2; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  return add(id, g, mat);
}
function plateFromHull(id, hull, grow, z0, depth, mat) {
  // placa (capa) com o contorno da correia, um pouco maior
  let cx = 0, cy = 0; hull.forEach(p => { cx += p[0]; cy += p[1]; }); cx /= hull.length; cy /= hull.length;
  const sh = new THREE.Shape();
  hull.forEach(([x, y], i) => { const dx = x - cx, dy = y - cy, L = Math.hypot(dx, dy) || 1; const X = x + dx / L * grow, Y = y + dy / L * grow; i ? sh.lineTo(X, Y) : sh.moveTo(X, Y); });
  const g = new THREE.ExtrudeGeometry(sh, { depth, bevelEnabled: false }); g.translate(0, 0, z0);
  return add(id, g, mat);
}
/* ===== Carroceria paramétrica: seções transversais ao longo do carro, divididas nas peças de lataria =====
   Cada carro passa os perfis (largura, piso, linha de cintura, borda e topo do teto) e as estações de corte. */
function mono(keys) {
  const n = keys.length, xs = keys.map(k => k[0]), ys = keys.map(k => k[1]), d = [], m = [];
  for (let i = 0; i < n - 1; i++) d[i] = (ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i]);
  m[0] = d[0]; m[n - 1] = d[n - 2];
  for (let i = 1; i < n - 1; i++) m[i] = d[i - 1] * d[i] <= 0 ? 0 : (d[i - 1] + d[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (d[i] === 0) { m[i] = 0; m[i + 1] = 0; continue; }
    const a = m[i] / d[i], b = m[i + 1] / d[i], s = a * a + b * b;
    if (s > 9) { const t = 3 / Math.sqrt(s); m[i] = t * a * d[i]; m[i + 1] = t * b * d[i]; }
  }
  return x => {
    if (x <= xs[0]) return ys[0]; if (x >= xs[n - 1]) return ys[n - 1];
    let i = 0; while (x > xs[i + 1]) i++;
    const h = xs[i + 1] - xs[i], t = (x - xs[i]) / h, t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * ys[i] + (t3 - 2 * t2 + t) * h * m[i] + (-2 * t3 + 3 * t2) * ys[i + 1] + (t3 - t2) * h * m[i + 1];
  };
}

function makeBody(spec) {
const { XF, XR, RA, ZN, BK, ROWS, UPF, TOPU, XFA, XRA, WY } = spec;
const AF0 = XFA - RA, AF1 = XFA + RA, AR0 = XRA - RA, AR1 = XRA + RA;
const J = { F0: 0, F1: 1, F2: 2, N3: 3, S0: 4, R026: 5, R032: 6, R040: 7, R048: 8, R058: 9, R0615: 10, R068: 11, R076: 12, R084: 13, R090: 14, SB: 15, U1: 16, U2: 17, UE: 18, T1: 19, T2: 20, T3: 21, T4: 22, T5: 23, T6: 24 };
const NV = 25;

function archY(X) { for (const xa of [XFA, XRA]) { const dx = X - xa; if (Math.abs(dx) < RA) return WY + Math.sqrt(RA * RA - dx * dx); } return null; }
function gSide(s) { return s < 0.55 ? 1 - 0.035 * Math.pow((s - 0.55) / 0.55, 2) : 1 - 0.025 * Math.pow((s - 0.55) / 0.45, 2); }
function stP(X) { const yF = BK.yFloor(X); return { yF, yC: Math.max(yF, BK.yFC(X)), yS: yF + 0.03, yB: BK.yBelt(X), yE: BK.yEdge(X), yT: BK.yTop(X), zM: BK.zMax(X), zE: BK.zEdge(X) }; }
function zSideAt(P, y) { const s = Math.min(1, Math.max(0, (y - P.yS) / Math.max(0.01, P.yB - P.yS))); return P.zM * gSide(s); }
function sideZ(X, y) { return zSideAt(stP(X), y); }
function topY(X, z) { const P = stP(X); const u = Math.min(1, Math.abs(z) / P.zE); return P.yT + (P.yE - P.yT) * Math.pow(u, 2.2); }

function section(X) {
  const P = stP(X), a = archY(X), yN = a !== null ? Math.max(P.yS, a) : P.yS;
  const zn = Math.min(ZN, P.zM * 0.85), o = [];
  o.push([0, P.yC], [Math.min(0.40, zn * 0.8), P.yC], [zn, P.yF]);
  const lip = [zSideAt(P, yN), yN];
  o.push(a !== null ? [zn, yN] : [(zn + lip[0]) / 2, (P.yF + yN) / 2]);
  o.push(lip);
  for (const h of ROWS) { const y = Math.min(P.yB, Math.max(yN, h)); o.push([zSideAt(P, y), y]); }
  const zB = zSideAt(P, P.yB); o.push([zB, P.yB]);
  for (const t of UPF) { const y = P.yB + (P.yE - P.yB) * t; o.push([zB + (P.zE - zB) * t + 0.012 * Math.sin(Math.PI * t) * Math.min(1, (P.yE - P.yB) / 0.2), y]); }
  for (const u of TOPU) o.push([P.zE * u, P.yT + (P.yE - P.yT) * Math.pow(u, 2.2)]);
  return o;
}

/* estações ao longo do carro */
const STN = (() => {
  const s = new Set(); const q = v => +v.toFixed(5);
  for (let x = XR; x <= XF + 1e-9; x += 0.02) s.add(q(x));
  [XR, XF].concat(spec.cuts || []).forEach(v => s.add(q(v)));
  for (const e of [AF0, AF1, AR0, AR1]) { s.add(q(e - 1e-4)); s.add(q(e + 1e-4)); }
  for (const xa of [XFA, XRA]) for (let k = -20; k <= 20; k++) s.add(q(xa + k / 20 * RA * 0.999));
  return [...s].filter(x => x >= XR - 1e-9 && x <= XF + 1e-9).sort((a, b) => a - b);
})();
const NS = STN.length;
const GP = [], GN = [];
(function buildGrid() {
  const pos = [];
  for (let i = 0; i < NS; i++) { const X = STN[i]; GP[i] = section(X).map(([z, y]) => [X, y, z]); GP[i].forEach(p => pos.push(p[0], p[1], p[2])); }
  const idx = [];
  for (let i = 0; i < NS - 1; i++) for (let j = 0; j < NV - 1; j++) { const a = i * NV + j, b = a + NV; idx.push(a, b, a + 1, b, b + 1, a + 1); }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setIndex(idx); g.computeVertexNormals();
  const n = g.attributes.normal.array;
  for (let i = 0; i < NS; i++) {
    GN[i] = [];
    for (let j = 0; j < NV; j++) { const k = (i * NV + j) * 3; GN[i][j] = [n[k], n[k + 1], n[k + 2]]; }
    for (const j of [J.F0, J.T6]) { const v = GN[i][j]; v[2] = 0; const L = Math.hypot(v[0], v[1]) || 1; v[0] /= L; v[1] /= L; }
    for (let j = 0; j < NV; j++) {                         // conserta normais nulas de linhas colapsadas
      const v = GN[i][j]; if (Math.hypot(v[0], v[1], v[2]) > 0.5) continue;
      for (let d = 1; d < NV; d++) { const c = GN[i][j + d] || GN[i][j - d]; if (c && Math.hypot(...c) > 0.5) { GN[i][j] = c.slice(); break; } }
    }
  }
})();
function capGeo(front, j0, j1, zLim, off) {
  const i = front ? NS - 1 : 0, dir = front ? 1 : -1, bul = front ? 0.022 : 0.014, K = 18, pos = [], uv = [], idx = [];
  const rows = []; for (let j = j0; j <= j1; j++) rows.push(j);
  rows.forEach(j => {
    const p = GP[i][j], zj = Math.max(1e-4, p[2]), zl = Math.min(zj, zLim || zj);
    for (let k = 0; k <= K; k++) { const z = zl * (1 - 2 * k / K); pos.push(p[0] + dir * (bul * (1 - Math.pow(z / zj, 2)) + (off || 0)), p[1], z); uv.push(z, p[1]); }
  });
  for (let r = 0; r < rows.length - 1; r++) for (let k = 0; k < K; k++) {
    const a = r * (K + 1) + k, b = a + 1, c = a + K + 1, d = c + 1;
    if (front) idx.push(a, b, c, b, d, c); else idx.push(a, c, b, b, c, d);
  }
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(idx); g.computeVertexNormals();
  return g;
}


/* ---------- amostragem da superfície por comprimento de arco ----------
   s = distância medida ao longo da seção a partir do centro do teto; s > 0 lado esquerdo (+z), s < 0 lado direito */
const SA = GP.map(sec => {
  const a = new Array(NV); a[NV - 1] = 0;
  for (let j = NV - 2; j >= 0; j--) { const p = sec[j], q = sec[j + 1]; a[j] = a[j + 1] + Math.hypot(p[1] - q[1], p[2] - q[2]); }
  return a;
});
function stAt(x) {
  if (x <= STN[0]) return [0, 0];
  if (x >= STN[NS - 1]) return [NS - 2, 1];
  let lo = 0, hi = NS - 1;
  while (hi - lo > 1) { const m = (lo + hi) >> 1; if (STN[m] <= x) lo = m; else hi = m; }
  return [lo, (x - STN[lo]) / (STN[lo + 1] - STN[lo])];
}
function secPt(i, s) {
  const a = SA[i]; s = Math.min(Math.max(s, 0), a[0]);
  let j = NV - 2; while (j > 0 && a[j] < s) j--;
  const d = a[j] - a[j + 1], u = d > 1e-9 ? (s - a[j + 1]) / d : 0;
  const p0 = GP[i][j + 1], p1 = GP[i][j], n0 = GN[i][j + 1], n1 = GN[i][j];
  return [p0[1] + (p1[1] - p0[1]) * u, p0[2] + (p1[2] - p0[2]) * u, n0[0] + (n1[0] - n0[0]) * u, n0[1] + (n1[1] - n0[1]) * u, n0[2] + (n1[2] - n0[2]) * u];
}
function surf(x, s) {
  const [i, t] = stAt(x), sa = Math.abs(s), A = secPt(i, sa), B = secPt(i + 1, sa);
  const y = A[0] + (B[0] - A[0]) * t, z = A[1] + (B[1] - A[1]) * t;
  let nx = A[2] + (B[2] - A[2]) * t, ny = A[3] + (B[3] - A[3]) * t, nz = A[4] + (B[4] - A[4]) * t;
  const L = Math.hypot(nx, ny, nz) || 1; nx /= L; ny /= L; nz /= L;
  return s < 0 ? { p: [x, y, -z], n: [nx, ny, -nz] } : { p: [x, y, z], n: [nx, ny, nz] };
}
function sRow(x, j) { const [i, t] = stAt(x); return SA[i][j] + (SA[i + 1][j] - SA[i][j]) * t; }
function onSurf(x, s, off) { const q = surf(x, s); off = off || 0; return [q.p[0] + q.n[0] * off, q.p[1] + q.n[1] * off, q.p[2] + q.n[2] * off]; }
function sAtY(x, y) {                                   // s do lado esquerdo na altura y (faixa lateral)
  let a = sRow(x, J.UE), b = sRow(x, J.S0);
  for (let k = 0; k < 32; k++) { const m = (a + b) / 2; if (surf(x, m).p[1] > y) a = m; else b = m; }
  return (a + b) / 2;
}

/* ---------- peças de lataria: retângulos no espaço (x, s), com fresta e aba ----------
   letras maiúsculas = fresta + aba (peças que se separam); minúsculas = só a aba (encontro com vidro ou friso) */
const G = 0.0025, FL = 0.011;
const rowFn = (j, d) => { const f = x => sRow(x, j) + (d || 0); f.j = j; return f; };
const cst = v => () => v;
const RS = (x0, x1, top, bot, g) => ({ x0, x1, lo: top, hi: bot, g: g || '' });   // lateral, espelhada nos dois lados
const RF = (x0, x1, edge, g) => ({ x0, x1, hi: edge, full: true, g: g || '' });    // atravessa o centro do carro

function rectGeo(r, sign, off) {
  const has = c => r.g.indexOf(c) >= 0;
  const gL = has('L') ? G : 0, gR = has('R') ? G : 0, gT = has('T') ? G : 0, gB = has('B') ? G : 0;
  const x0 = r.x0 + gL, x1 = r.x1 - gR, xs = [x0];
  const low = (r.hi && r.hi.j != null && r.hi.j <= J.R0615) || (r.lo && r.lo.j != null && r.lo.j <= J.R0615);
  const dense = x => x > 1.7 || x < -1.72 || (low && (Math.abs(x - XFA) < RA + 0.02 || Math.abs(x - XRA) < RA + 0.02));
  const xres = r.xres || 0.03;
  for (const x of STN) if (x > x0 + 2e-4 && x < x1 - 2e-4 && (dense(x) || x - xs[xs.length - 1] >= xres - 1e-6)) xs.push(x);
  xs.push(x1);
  const lim = xs.map(x => {
    let a = r.full ? -(r.hi(x) - gB) : r.lo(x) + gT, b = r.hi(x) - gB;
    if (b < a) { const m = (a + b) / 2; a = b = m; }
    return [a, b];
  });
  let span = 0; for (const [a, b] of lim) span = Math.max(span, b - a);
  const ns = Math.max(4, Math.ceil(span / (r.res || 0.02))), nc = xs.length, W = ns + 1;
  const pos = new Float32Array(nc * W * 3), nor = new Float32Array(nc * W * 3), uv = new Float32Array(nc * W * 2);   // uv em metros: texturas com tamanho real
  for (let a = 0; a < nc; a++) {
    const [s0, s1] = lim[a];
    for (let k = 0; k < W; k++) {
      const sv = (s0 + (s1 - s0) * k / ns) * sign, q = surf(xs[a], sv), o = (a * W + k) * 3;
      for (let c = 0; c < 3; c++) { pos[o + c] = q.p[c] + q.n[c] * off; nor[o + c] = q.n[c]; }
      uv[(a * W + k) * 2] = xs[a]; uv[(a * W + k) * 2 + 1] = sv;
    }
  }
  const idx = [];
  for (let a = 0; a < nc - 1; a++) for (let k = 0; k < ns; k++) { const v = a * W + k; idx.push(v, v + W, v + 1, v + W, v + W + 1, v + 1); }
  // confere a orientação dos triângulos com a normal da superfície
  const P = i => [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
  for (let t = 0; t < idx.length; t += 3) {
    const A = P(idx[t]), B = P(idx[t + 1]), C = P(idx[t + 2]);
    const e1 = [B[0] - A[0], B[1] - A[1], B[2] - A[2]], e2 = [C[0] - A[0], C[1] - A[1], C[2] - A[2]];
    const f = [e1[1] * e2[2] - e1[2] * e2[1], e1[2] * e2[0] - e1[0] * e2[2], e1[0] * e2[1] - e1[1] * e2[0]];
    if (Math.hypot(f[0], f[1], f[2]) < 1e-9) continue;
    const v = idx[t];
    if (f[0] * nor[v * 3] + f[1] * nor[v * 3 + 1] + f[2] * nor[v * 3 + 2] < 0) for (let i = 0; i < idx.length; i += 3) { const s = idx[i + 1]; idx[i + 1] = idx[i + 2]; idx[i + 2] = s; }
    break;
  }
  const col = a => { const L = []; for (let k = 0; k < W; k++) L.push(a * W + k); return L; };
  const row = k => { const L = []; for (let a = 0; a < nc; a++) L.push(a * W + k); return L; };
  return { pos, nor, uv, idx, E: { L: col(0), R: col(nc - 1), T: row(0), B: row(ns) } };
}
function flangeGeo(R, r, depth) {
  if (!depth) return null;
  const lists = [];
  for (const c of r.g) {
    const u = c.toUpperCase();
    if (u === 'L') lists.push(R.E.L); else if (u === 'R') lists.push(R.E.R);
    else if (u === 'T') { if (!r.full) lists.push(R.E.T); }
    else if (u === 'B') { lists.push(R.E.B); if (r.full) lists.push(R.E.T); }
  }
  if (!lists.length) return null;
  const pos = [], nor = [], idx = []; let base = 0;
  const P = v => [R.pos[v * 3], R.pos[v * 3 + 1], R.pos[v * 3 + 2]], N = v => [R.nor[v * 3], R.nor[v * 3 + 1], R.nor[v * 3 + 2]];
  for (const L of lists) {
    L.forEach((v, i) => {
      const p = P(v), n = N(v), a = P(L[Math.max(0, i - 1)]), b = P(L[Math.min(L.length - 1, i + 1)]);
      const t = [b[0] - a[0], b[1] - a[1], b[2] - a[2]];
      let f = [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
      const l = Math.hypot(f[0], f[1], f[2]) || 1; f = [f[0] / l, f[1] / l, f[2] / l];
      pos.push(p[0], p[1], p[2], p[0] - n[0] * depth, p[1] - n[1] * depth, p[2] - n[2] * depth);
      nor.push(f[0], f[1], f[2], f[0], f[1], f[2]);
    });
    for (let i = 0; i < L.length - 1; i++) { const a = base + i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
    base += L.length * 2;
  }
  return { pos, nor, idx };
}
/* junta os retângulos de uma mesma peça (por lado e por articulação) numa malha só */
const BATCH = new Map();
function bpush(id, mat, parent, side, shadow, G) {
  const key = id + '|' + mat.uuid + '|' + (parent ? parent.uuid : '-') + '|' + side;
  let b = BATCH.get(key); if (!b) BATCH.set(key, b = { id, mat, parent, shadow: false, pos: [], nor: [], uv: [], idx: [] });
  const base = b.pos.length / 3;
  for (let i = 0; i < G.pos.length; i++) { b.pos.push(G.pos[i]); b.nor.push(G.nor[i]); }
  for (let i = 0, n = G.pos.length / 3 * 2; i < n; i++) b.uv.push(G.uv ? G.uv[i] : 0);
  for (let i = 0; i < G.idx.length; i++) b.idx.push(G.idx[i] + base);
  b.shadow = b.shadow || !!shadow;
}
function flushPanels() {
  BATCH.forEach(b => {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(b.pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(b.nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2)); g.setIndex(b.idx);
    add(b.id, g, b.mat, null, null, b.parent).castShadow = b.shadow;
  });
  BATCH.clear();
}
function panel(id, rects, mat, o) {
  o = o || {};
  for (const r of rects) for (const sg of (r.full ? [1] : [1, -1])) {
    const parent = typeof o.parent === 'function' ? o.parent(sg) : o.parent, side = r.full ? 0 : sg;
    if (o.res && !r.res) r.res = o.res;
    const R = rectGeo(r, sg, o.off || 0);
    bpush(id, mat, parent, side, o.shadow, R);
    const f = flangeGeo(R, r, o.fl == null ? FL : o.fl);
    if (f) bpush(id, o.flMat || MAT.gap, parent, side, false, f);
  }
}
function glass(id, r, parent, w) {
  w = w || 0.022;
  panel(id, [r], MAT.glass, { off: -0.004, parent, fl: 0 });
  const ring = r.full
    ? [RF(r.x0, r.x0 + w, r.hi), RF(r.x1 - w, r.x1, r.hi), RS(r.x0 + w, r.x1 - w, x => r.hi(x) - w, r.hi)]
    : [RS(r.x0, r.x0 + w, r.lo, r.hi), RS(r.x1 - w, r.x1, r.lo, r.hi), RS(r.x0 + w, r.x1 - w, r.lo, x => r.lo(x) + w), RS(r.x0 + w, r.x1 - w, x => r.hi(x) - w, r.hi)];
  panel(id, ring, MAT.frit, { off: -0.0056, parent, fl: 0 });
}
function loop(id, pts, r, mat, off, parent, closed) {       // tubo que segue a superfície: pts = [[x, s], ...]
  return tube(id, pts.map(([x, s]) => onSurf(x, s, off)), r, mat, closed, parent, Math.min(240, pts.length * 3), 6);
}
function edgePath(x0, x1, sFn, n) { const P = []; for (let k = 0; k <= n; k++) { const x = x0 + (x1 - x0) * k / n; P.push([x, sFn(x)]); } return P; }
return { XF, XR, RA, AF0, AF1, AR0, AR1, BK, J, NV, STN, NS, GP, GN, SA, archY, stP, zSideAt, sideZ, topY, section, capGeo, stAt, secPt, surf, sRow, onSurf, sAtY,
  G, FL, rowFn, cst, RS, RF, rectGeo, flangeGeo, bpush, flushPanels, panel, glass, loop, edgePath };
}

function mergeGeos(parts) {
  const pos = [], nor = [];
  parts.forEach(g => { const n = g.index ? g.toNonIndexed() : g; pos.push(...n.attributes.position.array); nor.push(...n.attributes.normal.array); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return g;
}
function boltGeo() {
  const h = new THREE.CylinderGeometry(0.5, 0.5, 0.36, 6); h.translate(0, 0.26, 0);
  const w = new THREE.CylinderGeometry(0.64, 0.64, 0.08, 18); w.translate(0, 0.04, 0);
  const s = new THREE.CylinderGeometry(0.27, 0.27, 0.7, 10); s.translate(0, -0.35, 0);
  return mergeGeos([h, w, s]);
}
function clipGeo() {
  const h = new THREE.CylinderGeometry(0.62, 0.62, 0.16, 16); h.translate(0, 0.08, 0);
  const s = new THREE.CylinderGeometry(0.22, 0.34, 0.8, 10); s.translate(0, -0.4, 0);
  return mergeGeos([h, s]);
}
const FXGEO = {};
function fxGeo(k) {
  if (FXGEO[k]) return FXGEO[k];
  let g;
  if (k === 'presilha') g = clipGeo();
  else if (k === 'solda') g = new THREE.CylinderGeometry(0.5, 0.5, 0.14, 12);
  else if (k === 'guia') { g = new THREE.BoxGeometry(1.2, 0.5, 0.7); }
  else if (k === 'pino') g = new THREE.SphereGeometry(0.5, 12, 8);
  else g = boltGeo();
  return (FXGEO[k] = g);
}
const FXMAT = { parafuso: 'zinc', presilha: 'clip', solda: 'weld', guia: 'guide', pino: 'chrome', cola: 'glue', fita: 'tape' };
function fxParent(id, mount, side) {
  const a = mount && artOf(mount, side); if (a) return a.pivot;
  if (mount === 'sw') return ANIM.wheel.g;
  if (mount && mount[0] === 'w') return WHEELS[+mount.slice(1)].spin;
  if (mount && mount[0] === 'y') return WHEELS[+mount.slice(1)].yaw;
  return reg(id).group;
}
const FIXI = {};                  // fixador -> uma ficha por unidade, na ordem das posições (para acender e desmontar uma a uma)
function buildFasteners() {
  const P = GEO.fxPositions(), m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sc = new THREE.Vector3(), white = new THREE.Color(1, 1, 1);
  Object.keys(FIX).forEach(id => {
    const E = P[id]; if (!E) return;
    const f = FIX[id], kind = f.k || 'parafuso', mat = MAT[FXMAT[kind]] || MAT.zinc;
    const groups = {}, recs = FIXI[id] = new Array(E.pts.length);
    E.pts.forEach((e, gi) => { const side = e[0][2] >= -0.01 ? 1 : -1, key = (e[3] || 'body') + side; const G = groups[key] = groups[key] || { side, mount: e[3], list: [], gi: [] }; G.list.push(e); G.gi.push(gi); });
    Object.values(groups).forEach(G => {
      const im = new THREE.InstancedMesh(fxGeo(kind), mat, G.list.length), c = V(0, 0, 0);
      G.list.forEach(([p, d, s], i) => {
        const pv = V(p[0], p[1], p[2]), dv = V(d[0], d[1], d[2]).normalize();
        q.setFromUnitVectors(UPY, dv); sc.set(s, s, s); m4.compose(pv, q, sc); im.setMatrixAt(i, m4); im.setColorAt(i, white); c.add(pv);
        recs[G.gi[i]] = { m: im, i, p: pv, d: dv, q: q.clone(), s, k: kind, fid: id, side: G.side };
      });
      im.instanceMatrix.needsUpdate = true; im.frustumCulled = false;
      im.userData.center = c.divideScalar(G.list.length); im.userData.fx = true; im.userData.n = G.list.length;
      place(id, im, fxParent(id, G.mount, G.side));
    });
    E.paths.forEach(([pts, r, mount, closed]) => {
      const side = pts[0][2] >= -0.01 ? 1 : -1;
      const m = tube(id, pts, r, mat, closed, fxParent(id, mount, side), Math.min(240, pts.length * 3), 6); m.userData.fx = true; m.userData.n = 1;
    });
    const n = E.pts.length + E.paths.length;
    if (kind === 'solda' || kind === 'presilha' || kind === 'guia' || kind === 'pino') f.q = E.pts.length;
    f.count = kind === 'cola' || kind === 'fita' ? 0 : E.pts.length;
    if (!n) return;
  });
}
/* ===== Cena, estados de material, explosão, animações, seleção ===== */
const APP = {
  view: 'xray', explode: 0, bolts: false, color: false, run: false,
  focus: null, flow: null, flowStep: -1, intro: null, t: 0,
  follow: true, motion: { engine: 0, wheels: 0, steer: 0, fan: 0 }, wheelAng: 0, wheelSpeed: 0, steer: 0, steerShown: 0
};
const XRAY_EXTRA = new Set(CAR.xrayExtra || []);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
let renderer, scene, camera, controls, groundShadow, dirLight, AO, GEO;
let pickables = [];
const MATS = { ghostBody: null, ghostDim: null, ghostFaint: null, hl: new Map(), rel: new Map(), sys: {}, hover: new Map() };

function infoOf(id) {
  if (PARTS[id]) return { id, n: PARTS[id].n, sys: PARTS[id].s, kind: 'part', d: PARTS[id] };
  if (FIX[id]) { const p = PARTS[FIX[id].p]; return { id, n: FIX[id].n, sys: p ? p.s : 'carro', kind: 'fix', d: FIX[id] }; }
  return { id, n: id, sys: 'carro', kind: 'part', d: {} };
}

/* ---------- material fantasma (raio-x) ---------- */
function ghostMat(color, opacity, rim, base) {
  return new THREE.ShaderMaterial({
    uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: opacity }, uRim: { value: rim }, uBase: { value: base } },
    vertexShader: 'varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }',
    fragmentShader: 'uniform vec3 uColor; uniform float uOpacity; uniform float uRim; uniform float uBase; varying vec3 vN; varying vec3 vV; void main(){ float f = 1.0 - abs(dot(normalize(vN), normalize(vV))); f = pow(f, uRim); gl_FragColor = vec4(uColor, uOpacity*(uBase + (1.0-uBase)*f)); }',
    transparent: true, depthWrite: false, side: THREE.FrontSide
  });
}
function cssVar(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
function refreshThemeColors() {
  const g = cssVar('--ghost') || '#56708a', d = cssVar('--ghost-dim') || '#7c8894';
  if (!MATS.ghostBody) { MATS.ghostBody = ghostMat(g, 0.5, 2.0, 0.06); MATS.ghostDim = ghostMat(d, 0.3, 2.4, 0.05); MATS.ghostFaint = ghostMat(g, 0.24, 2.6, 0.03); }
  MATS.ghostBody.uniforms.uColor.value.set(g); MATS.ghostDim.uniforms.uColor.value.set(d); MATS.ghostFaint.uniforms.uColor.value.set(g);
}
function hlMat(base, sys, strong) {
  const key = base.uuid + sys + (strong ? 'h' : 'r'), bank = strong ? MATS.hl : MATS.rel;
  let m = bank.get(key);
  if (!m) {
    m = base.clone(); m.emissive = new THREE.Color(SYS[sys].c); m.emissiveIntensity = strong ? 0.55 : 0.2;
    if (m.transparent && m.opacity < 0.5) m.opacity = 0.55;
    bank.set(key, m);
  }
  return m;
}
function tintMat(base, color, strong) {
  const key = base.uuid + color + (strong ? 'H' : 'R'), bank = strong ? MATS.hl : MATS.rel;
  let m = bank.get(key);
  if (!m) {
    m = base.clone(); m.emissive = new THREE.Color(color); m.emissiveIntensity = strong ? 0.6 : 0.1;
    if (m.transparent && m.opacity < 0.5) m.opacity = 0.6;
    bank.set(key, m);
  }
  return m;
}
function sysMat(sys) {
  if (!MATS.sys[sys]) MATS.sys[sys] = new THREE.MeshStandardMaterial({ color: SYS[sys].c, roughness: 0.55, metalness: 0.1 });
  return MATS.sys[sys];
}
const PANEL_COLORS = ['#3d7cc9', '#e0892e', '#3f9f68', '#c9485f', '#8b66d6', '#cfa52a', '#2aa6a6', '#bb6394', '#6d9331', '#d5653f', '#5572d6', '#a07c52', '#4aa0d8', '#d65a9a'];
let CARRO_IDX = null;
function panelMat(id) {
  if (!CARRO_IDX) { CARRO_IDX = {}; Object.keys(PARTS).filter(k => PARTS[k].s === 'carro').forEach((k, i) => { CARRO_IDX[k] = i; }); }
  const key = 'panel_' + id;
  if (!MATS.sys[key]) MATS.sys[key] = new THREE.MeshStandardMaterial({ color: PANEL_COLORS[(CARRO_IDX[id] || 0) % PANEL_COLORS.length], roughness: 0.6, metalness: 0.05, side: THREE.DoubleSide });
  return MATS.sys[key];
}
function isXR(id) { const s = infoOf(id).sys; return !id.startsWith('fx_') && (s === 'carro' || s === 'int' || XRAY_EXTRA.has(id)); }

let FAINT = null;
function isFaint(m, sys) {
  if (!FAINT) FAINT = new Set([MAT.gap, MAT.frit, MAT.underDS, MAT.liner, MAT.fabricDS, MAT.fabric, MAT.carpet, MAT.under, MAT.dash, MAT.trim]);
  return sys === 'int' || FAINT.has(m.userData.baseMat);
}
function applyStates() {
  const F = APP.focus; pickables = [];
  for (const id in REG) {
    const inf = infoOf(id), fx = id.startsWith('fx_'), xr = isXR(id);
    const inPrim = F && F.primary.has(id), inRel = F && F.related.has(id);
    let vis = true, mode = 'base';
    if (fx) vis = APP.bolts || (F && (inPrim || inRel || F.primary.has(FIX[id].p)));
    else if (APP.view === 'mech' && xr) vis = !!(inPrim || inRel);
    if (DM.hidden.has(id)) vis = false;
    if (F) mode = inPrim ? (F.kind === 'system' ? 'sys' : 'hl') : inRel ? 'rel' : (fx ? 'base' : 'dim');
    let other = null, sel = null;
    if (F && F.kind === 'dm') {                          // desmontagem: o carro normal; a peça do passo em laranja; o que já saiu, apagado
      const inst = fx && FIXI[id] && FIXI[id].length;
      other = APP.view === 'xray' && xr ? 'ghost' : 'base';
      if (inPrim) mode = inst ? 'base' : 'dmhl';
      else if (DM.gone.has(id)) mode = 'dim';
      else if (inRel) mode = fx ? 'base' : 'dmrel';
      else mode = other;
      sel = F.sel && F.sel[id];
    }
    else if (APP.view === 'xray' && xr) mode = 'ghost';
    else if (APP.color && !xr) mode = 'sys';
    if (fx && F && F.kind !== 'dm' && F.primary.has(FIX[id].p) && !inPrim) mode = 'hl';
    vis = !!vis;
    const mode0 = mode;
    for (const m of REG[id].meshes) {
      m.visible = vis;
      const b = m.userData.baseMat;
      mode = sel && !sel(m) ? other : mode0;
      m.material = mode === 'base' ? b : mode === 'ghost' ? (isFaint(m, inf.sys) ? MATS.ghostFaint : MATS.ghostBody) : mode === 'dim' ? MATS.ghostDim
        : mode === 'dmhl' || mode === 'dmrel' ? tintMat(b, '#E8801A', mode === 'dmhl')
        : mode === 'sys' ? (m.isInstancedMesh ? hlMat(b, inf.sys, true) : (F && F.kind === 'system' && F.sys === 'carro' && !fx ? panelMat(id) : sysMat(inf.sys))) : hlMat(b, inf.sys, mode === 'hl');
      m.userData.mode = mode; m.userData.stateMat = m.material;
      if (vis) pickables.push(m);
    }
  }
  if (ANIM.prop) { const m = ANIM.prop.mesh; m.userData.allowed = m.visible; m.visible = m.visible && artV('hood') > 0.97; }
  if (HOVER.id) { const h = HOVER.id; HOVER.id = null; HOVER.meshes = []; setHover(h); }
}

/* ---------- peça sob o mouse acende ---------- */
const HOVER = { id: null, meshes: [] };
function hoverMatOf(mat) {
  let h = MATS.hover.get(mat.uuid);
  if (!h) {
    h = mat.clone();
    if (h.emissive) {
      const had = h.emissiveIntensity > 0 && (h.emissive.r + h.emissive.g + h.emissive.b) > 0.01;
      if (had) h.emissiveIntensity = Math.min(1.2, h.emissiveIntensity + 0.35); else { h.emissive = new THREE.Color(0xffffff); h.emissiveIntensity = 0.18; }
    }
    MATS.hover.set(mat.uuid, h);
  }
  return h;
}
function setHover(id) {
  if (id === HOVER.id) return;
  HOVER.meshes.forEach(m => { if (m.userData.stateMat) m.material = m.userData.stateMat; });
  HOVER.meshes = []; HOVER.id = id;
  if (!id || !REG[id]) return;
  REG[id].meshes.forEach(m => {
    const sm = m.userData.stateMat || m.material;
    if (!m.visible || !sm || sm.isShaderMaterial) return;
    m.material = hoverMatOf(sm); HOVER.meshes.push(m);
  });
}

/* ---------- explosão ---------- */
function childCenter(c) {
  if (c.isInstancedMesh) return c.userData.center.clone();
  return carRoot.worldToLocal(new THREE.Box3().setFromObject(c).getCenter(new THREE.Vector3()));
}
function setupExplode() {
  carRoot.updateMatrixWorld(true);
  for (const id in REG) {
    const R = REG[id], pid = id.startsWith('fx_') ? FIX[id].p : id;
    const v = EXV[pid] || [0, 0, 0], sym = v[3] === 1;
    R.exT = 0; R.exTarget = 0; R.dmT = 0;
    R.group.children.forEach(c => {
      const side = childCenter(c).z >= -0.01 ? 1 : -1, sgn = sym ? side : 1;
      c.userData.base = c.position.clone(); c.userData.ex = V(v[0], v[1], v[2] * sgn); c.userData.side = side;
    });
    // peças montadas no capô, nas portas, na tampa ou nas rodas: afastam-se em relação à peça que as carrega
    R.pivotMeshes = [];
    R.meshes.forEach(m => {
      const par = m.parent;
      if (!par || par === R.group || !par.userData.abs || par.userData.owner === id) return;
      const ov = EXV[par.userData.owner] || [0, 0, 0], side = par.userData.side || (childCenter(m).z >= -0.01 ? 1 : -1);
      m.userData.base = m.position.clone(); m.userData.side = side; m.userData.owner = par.userData.owner;
      m.userData.exP = V(v[0], v[1], v[2] * (sym ? side : 1));
      m.userData.exO = V(ov[0], ov[1], ov[2] * (ov[3] === 1 ? side : 1));
      R.pivotMeshes.push(m);
    });
    R.meshes.forEach(m => { if (!m.userData.side) m.userData.side = childCenter(m).z >= -0.01 ? 1 : -1; });
    const left = R.meshes.filter(m => m.userData.side === 1);
    R.anchorMeshes = left.length ? left : R.meshes;
  }
}
/* cada peça tem seu grau de explosão (exT) e seu deslocamento de desmontagem (dmV × dmT) */
function applyExplode() {
  for (const id in REG) {
    const R = REG[id], t = R.exT || 0, dm = R.dmT || 0, dv = R.dmV;
    R.group.children.forEach(c => {
      if (!c.userData.base) return;
      c.position.copy(c.userData.base).addScaledVector(c.userData.ex, t);
      if (dm && dv && !R.dmPar && (!R.dmSide || c.userData.side === R.dmSide)) c.position.addScaledVector(dv, dm);
    });
    R.pivotMeshes.forEach(m => {
      const O = REG[m.userData.owner], ot = O ? O.exT || 0 : 0;
      m.position.copy(m.userData.base).addScaledVector(m.userData.exP, t).addScaledVector(m.userData.exO, -ot);
      if (dm && dv && !(O && O.dmT > 0) && (!R.dmSide || m.userData.side === R.dmSide) && (!R.dmPar || m.parent === R.dmPar)) m.position.addScaledVector(dv, dm);
    });
  }
}
/* o que se afasta ao explodir: a peça escolhida e as que trabalham com ela, o sistema aberto, o caminho — ou o carro todo */
function explodeSet() {
  const F = APP.focus; if (!F || F.kind === 'dm') return null;
  return new Set([...F.primary, ...F.related]);
}
function explodeTargets(instant) {
  const set = explodeSet(), t = APP.flow && APP.flow.kind === 'dm' ? 0 : APP.explode;
  for (const id in REG) {
    const R = REG[id], pid = id.startsWith('fx_') ? FIX[id].p : id;
    R.exTarget = !set || set.has(id) || set.has(pid) ? t : 0;
    if (instant) R.exT = R.exTarget;
  }
  if (instant) { applyExplode(); EXPL.dirty = true; }
}
const EXPL = { dirty: false };
function stepExplode(dt) {
  let moved = false;
  for (const id in REG) {
    const R = REG[id], tg = R.exTarget || 0, cur = R.exT || 0;
    if (Math.abs(tg - cur) > 1e-4) { R.exT = reduceMotion ? tg : cur + (tg - cur) * Math.min(1, dt * 7); if (Math.abs(R.exT - tg) < 2e-3) R.exT = tg; moved = true; }
    if (R.dmDirty) { R.dmDirty = false; moved = true; }
  }
  if (moved) { applyExplode(); EXPL.dirty = true; }
  return moved;
}
const _bx = new THREE.Box3(), _vv = new THREE.Vector3();
function anchorOf(id) {
  const R = REG[id]; if (!R) return carRoot.localToWorld(V(0, 0.6, 0));
  _bx.makeEmpty();
  for (const m of R.anchorMeshes) {
    if (m.isInstancedMesh) _bx.expandByPoint(m.localToWorld(_vv.copy(m.userData.center)));
    else _bx.expandByObject(m);
  }
  return _bx.isEmpty() ? carRoot.localToWorld(V(0, 0.6, 0)) : _bx.getCenter(new THREE.Vector3());
}

/* ---------- junta malhas paradas da mesma peça e material (menos chamadas de desenho) ---------- */
function mergeStatic() {
  carRoot.updateMatrixWorld(true);
  for (const id in REG) {
    const R = REG[id], buckets = new Map(), keep = [];
    for (const m of R.meshes) {
      const par = m.parent;
      if (m.isInstancedMesh || m.userData.noMerge || !par || !(par === R.group || par.userData.abs)) { keep.push(m); continue; }
      const side = childCenter(m).z >= -0.01 ? 1 : -1;
      const key = par.uuid + '|' + m.material.uuid + '|' + side + '|' + (m.castShadow ? 1 : 0);
      let b = buckets.get(key); if (!b) buckets.set(key, b = { par, mat: m.material, shadow: m.castShadow, list: [] });
      b.list.push(m);
    }
    buckets.forEach(b => {
      if (b.list.length < 2) { keep.push(b.list[0]); return; }
      const pos = [], nor = [], uvs = [], idx = []; let base = 0;
      b.list.forEach(m => {
        m.updateMatrix(); const g = m.geometry.clone().applyMatrix4(m.matrix);
        const P = g.attributes.position.array, N = g.attributes.normal ? g.attributes.normal.array : null, U = g.attributes.uv ? g.attributes.uv.array : null;
        for (let i = 0; i < P.length; i++) { pos.push(P[i]); nor.push(N ? N[i] : 0); }
        for (let i = 0, n = P.length / 3 * 2; i < n; i++) uvs.push(U ? U[i] : 0);
        if (g.index) { const I = g.index.array; for (let i = 0; i < I.length; i++) idx.push(I[i] + base); }
        else for (let i = 0; i < P.length / 3; i++) idx.push(base + i);
        base += P.length / 3; b.par.remove(m); g.dispose();
      });
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); g.setIndex(idx);
      const mm = new THREE.Mesh(g, b.mat); mm.castShadow = b.shadow; b.par.add(mm);
      mm.userData.pid = id; mm.userData.baseMat = b.mat; keep.push(mm);
    });
    R.meshes = keep;
  }
}

/* ---------- capô, portas e tampas girando nas dobradiças ----------
   Cada carro registra as suas articulações com art(tipo, { pivot, axis, max, side, onUpdate }).
   tipo: 'hood' (capô), 'door' (porta dianteira), 'rdoor' (porta traseira), 'tail' (tampa traseira ou do porta-malas).
   v vai de 0 (fechado) a 1 (aberto) e t é o alvo; o ângulo é v × max no eixo da dobradiça. */
function art(kind, o) { const a = Object.assign({ kind, side: 0, v: 0, t: 0, axis: 'z', max: 1 }, o); ARTS.push(a); return a; }
function artOf(kind, side) { return ARTS.find(a => a.kind === kind && (!side || !a.side || a.side === side)) || null; }
function artV(kind) { const a = artOf(kind); return a ? a.v : 0; }
const isDoorPart = p => p === CAR.open.door || p === CAR.open.rdoor;
function updateHinges() {
  ARTS.forEach(a => { a.pivot.rotation[a.axis] = a.v * a.max; if (a.onUpdate) a.onUpdate(a.v); });
  if (ANIM.prop) ANIM.prop.mesh.visible = !!ANIM.prop.mesh.userData.allowed && artV('hood') > 0.97;
}

/* ---------- esterço (volante, barras axiais, mangas e rodas) e giro das rodas ---------- */
function updateSteer(a) {
  WHEELS.forEach(w => { if (w.yaw) w.yaw.rotation.y = a; });
  if (ANIM.wheel) ANIM.wheel.g.quaternion.setFromAxisAngle(ANIM.wheel.ax, -a * 14);
  const c = Math.cos(a), sn = Math.sin(a);
  ANIM.tie.forEach(t => {
    const W = WHEELS.find(w => w.front && w.s === t.s), C = W.yaw.userData.absPos;
    const dx = t.outer.x - C.x, dz = t.outer.z - C.z;
    const o = V(C.x + dx * c + dz * sn, t.outer.y, C.z - dx * sn + dz * c);
    const i = t.inner.clone(); i.z += o.z - t.outer.z;                  // a cremalheira desliza junto
    setBar(t.bar, i, o); t.ball.position.copy(o);
    const et = (REG[t.pid || 'barras_axiais'] || {}).exT || 0;
    if (t.bar.userData.ex) t.bar.position.addScaledVector(t.bar.userData.ex, et);
    if (t.ball.userData.ex) t.ball.position.addScaledVector(t.ball.userData.ex, et);
  });
  APP.steerShown = a;
}
function updateWheels() { WHEELS.forEach(w => { w.spin.rotation.z = -APP.wheelAng; }); }

/* ---------- motor girando ---------- */
function updateEngine(theta) {
  ANIM.spin.forEach(g => g.rotation.z = -theta);
  ANIM.cam.forEach(g => g.rotation.z = -theta / 2);
  const K = ANIM.crank; if (!K) return;                 // { x, y: centro do virabrequim, r: meio curso, rod: biela, pid, rid }
  const ep = (REG[K.pid] || {}).exT || 0, er = (REG[K.rid] || {}).exT || 0;
  ANIM.pistons.forEach((p, i) => {
    const a = theta + p.ph, sx = K.r * Math.sin(a), cy = K.y + K.r * Math.cos(a);
    const yp = cy + Math.sqrt(K.rod * K.rod - sx * sx);
    if (p.g.userData.base) { p.g.userData.base.set(K.x, yp, p.z); p.g.position.copy(p.g.userData.base).addScaledVector(p.g.userData.ex, ep); }
    else p.g.position.set(K.x, yp, p.z);
    const r = ANIM.rods[i], dx = -sx, dy = yp - cy;
    const base = V(K.x + sx / 2, (cy + yp) / 2, p.z);
    r.rotation.set(0, 0, -Math.atan2(dx, dy));
    if (r.userData.base) { r.userData.base.copy(base); r.position.copy(base).addScaledVector(r.userData.ex, er); } else r.position.copy(base);
  });
}

/* ---------- câmera ---------- */
let tween = null;
let atHome = false;                                  // câmera ainda na vista inicial (a pessoa não girou nem abriu nada)
function flyTo(target, pos, dur) {
  atHome = false;
  if (reduceMotion || dur === 0) { controls.target.copy(target); camera.position.copy(pos); controls.update(); return; }
  tween = { t0: performance.now(), dur: dur || 750, a: { t: controls.target.clone(), p: camera.position.clone() }, b: { t: target.clone(), p: pos.clone() } };
}
function boxOf(ids, oneSide) {
  const b = new THREE.Box3(); carRoot.updateMatrixWorld(true);
  ids.forEach(id => { const R = REG[id]; if (!R) return; (oneSide ? R.anchorMeshes : R.meshes).forEach(m => { if (m.isInstancedMesh) { const c = m.localToWorld(m.userData.center.clone()); b.expandByPoint(c.clone().addScalar(0.05)); b.expandByPoint(c.clone().addScalar(-0.05)); } else b.expandByObject(m); }); });
  return b;
}
function viewDirFor(c) {
  // olha a peça "de fora": frente, traseira, lado ou por baixo, conforme onde ela está
  const cur = camera.position.clone().sub(controls.target).normalize();
  const out = V((c.x - 0.25) * 0.55, 0, c.z * 1.4); const L = out.length();
  if (L < 0.18) return cur;
  out.normalize(); out.y = c.y < 0.3 ? -0.55 : 0.62; out.normalize();
  return out.multiplyScalar(0.8).addScaledVector(cur, 0.2).normalize();
}
function fitIds(ids, minDist, keepDir) {
  const b = boxOf(ids, ids.length === 1); if (b.isEmpty()) return;
  const c = b.getCenter(new THREE.Vector3());
  const dir = keepDir ? camera.position.clone().sub(controls.target).normalize() : viewDirFor(c);
  const dist = Math.min(7.5, Math.max(minDist || 0.7, fitDist(c, dir, b, 0.72)));   // enquadra pela projeção real da caixa
  flyTo(c, c.clone().addScaledVector(dir, dist));
}
const HOME = { t: V(0.4, 0.55, 0), dir: V(4.25, 1.35, -3.6).normalize(), dirTall: V(4.5, 1.9, -2.4).normalize() };
let CAR_BOX = null, TOP_SAFE = 64;          // caixa do carro e faixa de cima ocupada pela barra
const _fitCam = new THREE.PerspectiveCamera();
function fitDist(t, dir, box, pad) {
  box = box || CAR_BOX; if (!box) return 6;
  const h = Math.max(1, renderer.domElement.clientHeight), top = 1 - 2 * (TOP_SAFE + 6) / h;
  _fitCam.copy(camera); _fitCam.up.set(0, 1, 0);
  const cs = []; for (let k = 0; k < 8; k++) cs.push(V(k & 1 ? box.max.x : box.min.x, k & 2 ? box.max.y : box.min.y, k & 4 ? box.max.z : box.min.z));
  if (box === CAR_BOX) {                              // o teto é bem menor que a planta: as quinas de cima da caixa ficam no vazio e encolhiam o carro na tela
    const c = box.getCenter(V(0, 0, 0)); cs.forEach(p => { if (p.y > c.y) { p.x = c.x + (p.x - c.x) * 0.72; p.z = c.z + (p.z - c.z) * 0.8; } });
  }
  const mx = pad == null ? 0.92 : pad, fits = d => {
    _fitCam.position.copy(t).addScaledVector(dir, d); _fitCam.lookAt(t); _fitCam.updateMatrixWorld(); _fitCam.updateProjectionMatrix();
    return cs.every(c => { const p = c.clone().project(_fitCam); return p.z < 1 && Math.abs(p.x) < mx && p.y < Math.min(mx, top) && p.y > -mx; });
  };
  let lo = 0.4, hi = 30; if (!fits(hi)) return hi;
  for (let k = 0; k < 22; k++) { const m = (lo + hi) / 2; if (fits(m)) hi = m; else lo = m; }
  return hi;
}
function homeTarget() { return camera.aspect < 0.8 ? V(0.25, 0.62, 0) : HOME.t.clone(); }
function homeDir() { return camera.aspect < 0.8 ? HOME.dirTall.clone() : HOME.dir.clone(); }
function homePos() { const t = homeTarget(), d = homeDir(); return t.clone().addScaledVector(d, fitDist(t, d)); }
function homeView(dur) { flyTo(homeTarget(), homePos(), dur); atHome = true; }
/* vistas prontas: olham para a peça escolhida ou para o carro todo */
const PRESETS = { frente: V(1, 0.3, -0.12), traseira: V(-1, 0.32, 0.12), lado: V(0.08, 0.22, -1), cima: V(0.04, 1, -0.03), baixo: V(0.3, -0.85, -0.35) };
function presetView(name) {
  if (name === 'inicial') return homeView();
  const dir = PRESETS[name].clone().normalize();
  if (APP.focus && APP.focus.kind === 'part') {
    const t = controls.target.clone(), d = Math.min(4.5, Math.max(1.2, camera.position.distanceTo(t)));
    return flyTo(t, t.clone().addScaledVector(dir, d));
  }
  const t = CAR_BOX ? CAR_BOX.getCenter(V(0, 0, 0)) : V(0, 0.6, 0);
  if (name === 'baixo') t.y = 0.3;
  flyTo(t, t.clone().addScaledVector(dir, fitDist(t, dir)));
}
/* ao fechar uma peça: se a câmera ficou colada ou dentro do carro, recua até mostrar o carro */
function recoilIfClose() {
  const t = controls.target, d = camera.position.distanceTo(t);
  const inside = CAR_BOX && CAR_BOX.clone().expandByScalar(0.15).containsPoint(camera.position);
  if (d > 2.6 && !inside) return;
  const dir = camera.position.clone().sub(t).normalize(); if (dir.y < 0.15) { dir.y = 0.15; dir.normalize(); }
  const nt = homeTarget(); flyTo(nt, nt.clone().addScaledVector(dir, fitDist(nt, dir)));
}

/* ---------- linhas de relação e rótulos ---------- */
let relLines = null;
function clearRelLines() { if (relLines) { scene.remove(relLines); relLines.geometry.dispose(); relLines = null; } }
function drawRelLines() {
  clearRelLines(); carRoot.updateMatrixWorld(true);
  const F = APP.focus; if (!F || F.kind !== 'part') return;
  const a = anchorOf(F.id), pos = [], col = [];
  F.related.forEach(id => { const b = anchorOf(id), c = new THREE.Color(SYS[infoOf(id).sys].c); pos.push(a.x, a.y, a.z, b.x, b.y, b.z); col.push(c.r, c.g, c.b, c.r, c.g, c.b); });
  const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(col, 3));
  relLines = new THREE.LineSegments(g, new THREE.LineDashedMaterial({ vertexColors: true, dashSize: 0.03, gapSize: 0.02, depthTest: false, transparent: true, opacity: 0.9 }));
  relLines.computeLineDistances(); relLines.renderOrder = 10; scene.add(relLines);
}
/* ===== Acabamento: texturas desenhadas no próprio navegador (sem arquivos), aplicadas depois da geometria =====
   valem para todos os carros: pneus, grades, placas, discos, metal fundido, estofados e tapetes */
const TEXCV = window.__carTexCanvas = window.__carTexCanvas || {};   // desenhos guardados entre um carro e outro: só a primeira montagem paga
function texOf(w, h, draw, rep, color, key) {
  let cv = key && TEXCV[key];
  if (!cv) { cv = document.createElement('canvas'); cv.width = w; cv.height = h; draw(cv.getContext('2d'), w, h); if (key) TEXCV[key] = cv; }
  const t = new THREE.CanvasTexture(cv); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  if (rep) t.repeat.set(rep[0], rep[1]); if (color) t.encoding = THREE.sRGBEncoding;
  return t;
}
const rnd = (() => { let a = 1234567; return () => { a = (a * 1103515245 + 12345) & 0x7fffffff; return a / 0x7fffffff; }; })();
function noiseDraw(cell, lo, hi) {                    // ruído de valor suave e repetível nas bordas, em tons de cinza entre lo e hi
  return (cx, w, h) => {
    const nx = Math.max(1, Math.round(w / cell)), ny = Math.max(1, Math.round(h / cell)), G = Array.from({ length: ny }, () => Array.from({ length: nx }, rnd));
    const img = cx.createImageData(w, h), sm = f => f * f * (3 - 2 * f);
    for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
      const gx = x / w * nx, gy = y / h * ny, i = Math.floor(gx), j = Math.floor(gy), sx = sm(gx - i), sy = sm(gy - j);
      const r0 = G[j % ny], r1 = G[(j + 1) % ny], v = (r0[i % nx] * (1 - sx) + r0[(i + 1) % nx] * sx) * (1 - sy) + (r1[i % nx] * (1 - sx) + r1[(i + 1) % nx] * sx) * sy;
      const g = Math.round(255 * (lo + (hi - lo) * (v * 0.7 + rnd() * 0.3))), o = (y * w + x) * 4;
      img.data[o] = img.data[o + 1] = img.data[o + 2] = g; img.data[o + 3] = 255;
    }
    cx.putImageData(img, 0, 0);
  };
}
/* pneu: banda de rodagem com sulcos e blocos, ombros e flanco com frisos e a "escrita" da medida (alto = claro) */
function tireDraw(v0, v1) {
  return (cx, w, h) => {
    const Y = v => (1 - v) * h, tw = v1 - v0;
    cx.fillStyle = '#7a7a7a'; cx.fillRect(0, 0, w, h);
    cx.fillStyle = '#9a9a9a'; cx.fillRect(0, Y(v1 + tw * 0.3), w, Y(v0 - tw * 0.3) - Y(v1 + tw * 0.3));         // ombros
    cx.fillStyle = '#d8d8d8'; cx.fillRect(0, Y(v1), w, Y(v0) - Y(v1));                                         // banda
    cx.fillStyle = '#1c1c1c';
    [0.2, 0.5, 0.8].forEach(f => { const y = Y(v0 + tw * f); cx.fillRect(0, y - h * tw * 0.045, w, h * tw * 0.09); });   // sulcos em volta
    const N = 72, bw = w / N; cx.strokeStyle = '#1c1c1c';
    for (let k = 0; k < N; k++) {                     // sulcos transversais, alternados de cada lado
      const x = k * bw;
      cx.beginPath(); cx.lineWidth = Math.max(2, bw * 0.16);
      cx.moveTo(x, Y(v1 + tw * 0.35)); cx.lineTo(x + bw * 0.45, Y(v0 + tw * 0.62)); cx.stroke();
      cx.moveTo(x + bw * 0.5, Y(v0 + tw * 0.38)); cx.lineTo(x + bw * 0.95, Y(v0 - tw * 0.35)); cx.stroke();
      cx.lineWidth = Math.max(1, bw * 0.06); cx.beginPath(); cx.moveTo(x + bw * 0.25, Y(v0 + tw * 0.56)); cx.lineTo(x + bw * 0.25, Y(v0 + tw * 0.44)); cx.stroke();
    }
    cx.strokeStyle = '#1c1c1c';
    [[0.06, v0 - tw * 0.35], [v1 + tw * 0.35, 0.94]].forEach(([a, b]) => {        // os dois flancos: frisos e blocos de letras
      for (let k = 1; k <= 3; k++) { const y = Y(a + (b - a) * (0.18 + k * 0.05)); cx.fillStyle = '#8c8c8c'; cx.fillRect(0, y, w, Math.max(1, h * 0.004)); }
      const yl = Y(a + (b - a) * 0.55), lh = Math.max(3, (Y(a) - Y(b)) * 0.12);
      for (let rep = 0; rep < 2; rep++) {
        let x = rep * w / 2 + w * 0.04;
        for (let c = 0; c < 26; c++) { const cw = (c % 7 === 6 ? 0.5 : 0.8 + rnd() * 0.5) * lh * 0.62; if (c % 7 !== 6) { cx.fillStyle = '#b4b4b4'; cx.fillRect(x, yl - lh / 2, cw, lh); } x += cw + lh * 0.18; }
      }
    });
  };
}
function hexDraw(cx, w, h) {                          // grade em colmeia: branco = material, preto = furo
  cx.fillStyle = '#fff'; cx.fillRect(0, 0, w, h);
  const cols = 4, r = w / cols / Math.sqrt(3), rows = Math.round(h / (r * 1.5));
  cx.fillStyle = '#000';
  for (let j = -1; j <= rows + 1; j++) for (let i = -1; i <= cols + 1; i++) {
    const x = (i + (j % 2 ? 0.5 : 0)) * (w / cols), y = j * h / rows, rr = r * 0.78;
    cx.beginPath(); for (let k = 0; k < 6; k++) { const a = Math.PI / 6 + k * Math.PI / 3; cx.lineTo(x + rr * Math.cos(a), y + rr * Math.sin(a)); } cx.closePath(); cx.fill();
  }
}
function plateDraw(code) {                            // placa no padrão Mercosul (genérica, com um código do próprio app)
  return (cx, w, h) => {
    cx.fillStyle = '#f4f5f2'; cx.fillRect(0, 0, w, h);
    cx.fillStyle = '#1f4aa8'; cx.fillRect(0, 0, w, h * 0.2);
    cx.fillStyle = '#fff'; cx.font = `700 ${Math.round(h * 0.13)}px Arial, Helvetica, sans-serif`; cx.textAlign = 'center'; cx.textBaseline = 'middle'; cx.fillText('BRASIL', w / 2, h * 0.105);
    cx.fillStyle = '#2f9e4d'; cx.fillRect(w * 0.9, h * 0.04, w * 0.07, h * 0.12); cx.fillStyle = '#f2c21b'; cx.beginPath(); cx.moveTo(w * 0.935, h * 0.05); cx.lineTo(w * 0.965, h * 0.1); cx.lineTo(w * 0.935, h * 0.15); cx.lineTo(w * 0.905, h * 0.1); cx.fill();
    cx.strokeStyle = '#fff'; cx.lineWidth = h * 0.012; cx.beginPath(); cx.arc(w * 0.06, h * 0.1, h * 0.055, 0, TAU); cx.stroke();
    cx.fillStyle = '#16181b'; cx.font = `700 ${Math.round(h * 0.62)}px "Arial Narrow", Arial, Helvetica, sans-serif`; cx.fillText(code, w / 2, h * 0.6, w * 0.9);
    cx.strokeStyle = '#16181b'; cx.lineWidth = h * 0.03; cx.strokeRect(h * 0.015, h * 0.015, w - h * 0.03, h - h * 0.03);
  };
}
function ringDraw(cx, w, h) {                         // disco de freio: marcas de usinagem em círculos
  cx.fillStyle = '#888'; cx.fillRect(0, 0, w, h);
  for (let r = 4; r < w / 2; r += 3) { const g = 150 + Math.round(rnd() * 60); cx.strokeStyle = `rgb(${g},${g},${g})`; cx.lineWidth = 1; cx.beginPath(); cx.arc(w / 2, h / 2, r, 0, TAU); cx.stroke(); }
}
function pleatDraw(cx, w, h) {                        // gomos do estofado: costura funda e o tecido estufado entre elas
  for (let x = 0; x < w; x++) { const t = x / w, g = Math.round(70 + 150 * Math.pow(Math.sin(Math.PI * t), 0.6)); cx.fillStyle = `rgb(${g},${g},${g})`; cx.fillRect(x, 0, 1, h); }
}
function finishDetails() {
  const bySlot = {};
  const swap = (ids, from, to) => ids.forEach(id => (REG[id] ? REG[id].meshes : []).forEach(m => { if (m.material === from) { m.material = to; m.userData.baseMat = to; } }));
  /* metal fundido, escapamento, discos, tecidos, tapetes e painel ganham grão (afeta só a luz, não a cor) */
  /* relevo fino demais vira chiado na tela: no metal fica só a variação de brilho; o relevo é largo e fraco */
  const grain = (mat, key, rep, bump) => {
    const t = key === 'fino' ? texOf(128, 128, noiseDraw(2, 0.55, 1), rep, false, 'ruido-fino') : texOf(128, 128, noiseDraw(12, 0.72, 1), rep, false, 'ruido');
    mat.roughnessMap = t; if (bump) { mat.bumpMap = t; mat.bumpScale = bump; } mat.needsUpdate = true;
  };
  [MAT.alu, MAT.aluDark, MAT.cat, MAT.exhaust].forEach(m => grain(m, 'ruido', [1, 1]));
  grain(MAT.iron, 'ruido', [1, 1], 0.05); grain(MAT.dash, 'ruido', [1, 1], 0.04); grain(MAT.carpet, 'fino', [6, 6], 0.2);
  MAT.fabric.bumpMap = texOf(64, 8, pleatDraw, [6, 1], false, 'gomos'); MAT.fabric.bumpScale = 1.2;
  MAT.fabricDS.bumpMap = texOf(64, 8, pleatDraw, [12, 1], false, 'gomos'); MAT.fabricDS.bumpScale = 1.2;
  MAT.disc.roughnessMap = texOf(256, 256, ringDraw, null, false, 'disco');
  [MAT.fabric, MAT.fabricDS, MAT.disc].forEach(m => { m.needsUpdate = true; });
  /* pneus: a banda de rodagem fica onde o perfil do pneu é mais largo */
  ['pneus', 'estepe'].forEach(id => (REG[id] ? REG[id].meshes : []).forEach(m => {
    const P = m.geometry.parameters && m.geometry.parameters.points; if (m.material !== MAT.tire || !P) return;
    const rmax = Math.max(...P.map(p => p.x)), on = P.map(p => p.x > rmax - 0.003), a = on.indexOf(true), b = on.lastIndexOf(true), n = P.length - 1;
    const key = 'tire' + a + '_' + b + '_' + n;
    if (!bySlot[key]) { const t = texOf(1024, 256, tireDraw(a / n, b / n), null, false, key); const mt = MAT.tire.clone(); mt.bumpMap = t; mt.bumpScale = 1.6; mt.roughness = 0.95; MAT[key] = bySlot[key] = mt; }
    m.material = m.userData.baseMat = bySlot[key];
  }));
  /* grades vazadas: dá para ver o radiador atrás */
  MAT.grilleMesh = MAT.grille.clone(); Object.assign(MAT.grilleMesh, { alphaMap: texOf(128, 222, hexDraw, [21, 12], false, 'colmeia'), alphaTest: 0.5, side: THREE.DoubleSide, roughness: 0.55 });
  MAT.grilleMesh.bumpMap = MAT.grilleMesh.alphaMap; MAT.grilleMesh.bumpScale = 0.6;
  swap(['grade', 'grade_inf'], MAT.grille, MAT.grilleMesh);
  /* placas Mercosul: um adesivo plano sobre cada placa, com a placa do carro */
  const code = CAR.plate || ((CAR.codePrefix || 'CAR').slice(0, 3) + '1A23');
  MAT.plateDecal = new THREE.MeshStandardMaterial({ map: texOf(520, 169, plateDraw(code), null, true, 'placa-' + code), roughness: 0.45, metalness: 0.05, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  ['para_choque_d', 'para_choque_t', 'tampa_tras', 'tampa_mala', 'painel_tras'].forEach(id => (REG[id] ? REG[id].meshes.slice() : []).forEach(m => {
    if (m.material !== MAT.plate) return;
    const g = m.geometry; g.computeBoundingBox(); const bb = g.boundingBox, c = bb.getCenter(V(0, 0, 0)), sz = bb.getSize(V(0, 0, 0)), par = m.parent;
    c.add(m.position); if (par && par.userData.abs) c.add(par.userData.absPos || par.position);
    let n = V(0, 0, 0); const N = g.attributes.normal; if (N) { for (let i = 0; i < N.count; i++) n.x += N.getX(i), n.y += N.getY(i), n.z += N.getZ(i); n.divideScalar(N.count); }
    const isBox = g.type.includes('Box');            // placa feita de caixa fina: o adesivo vai na face de fora
    if (isBox || n.length() < 0.5) n.set(Math.sign(c.x) || 1, 0, 0); else n.normalize();
    const d = new THREE.Mesh(new THREE.PlaneGeometry(sz.z * 0.97, sz.z * 0.97 * 0.325), MAT.plateDecal);
    const up = V(0, 1, 0).addScaledVector(n, -n.y).normalize(), xa = up.clone().cross(n);
    d.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(xa, up, n)); d.scale.x = -1;   // o carro é espelhado em z: desespelha o texto
    d.position.copy(c).addScaledVector(n, (isBox ? sz.x / 2 : 0) + 0.0012);
    d.userData.noMerge = true; place(id, d, par);
  }));
}
/* ---------- inicialização da cena ---------- */
function initScene(canvas) {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.localClippingEnabled = false;
  scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new THREE.RoomEnvironment(), 0.04).texture;
  camera = new THREE.PerspectiveCamera(34, 1, 0.03, 80);
  camera.position.copy(HOME.t).addScaledVector(HOME.dir, 5.6);
  controls = new THREE.OrbitControls(camera, canvas);
  controls.target.copy(HOME.t); controls.enableDamping = true; controls.dampingFactor = 0.085;
  controls.minDistance = 0.25; controls.maxDistance = 14; controls.maxPolarAngle = Math.PI * 0.94; controls.screenSpacePanning = true;
  scene.add(new THREE.HemisphereLight(0xffffff, 0x4a4f55, 0.55));
  dirLight = new THREE.DirectionalLight(0xffffff, 1.1); dirLight.position.set(2.5, 6, -3.5);
  dirLight.castShadow = true; dirLight.shadow.mapSize.set(2048, 2048);
  Object.assign(dirLight.shadow.camera, { left: -3.2, right: 3.2, top: 3.2, bottom: -3.2, near: 0.5, far: 15 });
  dirLight.shadow.bias = -0.0005; scene.add(dirLight);
  const fill = new THREE.DirectionalLight(0xdfe8ff, 0.35); fill.position.set(-4, 2.5, 3); scene.add(fill);
  groundShadow = new THREE.Mesh(new THREE.CircleGeometry(7, 64), new THREE.ShadowMaterial({ opacity: 0.2 }));
  groundShadow.rotation.x = -Math.PI / 2; groundShadow.receiveShadow = true; scene.add(groundShadow);
  const cv = document.createElement('canvas'); cv.width = cv.height = 128; const cx = cv.getContext('2d');
  const gr = cx.createRadialGradient(64, 64, 8, 64, 64, 64); gr.addColorStop(0, 'rgba(0,0,0,0.5)'); gr.addColorStop(1, 'rgba(0,0,0,0)');
  cx.fillStyle = gr; cx.fillRect(0, 0, 128, 128);
  const [carL, carW] = CAR.size || [3.84, 1.65];
  const ao = AO = new THREE.Mesh(new THREE.PlaneGeometry(carL * 1.2, carW * 1.4), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false }));
  ao.rotation.x = -Math.PI / 2; ao.position.y = 0.002; scene.add(ao);
  carRoot = new THREE.Group(); scene.add(carRoot);  // montado com +z = lado do motorista; espelhado abaixo para ficar mão esquerda
  const K = { THREE, V, TAU, UPY, S, MAT, std, phy, reg, tag, place, add, pivotOf, box, cyl, tube, rod, sph, spring, ribbon, beltPath, plateFromHull,
    gBox, gCyl, gLathe, gTorus, gTube, curveOf, setBar, mono, makeBody, art, ANIM, WHEELS, ROUTES, REG, lerp3 };
  GEO = (CAR.geometry || (window.CAR_GEO || {})[CAR.id])(K);
  GEO.build(); finishDetails(); buildFasteners();
  for (const id in REG) REG[id].meshes.forEach(m => { if (!m.isInstancedMesh) m.castShadow = m.castShadow || id === 'pneus' || (PARTS[id] && PARTS[id].s === 'carro' && m.userData.baseMat === MAT.paint); });
  refreshThemeColors();
  carRoot.scale.z = -1; carRoot.updateMatrixWorld(true); mergeStatic(); setupExplode(); updateEngine(0); applyStates(); updateHinges();
  CAR_BOX = new THREE.Box3(); (CAR.boxIds || []).forEach(id => REG[id] && REG[id].meshes.forEach(m => CAR_BOX.expandByObject(m)));
  const missing = Object.keys(PARTS).filter(id => !REG[id]); if (missing.length) console.warn('sem geometria:', missing);
  const unknown = Object.keys(REG).filter(id => !PARTS[id] && !FIX[id]); if (unknown.length) console.warn('sem dados:', unknown);
}
/* ===== Caminhos animados: grafo com ramos, traçado real dos tubos, enchimento por passo e partículas ===== */
const FLOW = { G: null, group: null, parts: null, heads: null, t0: 0, max: 1400 };

/* ponto de uma peça (coordenadas do carro) no mundo, acompanhando a vista explodida */
function carPtOf(id, p) {
  const v = EXV[id], t = REG[id] ? REG[id].exT || 0 : APP.explode, q = V(p[0], p[1], p[2]);
  if (v && t) { const sg = v[3] === 1 ? (p[2] >= -0.01 ? 1 : -1) : 1; q.x += v[0] * t; q.y += v[1] * t; q.z += v[2] * sg * t; }
  return carRoot.localToWorld(q);
}
/* traçado de um tubo já modelado, reamostrado a cada 3 cm (segue a mesma curva do tubo desenhado) */
function routeWorld(id, i) {
  const r = ROUTES[id] && ROUTES[id][i]; if (!r) return null;
  const c = curveOf(r, false), n = Math.max(2, Math.ceil(c.getLength() / 0.03));
  return c.getSpacedPoints(n).map(q => carPtOf(id, [q.x, q.y, q.z]));
}
function nearestIdx(P, q) { let bi = 0, bd = Infinity; for (let i = 0; i < P.length; i++) { const d = P[i].distanceToSquared(q); if (d < bd) { bd = d; bi = i; } } return bi; }
function subPath(P, a, b) { const ia = nearestIdx(P, a), ib = nearestIdx(P, b); return ia <= ib ? P.slice(ia, ib + 1) : P.slice(ib, ia + 1).reverse(); }
function sideAnchor(id, s) {
  const R = REG[id], b = new THREE.Box3(); if (!R) return anchorOf(id);
  R.meshes.forEach(m => {
    if ((childCenter(m).z >= -0.01) !== (s > 0)) return;
    if (m.isInstancedMesh) b.expandByPoint(m.localToWorld(m.userData.center.clone())); else b.expandByObject(m);
  });
  return b.isEmpty() ? anchorOf(id) : b.getCenter(V(0, 0, 0));
}
function mkSeg(step, pts, c0, c1, off) {
  const P = [];
  pts.forEach(q => { if (!P.length || P[P.length - 1].distanceTo(q) > 0.004) P.push(q); });
  if (P.length < 2) return null;
  const curve = new THREE.CatmullRomCurve3(P, false, 'centripetal', 0.5), len = curve.getLength();
  if (len < 0.008) return null;
  const table = curve.getSpacedPoints(Math.max(2, Math.ceil(len / 0.005)));
  const cum = [0]; for (let k = 1; k < P.length; k++) cum.push(cum[k - 1] + P[k].distanceTo(P[k - 1]));
  return { step, raw: P, cum, curve, len, table, off, c0: new THREE.Color(c0), c1: new THREE.Color(c1) };
}
const stepOpts = st => (st[2] && typeof st[2] === 'object') ? st[2] : {};

/* monta o grafo do caminho: trechos (com ramos), pontos de cada passo e tempo de enchimento */
function flowGraph(fl) {
  carRoot.updateMatrixWorld(true);
  const segs = [], exits = [], pins = [], info = [];
  let color = fl.c;
  fl.steps.forEach((st, i) => {
    const id = st[0], o = stepOpts(st);
    if (o.c) color = o.c;
    const c0 = color, c1 = o.c2 || color; color = c1;
    const from = o.from === undefined ? (i ? [i - 1] : []) : (o.from < 0 ? [] : [].concat(o.from));
    const cand = []; from.forEach(j => (exits[j] || []).forEach(p => cand.push({ p, off: 0 })));
    const near = (q, extra) => { let best = null, bd = Infinity; for (const c of extra ? cand.concat(extra) : cand) { const d = c.p.distanceTo(q); if (d < bd) { bd = d; best = c; } } return best ? { c: best, d: bd } : null; };
    const viaPts = (a, b) => {
      if (!o.via) return [];
      if (Array.isArray(o.via)) return o.via.map(p => carPtOf(id, p));
      const P = routeWorld(o.via.r, o.via.i || 0); return P ? subPath(P, a, b) : [];
    };
    const mine = [], myExits = [];
    if (o.route) {
      const all = (ROUTES[id] || []).map((_, k) => k);
      let pick = o.pick === undefined ? all : o.pick;
      if (pick === 'near') {
        let bk = 0, bd = Infinity;
        all.forEach(k => { const P = ROUTES[id][k], a = carPtOf(id, P[0]), b = carPtOf(id, P[P.length - 1]); const d = Math.min((near(a) || { d: 9 }).d, (near(b) || { d: 9 }).d); if (d < bd) { bd = d; bk = k; } });
        pick = [bk];
      }
      const placed = [];
      [].concat(pick).forEach((k, n) => {
        let P = routeWorld(id, k); if (!P) return;
        const extra = []; placed.forEach(pl => pl.raw.forEach((q, qi) => extra.push({ p: q, off: pl.off + pl.cum[qi] })));
        const sA = near(P[0], extra), sB = near(P[P.length - 1], extra);
        let con = sA;
        if (sA && sB && sB.d + 0.012 < sA.d) { P = P.slice().reverse(); con = sB; }
        const pts = [];
        if (con) { pts.push(con.c.p.clone()); if (!n) pts.push(...viaPts(con.c.p, P[0])); }
        pts.push(...P);
        const sg = mkSeg(i, pts, c0, c1, con ? con.c.off : 0);
        if (sg) { mine.push(sg); placed.push(sg); }
      });
      placed.forEach(pl => { const e = pl.raw[pl.raw.length - 1]; if (!placed.some(q => q !== pl && q.raw[0].distanceTo(e) < 0.02)) myExits.push(e); });
      if (o.at) pins[i] = [carPtOf(id, Array.isArray(o.at[0]) ? o.at[0] : o.at)];
      else if (mine.length) { const T = mine[0].table; pins[i] = [T[T.length >> 1].clone()]; }
      else pins[i] = [anchorOf(id)];
    } else {
      const anchors = o.at ? (Array.isArray(o.at[0]) ? o.at : [o.at]).map(p => carPtOf(id, p))
        : o.both ? [sideAnchor(id, 1), sideAnchor(id, -1)] : [anchorOf(id)];
      anchors.forEach(a => {
        const nc = near(a);
        if (nc) { const sg = mkSeg(i, [nc.c.p.clone(), ...viaPts(nc.c.p, a), a.clone()], c0, c1, 0); if (sg) mine.push(sg); }
        myExits.push(a);
      });
      pins[i] = anchors;
    }
    (o.out || []).forEach(ot => {
      const a = myExits[0] || pins[i][0], b = (pins[ot.to] || [])[0]; if (!a || !b) return;
      let mid = []; if (ot.via) { const P = routeWorld(ot.via.r, ot.via.i || 0); if (P) mid = subPath(P, a, b); }
      const sg = mkSeg(i, [a.clone(), ...mid, b.clone()], c0, c1, 0); if (sg) mine.push(sg);
    });
    exits[i] = myExits;
    segs.push(...mine);
    const far = mine.reduce((m, s) => Math.max(m, s.off + s.len), 0);
    const dur = far ? Math.min(1.7, Math.max(0.45, 0.35 + far * 0.55)) : 0;
    info[i] = { id, text: st[1], segs: mine, dist: far, dur, speed: far ? far / dur : 1 };
  });
  return { segs, pins, info };
}

/* desenho: trilha apagada (o caminho todo), trilha acesa (até onde o fluxo chegou) e partículas */
function flowClear() {
  if (!FLOW.group) { if (!(APP.flow && APP.flow.kind === 'dm')) FLOW.G = null; return; }
  FLOW.group.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
  scene.remove(FLOW.group); FLOW.group = FLOW.parts = FLOW.heads = FLOW.G = null;
}
function flowDraw() {
  flowClear(); const fl = APP.flow; if (!fl || fl.kind === 'dm') return;
  const G = FLOW.G = flowGraph(fl), grp = FLOW.group = new THREE.Group(); scene.add(grp);
  const basic = o => new THREE.MeshBasicMaterial(Object.assign({ transparent: true, depthTest: false, depthWrite: false }, o));
  G.segs.forEach(sg => {
    const n = sg.tubSeg = Math.max(8, Math.ceil(sg.len / 0.02));
    const mid = sg.c0.clone().lerp(sg.c1, 0.5);
    const ghost = new THREE.Mesh(new THREE.TubeGeometry(sg.curve, n, 0.0028, 5, false), basic({ color: mid, opacity: 0.3 }));
    const gl = new THREE.TubeGeometry(sg.curve, n, 0.0055, 6, false), grad = !sg.c0.equals(sg.c1);
    if (grad) {
      const cols = [], c = new THREE.Color();
      for (let j = 0; j <= n; j++) { c.copy(sg.c0).lerp(sg.c1, j / n); for (let k = 0; k <= 6; k++) cols.push(c.r, c.g, c.b); }
      gl.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    }
    const lit = new THREE.Mesh(gl, basic(grad ? { vertexColors: true, opacity: 0.55 } : { color: sg.c0, opacity: 0.55 }));
    gl.setDrawRange(0, 0); sg.lit = lit; sg.drawn = 0;
    ghost.renderOrder = 11; lit.renderOrder = 12; ghost.frustumCulled = lit.frustumCulled = false;
    grp.add(ghost, lit);
  });
  const inst = (r, n, op, order) => {
    const m = new THREE.InstancedMesh(new THREE.SphereGeometry(r, 10, 8), basic({ opacity: op }), n);
    m.instanceMatrix.setUsage(THREE.DynamicDrawUsage); m.setColorAt(0, new THREE.Color(1, 1, 1));
    m.frustumCulled = false; m.renderOrder = order; m.count = 0; grp.add(m); return m;
  };
  FLOW.parts = inst(0.0092, FLOW.max, 0.95, 13);
  FLOW.heads = inst(0.018, 64, 0.8, 14);
}
const _fm = new THREE.Matrix4(), _fc = new THREE.Color(), _fq = new THREE.Quaternion(), _fs = new THREE.Vector3();
function flowUpdate(now) {
  if (APP.flow && APP.flow.kind === 'dm') return dmUpdate(now);
  const G = FLOW.G, cur = APP.flowStep; if (!G || !FLOW.parts) return;
  const inf = G.info[cur] || { speed: 1 };
  const el = reduceMotion ? 1e6 : Math.max(0, (now - FLOW.t0) / 1000), front = el * inf.speed;
  const SP = 0.055, phase = reduceMotion ? SP * 0.5 : (now / 1000 * 0.24) % SP;
  const zs = Math.min(1.3, Math.max(0.55, camera.position.distanceTo(controls.target) / 2.2));   // partículas com tamanho parecido na tela
  _fs.set(zs, zs, zs);
  let n = 0, h = 0;
  for (const sg of G.segs) {
    const p = sg.step < cur ? 1 : sg.step > cur ? 0 : Math.max(0, Math.min(1, (front - sg.off) / sg.len));
    const cnt = Math.floor(p * sg.tubSeg) * 36;
    if (sg.drawn !== cnt) { sg.lit.geometry.setDrawRange(0, cnt); sg.drawn = cnt; }
    if (p <= 0) continue;
    const L = p * sg.len, T = sg.table, TN = T.length - 1;
    for (let s = phase; s <= L && n < FLOW.max; s += SP) {
      const k = Math.min(TN, Math.round(s / sg.len * TN)), q = T[k];
      _fm.compose(q, _fq, _fs); FLOW.parts.setMatrixAt(n, _fm);
      _fc.copy(sg.c0).lerp(sg.c1, s / sg.len); FLOW.parts.setColorAt(n, _fc); n++;
    }
    if (p < 1 && h < 64) {
      const q = T[Math.min(TN, Math.round(p * TN))], sc = zs * (1 + 0.2 * Math.sin(now * 0.012));
      _fm.compose(q, _fq, _fs.set(sc, sc, sc)); FLOW.heads.setMatrixAt(h, _fm); _fs.set(zs, zs, zs);
      _fc.copy(sg.c0).lerp(sg.c1, p); FLOW.heads.setColorAt(h, _fc); h++;
    }
  }
  for (const m of [[FLOW.parts, n], [FLOW.heads, h]]) {
    m[0].count = m[1]; m[0].instanceMatrix.needsUpdate = true; if (m[0].instanceColor) m[0].instanceColor.needsUpdate = true;
  }
}
/* enquadramento de um passo: a peça e o trecho que chega nela */
function flowStepBox(i) {
  if (APP.flow && APP.flow.kind === 'dm') return dmStepBox(i);
  const G = FLOW.G, b = new THREE.Box3(); if (!G || !G.info[i]) return b;
  (G.pins[i] || []).forEach(p => b.expandByPoint(p));
  G.info[i].segs.forEach(sg => { const T = sg.table, st = Math.max(1, T.length >> 4); for (let k = 0; k < T.length; k += st) b.expandByPoint(T[k]); b.expandByPoint(T[T.length - 1]); });
  if (b.getSize(V(0, 0, 0)).length() < 0.12) b.expandByScalar(0.1);
  return b;
}
function flowWholeBox() {
  if (APP.flow && APP.flow.kind === 'dm') return dmWholeBox();
  const G = FLOW.G, b = new THREE.Box3(); if (!G) return b;
  G.pins.forEach(ps => (ps || []).forEach(p => b.expandByPoint(p)));
  G.segs.forEach(sg => { b.expandByPoint(sg.table[0]); b.expandByPoint(sg.table[sg.table.length - 1]); b.expandByPoint(sg.table[sg.table.length >> 1]); });
  return b;
}
/* o que se mexe em cada caminho */
function flowMotion(fl, i) {
  const m = { engine: 0, wheels: 0, steer: 0, fan: 0 };
  if (fl && fl.mo) return Object.assign(m, fl.mo(i));   // o carro pode dizer o que se mexe em cada passo
  switch (fl && fl.motion) {
    case 'ar': m.engine = 0.5; break;
    case 'oleo': m.engine = 0.45; break;
    case 'agua': m.engine = 0.45; if (i >= 9) m.fan = 1; break;
    case 'forca': m.engine = 0.6; m.wheels = 1; break;
    case 'partida': m.engine = i >= 9 ? 0.6 : i >= 4 ? 0.22 : 0; break;
    case 'freio': m.wheels = i < 4 ? 1 : 0; break;
    case 'dir': m.steer = 1; break;
  }
  return m;
}
/* ===== Como desmontar: os fixadores saem na ordem e a peça se solta ===== */
const DM = { g: null, recs: [], moves: [], hidden: new Set(), gone: new Set(), pathRem: {}, was: null, menuDirty: false, prevView: null };
const DM_COLOR = '#D9822B';
const DM_HL = new THREE.Color('#ff9f1a'), DM_HL2 = new THREE.Color('#ffe7a3'), DM_W = new THREE.Color(1, 1, 1);
const _dq = new THREE.Quaternion(), _dqY = new THREE.Quaternion(), _dm4 = new THREE.Matrix4(), _dp = new THREE.Vector3(), _dsv = new THREE.Vector3(), _dcol = new THREE.Color();
const clamp01 = x => Math.max(0, Math.min(1, x));
const easeIO = k => k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;

/* guias viram "caminhos" para a interface: cada passo mostra uma peça (ou um grupo de fixadores) */
const GUIDE_BY_PART = {};
function openPart(g, k) { return CAR.open[k] || CAR.open.door; }
GUIDES.forEach(g => {
  g.kind = 'dm'; g.c = DM_COLOR;
  g.steps = g.steps.map(([text, o = {}]) => {
    let pid = g.part;
    if (o.fx && o.fx.length) pid = o.fx[0][0];
    else if (o.out && o.out.length) pid = o.out[0][0];
    else if (o.open) pid = openPart(g, [].concat(o.open)[0]);
    return [pid, text, o];
  });
  g.parts.forEach(p => { if (!GUIDE_BY_PART[p]) GUIDE_BY_PART[p] = g; });
});

function recWorld(r) { return r.m.localToWorld(r.p.clone()); }
function carDirWorld(v) { return carRoot.localToWorld(v.clone()).sub(carRoot.localToWorld(V(0, 0, 0))); }
function meshSide(m) { return m.userData.side || (childCenter(m).z >= -0.01 ? 1 : -1); }
function dmPartMeshes(o) {
  const R = REG[o.pid]; if (!R) return [];
  return R.meshes.filter(m => (!o.side || meshSide(m) === o.side) && (o.w == null || m.parent === WHEELS[o.w].spin));
}
function boxOfMeshes(ms) { const b = new THREE.Box3(); ms.forEach(m => { if (m.isInstancedMesh) b.expandByPoint(m.localToWorld(m.userData.center.clone())); else b.expandByObject(m); }); return b; }

function dmStart(g) {
  DM.g = g; DM.was = ARTS.map(a => a.t);
  carRoot.updateMatrixWorld(true);
  g.S = g.steps.map(([pid, text, o]) => {
    const fx = [], paths = [];
    (o.fx || []).forEach(([fid, idx]) => {
      const all = FIXI[fid] || [];
      if (!all.length) { paths.push(fid); return; }
      (idx === 'all' ? all.filter(r => !g.side || r.side === g.side) : idx.map(i => all[i])).forEach(r => { if (r) fx.push(r); });
    });
    const n = fx.length, gap = n ? Math.min(0.3, 1.5 / n) : 0, A = 0.7;
    const fxEnd = n ? 0.25 + (n - 1) * gap + A : (paths.length ? 0.7 : 0);
    const out = (o.out || []).map(([p2, v, side, w]) => ({ pid: p2, v: V(v[0], v[1], v[2]), side: side || 0, w }));
    const outStart = fxEnd ? fxEnd + 0.1 : 0.25;
    const dur = Math.max(o.keep ? 1.2 : fxEnd, out.length ? outStart + 1.0 : 0, 0.6);
    return { pid, o, fx, paths, gap, A, fxEnd, out, outStart, dur, keep: !!o.keep, opens: [].concat(o.open || []), hide: o.hide || [] };
  });
  DM.recs = [];
  g.S.forEach((st, i) => st.fx.forEach((r, k) => {
    if (!DM.recs.includes(r)) { DM.recs.push(r); r.dmRem = -1; r.dmKey = null; }
    if (!st.keep && r.dmRem < 0) { r.dmRem = i; r.dmOrd = k; }
  }));
  DM.pathRem = {};
  g.S.forEach((st, i) => st.paths.forEach(fid => { if (!st.keep && DM.pathRem[fid] == null) DM.pathRem[fid] = i; }));
  DM.moves = [];
  g.S.forEach((st, i) => st.out.forEach(o => DM.moves.push(Object.assign({ step: i }, o))));
  DM.hidden = new Set(); DM.gone = new Set();
  g.S.forEach(st => {                                     // fixadores dos dois lados: o alfinete fica no lado mostrado (esquerdo)
    const zs = st.fx.map(r => r.p.z), both = zs.length && Math.max(...zs) - Math.min(...zs) > 0.5;
    st.pinFx = both ? st.fx.filter(r => r.p.z >= -0.01) : st.fx;
  });
  FLOW.G = { pins: g.S.map(st => [dmPin(g, st)]), info: g.S.map(st => ({ dur: st.dur })) };
}
function dmPinPos(i) { return DM.g ? dmPin(DM.g, DM.g.S[i]) : V(0, 0, 0); }
function dmPin(g, st) {
  if (st.pinFx.length) { const c = V(0, 0, 0); st.pinFx.forEach(r => c.add(recWorld(r))); return c.divideScalar(st.pinFx.length); }
  if (st.out.length) { const b = boxOfMeshes(dmPartMeshes(st.out[0])); if (!b.isEmpty()) return b.getCenter(V(0, 0, 0)); }
  if (st.o.at) return carPtOf(g.part, st.o.at);
  if (st.paths.length && REG[st.paths[0]]) return boxOfMeshes(REG[st.paths[0]].meshes).getCenter(V(0, 0, 0));
  if (st.opens.length) { const p = openPart(g, st.opens[0]); return g.side && isDoorPart(p) ? sideAnchor(p, g.side) : anchorOf(p); }
  return g.side ? sideAnchor(g.part, g.side) : anchorOf(g.part);
}
/* foco de cada passo: o que sai ou abre acende forte; as outras peças do guia, de leve; o resto fica apagado */
const selOf = (side, w) => m => (!side || m.userData.side === side) && (w == null || m.parent === WHEELS[w].spin);
function dmFocus(i, phase) {
  const g = DM.g, st = g.S[i], prim = new Set(), rel = new Set(g.parts), sel = {};
  const fxPhase = phase === 'fx' && (st.fx.length || st.paths.length);
  g.parts.forEach(p => { if (g.side) sel[p] = selOf(g.side); });
  g.S.forEach(s2 => s2.out.forEach(o => { if (o.side || o.w != null) sel[o.pid] = selOf(o.side, o.w); }));
  st.out.forEach(o => (fxPhase ? rel : prim).add(o.pid));
  st.paths.forEach(f => prim.add(f));
  st.opens.forEach(k => { const p = openPart(g, k); prim.add(p); if (isDoorPart(p)) sel[p] = selOf(g.side || 1); });
  g.S.forEach(s2 => { s2.fx.forEach(r => rel.add(r.fid)); s2.paths.forEach(f => rel.add(f)); });
  prim.forEach(x => rel.delete(x));
  return { kind: 'dm', id: st.pid, primary: prim, related: rel, sel };
}
function dmStepBox(i) {
  const st = DM.g.S[i], b = new THREE.Box3();
  st.fx.forEach(r => b.expandByPoint(recWorld(r)));
  st.out.forEach(o => { const pb = boxOfMeshes(dmPartMeshes(o)); if (pb.isEmpty()) return; b.union(pb); b.union(pb.clone().translate(carDirWorld(o.v))); });
  if (b.isEmpty()) st.paths.forEach(f => { if (REG[f]) b.union(boxOfMeshes(REG[f].meshes)); });
  if (b.isEmpty()) { st.opens.forEach(k => { const p = openPart(DM.g, k); b.union(boxOfMeshes(dmPartMeshes({ pid: p, side: isDoorPart(p) ? DM.g.side || 1 : 0 }))); }); if (!b.isEmpty()) b.expandByScalar(0.25); }
  if (b.isEmpty() && FLOW.G) b.expandByPoint(FLOW.G.pins[i][0]);
  if (b.getSize(V(0, 0, 0)).length() < 0.25) b.expandByScalar(0.14);
  return b;
}
function recDirWorld(r) { const a = r.m.localToWorld(r.p.clone()); return r.m.localToWorld(r.p.clone().add(r.d)).sub(a).normalize(); }
/* de onde olhar cada passo: pela frente dos fixadores (a direção em que saem), pelo lado para onde a peça sai, ou pela dica do guia */
function dmView(i) {
  const g = DM.g, st = g.S[i], b = dmStepBox(i), c = b.getCenter(V(0, 0, 0));
  let n = V(0, 0, 0);
  const hint = st.o.cam || null;
  if (hint) n = carDirWorld(V(hint[0], hint[1], hint[2]));
  else {
    st.pinFx.forEach(r => n.add(recDirWorld(r)));
    st.out.forEach(o => n.add(carDirWorld(o.v).normalize().multiplyScalar(1.5)));
  }
  const out = viewDirFor(c);
  if (n.lengthSq() < 0.04) n.copy(out);
  n.normalize();
  const dir = hint ? n : n.multiplyScalar(0.62).add(out.multiplyScalar(0.38));
  if (!hint) dir.y = Math.max(dir.y, 0.2) + 0.18;
  dir.normalize();
  return { c, dir, b };
}
function dmWholeBox() {
  const g = DM.g, b = boxOfMeshes(dmPartMeshes({ pid: g.part, side: g.side }));
  DM.recs.forEach(r => b.expandByPoint(recWorld(r)));
  return b;
}
/* fixadores do passo aparecem por cima de tudo (muitos ficam por baixo de chapas e acabamentos) */
const DMOV = {};
function dmOv(kind) {
  if (DMOV[kind]) return DMOV[kind];
  const mat = new THREE.MeshStandardMaterial({ color: 0xff7a14, emissive: 0xff5a00, emissiveIntensity: 0.6, roughness: 0.5, metalness: 0.1, depthTest: false, depthWrite: false, transparent: true, opacity: 0.97 });
  const m = new THREE.InstancedMesh(fxGeo(kind), mat, 160);
  m.frustumCulled = false; m.renderOrder = 15; m.count = 0; scene.add(m);
  return (DMOV[kind] = m);
}
const _dmw = new THREE.Matrix4();
function dmLocal(r, state, u) {
  let sc = r.s, lift = 0, ang = 0;
  if (state === 'out') sc = 0;
  else if (state === 'mv') {
    if (r.k === 'parafuso') { lift = 0.05 * easeIO(u); ang = u * Math.PI * 6; }        // gira e sobe
    else if (r.k === 'presilha' || r.k === 'pino') lift = 0.04 * Math.min(1, u * 1.8);  // salta
    else if (r.k === 'solda') sc *= 1 + 0.7 * Math.sin(Math.min(1, u * 1.6) * Math.PI);  // brilha ao ser furada
    if (u > 0.62) sc *= 1 - (u - 0.62) / 0.38;
  }
  _dp.copy(r.p).addScaledVector(r.d, lift);
  _dq.copy(r.q); if (ang) _dq.multiply(_dqY.setFromAxisAngle(UPY, ang));
  return _dm4.compose(_dp, _dq, _dsv.set(sc, sc, sc));
}
function dmWrite(r, state, u, pulse) {
  r.m.setMatrixAt(r.i, dmLocal(r, state, u));
  if (r.m.instanceColor) r.m.setColorAt(r.i, pulse >= 0 ? _dcol.copy(DM_HL).lerp(DM_HL2, pulse) : DM_W);
}
function dmUpdate(now) {
  const g = DM.g; if (!g) return;
  const cur = APP.flowStep, S = g.S, st = S[cur]; if (!st) return;
  const e = DM.freezeE != null ? DM.freezeE : reduceMotion ? 1e6 : Math.max(0, (now - FLOW.t0) / 1000), pulse = 0.5 + 0.5 * Math.sin(now * 0.009);
  const phase = (st.fx.length || st.paths.length) && e < st.outStart ? 'fx' : 'out';
  if (DM.phaseKey !== cur + phase) {
    DM.phaseKey = cur + phase;
    if (APP.focus && APP.focus.kind === 'dm') { APP.focus = dmFocus(cur, phase); applyStates(); }
  }
  const touched = new Set(), ov = [];
  for (const r of DM.recs) {
    let state = 'in', u = 0, hl = false;
    if (r.dmRem >= 0 && r.dmRem < cur) state = 'out';
    else if (r.dmRem === cur) { u = clamp01((e - (0.25 + r.dmOrd * st.gap)) / st.A); state = u >= 1 ? 'out' : u > 0 ? 'mv' : 'in'; hl = state !== 'out'; }
    else if (st.keep && st.fx.includes(r)) hl = true;
    if (hl) ov.push([r, state, u]);
    const key = state + (hl ? 'h' : '');
    if (state !== 'mv' && !hl && r.dmKey === key) continue;
    r.dmKey = key; dmWrite(r, state, u, hl ? (reduceMotion ? 0.3 : pulse) : -1); touched.add(r.m);
  }
  touched.forEach(m => { m.instanceMatrix.needsUpdate = true; if (m.instanceColor) m.instanceColor.needsUpdate = true; });
  for (const k in DMOV) DMOV[k].count = 0;
  const grow = 1.7 + (reduceMotion ? 0 : 0.25 * pulse);
  for (const [r, state, u] of ov) {
    const m = dmOv(r.k); if (m.count >= 160) continue;
    _dmw.multiplyMatrices(r.m.matrixWorld, dmLocal(r, state, u));
    _dmw.decompose(_dp, _dq, _dsv); _dsv.multiplyScalar(grow); _dmw.compose(_dp, _dq, _dsv);
    m.setMatrixAt(m.count++, _dmw);
  }
  for (const k in DMOV) { DMOV[k].instanceMatrix.needsUpdate = true; DMOV[k].material.emissiveIntensity = 0.45 + (reduceMotion ? 0.1 : 0.35 * pulse); }
  for (const M of DM.moves) {
    const T = M.step < cur ? 1 : M.step > cur ? 0 : easeIO(clamp01((e - S[M.step].outStart) / 1.0));
    const R = REG[M.pid]; if (!R) continue;
    if (R.dmT !== T || R.dmV !== M.v) { R.dmT = T; R.dmV = M.v; R.dmSide = M.side; R.dmPar = M.w != null ? WHEELS[M.w].spin : null; R.dmDirty = true; }
  }
  const hid = new Set();
  S.forEach((s2, i) => { if (i < cur || (i === cur && e > s2.fxEnd)) s2.hide.forEach(id => hid.add(id)); });
  for (const fid in DM.pathRem) { const i = DM.pathRem[fid]; if (i < cur || (i === cur && e > S[i].fxEnd)) hid.add(fid); }
  const gone = new Set(); DM.moves.forEach(M => { if (M.step < cur) gone.add(M.pid); });
  const same = (a, b2) => a.size === b2.size && [...a].every(x => b2.has(x));
  if (!same(hid, DM.hidden) || !same(gone, DM.gone)) { DM.hidden = hid; DM.gone = gone; applyStates(); }
  const want = DM.was.slice();
  for (let i = 0; i <= cur; i++) S[i].opens.forEach(k => { const a = artOf(k, g.side < 0 ? -1 : 1); if (a) want[ARTS.indexOf(a)] = 1; });
  ARTS.forEach((a, i) => { if (a.t !== want[i]) { a.t = want[i]; DM.menuDirty = true; } });
  if (ANIM.prop) { const pm = ANIM.prop.mesh, want = !!pm.userData.allowed && artV('hood') > 0.97 && !((REG[CAR.open.hood] || {}).dmT > 0.01); if (pm.visible !== want) pm.visible = want; }
}
function dmStop() {
  if (!DM.g) return;
  DM.recs.forEach(r => {
    r.m.setMatrixAt(r.i, _dm4.compose(r.p, r.q, _dsv.set(r.s, r.s, r.s)));
    if (r.m.instanceColor) { r.m.setColorAt(r.i, DM_W); r.m.instanceColor.needsUpdate = true; }
    r.m.instanceMatrix.needsUpdate = true; r.dmKey = null;
  });
  DM.moves.forEach(M => { if (REG[M.pid]) { REG[M.pid].dmT = 0; REG[M.pid].dmDirty = true; } });
  ARTS.forEach((a, i) => { a.t = DM.was[i]; }); DM.menuDirty = true;
  for (const k in DMOV) DMOV[k].count = 0;
  DM.g = null; DM.recs = []; DM.moves = []; DM.hidden = new Set(); DM.gone = new Set(); DM.pathRem = {};
  FLOW.G = null;
}
/* ===== Interface ===== */
return (function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const TAP = matchMedia('(hover: hover) and (pointer: fine)').matches ? 'Clique' : 'Toque';
  const SHARE = TAP === 'Toque' && typeof navigator.share === 'function';     // no celular, abre o menu de compartilhar; no computador, copia
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const km = n => Math.round(n).toLocaleString('pt-BR');
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } } };

  const host = opts.host || document.body, ac = new AbortController(), sig = { signal: ac.signal };
  let alive = true, ro = null, mo = null;
  host.innerHTML = appHTML(CAR, opts);
  const canvas = $('#c'), detail = $('#detail'), tabbody = $('#tabbody'), panel = $('#panel'), app = $('#app'), toolbar = $('#toolbar'), menu = $('#menu');
  initScene(canvas);

  /* relações inversas e índices */
  const REV = {};
  for (const id in PARTS) PARTS[id].r.forEach(r => (REV[r] = REV[r] || new Set()).add(id));
  const relatedOf = id => { const s = new Set(PARTS[id] ? PARTS[id].r : []); (REV[id] || []).forEach(x => s.add(x)); s.delete(id); return [...s].filter(x => PARTS[x]); };
  const fixOf = id => Object.values(FIX).filter(f => f.p === id && REG[f.id]);
  const symptomsOf = id => SYMPTOMS.filter(s => s.s.some(x => x[0] === id));
  const maintOf = id => MAINT.filter(m => m.p.includes(id));
  const flowsOf = id => FLOWS.filter(f => f.steps.some(s => s[0] === id));
  const sysColor = id => SYS[infoOf(id).sys].c;
  const mobile = matchMedia('(max-width: 1023px), (max-width: 1279px) and (orientation: portrait)');

  let tab = 'sistemas', playing = null, fluxMode = 'caminhos';
  const hist = [];
  APP.symptom = null;

  /* ---------- foco e seleção ---------- */
  function setFocus(F) { APP.focus = F; applyStates(); explodeTargets(); drawRelLines(); renderLabels(true); }
  const stepTitle = (fl, i) => { const st = fl.steps[i], o = stepOpts(st); return (fl.kind === 'dm' && o.l) || infoOf(st[0]).n; };
  function refitAfterExplode() {
    const F = APP.focus; if (APP.flow) return;
    if (F && F.kind === 'part') fitIds(EXPL.ids || [F.id, ...F.related], 1.1, true);
    else if (F && F.kind === 'system') fitIds([...F.primary], 1.0, true);
    else if (F && F.kind === 'symptom') fitIds(F.order, 1.0, true);
    else if (!F && CAR_BOX) { const ids = Object.keys(REG).filter(id => !id.startsWith('fx_')); fitIds(ids, 2, true); }
  }
  function setExplode(v, instant) { APP.explode = v; EXPL.refit = !instant; EXPL.ids = null; explodeTargets(instant); syncMenus(); const b = $('[data-act=explode]', detail); if (b) { b.setAttribute('aria-pressed', v > 0); b.textContent = v > 0 ? 'Juntar peças' : 'Separar peças'; } }
  function stopPlay() { if (playing) { clearTimeout(playing); playing = null; } syncPlayer(); }
  function exitModes() {
    stopPlay();
    if (APP.flow) {
      if (APP.flow.kind === 'dm') { dmStop(); if (DM.prevView && APP.view !== DM.prevView) { APP.view = DM.prevView; syncView(); } DM.prevView = null; }
      APP.flow = null; flowClear();
    }
    APP.motion = { engine: 0, wheels: 0, steer: 0, fan: 0 };
    APP.symptom = null;
  }
  function select(id, keepMode, fromBack) {
    if (!REG[id]) return;
    const prev = APP.focus && APP.focus.kind === 'part' ? APP.focus.id : null;
    if (!keepMode) { const wasMode = APP.flow || APP.symptom; exitModes(); if (wasMode) renderTab(); }
    if (!fromBack && prev && prev !== id) { hist.push(prev); if (hist.length > 30) hist.shift(); }
    const inf = infoOf(id);
    const F = inf.kind === 'fix'
      ? { kind: 'part', id, primary: new Set([id]), related: new Set([FIX[id].p]) }
      : { kind: 'part', id, primary: new Set([id]), related: new Set(relatedOf(id)) };
    setFocus(F); renderDetail(id); fitIds([id], 1.1); sheet('detail'); hideHint(); tip.hidden = true;
    if (APP.explode > 0) { EXPL.refit = true; EXPL.ids = [id]; }
    if (tab === 'sistemas') markPart(id);
    welcomeSeen(); if (opts.onRoute) opts.onRoute(id);
  }
  function goBack() { const id = hist.pop(); if (id) select(id, !!APP.symptom, true); }
  function clearSelection() {
    const hadMode = APP.flow || APP.symptom; exitModes(); hist.length = 0;
    APP.focus = null; applyStates(); explodeTargets(); clearRelLines(); renderDetail(null); renderLabels(true); sheet('tabs');
    if (hadMode) renderTab();
    if (opts.onRoute) opts.onRoute(null);
    $$('.syslist details[open]').forEach(d => d.open = false);
    recoilIfClose();
  }
  function focusSystem(sys) {
    exitModes();
    const ids = Object.keys(REG).filter(id => !id.startsWith('fx_') && infoOf(id).sys === sys);
    setFocus({ kind: 'system', sys, primary: new Set(ids), related: new Set() }); fitIds(ids, 1.0, true);
  }
  function markPart(id) { $$('.plist button').forEach(b => b.classList.toggle('on', b.dataset.id === id)); }

  /* ---------- rótulos, alfinetes numerados e linhas até a peça ---------- */
  const labelsEl = $('#labels'), SVGNS = 'http://www.w3.org/2000/svg';
  const lead = document.createElementNS(SVGNS, 'svg'); lead.id = 'leaders'; labelsEl.appendChild(lead);
  const pool = { line: [], circle: [] }, used = { line: 0, circle: 0 };
  function svgItem(kind) {
    let el = pool[kind][used[kind]];
    if (!el) { el = document.createElementNS(SVGNS, kind); lead.appendChild(el); pool[kind].push(el); }
    used[kind]++; el.style.display = ''; return el;
  }
  let marks = [];
  function clearMarks() { marks.forEach(m => m.el.remove()); marks = []; }
  function mkMark(kind, id, text, cls, pos, onClick, color) {
    const el = document.createElement('button'); el.type = 'button';
    el.className = (kind === 'pin' ? 'pin ' : 'lbl ') + cls; el.style.setProperty('--c', color || sysColor(id)); el.textContent = text;
    if (kind === 'pin') el.setAttribute('aria-label', text + '. ' + infoOf(id).n);
    el.addEventListener('click', e => { e.stopPropagation(); if (onClick) onClick(); });
    labelsEl.appendChild(el);
    const m = { kind, id, el, pos, color: color || sysColor(id), w: 0, h: 0 }; marks.push(m); return m;
  }
  const flowColor = [];
  function pinPos(i) {
    if (APP.flow && APP.flow.kind === 'dm') return dmPinPos(i);
    const ps = FLOW.G && FLOW.G.pins[i]; if (!ps || !ps.length) return anchorOf(APP.flow.steps[i][0]);
    let best = ps[0], bd = Infinity; ps.forEach(p => { const d = p.distanceToSquared(camera.position); if (d < bd) { bd = d; best = p; } });
    return best;
  }
  function renderLabels(rebuild) {
    if (rebuild) {
      clearMarks();
      const F = APP.focus;
      if (F && F.kind === 'part') {
        mkMark('lbl', F.id, infoOf(F.id).n, 'main', () => anchorOf(F.id));
        [...F.related].slice(0, 8).forEach(id => mkMark('lbl', id, infoOf(id).n, 'sub', () => anchorOf(id), () => select(id, !!APP.symptom)));
      } else if (F && (F.kind === 'flow' || F.kind === 'dm') && FLOW.G && APP.flow) {
        const cur = APP.flowStep;
        APP.flow.steps.forEach((st, i) => mkMark('pin', st[0], String(i + 1), i < cur ? 'done' : i === cur ? 'cur' : 'next', () => pinPos(i), () => gotoStep(i, true), flowColor[i]));
        const st = APP.flow.steps[cur]; mkMark('lbl', st[0], stepTitle(APP.flow, cur), 'main flowlbl', () => pinPos(cur), null, flowColor[cur]);
      } else if (F && F.kind === 'symptom') {
        F.order.forEach((id, i) => mkMark('pin', id, String(i + 1), 'sym' + (F.primary.has(id) ? ' on' : ''), () => anchorOf(id), () => select(id, true)));
        F.order.forEach(id => { if (F.primary.has(id)) mkMark('lbl', id, infoOf(id).n, 'main', () => anchorOf(id), () => select(id, true)); });
      }
    }
    layoutMarks();
  }
  const _pv = new THREE.Vector3();
  function layoutMarks() {
    used.line = used.circle = 0;
    if (marks.length) {
      const W = canvas.clientWidth, H = canvas.clientHeight, top = TOP_SAFE + 4, placed = [];
      const proj = v => { _pv.copy(v).project(camera); return { x: (_pv.x * 0.5 + 0.5) * W, y: (-_pv.y * 0.5 + 0.5) * H, ok: _pv.z < 1 && Math.abs(_pv.x) < 1.08 && Math.abs(_pv.y) < 1.08 }; };
      const hits = (x, y, w, h) => placed.some(r => Math.abs(r.x - x) < (r.w + w) / 2 + 3 && Math.abs(r.y - y) < (r.h + h) / 2 + 3);
      const leader = (ax, ay, x, y, w, h, c) => {
        const cx = Math.max(x - w / 2, Math.min(ax, x + w / 2)), cy = Math.max(y - h / 2, Math.min(ay, y + h / 2));
        if (Math.hypot(cx - ax, cy - ay) < 5) return;
        const l = svgItem('line'); l.setAttribute('x1', ax.toFixed(1)); l.setAttribute('y1', ay.toFixed(1)); l.setAttribute('x2', cx.toFixed(1)); l.setAttribute('y2', cy.toFixed(1)); l.setAttribute('stroke', c);
        const d = svgItem('circle'); d.setAttribute('cx', ax.toFixed(1)); d.setAttribute('cy', ay.toFixed(1)); d.setAttribute('r', '3.2'); d.setAttribute('fill', c);
      };
      for (const m of marks) {
        if (m.kind !== 'pin') continue;
        const a = proj(m.pos()); m.el.style.display = a.ok ? '' : 'none'; if (!a.ok) continue;
        if (!m.w) { m.w = m.el.offsetWidth; m.h = m.el.offsetHeight; }
        let x = a.x, y = a.y;
        for (let k = 0; k < 10 && hits(x, y, m.w, m.h); k++) { const ang = k * 1.1 + 0.4, r = (m.w + 3) * (1 + (k >> 2) * 0.8); x = a.x + Math.cos(ang) * r; y = a.y + Math.sin(ang) * r; }
        placed.push({ x, y, w: m.w, h: m.h });
        m.el.style.transform = `translate(${(x - m.w / 2).toFixed(1)}px, ${(y - m.h / 2).toFixed(1)}px)`;
        if (x !== a.x || y !== a.y) leader(a.x, a.y, x, y, m.w, m.h, m.color);
      }
      for (const m of marks) {
        if (m.kind !== 'lbl') continue;
        const a = proj(m.pos()); m.el.style.display = a.ok ? '' : 'none'; if (!a.ok) continue;
        if (!m.w) { m.w = m.el.offsetWidth; m.h = m.el.offsetHeight; }
        const g = 18, hw = m.w / 2, hh = m.h / 2;
        const cands = [[0, -(hh + g)], [hw + g, -hh - 6], [-(hw + g), -hh - 6], [0, hh + g], [hw + g, hh + 6], [-(hw + g), hh + 6], [0, -(hh + g + 34)], [0, hh + g + 34], [hw + g + 30, 0], [-(hw + g + 30), 0]];
        let pick = null;
        for (const [dx, dy] of cands) {
          const x = a.x + dx, y = a.y + dy;
          if (x - hw < 4 || x + hw > W - 4 || y - hh < top || y + hh > H - 4) continue;
          if (!hits(x, y, m.w, m.h)) { pick = [x, y]; break; }
        }
        if (!pick) pick = [Math.max(hw + 4, Math.min(W - hw - 4, a.x)), Math.max(top + hh, Math.min(H - hh - 4, a.y - hh - g))];
        placed.push({ x: pick[0], y: pick[1], w: m.w, h: m.h });
        m.el.style.transform = `translate(${(pick[0] - hw).toFixed(1)}px, ${(pick[1] - hh).toFixed(1)}px)`;
        leader(a.x, a.y, pick[0], pick[1], m.w, m.h, m.color);
      }
    }
    for (const k of ['line', 'circle']) for (let i = used[k]; i < pool[k].length; i++) pool[k][i].style.display = 'none';
  }

  /* ---------- painel de detalhe ---------- */
  const sec = (t, body) => `<section><h3>${t}</h3>${body}</section>`;
  const chip = id => `<button class="chip" data-id="${id}" style="--c:${sysColor(id)}">${esc(infoOf(id).n)}</button>`;
  function intervalText(m) {
    const a = []; if (m.km) a.push(`${km(m.km)} km`); if (m.mo) a.push(m.mo === 1 ? 'todo mês' : `${m.mo} meses`);
    return 'a cada ' + a.join(' ou ');
  }
  const FT = { parafusada: ['Parafusadas', 'Saem inteiras, soltando parafusos.'], soldada: ['Soldadas', 'Fazem parte da estrutura; só saem cortando.'], colada: ['Coladas', 'Presas com cola ou fita dupla-face.'], encaixada: ['Encaixadas', 'Presas por presilhas, canaletas ou borrachas.'] };
  let dtab = 'sobre';                                   // aba do painel: 'sobre' ou 'oficina' (desmontar e montar)
  const copyBtn = (label, val, cls) => `<button class="code${cls ? ' ' + cls : ''}" data-copy="${esc(val)}" title="Copiar ${esc(label.toLowerCase())}"><span>${esc(label)}</span><b>${esc(val)}</b></button>`;
  function codesHTML(id) {
    const pr = PROC[id] || {}, oemL = CAR.oemLabel || 'Código original';
    let h = '<div class="codes">' + copyBtn('Ref. no app', CODE[id]);
    if (pr.oem) [].concat(pr.oem).forEach(c => { h += Array.isArray(c) ? copyBtn(c[0], c[1], 'oem') : copyBtn(oemL, c, 'oem'); });
    h += '</div>';
    if (pr.alt) h += `<p class="alt">Equivalentes: ${esc([].concat(pr.alt).join(', '))}</p>`;
    if (!pr.oem && PARTS[id]) h += `<p class="alt">${esc(CAR.oemHint || 'Código original: confirme pelo número do chassi no balcão de peças.')}</p>`;
    return h;
  }
  /* resumo em texto puro da peça, para mandar ao mecânico ou aos amigos */
  function partSummary(id) {
    const inf = infoOf(id), pr = PROC[id] || {}, L = [`${inf.n} — ${CAR.title} (${CAR.sub})`, `Ref. no app: ${CODE[id]}`];
    [].concat(pr.oem || []).forEach(c => L.push(Array.isArray(c) ? `${c[0]}: ${c[1]}` : `${CAR.oemLabel || 'Código original'}: ${c}`));
    if (inf.kind === 'fix') { const f = inf.d; L.push(`Prende: ${PARTS[f.p].n}`, `Quantidade: ${f.q}`, `Onde: ${f.spec}`, `${f.k === 'parafuso' ? 'Aperto' : 'Método'}: ${f.t}`, f.note); }
    else { if (inf.d.w) L.push(`Onde fica: ${inf.d.w}`); if (inf.d.f) L.push(`O que faz: ${inf.d.f}`); }
    if (pr.f) L.push('', `Ferramentas: ${pr.f}`);
    if (pr.pre) L.push(`Antes: ${pr.pre}`);
    [['Desmontar', pr.d], ['Montar', pr.m]].forEach(([t, st]) => { if (st && st.length) L.push('', t + ':', ...st.map((x, i) => `${i + 1}. ${x}`)); });
    L.push('', 'Valores de referência: confirme no manual do carro.');
    return L.join('\n');
  }
  function sharePart(b, id) {
    const text = partSummary(id), lb = b.lastChild, t0 = lb.textContent;
    const done = msg => { b.classList.add('copied'); lb.textContent = msg; setTimeout(() => { b.classList.remove('copied'); lb.textContent = t0; }, 1600); };
    const copy = () => { try { navigator.clipboard.writeText(text).then(() => done('Copiado'), () => done('Não deu para copiar')); } catch (e) { done('Não deu para copiar'); } };
    if (SHARE) navigator.share({ title: infoOf(id).n, text }).catch(err => { if (!err || err.name !== 'AbortError') copy(); });
    else copy();
  }
  function stepsHTML(list) { return `<ol class="proc">${list.map(t => `<li>${esc(t)}</li>`).join('')}</ol>`; }
  function fxTable(fx) { return `<table class="fx"><thead><tr><th>Qtd.</th><th>Fixador</th><th>Aperto ou método</th></tr></thead><tbody>${fx.map(f => `<tr data-id="${f.id}"><td>${esc(f.q)}</td><td><button class="link" data-id="${f.id}"><span class="kd k-${f.k}"></span>${esc(f.n)}</button><small>${esc(f.spec)}</small></td><td>${esc(f.t)}</td></tr>`).join('')}</tbody></table>`; }
  /* desmontar e montar: o texto do carro; sem ele, um roteiro mínimo a partir dos fixadores */
  function procOf(id) {
    const pr = PROC[id]; if (pr && (pr.d || pr.m)) return pr;
    const p = PARTS[id], fx = fixOf(id);
    const d = [], m = [];
    if (p.e) d.push(p.e);
    fx.forEach(f => d.push(`${f.n}: ${f.spec}.`));
    d.push('Retire a peça sem forçar chicotes e mangueiras presos a ela.');
    m.push('Monte na ordem inversa, com vedações novas onde houver.');
    fx.filter(f => f.k === 'parafuso').forEach(f => m.push(`${f.n}: ${f.t}.`));
    return { d, m, auto: true };
  }
  function oficinaHTML(id, ctx) {
    const pr = procOf(id), fx = fixOf(id), gd = GUIDE_BY_PART[id];
    let h = '';
    if (pr.pre || pr.f) h += sec('Antes de começar', (pr.pre ? `<p>${esc(pr.pre)}</p>` : '') + (pr.f ? `<p class="tools"><strong>Ferramentas:</strong> ${esc(pr.f)}</p>` : ''));
    if (pr.d && pr.d.length) h += sec('Desmontar', stepsHTML(pr.d));
    if (pr.m && pr.m.length) h += sec('Montar', stepsHTML(pr.m));
    if (fx.length) h += sec('Fixadores e apertos', fxTable(fx));
    if (gd && !ctx) h += `<p><button class="act dm wide" data-guide="${gd.id}">Ver a desmontagem animada em 3D</button></p>`;
    h += `<p class="fine">${pr.auto ? 'Roteiro resumido a partir dos fixadores mapeados. ' : ''}Sequência de referência de oficina. Confira no manual de reparação, use as ferramentas certas e trabalhe com o carro bem apoiado.</p>`;
    return h;
  }
  function renderDetail(id, ctx) {
    if (app.classList.contains('detail-open') !== !!id) { app.classList.toggle('detail-open', !!id); resize(); }
    if (!id) { detail.innerHTML = ''; return; }
    const inf = infoOf(id), sys = SYS[inf.sys];
    if (ctx) dtab = ctx.fl.kind === 'dm' ? 'oficina' : 'sobre';      // guia de desmontagem abre na oficina; caminhos, no que a peça faz
    let h = '';
    if (ctx) h += `<div class="flowctx" style="--c:${ctx.fl.c}"><span>Passo ${ctx.i + 1} de ${ctx.fl.steps.length} · ${esc(ctx.fl.kind === 'dm' ? 'Como desmontar: ' + ctx.fl.n : ctx.fl.n)}</span><strong>${esc(ctx.fl.steps[ctx.i][1])}</strong></div>`;
    else if (hist.length) h += `<button class="back" data-act="back">‹ ${esc(infoOf(hist[hist.length - 1]).n)}</button>`;
    h += `<div class="dhead"><p class="sysname"><span class="dot" style="--c:${sys.c}"></span>${esc(sys.n)}</p><h2>${esc(inf.n)}</h2><button class="close" data-act="close" aria-label="${ctx ? 'Sair do passo a passo' : 'Fechar'}">×</button></div>`;
    h += codesHTML(id);
    if (!ctx) {
      const gd = GUIDE_BY_PART[id] || (inf.kind === 'fix' && GUIDE_BY_PART[FIX[id].p]);
      h += `<div class="acts"><button class="act" data-act="explode" aria-pressed="${APP.explode > 0}">${APP.explode > 0 ? 'Juntar peças' : 'Separar peças'}</button>${gd ? `<button class="act dm" data-guide="${gd.id}">Desmontagem em 3D</button>` : ''}<button class="act share" data-act="share" title="${SHARE ? 'Enviar' : 'Copiar'} o resumo da peça: códigos, onde fica e o passo a passo"><span>${SHARE ? 'Enviar' : 'Copiar resumo'}</span></button></div>`;
    }
    if (inf.kind === 'fix') {
      const f = inf.d;
      h += `<dl class="kv"><dt>Prende</dt><dd><button class="link" data-id="${f.p}">${esc(PARTS[f.p].n)}</button></dd><dt>Tipo</dt><dd><span class="kd k-${f.k}"></span>${esc(FXKIND[f.k][0])}</dd><dt>Quantidade</dt><dd>${esc(f.q)}</dd><dt>Onde</dt><dd>${esc(f.spec)}</dd><dt>${f.k === 'parafuso' ? 'Aperto' : 'Método'}</dt><dd class="torque">${esc(f.t)}</dd></dl>`;
      h += sec('Na prática', `<p>${esc(f.note)}</p>`);
      if (f.k === 'parafuso') h += `<p class="fine">Torques são valores de referência de manuais de oficina. Confirme no manual de reparação antes de apertar.</p>`;
      else if (PARTS[f.p].s === 'carro') h += `<p class="fine">Posições e quantidades são as típicas desse tipo de carroceria; confira no seu carro antes de desmontar.</p>`;
    } else {
      const p = inf.d;
      h += `<div class="seg2 dtabs" role="tablist" aria-label="Informações da peça"><button role="tab" data-dtab="sobre" aria-selected="${dtab === 'sobre'}">Sobre a peça</button><button role="tab" data-dtab="oficina" aria-selected="${dtab === 'oficina'}">Desmontar e montar</button></div><div class="dbody">`;
      if (dtab === 'oficina') h += oficinaHTML(id, ctx);
      else {
        h += sec('Onde fica', `<p>${esc(p.w)}</p>`) + sec('O que faz', `<p>${esc(p.f)}</p>`);
        if (p.e) h += sec('Como encaixa', `<p><span class="tag">${esc(FT[p.ft][0].replace(/s$/, ''))}</span></p><p>${esc(p.e)}</p>`);
        const rel = relatedOf(id);
        if (rel.length && !ctx) h += sec('Trabalha junto com', `<div class="chips">${rel.map(chip).join('')}</div>`);
        const fx = fixOf(id);
        if (fx.length) h += sec('Fixadores', fxTable(fx));
        const mt = maintOf(id);
        if (p.m || mt.length) h += sec('Manutenção', (p.m ? `<p>${esc(p.m)}</p>` : '') + (mt.length ? `<ul class="plan">${mt.map(m => `<li><strong>${esc(m.n)}</strong> ${intervalText(m)}</li>`).join('')}</ul>` : ''));
        const sy = symptomsOf(id);
        if (sy.length && !ctx) h += sec('Aparece nos sintomas', `<ul class="links">${sy.map(s => `<li><button class="link" data-sym="${s.id}">${esc(s.n)}</button></li>`).join('')}</ul>`);
        const fl = flowsOf(id);
        if (fl.length && !ctx) h += sec('Faz parte de', `<ul class="links">${fl.map(f => `<li><button class="link" data-flow="${f.id}">${esc(f.n)}</button></li>`).join('')}</ul>`);
      }
      h += '</div>';
    }
    detail.innerHTML = h; detail.scrollTop = 0; detail.dataset.id = id; detail.ctx = ctx || null;
  }
  function copyText(b) {
    const v = b.dataset.copy, done = ok => { b.classList.add(ok ? 'copied' : 'nocopy'); const lb = b.querySelector('span'), t0 = lb.textContent; lb.textContent = ok ? 'Copiado' : 'Selecione e copie'; setTimeout(() => { b.classList.remove('copied', 'nocopy'); lb.textContent = t0; }, 1400); };
    try { navigator.clipboard.writeText(v).then(() => done(true), () => done(false)); } catch (e) { done(false); }
  }
  detail.addEventListener('click', e => {
    const b = e.target.closest('button,tr[data-id]'); if (!b) return;
    if (b.dataset.copy) return copyText(b);
    if (b.dataset.dtab) { if (b.dataset.dtab !== dtab) { dtab = b.dataset.dtab; const y = detail.scrollTop; renderDetail(detail.dataset.id, detail.ctx); detail.scrollTop = Math.min(y, $('.dtabs', detail).offsetTop - 8); } return; }
    if (b.dataset.act === 'close') return clearSelection();
    if (b.dataset.act === 'back') return goBack();
    if (b.dataset.act === 'explode') return setExplode(APP.explode > 0 ? 0 : 0.6);
    if (b.dataset.act === 'share') return sharePart(b, detail.dataset.id);
    if (b.dataset.guide) { goTab('fluxos'); startGuide(b.dataset.guide); return; }
    if (b.dataset.sym) { goTab('sintomas'); openSymptom(b.dataset.sym); return; }
    if (b.dataset.flow) { goTab('fluxos'); startFlow(b.dataset.flow); return; }
    if (b.dataset.tabgo) { goTab(b.dataset.tabgo); sheet('tabs'); return; }
    if (b.dataset.id) select(b.dataset.id);
  });

  /* ---------- abas ---------- */
  /* a aba marcada acompanha o que o painel mostra (um caminho aberto pelo painel da peça marca "Como funciona") */
  function markTab(t) {
    tab = t; const bs = $$('#tabs button');
    bs.forEach(b => { const on = b.dataset.tab === t; b.setAttribute('aria-selected', on); b.tabIndex = on ? 0 : -1; });
    if (!bs.some(b => b.dataset.tab === t)) bs[0].tabIndex = 0;
    tabbody.setAttribute('aria-labelledby', bs.some(b => b.dataset.tab === t) ? 'tab-' + t : 'fichaBtn');
    $('#fichaBtn').setAttribute('aria-pressed', t === 'ficha');
  }
  function goTab(t) { markTab(t); renderTab(); }
  $('#tabs').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; if (b.dataset.tab !== tab || APP.flow || APP.symptom) { if (APP.flow || APP.symptom) clearSelection(); goTab(b.dataset.tab); } if (panel.dataset.sheet === 'peek') setSheet('half'); });
  $('#tabs').addEventListener('keydown', e => {       // setas, Home e End trocam de aba (padrão de abas acessíveis)
    const bs = $$('#tabs button'), i = bs.indexOf(document.activeElement); if (i < 0) return;
    const j = e.key === 'ArrowRight' ? (i + 1) % bs.length : e.key === 'ArrowLeft' ? (i - 1 + bs.length) % bs.length : e.key === 'Home' ? 0 : e.key === 'End' ? bs.length - 1 : -1;
    if (j < 0) return; e.preventDefault(); bs[j].focus(); bs[j].click();
  });
  function renderTab() {
    tabbody.scrollTop = 0;
    if (tab === 'sistemas') renderSistemas();
    else if (tab === 'fluxos') renderFluxos();
    else if (tab === 'sintomas') renderSintomas();
    else if (tab === 'revisoes') renderRevisoes();
    else renderFicha();
  }
  const WKEY = 'carros-boasvindas-v3';
  let welcomeOff = store.get(WKEY) === '1';
  function welcomeHTML() {
    if (welcomeOff) return '';
    const nParts = Object.keys(PARTS).length, nFix = Object.values(FIX).reduce((a, f) => a + (typeof f.q === 'number' ? f.q : 0), 0);
    return `<section class="welcome" aria-labelledby="wtitle"><button class="close" data-act="welcome-off" aria-label="Fechar as boas-vindas">×</button>
      <h2 id="wtitle">Por dentro do seu carro</h2>
      <p>Arraste para girar e use ${TAP === 'Clique' ? 'a rodinha para aproximar e as setas do teclado para andar' : 'a pinça para aproximar; as setas na tela andam com a câmera'}. ${TAP} numa peça para ver o que ela faz, o código dela, como é presa e como sai e volta.</p>
      <p class="count"><strong>${nParts}</strong> peças e conjuntos e <strong>${nFix}</strong> fixadores mapeados.</p>
      <p class="wlabel">Comece por</p>
      <div class="chips">${(CAR.welcome || []).filter(id => REG[id]).map(chip).join('')}</div>
      <p class="wtips">Em <button class="link" data-tabgo="fluxos">Como funciona</button>, o caminho do ar, do combustível, da força e da faísca aparece animado, passo a passo.</p></section>`;
  }
  function welcomeSeen() { if (!welcomeOff) { welcomeOff = true; store.set(WKEY, '1'); } }   // na próxima visita o painel já abre direto na lista
  const plist = ids => `<ul class="plist">${ids.map(i => `<li><button data-id="${i}">${esc(infoOf(i).n)}</button></li>`).join('')}</ul>`;
  function renderSistemas() {
    let h = welcomeHTML() + '<p class="lead">Abra um sistema para destacá-lo no carro e ver suas peças.</p><div class="syslist">';
    for (const k in SYS) {
      const ids = Object.keys(PARTS).filter(i => PARTS[i].s === k);
      let inner = plist(ids);
      if (k === 'carro') {
        inner = '<p class="sd">No carro, cada peça da lataria ganha uma cor diferente.</p>' + Object.keys(FT).map(t => {
          const g = ids.filter(i => PARTS[i].ft === t);
          return g.length ? `<p class="grp"><strong>${FT[t][0]}</strong><span>${FT[t][1]}</span></p>` + plist(g) : '';
        }).join('') + plist(ids.filter(i => !PARTS[i].ft));
      }
      h += `<details data-sys="${k}"><summary><span class="sw" style="--c:${SYS[k].c}"></span><span class="sn">${esc(SYS[k].n)}</span><span class="cnt">${ids.length}</span></summary><p class="sd">${esc(SYS[k].d)}</p>${inner}</details>`;
    }
    const fxs = Object.values(FIX).filter(f => REG[f.id]);
    h += `<details data-sys="fx"><summary><span class="sw bolt"></span><span class="sn">Encaixes e fixadores</span><span class="cnt">${fxs.length}</span></summary><p class="sd">Cada grupo mostra onde fica, quantos são, o tipo e o aperto ou o método.</p>` +
      Object.keys(FXKIND).map(kd => { const g = fxs.filter(f => f.k === kd); return g.length ? `<p class="grp"><strong><span class="kd k-${kd}"></span>${FXKIND[kd][0]}</strong><span>${FXKIND[kd][1]}</span></p>` + plist(g.map(f => f.id)) : ''; }).join('') + '</details></div>';
    tabbody.innerHTML = h;
    $$('details', tabbody).forEach(d => d.addEventListener('toggle', () => {
      if (d.open) {
        $$('details', tabbody).forEach(o => { if (o !== d) o.open = false; });
        if (d.dataset.sys === 'fx') { if (!APP.bolts) setTog('bolts', true); } else focusSystem(d.dataset.sys);
      } else if (APP.focus && APP.focus.kind === 'system' && APP.focus.sys === d.dataset.sys) { APP.focus = null; applyStates(); explodeTargets(); renderLabels(true); }
    }));
  }
  tabbody.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    const a = b.dataset.act;
    if (a === 'welcome-off') { welcomeOff = true; store.set(WKEY, '1'); const w = b.closest('.welcome'); if (w) w.remove(); return; }
    if (b.dataset.tabgo) { goTab(b.dataset.tabgo); return; }
    if (b.dataset.id && !b.dataset.step) { select(b.dataset.id, !!APP.symptom); return; }
    if (b.dataset.flow) return startFlow(b.dataset.flow);
    if (b.dataset.guide) return startGuide(b.dataset.guide);
    if (b.dataset.fmode) { fluxMode = b.dataset.fmode; renderFluxos(); return; }
    if (b.dataset.sym) return openSymptom(b.dataset.sym);
    if (b.dataset.step) return gotoStep(+b.dataset.step, true);
    if (a === 'exit') return clearSelection();
    if (a === 'prev') return gotoStep(Math.max(0, APP.flowStep - 1), true);
    if (a === 'next') return gotoStep(Math.min(APP.flow.steps.length - 1, APP.flowStep + 1), true);
    if (a === 'play') return togglePlay();
    if (a === 'follow') { APP.follow = !APP.follow; syncPlayer(); if (APP.follow) flowCamera(APP.flowStep); return; }
    if (a === 'parts' && b.dataset.p) { const ids = b.dataset.p.split(','); exitModes(); setFocus({ kind: 'symptom', primary: new Set(), related: new Set(ids), order: ids }); fitIds(ids, 0.8); }
  });

  /* ---------- como funciona ---------- */
  function renderFluxos() {
    const fl = APP.flow;
    if (!fl) {
      const grps = [...new Set(GUIDES.map(g => g.grp))];
      const seg = `<div class="seg2" role="tablist" aria-label="Tipo"><button role="tab" data-fmode="caminhos" aria-selected="${fluxMode === 'caminhos'}">Caminhos</button><button role="tab" data-fmode="desmontar" aria-selected="${fluxMode === 'desmontar'}">Como desmontar</button></div>`;
      tabbody.innerHTML = seg + (fluxMode === 'caminhos'
        ? `<p class="lead">Escolha um caminho: ele percorre o carro passo a passo, pelas mangueiras, tubos e cabos, com a câmera acompanhando.</p><ul class="modes">${FLOWS.map(f => `<li><button data-flow="${f.id}" style="--c:${f.c}"><strong>${esc(f.n)}</strong><span>${esc(f.d)}</span></button></li>`).join('')}</ul>`
        : `<p class="lead">Escolha uma peça: os fixadores saem na ordem, a peça se solta do carro e a câmera acompanha cada passo.</p>` +
          grps.map(gr => `<p class="grp"><strong>${esc(gr)}</strong></p><ul class="modes guides">${GUIDES.filter(g => g.grp === gr).map(g => `<li><button data-guide="${g.id}" style="--c:${g.c}"><strong>${esc(g.n)}</strong><span>${g.steps.length} passos</span></button></li>`).join('')}</ul>`).join(''));
      return;
    }
    const isDm = fl.kind === 'dm';
    const leg = fl.leg ? `<ul class="legend">${fl.leg.map(([c, t]) => `<li><i style="--c:${c}"></i>${esc(t)}</li>`).join('')}</ul>` : '';
    const desc = isDm ? ((PARTS[fl.part] && PARTS[fl.part].e) || 'Na ordem em que se faz na oficina.') + (fl.side ? ' Mostrado no lado esquerdo; o direito é igual, espelhado.' : '') : fl.d;
    tabbody.innerHTML = `<div class="mode-head" style="--c:${fl.c}"><button class="link" data-act="exit">${isDm ? 'Voltar à lista' : 'Todos os caminhos'}</button><h3>${esc(isDm ? 'Como desmontar: ' + fl.n : fl.n)}</h3><p>${esc(desc)}</p>${leg}</div>
      <div class="player" style="--c:${fl.c}">
        <div class="pbtns"><button data-act="prev" aria-label="Passo anterior">‹ Anterior</button><button data-act="play" class="primary">Reproduzir</button><button data-act="next" aria-label="Próximo passo">Próximo ›</button></div>
        <div class="pinfo"><span class="pcount" aria-live="polite"></span><button class="ptog" data-act="follow" aria-pressed="true">Câmera acompanha</button></div>
        <div class="pbar"><i></i></div>
      </div>
      <ol class="steps">${fl.steps.map((s, i) => `<li class="${i === APP.flowStep ? 'on' : ''}" style="--c:${flowColor[i]}"><button data-step="${i}"><strong>${esc(stepTitle(fl, i))}</strong><span>${esc(s[1])}</span></button></li>`).join('')}</ol>
      ${isDm ? '<p class="fine">Sequência típica para esse tipo de carro. Confira no manual de reparação antes de desmontar e use as ferramentas certas.</p>' : ''}
      <p class="fine keys">Teclado: vírgula e ponto (ou PgUp e PgDn) mudam o passo; espaço reproduz ou pausa; as setas andam com a câmera.</p>`;
    syncPlayer();
    const on = $('.steps li.on', tabbody); if (on) on.scrollIntoView({ block: 'nearest' });
  }
  function syncPlayer() {
    const fl = APP.flow; if (!fl || tab !== 'fluxos') return;
    const pb = $('[data-act=play]', tabbody); if (pb) pb.textContent = playing ? 'Pausar' : (APP.flowStep >= fl.steps.length - 1 && APP.flowStarted ? 'Recomeçar' : 'Reproduzir');
    const fb = $('[data-act=follow]', tabbody); if (fb) { fb.setAttribute('aria-pressed', APP.follow); fb.textContent = APP.follow ? 'Câmera acompanha' : 'Câmera livre'; }
    const pc = $('.pcount', tabbody); if (pc) pc.textContent = `Passo ${APP.flowStep + 1} de ${fl.steps.length}`;
    const bar = $('.pbar i', tabbody); if (bar) bar.style.width = ((APP.flowStep + 1) / fl.steps.length * 100).toFixed(1) + '%';
  }
  function startFlow(fid) {
    const fl = FLOWS.find(f => f.id === fid); if (!fl) return;
    exitModes(); hist.length = 0;
    APP.flow = fl; APP.flowStep = 0; APP.flowStarted = false; APP.follow = true;
    let c = fl.c; fl.steps.forEach((st, i) => { const o = stepOpts(st); if (o.c) c = o.c; flowColor[i] = c; if (o.c2) c = o.c2; });
    flowDraw(); FLOW.t0 = performance.now() + 500; fluxMode = 'caminhos';
    APP.motion = flowMotion(fl, 0);
    flowFocus(); markTab('fluxos'); tabbody.scrollTop = 0; renderFluxos(); hideHint(); sheet('tabs'); flowDetail(); if (opts.onRoute) opts.onRoute(null);
    const b = flowWholeBox(); if (!b.isEmpty()) { const ctr = b.getCenter(V(0, 0, 0)), dir = camera.position.clone().sub(controls.target).normalize(); flyTo(ctr, ctr.clone().addScaledVector(dir, Math.min(9, fitDist(ctr, dir, b, 0.8)))); }
  }
  function flowFocus() {
    if (APP.flow.kind === 'dm') { DM.phaseKey = null; setFocus(dmFocus(APP.flowStep, reduceMotion ? 'out' : 'fx')); return; }
    const fl = APP.flow, cur = fl.steps[APP.flowStep], rest = new Set(fl.steps.map(s => s[0])); rest.delete(cur[0]);
    setFocus({ kind: 'flow', id: cur[0], primary: new Set([cur[0]]), related: rest });
  }
  function startGuide(gid) {
    const g = GUIDES.find(x => x.id === gid); if (!g) return;
    exitModes(); hist.length = 0;
    if (APP.explode) { APP.explode = 0; syncMenus(); }
    explodeTargets(true);
    APP.flow = g; APP.flowStep = 0; APP.flowStarted = false; APP.follow = true; fluxMode = 'desmontar';
    g.steps.forEach((st, i) => { flowColor[i] = g.c; });
    if (APP.intro) endIntro();
    DM.prevView = APP.view; if (APP.view !== 'solid') { APP.view = 'solid'; syncView(); }
    dmStart(g); FLOW.t0 = performance.now() + 500;
    flowFocus(); markTab('fluxos'); tabbody.scrollTop = 0; renderFluxos(); hideHint(); sheet('tabs'); flowDetail(); if (opts.onRoute) opts.onRoute(null);
    const b = flowWholeBox();
    if (!b.isEmpty()) {
      const c = b.getCenter(V(0, 0, 0)), dir = camera.position.clone().sub(controls.target).normalize().multiplyScalar(0.5).add(viewDirFor(c).multiplyScalar(0.5)).normalize();
      flyTo(c, c.clone().addScaledVector(dir, Math.min(6, Math.max(1.3, fitDist(c, dir, b, 0.62)))));
    }
  }
  function flowDetail() { if (!mobile.matches && APP.flow) renderDetail(APP.flow.steps[APP.flowStep][0], { fl: APP.flow, i: APP.flowStep }); }
  function flowCamera(i) {
    if (APP.flow && APP.flow.kind === 'dm') {
      const v = dmView(i); if (v.b.isEmpty()) return;
      const dist = Math.min(5, Math.max(1.55, fitDist(v.c, v.dir, v.b, 0.6)));
      flyTo(v.c, v.c.clone().addScaledVector(v.dir, dist), 950); return;
    }
    const b = flowStepBox(i); if (b.isEmpty()) return;
    const c = b.getCenter(V(0, 0, 0));
    const cur = camera.position.clone().sub(controls.target).normalize(), dir = cur.multiplyScalar(0.55).add(viewDirFor(c).multiplyScalar(0.45)).normalize();
    const dist = Math.min(5.5, Math.max(1.35, fitDist(c, dir, b, 0.62)));        // o passo ocupa o miolo da tela, com o entorno visível
    flyTo(c, c.clone().addScaledVector(dir, dist), 950);
  }
  function gotoStep(i, user) {
    const fl = APP.flow; if (!fl) return;
    if (user) stopPlay();
    APP.flowStep = i; APP.flowStarted = true;
    FLOW.t0 = performance.now() + (APP.follow && !reduceMotion ? 300 : 0);
    APP.motion = flowMotion(fl, i);
    flowFocus(); flowDetail();
    if (APP.follow) flowCamera(i);
    $$('.steps li', tabbody).forEach((li, k) => li.classList.toggle('on', k === i));
    const on = $('.steps li.on', tabbody); if (on) on.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' });
    syncPlayer();
  }
  function stepDelay(i) {
    const inf = FLOW.G && FLOW.G.info[i], txt = APP.flow.steps[i][1].length;
    return Math.max(2300, 1300 + txt * 45, (inf ? inf.dur * 1000 : 0) + (APP.follow && !reduceMotion ? 950 : 0) + 800);
  }
  function schedule() {
    if (playing) clearTimeout(playing);
    playing = setTimeout(() => {
      playing = null; if (!APP.flow) return;
      if (APP.flowStep >= APP.flow.steps.length - 1) { syncPlayer(); return; }
      gotoStep(APP.flowStep + 1); schedule(); syncPlayer();
    }, stepDelay(APP.flowStep));
    syncPlayer();
  }
  function togglePlay() {
    if (!APP.flow) return;
    if (playing) { stopPlay(); return; }
    if (!APP.flowStarted) gotoStep(0);
    else if (APP.flowStep >= APP.flow.steps.length - 1) gotoStep(0);
    else gotoStep(APP.flowStep + 1);
    schedule();
  }

  /* ---------- sintomas ---------- */
  function renderSintomas() {
    const sy = APP.symptom;
    if (!sy) {
      tabbody.innerHTML = `<p class="lead">Escolha o que o carro está fazendo. As peças suspeitas ganham números no modelo, na ordem em que vale a pena conferir.</p><ul class="modes">${SYMPTOMS.map(s => `<li><button data-sym="${s.id}"><strong>${esc(s.n)}</strong></button></li>`).join('')}</ul>`;
      return;
    }
    tabbody.innerHTML = `<div class="mode-head"><button class="link" data-act="exit">Todos os sintomas</button><h3>${esc(sy.n)}</h3><p>${esc(sy.d)}</p></div>
      <ol class="suspects">${sy.s.map(([id, why, check]) => `<li><button data-id="${id}" style="--c:${sysColor(id)}"><strong>${esc(infoOf(id).n)}</strong></button><p>${esc(why)}</p><p class="check"><span>Como conferir:</span> ${esc(check)}</p></li>`).join('')}</ol>
      <p class="fine">Isto ajuda a conversar com o mecânico e a decidir o que olhar primeiro; não substitui o diagnóstico com scanner e inspeção.</p>`;
    $$('.suspects li', tabbody).forEach((li, i) => {
      li.addEventListener('mouseenter', () => { if (!APP.symptom || !APP.focus || APP.focus.kind !== 'symptom') return; APP.focus.primary = new Set([sy.s[i][0]]); applyStates(); renderLabels(true); });
      li.addEventListener('mouseleave', () => { if (!APP.symptom || !APP.focus || APP.focus.kind !== 'symptom') return; APP.focus.primary = new Set(); applyStates(); renderLabels(true); });
    });
  }
  function openSymptom(sid) {
    const sy = SYMPTOMS.find(s => s.id === sid); if (!sy) return;
    exitModes(); hist.length = 0; APP.symptom = sy; const ids = sy.s.map(x => x[0]);
    setFocus({ kind: 'symptom', primary: new Set(), related: new Set(ids), order: ids }); fitIds(ids, 1.0, true);
    renderDetail(null); markTab('sintomas'); renderSintomas(); hideHint(); sheet('tabs'); if (opts.onRoute) opts.onRoute(null);
  }

  /* ---------- revisões ---------- */
  const REVKEY = (CAR.storeKey || CAR.id) + '-revisoes-v1', KM0 = CAR.kmDefault || 0;
  function loadRev() { try { return Object.assign({ km: KM0, last: {} }, JSON.parse(store.get(REVKEY) || '{}')); } catch (e) { return { km: KM0, last: {} }; } }
  function saveRev(st) { store.set(REVKEY, JSON.stringify(st)); }
  function statusOf(m, st) {
    const last = st.last[m.id];
    if (last == null || last === '') return { c: 'none', t: 'sem registro' };
    if (m.km) {
      const rem = +last + m.km - st.km;
      if (rem < 0) return { c: 'late', t: `vencido há ${km(-rem)} km` };
      if (rem < m.km * 0.15) return { c: 'soon', t: `vence em ${km(rem)} km` };
      return { c: 'ok', t: `em dia, faltam ${km(rem)} km` };
    }
    const [y, mo] = String(last).split('-').map(Number); if (!y) return { c: 'none', t: 'sem registro' };
    const now = new Date(), months = (now.getFullYear() - y) * 12 + (now.getMonth() + 1 - mo), rem = m.mo - months;
    if (rem < 0) return { c: 'late', t: `vencido há ${-rem} ${-rem === 1 ? 'mês' : 'meses'}` };
    if (rem <= Math.max(1, Math.round(m.mo * 0.15))) return { c: 'soon', t: rem === 0 ? 'vence este mês' : `vence em ${rem} ${rem === 1 ? 'mês' : 'meses'}` };
    return { c: 'ok', t: `em dia, faltam ${rem} ${rem === 1 ? 'mês' : 'meses'}` };
  }
  function renderRevisoes() {
    const st = loadRev();
    tabbody.innerHTML = `<p class="lead">Plano de manutenção do seu motor. Anote quando cada item foi feito e o status se ajusta à quilometragem. Fica salvo só neste navegador.</p>
      <label class="kmnow">Hodômetro hoje<span><input id="kmNow" type="number" inputmode="numeric" min="0" step="1" value="${st.km}"> km</span></label>
      <ul class="rev">${MAINT.map(m => {
        const s = statusOf(m, st), v = st.last[m.id] == null ? '' : st.last[m.id];
        const input = m.km ? `<input type="number" inputmode="numeric" min="0" data-rev="${m.id}" value="${esc(v)}" placeholder="km da última vez" aria-label="Quilometragem da última troca: ${esc(m.n)}">`
          : `<input type="month" data-rev="${m.id}" value="${esc(v)}" aria-label="Mês da última troca: ${esc(m.n)}">`;
        return `<li><div class="rt"><button class="link" data-act="parts" data-p="${m.p.join(',')}">${esc(m.n)}</button><span class="st ${s.c}">${s.t}</span></div><p class="iv">${intervalText(m)}${m.t ? '. ' + esc(m.t) : ''}</p>${input}</li>`;
      }).join('')}</ul>
      <p class="fine">${esc(CAR.maintNote || 'O manual do seu carro manda.')}</p>`;
    $('#kmNow', tabbody).addEventListener('change', e => { const st = loadRev(); st.km = Math.max(0, +e.target.value || 0); saveRev(st); renderRevisoes(); });
    $$('[data-rev]', tabbody).forEach(inp => inp.addEventListener('change', () => { const st = loadRev(); const v = inp.value.trim(); if (v === '') delete st.last[inp.dataset.rev]; else st.last[inp.dataset.rev] = inp.type === 'number' ? Math.max(0, +v) : v; saveRev(st); renderRevisoes(); }));
  }
  $('#carBtn').addEventListener('click', e => { e.stopPropagation(); if (opts.onPick) opts.onPick($('#carBtn')); });
  $('#fichaBtn').addEventListener('click', () => { if (APP.flow || APP.symptom) clearSelection(); sheet('tabs'); goTab('ficha'); if (panel.dataset.sheet === 'peek') setSheet('half'); });
  function renderFicha() {
    tabbody.innerHTML = `<h2 class="tabtitle">Ficha técnica do ${esc(CAR.name)}</h2>` + SPECS.map(([t, rows]) => `<section class="spec"><h3>${esc(t)}</h3><dl>${rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl></section>`).join('') +
      `<section class="spec"><h3>Sobre este modelo</h3>${CAR.about || ''}</section>`;
  }

  /* ---------- busca ---------- */
  const q = $('#q'), qres = $('#qres');
  const codeKey = id => { const c = [CODE[id], ...[].concat((PROC[id] || {}).oem || []).map(o => Array.isArray(o) ? o[1] : o), ...[].concat((PROC[id] || {}).alt || [])].join(' '); return ' ' + c + ' ' + c.replace(/[-.\s]/g, ''); };
  const INDEX = [...Object.values(PARTS).map(p => ({ id: p.id, n: p.n, s: p.s, k: norm(p.n + ' ' + p.w + codeKey(p.id)) })), ...Object.values(FIX).map(f => ({ id: f.id, n: f.n, s: PARTS[f.p].s, k: norm(f.n + ' ' + f.spec + ' parafuso porca' + codeKey(f.id)) }))];
  let qi = -1;                                       // resultado marcado pelas setas (o Enter abre esse)
  const qopts = () => $$('button', qres);
  function qmark(i) {
    const bs = qopts(); qi = bs.length ? (i + bs.length) % bs.length : -1;
    bs.forEach((b, k) => { b.classList.toggle('kb', k === qi); b.setAttribute('aria-selected', k === qi); });
    if (qi >= 0) { q.setAttribute('aria-activedescendant', bs[qi].id); bs[qi].scrollIntoView({ block: 'nearest' }); } else q.removeAttribute('aria-activedescendant');
  }
  function qclose() { qres.hidden = true; q.setAttribute('aria-expanded', 'false'); q.removeAttribute('aria-activedescendant'); qi = -1; }
  q.addEventListener('input', () => {
    const t = norm(q.value.trim()); if (!t) { qclose(); return; }
    const words = t.split(/\s+/);
    const res = INDEX.filter(e => words.every(w => e.k.includes(w))).sort((a, b) => (norm(a.n).startsWith(t) ? 0 : 1) - (norm(b.n).startsWith(t) ? 0 : 1)).slice(0, 12);
    qres.innerHTML = res.length ? res.map((r, k) => `<li role="presentation"><button id="qo-${k}" role="option" aria-selected="false" tabindex="-1" data-id="${r.id}"><span class="dot" style="--c:${SYS[r.s].c}"></span>${esc(r.n)}<small>${esc(CODE[r.id])}</small></button></li>`).join('') : '<li class="none" role="presentation">Nada com esse nome ou código</li>';
    qres.hidden = false; q.setAttribute('aria-expanded', 'true'); qmark(0);
  });
  q.addEventListener('keydown', e => {
    if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !qres.hidden) { e.preventDefault(); qmark(qi + (e.key === 'ArrowDown' ? 1 : -1)); return; }
    if (e.key === 'Enter') { const b = qopts()[Math.max(0, qi)]; if (b) b.click(); }
    if (e.key === 'Escape') { if (!qres.hidden || q.value) { e.stopPropagation(); q.value = ''; qclose(); } else q.blur(); }
  });
  q.addEventListener('blur', () => setTimeout(() => { if (!qres.contains(document.activeElement)) qclose(); }, 120));
  qres.addEventListener('mousedown', e => e.preventDefault());                  // o clique no resultado não tira o foco antes de abrir
  qres.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; qclose(); q.value = ''; q.blur(); select(b.dataset.id); });
  document.addEventListener('click', e => { if (!e.target.closest('.search')) qclose(); }, sig);

  /* ---------- barra: vista + menus Abrir, Mostrar e Vistas ---------- */
  const syncView = () => $$('#viewseg button').forEach(b => b.setAttribute('aria-pressed', b.dataset.v === APP.view));
  $('#viewseg').addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; if (APP.intro) endIntro(); APP.view = b.dataset.v; DM.prevView = null; syncView(); applyStates(); });
  const TOGS = { hood: 'Capô aberto', doors: 'Portas e tampa abertas', bolts: 'Encaixes', color: 'Cores por sistema', run: 'Motor girando', pad: 'Setas na tela' };
  const doorArts = () => ARTS.filter(a => a.kind !== 'hood');
  const isOn = k => k === 'hood' ? !!(artOf('hood') || {}).t : k === 'doors' ? doorArts().some(a => a.t) : k === 'bolts' ? !!APP.bolts : k === 'color' ? !!APP.color : k === 'pad' ? !$('#navpad').hidden : !!APP.run;
  function setTog(k, on) {
    if (k === 'hood' || k === 'doors') (k === 'hood' ? ARTS.filter(a => a.kind === 'hood') : doorArts()).forEach(a => { a.t = on ? 1 : 0; if (DM.g) DM.was[ARTS.indexOf(a)] = a.t; });
    else if (k === 'bolts') { APP.bolts = on; applyStates(); }
    else if (k === 'color') { APP.color = on; applyStates(); }
    else if (k === 'run') APP.run = on;
    else if (k === 'pad') showPad(on);
    syncMenus();
  }
  const tg = k => `<button class="mi" role="menuitemcheckbox" aria-checked="${isOn(k)}" data-tog="${k}"><span>${TOGS[k]}</span><i class="sw2" aria-hidden="true"></i></button>`;
  const secAbrir = () => `<p class="mh">Abrir</p>${tg('hood')}${tg('doors')}`;
  const secMostrar = () => `<p class="mh">Mostrar</p>${tg('bolts')}${tg('color')}${tg('run')}<label class="mi rg"><span>Explodir</span><input type="range" min="0" max="1" step="0.01" value="${APP.explode}" data-explode aria-label="Explodir as peças"></label><p class="mnote">Com uma peça ou um sistema escolhido, só eles se separam.</p>`;
  const secVistas = () => `<p class="mh">Vistas</p><div class="vgrid">${[['inicial', 'Inicial'], ['frente', 'Frente'], ['traseira', 'Traseira'], ['lado', 'Lado'], ['cima', 'De cima'], ['baixo', 'Por baixo']].map(([k, t]) => `<button class="vb" data-view="${k}">${t}</button>`).join('')}</div>${tg('pad')}<p class="mnote">${TAP === 'Clique' ? 'Setas ou W A S D andam; Q e E descem e sobem; Shift vai mais rápido.' : 'Segure uma seta para andar; o centro volta à vista inicial.'}</p>`;
  let menuBtn = null;
  function openMenu(btn) {
    const name = btn.dataset.menu;
    menu.innerHTML = name === 'abrir' ? secAbrir() : name === 'mostrar' ? secMostrar() : name === 'vistas' ? secVistas() : secAbrir() + secMostrar() + secVistas();
    menu.hidden = false; menuBtn = btn; btn.setAttribute('aria-expanded', 'true');
    const br = btn.getBoundingClientRect(), vw = document.documentElement.clientWidth, vh = document.documentElement.clientHeight;
    const w = menu.offsetWidth, left = Math.max(8, Math.min(vw - w - 8, br.left));
    menu.style.left = left + 'px'; menu.style.top = (br.bottom + 6) + 'px';
    menu.style.maxHeight = Math.max(180, vh - br.bottom - 16) + 'px';
    const first = $('button, input', menu); if (first) first.focus({ preventScroll: true });
  }
  function closeMenu() { if (menu.hidden) return; menu.hidden = true; if (menuBtn) { menuBtn.setAttribute('aria-expanded', 'false'); menuBtn.focus({ preventScroll: true }); } menuBtn = null; }
  function syncMenus() {
    const any = ks => ks.some(isOn);
    const st = { abrir: any(['hood', 'doors']), mostrar: any(['bolts', 'color', 'run']) || APP.explode > 0, vistas: false };
    st.mais = st.abrir || st.mostrar;
    $$('.mbtn', toolbar).forEach(b => b.classList.toggle('on', !!st[b.dataset.menu]));
    $$('[data-tog]', menu).forEach(b => b.setAttribute('aria-checked', isOn(b.dataset.tog)));
  }
  toolbar.addEventListener('click', e => { const b = e.target.closest('.mbtn'); if (!b) return; e.stopPropagation(); if (menuBtn === b) closeMenu(); else { closeMenu(); openMenu(b); } });
  menu.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.tog) return setTog(b.dataset.tog, !isOn(b.dataset.tog));
    if (b.dataset.view) { closeMenu(); if (APP.flow) { APP.follow = false; syncPlayer(); } presetView(b.dataset.view); }
  });
  menu.addEventListener('input', e => {
    if (!e.target.matches('[data-explode]')) return;
    if (APP.flow && APP.flow.kind === 'dm') { e.target.value = 0; return; }
    setExplode(+e.target.value, true);
  });
  document.addEventListener('pointerdown', e => { if (!menu.hidden && !e.target.closest('#menu') && !e.target.closest('.mbtn')) closeMenu(); }, sig);
  $('#stage').addEventListener('wheel', e => { if (!menu.hidden && !e.target.closest('#menu')) closeMenu(); }, { passive: true });

  /* ---------- folha inferior (celular e tablet em pé): arrastar ou tocar ---------- */
  const SNAP = { peek: 0, half: 0.5, full: 0.86 };
  const peekPx = () => (welcomeOff ? 158 : 176);
  function sheetPx(s) { const H = app.clientHeight; return s === 'peek' ? peekPx() : Math.round(H * SNAP[s]); }
  function sheet(what) {
    if (what === 'detail') { panel.classList.add('detail'); if (mobile.matches && panel.dataset.sheet === 'peek') setSheet('half'); }
    else if (what === 'tabs') panel.classList.remove('detail');
    else setSheet(what);
  }
  function setSheet(s) { panel.dataset.sheet = s; app.style.setProperty('--sheet-h', sheetPx(s) + 'px'); $('#grab').setAttribute('aria-label', s === 'full' ? 'Reduzir painel' : 'Expandir painel'); }
  const grab = $('#grab'); let drag = null;
  grab.addEventListener('pointerdown', e => { if (!mobile.matches) return; drag = { y: e.clientY, h: panel.getBoundingClientRect().height, t: performance.now(), moved: false, last: e.clientY, lt: performance.now(), v: 0 }; grab.setPointerCapture(e.pointerId); app.classList.add('dragging'); });
  grab.addEventListener('pointermove', e => {
    if (!drag) return; const dy = drag.y - e.clientY; if (Math.abs(dy) > 6) drag.moved = true;
    const now = performance.now(); drag.v = (drag.last - e.clientY) / Math.max(1, now - drag.lt); drag.last = e.clientY; drag.lt = now;
    const H = app.clientHeight, h = Math.max(120, Math.min(H * 0.9, drag.h + dy)); app.style.setProperty('--sheet-h', h + 'px');
  });
  const endDrag = e => {
    if (!drag) return; const d = drag; drag = null; app.classList.remove('dragging');
    if (!d.moved) { setSheet(panel.dataset.sheet === 'peek' ? 'half' : panel.dataset.sheet === 'half' ? 'full' : 'peek'); return; }
    const h = panel.getBoundingClientRect().height, H = app.clientHeight;
    let best = 'peek', bd = Infinity; for (const s of ['peek', 'half', 'full']) { const dd = Math.abs(sheetPx(s) - (h + d.v * 180)); if (dd < bd) { bd = dd; best = s; } }
    if (h < 110 || (d.v < -1.2 && h < H * 0.5)) best = 'peek';
    setSheet(best);
  };
  grab.addEventListener('pointerup', endDrag); grab.addEventListener('pointercancel', endDrag);
  grab.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSheet(panel.dataset.sheet === 'peek' ? 'half' : panel.dataset.sheet === 'half' ? 'full' : 'peek'); } });
  setSheet('peek');
  mobile.addEventListener('change', () => { setSheet(panel.dataset.sheet || 'peek'); if (APP.flow) flowDetail(); }, sig);

  /* ---------- seleção no 3D ---------- */
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function pick(cx, cy) {
    const r = canvas.getBoundingClientRect(); ndc.set((cx - r.left) / r.width * 2 - 1, -(cy - r.top) / r.height * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(pickables, false); if (!hits.length) return null;
    const good = hits.find(h => { const m = h.object; if (m.userData.mode === 'ghost' || m.userData.mode === 'dim') return false; const mt = m.userData.stateMat || m.material; return !(mt && mt.transparent && mt.opacity < 0.5); });
    return (good || hits[0]).object.userData.pid;
  }
  let down = null, hoverXY = null;
  canvas.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; hideHint(); closeMenu(); if (APP.intro) endIntro(); });
  canvas.addEventListener('pointerup', e => {
    if (!down) return; const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y); const quick = performance.now() - down.t < 650; down = null;
    if (moved > 6 || !quick) return;
    const id = pick(e.clientX, e.clientY);
    if (id) select(id, !!APP.symptom); else if (APP.focus && APP.focus.kind === 'part') clearSelection();
  });
  canvas.addEventListener('pointermove', e => { if (e.pointerType === 'mouse' && !down) hoverXY = [e.clientX, e.clientY]; });
  canvas.addEventListener('pointerleave', () => { hoverXY = null; tip.hidden = true; setHover(null); canvas.style.cursor = ''; });
  const tip = $('#tip');
  function doHover() {
    if (!hoverXY) return; const [x, y] = hoverXY; hoverXY = null;
    const id = pick(x, y), r = canvas.getBoundingClientRect();
    setHover(id);
    if (id) { tip.textContent = infoOf(id).n; tip.style.setProperty('--c', sysColor(id)); tip.style.transform = `translate(${x - r.left + 14}px, ${y - r.top + 14}px)`; tip.hidden = false; canvas.style.cursor = 'pointer'; }
    else { tip.hidden = true; canvas.style.cursor = ''; }
  }
  controls.addEventListener('start', () => {
    atHome = false; tip.hidden = true; hideHint(); closeMenu();
    if (APP.flow && APP.follow) { APP.follow = false; syncPlayer(); }
  });

  /* ---------- andar com a câmera: setas (ou W A S D) para frente, trás e lados; Q e E descem e sobem; Shift corre ----------
     a câmera e o ponto de giro andam juntos, com arranque e freio suaves */
  const NAVK = { ArrowUp: 'f', KeyW: 'f', ArrowDown: 'b', KeyS: 'b', ArrowLeft: 'l', KeyA: 'l', ArrowRight: 'r', KeyD: 'r', KeyE: 'u', KeyQ: 'd' };
  const NAV = { keys: new Set(), vel: V(0, 0, 0), fast: false };
  const navBlocked = t => t && t.closest && t.closest('#tabs, #menu, #garage, #qres, [role="tablist"], [role="listbox"], input, select, textarea');
  function navPress(k, fast) {
    if (!NAV.keys.size) { tween = null; atHome = false; tip.hidden = true; hideHint(); closeMenu(); if (APP.flow && APP.follow) { APP.follow = false; syncPlayer(); } }
    NAV.keys.add(k); NAV.fast = !!fast; syncPad();
  }
  function navRelease(k) { if (k) NAV.keys.delete(k); else NAV.keys.clear(); syncPad(); }
  const _f = V(0, 0, 0), _r = V(0, 0, 0), _w = V(0, 0, 0);
  function navStep(dt) {
    _w.set(0, 0, 0);
    if (NAV.keys.size) {
      camera.getWorldDirection(_f); _r.setFromMatrixColumn(camera.matrixWorld, 0); _r.y = 0; if (_r.lengthSq() < 1e-6) _r.set(1, 0, 0); _r.normalize();
      const K = NAV.keys;
      if (K.has('f')) _w.add(_f); if (K.has('b')) _w.sub(_f); if (K.has('r')) _w.add(_r); if (K.has('l')) _w.sub(_r); if (K.has('u')) _w.y += 1; if (K.has('d')) _w.y -= 1;
      if (_w.lengthSq() > 1e-6) {
        const d = camera.position.distanceTo(controls.target);
        _w.normalize().multiplyScalar(Math.min(3.2, Math.max(0.45, d * 0.8)) * (NAV.fast ? 2.4 : 1));
      }
    }
    NAV.vel.lerp(_w, reduceMotion ? 1 : 1 - Math.exp(-dt * (NAV.keys.size ? 9 : 6)));
    if (NAV.vel.lengthSq() < 1e-5 && !NAV.keys.size) { NAV.vel.set(0, 0, 0); return false; }
    const step = NAV.vel.clone().multiplyScalar(dt), p = camera.position.clone().add(step);
    p.y = Math.min(7, Math.max(-0.9, p.y));
    const rr = Math.hypot(p.x, p.z); if (rr > 12) { p.x *= 12 / rr; p.z *= 12 / rr; }
    step.subVectors(p, camera.position); camera.position.add(step); controls.target.add(step);
    return true;
  }
  /* ---------- teclado ---------- */
  document.addEventListener('keydown', e => {
    const t = e.target, typing = t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable);
    if (e.key === 'Escape') { if (!menu.hidden) { closeMenu(); return; } if (typing) return; if (APP.focus || APP.flow || APP.symptom) clearSelection(); return; }
    if (e.key === '/' && !typing && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); q.focus(); q.select(); return; }
    if (typing || e.altKey || e.ctrlKey || e.metaKey) return;
    if (APP.flow) {
      const n = APP.flow.steps.length;
      if (e.key === '.' || e.key === 'PageDown') { e.preventDefault(); gotoStep(Math.min(n - 1, APP.flowStep + 1), true); return; }
      if (e.key === ',' || e.key === 'PageUp') { e.preventDefault(); gotoStep(Math.max(0, APP.flowStep - 1), true); return; }
      if ((e.key === ' ' || e.key === 'Spacebar') && !(t && t.tagName === 'BUTTON')) { e.preventDefault(); togglePlay(); return; }
    }
    const k = NAVK[e.code]; if (!k || e.defaultPrevented || navBlocked(t)) return;
    e.preventDefault(); navPress(k, e.shiftKey);
  }, sig);
  document.addEventListener('keyup', e => { const k = NAVK[e.code]; if (k) navRelease(k); if (e.key === 'Shift') NAV.fast = false; }, sig);
  window.addEventListener('blur', () => navRelease(), sig);
  /* setas na tela: segurar anda; o centro volta à vista inicial */
  const pad = $('#navpad'), PADKEY = 'carros-setas-tela';
  function syncPad() { $$('[data-nav]', pad).forEach(b => b.classList.toggle('on', NAV.keys.has(b.dataset.nav))); }
  function showPad(on) { pad.hidden = !on; store.set(PADKEY, on ? '1' : '0'); }
  pad.hidden = store.get(PADKEY) === '0';
  pad.addEventListener('pointerdown', e => {
    const b = e.target.closest('[data-nav]'); if (!b) return;
    e.preventDefault(); if (b.dataset.nav === 'home') { atHome = false; NAV.vel.set(0, 0, 0); homeView(); return; }
    try { b.setPointerCapture(e.pointerId); } catch (err) { }
    navPress(b.dataset.nav, false);
  });
  const padUp = e => { const b = e.target.closest && e.target.closest('[data-nav]'); if (b && b.dataset.nav !== 'home') navRelease(b.dataset.nav); };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach(ev => pad.addEventListener(ev, padUp));
  pad.addEventListener('click', e => {               // teclado ou leitor de tela: cada clique dá um passinho
    const b = e.target.closest('[data-nav]'); if (!b || e.detail !== 0) return;
    if (b.dataset.nav === 'home') return homeView();
    const k = b.dataset.nav; navPress(k, false); setTimeout(() => navRelease(k), 280);
  });
  pad.addEventListener('contextmenu', e => e.preventDefault());

  /* ---------- dica e abertura ---------- */
  const hint = $('#hint');
  function showHint() { hint.hidden = false; requestAnimationFrame(() => hint.classList.add('show')); }
  function hideHint() { hint.classList.remove('show'); }
  function endIntro() { if (!APP.intro) return; APP.intro = null; MAT.paint.opacity = 1; MAT.paint.transparent = false; MAT.paint.depthWrite = true; MAT.paint.needsUpdate = true; APP.view = 'xray'; syncView(); applyStates(); }
  function introStep(now) {
    const I = APP.intro; if (!I) return; const k = (now - I.t0) / I.dur; if (k < 0) return;
    if (k >= 1) { endIntro(); showHint(); return; }
    if (!MAT.paint.transparent) { MAT.paint.transparent = true; MAT.paint.depthWrite = false; MAT.paint.needsUpdate = true; }
    const e = k * k * (3 - 2 * k); MAT.paint.opacity = 1 - 0.82 * e;
  }

  /* ---------- tema e tamanho ---------- */
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', refreshThemeColors, sig);
  mo = new MutationObserver(refreshThemeColors); mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
    toolbar.classList.toggle('narrow', w < 560); $('#stage').classList.toggle('narrow', w < 680);
    TOP_SAFE = toolbar.offsetTop + toolbar.offsetHeight;
    marks.forEach(m => { m.w = m.h = 0; });
  }
  let firstSize = true;
  let refit = 0;
  ro = new ResizeObserver(() => {
    resize(); if (!menu.hidden) closeMenu();
    if (!firstSize && atHome && !APP.focus && !APP.flow && !APP.symptom) { clearTimeout(refit); refit = setTimeout(() => { if (atHome) homeView(420); }, 140); }   // a gaveta subiu ou desceu: reenquadra o carro
    if (!firstSize || !canvas.clientWidth) return;
    firstSize = false; homeView(0);
    if (opts.part && REG[opts.part]) { endIntro(); select(opts.part); }   // endereço com a peça: abre direto nela
    else if (opts.part && opts.onRoute) opts.onRoute(null);
  }); ro.observe(canvas); resize();

  /* ---------- laço de renderização ---------- */
  let last = performance.now();
  function frame(now) {
    if (!alive) return;
    requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (document.hidden) return;
    if (tween) {
      const k = Math.min(1, (now - tween.t0) / tween.dur), e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
      controls.target.lerpVectors(tween.a.t, tween.b.t, e); camera.position.lerpVectors(tween.a.p, tween.b.p, e);
      if (k >= 1) tween = null;
    }
    if (navStep(dt)) { atHome = false; }
    controls.update();
    let moved = false;
    for (const a of ARTS) {
      if (Math.abs(a.v - a.t) > 0.0005) {
        a.v += (a.t - a.v) * Math.min(1, reduceMotion ? 1 : dt * 4);
        if (Math.abs(a.v - a.t) < 0.002) a.v = a.t;
        moved = true;
      }
    }
    if (moved) { updateHinges(); if (APP.focus && APP.focus.kind === 'part') drawRelLines(); }
    if (APP.drive) {                                   // chegada e saída do carro ao trocar de modelo
      const d = APP.drive, k = clamp01((now - d.t0) / d.dur), x = d.from + (d.to - d.from) * d.ease(k);
      APP.wheelAng += (x - carRoot.position.x) / (CAR.wheelR || 0.3); updateWheels();
      carRoot.position.x = x; AO.position.x = x;
      if (k >= 1) { APP.drive = null; if (d.done) d.done(); }
    }
    if (stepExplode(dt)) { EXPL.t = now; EXPL.moving = true; if (APP.focus && APP.focus.kind === 'part') drawRelLines(); if (APP.steerShown) updateSteer(APP.steerShown); }
    else if (EXPL.moving) { EXPL.moving = false; if (EXPL.refit) { EXPL.refit = false; refitAfterExplode(); EXPL.ids = null; } }
    else if (EXPL.dirty && now - (EXPL.t || 0) > 160) { EXPL.dirty = false; if (APP.flow && APP.flow.kind !== 'dm') { flowDraw(); FLOW.t0 = -1e7; renderLabels(true); } }
    if (DM.menuDirty) { DM.menuDirty = false; syncMenus(); }
    /* motor, ventoinha, rodas e direção */
    const eng = APP.run ? 1 : (reduceMotion ? 0 : APP.motion.engine);
    if (eng > 0) { APP.theta = (APP.theta || 0) + dt * TAU * 0.8 * eng; updateEngine(APP.theta); }
    const fan = Math.max(eng, reduceMotion ? 0 : APP.motion.fan * 1.6); if (fan > 0) (ANIM.fans || (ANIM.fan ? [ANIM.fan] : [])).forEach(f => { f.rotation.x += dt * 8 * fan; });
    const wt = reduceMotion ? 0 : APP.motion.wheels;
    APP.wheelSpeed += (wt - APP.wheelSpeed) * Math.min(1, dt * (wt > APP.wheelSpeed ? 1.6 : 2.2));
    if (APP.wheelSpeed > 0.002) { APP.wheelAng += dt * TAU * 0.9 * APP.wheelSpeed; updateWheels(); }
    const stT = APP.motion.steer ? (reduceMotion ? 0.26 : Math.sin(now * 0.0012) * 0.3) : 0;
    APP.steer += (stT - APP.steer) * Math.min(1, reduceMotion ? 1 : dt * 4);
    if (Math.abs(APP.steer - APP.steerShown) > 1e-4) updateSteer(Math.abs(APP.steer) < 1e-4 ? 0 : APP.steer);
    if (!reduceMotion) { const k = 0.4 + 0.22 * Math.sin(now * 0.004); MATS.hl.forEach(m => { m.emissiveIntensity = k; }); }
    if (APP.flow) flowUpdate(now);
    introStep(now);
    renderer.render(scene, camera);
    renderLabels(false); doHover();
  }

  /* ---------- início ---------- */
  goTab('sistemas'); renderDetail(null); syncView(); syncMenus();
  const params = new URLSearchParams(location.search);
  const arrive = opts.enter && !reduceMotion, t00 = performance.now();
  if (arrive) {                                      // o carro novo entra rodando e para no lugar
    carRoot.position.x = AO.position.x = -3.4;
    APP.drive = { from: -3.4, to: 0, t0: t00 + 80, dur: 1150, ease: k => 1 - Math.pow(1 - k, 3) };
  }
  if (reduceMotion || params.has('xray')) { APP.view = 'xray'; syncView(); applyStates(); showHint(); }
  else { APP.view = 'solid'; syncView(); applyStates(); APP.intro = { t0: t00 + (arrive ? 1450 : 900), dur: 1500 }; }
  requestAnimationFrame(frame);
  if (opts.enter) requestAnimationFrame(() => requestAnimationFrame(() => app.classList.remove('entering')));
  /* saída: o carro anda para a frente enquanto a cena se apaga; depois tudo é desfeito */
  function leave() {
    return new Promise(res => {
      exitModes(); closeMenu(); tip.hidden = true;
      APP.focus = null; clearMarks(); clearRelLines();         // sem rótulos presos a um caminho que já foi encerrado
      $('#stage').classList.add('leaving'); panel.classList.add('leaving');
      if (reduceMotion) { setTimeout(res, 180); return; }
      APP.drive = { from: carRoot.position.x, to: carRoot.position.x + 2.4, t0: performance.now(), dur: 480, ease: k => k * k, done: res };
    });
  }
  function destroy() {
    alive = false; ac.abort(); if (ro) ro.disconnect(); if (mo) mo.disconnect(); stopPlay(); closeMenu();
    const mats = new Set();
    scene.traverse(o => { if (o.geometry) o.geometry.dispose(); if (o.material) [].concat(o.material).forEach(m => mats.add(m)); });
    [MATS.hl, MATS.rel, MATS.hover].forEach(b => b.forEach(m => mats.add(m))); Object.values(MATS.sys).forEach(m => mats.add(m));
    Object.values(MAT).forEach(m => mats.add(m)); [MATS.ghostBody, MATS.ghostDim, MATS.ghostFaint].forEach(m => m && mats.add(m));
    mats.forEach(m => { ['map', 'bumpMap', 'alphaMap', 'roughnessMap', 'normalMap', 'emissiveMap'].forEach(k => { if (m[k]) m[k].dispose(); }); m.dispose(); });
    if (scene.environment) scene.environment.dispose();
    controls.dispose(); renderer.dispose(); renderer.forceContextLoss();
    host.innerHTML = '';
    if (window.__car === api) window.__car = null;
  }
  const api = { select, openSymptom, startFlow, startGuide, gotoStep, togglePlay, goTab, clearSelection, setSheet, goBack, leave,
    toggleBolts: on => setTog('bolts', on), preset: presetView,
    cam: (p, t) => { tween = null; camera.position.set(p[0], p[1], p[2]); controls.target.set(t[0], t[1], t[2]); controls.update(); },
    view: v => { if (APP.intro) endIntro(); APP.view = v; syncView(); applyStates(); },
    explode: t => setExplode(t, true),
    hood: on => setTog('hood', !!on), doors: on => setTog('doors', !!on), color: on => setTog('color', !!on) };
  window.__car = api;
  if (params.has('debug')) api.D = { PARTS, FIX, FLOWS, SYMPTOMS, REG, FLOW, APP, renderer, GUIDES, DM, FIXI, DMOV, camera, ARTS, CODE };
  return { leave, destroy, api };
})();
};
