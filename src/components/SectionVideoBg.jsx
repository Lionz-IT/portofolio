/**
 * SectionVideoBg
 * ──────────────
 * Drop inside any `relative overflow-hidden` section.
 * Props:
 *   src        – path to video (e.g. '/videos/hero-bg.mp4')
 *   overlay    – tailwind bg opacity class, default 'bg-black/70'
 *   fadeTop    – show top fade-to-theme-bg gradient (default true)
 *   fadeBottom – show bottom fade-to-theme-bg gradient (default true)
 *   className  – extra classes on the wrapper
 */
export default function SectionVideoBg({
    src,
    overlay = 'bg-black/70',
    fadeTop = true,
    fadeBottom = true,
    className = '',
}) {
    return (
        <div className={`absolute inset-0 z-0 pointer-events-none ${className}`}>
            <video
                className="w-full h-full object-cover"
                src={src}
                autoPlay
                loop
                muted
                playsInline
            />
            {/* Dark overlay */}
            <div className={`absolute inset-0 ${overlay}`} />
            {/* Fade top */}
            {fadeTop && (
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[var(--color-bg)] to-transparent" />
            )}
            {/* Fade bottom */}
            {fadeBottom && (
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
            )}
        </div>
    );
}
