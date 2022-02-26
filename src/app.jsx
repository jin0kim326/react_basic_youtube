import React, { Component } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import SimpleSearchHeader from "./components/search_header/simple_search_header";
import VideoList from "./components/video_list/video_list";
import Youtube from "./service/youtube";

class App extends Component {
  youtube = this.props.youtube;

  state = {
    videos: [],
    clickedVideo: false,
  };

  componentDidMount() {
    this.youtube
      .loadPopularVideoList()
      .then((videos) => this.setState({ videos }));
  }

  onSearch = (query) => {
    this.youtube
      .onSearch(query) //
      .then((videos) => this.setState({ videos }));
  };

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
