"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import MattresCleaningService from "@/app/Components/Cards/MattresCLeaningServiceCard";
import MattressCleaningBanner from "@/app/Components/banners/mattress_cleaning_banner";
import MattressCleaningDescription from "@/app/Components/Cards_Description/mattress_cleaning_description";
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
