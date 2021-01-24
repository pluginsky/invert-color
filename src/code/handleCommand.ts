import { handleUI } from './handleUI';

export const handleCommands = () => {
  switch (figma.command) {
    case 'invert':
      break;

    case 'configure':
      handleUI();

      break;

    case 'configure-from-elements':
      break;

    case 'exclude-colors':
      break;

    default:
      break;
  }
};
