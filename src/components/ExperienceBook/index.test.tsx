import { fireEvent, render, screen } from '@testing-library/react';

import type { Experience } from '@/types';

import { ExperienceBook } from './index';

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
  };
});

const PAGES: Experience[] = [
  { company: 'Alpha', role: 'Dev', startDate: '2023', endDate: 'Present', employmentType: 'Full-time', stack: ['React'] },
  { company: 'Beta', role: 'Dev', startDate: '2021', endDate: '2023', employmentType: 'Full-time', stack: ['Vue'] },
];

describe('ExperienceBook', () => {
  it('shows the first page and total in the counter', () => {
    render(<ExperienceBook pages={PAGES} />);
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('1 — 2')).toBeInTheDocument();
  });

  it('flips forward and back with arrow keys', () => {
    render(<ExperienceBook pages={PAGES} />);
    const book = screen.getByRole('group', { name: 'Work experience' });

    fireEvent.keyDown(book, { key: 'ArrowRight' });
    expect(screen.getByText('Beta')).toBeInTheDocument();
    expect(screen.getByText('2 — 2')).toBeInTheDocument();

    fireEvent.keyDown(book, { key: 'ArrowLeft' });
    expect(screen.getByText('Alpha')).toBeInTheDocument();
    expect(screen.getByText('1 — 2')).toBeInTheDocument();
  });
});
