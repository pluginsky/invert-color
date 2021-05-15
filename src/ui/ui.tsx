import { useCallback } from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { options } from '../shared/constants/options';
import { useOptions } from './hooks/useOptions';
import type { Options } from '../shared/types/Options';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';

import styles from './ui.module.scss';

type HandleGetSettingsCallback = (data?: Options) => void;

type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;

export const App = () => {
  const { setSelected } = useOptions();

  const handleGetSettings = useCallback<HandleGetSettingsCallback>(
    (data) => {
      // TODO if check needed?
      // if (!data) {
      //   return setSelected(options);
      // }
      // setSelected(data);
      // setSelected(data || options);
    },
    [setSelected]
  );

  onmessage = (event: ExtendedMessageEvent) => {
    const message = event.data.pluginMessage;

    if (message.type === 'get-settings') {
      // handleGetSettings(message.data); // TODO
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
