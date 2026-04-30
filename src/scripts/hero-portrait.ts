import { gsap } from 'gsap';

const portrait = document.querySelector<HTMLElement>('.hero__portrait');
if (portrait) {
  const imgDefault = portrait.querySelector<HTMLImageElement>('.hero__portrait-img--default');
  const imgHover = portrait.querySelector<HTMLImageElement>('.hero__portrait-img--hover');

  if (imgDefault && imgHover) {
    const target = { r: 0, x: 0, y: 0 };
    
    imgHover.style.opacity = '1';
    imgHover.style.clipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';
    imgHover.style.webkitClipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';

    let time = 0;
    let animationFrameId: number;

    const renderTornPaperEffect = () => {
      if (target.r <= 0.1) return;

      time += 0.03;

      const numPoints = 80;
      const points = [];
      const centerX = target.x;
      const centerY = target.y;
      
      for (let i = 0; i < numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        
        const noise = 
          Math.sin(angle * 3 + time) * 0.12 + 
          Math.sin(angle * 5 - time * 0.8) * 0.06 +
          Math.sin(angle * 8 + time * 1.2) * 0.03;
          
        const radius = target.r * (1 + noise);
        
        const px = centerX + Math.cos(angle) * radius;
        const py = centerY + Math.sin(angle) * radius;
        
        points.push(`${px}px ${py}px`);
      }

      const clipPath = `polygon(${points.join(', ')})`;
      imgHover.style.clipPath = clipPath;
      imgHover.style.webkitClipPath = clipPath;

      animationFrameId = requestAnimationFrame(renderTornPaperEffect);
    };

    portrait.addEventListener('mousemove', (e) => {
      const rect = portrait.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      
      gsap.to(target, {
        r: 160,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
        onStart: () => {
          cancelAnimationFrame(animationFrameId);
          renderTornPaperEffect();
        }
      });
    });

    portrait.addEventListener('mouseleave', (e) => {
      const rect = portrait.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;

      gsap.to(target, {
        r: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        overwrite: 'auto',
        onComplete: () => {
          cancelAnimationFrame(animationFrameId);
          imgHover.style.clipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';
          imgHover.style.webkitClipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';
        }
      });
    });
  }
}
