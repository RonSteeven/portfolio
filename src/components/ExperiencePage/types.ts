import type { Experience } from '@/types';

export interface ExperiencePageProps {
  job: Experience;
  /** Direction of the flip that revealed this page: 1 = forward, -1 = back. */
  direction: number;
  /** When true, slide/tilt is dropped in favour of a plain cross-fade. */
  reducedMotion: boolean;
  /** Advance to the next page (drag left / click right half). */
  onNext: () => void;
  /** Return to the previous page (drag right / click left half). */
  onPrev: () => void;
}
