import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('enter');
  const cbRef = useRef(onComplete);
  cbRef.current = onComplete;

  const finish = useCallback(() => {
    setPhase('done');
    document.body.style.overflow = '';
    cbRef.current?.();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timers = [
      setTimeout(() => setPhase('name'), 400),
      setTimeout(() => setPhase('slash'), 2400),
      setTimeout(() => setPhase('split'), 2800),
      setTimeout(finish, 3800),
    ];

    return () => {
      timers.forEach(clearTimeout);
      document.body.style.overflow = '';
    };
  }, [finish]);

  if (phase === 'done') return null;

  const showName = phase === 'name' || phase === 'slash';
  const slashing = phase === 'slash' || phase === 'split';
  const splitting = phase === 'split';

  return (
    <div
      className="fixed inset-0 z-[99999] cursor-pointer"
      onClick={finish}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'var(--color-bg)' }}
        animate={{
          clipPath: splitting
            ? 'polygon(0 0, 100% 0, 0 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          x: splitting ? '-105%' : 0,
          y: splitting ? '-30%' : 0,
        }}
        transition={{
          clipPath: { duration: 0.01 },
          x: { delay: 0.15, duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          y: { delay: 0.15, duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        }}
      />

      <motion.div
        className="absolute inset-0 z-0"
        style={{ backgroundColor: 'var(--color-bg)' }}
        animate={{
          clipPath: splitting
            ? 'polygon(100% 0, 100% 0, 100% 100%, 0 100%)'
            : 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          x: splitting ? '105%' : 0,
          y: splitting ? '30%' : 0,
        }}
        transition={{
          clipPath: { duration: 0.01 },
          x: { delay: 0.15, duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          y: { delay: 0.15, duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        }}
      />

      <AnimatePresence>
        {slashing && (
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="absolute"
              style={{
                top: '-10%',
                right: '-10%',
                width: '180%',
                height: 4,
                background: 'linear-gradient(90deg, transparent 0%, #E8C580 10%, #fff 50%, #E8C580 90%, transparent 100%)',
                boxShadow: '0 0 30px 6px rgba(232,197,128,0.9), 0 0 80px 12px rgba(212,160,83,0.5)',
                transformOrigin: 'top right',
                rotate: '33deg',
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: [0, 1, 1, 0.7] }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />

            <motion.div
              className="absolute"
              style={{
                top: '-10%',
                right: '-10%',
                width: '180%',
                height: 1,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 30%, #fff 50%, rgba(255,255,255,0.8) 70%, transparent 100%)',
                transformOrigin: 'top right',
                rotate: '33deg',
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.25, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {slashing && !splitting && (
          <motion.div
            className="absolute inset-0 z-15 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            style={{ backgroundColor: '#E8C580' }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
        animate={{ opacity: splitting ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(var(--primary-rgb), 0.06) 0%, transparent 70%)',
          }}
        />

        <AnimatePresence>
          {showName && (
            <motion.div
              className="relative z-20 text-center"
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.12 }}
            >
              <div className="overflow-hidden">
                <motion.p
                  className="text-[10px] uppercase tracking-[0.5em] text-theme-muted font-sans font-medium mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.5, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  ◊ Portfolio ◊
                </motion.p>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  className="text-6xl md:text-8xl font-display font-bold tracking-[-0.03em] leading-[0.88] surreal-gradient-text"
                  initial={{ y: '120%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  RAFIF
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-6xl md:text-8xl font-display font-bold italic tracking-[-0.03em] leading-[0.88] surreal-gradient-text"
                  initial={{ y: '120%' }}
                  animate={{ y: '0%' }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                  AHMAD Y.
                </motion.h1>
              </div>

              <motion.div
                className="mx-auto mt-6 h-[1px] rounded-full"
                style={{
                  background: 'var(--gradient-surreal)',
                  boxShadow: '0 0 10px var(--glow-gold)',
                }}
                initial={{ width: 0 }}
                animate={{ width: 60 }}
                transition={{ delay: 0.8, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
