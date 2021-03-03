import { useState, useEffect } from 'react';
import { Input, IconButton } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { options } from '../../../shared/constants/options';
import { prepareOptionName } from '../../utils/prepareOptionName';
import { MessageScreen } from '../MessageScreen/MessageScreen';
import type { Options } from '../../../shared/types/Options';
import { useSearch } from '../../hooks/useSearch';

import styles from './Elements.module.scss';

// TODO
// keyof Options
// TODO
type Entries = [keyof Options, string[]];

const configuratorsEntries = Object.entries(options) as Entries[];

export const Elements = () => {
  const { searchValue, setSearchValue } = useSearch();

  const [configurators, setConfigurators] = useState<Entries[]>(
    configuratorsEntries
  );

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
    <div className={configurators.length > 0 ? undefined : styles.fullLayout}>
      <div className={styles.toolbar}>
        <IconButton
          iconProps={{ iconName: 'blend' }}
          disabled={configurators.length === 0}
        />

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
          <Configurator title={title} options={optionGroup} key={title} />
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
