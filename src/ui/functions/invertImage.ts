import { encode } from './encode';
import { decode } from './decode';

export const invertImage = async (event: MessageEvent) => {
  const bytes = event.data.pluginMessage;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const imageData = await decode(canvas, ctx, bytes);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i + 0] = 255 - pixels[i + 0];
    pixels[i + 1] = 255 - pixels[i + 1];
    pixels[i + 2] = 255 - pixels[i + 2];
  }

  const newBytes = await encode(canvas, ctx, imageData);

  parent.postMessage(
    {
      pluginMessage: {
        type: 'invert-image',
        bytes: newBytes
      }
    },
    '*'
  );
};
