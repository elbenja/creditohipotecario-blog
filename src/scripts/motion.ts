// Shared scroll motion, loaded once by BaseLayout:
//  - [data-reveal]  fades in when it enters the viewport
//  - [data-count]   counts up from 0 when its revealed block enters
//                   (data-count="51.5", optional data-dec, data-pre, data-suffix)
//  - .fill-num      fills white → yellow as it scrolls up the screen

function countUp(el: HTMLElement) {
  const to = parseFloat(el.dataset.count ?? '');
  if (isNaN(to)) return;
  const dec = parseInt(el.dataset.dec ?? '1', 10);
  const pre = el.dataset.pre ?? '';
  const suf = el.dataset.suffix ?? '';
  const t0 = performance.now();
  const dur = 1100;
  const step = (t: number) => {
    const k = Math.min(1, (t - t0) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    el.textContent = pre + (to * e).toFixed(dec).replace('.', ',') + suf;
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

if (document.documentElement.classList.contains('js-reveal')) {
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        el.setAttribute('data-in', '');
        io.unobserve(el);
        el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
      }),
    { threshold: 0.15 },
  );
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
}

const fills = Array.from(document.querySelectorAll<HTMLElement>('.fill-num'));
if (fills.length) {
  let raf = 0;
  const track = () => {
    raf = 0;
    const vh = window.innerHeight || 800;
    const start = vh * 0.9;
    const end = vh * 0.4;
    for (const el of fills) {
      const b = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (start - b.bottom) / (start - end)));
      el.style.setProperty('--fill', p.toFixed(3));
    }
  };
  const schedule = () => { if (!raf) raf = requestAnimationFrame(track); };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  track();
}
