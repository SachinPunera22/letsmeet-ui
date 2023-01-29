import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import io from "socket.io-client";
import { useEffect, useState } from "react";
import {Home} from './components/Home'
import { VideoCall } from "./components/VideoCall/VideoCall";
// import bg_img from "../asset/img/bg_img.png"
const socket = io.connect("http://localhost:3001");

function App() {
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/videoCall" element={<VideoCall/>}></Route>
        </Routes>
      </Router>
  );
}

export default App;

//   const myStyle={
//     backgroundImage: 
//     `url(${bg_img})`,
   
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
// };
{/* <input
          type="text"
          placeholder="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>Send Message</button>
        <h1>Message:</h1>
          {messageReceived} */}