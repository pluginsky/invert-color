// TODO improve types
export const clone = <T extends symbol | readonly Paint[] | readonly Effect[]>(
  node: T
): T => {
  return JSON.parse(JSON.stringify(node));
};
