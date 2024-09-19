"use client"
const Hero2 = ({ img = undefined }) => {
  return (
    <div className="">
      <div
        className="h-[70vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `${img ? img : `url('/RELIG.jpg')`}`
        }}
      >
      </div>
    </div>
  );
};

export default Hero2;
