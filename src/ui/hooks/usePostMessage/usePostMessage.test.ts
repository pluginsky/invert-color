import { renderHook } from '@testing-library/react';

import { usePostMessage } from '.';

describe('usePostMessage', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-global-assign
    // @ts-ignore
    parent = {
      postMessage: jest.fn(),
    };
  });

  it('should return a function', () => {
    const { result } = renderHook(() => usePostMessage());
    expect(typeof result.current).toBe('function');
  });

  it.skip('should call parent.postMessage with the correct arguments', () => {
    const { result } = renderHook(() => usePostMessage());
    const pluginMessage = { type: 'PLUGIN_MESSAGE', payload: 'payload' };
    result.current(pluginMessage as any);
    expect(parent.postMessage).toHaveBeenCalledWith({ pluginMessage }, '*');
  });
});
