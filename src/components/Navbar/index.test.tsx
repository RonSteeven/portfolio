import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Navbar } from './index';

jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
      span: (props: Record<string, unknown>) => <span {...props} />,
      ul: ({ children, ...rest }: { children: React.ReactNode; [key: string]: unknown }) => (
        <ul {...rest}>{children}</ul>
      ),
    },
  };
});

jest.mock('../../hooks', () => ({
  useActiveSection: () => 'hero',
}));

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />);
    expect(screen.getByText('RM')).toBeInTheDocument();
  });

  it('renders a custom brand name', () => {
    render(<Navbar brandName="Ronaldo" />);
    expect(screen.getByText('Ronaldo')).toBeInTheDocument();
  });

  it('renders all desktop nav links', () => {
    render(<Navbar />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has a hamburger button with accessible label', () => {
    render(<Navbar />);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('toggles hamburger aria-label on click', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const hamburger = screen.getByLabelText('Open menu');
    await user.click(hamburger);
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('shows mobile menu links when hamburger is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    await user.click(screen.getByLabelText('Open menu'));
    expect(screen.getAllByText('Home')).toHaveLength(2);
    expect(screen.getAllByText('About')).toHaveLength(2);
  });
});
