"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import CurtainCleaningBanner from "@/app/Components/curtain_cleaning_banner";
import CurtainCleaningDescription from "@/app/Components/curtain_cleaning_description";
import Footer from "@/app/Components/HandymanFooter";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CurtainCleaningBanner></CurtainCleaningBanner>
      <CurtainCleaningDescription></CurtainCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
