import { invert } from './functions/invert';
import { configureSettings } from './functions/configureSettings';

if (figma.command === 'invert') {
  invert();
} else if (figma.command === 'configure') {
  configureSettings();
}
