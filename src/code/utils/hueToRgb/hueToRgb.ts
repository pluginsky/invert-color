export const hueToRgb = (tones: object) => {
  const rgb = [];

  // if ('a' in tones) {
  //   delete tones.a;
  // }

  Object.values(tones).map((tone) => rgb.push(Math.round(255 * tone)));

  // rgb.pop();

  return rgb.join(', ');
};
