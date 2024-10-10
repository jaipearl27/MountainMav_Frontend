"use client";

import Image from "next/image";

const Hero2 = ({ img, forBlog = true }) => {
  return (
    <>
      {forBlog ? (
        <Image
          src={img}
          className={`w-auto mx-auto mt-32`}
          height={1080}
          width={1920}
        />
      ) : (
        <Image
          src={`${img ? img : `/RELIG.jpg`}`}
          className={`h-[60vh] w-full object-cover`}
          height={1080}
          width={1920}
        />
      )}
    </>
  );
};

export default Hero2;
