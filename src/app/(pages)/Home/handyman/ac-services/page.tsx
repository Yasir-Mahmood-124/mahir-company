"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import BannerSection from "@/app/Components/Banner";
import HeroSection from "@/app/Components/AcServiceBanner";
import ServiceCard from "@/app/Components/ServiceCard";
import ACServicesSection from "@/app/Components/Cards/AcServiceSectionCard";
import ACServicesDescription from "@/app/Components/ACServicesDescription";
export default function HandymanHome() {
  return (
    <div>
        <NavBar></NavBar>
  <HeroSection></HeroSection>
  <ACServicesSection ></ACServicesSection>
  <ACServicesDescription></ACServicesDescription>
        <Footer></Footer>
    </div>
  );
}
