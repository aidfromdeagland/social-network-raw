import React from "react";
import styles from './QuickNav.module.css';
import {NavLink} from "react-router-dom";

const QuickNav = (props) => {
  return (
    <div className={styles.Block}>
      <img className={styles.Image} src='#' alt='profile avatar'/>
      <NavLink to='/profile' className={styles.Link} href='#'>My name</NavLink>

      <ul className={styles.List}>
        <li>My profile</li>
        <li>Edit</li>
        <li>Settings</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default QuickNav;