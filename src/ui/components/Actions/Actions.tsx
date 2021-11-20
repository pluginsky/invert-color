import { memo } from 'react';
import { Button } from 'react-figma-ui';

import { useOptions } from '../../hooks/stores/useOptions';
import { usePostMessage } from '../../hooks/usePostMessage';

import styles from './Actions.module.scss';

export const Actions = memo(() => {
  const { selected } = useOptions();

  const postMessage = usePostMessage();

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
});
