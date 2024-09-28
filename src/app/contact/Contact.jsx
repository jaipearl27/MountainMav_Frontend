"use client";

import Hero2 from "@/components/Hero2";
import Link from "next/link";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className="bg-black">
      <Hero2 />
      <div className="pt-10 bg-black font-sans leading-relaxed tracking-wide flex flex-col max-w-7xl mx-auto">
        <main className="flex-grow container mx-auto p-6">
          <section className="text-center mb-12">
            <h2 className="text-4xl text-white font-semibold mb-4">
              Contact Us
            </h2>
            <div className="w-full md:w-auto max-w-[500px] mt-20 mx-auto justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-between text-base md:text-lg  text-white">
                <div className="w-[150px] font-bold text-start">Email:</div>
                <div className="text-start">info@mountainmavericks.in</div>
                <div className="w-[150px] font-bold text-start">Phone:</div>
                <div className="text-start">91+ 8800867279</div>
                <div className="w-[150px] font-bold text-start">Address:</div>
                <div className="text-start">
                  Rawat Arts, Majri Mafi, Mohkampur, Dehradun, Uttarakhand Pin
                  248001
                </div>
                <div className="w-[150px] font-bold text-start">Social:</div>
                <div className="text-start flex gap-2 flex-wrap">
                  <Link href={"https://x.com/SoulMavericks"}>
                    <XIcon />
                  </Link>
                  <Link href={"https://www.instagram.com/mountainsmavericks"}>
                    <InstagramIcon />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
