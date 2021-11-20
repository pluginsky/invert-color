import { availableOptions } from '../../shared/constants/availableOptions';
import { clone } from '../utils/clone/clone';
import type { Options } from '../../shared/types/Options';

export const configureFromElements = (selections?: readonly SceneNode[]) => {
  const options: Options = {
    nodes: [],
    parts: [],
    paints: [],
  };

  // TODO
  let z = selections || figma.currentPage.selection;

  // TODO? include layers
  // TODO try/catch
  z.map(async (selected) => {
    // console.log(
    //   selected.type,
    //   availableOptions.nodes.includes(selected.type.toLowerCase()),
    //   settings.nodes.includes(selected.type.toLowerCase())
    // );

    if (availableOptions.nodes.includes(selected.type.toLowerCase())) {
      if (options.nodes.includes(selected.type.toLowerCase())) {
        return;
      }

      options.nodes.push(selected.type.toLowerCase());
    }

    availableOptions.parts.forEach((part) => {
      // console.log(part);

      if (!selected[part] || options.parts.includes(part.toLowerCase())) {
        return;
      }

      options.parts.push(part);

      const temporary = clone(selected[part]);

      // TODO any
      temporary.forEach((level: any) => {
        const levelType = level.type.toLowerCase();

        // console.log(levelType);

        if (availableOptions.paints.includes(levelType)) {
          if (options.paints.includes(levelType)) {
            return;
          }

          options.paints.push(levelType);
        }
      });
    });

    if ('children' in selected) {
      // console.log(selected['children'], 'test');

      configureFromElements(selected['children']);
    }
  });

  // console.log(settings);

  return options;
};
