import { useState, useEffect } from 'react';
import { Input } from 'react-figma-ui';

import { Configurator } from '../Configurator/Configurator';
import { availableOptions } from '../../../shared/constants/availableOptions';
import { prepareOptionName } from '../../utils/prepareOptionName';
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
    // TODO classnames
    <div className={configurators.length > 0 ? undefined : styles.fullLayout}>
      {/* <Onboarding iconProps={{ iconName: "minus" }}>
        Select Parts, Nodes and Paints to invert. You can use search field to filter options. By clicking on group heading e.g.: Paints you can toggle all visible items for group.
      </Onboarding> */}

      {/* TODO */}
      {/* <Onboarding iconProps={{ iconName: "close" }}>
        Select Parts, Nodes and Paints to invert.
      </Onboarding>

      <Onboarding iconProps={{ iconName: "close" }}>
        You can use search field to filter options. By clicking on group heading e.g.: Paints you can toggle all visible items for group.
      </Onboarding>

      <Onboarding iconProps={{ iconName: "close" }}>
        By clicking on group heading e.g.: Paints you can toggle all visible items for group.
      </Onboarding>

      <Onboarding iconProps={{ iconName: "close" }}>
        Cancel, Save, Save & Invert
      </Onboarding> */}

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
