"use client"

import Image from "next/image";
import Birds from "../../public/birds.png";
import ServiceBottom from "../../public/serviceleft.png";
import ServiceRight from "../../public/serviceright.png";
import Link from "next/link";
const About = () => {
  return (
    <div className="h-screen relative bg-[#FFD2BF] overflow-hidden">
      <Image alt="" src={Birds} className="absolute top-12 right-72" width={"auto"} height={"auto"} />
      <Image alt="" src={ServiceRight} className="absolute right-0 h-[70%] mt-24" width={"auto"} height={"auto"} />
      <Image alt="" src={ServiceBottom} className="absolute bottom-0 h-[40%] w-full" width={"auto"} height={"auto"} />

      <div className="px-20 py-10">
        {/* <h1 className="text-[51px] font-bold"> About </h1> */}
        <h2 className="text-[51px] font-bold">What are we? </h2>

        <div className="w-24 h-2 bg-black mt-6"></div>

        <p className="mt-8 text-lg w-[60%]">
          <strong>Mountain Mavericks Trekking Soul </strong> represents a group, community, or mindset characterized by an adventurous and independent spirit, particularly focused on the soul-enriching experiences of trekking in mountainous landscapes. 
          <br/>
          It encapsulates a love for exploration, a non-traditional approach to trekking, and a deep connection to the spiritual aspects of the journey.
        </p>
        <Link href={'/about'}>Learn more</Link>
      </div>
    </div>
  );
};

export default About;
