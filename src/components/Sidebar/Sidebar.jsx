import React, { useContext, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

import { SocketContext } from "../../SocketContext";

const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
    console.log(me);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div className="bg-indigo-500">
      <div>
        <form noValidate autoComplete="off">
          <div>
            <h2>Account Info</h2>
          </div>
          <input
            placeholder="Name"
            type="text"
            aria-label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <CopyToClipboard text={me}>
            <button type="button" className="bg-red-800">Copy Your ID</button>
          </CopyToClipboard>

          <div>
            <h2>Make a call</h2>
          </div>
          <input
            placeholder="Id to call"
            type="text"
            aria-label="ID to call"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <br />
          {callAccepted && !callEnded ? (
            <button type="button" onClick={leaveCall} className="bg-red-800">
              Hang Up!
            </button>
          ) : (
            <button type="button" className="bg-red-800" onClick={() => callUser(idToCall)}>
              Call
            </button>
          )}
        </form>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
