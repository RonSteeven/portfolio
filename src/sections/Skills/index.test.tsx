import { render, screen } from '@testing-library/react';

import { Skills } from './index';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: { children: React.ReactNode; [k: string]: unknown }) => (
      <div {...rest}>{children}</div>
    ),
  },
  useInView: () => true,
}));

describe('Skills', () => {
  it('renders the section header', () => {
    render(<Skills />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
  });

  it('renders all skill categories', () => {
    render(<Skills />);
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Mobile')).toBeInTheDocument();
    expect(screen.getByText('Databases')).toBeInTheDocument();
    expect(screen.getByText('DevOps & Cloud')).toBeInTheDocument();
    expect(screen.getByText('Tools')).toBeInTheDocument();
  });

  it('renders individual skill tags', () => {
    render(<Skills />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('PostgreSQL')).toBeInTheDocument();
  });
});
