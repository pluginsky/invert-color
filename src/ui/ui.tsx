import { useCallback, useState } from 'react';
import { Icon } from 'react-figma-ui';

import { Actions } from './components/Actions/Actions';
import { Elements } from './components/Elements/Elements';
import { availableOptions } from '../shared/constants/availableOptions';
import { useOptions } from './hooks/useOptions';
import { mergeStoredOptions } from './utils/mergeStoredOptions';
import { invertImage } from './utils/invertImage';
import type { Options } from '../shared/types/Options';
import type { PluginMessage } from '../shared/types/ExtendedMessageEvent';

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

  // TODO? check plugin ID in onmessage

  onmessage = (event: ExtendedMessageEvent) => {
    const message = event.data.pluginMessage;

    switch (message.type) {
      case 'get-settings':
        return handleGetSettings(mergeStoredOptions(message.data.selected));

      case 'invert-image':
        return invertImage(message.data.bytes);

      default:
        break;
    }
  };

  // TODO update position
  if (isLoading) {
    return <Icon iconName="spinner" spin />;
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
