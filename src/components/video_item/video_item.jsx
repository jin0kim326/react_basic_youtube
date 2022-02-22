import React, { Component } from "react";
import styles from "./video_item.module.css";

class VideoItem extends Component {
  render() {
    const snippet = this.props.video.snippet;

    return (
      <li className={styles.container} onClick={this.props.onClick}>
        <div className={styles.video}>
          <img
            className={styles.thumbnail}
            src={snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoItem;
