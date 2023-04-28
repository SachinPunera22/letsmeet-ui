import React, { useContext } from "react";
import { SocketContext } from "../../service/SocketContext";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import Notification from "./Notification/Notification";
import Sidebar from "./Sidebar/Sidebar";

const VideoCall = () => {
  

  return (
    <>
       <VideoPlayer />
      {/* <Sidebar>
      <Notification />
      </Sidebar>  */}
    </>
  )
}
export default VideoCall
