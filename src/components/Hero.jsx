import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VideoBackdrop from './VideoBackdrop';

const ROLES = ['Front-End Developer', 'Game Developer', 'UI/UX Designer'];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, skewY: 3 },
  visible: { opacity: 1, y: 0, skewY: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.7 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero({ video }) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const timeoutRef = useRef(null);

  // ── Typewriter ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const fullText = ROLES[roleIndex];
    const speed = isDeleting ? 35 : 90;
    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText === fullText) setTimeout(() => setIsDeleting(true), 2200);
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, roleIndex]);

  // ── Scroll parallax ─────────────────────────────────────────────────────────
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="hero-section relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Video background ── */}
      <VideoBackdrop video={video} overlayOpacity={0.7} fallbackTone="gold" />

      {/* ── Ambient glow blobs ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[130px] pointer-events-none animate-glow-pulse z-[1]" style={{ background: 'var(--gradient-surreal)', contain: 'strict', transform: 'translate(-50%, -50%) translateZ(0)' }} />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none animate-surreal-morph z-[1]" style={{ background: 'var(--gradient-celestial)', contain: 'strict', transform: 'translateZ(0)' }} />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="text-center z-10 px-6 w-full max-w-screen-xl mx-auto"
      >
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="overflow-visible">
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-[13vw] md:text-[11vw] leading-[0.88] tracking-[-0.02em] text-theme-text select-none drop-shadow-2xl font-display surreal-gradient-text glow-text"
            >
              RAFIF
              <span className="absolute -top-4 -left-8 text-primary text-4xl animate-surreal-breathe font-sans font-light">◊</span>
              <span className="absolute -bottom-8 -right-4 text-accent text-3xl animate-surreal-float font-sans font-light">☽</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden relative">
            <motion.h1
              variants={itemVariants}
              className="text-[13vw] md:text-[11vw] leading-[0.88] tracking-[-0.02em] select-none font-display"
            >
              <span className="surreal-gradient-text glow-text italic">AHMAD</span>
              <span className="text-theme-text drop-shadow-[0_0_20px_var(--glow-gold)]"> Y.</span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-8 h-10 flex items-center justify-center"
        >
          <p className="text-theme-text opacity-80 text-base md:text-xl font-light tracking-[0.25em] uppercase drop-shadow font-mono">
            {displayText}
            <span className="text-primary animate-cursor-blink ml-0.5">|</span>
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="mt-8 max-w-md mx-auto text-theme-muted text-sm md:text-base leading-relaxed tracking-wide drop-shadow font-sans font-light"
        >
          Sculpting digital experiences where impossible geometry meets precision engineering.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="mt-14 flex items-center justify-center gap-6"
        >
          <a
            href="#projects"
            className="surreal-pill group relative inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] px-10 py-4 text-white font-medium rounded-full overflow-hidden transition-all duration-700 hover:scale-105"
            style={{ background: 'var(--gradient-surreal)', boxShadow: '0 0 30px var(--glow-gold)' }}
            data-hover
          >
            <span className="relative z-10 font-sans tracking-[0.2em]">View Work</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1 font-display italic">→</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500 animate-shimmer" />
          </a>
          <a
            href="#about"
            className="surreal-pill inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] px-10 py-4 border border-primary/50 text-theme-text font-medium rounded-full hover:bg-primary/10 hover:border-primary hover:shadow-[0_0_25px_var(--glow-gold)] transition-all duration-700 backdrop-blur-md font-sans"
            data-hover
          >
            About Me
          </a>
        </motion.div>
      </motion.div>

      {/* ── Stats row bottom-left ── */}
      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={4}
        className="absolute bottom-12 left-8 md:left-16 z-20 hidden md:flex flex-col gap-5"
      >
        {[
          { value: '3+', label: 'Years of craft' },
          { value: '20+', label: 'Visions realized' },
        ].map(({ value, label }) => (
          <div key={label} className="surreal-pill flex items-baseline gap-4 border border-primary/30 backdrop-blur-2xl px-6 py-2.5 rounded-full shadow-[0_0_20px_var(--glow-gold)]" style={{ background: `rgba(var(--color-bg-rgb), 0.4)` }}>
            <span className="text-2xl font-display italic surreal-gradient-text glow-text tracking-tighter drop-shadow">{value}</span>
            <span className="text-[10px] font-mono tracking-widest text-theme-text opacity-80 uppercase">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
