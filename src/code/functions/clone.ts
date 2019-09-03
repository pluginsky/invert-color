export const clone = (value: symbol | readonly Paint[] | readonly Effect[]) => {
  return JSON.parse(JSON.stringify(value));
};
