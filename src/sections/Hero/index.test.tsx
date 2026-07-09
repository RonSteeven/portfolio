import { render, screen } from '@testing-library/react';
import { Hero } from './index';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: { children: React.ReactNode; [k: string]: unknown }) => (
      <div {...rest}>{children}</div>
    ),
  },
}));

describe('Hero', () => {
  it('renders the name and title', () => {
    render(<Hero />);
    expect(screen.getByText('Ronaldo Monserrate')).toBeInTheDocument();
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument();
  });

  it('renders role tags', () => {
    render(<Hero />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
  });

  it('renders both CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('View Projects')).toBeInTheDocument();
    expect(screen.getByText('Download CV')).toBeInTheDocument();
  });

  it('Download CV button links to a valid CV URL', () => {
    render(<Hero />);
    const link = screen.getByText('Download CV');
    expect(link).toHaveAttribute('href');
    expect(link.getAttribute('href')).toMatch(/^https?:\/\/|\.pdf$/);
  });
});
