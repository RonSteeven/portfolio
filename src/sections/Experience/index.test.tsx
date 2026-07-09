import { render, screen } from '@testing-library/react';
import { Experience } from './index';

jest.mock('framer-motion', () => ({
  motion: {
    ol: ({ children, ...rest }: { children: React.ReactNode; [k: string]: unknown }) => (
      <ol {...rest}>{children}</ol>
    ),
    li: ({ children, ...rest }: { children: React.ReactNode; [k: string]: unknown }) => (
      <li {...rest}>{children}</li>
    ),
  },
  useInView: () => true,
}));

describe('Experience', () => {
  it('renders the section header', () => {
    render(<Experience />);
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
  });

  it('renders every company', () => {
    render(<Experience />);
    expect(screen.getByText('Vokal')).toBeInTheDocument();
    expect(screen.getByText('MLReef')).toBeInTheDocument();
    expect(screen.getByText('BairesDev')).toBeInTheDocument();
    expect(screen.getByText('Applaudo Studios')).toBeInTheDocument();
  });

  it('renders roles and employment types', () => {
    render(<Experience />);
    expect(screen.getByText('Senior Fullstack Developer')).toBeInTheDocument();
    expect(screen.getAllByText('Full-time').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Part-time').length).toBeGreaterThan(0);
  });

  it('renders date ranges', () => {
    render(<Experience />);
    expect(screen.getByText(/2024 — Present/)).toBeInTheDocument();
  });
});
