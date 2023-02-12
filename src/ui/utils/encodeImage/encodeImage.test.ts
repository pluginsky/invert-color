import { encodeImage } from '.';

describe.skip('encodeImage', () => {
  it('encodes a canvas image to a Uint8Array', async () => {
    const canvas = new HTMLCanvasElement();
    const ctx: any = canvas.getContext('2d');
    const imageData = new ImageData(new Uint8ClampedArray(4), 1, 1);

    const encodedImage = await encodeImage(canvas, ctx, imageData);

    expect(encodedImage).toBeInstanceOf(Uint8Array);
  });

  it('rejects the promise with an error if the blob could not be read', async () => {
    const canvas = new HTMLCanvasElement();
    const ctx: any = canvas.getContext('2d');
    const imageData = new ImageData(new Uint8ClampedArray(4), 1, 1);

    canvas.toBlob = jest.fn().mockImplementation((callback) => callback());

    const reader = new FileReader();
    reader.readAsArrayBuffer = jest.fn().mockImplementation(() => {
      throw new Error('Could not read from blob');
    });

    const encodedImagePromise = encodeImage(canvas, ctx, imageData);

    await expect(encodedImagePromise).rejects.toEqual(
      new Error('Could not read from blob')
    );
  });
});
