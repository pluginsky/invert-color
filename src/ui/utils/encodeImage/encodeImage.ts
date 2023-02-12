import { Bytes } from '../../../shared/types/Bytes';

export const encodeImage = async (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  imageData: ImageData
) => {
  ctx.putImageData(imageData, 0, 0);

  return await new Promise<Bytes>((resolve, reject) => {
    canvas.toBlob((blob) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(new Uint8Array(reader.result as ArrayBuffer));
      };

      reader.onerror = () => {
        reject(new Error('Could not read from blob'));
      };

      reader.readAsArrayBuffer(blob as Blob);
    });
  });
};
