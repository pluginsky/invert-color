import { save } from './actions/save';
import { invert } from './actions/invert';
import { excludeColors } from './actions/excludeColors';
import { StoreService } from './services/StoreService';
import { StorageKey } from './enums/StorageKey';

// const checkIsAtLeastElementSelectedOrClosePlugin = () => {
//   if (!figma.currentPage.selection.length) {
//     return figma.closePlugin('Select at least 1 element');
//   }
// };

const hideUI = () => {
  figma.ui.close();
};

interface ExtendedMessage extends MessageEvent {
  readonly settings: any;
  readonly excluded: string[];
}

const handleUIMessage = async (message: ExtendedMessage) => {
  // checkIsAtLeastElementSelectedOrClosePlugin();

  hideUI();

  switch (message.type) {
    case 'save':
      // console.log(message.data);

      await save(message.data);

      figma.closePlugin();

      break;

    case 'invert':
      invert();

      break;

    case 'save-invert':
      await save(message.data);

      invert();

      break;

    case 'exclude-colors':
      excludeColors();

      break;

    case 'get-settings':
      // figma.ui.postMessage({ pluginMessage: { type: 'get-settings' } });

      break;

    case 'cancel':
      return figma.closePlugin();

    default:
      break;
  }
};

export const handleUI = () => {
  figma.showUI(__html__, { height: 440 });

  // console.log(await StoreService.getState(StorageKey.Settings));

  figma.ui.postMessage({
    type: 'get-settings',
    data: async () => {
      try {
        return await StoreService.getState(StorageKey.Settings);
      } catch (err) {
        return undefined;
      }
    },
  });

  figma.ui.onmessage = (message) => {
    handleUIMessage(message);
  };
};
