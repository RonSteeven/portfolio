import { SECTION_IDS } from '@/constants';
import type { HeroData } from '@/types';

export const HERO: HeroData = {
  name: "Hello, I'm Ronaldo",
  title: 'Web Developer',
  roleTags: ['Software Engineer', 'React', 'Node.js', 'TypeScript'],
  ctaPrimary: { label: 'View Projects', sectionId: SECTION_IDS.PROJECTS },
  ctaSecondary: {
    label: 'Download CV',
    href: 'https://drive.google.com/file/d/1oRBJ6X-GGhn11cXpcT9JPqFaTiXJM_GU/view?usp=sharing',
  },
};
