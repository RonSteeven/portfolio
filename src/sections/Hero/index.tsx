import { motion } from 'framer-motion';
import type React from 'react';

import { Button, Tag } from '@/components';
import { ANIMATION, SECTION_IDS } from '@/constants';
import { HERO } from '@/data';

import heroSource from './index.tsx?raw';

const scrollToSection = (sectionId: string): void => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = (): React.JSX.Element => (
  <section
    id={SECTION_IDS.HERO}
    className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[var(--color-bg-hero)] px-6 py-20"
  >
    {/* Source code as decorative background */}
    <pre
      aria-hidden
      className="pointer-events-none absolute inset-0 select-none overflow-hidden whitespace-pre p-8 font-mono text-[10px] leading-relaxed text-[var(--color-nav-link)] opacity-25 sm:text-xs"
    >
      {heroSource}
    </pre>

    <div className="relative z-10 grid w-full max-w-6xl items-center justify-center gap-12 text-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: ANIMATION.DURATION }}
      >
        <h1 className="mb-4 text-4xl font-bold text-[var(--color-text-inverse)] sm:text-5xl lg:text-6xl">
          {HERO.name}
        </h1>
        <h2 className="mb-6 text-2xl text-[var(--color-nav-link)] sm:text-3xl">{HERO.title}</h2>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {HERO.roleTags.map(tag => (
            <Tag key={tag} label={tag} onDark />
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button onDark onClick={() => scrollToSection(HERO.ctaPrimary.sectionId)}>
            {HERO.ctaPrimary.label}
          </Button>
          <Button variant="secondary" onDark href={HERO.ctaSecondary.href}>
            {HERO.ctaSecondary.label}
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
