"use client";

import React from "react";
import HeroSection from "../../Components/HeroSection";
import AnnouncementSection from "@/app/Components/Annoucementsection";
import WhyChoose from "@/app/Components/Whychooseus";
import Autocarasuel from "../../Components/Autocarasuel";
import MobileAppSection from "@/app/Components/MobileAppsection";
import MobileAppSectionLeftImage from "@/app/Components/MobileSection";
import Footer from "@/app/Components/Footer";
// import image from "../../Components/Images/become-mahir.webp"
import Navbar from "../../Components/Navabar";
import Banner from "../../Components/Banner"
import ServicesSection from "@/app/Components/Servicesection";
import TrendingServices from "@/app/Components/TrendingService";
import WhyChooseUsSection from "@/app/Components/ChooseSection";
import image from "../../Components/Images/double-iphone (1).webp"
import FullVideoSection from "@/app/Components/FullVideoSection";
import ComplaintSection from "@/app/Components/ComplaintSection";
import TopServicesSection from "@/app/Components/TopServicesSection";
import HandymanFooter from "../../Components/HandymanFooter"
export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      {/* <AnnouncementSection /> */}
      {/* <MobileAppSection></MobileAppSection> */}
      {/* <WhyChoose></WhyChoose> */}

      {/* <MobileAppSectionLeftImage></MobileAppSectionLeftImage> */}
      {/* <Autocarasuel></Autocarasuel> */}
      {/* <Footer></Footer> */}
      <Navbar></Navbar>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      {/* <TrendingServices></TrendingServices> */}
      <WhyChooseUsSection mockupImage={image.src}></WhyChooseUsSection>
      <FullVideoSection></FullVideoSection>
      <ComplaintSection></ComplaintSection>
      <TopServicesSection></TopServicesSection>
      <HandymanFooter></HandymanFooter>
    </div>
  );
}
