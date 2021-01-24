import React, { useCallback } from 'react';
import { Button } from 'react-figma-ui';

import { ActionType } from '../../../shared/types/ActionType';

import styles from './Actions.module.scss';

type PostMessageCallback = (type: ActionType) => void;

export const Actions = () => {
  const postMessage = useCallback<PostMessageCallback>((type) => {
    parent.postMessage({ pluginMessage: { type } }, '*');
  }, []);

  return (
    <div className={styles.actionsWrapper}>
      <Button tint="secondary" onClick={() => postMessage('cancel')}>
        Cancel
      </Button>

      <div className={styles.messageActions}>
        <Button tint="primary" onClick={() => postMessage('save')}>
          Save
        </Button>

        <Button tint="primary" onClick={() => postMessage('save-invert')}>
          Save & Invert
        </Button>
      </div>
    </div>
  );
};
