import { getSettings, setSettings } from './settings';
import { invert } from './invert';

export const configureSettings = () => {
  figma.showUI(__html__, { height: 440 });

  figma.ui.onmessage = async (
    message: MessageEvent & {
      parts: string[];
      elements: string[];
      patterns: string[];
    }
  ) => {
    const { type, parts = [], elements = [], patterns = [] } = message;

    if (type === 'get-settings') {
      const settings = await getSettings();

      figma.ui.postMessage({
        type: 'get-settings',
        settings
      });
    } else if (type === 'save') {
      const settings = { parts, elements, patterns };

      setSettings(settings);

      return figma.closePlugin('Settings saved successfuly');
    } else if (type === 'save-invert') {
      const settings = { parts, elements, patterns };

      setSettings(settings);

      invert();
    }

    if (type === 'cancel') {
      return figma.closePlugin();
    }
  };
};
