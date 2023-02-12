import { renderHook, act } from '@testing-library/react';

import { useSearch } from '.';

describe('useSearch', () => {
  it('should have the correct initial state', () => {
    const { result } = renderHook(() => useSearch());
    expect(result.current.searchValue).toBe('');
  });

  it('should set the searchValue', () => {
    const { result } = renderHook(() => useSearch());
    const searchValue = 'Lorem Ipsum';

    act(() => {
      result.current.setSearchValue(searchValue);
    });

    expect(result.current.searchValue).toBe(searchValue);
  });
});
