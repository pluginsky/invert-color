import { useState, useEffect } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { options } from '../../../shared/constants/options';
import { prepareOptionName } from '../../helpers/prepareOptionName';
import { MessageScreen } from '../MessageScreen/MessageScreen';

import styles from './Elements.module.scss';

// TODO
type Entries = [string, string[]];

const configuratorsEntries = Object.entries(options);

export const Elements = () => {
  const [searchValue, setSearchValue] = useState('');

  const [configurators, setConfigurators] = useState(configuratorsEntries);

  useEffect(() => {
    const mapPattern = ([title, optionGroup]: Entries): Entries => [
      title,
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
    // TODO
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
        configurators.map(([title, optionGroup]) => (
          <Configurator
            title={title as any} // TODO
            options={optionGroup}
            key={title}
          />
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
