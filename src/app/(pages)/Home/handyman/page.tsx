"use client";

import NavBar from "@/Components/Navabar";
import BannerSection from "@/Components/banners/Banner";
import ServicesSection from "@/Components/Servicesection";
import TrendingServices from "@/Components/TrendingService";
import WhyChooseUsSection from "@/Components/ChooseSection";
import image from "@/assests/Images/double-iphone.webp";
import FullVideoSection from "@/Components/FullVideoSection";
import CustomerTestimonials from "@/Components/Testimonial";
import ComplaintFormSection from "@/Components/ComplaintSection";
import TopServicesSection from "@/Components/TopServicesSection";
import Footer from "@/Components/HandymanFooter";
import BlueLoader from "@/Components/CustomBlueLoader";

export default function HandymanHome() {
  return (
    <div>
      <BlueLoader>
        <NavBar />
        <BannerSection />
        <ServicesSection />
        <TrendingServices />
        <WhyChooseUsSection mockupImage={image.src} />
        <FullVideoSection />
        <CustomerTestimonials />
        <ComplaintFormSection />
        <TopServicesSection />
        <Footer />
      </BlueLoader>
    </div>
  );
}
