import { render, screen } from '@testing-library/react';
import { Projects } from './index';

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: { children: React.ReactNode; [k: string]: unknown }) => (
      <div {...rest}>{children}</div>
    ),
  },
  useInView: () => true,
}));

describe('Projects', () => {
  it('renders the section header', () => {
    render(<Projects />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders all project cards', () => {
    render(<Projects />);
    expect(screen.getByText('Parent Portal')).toBeInTheDocument();
    expect(screen.getByText('Classroom Management')).toBeInTheDocument();
    expect(screen.getByText('Neos Assembly Legal')).toBeInTheDocument();
    expect(screen.getByText('Somos Uno')).toBeInTheDocument();
    expect(screen.getByText('Sebioca')).toBeInTheDocument();
  });

  it('renders correct live URLs', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link');
    const hrefs = links.map(l => l.getAttribute('href'));
    expect(hrefs).toContain('https://www.lightspeedsystems.com/security-compliance/lightspeed-parent-portal/');
    expect(hrefs).toContain('https://assemblysoftware.com/neos');
  });

  it('external links open in new tab', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link');
    links.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });
});
