if (figma.currentPage.selection.length) {
  figma.showUI(__html__, { height: 440 });
} else {
  figma.closePlugin('Select at least 1 element');
}

type Color = {
  -readonly [K in keyof RGBA]: RGBA[K];
};

figma.ui.onmessage = msg => {
  const { type, parts, elements, patterns } = msg;

  const clone = (value: symbol | readonly Paint[] | readonly Effect[]) => {
    return JSON.parse(JSON.stringify(value));
  };

  const invertColor = (color: Color) => {
    color.r = 1 - color.r;
    color.g = 1 - color.g;
    color.b = 1 - color.b;

    return color;
  };

  if (type === 'invert-color') {
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

                  break;
                }

                case 'GRADIENT_LINEAR':
                case 'GRADIENT_RADIAL':
                case 'GRADIENT_DIAMOND':
                case 'GRADIENT_ANGULAR': {
                  for (const stop of temp[0].gradientStops) {
                    invertColor(stop.color);
                  }

                  break;
                }
              }

              node[mode] = temp;
            }
          }
        }
      }
    }
  }

  figma.closePlugin();
};
