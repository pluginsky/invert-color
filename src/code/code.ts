import { invert } from './functions/invert';
import { getSettings } from './functions/storeSettings';
import { configureSettings } from './functions/configureSettings';
import { configureFromElements } from './functions/configureFromElements';
import { excludeColors } from './functions/excludeColors';

switch (figma.command) {
  case 'invert': {
    (async () => {
      if (await getSettings()) {
        invert();
      } else {
        configureSettings();
      }
    })();

    break;
  }

  case 'configure': {
    configureSettings();

    break;
  }

  case 'configure-from-elements': {
    configureFromElements();

    break;
  }

  case 'exclude-colors': {
    excludeColors();

    break;
  }
}
