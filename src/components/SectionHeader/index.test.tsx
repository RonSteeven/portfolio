import { render, screen } from '@testing-library/react';

import { SectionHeader } from './index';

describe('SectionHeader', () => {
  it('renders the title', () => {
    render(<SectionHeader title="Projects" />);
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders the subtitle when provided', () => {
    render(<SectionHeader title="Projects" subtitle="Things I have built" />);
    expect(screen.getByText('Things I have built')).toBeInTheDocument();
  });

  it('does not render a subtitle when omitted', () => {
    const { container } = render(<SectionHeader title="Projects" />);
    expect(container.querySelectorAll('p')).toHaveLength(0);
  });
});
