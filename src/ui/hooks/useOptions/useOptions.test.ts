import { renderHook, act } from '@testing-library/react';

import { useOptions } from '.';

describe('useOptions', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useOptions());
    expect(result.current.selected).toEqual({
      parts: [],
      nodes: [],
      paints: [],
    });
  });

  it('should add an item to the selected group', () => {
    const { result } = renderHook(() => useOptions());
    const item = 'item';
    const group = 'parts';

    act(() => {
      result.current.addToSelected(item, group);
    });

    expect(result.current.selected[group]).toContain(item);
  });

  it('should remove an item from the selected group', () => {
    const { result } = renderHook(() => useOptions());
    const item = 'item';
    const group = 'parts';

    act(() => {
      result.current.addToSelected(item, group);
    });

    act(() => {
      result.current.removeFromSelected(item, group);
    });

    expect(result.current.selected[group]).not.toContain(item);
  });

  it('should set the selected options', () => {
    const { result } = renderHook(() => useOptions());
    const selected = {
      parts: ['item1', 'item2'],
      nodes: ['item3', 'item4'],
      paints: ['item5', 'item6'],
    };

    act(() => {
      result.current.setSelected(selected);
    });

    expect(result.current.selected).toEqual(selected);
  });
});
