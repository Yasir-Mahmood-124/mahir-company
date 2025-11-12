"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import SofaCleaningBanner from "@/app/Components/sofa_cleaning_banner";
import SofaCleaningDescription from "@/app/Components/sofa_cleaning_description";
export default function HandymanHome() {
  return (
    <div>
      <NavBar></NavBar>
      <SofaCleaningBanner></SofaCleaningBanner>
      <SofaCleaningDescription></SofaCleaningDescription>
      <Footer></Footer>

    </div>
  );
}
