import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    id: '01',
    title: 'Cyber-Sphere',
    tags: 'Front-End · React',
    year: '2025',
    description: 'A hyper-interactive dashboard built with React and Three.js, featuring real-time data visualization.',
    color: '#007AFF',
    link: '#',
  },
  {
    id: '02',
    title: 'Neon-Rush',
    tags: 'Game Dev · Unity',
    year: '2024',
    description: 'An endless runner game set in a cyberpunk neon-lit cityscape. Built in Unity with HDRP rendering.',
    color: '#5856D6',
    link: '#',
  },
  {
    id: '03',
    title: 'Lionz-Dashboard',
    tags: 'UI/UX · Web',
    year: '2024',
    description: 'A premium analytics dashboard with custom charting components and micro-animated data states.',
    color: '#34C759',
    link: '#',
  },
  {
    id: '04',
    title: 'Phantom-UI',
    tags: 'Design System',
    year: '2023',
    description: 'A dark-first, component-driven design system built for maximum flexibility and visual consistency.',
    color: '#FF9F0A',
    link: '#',
  },
];

function ProjectItem({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="project-line group relative border-b border-theme-border cursor-pointer"
      data-hover
    >
      <a href={project.link} className="flex items-start md:items-center justify-between py-8 md:py-10 px-0 md:px-2 gap-4">

        {/* Left: number + title */}
        <div className="flex items-start md:items-center gap-6 min-w-0">
          <span className="text-[10px] text-theme-muted font-mono pt-2 md:pt-0 shrink-0 tabular-nums">
            {project.id}
          </span>
          <div className="min-w-0">
            <motion.h3
              animate={{ x: hovered ? 10 : 0, color: hovered ? project.color : 'var(--color-text)' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] leading-none whitespace-nowrap text-theme-text"
            >
              {project.title}
            </motion.h3>

            <AnimatePresence>
              {hovered && (
                <motion.p
                  initial={{ opacity: 0, height: 0, y: -5 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -5 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="text-theme-muted text-sm leading-relaxed mt-3 max-w-md overflow-hidden"
                >
                  {project.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right: tags, year, arrow */}
        <div className="flex flex-col md:flex-row items-end md:items-center gap-3 md:gap-8 shrink-0 text-right">
          <div className="hidden md:block">
            <motion.p
              animate={{ opacity: hovered ? 1 : 0.45 }}
              className="text-[10px] uppercase tracking-[0.2em] text-theme-text font-medium"
            >
              {project.tags}
            </motion.p>
            <p className="text-[10px] text-theme-muted mt-0.5 tracking-widest">{project.year}</p>
          </div>

          <motion.div
            animate={{ x: hovered ? 0 : 10, opacity: hovered ? 1 : 0, rotate: hovered ? 0 : -45 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-10 rounded-full border flex items-center justify-center shrink-0"
            style={{ borderColor: project.color, color: project.color }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </a>

      {/* Hover background wash */}
      <motion.div
        className="absolute inset-0 rounded-sm pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: `radial-gradient(ellipse at left center, ${project.color}08 0%, transparent 70%)` }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative py-32 md:py-48">

      <div ref={headerRef} className="flex items-end justify-between mb-16 gap-8">
        <div>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={headerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="section-badge block mb-4"
          >
            02 / Selected Works
          </motion.span>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: '110%' }}
              animate={headerInView ? { y: '0%' } : {}}
              transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-none text-theme-text"
            >
              Projects
            </motion.h2>
          </div>
        </div>

        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="hidden md:inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-theme-muted hover:text-theme-text transition-colors duration-300 shrink-0 mb-2"
          data-hover
        >
          View all <span className="text-primary">→</span>
        </motion.a>
      </div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="origin-left h-[1px] bg-theme-border mb-0"
      />

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectItem key={project.id} project={project} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-16 text-[10px] uppercase tracking-[0.35em] text-theme-muted text-center"
      >
        — More work in progress —
      </motion.p>
    </section>
  );
}