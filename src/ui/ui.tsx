import React from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { options } from '../shared/constants/options';
import { useOptions } from './hooks/useOptions';
import type { Selected } from './types/Selected';

import styles from './ui.module.scss';

type Data = {
  readonly selected?: Selected;
};

type FigmaEventMessage = {
  readonly type: any;
  readonly data: Data;
};

type FigmaEvent = MessageEvent<{ readonly pluginMessage: FigmaEventMessage }>;

export const App = () => {
  const { setSelected } = useOptions();

  const handleGetSettings = (data?: Data) => {
    if (!data?.selected) {
      return setSelected(options);
    }

    setSelected(data.selected);
  };

  onmessage = (event: FigmaEvent) => {
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
      <section className={styles.tabsContent}>
        <Elements />
      </section>

      <Actions />
    </main>
  );
};
