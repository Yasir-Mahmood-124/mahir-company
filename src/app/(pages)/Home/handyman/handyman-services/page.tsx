"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/HandymanServiceBanner";
import HandymanServicesSection from "@/app/Components/Cards/HandymanServiceCard";
import HandymanServiceDescription from "@/app/Components/HandymanServiceDescription";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <HandymanServicesSection></HandymanServicesSection>
      <HandymanServiceDescription></HandymanServiceDescription>
      <Footer></Footer>

    </div>
  );
}
