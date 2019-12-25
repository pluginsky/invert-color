import { getSettings, setSettings } from './storeSettings';
import { invert } from './invert';

import { Settings } from '../types/settings';

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

      const optionsSections = {} as Settings;

      Object.entries(settings).forEach(([sectionName, sectionOptions]) => {
        optionsSections[sectionName] = sectionOptions.filter(sectionOption =>
          excluded.includes(sectionOption)
        );
      });

      setSettings(optionsSections);
    }

    if (type === 'cancel') {
      return figma.closePlugin();
    }
  };
};
