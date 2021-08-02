import { useCallback, useState } from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { availableOptions } from '../shared/constants/availableOptions';
import { useOptions } from './hooks/useOptions';
import { mergeStoredOptions } from './utils/mergeStoredOptions';
import { invertImage } from './utils/invertImage';
import type { Options } from '../shared/types/Options';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';
import { Loader } from './components/Loader/Loader';

import styles from './ui.module.scss';

type HandleGetSettingsCallback = (data?: Options) => void;

type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;

export const App = () => {
  const { setSelected } = useOptions();

  const [isLoading, setIsLoading] = useState(true);

  const handleGetSettings = useCallback<HandleGetSettingsCallback>(
    (data) => {
      setSelected(data ?? availableOptions);

      setIsLoading(false);
    },
    [setSelected]
  );

  onmessage = (event: ExtendedMessageEvent) => {
    const message = event.data.pluginMessage;

    switch (message.type) {
      case 'get-settings':
        // TODO handle
        return handleGetSettings(mergeStoredOptions(message.data.selected));

      case 'invert-image':
        // TODO handle
        return invertImage(message.data.bytes);

      default:
        break;
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <main className={styles.pluginWrapper}>
      <section className={styles.tabsContent}>
        <Elements />
      </section>

      <Actions />
    </main>
  );
};
