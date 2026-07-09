import type React from 'react';
import { motion } from 'framer-motion';
import { Button, Tag } from '../../components';
import { HERO } from '../../data';
import { SECTION_IDS, ANIMATION } from '../../constants';
import heroImage from '../../assets/hero.png';

const scrollToSection = (sectionId: string): void => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = (): React.JSX.Element => (
  <section
    id={SECTION_IDS.HERO}
    className="flex min-h-screen items-center justify-center px-6 py-20"
  >
    <div className="grid w-full max-w-6xl items-center gap-12 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: ANIMATION.DURATION }}
      >
        <p className="mb-3 text-sm font-medium text-[var(--color-accent-light)]">
          Hi, I&apos;m
        </p>
        <h1 className="mb-4 text-4xl font-bold text-[var(--color-text-heading)] sm:text-5xl lg:text-6xl">
          {HERO.name}
        </h1>
        <h2 className="mb-6 text-2xl text-[var(--color-text)] sm:text-3xl">{HERO.title}</h2>

        <div className="mb-8 flex flex-wrap gap-2">
          {HERO.roleTags.map(tag => (
            <Tag key={tag} label={tag} />
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Button onClick={() => scrollToSection(HERO.ctaPrimary.sectionId)}>
            {HERO.ctaPrimary.label}
          </Button>
          <Button variant="secondary" href={HERO.ctaSecondary.href}>
            {HERO.ctaSecondary.label}
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: ANIMATION.DURATION, delay: 0.2 }}
        className="flex justify-center md:justify-end"
      >
        <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-[var(--color-accent)] sm:h-80 sm:w-80">
          <img src={heroImage} alt={HERO.name} className="h-full w-full object-cover" />
        </div>
      </motion.div>
    </div>
  </section>
);
