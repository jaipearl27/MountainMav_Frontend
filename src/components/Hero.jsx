"use client"

import Circle from "../../public/circle.png";
import Birds from "../../public/birds.png";

import Image from "next/image";

const Hero = ({ head1, head2, head3, img1 }) => {
  return (
    <div className="bg-[#aaccdd]">
      <div
        className="h-screen bg-transparent"
      >
        <Image alt="" src={Circle} className="relative ml-20 md:ml-40 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 z-[1]" width={'100%'} height={'auto'} />
        <Image alt="" src={Birds} className="hidden md:visible absolute top-32 left-96 z-[1]"  width={'100%'} height={'auto'}/>
        <div className="absolute px-10 md:px-20 space-y-4 z-[3]">
          
          <h1 className="text-[27px] md:text-5xl text-black font-bold">
            {" "}
            {head1}
          </h1>
          <h2 className="text-[27px] md:text-5xl text-black font-bold">
            {head2}
          </h2>

          <h2 className="text-[26px] md:text-5xl text-black font-bold">
            {head3}
          </h2>

          {/* <h3 className="font-medium text-xl text-green-600"> Explore Now </h3> */}

          <div className="w-36 h-2 bg-green-600 mt-2"></div>
        </div>
          <Image alt=""
            src={img1}
            className="absolute bottom-0 w-screen left-0 right-0 z-[1] "
          />
      </div>
    </div>
  );
};

export default Hero;
