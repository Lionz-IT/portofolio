import { motion } from 'framer-motion';

export default function SectionWrapper({ children, id, video }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full overflow-hidden min-h-screen"
    >
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden mix-blend-soft-light">
        <span className="absolute top-[20%] right-[10%] text-primary/5 text-8xl font-display animate-surreal-rotate">◉</span>
        <span className="absolute bottom-[20%] left-[10%] text-accent/5 text-9xl font-display animate-surreal-float">◊</span>
      </div>

      {video && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <video
            className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0" style={{ background: 'rgba(var(--color-bg-rgb), 0.8)' }} />
        </div>
      )}

      <div className="relative z-10 w-full h-full flex flex-col justify-center py-20">
        {children}
      </div>
    </motion.section>
  );
}
