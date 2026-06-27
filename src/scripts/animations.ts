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
      start: 'top 85%',
      once: true,
    },
  });
});

const worksWrapper = document.querySelector('.works__wrapper');
const worksContainer = document.querySelector('.works__container');
const decorBottom = document.querySelector('.works__decor-bottom');
const quoteEl = document.getElementById('works-quote');

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

    let quoteSplit: SplitText | null = null;
    if (quoteEl) {
      quoteSplit = new SplitText(quoteEl, { type: "chars" });
      gsap.set(quoteSplit.chars, { opacity: 0 });
    }

    const tl = gsap.timeline();
    
    tl.to(worksContainer, {
      x: getScrollAmount,
      ease: "none",
      duration: 1
    }, 0);

    if (quoteSplit) {
      tl.to(quoteSplit.chars, {
        opacity: 1,
        stagger: 1 / quoteSplit.chars.length,
        duration: 0.05,
        ease: "none"
      }, 0);
    }

    ScrollTrigger.create({
      trigger: worksWrapper,
      start: "top 20%",
      end: () => `+=${worksContainer.scrollWidth}`,
      pin: true,
      animation: tl,
      scrub: 1,
      invalidateOnRefresh: true,
      onEnter: () => {
        if (decorBottom) gsap.to(decorBottom, { autoAlpha: 1, duration: 0.5 });
      },
      onLeaveBack: () => {
        if (decorBottom) gsap.to(decorBottom, { autoAlpha: 0, duration: 0.3 });
      }
    });
    
    return () => {
      tl.kill();
    };
  });
}
