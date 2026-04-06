import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const SOCIALS = [
    {
        id: 'github',
        label: 'GitHub',
        handle: '@rafifahmad',
        href: 'https://github.com/rafifahmad',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.507.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
        color: '#ffffff',
    },
    {
        id: 'linkedin',
        label: 'LinkedIn',
        handle: 'Rafif Ahmad Y.',
        href: 'https://linkedin.com/in/rafifahmad',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
        ),
        color: '#0A66C2',
    },
    {
        id: 'instagram',
        label: 'Instagram',
        handle: '@rafif.dev',
        href: 'https://instagram.com/rafif.dev',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
            </svg>
        ),
        color: '#E1306C',
    },
    {
        id: 'dribbble',
        label: 'Dribbble',
        handle: 'rafifahmad',
        href: 'https://dribbble.com/rafifahmad',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308a10.29 10.29 0 0 0 4.392-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4a10.161 10.161 0 0 0 6.29 2.166 10.44 10.44 0 0 0 4.006-.816zM4.92 19.07c.25-.433 3.057-5.257 8.38-6.bits.34-.114.69-.216 1.048-.3-1.098-1.98-2.28-3.65-2.456-3.892-3.177.994-6.16 1.34-6.972 1.36-.01.08-.01.16-.01.24 0 3.31 1.23 6.34 3.25 8.637zM3.12 12.3h.3c.858-.01 4.23-.132 7.116-1.013-.195-.36-.394-.71-.6-1.044-3.655 1.05-7.215 1.014-7.35 1.01-.01.01-.01.02-.01.033 0 .35.02.702.065 1.055zM3.66 8.51c.142.005 4.25.075 7.63-1.048A38.597 38.597 0 0 0 7.8 3.47a10.15 10.15 0 0 0-4.14 5.04zm6.14-5.95a38.62 38.62 0 0 1 3.532 4.06c2.16-.81 4.07-1.995 4.85-2.51A10.21 10.21 0 0 0 9.8 2.56zm9.5 3.41c-.828.564-2.86 1.854-5.185 2.775.164.338.322.68.473 1.025 2.055-.25 4.122.118 4.39.18a10.125 10.125 0 0 0-.678-3.98z" />
            </svg>
        ),
        color: '#EA4C89',
    },
];

