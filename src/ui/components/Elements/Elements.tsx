import { useState, useEffect, useMemo, memo } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator';
import { availableOptions } from '../../../shared/constants/availableOptions';
import { formatOptionName } from '../../utils/formatOptionName';
import { MessageScreen } from '../MessageScreen';
import { useSearch } from '../../hooks/stores/useSearch';
import type { Group } from '../../types/Group';

import styles from './Elements.module.scss';

type OptionsEntries = [Group, string[]];

const configuratorsEntries = Object.entries(
  availableOptions
) as OptionsEntries[];

export const Elements = memo(() => {
  const { searchValue, setSearchValue } = useSearch();

  const [configurators, setConfigurators] = useState(configuratorsEntries);

  useEffect(() => {
    const mapPattern = ([group, options]: OptionsEntries): OptionsEntries => [
      group,
      options.filter((item) => formatOptionName(item).includes(searchValue)),
    ];

    const filteredConfigurators = configuratorsEntries
      .map(mapPattern)
      .filter(([, options]) => options.length > 0);

    setConfigurators(filteredConfigurators);
  }, [searchValue]);

  const hasFoundConfigurators = useMemo(
    () => configurators.length > 0,
    [configurators.length]
  );

  return (
    <div className={hasFoundConfigurators ? undefined : styles.fullLayout}>
      <div className={styles.toolbar}>
        <Input
          value={searchValue}
          placeholder="Search..."
          containerProps={{ className: styles.search }}
          iconProps={{ iconName: 'search' }}
          onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
        />
      </div>

      <div className={styles.elementsContent}>
        {hasFoundConfigurators ? (
          configurators.map(([group, options]) => (
            <Configurator group={group} options={options} key={group} />
          ))
        ) : (
          <MessageScreen
            title="No results"
            message="Parts, Nodes and Paints not found"
          />
        )}
      </div>
    </div>
  );
});
