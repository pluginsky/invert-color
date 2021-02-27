import { options } from '../../shared/constants/options';
import { clone } from '../utils/clone/clone';
import { Options } from '../../shared/types/Options';

export const configureFromElements = () => {
  // TODO
  const settings: Options = {
    nodes: [],
    parts: [],
    paints: [],
  };

  // TODO? include layers
  figma.currentPage.selection.forEach((selected) => {
    if (options.nodes.includes(selected.type.toLowerCase())) {
      // TODO
      if (settings.nodes.includes(selected.type.toLowerCase())) {
        return;
      }

      settings.nodes.push(selected.type.toLowerCase());
    }

    options.parts.forEach((part) => {
      if (!selected[part]) {
        return;
      }

      // TODO
      if (settings.parts.includes(part.toLowerCase())) {
        return;
      }

      settings.parts.push(part);

      const temporary = clone(selected[part]);

      temporary.forEach((level) => {
        // TODO
        if (options.paints.includes(level.type.toLowerCase())) {
          if (settings.paints.includes(level.type.toLowerCase())) {
            return;
          }

          settings.paints.push(level.type.toLowerCase());
        }
      });
    });
  });

  // console.log(settings);

  return settings;
};
