import { setSettings } from './storeSettings';
// import { invert } from './invert';
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

  // Object.entries(options).forEach(z => {
  for (let selected of figma.currentPage.selection) {
    // console.log("a", );
    if (options.elements.includes(selected.type.toLowerCase())) {
      settings.elements.push(selected.type.toLowerCase());
    }

    // console.log("b", options.patterns.includes(temporary[z].type.toLowerCase()));

    for (const part of options.parts) {
      // console.log(selected);

      if (selected[part]) {
        settings.parts.push(part);

        const temporary = clone(selected[part]);

        console.log(part);

        for (let level of temporary) {
          console.log(level);

          if (options.patterns.includes(level.type.toLowerCase())) {
            settings.patterns.push(level.type.toLowerCase());
          }
        }
      }
    }
  }

  // console.log(settings);

  setSettings(settings);
  // });

  figma.closePlugin('Done!');
};
