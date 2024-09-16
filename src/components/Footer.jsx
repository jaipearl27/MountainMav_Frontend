"use client"

import Image from "next/image";
import FooterLogo from "../../public/footer.png";
import Logo from "../../public/footer_logo.png";

const Footer = () => {
  return (
    <div className="h-full bg-black">
      <Image  src={FooterLogo} className="w-full bg-black" width={"auto"} height={"auto"}/>

      <div className=" bg-[#530030] px-24 py-8 items-center justify-center" >
        <div className="flex flex-row justify-between items-center">
          <Image  src={Logo} className="w-[200px] h-32" width={"auto"} height={"auto"}/>

          <div className="flex flex-row gap-6">
            <h1 className="text-white"> Home </h1>
            <h1 className="text-white"> About </h1>
            <h1 className="text-white"> Gallery </h1>
            <h1 className="text-white"> Religious Tours </h1>
            <h1 className="text-white"> Treks </h1>
            <h1 className="text-white"> Importnant Documents </h1>
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
