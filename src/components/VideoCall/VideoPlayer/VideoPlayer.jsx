import React, { useContext, useEffect, useRef } from "react";
import { SocketContext } from "../../../service/SocketContext";
import { BsMicMute } from "react-icons/bs";
import { BsMic } from "react-icons/bs";
import { BiVideoOff } from "react-icons/bi";
import { BiCopy } from "react-icons/bi";
import { BiVideo } from "react-icons/bi";
import { ImPhoneHangUp } from "react-icons/im";
import CopyToClipboard from "react-copy-to-clipboard";

const VideoPlayer = () => {
  const currentVideo  = useRef({});

  function sayHello(e) {
    e.preventDefault();
    alert("You clicked me!");
  }

  const {
    me,
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    stream,
    call,
    answerCall,
    initalizeVideo,
    toggleCamera,
    toggleAudio,
  } = useContext(SocketContext);
 
  let videoHeight = 1000;
  let videoWidth = 1000;


  setTimeout(()=>{
    currentVideo.current.srcObject= myVideo.current.srcObject  
  },10)
  
  // const [Camera, settogglCamera] = useState(true)

  //   <div className=" btn btn-red" onClick={toggleCamera()}>
  //   Camera
  //   {/* <BsMicMute style={{ color: "white" }} /> */}
  // </div>
  return (
    <div className="bg-gray-900 h-screen w-screen">
      <div className="flex justify-center ">
        {stream && myVideo && (
          <div className=" m-8 ">
            <h1>{name || "Name"}</h1>
            <video playsInline muted ref={currentVideo} autoPlay />
          </div>
        )}

        {callAccepted && !callEnded && (
          <div className=" m-8">
            <h1>{call.name || "Name"}</h1>
            <video playsInline ref={userVideo} autoPlay />
          </div>
        )}
      </div>

      <div className="flex flex-row absolute inset-x-0 bottom-0  ">
        <div className="mt-8 ml-16 text-white text-xl font-bold">
          <span>{me}</span>
          <CopyToClipboard text={me}>
            <button type="button" className="bg-red-800">
            <BiCopy className="text-white h-10 w-10" />
            </button>
          </CopyToClipboard>
        </div>
        <div className="flex justify-center space-x-6 ml-96">
          <button
            className="bg-red-500 mb-8 rounded-full p-2 "
            id="grid"
            onClick={(e) => sayHello(e)}
          >
            <BsMicMute className="text-white h-10 w-10" />
          </button>
          <button
            className="bg-red-500 mb-8 rounded-full p-2 "
            id="grid"
            onClick={(e) => toggleAudio(e)}
          >
            <BsMic className="text-white h-10 w-10" />
          </button>
          
          <button
            className="bg-red-500 mb-8 rounded-full p-2"
            id="grid"
            onClick={(e) => sayHello(e)}
          >
            <BiVideoOff className="text-white h-10 w-10" />
          </button>
          <button
            className="bg-red-500 mb-8 rounded-full p-2"
            id="grid"
            onClick={(e) => toggleCamera(e)}
          >
            <BiVideo className="text-white h-10 w-10" />
          </button>
            <button
            className="bg-red-500 mb-8 rounded-full p-2"
            id="grid"
            onClick={(e) => sayHello(e)}
          >
            <ImPhoneHangUp className="text-white h-10 w-10" />
          </button>
          {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <button type='button' onClick={answerCall}>
            Answer
          </button>
        </div>
     )}
         
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
