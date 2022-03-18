import React, { Component } from "react";
import styles from "./search_header.module.css";

class SearchHeader extends Component {
  inputRef = React.createRef();

  handleSearch = () => {
    const query = this.inputRef.current.value;

    
    this.props.onSearch(query);

  };

  onClick = () => {
    this.handleSearch();
  };

  onKeyPress = (event) => {
    if (event.key === "Enter") {
      this.onClick();
    }
  };

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.img} src="/images/logo.png" alt="logo" />
          <h1 className={styles.title}>Youtube</h1>
        </div>
        <input
          className={styles.input}
          type="text"
          placeholder="Search..."
          ref={this.inputRef}
          onKeyPress={this.onKeyPress}
        />
        <button className={styles.button} onClick={this.onClick}>
          <img
            className={styles.buttonImg}
            src="/images/search.png"
            alt="search"
          />
        </button>
      </header>
    );
  }
}

export default SearchHeader;
