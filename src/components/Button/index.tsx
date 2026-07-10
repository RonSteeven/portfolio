import type React from 'react';

import type { ButtonProps } from './types';

const VARIANTS = {
  light: {
    primary: 'bg-[var(--color-text-inverse)] text-[var(--color-accent)] hover:bg-[var(--color-bg)]',
    secondary:
      'border border-[var(--color-text-inverse)] text-[var(--color-text-inverse)] hover:bg-[var(--color-text-inverse)] hover:text-[var(--color-accent)]',
  },
  dark: {
    primary:
      'bg-[var(--color-accent)] text-[var(--color-text-inverse)] hover:bg-[var(--color-accent-light)]',
    secondary:
      'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-text-inverse)]',
  },
} as const;

export const Button = ({
  variant = 'primary',
  onDark = false,
  children,
  href,
  onClick,
}: ButtonProps): React.JSX.Element => {
  const palette = onDark ? VARIANTS.light : VARIANTS.dark;
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-[var(--transition-base)] ${palette[variant]}`;

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
