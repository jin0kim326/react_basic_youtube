import "./app.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const handleSearch = () => {
    console.log("searching!!!");
  };

  return (
    <div className="main">
      <SearchHeader onClick={handleSearch} />
      <VideoList />
    </div>
  );
}

export default App;
