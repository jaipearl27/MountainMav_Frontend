"use client"
const Hero2 = ({ img = undefined }) => {
  return (
    <div className="">
      <div
        className="h-[100vh] w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `${img ? img : `url('/RELIG.jpg')`}`
        }}
      >
      </div>
    </div>
  );
};

export default Hero2;
