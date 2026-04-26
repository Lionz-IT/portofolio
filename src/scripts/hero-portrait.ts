import { gsap } from 'gsap';

const portrait = document.querySelector<HTMLElement>('.hero__portrait');
if (portrait) {
  const imgDefault = portrait.querySelector<HTMLImageElement>('.hero__portrait-img--default');
  const imgHover = portrait.querySelector<HTMLImageElement>('.hero__portrait-img--hover');

  if (imgDefault && imgHover) {
    const target = { r: 0, x: 0, y: 0 };

    imgHover.style.opacity = '1';
    imgHover.style.clipPath = 'circle(0px at 50% 50%)';
    imgHover.style.webkitClipPath = 'circle(0px at 50% 50%)';
    
    // We will use clip-path for hover image (shows only circle).
    // For default image, we use mask-image to create a hole.

    portrait.addEventListener('mousemove', (e) => {
      const rect = portrait.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;
      
      gsap.to(target, {
        r: 80, // Lingkaran diperkecil dari 120 ke 80
        duration: 0.15,
        ease: 'power2.out',
        overwrite: 'auto',
        onUpdate: () => {
          // Hover image menggunakan clip-path (lebih ringan & aman di semua browser)
          const clipPath = `circle(${target.r}px at ${target.x}px ${target.y}px)`;
          imgHover.style.clipPath = clipPath;
          imgHover.style.webkitClipPath = clipPath;
          
          // Default image menggunakan mask-image untuk melubangi
          const maskHole = `radial-gradient(circle at ${target.x}px ${target.y}px, transparent ${target.r}px, black ${target.r}px)`;
          imgDefault.style.maskImage = maskHole;
          imgDefault.style.webkitMaskImage = maskHole;
        }
      });
    });

    portrait.addEventListener('mouseleave', (e) => {
      const rect = portrait.getBoundingClientRect();
      target.x = e.clientX - rect.left;
      target.y = e.clientY - rect.top;

      gsap.to(target, {
        r: 0,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
        onUpdate: () => {
          const clipPath = `circle(${target.r}px at ${target.x}px ${target.y}px)`;
          imgHover.style.clipPath = clipPath;
          imgHover.style.webkitClipPath = clipPath;
          
          if (target.r < 1) {
            imgDefault.style.maskImage = 'none';
            imgDefault.style.webkitMaskImage = 'none';
          } else {
            const maskHole = `radial-gradient(circle at ${target.x}px ${target.y}px, transparent ${target.r}px, black ${target.r}px)`;
            imgDefault.style.maskImage = maskHole;
            imgDefault.style.webkitMaskImage = maskHole;
          }
        }
      });
    });
  }
}
