"use client";

import TrendingServicesSection from "@/Components/BeauticiamTopTrendingServices";
import BeauticianBanner from "@/Components/banners/beautician-banner";
import NavBar from "@/Components/beauticianNavabr";
import BeauticianServiceCard from "@/Components/BeauticianServices";
import BeauticianApp from "@//Components/BeauticianApp";
import FullVideoSection from "@/Components/BeauticianFullVideo";
import CustomerTestimonials from "@/Components/BeauticianTestimonial";
import WhyChooseSection from "@/Components/BeauticianwhychooseSection";
import BookServicesSection from "@/Components/BookServiceSection";
import ComplaintsSection from "@/Components/BeauticianComplaintSectionForm";
import ContentSection from "@/Components/BeauticianContentSection";
import Footer from "@/Components/BeauticianFooter";
import CopyrightSection from "@/Components/CopyrightSection";
import CustomLoader from "@/Components/CustomLoader"; 

export default function Home() {
  return (
    <CustomLoader> 
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
    </CustomLoader> 
  );
}