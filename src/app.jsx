import React, { Component } from "react";
import "./app.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

class App extends Component {
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
        this.setState({ videos: result.items });
      })
      .catch((error) => console.log("error", error));
  }

  componentDidMount() {
    this.loadPopularVideoList();
  }

  render() {
    return (
      <>
        <SearchHeader />
        <VideoList
          videos={this.state.videos}
          clickedVideo={this.state.clickedVideo}
        />
      </>
    );
  }
}

export default App;
