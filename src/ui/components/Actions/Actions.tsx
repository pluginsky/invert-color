import React, { useCallback } from 'react';
import { Button } from 'react-figma-ui';

import { ActionType } from '../../../shared/types/ActionType';
import { useOptions } from '../../hooks/useOptions';

import styles from './Actions.module.scss';

// TODO any
type PostMessageCallback = (type: ActionType, data?: any) => void;

export const Actions = () => {
  const { selected } = useOptions();

  const postMessage = useCallback<PostMessageCallback>((type, selected) => {
    // TODO parent -> window
    parent.postMessage({ pluginMessage: { type, data: selected } }, '*');
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
