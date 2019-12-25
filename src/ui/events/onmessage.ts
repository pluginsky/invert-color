import { invertImage } from '../functions/invertImage';

onmessage = (event: MessageEvent) => {
  if (event.data.pluginMessage.type === 'get-settings') {
    const { settings } = event.data.pluginMessage;

    if (settings) {
      const { parts, elements, patterns } = settings;

      const data = [...parts, ...elements, ...patterns];

      data.forEach(element => {
        const el = document.getElementById(element) as HTMLInputElement;

        if (el) {
          el.checked = true;
        } else {
          const z = data.filter(elem => elem !== element);

          parent.postMessage(
            {
              pluginMessage: {
                type: 'filter',
                excluded: z
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
