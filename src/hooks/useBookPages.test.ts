import { act, renderHook } from '@testing-library/react';

import { useBookPages } from './useBookPages';

describe('useBookPages', () => {
  it('starts on the first page', () => {
    const { result } = renderHook(() => useBookPages(7));
    expect(result.current.index).toBe(0);
    expect(result.current.page).toBe(1);
    expect(result.current.total).toBe(7);
    expect(result.current.canPrev).toBe(false);
    expect(result.current.canNext).toBe(true);
  });

  it('advances and records forward direction', () => {
    const { result } = renderHook(() => useBookPages(7));
    act(() => result.current.next());
    expect(result.current.index).toBe(1);
    expect(result.current.direction).toBe(1);
  });

  it('goes back and records backward direction', () => {
    const { result } = renderHook(() => useBookPages(7));
    act(() => result.current.goTo(3));
    act(() => result.current.prev());
    expect(result.current.index).toBe(2);
    expect(result.current.direction).toBe(-1);
  });

  it('clamps at both ends without wrapping', () => {
    const { result } = renderHook(() => useBookPages(3));
    act(() => result.current.prev());
    expect(result.current.index).toBe(0);
    act(() => result.current.goTo(99));
    expect(result.current.index).toBe(2);
    expect(result.current.canNext).toBe(false);
    act(() => result.current.next());
    expect(result.current.index).toBe(2);
  });
});
