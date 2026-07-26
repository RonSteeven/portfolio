import { motion, type PanInfo } from 'framer-motion';
import type React from 'react';
import { useRef } from 'react';

import { Tag } from '@/components/Tag';
import { BOOK } from '@/constants';

import type { ExperiencePageProps } from './types';

const motionVariants = {
  enter: (direction: number) => ({
    x: direction >= 0 ? BOOK.PAGE_OFFSET : -BOOK.PAGE_OFFSET,
    rotate: direction >= 0 ? BOOK.MAX_ROTATE : -BOOK.MAX_ROTATE,
    opacity: 0,
  }),
  center: {
    x: 0,
    rotate: 0,
    opacity: 1,
    transition: { duration: BOOK.FLIP_DURATION },
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? -BOOK.PAGE_OFFSET : BOOK.PAGE_OFFSET,
    rotate: direction >= 0 ? -BOOK.MAX_ROTATE : BOOK.MAX_ROTATE,
    opacity: 0,
    transition: { duration: BOOK.FLIP_DURATION },
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

  const handleDragEnd = (_event: unknown, info: PanInfo): void => {
    const { offset, velocity } = info;
    didDrag.current = Math.abs(offset.x) > BOOK.CLICK_SLOP;

    const flipForward =
      offset.x < -BOOK.DRAG_THRESHOLD || velocity.x < -BOOK.FLICK_VELOCITY;
    const flipBack = offset.x > BOOK.DRAG_THRESHOLD || velocity.x > BOOK.FLICK_VELOCITY;

    if (flipForward) onNext();
    else if (flipBack) onPrev();
  };

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
      drag={reducedMotion ? false : 'x'}
      dragSnapToOrigin
      dragElastic={BOOK.DRAG_ELASTIC}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      onClick={handleClick}
      className="absolute inset-0 flex cursor-grab select-none flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] shadow-lg active:cursor-grabbing"
    >
      {/* Fixed header */}
      <div className="flex-shrink-0 border-b border-[var(--color-border-light)] px-6 py-4 sm:px-8 sm:py-6">
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

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 sm:px-8 sm:py-6">
        {job.highlights && job.highlights.length > 0 && (
          <ul className="list-disc space-y-1.5 pl-5 text-sm text-[var(--color-text)]">
            {job.highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Fixed tags footer */}
      <div className="flex-shrink-0 border-t border-[var(--color-border-light)] px-6 py-4 sm:px-8 sm:py-6">
        <div className="flex flex-wrap gap-2">
          {job.stack.map(tech => (
            <Tag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
