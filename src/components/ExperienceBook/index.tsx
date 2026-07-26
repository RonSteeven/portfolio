import { AnimatePresence, useReducedMotion } from 'framer-motion';
import type React from 'react';

import { ExperiencePage } from '@/components/ExperiencePage';
import { useBookPages } from '@/hooks';

import { Button } from '../Button';
import type { ExperienceBookProps } from './types';

export const ExperienceBook = ({ pages }: ExperienceBookProps): React.JSX.Element => {
  const { index, direction, page, total, canPrev, canNext, next, prev, goTo } = useBookPages(
    pages.length
  );
  const reducedMotion = useReducedMotion() ?? false;
  const job = pages[index];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>): void => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      prev();
    }
  };

  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* The open book — one page visible at a time, draggable and clickable. */}
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="Work experience"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative h-[36rem] rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] sm:h-[34rem] md:h-[32rem] lg:h-[30rem]"
      >
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <ExperiencePage
            key={`${job.company}-${job.startDate}`}
            job={job}
            direction={direction}
            reducedMotion={reducedMotion}
            onNext={next}
            onPrev={prev}
          />
        </AnimatePresence>
      </div>

      {/* Controls: arrows + honest page counter. */}
      <div className="mt-6 flex items-center justify-between gap-4">
        <Button
          onClick={prev}
          aria-label="Jump to Previous experience"
          disabled={!canPrev}
        >
          ← Prev
        </Button>

        <div className="flex flex-col items-center gap-1 text-center text-xs text-[var(--color-text)] sm:text-sm">
          <p aria-live="polite" className="text-sm font-medium tabular-nums text-[var(--color-text)]">
            {page} — {total}
          </p>
          {/* Jump-to-page dots. */}
          <div className="flex justify-center gap-2">
            {pages.map((p, i) => (
              <button
                key={`${p.company}-${p.startDate}`}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${p.company}`}
                aria-current={i === index}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === index
                    ? 'bg-[var(--color-accent)]'
                    : 'bg-[var(--color-nav-link)] hover:bg-[var(--color-accent-light)]'
                }`}
              />
            ))}
          </div>
        </div>
        <Button
          onClick={next}
          aria-label="Jump to Next experience"
          disabled={!canNext}
        >
          Next →
        </Button>
      </div>
    </div>
  );
}