import { getSettings, setSettings } from './storeSettings';
import { invert } from './invert';

export const configureSettings = () => {
  figma.showUI(__html__, { height: 440 });

  figma.ui.onmessage = async (
    message: MessageEvent & {
      settings: {
        parts: string[];
        elements: string[];
        patterns: string[];
      };
    }
  ) => {
    const { type, settings } = message;

    if (type === 'get-settings') {
      const settings = await getSettings();

      figma.ui.postMessage({
        type: 'get-settings',
        settings
      });
    } else if (type === 'save') {
      setSettings(settings);

      return figma.closePlugin('Settings saved successfuly');
    } else if (type === 'save-invert') {
      setSettings(settings);

      invert();
    }

    if (type === 'cancel') {
      return figma.closePlugin();
    }
  };
};
