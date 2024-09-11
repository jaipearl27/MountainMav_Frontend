import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import ReligiousTours from "../components/ReligiousTours";
import Hero2 from "../components/Hero2";

const Religious = () => {
  return (
    <div className="mt-0  h-full">
      <Hero2 head1="RELIGIOUS" />

      <ReligiousTours />
      {/* <Guides> */}
      <Footer />
    </div>
  );
};

export default Religious;
