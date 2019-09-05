import { clone } from './clone';
import { getSettings } from './settings';
import { invertColor } from './invertColor';
import { invertImage } from './invertImage';
import { Settings } from '../types/settings';

export const invert = async () => {
  if (!figma.currentPage.selection.length) {
    return figma.closePlugin('Select at least 1 element');
  }

  const { parts, elements, patterns }: Settings = await getSettings();

  figma.currentPage.selection.forEach(selected => {
    if (elements.includes(selected.type.toLowerCase()) && parts.length) {
      parts.forEach(async part => {
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
        } else {
          figma.closePlugin();
        }
      });
    } else {
      figma.closePlugin();
    }
  });
};
