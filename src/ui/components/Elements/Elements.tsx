import React, { useState } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { options } from '../../../shared/constants/options';

import styles from './Elements.module.scss';

export const Elements = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Input
        value={searchValue}
        placeholder="Search..."
        containerProps={{ className: styles.search }}
        iconProps={{ iconName: 'search' }}
        onChange={(e) => setSearchValue((e.target as HTMLInputElement).value)}
      />

      {Object.entries(options).map(([title, optionGroup]) => (
        <Configurator title={title} options={optionGroup} />
      ))}
    </>
  );
};
