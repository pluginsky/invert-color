import { Settings } from '../types/settings';

export const getSettings = async (): Promise<Settings> => {
  return await figma.clientStorage.getAsync('invert-color-settings');
};

export const setSettings = (settings: Settings) => {
  figma.clientStorage.setAsync('invert-color-settings', settings);
};
