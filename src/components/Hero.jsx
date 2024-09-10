import React from "react";
import Header from "./Header";
import Circle from "../../public/circle.png";
import Birds from "../../public/birds.png";
import Mouhtains from "../../public/mountains.png";
const Hero = () => {
  return (
    <div className="">
      <div
        className="h-screen"
        style={{ backgroundImage: "url('background.png')" }}
      >
        <Header />
        <div className="px-20 ">
          <img src={Circle} className="relative ml-40  w-64 h-64" />
          <img src={Birds} className="absolute top-32 left-96" />
          <h1 className="text-4xl font-black absolute top-48 left-30">
            {" "}
            EXPLORE
          </h1>
          <h1 className="text-4xl font-black absolute top-60 left-30">
            THE MOUNTAIN
          </h1>

          <h1 className="font-normal text-[29px] text-gray-600 absolute top-72 left-30">
            {" "}
            Live your dream and explore{" "}
          </h1>

          <h1 className="font-medium text-xl"> Explore Now </h1>

          <div className="w-28 h-2 bg-black mt-2"></div>
          <img
            src={Mouhtains}
            className="absolute bottom-0 w-screen left-0 right-0 h-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
