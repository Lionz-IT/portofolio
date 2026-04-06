import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/useTheme';

const NAV_ITEMS = ['Home', 'About', 'Projects', 'Skills', 'Experience'];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useMotionValueEvent(scrollY, 'change', (y) => {
    const nextScrolled = y > 60;
    setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
  });

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  const scrolledBg = isDark
    ? 'bg-[#1A1528]/80 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_40px_var(--glow-gold)]'
    : 'bg-[#F5F0E8]/90 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_var(--glow-gold)]';

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed w-full top-0 z-[990] transition-all duration-1000 ${scrolled ? scrolledBg : 'bg-transparent'
          }`}
      >
        <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-6 flex justify-between items-center">

          {/* Logo & Profile Picture */}
          <motion.a
            href="#home"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            className="group flex items-center gap-4 text-2xl font-light tracking-[-0.02em] select-none"
            data-hover
          >
            {/* Profile Picture in Navbar */}
            <div className="w-10 h-10 md:w-11 md:h-11 flex shrink-0 items-center justify-center rounded-full overflow-hidden border border-primary/30 group-hover:border-primary transition-colors duration-700">
              <img 
                src="/profile.png" 
                alt="Profile"
                width={44}
                height={44}
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover scale-[1.2] group-hover:scale-[1.3] transition-all duration-700" 
                style={{ filter: isDark ? 'contrast(1.1) sepia(0.2) hue-rotate(-10deg)' : 'invert(1) contrast(1.1) sepia(0.2) hue-rotate(-10deg)' }}
              />
            </div>

            <div className="flex items-center gap-0">
              <span className="text-theme-text transition-colors duration-500 font-display italic">Lionz</span>
              <span className="surreal-gradient-text transition-all duration-500 font-display">-IT</span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_ITEMS.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                custom={i}
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="nav-link font-sans text-sm tracking-wide font-light text-theme-muted hover:text-theme-text transition-colors duration-500"
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
              className="surreal-pill relative text-xs uppercase tracking-[0.2em] px-8 py-3.5 text-white font-medium overflow-hidden group shadow-[0_0_20px_var(--glow-gold)] hover:scale-105 hover:shadow-[0_0_30px_var(--glow-purple)] transition-all duration-700 font-sans"
              style={{ background: 'var(--gradient-surreal)' }}
              data-hover
            >
              <span className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition-colors duration-700" />
              <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-white/10 animate-shimmer" />
              <span className="relative z-10 transition-colors duration-500">
                Let's Talk
              </span>
            </motion.a>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <motion.button
              custom={NAV_ITEMS.length + 1}
              variants={navVariants}
              initial="hidden"
              animate="visible"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col gap-2 p-2 z-[991]"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-7 h-[1px] bg-theme-text block transition-all duration-500"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="w-7 h-[1px] bg-theme-text block transition-all duration-500"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-7 h-[1px] bg-theme-text block transition-all duration-500"
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={menuOpen ? { opacity: 1, pointerEvents: 'all' } : { opacity: 0, pointerEvents: 'none' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-0 z-[980] backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-12 ${isDark ? 'bg-gradient-to-br from-[#1A1528]/98 to-[#2A1F3D]/98' : 'bg-gradient-to-br from-[#F5F0E8]/98 to-[#EDE6DA]/98'
          }`}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-10">
          <span className="text-[400px] text-primary font-display">◉</span>
        </div>
        
        {NAV_ITEMS.concat(['Contact']).map((item, i) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            initial={{ opacity: 0, y: 40 }}
            animate={menuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-5xl font-light font-display tracking-wide text-theme-muted hover:text-transparent hover:bg-clip-text hover:bg-[image:var(--gradient-surreal)] transition-all duration-500 hover:scale-[1.05]"
          >
            {item}
            {menuOpen && (
              <motion.span 
                className="absolute -right-8 top-1/2 -translate-y-1/2 text-primary opacity-0 hover:opacity-100 text-2xl"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                ◊
              </motion.span>
            )}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
