import React, { Component } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoDetail from "./components/video_detail/video_detail";

class App extends Component {
  youtube = this.props.youtube;

  state = {
    videos: [],
    selectedVideo: null,
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

  selectVideo = (selectedVideo) => {
    this.setState({ selectedVideo });
  };

  render() {
    const { selectedVideo } = this.state;
    return (
      <div className={styles.app}>
        <SearchHeader onSearch={this.onSearch} />
        <section className={styles.content}>
          {selectedVideo && (
            <div className={styles.detail}>
              <VideoDetail video={selectedVideo} />
            </div>
          )}
          <div className={styles.list}>
            <VideoList
              videos={this.state.videos}
              onVideoClick={this.selectVideo}
              display={selectedVideo ? "list" : "grid"}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
