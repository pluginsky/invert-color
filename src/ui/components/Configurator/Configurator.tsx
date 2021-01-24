import React, { memo, useCallback, useRef } from 'react';
import { SectionTitle, Checkbox } from 'react-figma-ui';

import { useStore, useSearch } from '../../store';

import styles from './Configurator.module.scss';

type ConfiguratorProps = {
  readonly title: string;
  readonly options: string[];
};

const prepareOptionName = (option: string) => {
  return option.replace(/_/g, ' ');
};

export const Configurator = memo<ConfiguratorProps>(({ title, options }) => {
  const { selected, addToSelected, removeFromSelected } = useStore(
    (state) => state
  );

  const { searchValue } = useSearch();

  const checkCounter = useRef(0);

  // TODO refactor
  // TODO toggle only visible (after filter)
  const handleTitleClick = useCallback(() => {
    if (checkCounter.current % 2 === 0) {
      options.map((option) => addToSelected(option));
    } else {
      options.map((option) => removeFromSelected(option));
    }

    checkCounter.current += 1;
  }, [addToSelected, options, removeFromSelected]);

  return (
    <div className={styles.configurator}>
      <SectionTitle className={styles.sectionTitle} onClick={handleTitleClick}>
        {title}
      </SectionTitle>

      {options
        .filter((option) => option.includes(searchValue))
        .map((option) => (
          <Checkbox
            id={option}
            containerProps={{ className: styles.option }}
            checked={selected.includes(option)}
            // TODO refactor
            onClick={() => {
              if (selected.includes(option)) {
                removeFromSelected(option);
              } else {
                addToSelected(option);
              }
            }}
          >
            {prepareOptionName(option)}
          </Checkbox>
        ))}
    </div>
  );
});
