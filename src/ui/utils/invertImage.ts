import { encodeImage } from './encodeImage';
import { decodeImage } from './decodeImage';

// TODO rewrite to custom hook
// TODO remove any
export const invertImage = async (bytes: Uint8Array) => {
  // const bytes = event.data.pluginMessage;

  // console.log(bytes);

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const imageData = await decodeImage(canvas, ctx, bytes);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i + 0] = 255 - pixels[i + 0];
    pixels[i + 1] = 255 - pixels[i + 1];
    pixels[i + 2] = 255 - pixels[i + 2];
  }

  const newBytes = await encodeImage(canvas, ctx, imageData);

  // console.log({ newBytes });

  // TODO use PostMessageCallback
  // eslint-disable-next-line no-restricted-globals
  parent.postMessage(
    {
      pluginMessage: {
        type: 'invert-image',
        // bytes: newBytes,
        data: { bytes: newBytes },
      },
    },
    '*'
  );
};
