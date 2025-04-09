import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mountains from "../../public/mountains.png";
import Tours from "@/app/tours/Tours"
import Treks from "@/app/treks/Treks"
import { Toaster } from "sonner";


export default function Home() {
  return (
    
      <div className="mt-0 bg-black">
        <Toaster />
        <Hero
          head1="Connect people"
          head2="with the raw beauty of"
          head3="Nature and Spirituality"
          img1={Mountains}
        />
        <About />

        <Tours homepage={true} />
        <Treks homepage={true} />

        <Services />
        
        {/* <Guides> */}
      </div>
   
  );
}
