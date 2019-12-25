export const parseOptionTitle = (title: string) => {
  return title
    .split('_')
    .map(word => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join(' ');
};
