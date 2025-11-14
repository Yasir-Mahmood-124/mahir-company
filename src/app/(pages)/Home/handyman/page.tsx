"use client";

import NavBar from "@/app/Components/Navabar";
import BannerSection from "@/app/Components/banners/Banner";
import ServicesSection from "@/app/Components/Servicesection";
import TrendingServices from "@/app/Components/TrendingService";
import WhyChooseUsSection from "@/app/Components/ChooseSection";
import image from "../../../Components/Images/double-iphone.webp"
import FullVideoSection from "@/app/Components/FullVideoSection";
import CustomerTestimonials from "@/app/Components/Testimonial";
import ComplaintFormSection from "@/app/Components/ComplaintSection";
import TopServicesSection from "@/app/Components/TopServicesSection";
import Footer from "@/app/Components/HandymanFooter";
export default function HandymanHome() {
  return (
    <div>
        <NavBar></NavBar>
        <BannerSection></BannerSection>
        <ServicesSection></ServicesSection>
        <TrendingServices></TrendingServices>
        <WhyChooseUsSection mockupImage={image.src}></WhyChooseUsSection>
        <FullVideoSection></FullVideoSection>
        <CustomerTestimonials></CustomerTestimonials>
        <ComplaintFormSection></ComplaintFormSection>
        <TopServicesSection></TopServicesSection>
        <Footer></Footer>
    </div>
  );
}
