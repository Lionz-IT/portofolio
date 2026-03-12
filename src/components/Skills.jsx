import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ─── Data ──────────────────────────────────────────────────────────────────────
const SKILL_CATEGORIES = [
    {
        id: 'frontend',
        label: 'Front-End',
        icon: '⬡',
        color: '#007AFF',
        skills: [
            { name: 'React', level: 92 },
            { name: 'Next.js', level: 85 },
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Framer Motion', level: 80 },
            { name: 'TypeScript', level: 75 },
        ],
    },
    {
        id: 'gamedev',
        label: 'Game Dev',
        icon: '◈',
        color: '#5856D6',
        skills: [
            { name: 'Unity', level: 88 },
            { name: 'C#', level: 82 },
            { name: 'Blender', level: 70 },
            { name: 'Shader Graph', level: 65 },
            { name: 'Game Design', level: 78 },
        ],
    },
    {
        id: 'design',
        label: 'Design',
        icon: '◎',
        color: '#FF9F0A',
        skills: [
            { name: 'Figma', level: 85 },
            { name: 'UI/UX Design', level: 80 },
            { name: 'Prototyping', level: 78 },
            { name: 'Motion Design', level: 72 },
        ],
    },
    {
        id: 'tools',
        label: 'Tools & Infra',
        icon: '⬢',
        color: '#34C759',
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Vite', level: 85 },
            { name: 'VS Code', level: 95 },
            { name: 'Vercel', level: 80 },
            { name: 'npm / yarn', level: 88 },
        ],
    },
];

// Featured tech logos shown in the large bento card
const TECH_BADGES = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#ffffff' },
    { name: 'Unity', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg', color: '#ffffff' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', color: '#F24E1E' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#38BDF8' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6' },
    { name: 'Blender', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg', color: '#EA7600' },
    { name: 'Framer', logo: 'https://cdn.simpleicons.org/framer/0055FF', color: '#0055FF' },
];

// ─── Sub-components ─────────────────────────────────────────────────────────────
function SkillBar({ name, level, color, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="group">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-xs uppercase tracking-[0.15em] font-medium text-theme-muted group-hover:text-theme-text transition-colors duration-300">
                    {name}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.06, duration: 0.4 }}
                    className="text-xs font-mono tabular-nums"
                    style={{ color }}
                >
                    {level}%
                </motion.span>
            </div>
            <div className="h-[1px] bg-theme-border-subtle rounded-full overflow-hidden">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{
                        delay: 0.2 + index * 0.06,
                        duration: 1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full origin-left rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${color}CC, ${color}40)`,
                        width: `${level}%`,
                        boxShadow: `0 0 6px ${color}60`,
                    }}
                />
            </div>
        </div>
    );
}

function CategoryCard({ cat, isActive, onClick }) {
    return (
        <motion.button
            onClick={onClick}
            className={`relative px-4 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold rounded-full border overflow-hidden ${isActive
                ? 'text-theme-text border-transparent'
                : 'text-theme-muted border-theme-border hover:border-theme-border-hover'
                }`}
            whileTap={{ scale: 0.95 }}
            data-hover
        >
            {isActive && (
                <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}55` }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
            )}
            <span className="relative z-10" style={isActive ? { color: cat.color } : {}}>
                {cat.icon} {cat.label}
            </span>
        </motion.button>
    );
}

