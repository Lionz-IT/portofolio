import { motion } from 'framer-motion';

export default function SectionWrapper({
  children,
  id,
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-5%' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="relative w-full overflow-hidden min-h-screen section-contain bg-theme-bg"
    >
      <div className="relative z-10 w-full h-full flex flex-col justify-center py-20">
        {children}
      </div>
    </motion.section>
  );
}
