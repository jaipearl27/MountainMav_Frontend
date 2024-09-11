import Footer from "../components/Footer";
import TourTreks from "../components/TourTreks";
import Hero2 from "../components/Hero2";

const Treks = () => {
  return (
    <div className="mt-0 bg-red-300">
      <Hero2 head1="TREKS" />

      <TourTreks />
      <Footer />
    </div>
  );
};

export default Treks;
