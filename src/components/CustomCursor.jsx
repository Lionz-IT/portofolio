import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return;

        // Touch-only device — skip entirely
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const onMove = (e) => {
            // Move dot immediately
            dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        };

        window.addEventListener('mousemove', onMove, { passive: true });

        return () => {
            window.removeEventListener('mousemove', onMove);
        };
    }, []);

    return (
        <div ref={dotRef} className="cursor-dot mix-blend-difference pointer-events-none z-[9999]" style={{ left: 0, top: 0 }} />
    );
}
