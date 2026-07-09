import type React from 'react';
import type { ButtonProps } from './types';

const VARIANTS = {
  primary:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)]',
  secondary:
    'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white',
} as const;

export const Button = ({
  variant = 'primary',
  children,
  href,
  onClick,
}: ButtonProps): React.JSX.Element => {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-colors duration-[var(--transition-base)] ${VARIANTS[variant]}`;

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
