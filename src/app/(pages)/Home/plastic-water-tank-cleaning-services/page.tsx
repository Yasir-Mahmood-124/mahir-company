"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import PlasticTankCleaningBanner from "@/app/Components/plastic_tank_cleaning_banner";
import PlasticTankCleaningDescription from "@/app/Components/plastic_tank_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <PlasticTankCleaningBanner></PlasticTankCleaningBanner>
      <PlasticTankCleaningDescription></PlasticTankCleaningDescription>
      <Footer></Footer>

    </div>
  );
}
