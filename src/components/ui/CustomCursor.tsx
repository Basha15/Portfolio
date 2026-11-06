import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

const interactiveSelector = 'a, button, [role="button"], [tabindex]:not([tabindex="-1"])';
const textInputSelector = 'input, textarea, select, [contenteditable="true"]';

export const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const previousInteractive = useRef<Element | null>(null);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 700, damping: 45, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 700, damping: 45, mass: 0.35 });

  useEffect(() => {
    const pointerQuery = window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)');
    if (!pointerQuery.matches) return;

    const root = document.documentElement;
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return;

      const target = event.target instanceof Element ? event.target : null;
      if (target?.closest(textInputSelector)) {
        setVisible(false);
        root.classList.remove('custom-cursor-enabled');
        return;
      }

      x.set(event.clientX);
      y.set(event.clientY);
      setVisible(true);
      root.classList.add('custom-cursor-enabled');

      const interactive = target?.closest(interactiveSelector) ?? null;
      if (interactive !== previousInteractive.current) {
        previousInteractive.current = interactive;
        setIsHoveringInteractive(Boolean(interactive));
      }
    };

    const handlePointerLeave = () => {
      setVisible(false);
      root.classList.remove('custom-cursor-enabled');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('pointerleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerleave', handlePointerLeave);
      root.classList.remove('custom-cursor-enabled');
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-9 w-9 items-center justify-center rounded-full border border-accent-lime/80 bg-accent-lime/10 md:flex"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: isHoveringInteractive ? 1.5 : 1,
      }}
      transition={{ opacity: { duration: 0.15 }, scale: { type: 'spring', stiffness: 320, damping: 22 } }}
    >
      <motion.span
        className="h-1.5 w-1.5 rounded-full bg-accent-lime shadow-[0_0_10px_rgba(184,243,74,0.8)]"
        animate={{ scale: isHoveringInteractive ? 0.65 : 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      />
    </motion.div>
  );
};
