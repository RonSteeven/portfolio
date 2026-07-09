import { render, screen } from '@testing-library/react';
import { Button } from './index';

describe('Button', () => {
  it('renders children text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders as an anchor when href is provided', () => {
    render(<Button href="/projects">View Projects</Button>);
    const link = screen.getByText('View Projects');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '/projects');
  });

  it('renders as a button when no href is provided', () => {
    render(<Button>Submit</Button>);
    expect(screen.getByText('Submit').tagName).toBe('BUTTON');
  });

  it('applies primary variant classes by default', () => {
    render(<Button>Primary</Button>);
    expect(screen.getByText('Primary').className).toContain('bg-[var(--color-accent)]');
  });

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByText('Secondary').className).toContain(
      'border-[var(--color-accent)]'
    );
  });
});
