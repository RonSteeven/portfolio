import { useInView } from 'framer-motion';
import { useRef } from 'react';

import { ANIMATION, STAGGER_CONTAINER_VARIANTS } from '@/constants';

interface ScrollAnimationOptions {
  once?: boolean;
  threshold?: number;
}

/**
 * Returns a ref and Framer Motion props for scroll-triggered fade-up animations.
 * `motionProps`     — simple fade-up for a single element.
 * `staggerProps`    — parent variant-driven props; pair with FADE_UP_VARIANTS on children
 *                     to cascade list items into view.
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

  const staggerProps = {
    variants: STAGGER_CONTAINER_VARIANTS,
    initial: 'hidden' as const,
    animate: (isInView ? 'visible' : 'hidden') as 'hidden' | 'visible',
  };

  return { ref, motionProps, staggerProps, isInView };
};
