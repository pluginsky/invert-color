import { clone } from '../utils/clone/clone';
import { invertColor } from '../utils/invertColor/invertColor';
import { invertImage } from '../utils/invertImage/invertImage';
import { hueToRgb } from '../utils/hueToRgb/hueToRgb';

// const handleElementInvertedPattern = () => {
//   switch (level.type) {
//     case 'SOLID':
//     case 'DROP_SHADOW':
//     case 'INNER_SHADOW': {
//       break;
//     }

//     case 'GRADIENT_LINEAR':
//     case 'GRADIENT_RADIAL':
//     case 'GRADIENT_DIAMOND':
//     case 'GRADIENT_ANGULAR': {
//       break;
//     }

//     case 'IMAGE': {
//       break;
//     }
//   }
// };

// const checkerOne = () => {
//   return elements.includes(selected.type.toLowerCase()) && parts.length;
// };

// const runVeryNextLevel = () => {
//   temporary.forEach(async (level) => {
//     const checkerFour = () => {
//       return (
//         level &&
//         (part === 'effects' || patterns.includes(level.type.toLowerCase()))
//       );
//     };

//     if (checkerFour()) {
//       return handleElementInvertedPattern();
//     }

//     if ('children' in selected) {
//       await runInvert(selected['children']);
//     }
//   });
// };

// const runNextLevel = () => {
//   parts.forEach((part) => {
//     const checkerTwo = part in selected;

//     const checkerThree = () => {
//       return typeof selected[part] === 'symbol' || selected[part] === undefined;
//     };

//     if (!checkerTwo || checkerThree()) {
//       return;
//     }

//     // const checkerThree = () => {
//     //   return typeof selected[part] === 'symbol' ||
//     //   selected[part] === undefined
//     // }

//     // if (checkerThree()) {
//     //   return;
//     // }

//     const temporary = clone(selected[part]);
//   });
// };

// export const invert = () => {
//   // const selectedElements = figma.currentPage.selection;
//   // selectedElements.forEach(selectedElement => {
//   //   if (checkerOne()) {
//   //     runNextLevel()
//   //   }
//   // })
// };

export const invert = async ({ parts, nodes: elements, paints: patterns }) => {
  // console.log(parts, elements, patterns);

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

            // console.log({ x: selected[part], temporary });

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
                    // console.log(hueToRgb(level.color), level.color);
                    invertColor(level.color);

                    selected[part] = temporary;

                    break;
                  }

                  case 'GRADIENT_LINEAR':
                  case 'GRADIENT_RADIAL':
                  case 'GRADIENT_DIAMOND':
                  case 'GRADIENT_ANGULAR': {
                    for (const stop of level.gradientStops) {
                      invertColor(stop.color);
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
