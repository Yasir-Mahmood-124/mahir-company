"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import BannerSection from "@/app/Components/banners/Banner";
import HeroSection from "@/app/Components/banners/AcServiceBanner";
import ServiceCard from "@/app/Components/Card_Details/HandymanServiceCardDetails";
import ACServicesSection from "@/app/Components/Cards/AcServiceSectionCard";
import ACServicesDescription from "@/app/Components/Cards_Description/ACServicesDescription";
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
