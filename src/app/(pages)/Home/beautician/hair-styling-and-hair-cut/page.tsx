"use client";

import React from "react";
import NavBar from "@/app/Components/beauticianNavabr";

import Footer from "@/app/Components/BeauticianFooter";
import CopyrightSection from "@/app/Components/CopyrightSection";
import Hairstylingbanner from "@/app/Components/banners/hair-styling-banner";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hairstylingbanner></Hairstylingbanner>
      <br></br>
      <br></br>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
