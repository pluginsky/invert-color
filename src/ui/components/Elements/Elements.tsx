import { useState, useEffect, useMemo } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { availableOptions } from '../../../shared/constants/availableOptions';
import { formatOptionName } from '../../utils/formatOptionName';
import { MessageScreen } from '../MessageScreen/MessageScreen';
import { useSearch } from '../../hooks/useSearch';
import type { Group } from '../../types/Group';

import styles from './Elements.module.scss';

type OptionsEntries = [Group, string[]];

const configuratorsEntries = Object.entries(
  availableOptions
) as OptionsEntries[];

export const Elements = () => {
  const { searchValue, setSearchValue } = useSearch();

  const [configurators, setConfigurators] = useState(configuratorsEntries);

  useEffect(() => {
    // TODO rename
    const mapPattern = ([group, options]: OptionsEntries): OptionsEntries => [
      group,
      options.filter((item) => formatOptionName(item).includes(searchValue)),
    ];

    // TODO reduce
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
          // TODO remove as HTMLInputElement
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
};
