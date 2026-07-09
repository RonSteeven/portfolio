import { render, screen } from '@testing-library/react';
import { Contact } from './index';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: { children: React.ReactNode; [k: string]: unknown }) => (
      <div {...rest}>{children}</div>
    ),
  },
  useInView: () => true,
}));

describe('Contact', () => {
  it('renders the section header', () => {
    render(<Contact />);
    expect(screen.getByText('Get in Touch')).toBeInTheDocument();
  });

  it('renders the location in subtitle', () => {
    render(<Contact />);
    expect(screen.getByText(/Ecuador/)).toBeInTheDocument();
  });

  it('renders all contact links', () => {
    render(<Contact />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('email link has correct mailto href', () => {
    render(<Contact />);
    const emailLink = screen.getByText('Email').closest('a');
    expect(emailLink).toHaveAttribute('href', 'mailto:ro_sml15@hotmail.com');
  });
});
