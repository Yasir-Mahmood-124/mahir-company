"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import CurtainCleaningBanner from "@/Components/banners/curtain_cleaning_banner";
import CurtainCleaningDescription from "@/Components/Cards_Description/curtain_cleaning_description";
import Footer from "@/Components/HandymanFooter";
import CurtainCleaningServiceCard from "@/Components/Cards/CurtainServiceCard"
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
