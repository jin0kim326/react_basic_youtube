import React, { Component } from "react";
import styles from "./search_header.module.css";

class SearchHeader extends Component {
  inputRef = React.createRef();
  handleSearch() {
    console.log("click search");
    const query = this.inputRef.current.value;

    var raw = "";

    var requestOptions = {
      method: "GET",
      body: raw,
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&masResults=25&q=${query}&key=AIzaSyAHz7ywb1SC3oCmi5eWD8wN2d3gYPIHgFQ`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  render() {
    return (
      <nav className={styles.header} onClick={this.props.onClick}>
        <div className={styles.img}>
          <i className={`fa-brands fa-youtube ${styles.logo_icon}`}></i>
          <span className={styles.title}>Youtube</span>
        </div>
        <form action="">
          <input type="text" className={styles.query} ref={this.inputRef} />
          <i
            className={`fa-solid fa-magnifying-glass ${styles.search_icon}`}
            onClick={this.props.onClick}
          ></i>
        </form>
      </nav>
    );
  }
}

export default SearchHeader;
