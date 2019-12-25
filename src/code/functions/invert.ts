import { clone } from './clone';
import { getSettings } from './storeSettings';
import { invertColor } from './invertColor';
import { invertImage } from './invertImage';

// import { toRgb } from '../helpers/toRgb';

import { Settings } from '../types/settings';

export const invert = async () => {
  if (!figma.currentPage.selection.length) {
    return figma.closePlugin('Select at least 1 element');
  }

  figma.ui.close();

  const {
    parts,
    elements,
    patterns,
    colors = []
  }: Settings = await getSettings();

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

            for (let level of temporary) {
              if (
                level &&
                (part === 'effects' ||
                  patterns.includes(level.type.toLowerCase()))
              ) {
                switch (level.type) {
                  case 'SOLID':
                  case 'DROP_SHADOW':
                  case 'INNER_SHADOW': {
                    // if (!colors.includes(toRgb(level.color))) {
                    invertColor(level.color);
                    // }

                    selected[part] = temporary;

                    break;
                  }

                  case 'GRADIENT_LINEAR':
                  case 'GRADIENT_RADIAL':
                  case 'GRADIENT_DIAMOND':
                  case 'GRADIENT_ANGULAR': {
                    for (const stop of level.gradientStops) {
                      // if (!colors.includes(toRgb(stop.color))) {
                      invertColor(stop.color);
                      // }
                    }

                    selected[part] = temporary;

                    break;
                  }

                  case 'IMAGE': {
                    selected[part] = await invertImage(level);

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
