import React, { Component } from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

class VideoList extends Component {
  render() {
    return (
      <div className={styles.main}>
        {this.props.clickedVideo ? (
          console.log("detail")
        ) : (
          <ul className={styles.videos}>
            {this.props.videos.map((video) => {
              return <VideoItem key={video.id} video={video} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default VideoList;
