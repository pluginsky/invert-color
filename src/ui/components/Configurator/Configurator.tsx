import { memo, useCallback } from 'react';
import { SectionTitle, Checkbox } from 'react-figma-ui';

import { useOptions } from '../../hooks/useOptions';
import { prepareOptionName } from '../../utils/prepareOptionName';
import type { Group } from '../../../shared/types/Options';

import styles from './Configurator.module.scss';

// TODO strict types for option
type HandleClickCallback = (option: string) => void;

// TODO strict types for options
type ConfiguratorProps = {
  readonly group: Group;
  readonly options: string[];
};

const SECTION_TITLES: Record<Group, string> = {
  parts: 'Parts',
  nodes: 'Nodes',
  paints: 'Paints',
};

export const Configurator = memo<ConfiguratorProps>(({ group, options }) => {
  const { selected, addToSelected, removeFromSelected } = useOptions();

  // TODO merge with handleClick
  const handleTitleClick = useCallback(() => {
    const selectedAvailable = selected[group].filter((item) =>
      options.includes(item)
    );

    if (options.length > selectedAvailable.length) {
      return options.map((option) => {
        if (selectedAvailable.includes(option)) {
          return options;
        }

        return addToSelected(option, group);
      });
    }

    return options.map((option) => removeFromSelected(option, group));
  }, [addToSelected, options, removeFromSelected, selected, group]);

  // TODO merge with handleTitleClick
  const handleClick = useCallback<HandleClickCallback>(
    (option) => {
      if (selected?.[group].includes(option)) {
        return removeFromSelected(option, group);
      }

      return addToSelected(option, group);
    },
    [addToSelected, removeFromSelected, selected, group]
  );

  return (
    <div className={styles.configurator}>
      <SectionTitle className={styles.sectionTitle} onClick={handleTitleClick}>
        {SECTION_TITLES[group]}
      </SectionTitle>

      {options.map((option) => (
        <Checkbox
          id={option}
          key={option}
          containerProps={{ className: styles.option }}
          checked={selected?.[group].includes(option)}
          // TODO onChange
          onClick={() => handleClick(option)}
          readOnly
        >
          {/* TODO prepare dictionary for options names (key: value) like SECTION_TITLES */}
          {prepareOptionName(option)}
        </Checkbox>
      ))}
    </div>
  );
});
