import { memo, useCallback } from 'react';
import { Button } from 'react-figma-ui';

import { useOptions } from '../../hooks/useOptions';
import { usePostMessage } from '../../hooks/usePostMessage';

import styles from './Actions.module.scss';

export const Actions = memo(() => {
  const { selected } = useOptions();

  const postMessage = usePostMessage();

  const handleCancel = useCallback(() => postMessage({ type: 'cancel' }), []);

  const handleSave = useCallback(
    () => postMessage({ type: 'save', data: { selected } }),
    []
  );

  const handleSaveInvert = useCallback(
    () => postMessage({ type: 'save-invert', data: { selected } }),
    []
  );

  return (
    <div className={styles.actionsWrapper}>
      <Button tint="secondary" onClick={handleCancel}>
        Cancel
      </Button>

      <div className={styles.messageActions}>
        <Button tint="primary" onClick={handleSave}>
          Save
        </Button>

        <Button tint="primary" onClick={handleSaveInvert}>
          Save + Invert
        </Button>
      </div>
    </div>
  );
});
