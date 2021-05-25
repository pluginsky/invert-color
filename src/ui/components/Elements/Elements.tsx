import { useState, useEffect } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { availableOptions } from '../../../shared/constants/availableOptions';
import { mapOptionName } from '../../utils/mapOptionName';
import { MessageScreen } from '../MessageScreen/MessageScreen';
import { useSearch } from '../../hooks/useSearch';
import type { Group } from '../../types/Group';

import styles from './Elements.module.scss';

type OptionsEntries = [Group, string[]];

const configuratorEntries = Object.entries(
  availableOptions
) as OptionsEntries[];

export const Elements = () => {
  const { searchValue, setSearchValue } = useSearch();

  const [configurators, setConfigurators] = useState(configuratorEntries);

  useEffect(() => {
    // const mapPattern = ([group, options]: OptionsEntries): OptionsEntries => [
    //   group,
    //   options.filter((item) => mapOptionName(item).includes(searchValue)),
    // ];

    const reducedConfigurators = configuratorEntries.reduce(
      (acc, [group, options]) => {
        if (options.length > 0) {
          return [
            ...acc,
            [
              group,
              options.filter((item) =>
                mapOptionName(item).includes(searchValue)
              ),
            ],
          ];
        }

        return acc;
      },
      []
    );

    // const filteredConfigurators = configuratorEntries
    //   .map(mapPattern)
    //   .filter(([, options]) => options.length > 0);

    setConfigurators(reducedConfigurators);
  }, [searchValue]);

  return (
    // TODO classnames
    <div className={configurators.length > 0 ? undefined : styles.fullLayout}>
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
        {configurators.length > 0 ? (
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
