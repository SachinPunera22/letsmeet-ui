import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { io } from "socket.io-client";
import Peer from "simple-peer";

const SocketContext = createContext();
const socket = io("https://lest-meet-api.onrender.com");
//const socket = io("https://anurag.loca.lt");
// const socket = io('https://warm-wildwood-81069.herokuapp.com');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState({});
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [me, setMe] = useState("");

  const myVideo = useRef({});
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    initalizeVideo();
  }, []);

  const initalizeVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        console.log("currentStream", currentStream);
        setStream(currentStream);

        if (!myVideo.current) initalizeVideo();
        else myVideo.current.srcObject = currentStream;

        console.log("before stream:", stream);
        console.log("myVideo", myVideo);
      });

    socket.on("me", (id) => {
      console.log("me:", id);
      setMe(id);
    });

    socket.on("callUser", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
  };
  const toggleCamera = () => {
    console.log("toggleCamera");
  
    const videoTrack = stream
      .getTracks()
      .find((track) => track.kind === "video");

    if (videoTrack.enabled) {
      
      videoTrack.enabled = false;
    } else {
      
      videoTrack.enabled = true;
    }
  };
  const toggleAudio = () => {
    console.log("myVideo:", myVideo);
    const audioTrack = stream.getTracks().find((track) => track.kind === "audio");
     
    if (audioTrack.enabled) {
      audioTrack.enabled = false;
    } else {
      audioTrack.enabled = true;
    }
    console.log('audioTrack:',audioTrack);
  };
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    console.log("me:", me);
    console.log("Calling User with Id:", id);
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name: "sachin",
      });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);

      peer.signal(signal);
    });

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    socket.emit("callUser", {
      userToCall: id,
      signalData: data,
      from: me,
      name: "sachin",
    });
    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callEnded,
        me,
        callUser,
        leaveCall,
        answerCall,
        initalizeVideo,
        toggleAudio,
        toggleCamera,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
