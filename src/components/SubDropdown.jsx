"use client"
import Link from "next/link";
import React, { useState } from "react";

const SubDropdown = ({ data, setShowMobDropdown }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div
        className="w-full flex justify-end  py-2 px-3 hover:bg-gradient-to-r hover:from-[#2aa012bb] hover:to-[#09ad40] text-[#ffffff] text-base transition duration-300 cursor-pointer"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <span className="w-[200px] flex justify-end gap-1">
          <span className="flex flex-col justify-center">
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

          {data.name}
        </span>
      </div>

      <div
        className={`${
          showDropdown ? "" : "hidden"
        } w-full bg-[#2f2f31] flex flex-col`}
      >
        {data?.paths?.map((item, idx) => (
          <Link
            key={`subDropdownMenu${idx}`}
            href={item?.path ? item?.path : '/'}
            className={` w-full text-right py-2 px-3 bg-[#1a1a1b] hover:bg-gradient-to-r hover:from-[#2aa012bb] hover:to-[#09ad40] text-[#ffffff] text-base transition duration-300 cursor-pointer relative`}
            onClick={() => setShowMobDropdown(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SubDropdown;
