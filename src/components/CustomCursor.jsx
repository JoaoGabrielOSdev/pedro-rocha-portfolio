import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 450, damping: 35, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 450, damping: 35, mass: 0.2 });
  const [label, setLabel] = useState('');

  useEffect(() => {
    const move = (event) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target.closest?.('[data-cursor]');
      setLabel(target?.dataset.cursor || '');
    };
    const leave = () => setLabel('');
    window.addEventListener('pointermove', move);
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center md:flex"
      style={{ x: springX, y: springY }}
      animate={{ opacity: label ? 1 : 0, width: label ? 88 : 0, height: label ? 88 : 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
    >
      <span className="flex h-full w-full items-center justify-center rounded-full bg-sky/90 text-[9px] font-bold uppercase tracking-[0.18em] text-ink">
        {label}
      </span>
    </motion.div>
  );
}
