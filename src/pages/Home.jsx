import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Guides from "../components/Guides";
import Footer from "../components/Footer";
import Mouhtains from "../../public/mountains.png";

const Home = () => {
  return (
    <div className="mt-0 bg-red-300">
      <Hero
        head1="EXPLORE"
        head2="THE MOUNTAIN"
        head3="Live your dream and explore"
        img1={Mouhtains}
      />
      <About />

      <Services />
      {/* <Guides> */}
      <Footer />
    </div>
  );
};

export default Home;
