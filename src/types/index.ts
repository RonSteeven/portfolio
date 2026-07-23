// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  sectionId: string;
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HeroData {
  greeting: string;
  name: string;
  lastName: string;
  title: string;
  roleTags: string[];
  ctaPrimary: { label: string; sectionId: string };
  ctaSecondary: { label: string; href: string };
}

// ─── Skills ───────────────────────────────────────────────────────────────────

export interface SkillCategory {
  title: string;
  icon: string; // emoji or icon name
  skills: string[];
}

// ─── About ────────────────────────────────────────────────────────────────────

export interface RoleCard {
  title: string;
  description: string;
  icon: string;
}

// ─── Experience ───────────────────────────────────────────────────────────────

export type EmploymentType = 'Full-time' | 'Part-time' | 'Contract' | 'Freelance';

export interface Experience {
  company: string;
  role: string;
  startDate: string;
  endDate: string; // "Present" for current role
  employmentType: EmploymentType;
  stack: string[];
}

// ─── Contact ──────────────────────────────────────────────────────────────────

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: string;
  isExternal: boolean;
}
