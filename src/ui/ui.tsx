import { useCallback } from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { options } from '../shared/constants/options';
import { useOptions } from './hooks/useOptions';
import type { Options } from '../shared/types/Options';
import type { ExtendedMessageEvent } from '../shared/types/ExtendedMessageEvent';

import styles from './ui.module.scss';

type HandleGetSettingsCallback = (data?: Options) => void;

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

  onmessage = (event: ExtendedMessageEvent) => {
    const message = event.data.pluginMessage;

    if (message.type === 'get-settings') {
      handleGetSettings(message.data);
    }
  };

  return (
    <main className={styles.pluginWrapper}>
      <section className={styles.tabsContent}>
        {/* TODO lazy? */}
        <Elements />
      </section>

      <Actions />
    </main>
  );
};
