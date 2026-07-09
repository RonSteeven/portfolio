import type React from 'react';
import { motion } from 'framer-motion';
import { Card, IconLink, SectionHeader, Tag } from '../../components';
import { PROJECTS } from '../../data';
import { FADE_UP_VARIANTS, SECTION_IDS } from '../../constants';
import { useScrollAnimation } from '../../hooks';

export const Projects = (): React.JSX.Element => {
  const { ref, staggerProps } = useScrollAnimation();

  return (
    <section
      id={SECTION_IDS.PROJECTS}
      className="flex min-h-screen items-center justify-center px-6 py-20"
    >
      <div ref={ref} className="w-full max-w-6xl">
        <SectionHeader
          title="Projects"
          subtitle="Selected work from the last few years."
        />
        <motion.div
          {...staggerProps}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map(project => (
            <motion.div
              key={project.title}
              variants={FADE_UP_VARIANTS}
              className="h-full"
            >
              <Card className="flex h-full flex-col">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-heading)]">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[var(--color-accent-light)]">{project.company}</p>
                  </div>
                  {project.liveUrl && (
                    <IconLink icon="↗" href={project.liveUrl} external />
                  )}
                </div>
                <p className="mb-4 flex-1 text-sm text-[var(--color-text)]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Tag key={tag} label={tag} />
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
