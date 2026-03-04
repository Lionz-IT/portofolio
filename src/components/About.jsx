import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const ABOUT_TEXT =
  "I am a passionate creator focused on bridging the gap between aesthetics and functionality. With a background in Front-End development and a deep love for Game Design, I build digital experiences that feel as good as they look. Every pixel has a purpose, every line of code tells a story.";

const SKILLS = [
  { category: 'Front-End', items: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
  { category: 'Game Dev', items: ['Unity', 'C#', 'Blender', 'Game Design'] },
  { category: 'Tools', items: ['Figma', 'Git', 'VS Code', 'Vite'] },
];

// ── Single useInView per group — NOT per item (perf fix) ─────────────────────
function SkillGroup({ group, gi }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: gi * 0.08, duration: 0.5 }}
        className="text-[9px] uppercase tracking-[0.35em] text-primary mb-4 font-bold"
      >
        {group.category}
      </motion.p>
      <div className="flex flex-col gap-2">
        {group.items.map((item, i) => (
          <motion.p
            key={item}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: gi * 0.08 + i * 0.06, duration: 0.5 }}
            className="text-sm text-theme-muted hover:text-theme-text transition-colors duration-300 cursor-default"
          >
            {item}
          </motion.p>
        ))}
      </div>
    </div>
  );
}

// ── Theme-aware word reveal — uses CSS var opacity ───────────────────────────
function SplitReveal({ text, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
  const words = text.split(' ');

  return (
    <h2
      ref={ref}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-[-0.03em] leading-[1.1] max-w-5xl"
    >
      {words.map((word, i) => {
        const opacity = Math.min(1, 0.15 + (i / words.length) * 0.85);
        return (
          <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em] mb-1">
            <motion.span
              className="inline-block text-theme-text"
              style={{ opacity }}
              initial={{ y: '110%' }}
              animate={isInView ? { y: '0%' } : { y: '110%' }}
              transition={{ delay: delay + i * 0.03, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </h2>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-48">

      {/* Vertical progress line */}
      <div className="hidden lg:block absolute left-0 top-0 w-[1px] h-full bg-theme-border">
        <motion.div
          style={{ height: lineHeight }}
          className="w-full bg-gradient-to-b from-primary to-transparent origin-top"
        />
      </div>

      <div className="pl-0 lg:pl-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, x: -20 }}
          animate={headerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="section-badge">01 / About Me</span>
          <div className="flex-1 h-[1px] bg-theme-border max-w-[120px]" />
        </motion.div>

        <div className="mb-24">
          <SplitReveal text={ABOUT_TEXT} delay={0} />
        </div>

        <div className="hr-fade mb-16 max-w-xs" />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Skills columns — each group has ONE useInView */}
          <div className="grid grid-cols-3 gap-8">
            {SKILLS.map((group, gi) => (
              <SkillGroup key={group.category} group={group} gi={gi} />
            ))}
          </div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative group"
          >
            <div className="relative p-8 border border-theme-border bg-theme-surface backdrop-blur-sm hover:border-theme-border-hover transition-colors duration-500">
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span className="text-primary text-base font-black">R</span>
                </div>
                <div>
                  <p className="text-theme-text text-sm font-bold tracking-tight">Rafif Ahmad Y.</p>
                  <p className="text-theme-muted text-[10px] uppercase tracking-widest">Available · Indonesia</p>
                </div>
              </div>

              <p className="text-theme-muted text-sm leading-relaxed mb-6">
                Building ultra-premium digital products since 2022, blending code and visual storytelling into one cohesive craft.
              </p>

              <a
                href="mailto:rafif@example.com"
                className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-primary hover:gap-3 transition-all duration-300 font-semibold"
                data-hover
              >
                Get in touch <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}