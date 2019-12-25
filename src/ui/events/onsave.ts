import { getOptions } from '../functions/getOptions';

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
