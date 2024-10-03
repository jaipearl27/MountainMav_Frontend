"use client";

import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import SubDropdown from "./SubDropdown";

export default function Header({ color = "[#f1f1f1]" }) {
  const [scrolled, setScrolled] = useState(false);
  const [showMobDropdown, setShowMobDropdown] = useState(false);
  const [titlesData, setTitlesData] = useState(null);

  const [trekLinks, setTrekLinks] = useState(null);
  const [tourLinks, setTourLinks] = useState(null);
  const [specialProgramLinks, setSpecialTripLinks] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/titles`)
      .then((res) => {
        setTitlesData(res.data);

        const treklinks = {
          name: "Treks",
          path: "/treks",
          paths: [],
        };
        res?.data?.treks &&
          res?.data?.treks.map((item) => {
            treklinks.paths.push({
              name: item?.title,
              path: `/treks/${item?._id}`,
            });
          });

        setTrekLinks(treklinks);

        const tourlinks = {
          name: "Tours",
          path: "/tours",
          paths: [],
        };
        res?.data?.tours &&
          res?.data?.tours.map((item) => {
            tourlinks.paths.push({
              name: item?.title,
              path: `/tours/${item?._id}`,
            });
          });

        setTourLinks(tourlinks);

        const specialProgramLinks = {
          name: "Special Programs",
          path: "/specialPrograms",
          paths: [],
        };
        res?.data?.specialPrograms &&
          res?.data?.specialPrograms.map((item) => {
            specialProgramLinks.paths.push({
              name: item?.title,
              path: `/specialPrograms/${item?._id}`,
            });
          });

        setSpecialTripLinks(specialProgramLinks);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 -translate-x-1/2 top-2 px-4 py-1 z-20 w-full md:w-[80vw] glass ${
          scrolled ? "text-white" : "text-black"
        }`}
      >
        <nav
          aria-label="main navigation"
          className={`flex h-[5.5rem] items-stretch justify-between font-semibold text-${color}`}
          role="navigation"
        >
          <Link
            id="Logo"
            aria-label="logo"
            aria-current="page"
            className="flex items-center gap-2 whitesspace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            href={"/"}
          >
            <Image alt="" src={Logo} className="" width={120} height={90} />
          </Link>

          <div className="lg:hidden flex flex-col justify-center">
            <div
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-md text-white rounded-lg"
              onClick={() => setShowMobDropdown(!showMobDropdown)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </div>
            <div
              className={`${
                showMobDropdown ? "" : "hidden"
              } absolute top-[102%] right-0 w-[300px] max-w-[300px] max-h-[500px] overflow-y-auto glass !bg-[#00000070] flex flex-col shadow-[0_2px_2px#121212]`}
            >
              <div>
                <Link
                  href={"/"}
                  className="w-full flex justify-end hover:bg-gradient-to-r hover:from-[#2aa012bb] hover:to-[#09ad40] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[120px] text-right">Home</span>
                </Link>
                <Link
                  href={"/about"}
                  className="w-full flex justify-end hover:bg-gradient-to-r hover:from-[#2aa012bb] hover:to-[#09ad40] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[120px] text-right">About</span>
                </Link>
                <Link
                  href={"/gallery"}
                  className="w-full flex justify-end hover:bg-gradient-to-r hover:from-[#2aa012bb] hover:to-[#09ad40] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[120px] text-right">Gallery</span>
                </Link>
                {tourLinks && tourLinks?.paths?.length > 0 && (
                  <SubDropdown
                    data={tourLinks}
                    setShowMobDropdown={setShowMobDropdown}
                  />
                )}
                {trekLinks && trekLinks?.paths?.length > 0 && (
                  <SubDropdown
                    data={trekLinks}
                    setShowMobDropdown={setShowMobDropdown}
                  />
                )}
                {specialProgramLinks && specialProgramLinks?.paths?.length > 0 && (
                  <SubDropdown
                    data={specialProgramLinks}
                    setShowMobDropdown={setShowMobDropdown}
                  />
                )}
                <Link
                  href={"/contact"}
                  className="w-full flex justify-end hover:bg-gradient-to-r hover:from-[#2aa012bb] hover:to-[#09ad40] text-[#ffffff] text-base py-2 px-3 hover:text-white transition duration-300 "
                  onClick={() => setShowMobDropdown(false)}
                >
                  <span className="w-[120px] text-right">Contact Us</span>
                </Link>
              </div>
            </div>
          </div>

          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-2 pb-12 pt-24 font-semibold transition-[opacity,visibility] duration-300 lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 hidden lg:visible`}
          >
            <li role="none" className="flex">
              <Link
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                href={"/"}
              >
                Home
              </Link>
            </li>
            <li role="none" className="flex">
              <Link
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                className="flex items-center  py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li role="none" className="flex">
              <Link
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                href={"/gallery"}
              >
                Gallery
              </Link>
            </li>

            <li role="none" className="flex">
              <div
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
              >
                <div className="group relative cursor-pointer py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={"/tours"}
                      className={`menu-hover my-2 py-2 text-base font-semibold text-${color} lg:mx-2 hover:text-emerald-500`}
                      onClick=""
                    >
                      Religious Tours
                    </Link>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible w-auto min-w-[300px] max-h-[400px] overflow-y-auto">
                    {titlesData?.tours &&
                      titlesData?.tours.map((item) => (
                        <Link
                          key={item?._id}
                          href={`/tours/${item?._id}`}
                          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        >
                          {item?.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </li>

            <li role="none" className="flex">
              <div
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-0"
                href={"/"}
              >
                <div className="group relative cursor-pointer py-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={"/treks"}
                      className={`menu-hover my-2 py-2 text-base font-semibold text-${color} lg:mx-2 hover:text-emerald-500`}
                      onClick=""
                    >
                      Treks
                    </Link>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  </div>

                  <div className="invisible absolute z-50 top-full -translate-x-1/2 flex  flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible w-[400px] max-h-[400px] overflow-y-auto">
                    {titlesData?.treks &&
                      titlesData?.treks.map((item) => (
                        <Link
                          key={item?._id}
                          href={`/treks/${item?._id}`}
                          className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                        >
                          {item?.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </li>
            {titlesData?.specialPrograms &&
              titlesData?.specialPrograms?.length > 0 && (
                <li role="none" className="flex">
                  <div
                    role="menuitem"
                    aria-haspopup="false"
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-4"
                  >
                    <div className="group relative cursor-pointer py-2">
                      <div className="flex items-center justify-between">
                        <Link
                          href={"/specialPrograms"}
                          className={`menu-hover my-2 py-2 text-base font-semibold text-${color} lg:mx-2 hover:text-emerald-500`}
                          onClick=""
                        >
                          Special Programs
                        </Link>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </div>

                      <div className="invisible absolute z-50 flex flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible w-auto min-w-[300px] max-h-[400px] overflow-y-auto">
                        {titlesData?.specialPrograms.map((item) => (
                          <Link
                            key={item?._id}
                            href={`/specialPrograms/${item?._id}`}
                            className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                          >
                            {item?.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              )}

            <li role="none" className="flex">
              <Link
                role="menuitem"
                aria-haspopup="false"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
