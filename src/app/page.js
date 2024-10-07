import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mountains from "../../public/mountains.png";
import { Toaster } from "sonner";


export default function Home() {
  return (
    
      <div className="mt-0 bg-black">
        <Toaster />
        <Hero
          head1="EXPLORE"
          head2="THE MOUNTAIN"
          head3="Live your dream and explore"
          img1={Mountains}
        />
        <About />

        <Services />
        {/* <Guides> */}
      </div>
   
  );
}
