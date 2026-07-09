import type React from 'react';
import type { TagProps } from './types';

export const Tag = ({ label }: TagProps): React.JSX.Element => (
  <span className="inline-block rounded-full border border-[var(--color-tag-border)] bg-[var(--color-tag-bg)] px-3 py-1 text-xs font-medium text-[var(--color-accent-light)]">
    {label}
  </span>
);
