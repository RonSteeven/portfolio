import { motion } from 'framer-motion';
import type React from 'react';
import { useRef } from 'react';

import { Tag } from '@/components/Tag';
import { BOOK } from '@/constants';

import type { ExperiencePageProps } from './types';

const FLIP_EASE = [0.33, 0, 0.2, 1] as const;

/**
 * 3D page-turn. Pages rotate around their left edge (the spine). Because the
 * back face is hidden, the turning page vanishes as it passes 90°, revealing
 * the page stacked beneath it.
 *  - forward: the current page peels away to the left (0 → -180°) on top,
 *    while the next page waits flat beneath it.
 *  - back: the previous page drops back in from the left (-180 → 0°) on top,
 *    while the current page sits flat beneath it.
 */
const motionVariants = {
  enter: (direction: number) => ({
    rotateY: direction >= 0 ? 0 : -180,
    zIndex: direction >= 0 ? 10 : 30,
  }),
  center: {
    rotateY: 0,
    zIndex: 20,
    transition: { duration: BOOK.FLIP_DURATION, ease: FLIP_EASE },
  },
  exit: (direction: number) => ({
    rotateY: direction >= 0 ? -180 : 0,
    zIndex: direction >= 0 ? 30 : 10,
    transition: { duration: BOOK.FLIP_DURATION, ease: FLIP_EASE },
  }),
};

/** Darkens the turning page so it reads as catching light as it lifts. */
const shadeVariants = {
  enter: (direction: number) => ({ opacity: direction >= 0 ? 0 : 0.45 }),
  center: { opacity: 0, transition: { duration: BOOK.FLIP_DURATION, ease: FLIP_EASE } },
  exit: (direction: number) => ({
    opacity: direction >= 0 ? 0.45 : 0,
    transition: { duration: BOOK.FLIP_DURATION, ease: FLIP_EASE },
  }),
};

const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: BOOK.FLIP_DURATION } },
  exit: { opacity: 0, transition: { duration: BOOK.FLIP_DURATION } },
};

export const ExperiencePage = ({
  job,
  direction,
  reducedMotion,
  onNext,
  onPrev,
}: ExperiencePageProps): React.JSX.Element => {
  // Set on drag end so the click event framer fires afterwards can be ignored.
  const didDrag = useRef(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (didDrag.current) {
      didDrag.current = false;
      return;
    }
    const rect = event.currentTarget.getBoundingClientRect();
    const clickedRightHalf = event.clientX - rect.left > rect.width / 2;
    if (clickedRightHalf) onNext();
    else onPrev();
  };

  return (
    <motion.div
      key={`${job.company}-${job.startDate}`}
      custom={direction}
      variants={reducedMotion ? fadeVariants : motionVariants}
      initial="enter"
      animate="center"
      exit="exit"
      dragElastic={BOOK.DRAG_ELASTIC}
      dragConstraints={{ left: 0, right: 0 }}
      onClick={handleClick}
      style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
      className="absolute inset-0 flex cursor-grab select-none flex-col overflow-hidden rounded-r-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-2xl [backface-visibility:visible] active:cursor-grabbing"
    >
      {/* Lighting overlay — darkens the page as it turns. */}
      {!reducedMotion && (
        <motion.div
          aria-hidden
          variants={shadeVariants}
          className="pointer-events-none absolute inset-0 z-10 rounded-xl bg-gradient-to-l from-black/60 to-transparent"
        />
      )}

      {/* Fixed header */}
      <div className="flex-shrink-0 px-4 py-2 sm:px-4 sm:py-4">
        <div className="flex items-baseline justify-between gap-x-4 gap-y-1">
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-text-heading)]">{job.role}</h3>
            <p className="text-sm text-[var(--color-accent-light)]">{job.company}</p>
          </div>
          <div className="text-right text-xs text-[var(--color-text)]">
            <p>
              {job.startDate} — {job.endDate}
            </p>
            <p className="mt-0.5 text-[var(--color-accent-light)]">{job.employmentType}</p>
            {job.location && <p className="mt-0.5">{job.location}</p>}
          </div>
        </div>
      </div>

      {/* Scrollable content — dir="rtl" moves the scrollbar to the left (spine
          side); the inner list is reset to dir="ltr" so text reads normally. */}
      <div dir="ltr" className="flex-1 overflow-y-auto px-4 py-2 sm:px-4 sm:py-4">
        {job.highlights && job.highlights.length > 0 && (
          <ul dir="ltr" className="list-disc space-y-1.5 pl-5 text-sm text-[var(--color-text)]">
            {job.highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Fixed tags footer */}
      <div className="flex-shrink-0 px-4 py-2 sm:px-4 sm:py-4">
        <div className="flex flex-wrap gap-2">
          {job.stack.map(tech => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
