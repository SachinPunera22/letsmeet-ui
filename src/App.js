import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { VideoCall } from "./components/VideoCall/VideoCall";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Notification from "./components/Notification/Notification";
import Sidebar from "./components/Sidebar/Sidebar";
// import bg_img from "../asset/img/bg_img.png"

function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/videoCall" element={<VideoCall />}></Route>
        </Routes>
      </Router> */}
      <VideoPlayer />
      <Sidebar>
      <Notification />
      </Sidebar>
      
    </>
  );
}

export default App;
