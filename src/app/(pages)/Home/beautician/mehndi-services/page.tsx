"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/mehndi-services-banner";
import MehndiService from "@/Components/Cards/MehndiServiceCard";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <MehndiService></MehndiService>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
