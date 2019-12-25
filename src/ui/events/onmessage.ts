import { invertImage } from '../functions/invertImage';

import { Settings } from '../../code/types/settings';

onmessage = (event: MessageEvent) => {
  if (event.data.pluginMessage.type === 'get-settings') {
    const { settings }: { settings: Settings } = event.data.pluginMessage;

    if (settings) {
      const { parts, elements, patterns } = settings;

      const options = [...parts, ...elements, ...patterns];

      options.forEach(option => {
        const checkbox = document.getElementById(option) as HTMLInputElement;

        if (checkbox) {
          checkbox.checked = true;
        } else {
          parent.postMessage(
            {
              pluginMessage: {
                type: 'filter',
                excluded: options.filter(element => element !== option)
              }
            },
            '*'
          );
        }
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
