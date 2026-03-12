import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    id: '01',
    title: 'Cyber-Sphere',
    tags: 'Front-End · React',
    year: '2025',
    description: 'A hyper-interactive dashboard built with React and Three.js, featuring real-time data visualization.',
    color: '#007AFF',
    image: '/project-1.png',
    link: '#',
  },
  {
    id: '02',
    title: 'Neon-Rush',
    tags: 'Game Dev · Unity',
    year: '2024',
    description: 'An endless runner game set in a cyberpunk neon-lit cityscape. Built in Unity with HDRP rendering.',
    color: '#5856D6',
    image: '/project-2.png',
    link: '#',
  },
  {
    id: '03',
    title: 'Lionz-Dashboard',
    tags: 'UI/UX · Web',
    year: '2024',
    description: 'A premium analytics dashboard with custom charting components and micro-animated data states.',
    color: '#34C759',
    image: '/project-3.png',
    link: '#',
  },
  {
    id: '04',
    title: 'Phantom-UI',
    tags: 'Design System',
    year: '2023',
    description: 'A dark-first, component-driven design system built for maximum flexibility and visual consistency.',
    color: '#FF9F0A',
    image: '/project-4.png',
    link: '#',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-5%' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
      style={{ '--project-color': project.color }}
      data-hover
    >
      <a href={project.link} className="block">
        {/* ── Image container ── */}
        <div className="relative overflow-hidden rounded-2xl border border-theme-border mb-5"
          style={{ aspectRatio: '16/9' }}
        >
          {/* Image */}
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to top, ${project.color}30 0%, transparent 60%)`,
            }}
          />

          {/* Corner accent on hover */}
          <div
            className="absolute top-4 right-4 w-9 h-9 rounded-full border flex items-center justify-center backdrop-blur-sm opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"
            style={{
              borderColor: project.color,
              color: project.color,
              background: `${project.color}18`,
            }}
          >
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Project number badge */}
          <div className="absolute top-4 left-4 text-xs font-mono text-white/70 tracking-widest bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
            {project.id}
          </div>
        </div>

        {/* ── Info row ── */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3
              className="text-xl sm:text-2xl font-black tracking-[-0.03em] leading-tight mb-1 truncate text-theme-text group-hover:text-[var(--project-color)] transition-colors duration-300"
            >
              {project.title}
            </h3>
            <p className="text-xs text-theme-muted uppercase tracking-[0.2em] truncate">
              {project.tags} · {project.year}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-theme-muted leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Bottom color bar on hover */}
        <div
          className="mt-4 h-[2px] rounded-full origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
        />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="relative pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">

      {/* ── Header ── */}
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
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-theme-muted hover:text-theme-text transition-colors duration-300 shrink-0 mb-2"
          data-hover
        >
          View all <span className="text-primary">→</span>
        </motion.a>
      </div>

      {/* ── Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      <p
        className="mt-16 text-xs uppercase tracking-[0.35em] text-theme-muted text-center opacity-80"
      >
        — More work in progress —
      </p>
    </section>
  );
}