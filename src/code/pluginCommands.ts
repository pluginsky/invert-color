import { StorageKey } from './enums/StorageKey';
import { uiActions } from './uiActions';
import { StoreService } from './services/StoreService';
import { requireSelection } from './utils/requireSelection';
import { invert } from './actions/invert';
import { configureFromElements } from './actions/configureFromElements';

// TODO repalce strings with enum
export const pluginCommands = async () => {
  switch (figma.command) {
    case 'invert': {
      // TODO
      // requireSelection();
      if (!figma.currentPage.selection.length) {
        return figma.closePlugin('Select at least 1 element');
      }

      const settings = await StoreService.getState(StorageKey.Settings);

      // console.log(settings);

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
      // TODO
      // requireSelection();
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
