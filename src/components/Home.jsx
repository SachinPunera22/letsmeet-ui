import React from "react";
import { Navbar } from "./Navbar";
import Typed from "react-typed"
export const Home = () => {
  return (
    <div className="h-screen w-screen bg-bgImg bg-cover  ">
      <Navbar />
      <Typed
      strings={[
            "Meet",
            "Chat",
            "Connect",
          ]}
          typeSpeed={30}
          backSpeed={30}
          loop
        />
      {/* <input class=" p-1 w-300 border-2 border-rose-500 md:w-200 lg:w-500  rounded  "></input> */}
    </div>
  )
}