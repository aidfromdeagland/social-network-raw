import React from "react";
import styles from './Logo.module.css';

function Logo() {
  return (
    <img className={styles.Image} src='junParLogo.png' alt='Main logo'/>
  );
}

export default Logo;