import React from "react";
import styles from './Header.module.css';
import Image from "./Logo/Image";

function Header() {
  return (
    <header className={styles.Header}>
      <Image />
    </header>
  );
}

export default Header;