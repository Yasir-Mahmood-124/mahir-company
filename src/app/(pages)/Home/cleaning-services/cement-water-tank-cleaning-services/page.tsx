"use client";

import CementTankCleaningServicesSection from "@/app/Components/Cards/CementTankServicecard";
import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import CementTankCleaningBanner from "@/app/Components/banners/cement_tank_cleaning_banner";
import CementTankCleaningDescription from "@/app/Components/Cards_Description/cement_tank_description";
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
