import React, { Component } from "react";
import styles from "./video_item.module.css";

class VideoItem extends Component {
  render() {
    return (
      <div className={styles.video_item} onClick={this.props.onClick}>
        <img
          className={styles.thumbnail}
          src={this.props.video.snippet.thumbnails.default.url}
          alt="thumbnail"
        />
        <div className={styles.video_info}>
          <span className={styles.title}>{this.props.video.snippet.title}</span>
          <span className={styles.channel}>
            {this.props.video.snippet.channelTitle}
          </span>
        </div>
      </div>
    );
  }
}

export default VideoItem;
