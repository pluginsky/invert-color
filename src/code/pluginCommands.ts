import { StorageKey } from './enums/StorageKey';
import { uiActions } from './uiActions';
import { StoreService } from './services/StoreService';
import { requireSelection } from './utils/requireSelection';
import { invert } from './actions/invert';
import { configureFromElements } from './actions/configureFromElements';
import { excludeColors } from './actions/excludeColors';

export const pluginCommands = async () => {
  switch (figma.command) {
    case 'invert':
      requireSelection();

      const settings = await StoreService.getState(StorageKey.Settings);

      // console.log(settings);

      if (settings) {
        return invert(settings);
      }

      uiActions();

      break;

    case 'configure':
      uiActions();

      break;

    case 'configure-from-elements':
      requireSelection();

      const configuration = configureFromElements();

      uiActions({ configuration });

      break;

    case 'exclude-colors':
      requireSelection();

      const colors = await excludeColors();

      uiActions({ colors });

      break;

    default:
      break;
  }
};
