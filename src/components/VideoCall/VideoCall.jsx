import React, { useEffect, useRef } from "react";

export const VideoCall = () => {
    const videoRef = useRef(null);
    useEffect(()=>{
      getVideo();
    }, [videoRef]);
    
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: { width: 300 } })
        .then((stream) => {
          let video = videoRef.current;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.log("error:", err);
        });
    };
    return (
      <div className="App">
        <h1>hello</h1>
        <button>Take a photo</button>
          <video ref={videoRef}/>
      </div>
    );
}



