import React, { useCallback } from 'react';
import { Button } from 'react-figma-ui';

import { ActionType } from '../../../shared/types/ActionType';
import { useStore } from '../../store';

import styles from './Actions.module.scss';

type PostMessageCallback = (type: ActionType, data?: any) => void;

export const Actions = () => {
  const { selected } = useStore();

  const postMessage = useCallback<PostMessageCallback>((type, selected) => {
    alert(selected);

    parent.postMessage({ pluginMessage: { type, data: selected } }, '*');
  }, []);

  return (
    <div className={styles.actionsWrapper}>
      <Button tint="secondary" onClick={() => postMessage('cancel')}>
        Cancel
      </Button>

      {/* TODO add run without saving/run once */}
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
