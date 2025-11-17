"use client";

import React from "react";

import BlueLoader from "@/Components/CustomBlueLoader";
import SolarBannerSection from "@/Components/banners/SolarBannerSection";
import NavBar from "@/Components/SolarNavabr";
import SolarBenefitsSection from "@/Components/SolarBenifits";
export default function Home() {
  return (
    <div>
      <BlueLoader>
        <NavBar></NavBar>
       <SolarBannerSection></SolarBannerSection>
       <SolarBenefitsSection></SolarBenefitsSection>
      </BlueLoader>
    </div>
  );
}
