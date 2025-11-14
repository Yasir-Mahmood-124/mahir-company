"use client";

import NavBar from "@/app/Components/CleaningServiceNavbar";
import Footer from "@/app/Components/HandymanFooter";
import CleaningServiceBanner from "@/app/Components/banners/CleaningServiceBanner"
import CleaningServiceCard from "@/app/Components/CleaningServices"
import CleaningTrendingServices from "@/app/Components/CleaningTrendingService";
import WhyChooseUsSection from "@/app/Components/ChooseSection";
import image from "../../../Components/Images/double-iphone.webp"
import FullVideoSection from "@/app/Components/FullVideoSection";
import ComplaintFormSection from "@/app/Components/ComplaintSection";
import CleaningTopServicesSection from "@/app/Components/CleaningTopTrendingService";
import CustomerTestimonials from "@/app/Components/Testimonial";
import BlueLoader from "@/app/Components/CustomBlueLoader";

export default function Home() {
  return (
    <div>
      <BlueLoader>
      <NavBar></NavBar>
      <CleaningServiceBanner></CleaningServiceBanner>
      <CleaningServiceCard></CleaningServiceCard>
      <CleaningTrendingServices></CleaningTrendingServices>
      <WhyChooseUsSection mockupImage={image.src}></WhyChooseUsSection>
      <FullVideoSection></FullVideoSection>
      <CustomerTestimonials></CustomerTestimonials>
      <ComplaintFormSection></ComplaintFormSection>
      <CleaningTopServicesSection></CleaningTopServicesSection>
      <Footer></Footer>
</BlueLoader>
    </div>
  );
}
