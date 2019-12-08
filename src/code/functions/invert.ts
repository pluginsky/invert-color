import { clone } from './clone';
import { getSettings } from './storeSettings';
import { invertColor } from './invertColor';
import { invertImage } from './invertImage';

import { Settings } from '../types/settings';

export const invert = async () => {
  if (!figma.currentPage.selection.length) {
    return figma.closePlugin('Select at least 1 element');
  }

  figma.ui.close();

  const { parts, elements, patterns }: Settings = await getSettings();

  const runInvert = async (selections: readonly SceneNode[]) => {
    for (const selected of selections) {
      if (elements.includes(selected.type.toLowerCase()) && parts.length) {
        for (const part of parts) {
          if (part in selected) {
            if (
              typeof selected[part] === 'symbol' ||
              selected[part] === undefined
            ) {
              continue;
            }

            const temporary = clone(selected[part]);

            for (let i in temporary) {
              if (
                temporary[i] &&
                (part === 'effects' ||
                  patterns.includes(temporary[i].type.toLowerCase()))
              ) {
                switch (temporary[i].type) {
                  case 'SOLID':
                  case 'DROP_SHADOW':
                  case 'INNER_SHADOW': {
                    invertColor(temporary[i].color);

                    selected[part] = temporary;

                    break;
                  }

                  case 'GRADIENT_LINEAR':
                  case 'GRADIENT_RADIAL':
                  case 'GRADIENT_DIAMOND':
                  case 'GRADIENT_ANGULAR': {
                    for (const stop of temporary[i].gradientStops) {
                      invertColor(stop.color);
                    }

                    selected[part] = temporary;

                    break;
                  }

                  case 'IMAGE': {
                    selected[part] = await invertImage(temporary[i]);

                    break;
                  }
                }
              }
            }
          }
        }
      }

      if ('children' in selected) {
        await runInvert(selected['children']);
      }
    }
  };

  await runInvert(figma.currentPage.selection);

  figma.closePlugin();
};
