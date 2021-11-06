import { Icon, Type } from 'react-figma-ui';

import styles from './Loader.module.scss';

// TODO update position
// TODO memo
export const Loader = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.loader}>
      <Icon iconName="spinner" colorName="blue" spin />
      {/* <Type>Loading...</Type> */}
    </div>
  </div>
);
