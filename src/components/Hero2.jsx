"use client"

import Header from "./Header";
import Birds from "../../public/birds.png";

const Hero2 = ({ head1 }) => {
  return (
    <div className="">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('RELIG.jpg')",
        }}
      >
        <Header />
        <div className="px-20 ">
          <h1 className="text-7xl font-black absolute top-[40%] left-[50%] -translate-x-1/2 text-gray-800 drop-shadow-[0_1.2px_1.2px_#00ff0050]">
            {" "}
            {head1}
          </h1>

          <h2 className="font-medium text-xl absolute top-[70%] left-[50%] -translate-x-1/2 text-gray-800 drop-shadow-[0_1.2px_1.2px_#00ff0050]">
            {" "}
            Scroll To see our Treks{" "}
          </h2>

          <div className="w-32 h-2 bg-green-700 mt-2 absolute top-[75%] left-[50%] -translate-x-1/2 text-green-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
