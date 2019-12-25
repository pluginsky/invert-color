import { invert } from './functions/invert';
import { configureSettings } from './functions/configureSettings';
import { getSettings } from './functions/storeSettings';

switch (figma.command) {
  case 'invert': {
    (async () => {
      if (await getSettings()) {
        invert();
      } else {
        configureSettings();
      }
    })();
  }

  case 'configure': {
    configureSettings();
  }

  case 'configure-from-elements': {
  }

  case 'exclude-colors': {
  }
}
