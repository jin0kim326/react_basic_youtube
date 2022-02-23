import React, { Component } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import SimpleSearchHeader from "./components/search_header/simple_search_header";
import VideoList from "./components/video_list/video_list";

class App extends Component {
  state = {
    videos: [],
    clickedVideo: false,
    searchTerm: "",
  };

  onSearch = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search/?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyAHz7ywb1SC3oCmi5eWD8wN2d3gYPIHgFQ`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      )
      .then((items) => this.setState({ videos: items }))
      .catch((error) => console.log("error", error));
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
        this.setState({ videos: result.items });
      })
      .catch((error) => console.log("error", error));
  }

  componentDidMount() {
    this.loadPopularVideoList();
  }

  render() {
    return (
      <div className={styles.app}>
        <SearchHeader onSearch={this.onSearch} />
        <VideoList
          videos={this.state.videos}
          clickedVideo={this.state.clickedVideo}
        />
      </div>
    );
  }
}

export default App;
