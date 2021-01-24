import { clone } from '../utils/clone/clone';

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

export const invert = () => {
  // const selectedElements = figma.currentPage.selection;
  // selectedElements.forEach(selectedElement => {
  //   if (checkerOne()) {
  //     runNextLevel()
  //   }
  // })
};
