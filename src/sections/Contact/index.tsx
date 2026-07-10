import { motion } from 'framer-motion';
import type React from 'react';

import { Card, SectionHeader } from '@/components';
import { FADE_UP_VARIANTS, SECTION_IDS } from '@/constants';
import { CONTACT_LINKS, LOCATION } from '@/data';
import { useScrollAnimation } from '@/hooks';

export const Contact = (): React.JSX.Element => {
  const { ref, staggerProps } = useScrollAnimation();

  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-6 py-20"
    >
      <div ref={ref} className="w-full max-w-4xl">
        <SectionHeader
          title="Get in Touch"
          subtitle={`Based in ${LOCATION} — open to remote work worldwide.`}
        />
        <motion.div {...staggerProps} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_LINKS.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              variants={FADE_UP_VARIANTS}
              {...(link.isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
              className="block"
            >
              <Card className="text-center transition-colors hover:border-[var(--color-accent)]">
                <div className="mb-2 text-3xl">{link.icon}</div>
                <h3 className="mb-1 text-sm font-semibold text-[var(--color-text-heading)]">
                  {link.label}
                </h3>
                <p className="text-xs break-all text-[var(--color-text)]">{link.value}</p>
              </Card>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
