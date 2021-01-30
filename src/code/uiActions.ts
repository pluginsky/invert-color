import { save } from './actions/save';
import { StoreService } from './services/StoreService';
import { StorageKey } from './enums/StorageKey';
import { requireSelection } from './utils/requireSelection';
import { invert } from './actions/invert';

// const hideUI = () => {
//   figma.ui.close();
// };

interface ExtendedMessage extends MessageEvent {
  readonly settings: any;
  readonly excluded: string[];
}

const handleUIMessage = async (message: ExtendedMessage) => {
  figma.ui.close();

  // console.log('test');

  switch (message.type) {
    case 'save':
      await save(message.data.selected);

      figma.closePlugin();

      break;

    case 'invert':
      requireSelection();

      invert(message.data.selected);

      break;

    case 'save-invert':
      await save(message.data.selected);

      console.log(message);

      requireSelection();

      invert(message.data.selected);

      figma.closePlugin();

      break;

    case 'cancel':
      return figma.closePlugin();

    default:
      break;
  }
};

type DefaultOptions = {
  readonly colors?: any;
  readonly configuration?: any;
};

export const uiActions = async (params?: DefaultOptions) => {
  // console.log(configuration);

  // const { colors = [], configuration = {} } = params;

  figma.showUI(__html__, { height: 440 });

  // TODO
  figma.ui.postMessage({
    type: 'get-settings',
    data: await StoreService.getState(StorageKey.Settings),
  });

  figma.ui.onmessage = (message: ExtendedMessage) => {
    handleUIMessage(message);
  };
};
