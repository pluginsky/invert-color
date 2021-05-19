import type { Options } from '../../shared/types/Options';
import { clone } from '../utils/clone/clone';
import { invertColor } from '../utils/invertColor/invertColor';
import { invertImage } from '../utils/invertImage/invertImage';

export const invert = async ({
  parts,
  nodes: elements,
  paints: patterns,
}: Options) => {
  const runInvert = async (selections: readonly SceneNode[]) => {
    console.log({ selections });

    for (const selection of selections) {
      if (elements.includes(selection.type.toLowerCase()) && parts.length) {
        for (const part of parts) {
          if (part in selection) {
            if (
              typeof selection[part] === 'symbol' ||
              selection[part] === undefined
            ) {
              continue;
            }

            const temporary = clone(selection[part]);

            console.log({ temporary });

            for (let level of temporary) {
              console.log(level);
              if (
                level &&
                (part === 'effects' ||
                  patterns.includes(level.type.toLowerCase()))
              ) {
                switch (level.type) {
                  case 'SOLID':
                  case 'DROP_SHADOW':
                  case 'INNER_SHADOW': {
                    invertColor(level.color);

                    selection[part] = temporary;

                    break;
                  }

                  case 'GRADIENT_LINEAR':
                  case 'GRADIENT_RADIAL':
                  case 'GRADIENT_DIAMOND':
                  case 'GRADIENT_ANGULAR': {
                    for (const stop of level.gradientStops) {
                      invertColor(stop.color);
                    }

                    selection[part] = temporary;

                    break;
                  }

                  case 'IMAGE': {
                    selection[part] = await invertImage(level);

                    break;
                  }
                }
              }
            }
          }
        }
      }

      if ('children' in selection) {
        await runInvert(selection['children']);
      }
    }
  };

  await runInvert(figma.currentPage.selection);

  figma.closePlugin();
};
