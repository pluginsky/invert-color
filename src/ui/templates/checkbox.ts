import { parseOptionTitle } from '../helpers/parseOptionTitle';

export const checkbox = (option: string) => `
  <div class="checkbox">
    <input class="checkbox__box" type="checkbox" id="${option}" />
    <label class="checkbox__label" for="${option}">
      ${parseOptionTitle(option)}
    </label>
  </div>
`;
