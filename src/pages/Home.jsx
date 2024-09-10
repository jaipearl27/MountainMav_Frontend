import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Guides from "../components/Guides";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="mt-0 bg-red-300">
      <Hero />
      <About />

      <Services />
      {/* <Guides> */}
      <Footer />
    </div>
  );
};

export default Home;
