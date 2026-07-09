import type React from 'react';
import { motion } from 'framer-motion';
import { Card, SectionHeader } from '../../components';
import { BIO, ROLE_CARDS } from '../../data';
import { SECTION_IDS } from '../../constants';
import { useScrollAnimation } from '../../hooks';

export const About = (): React.JSX.Element => {
  const { ref, motionProps } = useScrollAnimation();

  return (
    <section
      id={SECTION_IDS.ABOUT}
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div ref={ref} className="w-full max-w-6xl">
        <SectionHeader title="About Me" />
        <motion.div {...motionProps} className="grid gap-8 md:grid-cols-2">
          <p className="whitespace-pre-line text-base leading-relaxed text-[var(--color-text)]">
            {BIO}
          </p>
          <div className="grid gap-4">
            {ROLE_CARDS.map(card => (
              <Card key={card.title}>
                <div className="flex gap-4 items-center">
                  <div className="mb-2 text-2xl">{card.icon}</div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-[var(--color-text-heading)]">
                      {card.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text)]">{card.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
