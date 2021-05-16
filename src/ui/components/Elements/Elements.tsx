import { useState, useEffect } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { availableOptions } from '../../../shared/constants/availableOptions';
import { prepareOptionName } from '../../utils/prepareOptionName';
import { MessageScreen } from '../MessageScreen/MessageScreen';
import type { Group } from '../../../shared/types/Options';

import styles from './Elements.module.scss';

// TODO strict types Options[Group]
type OptionsEntries = [Group, string[]];

// TODO update
const configuratorsEntries = Object.entries(
  availableOptions
) as OptionsEntries[];

export const Elements = () => {
  const [searchValue, setSearchValue] = useState('');

  const [configurators, setConfigurators] = useState(configuratorsEntries);

  useEffect(() => {
    const mapPattern = ([group, options]: OptionsEntries): OptionsEntries => [
      group,
      options.filter((item) => prepareOptionName(item).includes(searchValue)),
    ];

    const filteredConfigurators = configuratorsEntries
      .map(mapPattern)
      .filter(([, options]) => options.length > 0);

    setConfigurators(filteredConfigurators);
  }, [searchValue]);

  return (
    // TODO? move configurators.length > 0 to const
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

      {/* TODO? move configurators.length > 0 to const */}
      {configurators.length > 0 ? (
        // TODO? rename group to groupName
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
  );
};
