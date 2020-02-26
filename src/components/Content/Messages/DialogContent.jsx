import React from 'react';
import styles from './DialogContent.module.css';

function DialogContent() {
  return (
    <div className={styles.Block}>
      <div className={styles.Message}>Message 1</div>
      <div className={styles.Message}>Message 2</div>
      <div className={styles.Message}>Message 3</div>
      <div className={styles.Message}>Message 4</div>
      <div className={styles.Message}>Message 5</div>
      <div className={styles.Message}>Message 6</div>
    </div>
  );
}

export default DialogContent;