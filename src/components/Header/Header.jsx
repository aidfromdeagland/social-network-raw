import React from "react";
import styles from './Header.module.css';
import Logo from "./Logo/Logo";
import QuickNav from "./QuickNav/QuickNav";
import Search from "./Search/Search";

function Header() {
  return (
    <header className={styles.Block}>
      <Logo />
      <Search/>
      <QuickNav/>
    </header>
  );
}

export default Header;