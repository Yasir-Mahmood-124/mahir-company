"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import SolarPanelCleaningBanner from "@/app/Components/solar_panel_cleaning_banner";
import SolarPanelCleaningDescription from "@/app/Components/solar_panel_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <SolarPanelCleaningBanner></SolarPanelCleaningBanner>
      <SolarPanelCleaningDescription></SolarPanelCleaningDescription>
   
      <Footer></Footer>

    </div>
  );
}
