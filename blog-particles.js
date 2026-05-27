// blog-particles.js
// Canvas 2D point field that mimics the spirit of the portfolio's WebGL hero
// background — a grid of ~1500 brand-tinted dots displaced by a slow sine
// wave. Lightweight, GPU-cheap, and respects the body[data-bg] toggle.

(function () {
  const canvas = document.getElementById('bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let w = 0, h = 0;

  // grid
  const cols = 60;
  const rows = 40;
  let points = [];

  function buildPoints() {
    points = [];
    const cellW = w / (cols - 1);
    const cellH = h / (rows - 1);
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        points.push({
          x: x * cellW,
          y: y * cellH,
          ox: x * cellW,
          oy: y * cellH,
          phase: (x + y) * 0.18,
        });
      }
    }
  }

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    buildPoints();
  }

  let mx = -9999, my = -9999;
  window.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });
  window.addEventListener('resize', resize);
  resize();

  // brand color, picked from CSS var
  function brand() {
    const v = getComputedStyle(document.documentElement).getPropertyValue('--em-brand').trim();
    return v || '#dcf05d';
  }

  let t = 0;
  let running = true;
  let raf = null;

  function frame() {
    if (!running) return;
    t += 0.005;
    ctx.clearRect(0, 0, w, h);

    const b = brand();
    // sample once: parse to rgb for varying alpha
    const tmp = document.createElement('canvas').getContext('2d');
    tmp.fillStyle = b;
    const cssCol = tmp.fillStyle; // "#rrggbb"
    const r = parseInt(cssCol.slice(1, 3), 16);
    const g = parseInt(cssCol.slice(3, 5), 16);
    const bl = parseInt(cssCol.slice(5, 7), 16);

    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      // simple sine displacement
      const dx = Math.sin(p.phase + t) * 6;
      const dy = Math.cos(p.phase * 0.7 + t * 1.2) * 6;

      // mouse repulsion
      const ddx = p.ox + dx - mx;
      const ddy = p.oy + dy - my;
      const dist = Math.sqrt(ddx * ddx + ddy * ddy);
      let pushX = 0, pushY = 0;
      if (dist < 140) {
        const f = (1 - dist / 140) * 18;
        pushX = (ddx / dist) * f;
        pushY = (ddy / dist) * f;
      }

      const px = p.ox + dx + pushX;
      const py = p.oy + dy + pushY;

      // wave-driven intensity ribbon — bands of higher alpha that move slowly
      const wave = Math.sin(p.ox * 0.012 - t * 1.6 + p.oy * 0.006);
      const intensity = 0.18 + Math.max(0, wave) * 0.55;

      // closer to mouse → glow more
      const proximity = dist < 200 ? (1 - dist / 200) * 0.5 : 0;

      const a = Math.min(1, intensity + proximity);

      // small dot
      const size = 1 + (intensity > .5 ? .8 : 0);
      ctx.fillStyle = `rgba(${r},${g},${bl},${a * 0.7})`;
      ctx.fillRect(px - size / 2, py - size / 2, size, size);

      // faint white twinkle on the very brightest points
      if (a > .85) {
        ctx.fillStyle = `rgba(255,255,255,${(a - .85) * 1.2})`;
        ctx.fillRect(px - 0.5, py - 0.5, 1, 1);
      }
    }

    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    frame();
  }
  function stop() {
    running = false;
    if (raf) cancelAnimationFrame(raf);
  }

  // expose toggle on body[data-bg]
  const obs = new MutationObserver(() => {
    if (document.body.dataset.bg === 'off') stop();
    else if (!running) start();
  });
  obs.observe(document.body, { attributes: true, attributeFilter: ['data-bg'] });

  // pause when offscreen
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (document.body.dataset.bg !== 'off') start();
  });

  frame();
})();
