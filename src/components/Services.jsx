import React from "react";
import Trek from "../../public/trek.png";
import Religious from "../../public/religious.png";
import ServiceFooter from "../../public/servicefooter.png";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="h-full bg-black relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="pt-8 text-white font-bold text-[51px] flex items-center justify-center">
          {" "}
          Our Services{" "}
        </h1>

        <p className="flex items-center justify-center mt-8 font-normal text-[19px] text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
          tincidunt donec commodo scelerisque quis leo, egestas amet.
        </p>

        <div className="flex flex-row gap-12 items-center justify-center mt-6">
          <div className="flex flex-col gap-12 items-center justify-center">
            <img
              src={Religious}
              className="rounded-full border-2 border-dashed p-3 hover:scale-125 transition-all duration-300"
            />
            <Link to={"/religious-tours"}>
              <h1 className="text-[#FFD2BF]">Religious Trips</h1>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-12 justify-center">
            <img
              src={Trek}
              className="rounded-full border-2 border-dashed p-3 hover:scale-125  transition-all duration-300"
            />
            <Link to={"/treks"}>
              <h1 className="text-[#FFD2BF]">Treks</h1>
            </Link>
          </div>
        </div>

        <img src={ServiceFooter} className="mt-24" />
      </div>
    </div>
  );
};

export default Services;
