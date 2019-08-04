import './ui.css';

document.getElementById('apply').onclick = () => {
  const invertOptions = document.querySelectorAll(
    '#invert input[type="checkbox"]:checked'
  );

  const invert = [];

  invertOptions.forEach(option => invert.push(option.id));

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

  parent.postMessage(
    {
      pluginMessage: {
        type: 'invert-color',
        invert,
        elements,
        patterns
      }
    },
    '*'
  );
};

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
};
