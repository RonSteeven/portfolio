import { motion } from 'framer-motion';
import type React from 'react';

import { ExperienceBook, SectionHeader } from '@/components';
import { SECTION_IDS } from '@/constants';
import { EXPERIENCE } from '@/data';
import { useScrollAnimation } from '@/hooks';

export const Experience = (): React.JSX.Element => {
  const { ref, motionProps } = useScrollAnimation();

  return (
    <section
      id={SECTION_IDS.EXPERIENCE}
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <motion.div ref={ref} {...motionProps} className="w-full max-w-4xl">
        <SectionHeader
          title="Professional Experience"
          subtitle="Drag the pages, click a side, or use the arrows to flip through where I've worked."
        />
        <ExperienceBook pages={EXPERIENCE} />
      </motion.div>
    </section>
  );
};
