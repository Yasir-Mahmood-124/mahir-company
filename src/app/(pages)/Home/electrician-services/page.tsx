"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/ElectrionServiceBanner";
import ElectrionServicesSection from "@/app/Components/ElectrionServiceSection";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <ElectrionServicesSection></ElectrionServicesSection>
      <Footer></Footer>

    </div>
  );
}
