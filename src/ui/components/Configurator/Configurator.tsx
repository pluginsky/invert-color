import React, { memo, useCallback } from 'react';
import { SectionTitle, Checkbox } from 'react-figma-ui';

import { useOptions } from '../../hooks/useOptions';
import { prepareOptionName } from '../../helpers/prepareOptionName';
import { Selected } from '../../../shared/types/Selected';

import styles from './Configurator.module.scss';

type ConfiguratorProps = {
  readonly title: keyof Selected;
  readonly options: string[];
};

export const Configurator = memo<ConfiguratorProps>(({ title, options }) => {
  const { selected, addToSelected, removeFromSelected } = useOptions(
    (state) => state
  );

  // TODO not working on filter
  const handleTitleClick = useCallback(() => {
    // console.log(options.length, selected[title]);

    // TODO
    const x = selected[title].filter((z) => options.includes(z));

    // TODO
    if (options.length > x.length) {
      // TODO refactor
      return options.map((option) => {
        // console.log(selected?.[title], options);
        // TODO refactor
        if (!x.includes(option)) {
          return addToSelected(option, title);
        }

        return options;
      });
    }

    return options.map((option) => removeFromSelected(option, title));
  }, [addToSelected, options, removeFromSelected, selected, title]);

  // TODO merge with handleTitleClick?
  const handleClick = useCallback(
    (option: string) => {
      // TODO update types (callback)
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
          onClick={() => handleClick(option)} // TODO from event?
          // onChange={(e) => handleClick(option)} // TODO
          readOnly // TODO
        >
          {prepareOptionName(option)}
        </Checkbox>
      ))}
    </div>
  );
});
