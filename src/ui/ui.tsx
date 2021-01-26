import React, { useState } from 'react';

import { Tabs } from './components/Tabs/Tabs';
import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { Colors } from './components/Colors/Colors';
import { options } from '../shared/constants/options';
import { Selected, useStore } from './store';
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

type Data = {
  readonly selected?: Selected;
};

export const App = () => {
  const [activeTab, setActiveTab] = useState<TabId>('elements');

  const { setSelected } = useStore();

  const handleGetSettings = (data?: Data) => {
    if (!data?.selected) {
      return setSelected(options);
    }

    setSelected(data.selected);
  };

  onmessage = (
    event: MessageEvent<{ pluginMessage: { type: any; data: Data } }>
  ) => {
    switch (event.data.pluginMessage.type) {
      case 'get-settings':
        handleGetSettings(event.data.pluginMessage.data);

        break;

      default:
        break;
    }
  };

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
