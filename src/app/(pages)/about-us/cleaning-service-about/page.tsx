"use client";
import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  Button,
  TextField,
  Link
} from '@mui/material';
import {
  VerifiedUser as VerifiedIcozcon,
  AttachMoney as MoneyIcon,
  Security as SecurityIcon,
  Phone as PhoneIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Pinterest as PinterestIcon,
  YouTube as YouTubeIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon
} from '@mui/icons-material';
import Image from 'next/image';
import image from "@/assests/Images/city-illustration.png"
import NavBar from '@/Components/CleaningServiceNavbar';
import Footer from '@/Components/HandymanFooter';
interface ServiceStat {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface MenuItem {
  text: string;
  href: string;
}

interface SocialLink {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const AboutUsPage: React.FC = () => {
 
  const services: MenuItem[] = [
    { text: "AC Services", href: "/ac-services" },
    { text: "Carpenter Services", href: "/carpenter-services" },
    { text: "Electrician Services", href: "/electrician-services" },
    { text: "Geyser Services", href: "/geyser-services" },
    { text: "Handyman Services", href: "/handyman-services" },
    { text: "Home Appliances Repair", href: "/home-appliances-repair" },
    { text: "Home Inspection Services", href: "/home-inspection-services" },
    { text: "Painter Services", href: "/painter-services" },
    { text: "Pest Control Services", href: "/pest-control-services" },
    { text: "Plumber Services", href: "/plumbing-services" }
  ];

  const cities: MenuItem[] = [
    { text: "Lahore", href: "/lahore" },
    { text: "Karachi", href: "/karachi" },
    { text: "Islamabad", href: "/islamabad" },
    { text: "Rawalpindi", href: "/rawalpindi" },
    { text: "Multan", href: "/multan" }
  ];

  const mainMenu: MenuItem[] = [
    { text: "Home", href: "/handyman" },
    { text: "About Us", href: "/about-us" },
    { text: "Contact Us", href: "/contact-us" },
    { text: "Sitemap", href: "/sitemap" },
    { text: "FAQs", href: "/faqs" },
    { text: "Term & Conditions", href: "/terms-conditions" },
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Blogs", href: "https://mahircompany.com/blog/" }
  ];

  const socialLinks: SocialLink[] = [
    { icon: <PhoneIcon sx={{ fontSize: 16 }} />, text: "0309 6661919", href: "tel:+923096661919" },
    { icon: <TwitterIcon sx={{ fontSize: 16 }} />, text: "Twitter", href: "https://twitter.com/MahirCompany" },
    { icon: <LinkedInIcon sx={{ fontSize: 16 }} />, text: "Linkedin", href: "https://www.linkedin.com/company/mr-mahir/" },
    { icon: <PinterestIcon sx={{ fontSize: 16 }} />, text: "Pinterest", href: "https://www.pinterest.com/MahirCompany/" },
    { icon: <YouTubeIcon sx={{ fontSize: 16 }} />, text: "Youtube", href: "https://www.youtube.com/channel/UC0J5hmQpTgw3TgLMc0OjhqQ" },
    { icon: <InstagramIcon sx={{ fontSize: 16 }} />, text: "Instagram", href: "https://www.instagram.com/mahir_company/" },
    { icon: <FacebookIcon sx={{ fontSize: 16 }} />, text: "Facebook", href: "https://www.facebook.com/teammahir/" }
  ];

  return (
    <div>

<NavBar></NavBar>
    <Box>
      {/* Hero Section with City Illustration */}
      <Box sx={{  py: 6 }}>
        <Container maxWidth="lg">
          {/* City Illustration Image */}
          <Box 
            sx={{ 
              width: '100%', 
              height: '180px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 5,
              bgcolor: 'white',
              borderRadius: 2,
              overflow: 'hidden'
            }}
          >
            {/* Replace with your actual city illustration image */}
            <Image 
              src={image}
              alt="City Illustration" 
              width={1340} 
              height={273}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
            {/* <Typography variant="body2" sx={{ color: '#999' }}>
              City Illustration Image Here
            </Typography> */}
          </Box>

          {/* Who is UstadonCall Company */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#000' }}>
            Who is UstadonCall Company?
          </Typography>
          <Typography variant="body1" sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
            UstadonCall Company is Pakistan&apos;s no.1 online marketplace connecting service providers and seekers in a hassle-free and safe way. With our state-of-the-art website, UstadonCall Company App, and UstadonCall Partner App, we are bridging the gap between our customers (consumers and vendors). Now they can connect more efficiently, reliably, safely, and affordably, to enjoy a better living style.
          </Typography>

          {/* UstadonCallir Company Website & App */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#000' }}>
            UstadonCall Company Website &amp; App
          </Typography>
          <Typography variant="body1" sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
            These are designed to make the life of the common man and woman easy by providing them with a few-clicks everything-fix solution. From home maintenance to cleaning to personal care, our consumer apps help book and pre-book services with a 100% quality, security, and cost-effectiveness guarantee.
          </Typography>

          {/* UstadonCall Partner App */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#000' }}>
            UstadonCall Partner App
          </Typography>
          <Typography variant="body1" sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
            To empower our service providers, we get them registered on UstadonCall Partner App after due diligence that includes but is not limited to verification and training sessions for soft and technical skills.
          </Typography>

          {/* Our Empowerment Mission */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#000' }}>
            Our Empowerment Mission
          </Typography>
          <Typography variant="body1" sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
            Our goal is to help thousands of local technicians find reliable earning opportunities for a good livelihood. They register with us through the UstadonCall  partner app and get training and support from the CS department, which make order-taking and order-completion easier for them. Through the implementation all SOPs, we make them the 1st choice of service seekers, enabling them to earn better and live with integrity.
          </Typography>

          {/* Our Achievements */}
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#000' }}>
            Our Achievements
          </Typography>
          <Typography variant="body1" sx={{ color: '#777', mb: 3, lineHeight: 1.8 }}>
            Launched as Mr. UstadonCall, UstadonCall Company has grown exponentially over three years. Indicators like service-wise growth, geographical expansion, number of downloads of the apps, and monthly traffic on the website validate the above claim.
          </Typography>

          {/* Achievement Details */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="body1" sx={{ color: '#777', mb: 2, lineHeight: 1.8 }}>
              <strong style={{ color: '#000' }}>Service-wise Growth:</strong> Starting with a few Maintenance Services, we now offer 161+ Home Maintenance Services, 38+ Personal Care Services, 8 Cleaning Services, five fumigation services, and our Monthly Home Maintenance Subscription Packages.
            </Typography>
            <Typography variant="body1" sx={{ color: '#777', mb: 2, lineHeight: 1.8 }}>
              <strong style={{ color: '#000' }}>Geographical Expansion:</strong> Starting from Lahore with home maintenance services only, we now offer home maintenance services in the four major cities of Pakistan (Lahore, Multan, Karachi, Islamabad, and Rawalpindi). Personal care services are provided in Lahore, Islamabad, and Rawalpindi.
            </Typography>
            <Typography variant="body1" sx={{ color: '#777', mb: 5, lineHeight: 1.8 }}>
              <strong style={{ color: '#000' }}>Customer Acquisition &amp; Retention:</strong> We have 450k signups on our Customer App, 9k registrations on UstadonCall Partner App, 50k monthly traffic on the website, and 100,000 active users.
            </Typography>
          </Box>
        </Container>
      </Box>

      </Box>
      <Footer></Footer>
    </div>

      
  );
};

export default AboutUsPage;