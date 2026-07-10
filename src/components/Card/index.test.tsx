import { render, screen } from '@testing-library/react';

import { Card } from './index';

describe('Card', () => {
  it('renders children', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies additional className when provided', () => {
    const { container } = render(
      <Card className="mt-4">
        <p>Content</p>
      </Card>
    );
    expect(container.firstChild).toHaveClass('mt-4');
  });

  it('has card background and border styles', () => {
    const { container } = render(
      <Card>
        <p>Content</p>
      </Card>
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain('bg-[var(--color-bg-card)]');
    expect(card.className).toContain('border-[var(--color-border)]');
  });
});
