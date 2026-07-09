import type React from 'react';
import type { IconLinkProps } from './types';

export const IconLink = ({
  icon,
  label,
  href,
  external = false,
}: IconLinkProps): React.JSX.Element => (
  <a
    href={href}
    className="inline-flex items-center gap-2 text-[var(--color-text)] transition-colors duration-[var(--transition-base)] hover:text-[var(--color-accent-light)]"
    {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
  >
    <span>{icon}</span>
    {label && <span>{label}</span>}
  </a>
);
