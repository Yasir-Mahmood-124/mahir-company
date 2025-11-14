"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import SolarPanelCleaningBanner from "@/app/Components/banners/solar_panel_cleaning_banner";
import SolarPanelCleaningDescription from "@/app/Components/Cards_Description/solar_panel_description";
import SolarPanelCleaningServicesSection from "@/app/Components/Cards/SolarPannelCleaningServiceCard";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <SolarPanelCleaningBanner></SolarPanelCleaningBanner>
     <SolarPanelCleaningServicesSection></SolarPanelCleaningServicesSection>

      <SolarPanelCleaningDescription></SolarPanelCleaningDescription>
      <Footer></Footer>

    </div>
  );
}
