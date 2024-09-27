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
        <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-between items-center">
          <Image alt="" src={Logo} className="w-[200px] h-32" width={"auto"} height={"auto"} />

          <div className="flex flex-row flex-wrap gap-6 justify-center md:justify-between">
            <Link href={'/'} className="text-white p-2"> Home </Link>
            <Link href={'/about'} className="text-white p-2"> About </Link>
            <Link href={'/gallery'} className="text-white p-2"> Gallery </Link>
            <Link href={'/tours'} className="text-white p-2"> Religious Tours </Link>
            <Link href={'/treks'} className="text-white p-2"> Treks </Link>
            <Link href={'/contact'} className="text-white p-2"> Contact </Link>
            <Link href={'/important-docs'} className="text-white p-2 bg-green-500 hover:bg-green-600 rounded-md p-2 transition duration-300"> Important Documents </Link>
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
