import React from 'react';
import styles from './Navigation.module.css';

function Navigation () {
  return (
  <nav className={styles.Navigation}>
    <ul>
      <li><a href='#'>News</a></li>
      <li><a href='#'>Friends</a></li>
      <li><a href='#'>Communities</a></li>
      <li><a href='#'>Messages</a></li>
      <li><a href='#'>Code review</a></li>
    </ul>
  </nav>
  );
}

export default Navigation;

