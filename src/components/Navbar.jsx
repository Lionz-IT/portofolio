import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Skills', 'Experience'];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useMotionValueEvent(scrollY, 'change', (y) => {
    setScrolled(y > 60);
  });

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };

  const scrolledBg = isDark
    ? 'bg-[#050505]/75 backdrop-blur-2xl border-b border-white/[0.04]'
    : 'bg-[#f5f5f3]/80 backdrop-blur-2xl border-b border-black/[0.06]';

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full top-0 z-[990] transition-all duration-700 ${scrolled ? scrolledBg : 'bg-transparent'
          }`}
      >
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-5 flex justify-between items-center">

          {/* Logo & Profile Picture */}
          <motion.a
            href="#home"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="group flex items-center gap-3 text-xl font-black tracking-[-0.04em] select-none"
            data-hover
          >
            {/* Profile Picture in Navbar */}
            <div className="w-9 h-9 md:w-10 md:h-10 flex shrink-0 items-center justify-center">
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-full h-full object-contain scale-[1.5] md:scale-[1.8] drop-shadow-[0_0_8px_rgba(0,122,255,0.15)] group-hover:drop-shadow-[0_0_16px_rgba(0,122,255,0.3)] group-hover:-translate-y-0.5 transition-all duration-500" 
                style={{ filter: isDark ? 'none' : 'invert(1)' }}
              />
            </div>

            <div className="flex items-center gap-0">
              <span className="text-theme-text transition-colors duration-300">Lionz</span>
              <span className="text-primary transition-all duration-300 group-hover:glow-text">-IT</span>
              <span className="ml-2 w-1.5 h-1.5 rounded-full bg-primary animate-ping opacity-80" />
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="nav-link"
                data-hover
              >
                {item}
              </motion.a>
            ))}

            {/* Theme toggle */}
            <motion.div
              custom={NAV_ITEMS.length}
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <ThemeToggle />
            </motion.div>

            {/* CTA */}
            <motion.a
              href="#contact"
              custom={NAV_ITEMS.length + 1}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className="relative text-xs uppercase tracking-[0.22em] px-7 py-3 text-theme-text font-medium overflow-hidden group"
              data-hover
            >
              <span className="absolute inset-0 rounded-full border border-theme-border group-hover:border-primary/60 transition-colors duration-500" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5" />
              <span className="relative z-10 group-hover:text-primary transition-colors duration-300">
                Let's Talk
              </span>
            </motion.a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              custom={NAV_ITEMS.length + 1}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-1.5 p-2 z-[991]"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-theme-text block transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-6 h-[1px] bg-theme-text block transition-all"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="w-6 h-[1px] bg-theme-text block transition-all"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: 'all' } : { opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className={`fixed inset-0 z-[980] backdrop-blur-2xl md:hidden flex flex-col items-center justify-center gap-10 ${isDark ? 'bg-[#050505]/95' : 'bg-[#f5f5f3]/95'
          }`}
      >
        {NAV_ITEMS.concat(['Contact']).map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 30 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-bold tracking-tighter text-theme-muted hover:text-primary transition-colors duration-300"
          >
            {item}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}