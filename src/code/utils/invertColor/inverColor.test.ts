import { invertColor } from './invertColor';

describe('invertColor', () => {
  it('should invert RGBA color', () => {
    const colorInRgba = {
      r: 1,
      g: 0.234,
      b: 0.5,
      a: 1,
    };

    expect(invertColor(colorInRgba)).toEqual({
      r: 0,
      g: 0.766,
      b: 0.5,
      a: 1,
    });
  });
});
