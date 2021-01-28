// import { invert } from './actions/invert';
import { handleUI } from './handleUI';

export const handleCommands = () => {
  switch (figma.command) {
    case 'invert':
      // get storage
      // if not exists invert all?
      // if not exists open ui?
      // invert();

      break;

    case 'configure':
      handleUI();

      break;

    case 'configure-from-elements':
      // const configuration = await configureFromElements();

      // handleUI({configuration});

      break;

    case 'exclude-colors':
      // const colors = await excludeColors();

      // handleUI({colors});

      break;

    default:
      break;
  }
};
