import { getOptions } from './functions/getOptions';
import { invertImage } from './functions/invertImage';

import './figma-ui/main.min.css';
import './ui.css';

import './figma-ui/scripts.min.js';

document.addEventListener('DOMContentLoaded', () => {
  parent.postMessage(
    {
      pluginMessage: {
        type: 'get-settings'
      }
    },
    '*'
  );
});

document.getElementById('save').onclick = () => {
  parent.postMessage(
    {
      pluginMessage: {
        type: 'save',
        settings: getOptions()
      }
    },
    '*'
  );
};

document.getElementById('save-invert').onclick = () => {
  parent.postMessage(
    {
      pluginMessage: {
        type: 'save-invert',
        settings: getOptions()
      }
    },
    '*'
  );
};

onmessage = (event: MessageEvent) => {
  if (event.data.pluginMessage.type === 'get-settings') {
    const { settings } = event.data.pluginMessage;

    if (settings) {
      const { parts, elements, patterns } = settings;

      const data = [...parts, ...elements, ...patterns];

      data.forEach(element => {
        const el = document.getElementById(element) as HTMLInputElement;

        el.checked = true;
      });
    } else {
      const elements = document.querySelectorAll(
        '.options .checkbox__box'
      ) as NodeListOf<HTMLInputElement>;

      elements.forEach(element => {
        element.checked = true;
      });
    }
  } else {
    invertImage(event);
  }
};

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
};
