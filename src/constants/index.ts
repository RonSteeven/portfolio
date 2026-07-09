import type { NavLink } from '../types';

// ─── Section IDs ──────────────────────────────────────────────────────────────
// Used by NavLinks and smooth-scroll anchors. Single source — no magic strings.

export const SECTION_IDS = {
  HERO: 'hero',
  ABOUT: 'about',
  EXPERIENCE: 'experience',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

// ─── Animation Config ─────────────────────────────────────────────────────────

export const ANIMATION = {
  DURATION: 0.5,
  DELAY_STEP: 0.1, // stagger delay between items
  EASE: [0.25, 0.1, 0.25, 1] as const,
} as const;

export const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
} as const;

// ─── Navigation Links ─────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', sectionId: SECTION_IDS.HERO },
  { label: 'About', sectionId: SECTION_IDS.ABOUT },
  { label: 'Experience', sectionId: SECTION_IDS.EXPERIENCE },
  { label: 'Skills', sectionId: SECTION_IDS.SKILLS },
  { label: 'Projects', sectionId: SECTION_IDS.PROJECTS },
  { label: 'Contact', sectionId: SECTION_IDS.CONTACT },
];
