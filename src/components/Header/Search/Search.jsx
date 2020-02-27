import React from "react";
import styles from './Search.module.css';

const Search = () => {
  return (
    <input className={styles.Input} placeholder='Search'/>
  );
};

export default Search;