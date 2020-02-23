import React from "react";
import styles from './Image.module.css';

function Image() {
  return (
    <img className={styles.Logo} src='junParLogo.png' alt='Main logo'/>
  );
}

export default Image;