import { clone } from './functions/clone';
import { invertColor } from './functions/invertColor';
import { invertImage } from './functions/invertImage';

if (figma.currentPage.selection.length) {
  figma.showUI(__html__, { height: 440 });
} else {
  figma.closePlugin('Select at least 1 element');
}

figma.ui.onmessage = async (
  message: MessageEvent & {
    parts: string[];
    elements: string[];
    patterns: string[];
  }
) => {
  const { parts, elements, patterns } = message;

  if (type === 'cancel') {
    return figma.closePlugin();
  }

  for (const node of figma.currentPage.selection) {
    if (elements.includes(node.type.toLowerCase())) {
      for (const mode of parts) {
        if (mode in node) {
          const temp = clone(node[mode]);

          if (
            temp[0] &&
            (mode === 'effects' ||
              patterns.includes(temp[0].type.toLowerCase()))
          ) {
            switch (temp[0].type) {
              case 'SOLID':
              case 'DROP_SHADOW':
              case 'INNER_SHADOW': {
                invertColor(temp[0].color);

                node[mode] = temp;

                break;
              }

              case 'GRADIENT_LINEAR':
              case 'GRADIENT_RADIAL':
              case 'GRADIENT_DIAMOND':
              case 'GRADIENT_ANGULAR': {
                for (const stop of temp[0].gradientStops) {
                  invertColor(stop.color);
                }

                node[mode] = temp;

                break;
              }

              case 'IMAGE': {
                node[mode] = await invertImage(temp[0]);

                break;
              }
            }
          }
        }
      }
    }
  }

  figma.closePlugin();
};
