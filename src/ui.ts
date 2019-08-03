import './ui.css';

document.getElementById('apply').onclick = () => {
  const reverseOptions = document.querySelectorAll(
    '#reverse input[type="checkbox"]:checked'
  );

  const reverse = [];

  reverseOptions.forEach(option => reverse.push(option.id));

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
        type: 'reverse-color',
        reverse,
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
