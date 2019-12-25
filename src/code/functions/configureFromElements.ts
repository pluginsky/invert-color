import { setSettings } from './storeSettings';
import { options } from '../../constants/options';

import { clone } from './clone';

export const configureFromElements = () => {
  if (!figma.currentPage.selection.length) {
    return figma.closePlugin('Select at least 1 element');
  }

  let settings = {
    elements: [],
    parts: [],
    patterns: []
  };

  for (let selected of figma.currentPage.selection) {
    if (options.elements.includes(selected.type.toLowerCase())) {
      settings.elements.push(selected.type.toLowerCase());
    }

    for (const part of options.parts) {
      if (selected[part]) {
        settings.parts.push(part);

        const temporary = clone(selected[part]);

        for (let level of temporary) {
          if (options.patterns.includes(level.type.toLowerCase())) {
            settings.patterns.push(level.type.toLowerCase());
          }
        }
      }
    }
  }

  setSettings(settings);

  figma.closePlugin('Done!');
};
