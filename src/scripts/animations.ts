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
  if (el.closest('.works__wrapper')) return; 

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

const worksWrapper = document.querySelector('.works__wrapper');
const worksContainer = document.querySelector('.works__container');

if (worksWrapper && worksContainer) {
  let mm = gsap.matchMedia();

  mm.add("all", () => {
    const cards = gsap.utils.toArray('.works__card');
    
    gsap.set(cards, {
      y: 100,
      opacity: 0
    });

    ScrollTrigger.create({
      trigger: worksWrapper,
      start: "top 80%",
      onEnter: () => {
        gsap.to(cards, {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          overwrite: "auto"
        });
      },
      once: true
    });

    const getScrollAmount = () => -(worksContainer.scrollWidth - window.innerWidth + 100);

    const tween = gsap.to(worksContainer, {
      x: getScrollAmount,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: worksWrapper,
      start: "center center",
      end: () => `+=${worksContainer.scrollWidth}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
    });
    
    return () => {
      tween.kill();
    };
  });
}

