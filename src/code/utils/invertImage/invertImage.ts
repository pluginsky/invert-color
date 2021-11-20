// TODO try/catch
export const invertImage = async (node: ImagePaint) => {
  const newFills = [];

  const image = figma.getImageByHash(node.imageHash);
  const bytes = await image.getBytesAsync();

  figma.showUI(__html__, { visible: false });

  figma.ui.postMessage({ type: 'invert-image', data: { bytes } });

  const newBytes: Uint8Array = await new Promise((resolve) => {
    figma.ui.onmessage = (
      message: MessageEvent & { data: { bytes: Uint8Array } }
    ) => {
      // console.log({ message });
      if (message.type === 'invert-image') {
        resolve(message.data.bytes);
      }
    };
  });

  const newPaint = JSON.parse(JSON.stringify(node));

  newPaint.imageHash = figma.createImage(newBytes).hash;
  newFills.push(newPaint);

  return newFills;
};
