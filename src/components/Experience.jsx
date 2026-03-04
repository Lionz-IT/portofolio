import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

// ─── Timeline Data ──────────────────────────────────────────────────────────────
const TIMELINE = [
    {
        id: 'exp-01',
        year: '2025 — Now',
        role: 'Freelance Developer & Designer',
        company: 'Self-Employed',
        type: 'Work',
        color: '#007AFF',
        tags: ['React', 'Next.js', 'UI/UX'],
        description:
            'Delivering bespoke digital solutions for clients across Indonesia and Southeast Asia. Specializing in high-performance web apps and brand identity systems.',
    },
    {
        id: 'exp-02',
        year: '2024',
        role: 'Junior Front-End Developer',
        company: 'Startup · Indonesia',
        type: 'Work',
        color: '#5856D6',
        tags: ['React', 'Tailwind', 'REST APIs'],
        description:
            'Built and maintained production-grade features for a SaaS product. Collaborated with a cross-functional team to ship three major product releases.',
    },
    {
        id: 'exp-03',
        year: '2024',
        role: 'Game Development — Capstone',
        company: 'University Project',
        type: 'Education',
        color: '#34C759',
        tags: ['Unity', 'C#', 'HDRP', 'Team Lead'],
        description:
            'Led a 4-person team to develop "Neon-Rush" — an endless runner with HDRP rendering, post-processing, and a custom physics system. Received highest grade in the cohort.',
    },
    {
        id: 'exp-04',
        year: '2023',
        role: 'UI/UX Design Intern',
        company: 'Digital Agency',
        type: 'Work',
        color: '#FF9F0A',
        tags: ['Figma', 'Prototyping', 'User Research'],
        description:
            'Designed wireframes, interactive prototypes, and design systems for 5+ client projects. Elevated brand identities through systematic UI documentation.',
    },
    {
        id: 'exp-05',
        year: '2022',
        role: 'Informatics Engineering',
        company: 'University — Indonesia',
        type: 'Education',
        color: '#FF2D55',
        tags: ['Enrolled', 'GPA 3.8+'],
        description:
            'Pursuing a degree in Informatics Engineering with a focus on game development and human-computer interaction. Consistent Dean\'s List achiever.',
    },
];

// ─── Single event card ──────────────────────────────────────────────────────────
function TimelineItem({ item, index, isLeft }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-8%' });

    return (
        <div
            ref={ref}
            className={`relative flex items-start gap-0 ${isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col lg:w-full`}
        >
            {/* Content card */}
            <motion.div
                initial={{ opacity: 0, x: isLeft ? 40 : -40, y: 20 }}
                animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative lg:w-[calc(50%-2.5rem)] w-full bento-card cursor-default ${isLeft ? 'lg:mr-10' : 'lg:ml-10'}`}
            >
                {/* Glow blob */}
                <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
                    style={{ background: item.color }}
                />

                {/* Header row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-[9px] uppercase tracking-[0.3em] font-bold mb-1.5" style={{ color: item.color }}>
                            {item.year}
                        </p>
                        <h3 className="text-lg font-black tracking-tight leading-snug text-theme-text">
                            {item.role}
                        </h3>
                        <p className="text-xs text-theme-muted mt-0.5 tracking-wide">{item.company}</p>
                    </div>

                    {/* Type pill */}
                    <span
                        className="shrink-0 px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.18em] font-bold border mt-1"
                        style={{
                            color: item.color,
                            borderColor: `${item.color}40`,
                            background: `${item.color}12`,
                        }}
                    >
                        {item.type}
                    </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-theme-muted mb-5">{item.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 text-[9px] uppercase tracking-[0.12em] font-semibold rounded-full border border-theme-border text-theme-muted hover:border-theme-border-hover hover:text-theme-text transition-all duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Corner accents */}
                <span className="absolute top-0 left-0 w-4 h-4 border-t border-l opacity-50" style={{ borderColor: item.color }} />
                <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r opacity-50" style={{ borderColor: item.color }} />
            </motion.div>

            {/* Spacer on the other side for desktop */}
            <div className="hidden lg:block lg:w-[calc(50%-2.5rem)]" />
        </div>
    );
}

// ─── Main component ─────────────────────────────────────────────────────────────
export default function Experience() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start 80%', 'end 20%'],
    });
    const lineH = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <section ref={sectionRef} id="experience" className="relative py-32 md:py-48">

            {/* — Section header — */}
            <div ref={headerRef} className="mb-20">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={headerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="section-badge block mb-4"
                >
                    04 / Experience & Education
                </motion.span>
                <div className="overflow-hidden">
                    <motion.h2
                        initial={{ y: '110%' }}
                        animate={headerInView ? { y: '0%' } : {}}
                        transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-none text-theme-text"
                    >
                        Timeline
                    </motion.h2>
                </div>
            </div>

            {/* ── Central vertical track ── */}
            <div className="relative">

                {/* Track line */}
                <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-[1px] -translate-x-1/2 bg-theme-border overflow-hidden">
                    <motion.div
                        style={{ height: lineH }}
                        className="w-full bg-gradient-to-b from-primary via-primary/60 to-transparent origin-top"
                    />
                </div>

                {/* ── Events ── */}
                <div className="flex flex-col gap-10 pl-12 lg:pl-0">
                    {TIMELINE.map((item, i) => (
                        <div key={item.id} className="relative">

                            {/* Year dot — centered on the track */}
                            <TimelineDot item={item} index={i} />

                            <TimelineItem
                                item={item}
                                index={i}
                                isLeft={i % 2 !== 0}
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

function TimelineDot({ item, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-4 lg:left-1/2 top-6 -translate-x-1/2 z-10"
        >
            {/* Outer ring */}
            <motion.div
                animate={{ scale: [1, 1.35, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.3 }}
                className="absolute inset-0 rounded-full"
                style={{ background: item.color, margin: '-6px' }}
            />
            {/* Core dot */}
            <div
                className="w-3 h-3 rounded-full border-2 border-theme-bg"
                style={{ background: item.color, boxShadow: `0 0 10px ${item.color}80` }}
            />
        </motion.div>
    );
}
