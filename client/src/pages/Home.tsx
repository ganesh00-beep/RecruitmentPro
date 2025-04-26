import HeroBanner from "@/components/home/HeroBanner";
import ClientLogos from "@/components/home/ClientLogos";
import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import GetStarted from "@/components/home/GetStarted";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Add Font Awesome CDN dynamically
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
    document.head.appendChild(link);
    
    // Update page title
    document.title = "Recroot - Making Recruitment Simple";
    
    return () => {
      // Clean up if needed
      document.head.removeChild(link);
    };
  }, []);
  
  return (
    <>
      <HeroBanner />
      <ClientLogos />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Stats />
      <GetStarted />
    </>
  );
};

export default Home;
