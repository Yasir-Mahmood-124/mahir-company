"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/banners/HandymanServiceBanner";
import HandymanServicesSection from "@/app/Components/Cards/HandymanServiceCard";
import HandymanServiceDescription from "@/app/Components/Cards_Description/HandymanServiceDescription";
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
