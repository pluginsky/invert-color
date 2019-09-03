import { encode } from './functions/encode';
import { decode } from './functions/decode';

import './figma-ui/main.min.css';
import './ui.css';

import './figma-ui/scripts.min.js';

document.getElementById('apply').onclick = () => {
  const partsOptions = document.querySelectorAll(
    '#parts input[type="checkbox"]:checked'
  );

  const parts = [];

  partsOptions.forEach(option => parts.push(option.id));

  const elementsOptions = document.querySelectorAll(
    '#elements input[type="checkbox"]:checked'
  );

  const elements = [];

  elementsOptions.forEach(option => elements.push(option.id));

  const patternsOptions = document.querySelectorAll(
    '#patterns input[type="checkbox"]:checked'
  );

  const patterns = [];

  patternsOptions.forEach(option => patterns.push(option.id));

  parent.postMessage(
    {
      pluginMessage: {
        type: 'invert-color',
        parts,
        elements,
        patterns
      }
    },
    '*'
  );
};

onmessage = async (event: MessageEvent) => {
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

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
};
