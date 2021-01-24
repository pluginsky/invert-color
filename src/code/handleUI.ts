import { save } from './actions/save';
import { invert } from './actions/invert';
import { excludeColors } from './actions/excludeColors';

const checkIsAtLeastElementSelectedOrClosePlugin = () => {
  if (!figma.currentPage.selection.length) {
    return figma.closePlugin('Select at least 1 element');
  }
};

const hideUI = () => {
  figma.ui.close();
};

const handleUIMessage = async (message: MessageEvent) => {
  // checkIsAtLeastElementSelectedOrClosePlugin();

  hideUI();

  switch (message.type) {
    case 'save':
      await save(message.data);

      break;

    case 'invert':
      invert();

      break;

    case 'save-invert':
      await save(message.data);

      invert();

      break;

    case 'exclude-colors':
      excludeColors();

      break;

    case 'cancel':
      return figma.closePlugin();

    default:
      break;
  }
};

export const handleUI = () => {
  figma.showUI(__html__, { height: 440 });

  figma.ui.onmessage = (message) => {
    handleUIMessage(message);
  };
};
