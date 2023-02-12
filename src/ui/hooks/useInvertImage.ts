import { useCallback } from 'react';

import { usePostMessage } from './usePostMessage';
import type { Bytes } from '../../shared/types/Bytes';
import { createNewBytes } from '../utils/createNewBytes';

type InvertImageCallback = (bytes: Bytes) => void;

export const useInvertImage = () => {
  const postMessage = usePostMessage();

  return useCallback<InvertImageCallback>(
    async (bytes) => {
      try {
        const newBytes = await createNewBytes(bytes);

        postMessage({
          type: 'invert-image',
          data: { bytes: newBytes },
        });
      } catch (err) {
        // TODO: exit + display message
      }
    },
    [postMessage]
  );
};
