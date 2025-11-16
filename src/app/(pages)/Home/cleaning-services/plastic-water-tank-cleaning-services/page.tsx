"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import PlasticTankCleaningBanner from "@/Components/banners/plastic_tank_cleaning_banner";
import PlasticTankCleaningDescription from "@/Components/Cards_Description/plastic_tank_description";
import WaterTankCleaningServicesSection from "@/Components/Cards/WaterTankCleaningServiceCard";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <PlasticTankCleaningBanner></PlasticTankCleaningBanner>
      <WaterTankCleaningServicesSection></WaterTankCleaningServicesSection>
      <PlasticTankCleaningDescription></PlasticTankCleaningDescription>
      <Footer></Footer>

    </div>
  );
}
