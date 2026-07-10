import type React from 'react';

import type { TagProps } from './types';

export const Tag = ({ label, onDark = false }: TagProps): React.JSX.Element => (
  <span
    className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${
      onDark
        ? 'border-[var(--color-text-inverse)]/40 bg-[var(--color-text-inverse)]/5 text-[var(--color-text-inverse)]'
        : 'border-[var(--color-tag-border)] bg-[var(--color-tag-bg)] text-[var(--color-accent-light)]'
    }`}
  >
    {label}
  </span>
);
