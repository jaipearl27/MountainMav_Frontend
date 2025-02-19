"use client";

import Image from "next/image";
import FooterLogo from "../../public/footer.png";
import Logo from "../../public/footer_logo.png";
import Link from "next/link";

import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="h-full bg-black">
      <Image
        alt=""
        src={FooterLogo}
        className="w-full bg-black"
        width={"auto"}
        height={"auto"}
      />

      <div className=" bg-[#530030] px-10 md:px-24 py-8 items-center justify-center">
        <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-between items-center">
          <Image
            alt=""
            src={Logo}
            className="w-[200px] h-32"
            width={"auto"}
            height={"auto"}
          />

          <div className="flex flex-row flex-wrap gap-6 font-semibold justify-center md:justify-between">
            <Link href={"/"} className="text-white p-2">
              Home
            </Link>
            <Link href={"/about"} className="text-white p-2">
              About
            </Link>
            <Link href={"/gallery"} className="text-white p-2">
              Gallery
            </Link>
            <Link href={"/tours"} className="text-white p-2">
              Religious Tours
            </Link>
            <Link href={"/treks"} className="text-white p-2">
              Treks
            </Link>
            <Link href={"/specialPrograms"} className="text-white p-2">
              Special Programs
            </Link>
            <Link href={"/contact"} className="text-white p-2">
              Contact
            </Link>
            <Link
              href={"/important-docs"}
              className="text-white bg-green-500 hover:bg-green-600 rounded-md p-2 transition duration-300"
            >
              Important Documents
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <div className="text-start flex gap-2 flex-wrap">
            <div className="text-white font-semibold flex flex-col justify-center">
              Socials:
            </div>

            <Link href={"https://www.instagram.com/mountainsmavericks/"}>
              <InstagramIcon sx={{ color: "white" }} />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=61555810337252"}
            >
              <FacebookIcon sx={{ color: "white" }} />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/mountain-mavericks-985b1a328/"}
            >
              <LinkedInIcon sx={{ color: "white" }} />
            </Link>

            <Link href={"https://x.com/SoulMavericks"}>
              <XIcon sx={{ color: "white" }} />
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center mt-5">
          <h1 className="text-white font-normal text-base">
            © Mountain Mavericks 2024
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
