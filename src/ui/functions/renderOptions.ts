import { section } from '../templates/section';
import { checkbox } from '../templates/checkbox';

export const renderOptions = (optionsSections: { [key: string]: string[] }) => {
  let html = ``;

  Object.entries(optionsSections).forEach(([sectionName, sectionOptions]) => {
    let options = ``;

    if (sectionOptions.length > 0) {
      for (const sectionOption of sectionOptions) {
        options += checkbox(sectionOption);
      }
    }

    html += section({ sectionName, options });
  });

  document.querySelector('section').innerHTML = html;

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
