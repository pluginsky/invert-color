import type { Bytes } from '../../shared/types/Bytes';
import { decodeImage } from './decodeImage';
import { encodeImage } from './encodeImage';

export const createNewBytes = async (bytes: Bytes) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  const imageData = await decodeImage(canvas, ctx, bytes);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i + 0] = 255 - pixels[i + 0];
    pixels[i + 1] = 255 - pixels[i + 1];
    pixels[i + 2] = 255 - pixels[i + 2];
  }

  return encodeImage(canvas, ctx, imageData);
};
