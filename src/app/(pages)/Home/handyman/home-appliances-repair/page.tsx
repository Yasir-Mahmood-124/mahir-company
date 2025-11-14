"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/banners/HomeAppliancesBanner";
import HomeAppliancesServices from "@/app/Components/Cards/HomeAppliancesCard";
import HomeAppliancesServiceDescription from "@/app/Components/Cards_Description/HomeAppliancesDescription";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <HomeAppliancesServices></HomeAppliancesServices>
      <HomeAppliancesServiceDescription></HomeAppliancesServiceDescription>
      <Footer></Footer>

    </div>
  );
}
