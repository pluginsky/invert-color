import { useCallback, useEffect, useState } from 'react';

import { Actions } from './components/Actions';
import { Elements } from './components/Elements';
import { Loader } from './components/Loader';
import { availableOptions } from '../shared/constants/availableOptions';
import { useOptions } from './hooks/stores/useOptions';
import { mergeStoredOptions } from './utils/mergeStoredOptions';
import { useInvertImage } from './hooks/useInvertImage';
import type { Options } from '../shared/types/Options';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';

import styles from './ui.module.scss';

type HandleGetOptionsCallback = (options: Options) => void;

type ExtendedMessageEvent = MessageEvent<{
  readonly pluginMessage: PluginMessage;
}>;

export const App = () => {
  const { setSelected } = useOptions();

  const invertImage = useInvertImage();

  const [isLoading, setIsLoading] = useState(true);

  const handleGetOptions = useCallback<HandleGetOptionsCallback>(
    (options) => {
      setSelected(options);

      setIsLoading(false);
    },
    [setSelected]
  );

  useEffect(() => {
    onmessage = (event: ExtendedMessageEvent) => {
      const message = event.data.pluginMessage;

      switch (message.type) {
        case 'get-options': {
          let options = availableOptions;

          const selected = message?.data?.selected;

          if (selected) {
            options = mergeStoredOptions(selected);
          }

          return handleGetOptions(options);
        }

        case 'invert-image':
          return invertImage(message.data.bytes);

        default:
          break;
      }
    };
  }, [handleGetOptions, invertImage]);

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
