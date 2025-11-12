"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import CementTankCleaningBanner from "@/app/Components/cement_tank_cleaning_banner";
import CementTankCleaningDescription from "@/app/Components/cement_tank_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CementTankCleaningBanner></CementTankCleaningBanner>
      <CementTankCleaningDescription></CementTankCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
