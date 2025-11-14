"use client";

import React from "react";
import NavBar from "@/app/Components/beauticianNavabr";

import Footer from "@/app/Components/BeauticianFooter";
import CopyrightSection from "@/app/Components/CopyrightSection";
import Banner from "@/app/Components/banners/waxing-services-banner";
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
