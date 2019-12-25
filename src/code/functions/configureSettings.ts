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
      excluded: any;
    }
  ) => {
    const { type, settings, excluded } = message;

    if (type === 'get-settings') {
      const settings = await getSettings();

      console.log(settings);

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
    } else if (type === 'filter') {
      const settings = await getSettings();

      const z = {};

      Object.entries(settings).forEach((section: any) => {
        z[section[0]] = section[1].filter(aa => excluded.includes(aa));
      });

      setSettings(z as any);
    }

    if (type === 'cancel') {
      return figma.closePlugin();
    }
  };
};
