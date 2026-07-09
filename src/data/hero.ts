import type { HeroData } from '../types';
import { SECTION_IDS } from '../constants';

export const HERO: HeroData = {
  name: 'Ronaldo Monserrate',
  title: 'Fullstack Developer',
  roleTags: ['Software Engineer', 'React', 'Node.js', 'TypeScript'],
  ctaPrimary: { label: 'View Projects', sectionId: SECTION_IDS.PROJECTS },
  ctaSecondary: { label: 'Download CV', href: 'https://drive.google.com/file/d/1big0buHfHiExVdCaHJzqZ72HG2NJaEHS/view?usp=sharing' },
};
