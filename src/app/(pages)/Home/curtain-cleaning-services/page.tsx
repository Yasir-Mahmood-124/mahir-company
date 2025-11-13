"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import CurtainCleaningBanner from "@/app/Components/curtain_cleaning_banner";
import CurtainCleaningDescription from "@/app/Components/curtain_cleaning_description";
import Footer from "@/app/Components/HandymanFooter";
import CurtainCleaningServiceCard from "@/app/Components/CurtainServiceCard"
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <CurtainCleaningBanner></CurtainCleaningBanner>
      <CurtainCleaningServiceCard></CurtainCleaningServiceCard>
      <CurtainCleaningDescription></CurtainCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
