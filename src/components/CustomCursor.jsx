import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        // Touch-only device — skip entirely
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const lag = { x: pos.x, y: pos.y };
        let rafId = null;
        let moving = false;
        let idleTimer = null;

        const onMove = (e) => {
            pos.x = e.clientX;
            pos.y = e.clientY;
            // Move dot immediately (no lag needed for the tiny dot)
            dot.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;

            // Kick off ring animation only if not already running
            if (!moving) {
                moving = true;
                rafId = requestAnimationFrame(animateRing);
            }

            // Cancel idle after 800ms of no movement
            clearTimeout(idleTimer);
            idleTimer = setTimeout(() => { moving = false; }, 800);
        };

        const animateRing = () => {
            lag.x += (pos.x - lag.x) * 0.14;
            lag.y += (pos.y - lag.y) * 0.14;
            ring.style.transform = `translate(${lag.x}px, ${lag.y}px) translate(-50%, -50%)`;

            const dx = Math.abs(pos.x - lag.x);
            const dy = Math.abs(pos.y - lag.y);
            if (dx > 0.5 || dy > 0.5) {
                rafId = requestAnimationFrame(animateRing);
            } else {
                // Snap to final pos and stop RAF
                ring.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
                moving = false;
            }
        };

        const onHoverIn = (e) => {
            if (e.target.closest('[data-hover]')) ring.classList.add('hovering');
        };
        const onHoverOut = () => ring.classList.remove('hovering');

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onHoverIn, { passive: true });
        document.addEventListener('mouseout', onHoverOut, { passive: true });

        return () => {
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onHoverIn);
            document.removeEventListener('mouseout', onHoverOut);
            cancelAnimationFrame(rafId);
            clearTimeout(idleTimer);
        };
    }, []);

    return (
        <>
            {/* Use transform instead of left/top to stay on the compositor thread */}
            <div ref={dotRef} className="cursor-dot" style={{ left: 0, top: 0 }} />
            <div ref={ringRef} className="cursor-ring" style={{ left: 0, top: 0 }} />
        </>
    );
}
