import { useCallback } from 'react';
import { Button } from 'react-figma-ui';

import { useOptions } from '../../hooks/useOptions';

import styles from './Actions.module.scss';

// TODO add better type check
type PostMessageCallback = (type: string, data?: any) => void;

export const Actions = () => {
  const { selected } = useOptions();

  const postMessage = useCallback<PostMessageCallback>((type, data) => {
    // eslint-disable-next-line no-restricted-globals
    parent.postMessage({ pluginMessage: { type, data } }, '*');
  }, []);

  return (
    <div className={styles.actionsWrapper}>
      <Button tint="secondary" onClick={() => postMessage('cancel')}>
        Cancel
      </Button>

      <div className={styles.messageActions}>
        <Button
          tint="primary"
          onClick={() => postMessage('save', { selected })}
        >
          Save
        </Button>

        <Button
          tint="primary"
          onClick={() => postMessage('save-invert', { selected })}
        >
          Save + Invert
        </Button>
      </div>
    </div>
  );
};
