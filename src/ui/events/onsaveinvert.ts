import { getOptions } from '../functions/getOptions';

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
