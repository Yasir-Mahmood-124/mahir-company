"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import MattresCleaningService from "@/Components/Cards/MattresCLeaningServiceCard";
import MattressCleaningBanner from "@/Components/banners/mattress_cleaning_banner";
import MattressCleaningDescription from "@/Components/Cards_Description/mattress_cleaning_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <MattressCleaningBanner></MattressCleaningBanner>
      <MattresCleaningService></MattresCleaningService>
      <MattressCleaningDescription></MattressCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
