import type React from 'react';
import type { FooterProps } from './types';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = ({ brandName = 'Ronaldo Monserrate' }: FooterProps): React.JSX.Element => (
  <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-text)]">
    <div className="mx-auto max-w-6xl px-8">
      <p>
        &copy; {CURRENT_YEAR} {brandName}. Built with React &amp; Tailwind CSS.
      </p>
      <div className="gtranslate_wrapper mt-4" />
    </div>
  </footer>
);
