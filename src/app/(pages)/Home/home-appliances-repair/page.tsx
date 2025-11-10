"use client";

import NavBar from "@/app/Components/Navabar";
import Footer from "@/app/Components/HandymanFooter";
import HeroSection from "@/app/Components/HomeAppliancesBanner";
import HomeAppliancesServices from "@/app/Components/HomeAppliancesService";
import HomeAppliancesServiceDescription from "@/app/Components/HomeAppliancesDescription";
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
