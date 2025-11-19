"use client";

import React from "react";

import BlueLoader from "@/Components/CustomBlueLoader";
import SolarBannerSection from "@/Components/banners/SolarBannerSection";
import NavBar from "@/Components/SolarNavabr";
import SolarBenefitsSection from "@/Components/SolarBenifits";
import SolarFooter from "@/Components/SolarFooter"
export default function Home() {
  return (
    <div>
      <BlueLoader>
        <NavBar></NavBar>
       <SolarBannerSection></SolarBannerSection>
       <SolarBenefitsSection></SolarBenefitsSection>
       <SolarFooter></SolarFooter>
      </BlueLoader>
    </div>
  );
}
