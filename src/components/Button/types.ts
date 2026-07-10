import type React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onDark?: boolean;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
