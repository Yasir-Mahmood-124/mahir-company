"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import PlasticTankCleaningBanner from "@/app/Components/banners/plastic_tank_cleaning_banner";
import PlasticTankCleaningDescription from "@/app/Components/Cards_Description/plastic_tank_description";
import WaterTankCleaningServicesSection from "@/app/Components/Cards/WaterTankCleaningServiceCard";
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
