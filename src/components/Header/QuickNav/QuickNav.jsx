import React from "react";
import styles from './QuickNav.module.css';

function QuickNav(props) {
  return (
    <div className={styles.Block}>
      <img className={styles.Image} src='#' alt='profile avatar'/>
      <a className={styles.Link} href='#'>My name</a>

      <ul className={styles.List}>
        <li>My profile</li>
        <li>Edit</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default QuickNav;