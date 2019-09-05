import { saveSettings } from './functions/saveSettings';
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
  const { parts, elements, patterns } = saveSettings();

  parent.postMessage(
    {
      pluginMessage: {
        type: 'save',
        parts,
        elements,
        patterns
      }
    },
    '*'
  );
};

document.getElementById('save-invert').onclick = () => {
  const { parts, elements, patterns } = saveSettings();

  parent.postMessage(
    {
      pluginMessage: {
        type: 'save-invert',
        parts,
        elements,
        patterns
      }
    },
    '*'
  );
};

onmessage = (event: MessageEvent) => {
  if (event.data.pluginMessage.type === 'get-settings') {
    const { parts, elements, patterns } = event.data.pluginMessage;

    const data = [...parts, ...elements, ...patterns];

    data.forEach(element => {
      const el = document.getElementById(element) as HTMLInputElement;

      el.checked = true;
    });
  } else {
    invertImage(event);
  }
};

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
};
