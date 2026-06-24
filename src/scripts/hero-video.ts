import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

let isInitialized = false;

const initHeroSequence = () => {
  if (isInitialized) return;
  isInitialized = true;

  const canvas = document.getElementById('hero-sequence-canvas') as HTMLCanvasElement;
  const heroSection = document.getElementById('hero');
  const navContainer = document.getElementById('navbar-container');
  const preloaderEl = document.getElementById('preloader');
  const preloaderPct = document.getElementById('preloader-pct');
  const preloaderBar = document.getElementById('preloader-bar');
  
  if (!canvas || !heroSection) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  const frameCount = 240;
  // Gunakan file webp seperti request user
  const currentFrame = (index: number) => 
    `/videos/frames/frame_${(index + 1).toString().padStart(4, '0')}.webp`;

  const images: HTMLImageElement[] = [];
  const lion = { frame: 0 };
  let loadedCount = 0;

  const resizeCanvas = () => {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = 'high';
    render();
  };

  const drawImageCover = (img: HTMLImageElement) => {
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  const render = () => {
    let frameIndex = Math.round(lion.frame);
    if (frameIndex < 0) frameIndex = 0;
    if (frameIndex >= frameCount) frameIndex = frameCount - 1;

    const img = images[frameIndex];
    if (img && img.complete && img.naturalWidth !== 0) {
      drawImageCover(img);
    }
  };

  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const checkPreloadComplete = () => {
    if (loadedCount === frameCount) {
      gsap.delayedCall(0.2, () => {
        gsap.to(preloaderEl, {
          autoAlpha: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            if (preloaderEl) preloaderEl.style.display = 'none';
            ScrollTrigger.refresh();
          }
        });
      });
    }
  };

  const updateProgress = () => {
    loadedCount++;
    const pct = Math.round((loadedCount / frameCount) * 100);
    
    if (preloaderPct) preloaderPct.innerText = pct.toString();
    if (preloaderBar) preloaderBar.style.width = `${pct}%`;

    checkPreloadComplete();
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    img.onload = () => {
      updateProgress();
      if (Math.round(lion.frame) === i) {
        render();
      }
    };
    img.onerror = () => updateProgress();
    images.push(img);
  }

  if (images[0] && images[0].complete) {
    render();
  }

  let uiVisible = false;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: heroSection,
      start: "top top",
      end: "+=3000",
      pin: true,
      scrub: 0.5,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        render();
        
        if (self.progress > 0.9) {
          if (!uiVisible) {
            uiVisible = true;
            if (navContainer) {
              gsap.to(navContainer, {
                autoAlpha: 1,
                duration: 0.5,
                overwrite: "auto"
              });
            }
          }
        } else {
          if (uiVisible) {
            uiVisible = false;
            if (navContainer) {
              gsap.to(navContainer, {
                autoAlpha: 0,
                duration: 0.5,
                overwrite: "auto"
              });
            }
          }
        }
      }
    }
  });

  // Animasi frame singa mengambil 80% dari total scroll
  tl.to(lion, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    duration: 8
  });

  // Kanvas perlahan memudar di 20% terakhir
  tl.to(canvas, {
    opacity: 0,
    ease: "power1.inOut",
    duration: 2
  }, 8);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroSequence);
} else {
  initHeroSequence();
}
