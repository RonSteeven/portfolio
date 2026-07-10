import type React from 'react';

import type { CardProps } from './types';

export const Card = ({ children, className = '' }: CardProps): React.JSX.Element => (
  <div
    className={`rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 ${className}`}
  >
    {children}
  </div>
);
