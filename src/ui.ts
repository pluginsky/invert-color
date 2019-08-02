import './ui.css';

document.getElementById('reverse').onclick = () => {
  const backgrounds = document.getElementById(
    'backgrounds'
  ) as HTMLInputElement;
  const strokes = document.getElementById('strokes') as HTMLInputElement;
  const effects = document.getElementById('effects') as HTMLInputElement;

  parent.postMessage(
    {
      pluginMessage: {
        type: 'reverse-color',
        include: {
          backgrounds: backgrounds.checked,
          strokes: strokes.checked,
          effects: effects.checked
        }
      }
    },
    '*'
  );
};

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
};
