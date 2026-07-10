import { render, screen } from '@testing-library/react';

import { Tag } from './index';

describe('Tag', () => {
  it('renders the label text', () => {
    render(<Tag label="React" />);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Tag label="TypeScript" />);
    expect(screen.getByText('TypeScript').tagName).toBe('SPAN');
  });
});
