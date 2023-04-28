import React, { useContext, useState } from "react";
import { Navbar } from "./Navbar";
import Typed from "react-typed";
import { BsLaptop } from "react-icons/bs";
import { Link } from "react-router-dom";

import { SocketContext } from "../service/SocketContext";

export const Home = () => {
  const {
    callUser
  } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");
  return (
    <div className="h-screen w-screen bg-bgImg bg-cover  ">
      <Navbar />

      <div className="flex flex-col  w-screen">
        <div className="flex justify-center w-screen">
          <span className="text-8xl p-5">
            <BsLaptop style={{ color: "white" }} />
          </span>
        </div>
        <div className="flex  justify-center w-screen">
          <Typed
            className="text-white text-6xl font-bold"
            strings={["Meet", "Chat", "Connect"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </div>
        <div className="flex  justify-center w-screen text-teal-200 text-2xl pt-20">
          <h3>
            Connect with millions of people Around the globe With one click.
          </h3>
        </div>
        <div className="flex  justify-center w-screen  pt-10">
        <input
            type="text"
            className=" py-1 px-4 border-transparent rounded"
            placeholder="Enter the code"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
         <Link className="text-white text-teal-200 text-3xl px-2" to="/VideoCall" onClick={() => callUser(idToCall)}>Join</Link>
        </div>
        <div className="flex  justify-center w-screen  pt-10">
        
         <span className="text-white text-teal-200 text-3xl px-2">Or</span>
        </div>
        <div className="flex  justify-center w-screen text-2xl pt-10">
          <Link
            type="submit"
            className="mx-2 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded"
          to="/VideoCall"
          >
            New Meeting
          </Link>

        </div>
        
      </div>

      {/* <input class=" p-1 w-300 border-2 border-rose-500 md:w-200 lg:w-500  rounded  "></input> */}
    </div>
  );
};
