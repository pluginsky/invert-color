// TODO improve types
export const clone = (node: symbol | readonly Paint[] | readonly Effect[]) => {
  return JSON.parse(JSON.stringify(node));
};
