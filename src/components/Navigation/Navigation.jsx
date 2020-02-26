import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

function Navigation() {
  return (
    <nav className={styles.Block}>
      <ul className={styles.List}>
        <li><NavLink to='/profile' activeClassName={styles.active}>Profile</NavLink></li>
        <li><NavLink to='/projects' activeClassName={styles.active}>Projects</NavLink></li>
        <li><NavLink to='/tasks' activeClassName={styles.active}>Tasks</NavLink></li>
        <li><NavLink to='/colleagues' activeClassName={styles.active}>Colleagues</NavLink></li>
        <li><NavLink to='/mentors' activeClassName={styles.active}>Mentors</NavLink></li>
        <li><NavLink to='/code-review' activeClassName={styles.active}>Code review</NavLink></li>
        <li><NavLink to='/messages' activeClassName={styles.active}>Messages</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;

