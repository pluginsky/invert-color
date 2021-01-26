import React from 'react';
import { Input, IconButton } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { options } from '../../../shared/constants/options';
import { useSearch } from '../../store';

import styles from './Elements.module.scss';

// TODO add select all
// TODO message not found
export const Elements = () => {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <>
      <div className={styles.toolbar}>
        {/* <IconButton iconProps={{ iconName: 'check' }} /> */}

        {/* TODO add button select all inline with search */}
        <Input
          value={searchValue}
          placeholder="Search..."
          containerProps={{ className: styles.search }}
          iconProps={{ iconName: 'search' }}
          onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
        />
      </div>

      {Object.entries(options).map(([title, optionGroup]) => (
        <Configurator title={title} options={optionGroup} key={title} />
      ))}
    </>
  );
};
