import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

// ─── Timeline Data ──────────────────────────────────────────────────────────────
const TIMELINE = [
    {
        id: 'exp-01',
        year: '2025 — Present',
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
            "Pursuing a degree in Informatics Engineering with a focus on game development and human-computer interaction. Consistent Dean's List achiever.",
    },
];

// ─── Floating Particles ─────────────────────────────────────────────────────────
const PARTICLES = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    delay: Math.random() * 6,
    duration: Math.random() * 6 + 5,
    opacity: Math.random() * 0.45 + 0.1,
}));

function Particle({ p }) {
    return (
        <motion.span
            className="pointer-events-none absolute rounded-full"
            style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: 'radial-gradient(circle, #38bdf8cc, #0ea5e900)',
                boxShadow: `0 0 ${p.size * 3}px ${p.size}px #38bdf840`,
            }}
            animate={{
                y: [0, -18, 0],
                opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.5],
                scale: [0.8, 1.2, 0.8],
            }}
            transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
                ease: 'easeInOut',
            }}
        />
    );
}

// ─── Content Card ───────────────────────────────────────────────────────────────
function TimelineCard({ item, index, isLeft }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-8%' });
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative w-full ${isLeft ? 'text-left' : 'text-right'}`}
        >
            {/* Connector arm: horizontal line from card to center */}
            <div
                className={`absolute top-5 hidden lg:block h-[1px] w-10 ${isLeft ? 'right-0' : 'left-0'}`}
                style={{ background: `linear-gradient(${isLeft ? 'to left' : 'to right'}, transparent, ${item.color}60)` }}
            />

            {/* Glow blob */}
            <div
                className="absolute -top-8 w-52 h-52 rounded-full blur-[80px] opacity-0 group-hover:opacity-15 transition-opacity duration-700 pointer-events-none"
                style={{ background: item.color, [isLeft ? 'right' : 'left']: '-4rem' }}
            />

            {/* Year + type */}
            <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                {!isLeft && (
                    <span
                        className="px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-bold border"
                        style={{ color: item.color, borderColor: `${item.color}50`, background: `${item.color}15` }}
                    >
                        {item.type}
                    </span>
                )}
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold" style={{ color: item.color }}>
                    {item.year}
                </span>
                {isLeft && (
                    <span
                        className="px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-[0.18em] font-bold border"
                        style={{ color: item.color, borderColor: `${item.color}50`, background: `${item.color}15` }}
                    >
                        {item.type}
                    </span>
                )}
            </div>

            {/* Role */}
            <h3 className="text-xl md:text-2xl font-black tracking-tight text-theme-text leading-snug mb-1">
                {item.role}
            </h3>

            {/* Company */}
            <p className="text-xs text-theme-muted tracking-wide mb-3">{item.company}</p>

            {/* Description */}
            <p className="text-sm leading-relaxed text-theme-muted mb-4">
                {item.description}
            </p>

            {/* Tags */}
            <div className={`flex flex-wrap gap-1.5 mb-4 ${isLeft ? 'justify-start' : 'justify-end'}`}>
                {item.tags.map((tag) => (
                    <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] uppercase tracking-[0.12em] font-semibold rounded-full border border-theme-border text-theme-muted hover:border-theme-border-hover hover:text-theme-text transition-all duration-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* View Details button */}
            <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setExpanded(!expanded)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-theme-border text-theme-text text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-theme-border-hover hover:text-theme-text transition-all duration-300"
                    data-hover
                >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                    {expanded ? 'HIDE DETAILS' : 'VIEW DETAILS'}
                </motion.button>
            </div>

            {/* Expandable extra info */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div
                            className="mt-3 p-4 rounded-xl border text-xs text-theme-muted leading-relaxed"
                            style={{ borderColor: `${item.color}30`, background: `${item.color}0c` }}
                        >
                            <p className="text-theme-muted font-semibold mb-1 uppercase tracking-widest text-[10px]">
                                Impact &amp; highlights
                            </p>
                            <p>
                                Key technologies: {item.tags.join(', ')}. This experience shaped my
                                approach to building scalable, user-focused products with a keen eye
                                for performance and aesthetic detail.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Center Dot ─────────────────────────────────────────────────────────────────
function CenterDot({ item, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });

    return (
        <div ref={ref} className="relative z-10 flex-shrink-0 flex items-start justify-center" style={{ width: 24, paddingTop: 4 }}>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
                style={{ width: 18, height: 18 }}
            >
                {/* Pulse ring */}
                <motion.span
                    animate={{ scale: [1, 1.9, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.35 }}
                    className="absolute inset-0 rounded-full"
                    style={{ background: item.color }}
                />
                {/* Core */}
                <span
                    className="absolute inset-[3px] rounded-full border-2 border-black/50"
                    style={{ background: item.color, boxShadow: `0 0 14px ${item.color}90` }}
                />
            </motion.div>
        </div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function Experience() {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });

    return (
        <section id="experience" className="relative overflow-hidden pb-32 pt-0 md:pb-48 md:pt-0">

            {/* ── Particles ── */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {PARTICLES.map((p) => <Particle key={p.id} p={p} />)}
            </div>

            {/* ── Content ── */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-24">

                {/* Section Header */}
                <div ref={headerRef} className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={headerInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="section-badge inline-block mb-6"
                    >
                        04 / Experience &amp; Education
                    </motion.span>

                    <div className="overflow-hidden mb-6">
                        <motion.h2
                            initial={{ y: '110%' }}
                            animate={headerInView ? { y: '0%' } : {}}
                            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl font-black tracking-[0.1em] leading-none text-theme-text uppercase"
                        >
                            My Backstory
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={headerInView ? { scaleX: 1 } : {}}
                        transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mx-auto h-[1px] w-24 bg-theme-border origin-center"
                    />
                </div>

                {/* ── Zigzag Timeline ── */}
                <div className="relative">

                    {/* Central vertical track */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] hidden lg:block"
                        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-border) 15%, var(--color-border) 85%, transparent)' }}
                    />

                    <div className="flex flex-col gap-16">
                        {TIMELINE.map((item, i) => {
                            const isLeft = i % 2 === 0; // even → content on LEFT, odd → content on RIGHT
                            return (
                                <div key={item.id} className="relative flex items-start gap-0 lg:grid lg:grid-cols-[1fr_24px_1fr]">

                                    {/* LEFT COLUMN */}
                                    <div className={`${isLeft ? 'lg:block' : 'lg:block'} w-full lg:pr-10`}>
                                        {isLeft ? (
                                            <TimelineCard item={item} index={i} isLeft={false} />
                                        ) : (
                                            <div className="hidden lg:block" /> // empty spacer
                                        )}
                                    </div>

                                    {/* CENTER DOT */}
                                    <div className="hidden lg:flex justify-center">
                                        <CenterDot item={item} index={i} />
                                    </div>

                                    {/* RIGHT COLUMN */}
                                    <div className="w-full lg:pl-10">
                                        {!isLeft ? (
                                            <TimelineCard item={item} index={i} isLeft={true} />
                                        ) : (
                                            <div className="hidden lg:block" /> // empty spacer
                                        )}
                                    </div>

                                    {/* MOBILE: always show full width */}
                                    <div className="lg:hidden w-full pl-8 relative">
                                        {/* Mobile dot */}
                                        <span
                                            className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-black/50"
                                            style={{ background: item.color, boxShadow: `0 0 8px ${item.color}80` }}
                                        />
                                        <TimelineCard item={item} index={i} isLeft={true} />
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
}
