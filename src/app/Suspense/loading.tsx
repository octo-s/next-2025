import React from 'react';
import styles from './loading.module.css';
type LoadingProps = {
  text?: string;
};
export default function Loading({ text = 'Загрузка...' }: LoadingProps) {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
