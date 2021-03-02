import { memo } from 'react';
import { Type } from 'react-figma-ui';

import styles from './MessageScreen.module.scss';

type MessageScreenProps = {
  readonly title: string;
  readonly message?: string;
};

export const MessageScreen = memo<MessageScreenProps>(({ title, message }) => (
  <div className={styles.messageScreen}>
    <div className={styles.contentWrapper}>
      <Type size="xlarge" inverse>
        {title}
      </Type>

      {message && (
        <Type size="small" className={styles.message}>
          {message}
        </Type>
      )}
    </div>
  </div>
));
