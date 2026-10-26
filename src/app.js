/* ===== Garagem: escolhe o carro, guarda a escolha e troca com transição ===== */
(function () {
  const CARS = (window.CARS || []).slice().sort((a, b) => (a.order || 99) - (b.order || 99));
  const root = document.getElementById('root');
  if (!window.THREE || !THREE.OrbitControls || !THREE.RoomEnvironment || !CARS.length) {
    root.innerHTML = '<p class="fail">Não consegui carregar o motor 3D. Verifique a conexão e recarregue a página.</p>';
    return;
  }
  const store = { get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }, set(k, v) { try { localStorage.setItem(k, v); } catch (e) { } } };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const KEY = 'carros-atual';
  const byId = id => CARS.find(c => c.id === id);
  const hashParts = () => decodeURIComponent(location.hash.slice(1)).split('/');      // #carro ou #carro/peça
  const fromHash = () => { const h = hashParts()[0]; return byId(h) ? h : null; };
  const route = (car, pid) => { const h = car + (pid ? '/' + pid : ''); if (decodeURIComponent(location.hash.slice(1)) !== h) { try { history.replaceState(null, '', '#' + h); } catch (e) { } } };
  let cur = null, curId = null, busy = false;

  function mount(id, enter, part) {
    const car = byId(id) || CARS[0];
    curId = car.id; store.set(KEY, car.id);
    route(car.id, part);
    cur = window.mountCar(car, { host: root, enter, part, count: CARS.length, onPick: toggleGarage, onRoute: pid => route(car.id, pid) });
  }
  /* aviso de montagem: a geometria do carro novo é gerada de uma vez e segura a tela por um instante */
  const paint = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  function showLoader(car) {
    const st = document.getElementById('stage'), r = st ? st.getBoundingClientRect() : { left: 0, top: 0, width: innerWidth, height: innerHeight };
    const el = document.createElement('div'); el.id = 'loader'; el.setAttribute('role', 'status');
    el.innerHTML = `<span class="spin" aria-hidden="true"></span><span>Montando o ${esc(car.name)}…</span>`;
    el.style.left = (r.left + r.width / 2) + 'px'; el.style.top = (r.top + r.height / 2) + 'px';
    document.body.appendChild(el); return el;
  }
  async function switchTo(id) {
    if (busy || id === curId || !byId(id)) return;
    busy = true; closeGarage(false);
    try { await cur.leave(); } catch (e) { }
    const ld = showLoader(byId(id)); await paint();
    cur.destroy(); mount(id, true);
    ld.classList.add('out'); setTimeout(() => ld.remove(), 260);
    const b = document.getElementById('carBtn'); if (b) b.focus({ preventScroll: true });   // o foco volta ao nome do carro, não se perde no body
    busy = false;
  }

  /* silhueta lateral de cada carro, desenhada a partir do perfil do teto, do piso e das rodas */
  function silhouette(c) {
    const P = c.profile; if (!P) return '';
    const W = 92, H = 40, x0 = P.top[0][0], x1 = P.top[P.top.length - 1][0], yMax = Math.max(...P.top.map(p => p[1]));
    const k = Math.min(W / (x1 - x0), (H - 2) / yMax), X = x => ((x - x0) * k).toFixed(1), Y = y => (H - y * k).toFixed(1);
    let d = `M${X(x0)} ${Y(P.rearLow)} ` + P.top.map(([x, y]) => `L${X(x)} ${Y(y)}`).join(' ') + ` L${X(x1)} ${Y(P.frontLow)}`;
    const wheels = P.wheels.slice().sort((a, b) => b - a);
    wheels.forEach(xa => { d += ` L${X(xa + P.arch)} ${Y(P.floor)} A${(P.arch * k).toFixed(1)} ${(P.arch * k).toFixed(1)} 0 0 0 ${X(xa - P.arch)} ${Y(P.floor)}`; });
    d += ` L${X(x0)} ${Y(P.rearLow)} Z`;
    const wr = (P.wheelR * k).toFixed(1), cy = Y(P.wheelY);
    return `<svg viewBox="0 0 ${W} ${H}" aria-hidden="true"><path d="${d}"/>${P.wheels.map(x => `<circle cx="${X(x)}" cy="${cy}" r="${wr}"/>`).join('')}</svg>`;
  }

  /* ---------- lista de carros, aberta pelo nome do carro no topo ---------- */
  const gar = document.createElement('div');
  gar.id = 'garage'; gar.setAttribute('role', 'dialog'); gar.setAttribute('aria-label', 'Escolha o carro'); gar.hidden = true;
  document.body.appendChild(gar);
  let garBtn = null;
  function toggleGarage(btn) { if (!gar.hidden) closeGarage(true); else openGarage(btn); }
  function openGarage(btn) {
    garBtn = btn;
    gar.innerHTML = `<h2>Escolha o carro</h2><ul class="gl">${CARS.map(c => `<li><button class="gcar" data-car="${esc(c.id)}" aria-current="${c.id === curId}">${silhouette(c)}<strong>${esc(c.title)}</strong><small>${esc(c.sub)}</small></button></li>`).join('')}</ul><p class="gnote">Cada carro guarda as próprias revisões neste navegador.</p>`;
    const r = btn.getBoundingClientRect(), vw = document.documentElement.clientWidth;
    gar.hidden = false;
    const w = gar.offsetWidth, left = Math.max(8, Math.min(vw - w - 8, r.left));
    gar.style.left = left + 'px'; gar.style.top = (r.bottom + 6) + 'px';
    gar.style.setProperty('--origin', `${Math.round(r.left + 24 - left)}px top`);
    btn.setAttribute('aria-expanded', 'true');
    const on = gar.querySelector('[aria-current="true"]') || gar.querySelector('.gcar'); if (on) on.focus({ preventScroll: true });
  }
  function closeGarage(focusBack) {
    if (gar.hidden) return;
    gar.hidden = true;
    if (garBtn && garBtn.isConnected) { garBtn.setAttribute('aria-expanded', 'false'); if (focusBack) garBtn.focus({ preventScroll: true }); }
    garBtn = null;
  }
  gar.addEventListener('click', e => { const b = e.target.closest('.gcar'); if (!b) return; if (b.dataset.car === curId) closeGarage(true); else switchTo(b.dataset.car); });
  gar.addEventListener('keydown', e => {
    const items = [...gar.querySelectorAll('.gcar')], i = items.indexOf(document.activeElement);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length]; if (n) n.focus(); }
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !gar.hidden) { e.stopPropagation(); closeGarage(true); } }, true);
  document.addEventListener('pointerdown', e => { if (!gar.hidden && !e.target.closest('#garage') && !e.target.closest('#carBtn')) closeGarage(false); });
  window.addEventListener('resize', () => closeGarage(false));
  window.addEventListener('hashchange', () => {
    const id = fromHash(), pid = hashParts()[1];
    if (id && id !== curId) switchTo(id); else if (id && pid && cur && cur.api) cur.api.select(pid);
  });

  /* as peças em CAD são descomprimidas antes da primeira montagem (leva uma fração de segundo) */
  (window.CAR_KIT_READY || Promise.resolve()).then(() => mount(fromHash() || (byId(store.get(KEY)) ? store.get(KEY) : CARS[0].id), false, fromHash() ? hashParts()[1] : null));
})();
