import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!visible) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reducedMotion ? 260 : 1550;
    const timer = window.setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="preloader-shell"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-label="Carregando portfólio de Pedro Rocha"
        >
          <motion.div
            className="preloader-logo-wrap"
            initial={{ opacity: 0, y: 10, scale: 0.96, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/images/logo-pedro-rocha.png"
              alt="Pedro Rocha — editor de vídeo"
              className="preloader-logo"
              initial={{ opacity: 0.2, scale: 1.02, filter: 'brightness(0) invert(1) blur(7px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'brightness(0) invert(1) blur(0px)' }}
              transition={{ duration: 0.78, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
            <span className="preloader-logo-sweep" aria-hidden="true" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
