"use client"

import Header from "./Header";



const Hero2 = ({ img = undefined }) => {
  return (
    <div className="">
      <div
        className="h-[40vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `${img ? img : `url('/RELIG.jpg')`}`
        }}
      >
      </div>
    </div>
  );
};

export default Hero2;
