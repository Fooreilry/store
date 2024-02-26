import React from 'react';
import styles from './Button.module.scss';

export function Button({ children, ...props }: { children: React.ReactNode }) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}
