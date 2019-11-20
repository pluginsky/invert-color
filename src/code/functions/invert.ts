import { clone } from './clone';
import { getSettings } from './storeSettings';
import { invertColor } from './invertColor';
import { invertImage } from './invertImage';

import { Settings } from '../types/settings';

export const invert = async () => {
  if (!figma.currentPage.selection.length) {
    return figma.closePlugin('Select at least 1 element');
  }

  const { parts, elements, patterns }: Settings = await getSettings();

  const runInvert = async (selections: readonly SceneNode[]) => {
    for (const selected of selections) {
      if (elements.includes(selected.type.toLowerCase()) && parts.length) {
        for (const part of parts) {
          if (part in selected) {
            const temporary = clone(selected[part]);

            if (
              temporary[0] &&
              (part === 'effects' ||
                patterns.includes(temporary[0].type.toLowerCase()))
            ) {
              switch (temporary[0].type) {
                case 'SOLID':
                case 'DROP_SHADOW':
                case 'INNER_SHADOW': {
                  invertColor(temporary[0].color);

                  selected[part] = temporary;

                  break;
                }

                case 'GRADIENT_LINEAR':
                case 'GRADIENT_RADIAL':
                case 'GRADIENT_DIAMOND':
                case 'GRADIENT_ANGULAR': {
                  for (const stop of temporary[0].gradientStops) {
                    invertColor(stop.color);
                  }

                  selected[part] = temporary;

                  break;
                }

                case 'IMAGE': {
                  selected[part] = await invertImage(temporary[0]);

                  break;
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
