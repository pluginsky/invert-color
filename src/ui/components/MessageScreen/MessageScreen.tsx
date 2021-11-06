import styles from './MessageScreen.module.scss';

interface MessageScreenProps {
  readonly title: string;
  readonly message?: string;
}

// TODO? memo
export const MessageScreen = ({ title, message }: MessageScreenProps) => (
  <div className={styles.messageScreen}>
    <div className={styles.contentWrapper}>
      <h3 className={styles.title}>{title}</h3>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  </div>
);
