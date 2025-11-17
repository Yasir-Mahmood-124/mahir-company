"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/hair-treatment-banner";
import HaiirTreatment from "@/Components/Cards/HairTreatment";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
   <HaiirTreatment></HaiirTreatment>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
