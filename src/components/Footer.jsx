"use client"

import FooterLogo from "../../public/footer.png";
import Logo from "../../public/footer_logo.png";

const Footer = () => {
  return (
    <div className="h-full bg-black">
      <img src={FooterLogo} className=" bg-black" />

      <div className=" bg-[#530030] px-24 py-8 items-center justify-center">
        <div className="flex flex-row justify-between items-center">
          <img src={Logo} className="  h-32" />

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
