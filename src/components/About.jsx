"use client"

import Image from "next/image";
import Birds from "../../public/birds.png";
import ServiceBottom from "../../public/serviceleft.png";
import ServiceRight from "../../public/serviceright.png";
import Link from "next/link";
const About = () => {
  return (
    <div className="h-screen relative bg-[#FFD2BF] overflow-hidden">
      <Image alt="" src={Birds} className="hidden md:visible absolute top-12 right-72" width={"auto"} height={"auto"} />
      <Image alt="" src={ServiceRight} className="absolute right-0 bottom-0 mt-24 w-fit h-[50%] sm:w-auto sm:h-2/3 md:h-auto" width={"auto"} height={"auto"} />
      <Image alt="" src={ServiceBottom} className="absolute bottom-0 w-full" width={"auto"} height={"auto"} />

      <div className="absolute z-10 px-10 md:px-20 py-10 flex flex-col gap-2">
        {/* <h1 className="text-[51px] font-bold"> About </h1> */}
        <h2 className="text-2xl md:text-4xl font-bold">What&apos;s Mountain Mavericks? </h2>

        <div className="w-24 h-2 bg-black mt-6"></div>

        <p className="mt-4 text-sm md:text-lg w-full md:w-[60%]">
          <strong>Mountain Mavericks Trekking Soul </strong> represents a group, community, or mindset characterized by an adventurous and independent spirit, particularly focused on the soul-enriching experiences of trekking in mountainous landscapes. 
          <br/>
          It encapsulates a love for exploration, a non-traditional approach to trekking, and a deep connection to the spiritual aspects of the journey.
        </p>
        <Link href={'/about'} className="bg-green-600 rounded-md p-2 text-white w-fit hover:bg-white  hover:shadow-[0_0_0_2px#00ff00] hover:text-green-600 transition duration-300">Learn more</Link>
      </div>
    </div>
  );
};

export default About;
