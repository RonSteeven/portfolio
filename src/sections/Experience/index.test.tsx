import { fireEvent, render, screen } from '@testing-library/react';

import { Experience } from './index';

jest.mock('framer-motion', () => {
  const ReactLib = jest.requireActual('react');
  const OMIT = new Set([
    'drag',
    'dragSnapToOrigin',
    'dragElastic',
    'dragConstraints',
    'onDragEnd',
    'variants',
    'initial',
    'animate',
    'exit',
    'custom',
    'transition',
  ]);
  const strip = (props: Record<string, unknown>): Record<string, unknown> =>
    Object.fromEntries(Object.entries(props).filter(([key]) => !OMIT.has(key)));
  return {
    motion: new Proxy(
      {},
      {
        get: (_target: unknown, tag: string | symbol) => {
          if (typeof tag !== 'string') return undefined;
          return ({ children, ...rest }: { children?: unknown; [k: string]: unknown }) =>
            ReactLib.createElement(tag, strip(rest), children);
        },
      }
    ),
    AnimatePresence: ({ children }: { children: unknown }) =>
      ReactLib.createElement(ReactLib.Fragment, null, children),
    useReducedMotion: () => false,
    useInView: () => true,
  };
});

describe('Experience', () => {
  it('renders the section header', () => {
    render(<Experience />);
    expect(screen.getByText('Professional Experience')).toBeInTheDocument();
  });

  it('opens on the first page with an honest counter', () => {
    render(<Experience />);
    expect(screen.getByText('Vokal')).toBeInTheDocument();
    expect(screen.getByText('1 — 7')).toBeInTheDocument();
  });

  it('flips forward with the Next control', () => {
    render(<Experience />);
    fireEvent.click(screen.getByRole('button', { name: 'Jump to Next experience' }));
    expect(screen.getByText('MLReef')).toBeInTheDocument();
    expect(screen.getByText('2 — 7')).toBeInTheDocument();
  });

  it('cannot page back from the first page', () => {
    render(<Experience />);
    expect(screen.getByRole('button', { name: 'Jump to Previous experience' })).toBeDisabled();
  });

  it('jumps to a company via its dot', () => {
    render(<Experience />);
    fireEvent.click(screen.getByRole('button', { name: 'Go to Sebioca' }));
    expect(screen.getByText('7 — 7')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Jump to Next experience' })).toBeDisabled();
  });
});
