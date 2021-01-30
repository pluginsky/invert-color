import React, { useCallback } from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { options } from '../shared/constants/options';
import { useOptions } from './hooks/useOptions';
import type { Selected } from './types/Selected';

import styles from './ui.module.scss';

type HandleGetSettingsCallback = (data?: Selected) => void;

export const App = () => {
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

  onmessage = (event: MessageEvent) => {
    const { type, data } = event.data.pluginMessage;

    if (type === 'get-settings') {
      handleGetSettings(data);
    }
  };

  return (
    <main className={styles.pluginWrapper}>
      <section className={styles.tabsContent}>
        <Elements />
      </section>

      <Actions />
    </main>
  );
};
