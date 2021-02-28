// TODO types
export const hueToRgb = (tones: object) => {
  const rgb = [];

  // TODO
  Object.values(tones).map((tone) => rgb.push(Math.round(255 * tone)));

  // for (const tone of Object.values(tones)) {
  //   rgb.push(Math.round(255 * tone));
  // }

  rgb.pop();

  return rgb.join(', ');
};
