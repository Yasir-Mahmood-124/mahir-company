"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import MattressCleaningBanner from "@/app/Components/mattress_cleaning_banner";
import MattressCleaningDescription from "@/app/Components/mattress_cleaning_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <MattressCleaningBanner></MattressCleaningBanner>
      <MattressCleaningDescription></MattressCleaningDescription>
      <Footer></Footer>
    </div>
  );
}
