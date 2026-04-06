import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        if (window.matchMedia('(pointer: coarse)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        let rafId = 0;
        let nextX = 0;
        let nextY = 0;

        const onMove = (e) => {
            nextX = e.clientX;
            nextY = e.clientY;

            if (rafId) return;

            rafId = requestAnimationFrame(() => {
                dot.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
                rafId = 0;
            });
        };

        window.addEventListener('mousemove', onMove, { passive: true });

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <div ref={dotRef} className="cursor-dot mix-blend-difference pointer-events-none z-[9999]" style={{ left: 0, top: 0 }} />
    );
}
