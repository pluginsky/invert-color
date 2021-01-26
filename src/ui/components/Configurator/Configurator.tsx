import React, { memo, useCallback, useRef, useState, useEffect } from 'react';
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

  // alert(options.length + ' ' + selected[title].length);

  const [filteredOptions, setFilteredOptions] = useState(options);

  // TODO refactor
  // TODO toggle only visible (after filter)
  const handleTitleClick = useCallback(() => {
    // const x = options.length > selected;

    // console.log('tick');

    if (options.length > selected[title].length) {
      filteredOptions.map((option) => addToSelected(option, title));

      return (checkCounter.current = 1);
    } else {
      filteredOptions.map((option) => removeFromSelected(option, title));

      return (checkCounter.current = 0);
    }

    // if (checkCounter.current % 2 === 0) {
    //   filteredOptions.map((option) => addToSelected(option, title));
    // } else {
    //   filteredOptions.map((option) => removeFromSelected(option, title));
    // }

    // checkCounter.current += 1;
  }, [
    addToSelected,
    filteredOptions,
    options.length,
    removeFromSelected,
    selected,
    title,
  ]);

  useEffect(() => {
    // TODO refactor
    setFilteredOptions(
      options.filter((option) => option.includes(searchValue))
    );
  }, [options, searchValue]);

  return (
    <div className={styles.configurator}>
      {/* TODO add visible checkbox */}
      <SectionTitle className={styles.sectionTitle} onClick={handleTitleClick}>
        {title}
      </SectionTitle>

      {filteredOptions.map((option) => (
        <Checkbox
          id={option}
          key={option}
          containerProps={{ className: styles.option }}
          checked={selected?.[title].includes(option)}
          // TODO onchange
          onChange={null}
          // TODO refactor
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
