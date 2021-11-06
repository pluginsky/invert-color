import { useCallback, useState } from 'react';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { availableOptions } from '../shared/constants/availableOptions';
import { useOptions } from './hooks/useOptions';
import { mergeStoredOptions } from './utils/mergeStoredOptions';
import { useInvertImage } from './hooks/useInvertImage';
import type { Options } from '../shared/types/Options';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';
import { Loader } from './components/Loader/Loader';

import styles from './ui.module.scss';

// TODO names settings/options

type HandleGetSettingsCallback = (data: Options) => void;

type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;

export const App = () => {
  const { setSelected } = useOptions();

  const invertImage = useInvertImage();

  const [isLoading, setIsLoading] = useState(true);

  // TODO? remove useCallback
  const handleGetSettings = useCallback<HandleGetSettingsCallback>(
    (settings) => {
      setSelected(settings);

      setIsLoading(false);
    },
    [setSelected]
  );

  // TODO? useEffect
  onmessage = (event: ExtendedMessageEvent) => {
    const message = event.data.pluginMessage;

    switch (message.type) {
      case 'get-settings': {
        let options = availableOptions;

        const selected = message?.data?.selected;

        if (selected) {
          options = mergeStoredOptions(selected);
        }

        return handleGetSettings(options);
      }

      case 'invert-image':
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
