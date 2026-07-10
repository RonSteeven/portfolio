import { render, screen } from '@testing-library/react';

import { IconLink } from './index';

describe('IconLink', () => {
  it('renders with icon and label', () => {
    render(<IconLink icon="✉️" label="Email" href="mailto:test@test.com" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('✉️')).toBeInTheDocument();
  });

  it('links to the correct href', () => {
    render(<IconLink icon="🐙" label="GitHub" href="https://github.com" />);
    expect(screen.getByText('GitHub').closest('a')).toHaveAttribute('href', 'https://github.com');
  });

  it('opens in a new tab when external is true', () => {
    render(<IconLink icon="🐙" href="https://github.com" external />);
    const link = screen.getByText('🐙').closest('a');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not add target when external is false', () => {
    render(<IconLink icon="✉️" href="mailto:test@test.com" />);
    const link = screen.getByText('✉️').closest('a');
    expect(link).not.toHaveAttribute('target');
  });
});
