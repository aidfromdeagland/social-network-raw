import React from 'react';
import styles from './Messages.module.css';
import Dialog from "./Dialog";

const Message = (props) => {
  return (
    <div className={styles.Message}>
      <img className={styles.AuthorAvatar} alt='User Avatar' src='https://svgsilh.com/svg/1633249.svg'/>

      <p className={styles.MessageContent}>{props.message}<span className={styles.MessageDate}>{props.date}</span></p>
    </div>
  )
};

const Messages = (props) => {
  return (
    <div className={styles.Block}>
      <ol className={styles.Conversations}>
        {props.dialogData.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>)}
      </ol>
      <div className={styles.ConversationContent}>
        {props.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message} date={m.date}/>)}
      </div>
    </div>
  );
};

export default Messages;