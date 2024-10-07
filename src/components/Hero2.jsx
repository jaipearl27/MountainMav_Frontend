"use client";
const Hero2 = ({ img = undefined, forBlog=true }) => {
  return (
    <>
    {forBlog ? (
      <div
        className={`h-screen w-full bg-fit bg-center bg-no-repeat`}
        style={{
          backgroundImage: `${img ? img : `url('/RELIG.jpg')`}`,
        }}
      ></div>
    ) : (
      <div
      className={`!h-[60vh] w-full bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `${img ? img : `url('/RELIG.jpg')`}`,
      }}
    ></div>
    )}
    </>
  );
};

export default Hero2;
