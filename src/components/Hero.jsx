"use client"

import Circle from "../../public/circle.png";
import Birds from "../../public/birds.png";

import Image from "next/image";

const Hero = ({ head1, head2, head3, img1 }) => {
  return (
    <div className="">
      <div
        className="h-screen"
        style={{ background: `#aaccdd` }}
      >
        <Image alt="" src={Circle} className="relative ml-40  w-64 h-64" width={'100%'} height={'auto'} />
        <Image alt="" src={Birds} className="absolute top-32 left-96"  width={'100%'} height={'auto'}/>
        <div className="px-20 space-y-4 ">
          
          <h1 className="text-4xl font-black">
            {" "}
            {head1}
          </h1>
          <h2 className="text-4xl font-black">
            {head2}
          </h2>

          <h2 className="font-normal text-[29px] text-gray-600">
            {head3}
          </h2>

          <h3 className="font-medium text-xl"> Explore Now </h3>

          <div className="w-28 h-2 bg-black mt-2"></div>
        </div>
          <Image alt=""
            src={img1}
            className="absolute bottom-0 w-screen left-0 right-0 h-[80%]"
          />
      </div>
    </div>
  );
};

export default Hero;
