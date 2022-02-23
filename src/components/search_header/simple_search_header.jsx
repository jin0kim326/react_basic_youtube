import React, { useRef } from "react";
import styles from "./search_header.module.css";

/**
 * Function형 component
 */

const SimpleSearchHeader = (props) => {
  const inputRef = useRef();

  const onClick = () => {
    console.log(inputRef.current.value);
  };

  const onKeyPress = () => {};

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="Search..."
        ref={inputRef}
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
};

export default SimpleSearchHeader;
