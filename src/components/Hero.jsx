import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

export default function Hero() {
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

  // ── Scroll parallax (CSS-var based, single listener) ───────────────────────
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="home"
      className="hero-section relative h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Ambient glow blobs (CSS animation, no JS) ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[130px] pointer-events-none animate-glow-pulse hero-blob" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none hero-blob-2" />

      {/* ── Grid lines (theme-aware via CSS var) ── */}
      <div className="hero-grid absolute inset-0 pointer-events-none opacity-[0.03]" />

      {/* ── Fade edges ── */}
      <div className="absolute top-0 left-0 right-0 h-32 fade-top pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-32 fade-bottom pointer-events-none z-10" />

      {/* ── Main content ── */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="text-center z-10 px-6 w-full max-w-screen-xl mx-auto"
      >

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="overflow-visible">
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-[13vw] md:text-[11vw] leading-[0.88] font-black tracking-[-0.04em] text-theme-text select-none"
            >
              RAFIF
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="text-[13vw] md:text-[11vw] leading-[0.88] font-black tracking-[-0.04em] select-none"
            >
              <span className="text-primary glow-text">AHMAD</span>
              <span className="hero-initial"> Y.</span>
            </motion.h1>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={1}
          className="mt-8 h-10 flex items-center justify-center"
        >
          <p className="text-theme-muted text-base md:text-xl font-light tracking-[0.25em] uppercase">
            {displayText}
            <span className="text-primary animate-cursor-blink ml-0.5">|</span>
          </p>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" animate="visible" custom={2}
          className="mt-6 max-w-md mx-auto text-theme-muted text-sm leading-relaxed tracking-wide"
        >
          Crafting digital experiences where precision engineering meets brutalist aesthetics.
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="mt-12 flex items-center justify-center gap-5"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] px-8 py-4 bg-primary text-white font-semibold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,122,255,0.5)]"
            data-hover
          >
            <span className="relative z-10">View Work</span>
            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] px-8 py-4 border border-theme-border text-theme-muted font-medium rounded-full hover:border-theme-border-hover hover:text-theme-text transition-all duration-500"
            data-hover
          >
            About Me
          </a>
        </motion.div>
      </motion.div>


      {/* ── Stats row bottom-left ── */}
      <motion.div
        variants={fadeUp} initial="hidden" animate="visible" custom={4}
        className="absolute bottom-10 left-8 md:left-16 z-20 hidden md:flex flex-col gap-4"
      >
        {[
          { value: '3+', label: 'Years of experience' },
          { value: '20+', label: 'Projects shipped' },
        ].map(({ value, label }) => (
          <div key={label} className="flex items-baseline gap-3">
            <span className="text-2xl font-black text-theme-text tracking-tighter">{value}</span>
            <span className="text-[10px] uppercase tracking-widest text-theme-muted">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}