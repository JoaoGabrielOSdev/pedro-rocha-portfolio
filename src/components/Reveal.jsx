import { motion, useReducedMotion } from 'framer-motion';

const directions = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: -30 },
  right: { x: 30 },
};

export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.78,
  ...props
}) {
  const prefersReducedMotion = useReducedMotion();
  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, filter: 'blur(8px)', ...offset }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -64px' }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: duration + 0.08, delay, ease: [0.22, 1, 0.36, 1] }
      }
      {...props}
    >
      {children}
    </motion.div>
  );
}
