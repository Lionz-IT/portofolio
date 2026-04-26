import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

document.querySelectorAll<HTMLElement>('[data-animate="split"]').forEach((el) => {
  const split = new SplitText(el, { type: 'chars' });
  el.style.visibility = 'visible';

  gsap.from(split.chars, {
    y: 60,
    opacity: 0,
    rotateX: -90,
    stagger: 0.03,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      once: true,
    },
  });
});

document.querySelectorAll<HTMLElement>('[data-animate="fade-up"]').forEach((el) => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 88%',
      once: true,
    },
  });
});

document.querySelectorAll<HTMLElement>('[data-animate="fade-in"]').forEach((el) => {
  gsap.to(el, {
    opacity: 1,
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 90%',
      once: true,
    },
  });
});
