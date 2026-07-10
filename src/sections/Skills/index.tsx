import { motion } from 'framer-motion';
import type React from 'react';

import { Card, SectionHeader, Tag } from '@/components';
import { FADE_UP_VARIANTS, SECTION_IDS } from '@/constants';
import { SKILLS } from '@/data';
import { useScrollAnimation } from '@/hooks';

export const Skills = (): React.JSX.Element => {
  const { ref, staggerProps } = useScrollAnimation();

  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div ref={ref} className="w-full max-w-6xl">
        <SectionHeader title="Skills" subtitle="Technologies and tools I work with day to day." />
        <motion.div {...staggerProps} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map(category => (
            <motion.div key={category.title} variants={FADE_UP_VARIANTS}>
              <Card>
                <div className="flex gap-4 items-start">
                  <div className="mb-3 text-2xl">{category.icon}</div>
                  <h3 className="mb-4 text-lg font-semibold text-[var(--color-text-heading)]">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <Tag key={skill} label={skill} />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
