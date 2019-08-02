figma.showUI(__html__);

interface Color {
  r: number;
  g: number;
  b: number;
  a: number;
}

const reversed = (color: Color) => {
  color.r = 1 - color.r;
  color.g = 1 - color.g;
  color.b = 1 - color.b;

  return color;
};

const clone = (value: symbol | readonly Paint[] | readonly Effect[]) => {
  return JSON.parse(JSON.stringify(value));
};

figma.ui.onmessage = message => {
  const { include } = message;

  for (const node of figma.currentPage.selection) {
    if ('fills' in node && include.backgrounds) {
      const fills = clone(node.fills);

      switch (fills[0].type) {
        case 'SOLID': {
          reversed(fills[0].color);

          break;
        }

        case 'GRADIENT_LINEAR':
        case 'GRADIENT_RADIAL':
        case 'GRADIENT_DIAMOND':
        case 'GRADIENT_ANGULAR': {
          for (let i = 0; i < fills[0].gradientStops.length; i++) {
            reversed(fills[0].gradientStops[i].color);
          }

          break;
        }

        default:
          break;
      }

      node.fills = fills;
    }

    if ('strokes' in node && include.strokes) {
      const strokes = clone(node.strokes);

      if (!strokes[0]) return;

      reversed(strokes[0].color);

      node.strokes = strokes;
    }

    if ('effects' in node && include.effects) {
      const effects = clone(node.effects);

      if (!effects[0]) return;

      reversed(effects[0].color);

      node.effects = effects;
    }
  }

  figma.closePlugin();
};
