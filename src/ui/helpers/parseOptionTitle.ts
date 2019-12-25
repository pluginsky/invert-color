export const parseOptionTitle = (title: string) => {
  const words = title.split('_');

  for (let word of words) {
    console.log(word);

    return `${word[0].toUpperCase()}${word.slice(1)}`;
  }

  return words.join(' ');
};
