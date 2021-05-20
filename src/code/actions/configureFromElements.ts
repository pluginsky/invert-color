import { availableOptions } from '../../shared/constants/availableOptions';
import { clone } from '../utils/clone/clone';
import type { Options } from '../../shared/types/Options';

export const configureFromElements = (selections?: readonly SceneNode[]) => {
  const settings: Options = {
    nodes: [],
    parts: [],
    paints: [],
  };

  let z = selections || figma.currentPage.selection;

  // TODO? include layers
  z.map(async (selected) => {
    console.log(
      selected.type,
      availableOptions.nodes.includes(selected.type.toLowerCase()),
      settings.nodes.includes(selected.type.toLowerCase())
    );

    if (availableOptions.nodes.includes(selected.type.toLowerCase())) {
      if (settings.nodes.includes(selected.type.toLowerCase())) {
        return;
      }

      settings.nodes.push(selected.type.toLowerCase());
    }

    availableOptions.parts.forEach((part) => {
      console.log(part);

      if (!selected[part] || settings.parts.includes(part.toLowerCase())) {
        return;
      }

      settings.parts.push(part);

      const temporary = clone(selected[part]);

      // TODO any
      temporary.forEach((level: any) => {
        const levelType = level.type.toLowerCase();

        console.log(levelType);

        if (availableOptions.paints.includes(levelType)) {
          if (settings.paints.includes(levelType)) {
            return;
          }

          settings.paints.push(levelType);
        }
      });
    });

    if ('children' in selected) {
      console.log(selected['children'], 'www');

      configureFromElements(selected['children']);
    }
  });

  console.log(settings);

  return settings;
};
