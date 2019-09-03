export const encode = async (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  imageData: ImageData
) => {
  ctx.putImageData(imageData, 0, 0);

  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob: Blob) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(new Uint8Array(reader.result as ArrayBuffer));
      };

      reader.onerror = () => {
        reject(new Error('Could not read from blob'));
      };

      reader.readAsArrayBuffer(blob);
    });
  });
};
