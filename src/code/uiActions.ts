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

  let data = (await StoreService.getState(StorageKey.Settings)) || undefined;

  if (configuration) {
    data = {
      ...((await StoreService.getState(StorageKey.Settings)) || {}),
      ...configuration,
    };
  }

  (
    figma.ui.postMessage as (
      pluginMessage: PluginMessage,
      options?: UIPostMessageOptions
    ) => void
  )({
    type: 'get-settings',
    data: {
      selected: data || undefined,
    },
  });

  figma.ui.onmessage = (message: PluginMessage) => {
    handleUIMessage(message);
  };
};
