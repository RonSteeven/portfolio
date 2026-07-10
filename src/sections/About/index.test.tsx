import { render, screen } from '@testing-library/react';

import { About } from './index';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: { children: React.ReactNode; [k: string]: unknown }) => (
      <div {...rest}>{children}</div>
    ),
  },
  useInView: () => true,
}));

describe('About', () => {
  it('renders the section header', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('renders role cards', () => {
    render(<About />);
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument();
    expect(screen.getByText('Backend Engineer')).toBeInTheDocument();
    expect(screen.getByText('Frontend Specialist')).toBeInTheDocument();
  });

  it('renders bio content', () => {
    render(<About />);
    expect(screen.getByText(/Fullstack Developer with 7\+ years/)).toBeInTheDocument();
  });
});
