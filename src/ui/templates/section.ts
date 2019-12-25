import { parseOptionTitle } from '../helpers/parseOptionTitle';

export const section = (sectionName: string, options: string) => `
  <div class="options" id="${sectionName}">
    <div class="section-title">
      ${parseOptionTitle(sectionName)}
    </div>

    ${options}
  </div>
`;
