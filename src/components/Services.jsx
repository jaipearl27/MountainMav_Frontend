"use client"

import Trek from '../../public/trek.png'
import Religious from "../../public/religious.png"
import ServiceFooter from "../../public/servicefooter.png"
import Link from "next/link";
import Image from "next/image";


const Services = () => {
  return (
    <div className="h-full bg-black relative">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="pt-8 text-white font-bold text-xl md:text-[51px] flex items-center justify-center">
          {" "}
          Our Services{" "}
        </h1>

        <div className="flex flex-row gap-12 flex-wrap items-center justify-center mt-6">
          <Link href={"/tours"} className="flex flex-col gap-12 items-center justify-center">
          
            <Image alt=""
              src={Religious}
              className="rounded-full border-2 border-dashed p-3 hover:scale-110 transition-all duration-300"
              width={"auto"}
              height={"auto"}
            />
        
              <h1 className="text-[#FFD2BF]">Religious Tours</h1>
            
          </Link>

          <Link href={"/treks"} className="flex flex-col gap-12 items-center justify-center">
          
          <Image alt=""
            src={Trek}
            className="rounded-full border-2 border-dashed p-3 hover:scale-110 transition-all duration-300"
            width={"auto"}
            height={"auto"}
          />
      
            <h1 className="text-[#FFD2BF]">Treks</h1>
          
        </Link>
        </div>

        <Image alt="" src={ServiceFooter} className="mt-24 w-full" width={"auto"}
          height={"auto"} />
      </div>
    </div>

  );
};

export default Services;
