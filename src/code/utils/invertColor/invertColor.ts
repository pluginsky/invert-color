import type { Color } from '../../types/Color';

export const invertColor = (color: Color) => {
  color.r = 1 - color.r;
  color.g = 1 - color.g;
  color.b = 1 - color.b;

  return color;
};
