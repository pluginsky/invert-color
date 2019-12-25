import { parseOptionTitle } from '../helpers/parseOptionTitle';

export const section = ({ sectionName, options }) => `
  <div class="options" id="${sectionName}">
    <div class="section-title">
      ${parseOptionTitle(sectionName)}
    </div>

    ${options}
  </div>
`;
