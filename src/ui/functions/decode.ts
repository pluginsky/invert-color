export const decode = async (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  bytes: BlobPart
) => {
  const url = URL.createObjectURL(new Blob([bytes]));

  const image = (await new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = () => reject();

    img.src = url;
  })) as HTMLImageElement;

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0);

  const imageData = ctx.getImageData(0, 0, image.width, image.height);

  return imageData;
};
