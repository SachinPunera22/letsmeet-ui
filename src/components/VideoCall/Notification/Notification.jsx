import React, { useContext } from 'react'

import { SocketContext } from "../../../service/SocketContext";

const Notification = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  return (
    <>
     {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} is calling:</h1>
          <button type='button' onClick={answerCall}>
            Answer
          </button>
        </div>
     )}
    </>
  )
}

export default Notification


