import { useCallback } from 'react';

import { encodeImage } from '../utils/encodeImage';
import { decodeImage } from '../utils/decodeImage';
import { usePostMessage } from './usePostMessage';

type InvertImageCallback = (bytes: Uint8Array) => void;

export const useInvertImage = () => {
  const postMessage = usePostMessage();

  return useCallback<InvertImageCallback>(
    async (bytes) => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        const imageData = await decodeImage(canvas, ctx, bytes);
        const pixels = imageData.data;

        for (let i = 0; i < pixels.length; i += 4) {
          pixels[i + 0] = 255 - pixels[i + 0];
          pixels[i + 1] = 255 - pixels[i + 1];
          pixels[i + 2] = 255 - pixels[i + 2];
        }

        const newBytes = await encodeImage(canvas, ctx, imageData);

        postMessage({
          type: 'invert-image',
          data: { bytes: newBytes },
        });
      } catch (err) {
        // TODO exit + display message
      }
    },
    [postMessage]
  );
};
