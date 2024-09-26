"use client"

import Image from "next/image";
import FooterLogo from "../../public/footer.png";
import Logo from "../../public/footer_logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-full bg-black">
      <Image alt="" src={FooterLogo} className="w-full bg-black" width={"auto"} height={"auto"} />

      <div className=" bg-[#530030] px-10 md:px-24 py-8 items-center justify-center" >
        <div className="flex flex-row flex-wrap gap-4 justify-center md:justify-between items-center">
          <Image alt="" src={Logo} className="w-[200px] h-32" width={"auto"} height={"auto"} />

          <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-between">
            <Link href={'/'} className="text-white"> Home </Link>
            <Link href={'/about'} className="text-white"> About </Link>
            <Link href={'/gallery'} className="text-white"> Gallery </Link>
            <Link href={'/tours'} className="text-white"> Religious Tours </Link>
            <Link href={'/treks'} className="text-white"> Treks </Link>
            <Link href={'/important-docs'} className="text-white"> Important Documents </Link>
          </div>
        </div>

        <div className="flex items-center justify-center mt-4">
          <h1 className="text-white font-normal text-[18px]">
            © Mountain Mavericks 2024{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
