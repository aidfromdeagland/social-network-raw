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

  let newMessage = React.createRef();
  let addMessage = () => {
    let text = newMessage.current.value;
    props.addMessage(text);
    newMessage.current.value = '';
  };

  let dialogs = props.dialogData.map(d => <Dialog key={d.id} id={d.id} name={d.name}/>);
  let messages = props.messagesData.map(m => <Message key={m.id} id={m.id} message={m.message} date={m.date}/>);

  return (
    <div className={styles.Block}>
      <ol className={styles.Conversations}>
        {dialogs}
      </ol>
      <div className={styles.ConversationContent}>
        <div className={styles.MessagesHistory}>
          {messages}
        </div>
        <div className={styles.MessageInput}>
          <textarea className={styles.MessageTextarea} ref={newMessage} placeholder='Write a message...'></textarea>
          <button className={styles.MessageSend} type='button' onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Messages;