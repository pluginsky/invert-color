import { decodeImage } from '.';

describe.skip('decodeImage', () => {
  it('decodes an image', async () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const bytes = new Blob(['test data'], { type: 'image/jpeg' });

    const imageData = await decodeImage(canvas, ctx, bytes);

    expect(imageData.width).toBe(canvas.width);
    expect(imageData.height).toBe(canvas.height);
  });
});
