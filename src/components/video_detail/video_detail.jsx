import React, { Component } from "react";
import styles from "./video_detail.module.css";

class VideoDetail extends Component {
  render() {
    return (
      <article className={styles.video_detail}>
        <video src="" className={styles.video}></video>
        <div className={styles.video_info}>
          <span className={styles.video_title}></span>
          <span className={styles.video_channel}></span>
          <span className={styles.video_description}></span>
        </div>
      </article>
    );
  }
}

export default VideoDetail;
