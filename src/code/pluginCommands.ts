import { StorageKey } from './enums/StorageKey';
import { uiActions } from './uiActions';
import { StoreService } from './services/StoreService';
import { invert } from './actions/invert';
import { configureFromElements } from './actions/configureFromElements';
import type { Command } from './types/Command';

export const pluginCommands = async () => {
  switch (figma.command as Command) {
    case 'invert': {
      if (!figma.currentPage.selection.length) {
        return figma.closePlugin('Select at least 1 element');
      }

      const settings = await StoreService.getState(StorageKey.Settings);

      if (settings) {
        return invert(settings);
      }

      uiActions();

      break;
    }

    case 'configure': {
      uiActions();

      break;
    }

    case 'configure-from-elements': {
      if (!figma.currentPage.selection.length) {
        return figma.closePlugin('Select at least 1 element');
      }

      const configuration = configureFromElements();

      uiActions({ configuration });

      break;
    }

    default:
      break;
  }
};
