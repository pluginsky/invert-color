import React, { memo, useCallback } from 'react';
import { SectionTitle, Checkbox } from 'react-figma-ui';

import { useStore } from '../../store';

import styles from './Configurator.module.scss';

type ConfiguratorProps = {
  readonly title: string;
  readonly options: string[];
};

const prepareOptionName = (option: string) => {
  return option.replace(/_/g, ' ');
};

export const Configurator = memo<ConfiguratorProps>(({ title, options }) => {
  const { selected, addToSelected } = useStore((state) => state);

  const handleTitleClick = useCallback(() => {
    options.map((option) => addToSelected(option));
  }, []);

  return (
    <div className={styles.configurator}>
      <SectionTitle className={styles.sectionTitle} onClick={handleTitleClick}>
        {title}
      </SectionTitle>

      {options.map((option) => (
        <Checkbox
          id={option}
          className={styles.option}
          containerProps={{ className: styles.option }}
          checked={selected.includes(option)}
          onClick={() => addToSelected(option)}
        >
          {prepareOptionName(option)}
        </Checkbox>
      ))}
    </div>
  );
});
