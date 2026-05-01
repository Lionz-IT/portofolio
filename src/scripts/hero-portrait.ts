import { gsap } from 'gsap';

const hero = document.querySelector<HTMLElement>('.hero');

if (hero) {
  const layerDefault = hero.querySelector<HTMLElement>('.hero__layer--default');
  const layerHover = hero.querySelector<HTMLElement>('.hero__layer--hover');

  if (layerDefault && layerHover) {
    const target = { r: 0, x: 0, y: 0 };
    
    layerHover.style.clipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';
    layerHover.style.webkitClipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';

    const svgOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgOverlay.style.position = 'absolute';
    svgOverlay.style.inset = '0';
    svgOverlay.style.width = '100%';
    svgOverlay.style.height = '100%';
    svgOverlay.style.pointerEvents = 'none';
    svgOverlay.style.zIndex = '10';

    const strokePolygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    strokePolygon.setAttribute('fill', 'none');
    strokePolygon.setAttribute('stroke', 'white');
    strokePolygon.setAttribute('stroke-width', '1.5');
    strokePolygon.setAttribute('stroke-dasharray', '8 6');
    strokePolygon.style.opacity = '0';
    
    svgOverlay.appendChild(strokePolygon);
    hero.appendChild(svgOverlay);

    let time = 0;
    let animationFrameId: number;

    let isVisible = false;

    // Use Intersection Observer to pause requestAnimationFrame when Hero is not in viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        if (isVisible && target.r > 0.1) {
          // Restart animation if it was paused while visible
          cancelAnimationFrame(animationFrameId);
          renderTornPaperEffect();
        }
      });
    }, { threshold: 0 });
    
    observer.observe(hero);

    const renderTornPaperEffect = () => {
      if (target.r <= 0.1 || !isVisible) return;

      time += 0.03;

      const numPoints = 80;
      const cssPoints = [];
      const svgPoints = [];
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
        
        const pctX = (px / hero.offsetWidth) * 100;
        const pctY = (py / hero.offsetHeight) * 100;
        
        cssPoints.push(`${pctX}% ${pctY}%`);
        svgPoints.push(`${px},${py}`);
      }

      const hoverClipPath = `polygon(${cssPoints.join(', ')})`;
      layerHover.style.clipPath = hoverClipPath;
      layerHover.style.webkitClipPath = hoverClipPath;

      const defaultClipPath = `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%, 0% 0%, ${cssPoints[0]}, ${cssPoints.join(', ')}, ${cssPoints[0]}, 0% 0%)`;
      layerDefault.style.clipPath = defaultClipPath;
      layerDefault.style.webkitClipPath = defaultClipPath;

      strokePolygon.setAttribute('points', svgPoints.join(' '));

      animationFrameId = requestAnimationFrame(renderTornPaperEffect);
    };

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      
      gsap.to(target, {
        r: 220,
        duration: 0.2,
        ease: 'power2.out',
        overwrite: 'auto',
        onStart: () => {
          strokePolygon.style.opacity = '1';
          cancelAnimationFrame(animationFrameId);
          renderTornPaperEffect();
        }
      });
    });

    hero.addEventListener('mouseleave', (e) => {
      const rect = hero.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;

      gsap.to(target, {
        r: 0,
        duration: 0.4,
        ease: 'power3.inOut',
        overwrite: 'auto',
        onComplete: () => {
          strokePolygon.style.opacity = '0';
          cancelAnimationFrame(animationFrameId);
          layerHover.style.clipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';
          layerHover.style.webkitClipPath = 'polygon(50% 50%, 50% 50%, 50% 50%)';
          
          layerDefault.style.clipPath = 'none';
          layerDefault.style.webkitClipPath = 'none';
        }
      });
    });
  }
}


