import { useCallback } from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { availableOptions } from '../shared/constants/availableOptions';
import { useOptions } from './hooks/useOptions';
import type { Options } from '../shared/types/Options';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';

import styles from './ui.module.scss';
import { mergeStoredOptions } from './utils/mergeStoredOptions';
import { invertImage } from './utils/invertImage';

type HandleGetSettingsCallback = (data?: Options) => void;

type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;

export const App = () => {
  const { setSelected } = useOptions();

  const handleGetSettings = useCallback<HandleGetSettingsCallback>(
    (data) => setSelected(data ?? availableOptions),
    [setSelected]
  );

  // TODO? check plugin ID in onmessage
  // TODO display loader until get settings from core

  onmessage = (event: ExtendedMessageEvent) => {
    const message = event.data.pluginMessage;

    // console.log(event.data, 'aaa');

    // TODO replace with switch
    if (message.type === 'get-settings') {
      handleGetSettings(
        // TODO remove as
        mergeStoredOptions(message.data.selected as Record<string, string[]>)
      );
      // TODO remove as any
    } else if ((message as any).type === 'invert-image') {
      invertImage((message as any).data.bytes);
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
