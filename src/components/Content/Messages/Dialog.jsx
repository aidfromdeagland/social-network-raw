import React from 'react';
import styles from './Dialog.module.css';
import {NavLink} from "react-router-dom";

function Dialog(props) {
  return (
    <NavLink className={styles.Block} to={`/messages/${props.id}`}>
      <div className={styles.Info}>
        <img className={styles.Avatar} src='#' alt='user avatar' />
        <span className={styles.Name}>{props.name}</span>
      </div>
      <div className={styles.Message}>
        <p className={styles.ShortContent}>Libres aurus tagenarus gogogogoogogog adasdsad ad adasd as </p>
      </div>
    </NavLink>
  );
}

export default Dialog;