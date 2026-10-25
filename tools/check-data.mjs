// Confere a consistência dos dados de cada carro: relações, sintomas, caminhos, revisões, guias e explosão.
import fs from 'node:fs';
const window = {};
const dir = new URL('../src/cars/', import.meta.url);
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort()) new Function('window', fs.readFileSync(new URL(f, dir), 'utf8'))(window);
let bad = 0;
const warn = (car, msg) => { bad++; console.log(`[${car}] ${msg}`); };
for (const car of window.CARS) {
  const D = car.data(), { PARTS, FIX, SYMPTOMS, FLOWS, MAINT, GUIDES, EXV, SYS } = D;
  const has = id => PARTS[id] || FIX[id];
  for (const id in PARTS) { const p = PARTS[id]; if (!SYS[p.s]) warn(car.id, `sistema ${p.s} de ${id}`); p.r.forEach(r => { if (!PARTS[r]) warn(car.id, `${id} → relação inexistente ${r}`); }); if (!EXV[id]) warn(car.id, `sem vetor de explosão: ${id}`); }
  for (const id in FIX) if (!PARTS[FIX[id].p]) warn(car.id, `fixador ${id} prende ${FIX[id].p} (não existe)`);
  for (const k in EXV) if (!PARTS[k]) warn(car.id, `explosão de peça inexistente ${k}`);
  SYMPTOMS.forEach(s => s.s.forEach(([id]) => { if (!PARTS[id]) warn(car.id, `sintoma ${s.id}: ${id}`); }));
  FLOWS.forEach(f => f.steps.forEach((st, i) => { if (!PARTS[st[0]]) warn(car.id, `caminho ${f.id} passo ${i}: ${st[0]}`); const o = st[2] || {}; if (o.via && !Array.isArray(o.via) && !PARTS[o.via.r]) warn(car.id, `caminho ${f.id} via ${o.via.r}`); }));
  MAINT.forEach(m => m.p.forEach(id => { if (!PARTS[id]) warn(car.id, `revisão ${m.id}: ${id}`); }));
  GUIDES.forEach(g => { [g.part, ...g.parts].forEach(id => { if (!PARTS[id]) warn(car.id, `guia ${g.id}: ${id}`); });
    g.steps.forEach(([, o = {}]) => { (o.fx || []).forEach(([fid]) => { if (!FIX[fid]) warn(car.id, `guia ${g.id}: fixador ${fid}`); }); (o.out || []).forEach(([pid]) => { if (!PARTS[pid]) warn(car.id, `guia ${g.id}: out ${pid}`); }); }); });
  (car.welcome || []).forEach(id => { if (!PARTS[id]) warn(car.id, `boas-vindas: ${id}`); });
  Object.values(car.open || {}).forEach(id => { if (!PARTS[id]) warn(car.id, `abrir: ${id}`); });
  const proc = (window.CAR_PROC || {})[car.id] || {};
  const noProc = Object.keys(PARTS).filter(id => !proc[id]);
  console.log(`${car.id}: ${Object.keys(PARTS).length} peças, ${Object.keys(FIX).length} grupos de fixadores, ${FLOWS.length} caminhos, ${GUIDES.length} guias, ${SYMPTOMS.length} sintomas; sem desmontar/montar: ${noProc.length}`);
  Object.keys(proc).forEach(id => { if (!has(id)) warn(car.id, `procedimento de peça inexistente ${id}`); });
}
process.exit(bad ? 1 : 0);
