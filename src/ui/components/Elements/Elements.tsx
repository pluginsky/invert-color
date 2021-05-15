import { useState, useEffect } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { options } from '../../../shared/constants/options';
import { prepareOptionName } from '../../utils/prepareOptionName';
import { MessageScreen } from '../MessageScreen/MessageScreen';
import type { Group } from '../../../shared/types/Options';

import styles from './Elements.module.scss';

type OptionsEntries = [Group, string[]];

const configuratorsEntries = Object.entries(options) as OptionsEntries[];

export const Elements = () => {
  const [searchValue, setSearchValue] = useState('');

  const [configurators, setConfigurators] = useState(configuratorsEntries);

  useEffect(() => {
    const mapPattern = ([
      group,
      optionGroup,
    ]: OptionsEntries): OptionsEntries => [
      group,
      optionGroup.filter((item) =>
        prepareOptionName(item).includes(searchValue)
      ),
    ];

    const filteredConfigurators = configuratorsEntries
      .map(mapPattern)
      .filter(([, optionGroup]) => optionGroup.length > 0);

    setConfigurators(filteredConfigurators);
  }, [searchValue]);

  return (
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

      {configurators.length > 0 ? (
        configurators.map(([group, optionGroup]) => (
          <Configurator group={group} options={optionGroup} key={group} />
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
