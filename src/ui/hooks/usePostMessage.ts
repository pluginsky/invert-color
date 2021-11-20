import { useCallback } from 'react';
import type { PluginMessage } from '../../shared/types/ExtendedMessageEvent';

type PostMessageCallback = (pluginMessage: PluginMessage) => void;

export const usePostMessage = () => {
  return useCallback<PostMessageCallback>((pluginMessage) => {
    // eslint-disable-next-line no-restricted-globals
    parent.postMessage({ pluginMessage }, '*');
  }, []);
};
