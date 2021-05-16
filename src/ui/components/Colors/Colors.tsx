import { IconButton, Type } from 'react-figma-ui';

import styles from './Colors.module.scss';

const colors = [
  // 'FFFFFF', 'FF0000'
];

export const Colors = () => {
  return (
    <>
      {/* TODO */}
      {/* <Onboarding iconProps={{ iconName: 'minus' }}>
        Lorem ipsum dolor
      </Onboarding> */}

      <ul className={styles.colorsList}>
        {colors.map((color) => (
          <li className={styles.colorItem} key={color}>
            <div className={styles.colorPreview} />

            <div className={styles.colorValue}>
              <Type>{color}</Type>
            </div>

            <div>
              {/* TODO toggle (activate) */}

              <IconButton
                onClick={() => null}
                iconProps={{
                  iconName: 'trash',
                  // colorName: 'red' // TODO
                }}
              />
            </div>
          </li>
        ))}
      </ul>

      {/* TODO add fallback screen */}
    </>
  );
};
