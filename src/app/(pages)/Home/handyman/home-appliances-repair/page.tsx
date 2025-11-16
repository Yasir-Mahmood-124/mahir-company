"use client";

import NavBar from "@/Components/Navabar";
import Footer from "@/Components/HandymanFooter";
import HeroSection from "@/Components/banners/HomeAppliancesBanner";
import HomeAppliancesServices from "@/Components/Cards/HomeAppliancesCard";
import HomeAppliancesServiceDescription from "@/Components/Cards_Description/HomeAppliancesDescription";

export default function HandymanHome() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HomeAppliancesServices />
      <HomeAppliancesServiceDescription />
      <Footer />
    </div>
  );
}
