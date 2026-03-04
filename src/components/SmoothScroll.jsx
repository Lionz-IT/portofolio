import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,              // was 1.4 — shorter = more responsive feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // expo-out
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,       // neutral multiplier
      touchMultiplier: 1.8,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}