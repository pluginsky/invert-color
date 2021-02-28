import { Checkbox, SectionTitle } from 'react-figma-ui';
import { memo, useCallback } from 'react';

import type { Options } from '../../../shared/types/Options';
import { prepareOptionName } from '../../utils/prepareOptionName';
import { useOptions } from '../../hooks/useOptions';

import styles from './Configurator.module.scss';

type HandleClickCallback = (option: string) => void;

type ConfiguratorProps = {
  readonly title: keyof Options;
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
      if (!selected?.[title].includes(option)) {
        return addToSelected(option, title);
        // return removeFromSelected(option, title);
      }

      // return addToSelected(option, title);
      return removeFromSelected(option, title);
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
