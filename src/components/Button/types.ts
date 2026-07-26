import type React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  onDark?: boolean;
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
