import { motion } from 'framer-motion';
import type React from 'react';

import { Card, SectionHeader, Tag } from '@/components';
import { FADE_UP_VARIANTS, SECTION_IDS } from '@/constants';
import { EXPERIENCE } from '@/data';
import { useScrollAnimation } from '@/hooks';

export const Experience = (): React.JSX.Element => {
  const { ref, staggerProps } = useScrollAnimation();

  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div ref={ref} className="w-full max-w-4xl">
        <SectionHeader
          title="Professional Experience"
          subtitle="7+ years shipping production software across startups and agencies."
        />
        <motion.ol
          {...staggerProps}
          className="relative space-y-6 border-l border-[var(--color-border)] pl-8"
        >
          {EXPERIENCE.map(job => {
            const isCurrent = job.endDate === 'Present';
            return (
              <motion.li
                key={`${job.company}-${job.startDate}`}
                variants={FADE_UP_VARIANTS}
                className="relative"
              >
                <span
                  aria-hidden
                  className={`absolute -left-[38px] top-6 h-3 w-3 rounded-full border-2 border-[var(--color-accent)] ${
                    isCurrent ? 'bg-[var(--color-accent)]' : 'bg-[var(--color-bg)]'
                  }`}
                />
                <Card>
                  <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-text-heading)]">
                        {job.role}
                      </h3>
                      <p className="text-sm text-[var(--color-accent-light)]">{job.company}</p>
                    </div>
                    <div className="text-right text-xs text-[var(--color-text)]">
                      <p>
                        {job.startDate} — {job.endDate}
                      </p>
                      <p className="mt-0.5 text-[var(--color-accent-light)]">
                        {job.employmentType}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {job.stack.map(tech => (
                      <Tag key={tech} label={tech} />
                    ))}
                  </div>
                </Card>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </section>
  );
};
