// Junta a casca, o CSS, os carros, o motor e a garagem num único HTML (dist/index.html), pronto para publicar.
//   node build.mjs            → dist/index.html
//   node build.mjs --check    → também confere a sintaxe de cada arquivo
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const R = p => fs.readFileSync(new URL(p, import.meta.url), 'utf8');
const cars = fs.readdirSync(new URL('./src/cars/', import.meta.url)).filter(f => f.endsWith('.js')).sort();
const kits = fs.existsSync(new URL('./src/kit/', import.meta.url)) ? fs.readdirSync(new URL('./src/kit/', import.meta.url)).filter(f => f.endsWith('.js')).sort() : [];
const files = [...kits.map(f => 'src/kit/' + f), ...cars.map(f => 'src/cars/' + f), 'src/engine/engine.js', 'src/app.js'];

const parts = files.map(f => {
  const code = R('./' + f);
  if (process.argv.includes('--check')) new vm.Script(code, { filename: f });   // erro de sintaxe para o build com o nome do arquivo
  return `/* ===== ${f} ===== */\n(function () {\n${code}\n})();`;
});
const html = R('./src/shell.html')
  .replace('/*@STYLES*/', () => R('./src/styles.css'))
  .replace('/*@SCRIPTS*/', () => parts.join('\n\n'));
if (html.includes('</script') && html.split('</script').length - 1 !== 5) throw new Error('"</script" dentro do código quebraria a página');
fs.mkdirSync(new URL('./dist/', import.meta.url), { recursive: true });
fs.writeFileSync(new URL('./dist/index.html', import.meta.url), html);
console.log(`dist/index.html: ${(html.length / 1024).toFixed(0)} KB, carros: ${cars.join(', ')}`);
