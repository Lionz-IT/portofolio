import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';


const ABOUT_TEXT =
  "I am a passionate creator focused on bridging the gap between aesthetics and functionality. With a background in Front-End development and a deep love for Game Design, I build digital experiences that feel as good as they look. Every pixel has a purpose, every line of code tells a story.";

function SplitReveal({ text, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' });
  const words = text.split(' ');

  return (
    <h2
      ref={ref}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-[-0.03em] leading-[1.1] max-w-5xl glow-text"
    >
      {words.map((word, i) => {
        const opacity = Math.min(1, 0.15 + (i / words.length) * 0.85);
        return (
          <span key={i} className={`inline-block overflow-hidden align-top mr-[0.28em] mb-1 ${i % 3 === 0 ? 'italic' : ''}`}>
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
    <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">

      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none animate-surreal-morph opacity-[0.06]" style={{ background: 'var(--gradient-surreal)', contain: 'strict', transform: 'translateZ(0)' }} />

      <div className="hidden lg:block absolute left-0 top-0 w-[1px] h-full bg-theme-border">
        <motion.div
          style={{ 
            height: lineHeight,
            background: 'var(--gradient-surreal)'
          }}
          className="w-full origin-top"
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
          <span className="text-primary animate-surreal-float">◉</span>
          <div className="flex-1 h-[1px] bg-theme-border max-w-[120px]" />
          <span className="text-accent animate-surreal-float" style={{ animationDelay: '1s' }}>◊</span>
        </motion.div>

        <div>
          <SplitReveal text={ABOUT_TEXT} delay={0} />
        </div>

      </div>
    </section>
  );
}
