import { invert } from './functions/invert';
import { configureSettings } from './functions/configureSettings';
import { getSettings } from './functions/settings';

if (figma.command === 'invert') {
  (async () => {
    if (await getSettings()) {
      invert();
    } else {
      configureSettings();
    }
  })();
} else if (figma.command === 'configure') {
  configureSettings();
}
