import { motion } from 'framer-motion';
import MetaBalls from './MetaBalls';
import { useTheme } from '../context/ThemeContext';

/**
 * SectionWrapper
 * ──────────────
 * Props:
 *   id      – section id for scroll-nav
 *   video   – optional video src (e.g. '/videos/video1.mp4')
 *             When provided, the section gets a full-bleed video bg
 *             with a dark overlay. If null, renders MetaBalls background.
 */
export default function SectionWrapper({ children, id, video }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const ballColor = isDark ? '#ffffff' : '#000000';

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full overflow-hidden"
    >
      {/* ── Background: Video OR MetaBalls ── */}
      {video ? (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            className="w-full h-full object-cover"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
          {/* Dark overlay — keeps text readable on both dark + light themes */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.035] dark:opacity-[0.06] transition-opacity duration-1000">
          <MetaBalls
            color={ballColor}
            cursorBallColor={ballColor}
            cursorBallSize={2}
            ballCount={15}
            animationSize={30}
            enableMouseInteraction={true}
            enableTransparency={true}
            hoverSmoothness={0.15}
            clumpFactor={1}
            speed={0.3}
          />
        </div>
      )}

      {/* Content sits above the bg */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.section>
  );
}