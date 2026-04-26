const dot = document.querySelector<HTMLElement>('.cursor-dot');
const ring = document.querySelector<HTMLElement>('.cursor-ring');

if (dot && ring && window.matchMedia('(pointer: fine)').matches) {
  let mx = 0;
  let my = 0;
  let dx = 0;
  let dy = 0;
  let rx = 0;
  let ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
  });

  const tick = () => {
    dx += (mx - dx) * 0.2;
    dy += (my - dy) * 0.2;
    rx += (mx - rx) * 0.08;
    ry += (my - ry) * 0.08;

    dot.style.left = `${dx}px`;
    dot.style.top = `${dy}px`;
    ring.style.left = `${rx}px`;
    ring.style.top = `${ry}px`;

    requestAnimationFrame(tick);
  };
  tick();

  document.querySelectorAll<HTMLElement>('[data-cursor-hover]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('is-hover');
      ring.classList.add('is-hover');
    });
    el.addEventListener('mouseleave', () => {
      dot.classList.remove('is-hover');
      ring.classList.remove('is-hover');
    });
  });
}
