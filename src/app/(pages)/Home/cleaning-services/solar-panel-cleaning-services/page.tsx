"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import SolarPanelCleaningBanner from "@/Components/banners/solar_panel_cleaning_banner";
import SolarPanelCleaningDescription from "@/Components/Cards_Description/solar_panel_description";
import SolarPanelCleaningServicesSection from "@/Components/Cards/SolarPannelCleaningServiceCard";
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
