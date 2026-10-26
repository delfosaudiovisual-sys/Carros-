/* ===== Peças em CAD: descompressão e montagem das geometrias =====
   kit.data.js traz as malhas quantizadas e comprimidas (gerado por tools/kit/build.py). Aqui o bloco é
   descomprimido uma vez ao abrir a página; cada peça vira BufferGeometry na primeira vez que um carro a pede
   e fica guardada para os outros carros. Sem DecompressionStream, cada malha cai para a caixa que a envolve. */
const KITD = window.CAR_KIT || null;
const KITCACHE = {};
let KITBUF = null;
window.CAR_KIT_READY = (async () => {
  if (!KITD || !window.DecompressionStream) return false;
  try {
    const bin = Uint8Array.from(atob(KITD.b64), c => c.charCodeAt(0));
    const s = new Blob([bin]).stream().pipeThrough(new DecompressionStream('gzip'));
    KITBUF = await new Response(s).arrayBuffer();
    return true;
  } catch (e) {
    console.warn('Peças em CAD indisponíveis; usando caixas no lugar.', e);
    KITBUF = null; return false;
  }
})();

/* coordenadas de textura: projeção pela face dominante (em metros) ou plana no disco (0..1) */
function kitUV(g, it) {
  const P = g.attributes.position.array, N = g.attributes.normal.array, n = P.length / 3, uv = new Float32Array(n * 2);
  for (let i = 0; i < n; i++) {
    const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2];
    if (it.uv === 'planar') { uv[i * 2] = (x - it.min[0]) / it.size[0]; uv[i * 2 + 1] = (y - it.min[1]) / it.size[1]; continue; }
    const ax = Math.abs(N[i * 3]), ay = Math.abs(N[i * 3 + 1]), az = Math.abs(N[i * 3 + 2]);
    if (ax >= ay && ax >= az) { uv[i * 2] = z * 4; uv[i * 2 + 1] = y * 4; }
    else if (ay >= az) { uv[i * 2] = x * 4; uv[i * 2 + 1] = z * 4; }
    else { uv[i * 2] = x * 4; uv[i * 2 + 1] = y * 4; }
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
}

window.kitGeometry = function (name) {
  if (KITCACHE[name]) return KITCACHE[name];
  const it = KITD && KITD.items[name]; if (!it) return null;
  const out = it.sub.map((sb, k) => {
    let g;
    if (KITBUF) {
      const q = new Uint16Array(KITBUF, sb.v, sb.nv * 3), pos = new Float32Array(sb.nv * 3);
      for (let i = 0; i < sb.nv; i++) for (let c = 0; c < 3; c++) pos[i * 3 + c] = it.min[c] + q[i * 3 + c] / 65535 * it.size[c];
      const I = sb.w ? new Uint32Array(KITBUF, sb.i, sb.nt * 3) : new Uint16Array(KITBUF, sb.i, sb.nt * 3);
      g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setIndex(new THREE.BufferAttribute(I.slice(), 1));
      g.computeVertexNormals();
    } else {
      g = k ? new THREE.BufferGeometry() : new THREE.BoxGeometry(it.size[0], it.size[1], it.size[2]).translate(it.min[0] + it.size[0] / 2, it.min[1] + it.size[1] / 2, it.min[2] + it.size[2] / 2);
      if (k) { g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(9), 3)); g.computeVertexNormals(); }
    }
    kitUV(g, it);
    return { m: sb.m, geo: g };
  });
  return (KITCACHE[name] = out);
};
