import React, { memo } from 'react';
import { SectionTitle } from 'react-figma-ui';
import clsx from 'clsx';

// import type { TabId, Tab } from '../../types/Tab';

import styles from './Tabs.module.scss';

type TabsProps = {
  // readonly items: Tab[];
  // readonly active: TabId;
  // onChange: (item: TabId) => void;
};

export const Tabs = memo<any>(({ items, active, onChange }) => {
  return (
    <nav className={styles.tabs}>
      {items.map(({ name, id }) => (
        <SectionTitle
          className={clsx(styles.tab, id === active && styles.tabActive)}
          onClick={() => onChange(id)}
          key={id}
        >
          {name}
        </SectionTitle>
      ))}
    </nav>
  );
});
