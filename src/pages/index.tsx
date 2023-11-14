import Image from "next/image";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Institutional from "@/components/Institutional";
import Services from "@/components/Services";
import Footer from "@/components/Footer";




export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Institutional /> 
      <Services />
      <Footer />
    </>
  );
}
