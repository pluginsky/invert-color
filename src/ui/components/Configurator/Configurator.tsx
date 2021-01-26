import React, { memo, useCallback, useRef, useState, useEffect } from 'react';
import { SectionTitle, Checkbox } from 'react-figma-ui';

import { useOptions } from '../../hooks/useOptions';
import { useSearch } from '../../hooks/useSearch';

import styles from './Configurator.module.scss';

type ConfiguratorProps = {
  readonly title: string;
  readonly options: string[];
};

const prepareOptionName = (option: string) => {
  return option.replace(/_/g, ' ');
};

export const Configurator = memo<ConfiguratorProps>(({ title, options }) => {
  const { selected, addToSelected, removeFromSelected } = useOptions(
    (state) => state
  );

  const { searchValue } = useSearch();

  const checkCounter = useRef(0);

  const [filteredOptions, setFilteredOptions] = useState(options);

  const handleTitleClick = useCallback(() => {
    if (checkCounter.current % 2 === 0) {
      filteredOptions.map((option) => addToSelected(option, title));
    } else {
      filteredOptions.map((option) => removeFromSelected(option, title));
    }

    checkCounter.current += 1;
  }, [addToSelected, filteredOptions, removeFromSelected, title]);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) => option.includes(searchValue))
    );
  }, [options, searchValue]);

  return (
    <div className={styles.configurator}>
      <SectionTitle className={styles.sectionTitle} onClick={handleTitleClick}>
        {title}
      </SectionTitle>

      {filteredOptions.map((option) => (
        <Checkbox
          id={option}
          key={option}
          containerProps={{ className: styles.option }}
          checked={selected?.[title].includes(option)}
          onClick={() => {
            if (selected?.[title].includes(option)) {
              removeFromSelected(option, title);
            } else {
              addToSelected(option, title);
            }
          }}
        >
          {prepareOptionName(option)}
        </Checkbox>
      ))}
    </div>
  );
});
