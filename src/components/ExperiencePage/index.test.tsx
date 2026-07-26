import { fireEvent, render, screen } from '@testing-library/react';

import type { Experience } from '@/types';

import { ExperiencePage } from './index';

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
            // Only the interactive page has an onClick handler; the shading
            // overlay does not, so tag just the page for querying.
            ReactLib.createElement(
              tag,
              { ...strip(rest), 'data-testid': rest.onClick ? 'page' : undefined },
              children
            );
        },
      }
    ),
  };
});

const JOB: Experience = {
  company: 'Vokal',
  role: 'Senior Fullstack Developer',
  startDate: '2024',
  endDate: 'Present',
  employmentType: 'Full-time',
  location: 'Remote',
  summary: 'Leading fullstack development.',
  highlights: ['Shipped features.'],
  stack: ['React', 'TypeScript'],
};

describe('ExperiencePage', () => {
  const setup = () => {
    const onNext = jest.fn();
    const onPrev = jest.fn();
    render(
      <ExperiencePage
        job={JOB}
        direction={1}
        reducedMotion={false}
        onNext={onNext}
        onPrev={onPrev}
      />
    );
    const page = screen.getByTestId('page');
    // jsdom returns zeroed rects; pin a real size so click-halves are meaningful.
    jest.spyOn(page, 'getBoundingClientRect').mockReturnValue({
      left: 0,
      width: 100,
      top: 0,
      right: 100,
      bottom: 0,
      height: 0,
      x: 0,
      y: 0,
      toJSON: () => ({}),
    });
    return { page, onNext, onPrev };
  };

  it('renders the job details', () => {
    const { page } = setup();
    expect(screen.getByText('Senior Fullstack Developer')).toBeInTheDocument();
    expect(screen.getByText('Vokal')).toBeInTheDocument();
    expect(page.textContent).toContain('Shipped features');
    expect(page.textContent).toContain('React');
  });

  it('flips forward when the right half is clicked', () => {
    const { page, onNext, onPrev } = setup();
    fireEvent.click(page, { clientX: 80 });
    expect(onNext).toHaveBeenCalledTimes(1);
    expect(onPrev).not.toHaveBeenCalled();
  });

  it('flips back when the left half is clicked', () => {
    const { page, onNext, onPrev } = setup();
    fireEvent.click(page, { clientX: 20 });
    expect(onPrev).toHaveBeenCalledTimes(1);
    expect(onNext).not.toHaveBeenCalled();
  });
});
