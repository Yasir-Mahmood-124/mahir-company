"use client";

import NavBar from "@/Components/CleaningServiceNavbar";
import Footer from "@/Components/HandymanFooter";
import CleaningServiceBanner from "@/Components/banners/CleaningServiceBanner"
import CleaningServiceCard from "@/Components/CleaningServices"
import CleaningTrendingServices from "@/Components/CleaningTrendingService";
import WhyChooseUsSection from "@/Components/ChooseSection";
import image from "@/assests/Images/double-iphone (1).webp"
import FullVideoSection from "@/Components/FullVideoSection";
import ComplaintFormSection from "@/Components/ComplaintSection";
import CleaningTopServicesSection from "@/Components/CleaningTopTrendingService";
import CustomerTestimonials from "@/Components/Testimonial";
import BlueLoader from "@/Components/CustomBlueLoader";

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
