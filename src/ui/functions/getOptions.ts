export const getOptions = () => {
  const partsOptions = document.querySelectorAll(
    '#parts input[type="checkbox"]:checked'
  );

  const parts = [];

  partsOptions.forEach(option => parts.push(option.id));

  const elementsOptions = document.querySelectorAll(
    '#elements input[type="checkbox"]:checked'
  );

  const elements = [];

  elementsOptions.forEach(option => elements.push(option.id));

  const patternsOptions = document.querySelectorAll(
    '#patterns input[type="checkbox"]:checked'
  );

  const patterns = [];

  patternsOptions.forEach(option => patterns.push(option.id));

  return { parts, elements, patterns };
};
