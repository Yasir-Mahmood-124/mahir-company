"use client";

import CementTankCleaningServicesSection from "@/Components/Cards/CementTankServicecard";
import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import CementTankCleaningBanner from "@/Components/banners/cement_tank_cleaning_banner";
import CementTankCleaningDescription from "@/Components/Cards_Description/cement_tank_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CementTankCleaningBanner></CementTankCleaningBanner>
      <CementTankCleaningServicesSection></CementTankCleaningServicesSection>
      <CementTankCleaningDescription></CementTankCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
