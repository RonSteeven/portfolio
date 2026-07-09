import type React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
