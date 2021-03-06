import { useCallback } from 'react';
import { Button } from 'react-figma-ui';

import type { PluginMessage } from '../../../shared/types/ExtendedMessageEvent';
import { useOptions } from '../../hooks/useOptions';

import styles from './Actions.module.scss';

type PostMessageCallback = (pluginMessage: PluginMessage) => void;

export const Actions = () => {
  const { selected } = useOptions();

  const postMessage = useCallback<PostMessageCallback>((pluginMessage) => {
    // eslint-disable-next-line no-restricted-globals
    parent.postMessage({ pluginMessage }, '*');
  }, []);

  return (
    <div className={styles.actionsWrapper}>
      <Button tint="secondary" onClick={() => postMessage({ type: 'cancel' })}>
        Cancel
      </Button>

      <div className={styles.messageActions}>
        <Button
          tint="primary"
          onClick={() => postMessage({ type: 'save', data: { selected } })}
        >
          Save
        </Button>

        <Button
          tint="primary"
          onClick={() =>
            postMessage({ type: 'save-invert', data: { selected } })
          }
        >
          Save + Invert
        </Button>
      </div>
    </div>
  );
};
