"use client"

import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";


export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const [titlesData, setTitlesData] = useState(null)


  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/titles`).then(res => {
      setTitlesData(res.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <>
      <header className="relative z-20 w-full bg-transparent  after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200  lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-black pt-8"
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
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>

            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-2 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
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
                  href={"/"}
                >
                  About
                </Link>
              </li>
              <li role="none" className="flex">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href={"/"}
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
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-2 hover:text-emerald-500"
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

                    <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible max-h-[400px] overflow-y-auto">
                      {titlesData?.tours && titlesData?.tours.map((item) => (
                        <Link key={item?._id} href={`/tours/${item?._id}`} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
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
                        className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4 hover:text-emerald-500"
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

                    <div className="invisible absolute z-50 flex w-max flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible max-h-[400px] overflow-y-auto">
                    {titlesData?.treks && titlesData?.treks.map((item) => (
                        <Link key={item?._id} href={`/treks/${item?._id}`} className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                        {item?.title}
                      </Link>
                      ))}

                    
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className=" flex items-center lg:ml-0 lg:px-12">
              <button className="h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
                <Link href={"/important-docs"}>
                  <span>Important Documents</span>
                </Link>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
