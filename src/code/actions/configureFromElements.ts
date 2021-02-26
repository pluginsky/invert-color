import { options } from '../../shared/constants/options';
import { clone } from '../utils/clone/clone';

// import { Selected } from '../../ui/types/Selected';

export const configureFromElements = () => {
  // TODO
  const settings: Selected = {
    nodes: [],
    parts: [],
    paints: [],
  };

  // const acc = (x, y) => {
  //   if (options[x].includes(y.type.toLowerCase())) {
  //     settings[x].push(y.type.toLowerCase());
  //   }
  // };

  figma.currentPage.selection.forEach((selected) => {
    if (options.nodes.includes(selected.type.toLowerCase())) {
      settings.nodes.push(selected.type.toLowerCase());
    }

    options.parts.forEach((part) => {
      if (!selected[part]) {
        return;
      }

      settings.parts.push(part);

      const temporary = clone(selected[part]);

      temporary.forEach((level) => {
        if (options.paints.includes(level.type.toLowerCase())) {
          settings.paints.push(level.type.toLowerCase());
        }
      });
    });
  });

  console.log(settings);

  return settings;
};
