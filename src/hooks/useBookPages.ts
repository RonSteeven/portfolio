import { useCallback, useState } from 'react';

export interface BookPagesState {
  /** Zero-based index of the page currently open. */
  index: number;
  /** Direction of the last flip: 1 = forward, -1 = backward. Feeds page variants. */
  direction: number;
  /** Human-readable current page number (1-based). */
  page: number;
  /** Total number of pages. */
  total: number;
  canPrev: boolean;
  canNext: boolean;
  next: () => void;
  prev: () => void;
  goTo: (index: number) => void;
}

/**
 * Paging state for the Experience book. Owns the current page index and the
 * direction of the last flip; clamps at both ends (no wrap-around) so the
 * page counter stays honest.
 */
export const useBookPages = (total: number): BookPagesState => {
  const [state, setState] = useState({ index: 0, direction: 1 });

  const goTo = useCallback(
    (target: number) => {
      setState(prev => {
        const clamped = Math.max(0, Math.min(total - 1, target));
        if (clamped === prev.index) return prev;
        return { index: clamped, direction: clamped > prev.index ? 1 : -1 };
      });
    },
    [total]
  );

  const next = useCallback(() => {
    setState(prev =>
      prev.index >= total - 1 ? prev : { index: prev.index + 1, direction: 1 }
    );
  }, [total]);

  const prev = useCallback(() => {
    setState(current =>
      current.index <= 0 ? current : { index: current.index - 1, direction: -1 }
    );
  }, []);

  return {
    index: state.index,
    direction: state.direction,
    page: state.index + 1,
    total,
    canPrev: state.index > 0,
    canNext: state.index < total - 1,
    next,
    prev,
    goTo,
  };
};
