import { renderOptions } from './functions/renderOptions';

import { options } from '../constants/options';

import './figma-ui/main.min.css';
import './ui.css';

import './figma-ui/scripts.min.js';

import './events/onload';
import './events/onsave';
import './events/onsaveinvert';
import './events/onmessage';
import './events/oncancel';

iconInput.init();

renderOptions(options);

document.querySelector('#filter').addEventListener('change', e => {
  let optionsSections = {};

  Object.entries(options).forEach(([sectionName, sectionOptions]) => {
    const filteredOptions = sectionOptions.filter(sectionOption =>
      sectionOption.includes((e.target as HTMLInputElement).value)
    );

    if (filteredOptions.length > 0) {
      optionsSections[sectionName] = filteredOptions;
    }
  });

  renderOptions(optionsSections);
});
