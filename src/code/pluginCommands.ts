import { StorageKey } from './constants/StorageKey';
import { uiActions } from './uiActions';
import { StoreService } from './services/StoreService';
import { invert } from './actions/invert';
import { configureFromElements } from './actions/configureFromElements';
import type { Command } from './types/Command';
import type { Options } from '../shared/types/Options';

// TODO try/catch
(async () => {
  switch (figma.command as Command) {
    case 'invert': {
      if (!figma.currentPage.selection.length) {
        return figma.closePlugin('Select at least 1 element');
      }

      const options = await StoreService.getState<Options>(StorageKey.Options);

      if (options) {
        return invert(options);
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
      // TODO update error message
      figma.closePlugin('Unknown command'); // TODO display plugin name

      break;
  }
})();
