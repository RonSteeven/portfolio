import { AnimatePresence, motion } from 'framer-motion';
import type React from 'react';
import { useCallback, useState } from 'react';

import { NAV_LINKS } from '@/constants';
import { useActiveSection } from '@/hooks';

import type { NavbarProps } from './types';

const scrollToSection = (sectionId: string): void => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

export const Navbar = ({ brandName = 'RM' }: NavbarProps): React.JSX.Element => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  const handleLinkClick = useCallback((sectionId: string): void => {
    setMobileOpen(false);
    // Defer the scroll so Framer Motion's exit animation on the mobile menu
    // doesn't cancel the browser's smooth-scroll (200ms exit duration).
    setTimeout(() => scrollToSection(sectionId), 220);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[var(--color-bg-hero)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-0">
        <button
          type="button"
          onClick={() => handleLinkClick('hero')}
          className="text-lg font-bold text-[var(--color-nav-link)] transition-colors hover:text-[var(--color-nav-link-hover)]"
        >
          {brandName}
        </button>

        {/* Desktop links */}
        <ul className="hidden gap-8 lg:flex">
          {NAV_LINKS.map(link => (
            <li key={link.sectionId}>
              <button
                type="button"
                onClick={() => handleLinkClick(link.sectionId)}
                className={`text-sm font-medium transition-colors duration-[var(--transition-base)] ${
                  activeSection === link.sectionId
                    ? 'text-[var(--color-nav-link-active)] underline underline-offset-8 decoration-2'
                    : 'text-[var(--color-nav-link)] hover:text-[var(--color-nav-link-hover)]'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={() => setMobileOpen(prev => !prev)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-[var(--color-nav-link)]"
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-0.5 w-6 bg-[var(--color-nav-link)]"
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-0.5 w-6 bg-[var(--color-nav-link)]"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--color-border)] lg:hidden"
          >
            {NAV_LINKS.map(link => (
              <li key={link.sectionId}>
                <button
                  type="button"
                  onClick={() => handleLinkClick(link.sectionId)}
                  className={`block w-full px-6 py-3 text-left text-sm font-medium transition-colors ${
                    activeSection === link.sectionId
                      ? 'text-[var(--color-nav-link-active)] underline underline-offset-8 decoration-2'
                      : 'text-[var(--color-nav-link)] hover:text-[var(--color-nav-link-hover)]'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};