function SocialCard({ social, index }) {
    const [hovered, setHovered] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <motion.a
            ref={ref}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 + index * 0.07, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            data-hover
            className="group relative flex items-center justify-between p-4 rounded-2xl border border-theme-border bg-theme-surface hover:border-transparent transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:-z-10 before:-m-[1px] before:rounded-2xl before:bg-gradient-to-r before:from-[var(--primary)] before:to-[var(--accent)] before:opacity-0 hover:before:opacity-100"
        >
            <motion.span
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ background: `radial-gradient(ellipse at left center, rgba(var(--primary-rgb), 0.15) 0%, rgba(var(--accent-rgb), 0.08) 70%, transparent 100%)` }}
            />

            <div className="flex items-center gap-3 relative z-10">
                <motion.div
                    animate={{ color: hovered ? social.color : 'var(--color-muted)' }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 flex items-center justify-center"
                >
                    {social.icon}
                </motion.div>
                <div>
                    <p className="text-sm font-bold text-theme-text leading-none font-sans">{social.label}</p>
                    <p className="text-xs text-theme-muted mt-0.5 tracking-wide font-sans">{social.handle}</p>
                </div>
            </div>

            <motion.span
                animate={{ x: hovered ? 0 : 4, opacity: hovered ? 1 : 0.3 }}
                transition={{ duration: 0.3 }}
                className={`text-sm relative z-10 ${hovered ? 'surreal-gradient-text' : 'text-theme-muted'}`}
            >
                →
            </motion.span>
        </motion.a>
    );
}

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10%' });
    const [copied, setCopied] = useState(false);

    const EMAIL = 'rafif@example.com';

    const handleCopy = () => {
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="relative mt-0 pt-8 pb-6 md:pt-12 md:pb-8 overflow-hidden">

            <div ref={ref} className="relative z-10">

                <div className="text-center mb-14">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="section-badge block mb-6"
                    >
                        05 / Let's Connect
                    </motion.span>

                    <div className="overflow-hidden mb-4">
                        <motion.h2
                            initial={{ y: '110%' }}
                            animate={inView ? { y: '0%' } : {}}
                            transition={{ delay: 0.1, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl sm:text-7xl md:text-[7vw] font-bold tracking-[-0.04em] leading-none text-theme-text font-display"
                        >
                            Let's Build
                        </motion.h2>
                    </div>
                    <div className="overflow-hidden mb-10">
                        <motion.h2
                            initial={{ y: '110%' }}
                            animate={inView ? { y: '0%' } : {}}
                            transition={{ delay: 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="text-6xl sm:text-7xl md:text-[7vw] font-bold italic tracking-[-0.04em] leading-none surreal-gradient-text font-display"
                        >
                            Something Great.
                        </motion.h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.35, duration: 0.7 }}
                        className="text-sm text-theme-muted max-w-xs mx-auto leading-relaxed mb-10 font-sans"
                    >
                        Open to freelance projects, collaborations, and full-time opportunities.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.45, duration: 0.7 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <a
                            href={`mailto:${EMAIL}`}
                            className="group relative inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] px-8 py-4 text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_25px_var(--glow-gold)] font-sans"
                            style={{ background: 'var(--gradient-surreal)' }}
                            data-hover
                        >
                            <span className="relative z-10">Send Email</span>
                            <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                        </a>

                        <button
                            onClick={handleCopy}
                            className="group surreal-pill inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] px-8 py-4 border border-transparent hover:border-transparent text-theme-muted hover:text-theme-text font-bold rounded-full transition-all duration-500 relative before:absolute before:inset-0 before:-z-10 before:-m-[1px] before:rounded-full before:bg-gradient-to-r before:from-[var(--primary)] before:to-[var(--accent)] before:opacity-0 hover:before:opacity-100 font-sans"
                            data-hover
                        >
                            <AnimatePresence mode="wait" initial={false}>
                                {copied ? (
                                    <motion.span
                                        key="copied"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                        className="surreal-gradient-text"
                                    >
                                        ✓ Copied!
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="copy"
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -6 }}
                                    >
                                        Copy Email
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>

                        <a
                            href="/resume.pdf"
                            download
                            className="group surreal-pill inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] px-8 py-4 border border-transparent hover:border-transparent text-theme-muted hover:text-theme-text font-bold rounded-full transition-all duration-500 relative before:absolute before:inset-0 before:-z-10 before:-m-[1px] before:rounded-full before:bg-gradient-to-r before:from-[var(--primary)] before:to-[var(--primary)] before:opacity-0 hover:before:opacity-100 font-sans"
                            data-hover
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-0.5 transition-transform duration-300">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download CV
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.7 }}
                    className="max-w-2xl mx-auto mb-12 px-6 md:px-0"
                >
                    <p className="section-badge text-center mb-6 mx-auto w-fit">Find me on</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SOCIALS.map((s, i) => (
                            <SocialCard key={s.id} social={s} index={i} />
                        ))}
                    </div>
                </motion.div>

                <div className="border-t border-theme-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 px-6 md:px-0">
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.65, duration: 0.6 }}
                        className="text-base font-bold tracking-[-0.04em] text-theme-muted hover:text-theme-text transition-colors duration-500 font-display italic"
                        data-hover
                    >
                        Lionz<span className="text-[var(--accent)] hover:drop-shadow-[0_0_8px_var(--accent)] transition-all duration-300">-IT</span>
                    </motion.a>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="text-xs uppercase tracking-[0.4em] text-theme-muted font-bold font-sans"
                    >
                        © 2026 Rafif Ahmad · Crafted with precision
                    </motion.p>

                    <motion.a
                        href="#home"
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.75, duration: 0.6 }}
                        className="text-xs uppercase tracking-[0.2em] text-theme-muted hover:text-[var(--primary)] hover:drop-shadow-[0_0_8px_var(--primary)] transition-all duration-300 font-bold font-sans"
                        data-hover
                    >
                        Back to top ↑
                    </motion.a>
                </div>
            </div>
        </footer>
    );
}
