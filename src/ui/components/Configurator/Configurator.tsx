import { memo, useCallback } from 'react';
import { SectionTitle, Checkbox } from 'react-figma-ui';

import { useOptions } from '../../hooks/useOptions';
import { prepareOptionName } from '../../helpers/prepareOptionName';
import { Selected } from '../../../shared/types/Selected';

import styles from './Configurator.module.scss';

type HandleClickCallback = (option: string) => void;

type ConfiguratorProps = {
  readonly title: keyof Selected;
  readonly options: string[];
};

export const Configurator = memo<ConfiguratorProps>(({ title, options }) => {
  const { selected, addToSelected, removeFromSelected } = useOptions(
    (state) => state
  );

  const handleTitleClick = useCallback(() => {
    const selectedAvailable = selected[title].filter((item) =>
      options.includes(item)
    );

    if (options.length > selectedAvailable.length) {
      // TODO refactor
      return options.map((option) => {
        if (!selectedAvailable.includes(option)) {
          return addToSelected(option, title);
        }

        return options;
      });
    }

    return options.map((option) => removeFromSelected(option, title));
  }, [addToSelected, options, removeFromSelected, selected, title]);

  // TODO merge with handleTitleClick?
  const handleClick = useCallback<HandleClickCallback>(
    (option) => {
      if (selected?.[title].includes(option)) {
        return removeFromSelected(option, title);
      }

      return addToSelected(option, title);
    },
    [addToSelected, removeFromSelected, selected, title]
  );

  return (
    <div className={styles.configurator}>
      <SectionTitle className={styles.sectionTitle} onClick={handleTitleClick}>
        {title}
      </SectionTitle>

      {options.map((option) => (
        <Checkbox
          id={option}
          key={option}
          containerProps={{ className: styles.option }}
          checked={selected?.[title].includes(option)}
          // TODO replace with onChange
          onClick={() => handleClick(option)}
          readOnly
        >
          {prepareOptionName(option)}
        </Checkbox>
      ))}
    </div>
  );
});