function TechBadge({ badge, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.05 * index, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.08, y: -3 }}
            className="group relative flex flex-col items-center gap-2 p-3 rounded-xl border border-theme-border bg-theme-surface hover:border-primary/40 transition-all duration-400 cursor-default"
            style={{ '--badge-color': badge.color }}
            data-hover
        >
            <div className="w-8 h-8 flex items-center justify-center">
                <img
                    src={badge.logo}
                    alt={badge.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    style={{
                        filter: badge.name === 'Next.js' || badge.name === 'Unity'
                            ? 'invert(1)'
                            : 'none',
                    }}
                />
            </div>
            <span className="text-[11px] uppercase tracking-[0.15em] text-theme-muted group-hover:text-theme-text transition-colors duration-300">
                {badge.name}
            </span>
            {/* Hover glow */}
            <motion.span
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at center, ${badge.color}15 0%, transparent 70%)` }}
            />
        </motion.div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────────
export default function Skills() {
    const [activeId, setActiveId] = useState('frontend');
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true });

    const activeCat = SKILL_CATEGORIES.find((c) => c.id === activeId);

    return (
        <section id="skills" className="relative pt-16 pb-16 md:pt-20 md:pb-20 overflow-hidden">

            {/* — Section header — */}
            <div ref={headerRef} className="flex items-end justify-between mb-16 gap-8">
                <div>
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={headerInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="section-badge block mb-4"
                    >
                        03 / Skills & Tech Stack
                    </motion.span>
                    <div className="overflow-hidden">
                        <motion.h2
                            initial={{ y: '110%' }}
                            animate={headerInView ? { y: '0%' } : {}}
                            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl font-black tracking-[-0.04em] leading-none text-theme-text"
                        >
                            Expertise
                        </motion.h2>
                    </div>
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={headerInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="hidden md:block text-right text-xs text-theme-muted max-w-[180px] leading-relaxed"
                >
                    Full-stack creative with a passion for pixel-perfect code.
                </motion.p>
            </div>

            {/* ─── Bento Grid ─────────────────────────────────────────────────────── */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                {/* ── Card 1: Category tabs + skill bars (2 cols wide) ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-2 bento-card group relative overflow-hidden"
                >
                    {/* Ambient glow */}
                    <div
                        className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 pointer-events-none transition-all duration-700"
                        style={{ background: activeCat.color }}
                    />

                    {/* Tabs */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {SKILL_CATEGORIES.map((cat) => (
                            <CategoryCard
                                key={cat.id}
                                cat={cat}
                                isActive={cat.id === activeId}
                                onClick={() => setActiveId(cat.id)}
                            />
                        ))}
                    </div>

                    {/* Skill bars */}
                    <motion.div
                        key={activeId}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col gap-5"
                    >
                        {activeCat.skills.map((s, i) => (
                            <SkillBar
                                key={s.name}
                                name={s.name}
                                level={s.level}
                                color={activeCat.color}
                                index={i}
                            />
                        ))}
                    </motion.div>

                    {/* Corner accent */}
                    <span className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-primary/30" />
                </motion.div>

                {/* ── Card 2: Stat pills ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="bento-card flex flex-col justify-between"
                >
                    <div className="mb-6">
                        <p className="section-badge mb-3">Snapshot</p>
                        <p className="text-2xl font-black tracking-tight text-theme-text leading-snug">
                            Building since<br />
                            <span className="text-primary">2022</span>
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { val: '20+', label: 'Projects' },
                            { val: '3+', label: 'Years' },
                            { val: '4', label: 'Domains' },
                            { val: '∞', label: 'Curiosity' },
                        ].map(({ val, label }, i) => (
                            <div
                                key={label}
                                className="p-3 rounded-xl border border-theme-border bg-theme-surface-hover flex flex-col gap-0.5"
                            >
                                <span className="text-2xl font-black tracking-[-0.04em] text-theme-text">{val}</span>
                                <span className="text-[11px] uppercase tracking-[0.2em] text-theme-muted">{label}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-theme-border">
                        <p className="text-xs uppercase tracking-[0.2em] text-theme-muted mb-2">Primary stack</p>
                        <div className="flex flex-wrap gap-1.5">
                            {['React', 'Unity', 'Figma', 'Next.js'].map((t) => (
                                <span
                                    key={t}
                                    className="px-2.5 py-1 rounded-full text-[11px] uppercase tracking-[0.15em] bg-primary/10 text-primary border border-primary/20 font-semibold"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* ── Card 3: Tech badges grid (full width) ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-5%' }}
                    transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="lg:col-span-3 bento-card relative overflow-hidden"
                >
                    <div className="flex items-center justify-between mb-6">
                        <p className="section-badge">Technologies</p>
                        <p className="text-[10px] text-theme-muted uppercase tracking-[0.18em]">Hover to explore</p>
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                        {TECH_BADGES.map((badge, i) => (
                            <TechBadge key={badge.name} badge={badge} index={i} />
                        ))}
                    </div>

                    {/* Decorative gradient line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                </motion.div>

            </div>
        </section>
    );
}
