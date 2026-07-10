import { render, screen } from '@testing-library/react';

import { Footer } from './index';

describe('Footer', () => {
  it('renders copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('renders the default brand name', () => {
    render(<Footer />);
    expect(screen.getByText(/Ronaldo Monserrate/)).toBeInTheDocument();
  });

  it('renders a custom brand name', () => {
    render(<Footer brandName="RM" />);
    expect(screen.getByText(/RM/)).toBeInTheDocument();
  });

  it('renders tech attribution', () => {
    render(<Footer />);
    expect(screen.getByText(/React/)).toBeInTheDocument();
    expect(screen.getByText(/Tailwind CSS/)).toBeInTheDocument();
  });

  it('includes the GTranslate wrapper div', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('.gtranslate_wrapper')).toBeInTheDocument();
  });
});
