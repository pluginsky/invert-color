import { Settings } from '../types/settings';

export const getSettings = async () => {
  return await figma.clientStorage.getAsync('invert-color-settings');
};

export const setSettings = (settings: Settings) => {
  figma.clientStorage.setAsync('invert-color-settings', settings);
};
