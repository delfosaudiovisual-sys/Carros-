// Abre o app num Chromium sem tela, troca a CDN do three.js por arquivos locais,
// junta os erros do console e tira capturas. Uso:
//   node tools/shot.mjs <arquivo.html> <saida-prefixo> [script.js]
// O script opcional recebe (page, shot) e pode clicar, girar a câmera etc.
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const [, , file, out = 'shot', extra] = process.argv;
const vendor = process.env.THREE_DIR;            // pasta "package" do three@0.147.0 (npm pack)
const W = +(process.env.W || 1400), H = +(process.env.H || 860);

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const errors = [];
page.on('console', m => { if (m.type() === 'error' || m.type() === 'warning') errors.push(`[${m.type()}] ${m.text()}`); });
page.on('pageerror', e => errors.push('[pageerror] ' + (e.stack || e.message)));
await page.route('**/cdn.jsdelivr.net/npm/three@0.147.0/**', r => {
  const rel = r.request().url().split('three@0.147.0/')[1];
  const p = vendor && path.join(vendor, rel);
  if (p && fs.existsSync(p)) r.fulfill({ path: p, contentType: 'application/javascript' }); else r.abort();
});
await page.route('**/fonts.googleapis.com/**', r => r.fulfill({ body: '', contentType: 'text/css' }));
await page.route('**/fonts.gstatic.com/**', r => r.abort());

await page.goto(url.pathToFileURL(path.resolve(file)).href + (process.env.Q || ''));
await page.waitForTimeout(+(process.env.WAIT || 3500));
let n = 0;
const shot = async (name) => { const f = `${out}-${String(++n).padStart(2, '0')}${name ? '-' + name : ''}.png`; await page.screenshot({ path: f, timeout: 120000 }); return f; };
await shot('inicio');
if (extra) { const mod = await import(url.pathToFileURL(path.resolve(extra)).href); await mod.default(page, shot); }
fs.writeFileSync(out + '-erros.txt', errors.join('\n') || '(sem erros)');
console.log(errors.length ? errors.slice(0, 40).join('\n') : 'sem erros no console');
await browser.close();
