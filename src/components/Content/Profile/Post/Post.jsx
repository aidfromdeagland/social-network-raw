import React from 'react';
import styles from './Post.module.css';

function Post(props) {
  return (
    <div className={styles.Block}>
      <div className={styles.Author}>
        <img className={styles.Avatar} src={props.avatarUrl} alt=''/>
        <span className={styles.Name}>{props.name}</span>
      </div>
      <p className={styles.Content}>{props.content}</p>
      <div className={styles.Info}>
        <span className={styles.LikesCounter}>{props.likesCount}</span>
        <span className={styles.Date}>{props.date}</span>
      </div>
    </div>
  );
}

export default Post;