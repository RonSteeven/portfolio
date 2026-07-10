import { useEffect, useState } from 'react';

import { SECTION_IDS } from '@/constants';

type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

/**
 * Tracks which section is currently in the viewport.
 * Used by Navbar to highlight the active link.
 */
export const useActiveSection = (): SectionId => {
  const [activeSection, setActiveSection] = useState<SectionId>(SECTION_IDS.HERO);

  useEffect(() => {
    const sectionIds = Object.values(SECTION_IDS);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};
