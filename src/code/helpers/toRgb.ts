export const toRgb = (tones: number) => {
  const rgb = [];

  for (const tone of Object.values(tones)) {
    rgb.push(Math.round(255 * tone));
  }

  rgb.pop();

  return rgb.join(', ');
};
