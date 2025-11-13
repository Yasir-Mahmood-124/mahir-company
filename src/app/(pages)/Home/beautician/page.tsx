"use client";

import TrendingServicesSection from "@/app/Components/BeauticiamTopTrendingServices";
import BeauticianBanner from "@/app/Components/beautician-banner";
import NavBar from "@/app/Components/beauticianNavabr";
import BeauticianServiceCard from "@/app/Components/BeauticianServices";
import BeauticianApp from "@/app/Components/BeauticianApp"
import React from "react";
import FullVideoSection from "@/app/Components/BeauticianFullVideo";
import CustomerTestimonials from "@/app/Components/BeauticianTestimonial";
import WhyChooseSection from "@/app/Components/BeauticianwhychooseSection";
import BookServicesSection from "@/app/Components/BookServiceSection";
import ComplaintsSection from "@/app/Components/BeauticianComplaintSectionForm";
import ContentSection from "@/app/Components/BeauticianContentSection";
import Footer from "@/app/Components/BeauticianFooter";
import CopyrightSection from "@/app/Components/CopyrightSection";
export default function Home() {
  return (
    <div>
        <NavBar></NavBar>
        <BeauticianBanner></BeauticianBanner>
        <BeauticianServiceCard></BeauticianServiceCard>
        <TrendingServicesSection></TrendingServicesSection>
        <br></br>
        <br></br>
        <br></br>
        <BeauticianApp></BeauticianApp>
        <br></br>
        <br></br>

        <FullVideoSection></FullVideoSection>
        <CustomerTestimonials></CustomerTestimonials>
        <WhyChooseSection></WhyChooseSection>
        <BookServicesSection></BookServicesSection>
        <ComplaintsSection></ComplaintsSection>
        <ContentSection></ContentSection>
        <Footer></Footer>
        <CopyrightSection></CopyrightSection>
    </div>
  );
}
