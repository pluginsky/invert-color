import { useCallback, useState } from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { Tabs } from './components/Tabs/Tabs';
import { Colors } from './components/Colors/Colors';
import { options } from '../shared/constants/options';
import { useOptions } from './hooks/useOptions';
import type { Options } from '../shared/types/Options';
import type { Tab, TabId } from './types/Tab';

import styles from './ui.module.scss';

type HandleGetSettingsCallback = (data?: Options) => void;

export type PluginMessage = {
  readonly type: 'get-settings';
  readonly data?: Options;
};

// TODO move to shared
type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;

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
  const [activeTab, setActiveTab] = useState<TabId>('elements'); // TODO

  const { setSelected } = useOptions();

  const handleGetSettings = useCallback<HandleGetSettingsCallback>(
    (data) => {
      if (!data) {
        return setSelected(options);
      }

      setSelected(data);
    },
    [setSelected]
  );

  onmessage = (event: ExtendedMessageEvent) => {
    const message = event.data.pluginMessage;

    if (message.type === 'get-settings') {
      handleGetSettings(message.data);
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
        {/* TODO lazy? */}
        {activeTab === 'colors' ? <Colors /> : <Elements />}
      </section>

      <Actions />
    </main>
  );
};
