"use client";

import React from "react";

import BlueLoader from "@/Components/CustomBlueLoader";
import NavBar from "@/Components/SolarNavabr";
import HomeInspection  from "@/Components/banners/Homeinspection"
import HomeInspectionDetails from "@/Components/HomeInspectionDetails";
import Footer from "@/Components/SolarFooter"

export default function Home() {
  return (
    <div>
      <BlueLoader>
        <NavBar></NavBar>
        <HomeInspection></HomeInspection>
        <HomeInspectionDetails></HomeInspectionDetails>
        <Footer></Footer>
      </BlueLoader>
    </div>
  );
}
