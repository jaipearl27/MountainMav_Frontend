/* eslint-disable react/prop-types */
import Header from "./Header";
import Birds from "../../public/birds.png";

const Hero2 = ({ head1 }) => {
  return (
    <div className="">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('RELIG.jpg')",
        }}
      >
        <Header />
        <div className="px-20 ">
          <img src={Birds} className="absolute top-32 left-96" />
          <h1 className="text-7xl font-black absolute top-[40%] left-[40%]">
            {" "}
            {head1}
          </h1>

          <h1 className="font-medium text-xl absolute top-[70%] left-[50%] ">
            {" "}
            Scroll Below{" "}
          </h1>

          <div className="w-28 h-2 bg-black mt-2 absolute top-[75%] left-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
