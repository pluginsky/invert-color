export const parseOptionTitle = (title: string) => {
  const words = title.split('_');

  // for (let word of words) {
  //   return `${word[0].toUpperCase()}${word.slice(1)}`;
  // }

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
};
