import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import VideoCall from "./components/VideoCall/VideoCall"

// import bg_img from "../asset/img/bg_img.png"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/videoCall" element={<VideoCall />}></Route>
        </Routes>
      </Router>
     
      
    </>
  );
}

export default App;
