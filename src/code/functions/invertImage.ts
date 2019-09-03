export const invertImage = async (node: ImagePaint) => {
  const newFills = [];

  const image = figma.getImageByHash(node.imageHash);
  const bytes = await image.getBytesAsync();

  figma.showUI(__html__, { visible: false });

  figma.ui.postMessage(bytes);

  const newBytes: Uint8Array = await new Promise(resolve => {
    figma.ui.onmessage = (message: MessageEvent | any) => {
      if (message.type === 'invert-image') {
        resolve(message.bytes);
      }
    };
  });

  const newPaint = JSON.parse(JSON.stringify(node));

  newPaint.imageHash = figma.createImage(newBytes).hash;
  newFills.push(newPaint);

  return newFills;
};
