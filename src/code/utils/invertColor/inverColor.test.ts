import { invertColor } from './invertColor';

describe('invertColor', () => {
  // TODO it.each
  it.each([
    {
      base: {
        r: 1,
        g: 0.234,
        b: 0.5,
        a: 1,
      },
      inverted: {
        r: 0,
        g: 0.766,
        b: 0.5,
        a: 1,
      },
    },
  ])('should invert RGBA color', ({ base, inverted }) => {
    expect(invertColor(base)).toEqual(inverted);
  });
});
