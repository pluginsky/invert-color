import { section } from '../templates/section';
import { checkbox } from '../templates/checkbox';

export const renderOptions = (optionsSections: { [key: string]: string[] }) => {
  let html = ``;

  const optionsWrapper = document.querySelector('section');

  if (Object.entries(optionsSections).length > 0) {
    if (optionsWrapper.classList.contains('options-not-found')) {
      optionsWrapper.classList.remove('options-not-found');
    }

    Object.entries(optionsSections).forEach(([sectionName, sectionOptions]) => {
      let options = ``;

      if (sectionOptions.length > 0) {
        for (const sectionOption of sectionOptions) {
          options += checkbox(sectionOption);
        }
      }

      html += section(sectionName, options);
    });
  } else {
    optionsWrapper.classList.add('options-not-found');

    html += `<p class="type type--neg-medium-bold">Options for query not found</p>`;
  }

  optionsWrapper.innerHTML = html;

  document.querySelectorAll('.options').forEach(element => {
    let clicks = 0;

    element.querySelector('.section-title').addEventListener('click', () => {
      clicks++;

      const boxes: NodeListOf<HTMLInputElement> = element.querySelectorAll(
        '.checkbox__box'
      );

      boxes.forEach(box => {
        box.checked = clicks % 2 === 1;
      });
    });
  });
};
