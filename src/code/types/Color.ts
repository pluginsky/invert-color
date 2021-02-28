export type Color = {
  -readonly [K in keyof RGBA]: RGBA[K];
};
