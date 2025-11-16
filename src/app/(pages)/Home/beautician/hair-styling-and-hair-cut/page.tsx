"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Hairstylingbanner from "@/Components/banners/hair-styling-banner";
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
