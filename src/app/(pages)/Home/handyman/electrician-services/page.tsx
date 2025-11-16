"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import HeroSection from "@/Components/banners/ElectrionServiceBanner";
import ElectrionServicesSection from "@/Components/Cards/ElectrionServiceCard";
import ElectrionServiceDescription from "@/Components/Cards_Description/ELectrionServiceDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ElectrionServicesSection />
      <ElectrionServiceDescription />
      <Footer />
    </div>
  );
}
