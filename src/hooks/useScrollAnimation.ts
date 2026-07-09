import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ANIMATION } from '../constants';

interface ScrollAnimationOptions {
  once?: boolean;
  threshold?: number;
}

/**
 * Returns a ref and Framer Motion props for scroll-triggered fade-up animations.
 * Keeps animation logic out of section components (Single Responsibility).
 */
export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { once = true, threshold = 0.2 } = options;
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });

  const motionProps = {
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: ANIMATION.DURATION, ease: ANIMATION.EASE },
  };

  return { ref, motionProps, isInView };
};
