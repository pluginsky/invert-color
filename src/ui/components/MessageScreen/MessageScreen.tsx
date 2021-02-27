import React, { memo } from 'react';

import styles from './MessageScreen.module.scss';

type MessageScreenProps = {
  readonly title: string;
  readonly message?: string;
};

export const MessageScreen = memo<MessageScreenProps>(({ title, message }) => (
  <div className={styles.messageScreen}>
    <div className={styles.contentWrapper}>
      <h3 className={styles.title}>{title}</h3>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  </div>
));
