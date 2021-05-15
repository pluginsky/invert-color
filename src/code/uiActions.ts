import { save } from './actions/save';
import { StoreService } from './services/StoreService';
import { StorageKey } from './enums/StorageKey';
import { requireSelection } from './utils/requireSelection';
import { invert } from './actions/invert';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';
import type { Options } from '../shared/types/Options';

const handleUIMessage = async (message: PluginMessage) => {
  figma.ui.close();

  switch (message.type) {
    case 'save': {
      await save(message.data.selected);

      figma.closePlugin();

      break;
    }

    case 'invert': {
      requireSelection();

      invert(message.data.selected);

      break;
    }

    case 'save-invert': {
      await save(message.data.selected);

      requireSelection();

      invert(message.data.selected);

      figma.closePlugin();

      break;
    }

    case 'cancel':
      return figma.closePlugin();

    default:
      break;
  }
};

type DefaultOptions = {
  readonly configuration?: Options;
};

export const uiActions = async (params: DefaultOptions = {}) => {
  const { configuration } = params;

  figma.showUI(__html__, { height: 440 });

  // TODO update
  let data = (await StoreService.getState(StorageKey.Settings)) || {};

  if (configuration) {
    data = { ...data, ...configuration };
  }

  // TODO update types
  figma.ui.postMessage({
    type: 'get-settings',
    data: {
      // TODO replace with options
      selected: data || undefined, // TODO
    },
  });

  figma.ui.onmessage = (message: PluginMessage) => {
    handleUIMessage(message);
  };
};
