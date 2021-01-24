import React, { useState } from 'react';

import { Tabs } from './components/Tabs/Tabs';
import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { Colors } from './components/Colors/Colors';
import type { TabId, Tab } from './types/Tab';

import styles from './ui.module.scss';

export const tabs = [
  {
    name: 'Elements',
    id: 'elements',
  },
  {
    name: 'Excluded Colors',
    id: 'colors',
  },
] as Tab[];

export const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('elements');

  return (
    <main className={styles.pluginWrapper}>
      <Tabs
        items={tabs}
        active={activeTab}
        onChange={(tab) => setActiveTab(tab)}
      />

      <section className={styles.tabsContent}>
        {activeTab === 'colors' ? <Colors /> : <Elements />}
      </section>

      <Actions />
    </main>
  );
};
