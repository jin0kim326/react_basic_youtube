import React, { Component } from "react";
import styles from "./video_detail.module.css";

class VideoDetail extends Component {
  render() {
    const {
      video,
      video: { snippet },
    } = this.props;
    return (
      <section className={styles.detail}>
        <iframe
          id="player"
          title={snippet.title}
          type="text/html"
          width="640"
          height="360"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
        ></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className={styles.description}>{snippet.description}</pre>
      </section>
    );
  }
}

export default VideoDetail;
