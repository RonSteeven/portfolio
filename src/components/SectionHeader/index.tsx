import type React from 'react';
import type { SectionHeaderProps } from './types';

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps): React.JSX.Element => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-[var(--color-text-heading)] sm:text-4xl">{title}</h2>
    {subtitle && <p className="mx-auto mt-3 max-w-2xl text-[var(--color-text)]">{subtitle}</p>}
  </div>
);
