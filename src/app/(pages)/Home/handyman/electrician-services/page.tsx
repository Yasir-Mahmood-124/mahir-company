"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/banners/ElectrionServiceBanner";
import ElectrionServicesSection from "@/app/Components/Cards/ElectrionServiceCard";
import ElectrionServiceDescription from "@/app/Components//Cards_Description/ELectrionServiceDescription"
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <ElectrionServicesSection></ElectrionServicesSection>
      <ElectrionServiceDescription></ElectrionServiceDescription>
      <Footer></Footer>

    </div>
  );
}
