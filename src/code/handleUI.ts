import { save } from './actions/save';
import { invert } from './actions/invert';
import { excludeColors } from './actions/excludeColors';
import { StoreService } from './services/StoreService';
import { StorageKey } from './enums/StorageKey';

const hideUI = () => {
  figma.ui.close();
};

interface ExtendedMessage extends MessageEvent {
  readonly settings: any;
  readonly excluded: string[];
}

const handleUIMessage = async (message: ExtendedMessage) => {
  hideUI();

  switch (message.type) {
    case 'save':
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

    case 'cancel':
      return figma.closePlugin();

    default:
      break;
  }
};

export const handleUI = async () => {
  figma.showUI(__html__, { height: 440 });

  figma.ui.postMessage({
    type: 'get-settings',
    data: await StoreService.getState(StorageKey.Settings),
  });

  figma.ui.onmessage = (message) => {
    handleUIMessage(message);
  };
};
