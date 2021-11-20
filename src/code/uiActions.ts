import { save } from './actions/save';
import { StoreService } from './services/StoreService';
import { StorageKey } from './constants/StorageKey';
import { invert } from './actions/invert';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';
import type { Options } from '../shared/types/Options';

// TODO try/catch
const handleUIMessage = async (message: PluginMessage) => {
  figma.ui.close();

  switch (message.type) {
    case 'save': {
      await save(message.data.selected);

      figma.closePlugin();

      break;
    }

    case 'invert': {
      if (!figma.currentPage.selection.length) {
        return figma.closePlugin('Select at least 1 element');
      }

      invert(message.data.selected);

      break;
    }

    case 'save-invert': {
      await save(message.data.selected);

      if (!figma.currentPage.selection.length) {
        return figma.closePlugin('Select at least 1 element');
      }

      invert(message.data.selected);

      break;
    }

    case 'cancel':
      return figma.closePlugin();

    default:
      break;
  }
};

interface DefaultOptions {
  readonly configuration?: Options;
}

type StrictPostMessage = (
  pluginMessage: PluginMessage,
  options?: UIPostMessageOptions
) => void;

// TODO try/catch
export const uiActions = async (params: DefaultOptions = {}) => {
  const { configuration } = params;

  figma.showUI(__html__, { height: 440 });

  const storedOptions = await StoreService.getState<Options>(
    StorageKey.Options
  );

  let selected = storedOptions || undefined;

  if (configuration) {
    selected = { ...storedOptions, ...configuration };
  }

  (figma.ui.postMessage as StrictPostMessage)({
    type: 'get-options',
    data: { selected },
  });

  figma.ui.onmessage = (message: PluginMessage) => {
    handleUIMessage(message);
  };
};
