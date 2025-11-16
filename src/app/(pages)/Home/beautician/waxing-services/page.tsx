"use client";

import React from "react";
import NavBar from "@/Components/beauticianNavabr";

import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import Banner from "@/Components/banners/waxing-services-banner";
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <br></br>
      <br></br>
      <Footer></Footer>
      <CopyrightSection></CopyrightSection>
    </div>
  );
}
