import React, { Component } from "react";
import VideoItem from "../video_item/video_item";
import styles from "./video_list.module.css";

class VideoList extends Component {
  state = {
    videos: [],
    clickedVideo: false,
  };

  loadPopularVideoList() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&key=AIzaSyAHz7ywb1SC3oCmi5eWD8wN2d3gYPIHgFQ",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.items);
        this.setState({ videos: result.items });
      })
      .catch((error) => console.log("error", error));
  }

  handleClick(e) {
    this.setState({ clickedVideo: true });
  }

  componentDidMount() {
    this.loadPopularVideoList();
  }

  render() {
    return (
      <div className={styles.main}>
        {this.clickedVideo ? (
          console.log("detail")
        ) : (
          <ul className={styles.video_list}>
            {this.state.videos.map((video) => {
              return <VideoItem video={video} onClick={this.handleClick} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default VideoList;
