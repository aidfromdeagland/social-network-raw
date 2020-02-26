import React from 'react';
import styles from './Messages.module.css';
import Dialog from "./Dialog";
import DialogContent from "./DialogContent";

function Messages() {
  return (
    <div className={styles.Block}>
      <ol className={styles.Conversations}>
        <Dialog id='1' name='John'/>
        <Dialog id='2' name='Not John'/>
        <Dialog id='3' name='Uzaurus'/>
        <Dialog id='4' name='Lada Kalina'/>
        <Dialog id='5' name='Michael Jordan'/>
      </ol>
      <DialogContent />
    </div>
  );
}

export default Messages;