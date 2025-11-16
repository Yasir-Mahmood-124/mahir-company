"use client";
import React from "react";
import { Box, Container, Typography, Link } from "@mui/material";

const ContentSection: React.FC = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            "& p, & h2, & h3": {
              textAlign: "justify",
            },
            "& h2": {
              fontSize: { xs: "1.75rem", md: "2rem", lg: "2.25rem" },
              fontWeight: 600,
              color: "#333",
              mt: 4,
              mb: 2,
              lineHeight: 1.3,
            },
            "& h3": {
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 600,
              color: "#444",
              mt: 3,
              mb: 1.5,
            },
            "& p": {
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: "#555",
              lineHeight: 1.8,
              mb: 2,
            },
            "& a": {
              color: "#B76E78",
              textDecoration: "none",
              fontWeight: 500,
              "&:hover": {
                textDecoration: "underline",
              },
            },
            "& strong": {
              fontWeight: 600,
              color: "#333",
            },
          }}
        >
          <Typography component="p">
            Booking personal grooming services for routine upkeep and special occasions used to be a hassle. Finding the right professional was a challenge, and many of us have had experiences that left us less than satisfied. Additionally, the process of booking and paying for these services was often inconvenient and time-consuming. That's where Mahir Company steps in to make your life easier.
          </Typography>

          <Typography component="h2" variant="h2">
            Discover Mahir Salon - Your Solution
          </Typography>

          <Typography component="p">
            <strong>Are you tired of searching for 'Mahir Salon near me' or struggling with outdated booking methods?</strong> Mahir Company has revolutionized the way you take care of your personal grooming needs, whether it's a quick routine touch-up or a glamorous look for a special event.
          </Typography>

          <Typography component="p">
            <strong>With Mahir Salon Services, you can enjoy routine beauty services and makeovers for events right from your home</strong>. We have a team of verified and trained professionals, ready to provide you with top-notch services that cater to all your beauty and grooming needs. No more wondering if you'll get what you paid for; we guarantee the quality of our products and the expertise of our professionals.
          </Typography>

          <Typography component="h2" variant="h2">
            The Mahir Company App - Your Personal Grooming Assistant
          </Typography>

          <Typography component="p">
            <strong>Say goodbye to the stress of searching 'Mahir Salon online' or spending hours on the website as now you can download the Mahir Company app for easier and quicker service booking</strong>. Our user-friendly Mahir Company app is your all-in-one solution. Booking your preferred personal grooming services is as easy as a few taps on your smartphone.
          </Typography>

          <Typography component="h3" variant="h3">
            Affordable Service Charges:
          </Typography>

          <Typography component="p">
            At Mahir Company, we understand that quality should not come at an exorbitant price. Our services are not only top-notch but also affordable. Say hello to looking and feeling your best without breaking the bank.
          </Typography>

          <Typography component="h3" variant="h3">
            Online Payment Facility:
          </Typography>

          <Typography component="p">
            We know the importance of convenience. With our app, you can easily make online payments, saving you time and the hassle of cash transactions. Your transactions are secure, so you can enjoy your services worry-free.
          </Typography>

          <Typography component="h3" variant="h3">
            Guarantee of Quality:
          </Typography>

          <Typography component="p">
            Worried about the quality of products used or the skills of our professionals? Rest assured, we take pride in our services, and quality is our promise. Your satisfaction is our priority.
          </Typography>

          <Typography component="h3" variant="h3">
            Experienced Professionals:
          </Typography>

          <Typography component="p">
            <strong>Mahir Salon professionals are not only highly trained but also experienced</strong>. You can trust them to give you the perfect look for any occasion, ensuring you walk out feeling confident and fabulous.
          </Typography>

          <Typography component="h2" variant="h2">
            Embrace the Future of Personal Grooming:
          </Typography>

          <Typography component="p">
            Are you ready to redefine your grooming routine and elevate your look for those special moments? <strong>Download the Mahir Company app now and experience the convenience of at-home beautician and personal care services with 'Online Mahir Salon</strong>.' Your perfect look is just a tap away. Say goodbye to the old way of booking your grooming services and step into the future with Mahir Company – your trusted grooming partner.
          </Typography>

          <Typography component="h2" variant="h2">
            What are the Benefits of Booking Personal Care Services?
          </Typography>

          <Typography component="p">
            The professionals we connect you with are experts in their field, having years of experience. So you will never have to worry about the quality of services. They come with branded products and provide you with a satisfactory customer experience.
          </Typography>

          <Typography component="p">
            Here are the beautician services that you can book through us:
          </Typography>

          <Typography component="h3" variant="h3">
            Makeup
          </Typography>

          <Typography component="p">
            Yes, you can book{" "}
            <Link href="https://mahircompany.com/makeup-services">
              <strong>makeup services at home</strong>
            </Link>
            . No more traveling to salons before every event or compromising on your look because nobody is there to take you to the salon. Download the Mahir Company App or book through our website for hassle-free beautification for all events.
          </Typography>

          <Typography component="h3" variant="h3">
            Facials
          </Typography>

          <Typography component="p">
            <strong>You can get a facial monthly at home by booking our personal care home services.</strong> We have the best beauticians registered with us.
          </Typography>

          <Typography component="h3" variant="h3">
            Massage
          </Typography>

          <Typography component="p">
            Getting massage services at home after a hectic day is a dream come true. If it was something you ever wished for, book the best masseuse through us and get the expert at your home in just 60 minutes.
          </Typography>

          <Typography component="h3" variant="h3">
            Waxing
          </Typography>

          <Typography component="p">
            Our{" "}
            <Link href="https://mahircompany.com/waxing-services">
              <strong>waxing services</strong>
            </Link>{" "}
            while relaxing offer allow you to get waxed at home. <strong>Book now by searching for us online with the keyword beautician near me</strong>.
          </Typography>

          <Typography component="p">
            We ensure safety and transparency through our responsive customer support. So, why the wait? Just download the app or book our Mehndi, mani-pedi, and hair treatment services through our website or social media sites.
          </Typography>

          <Typography component="h2" variant="h2">
            Top Services/Offerings:
          </Typography>

          <Typography component="p">
            <Link href="https://mahircompany.com/facial-services">Facial Services</Link> |{" "}
            <Link href="https://mahircompany.com/hair-treatment-services">Hair Treatment Services</Link> |{" "}
            <Link href="https://mahircompany.com/mani-pedi-services">Mani Pedi Services</Link> |{" "}
            <Link href="https://mahircompany.com/mehndi-services">Mehndi Services</Link> |{" "}
            <Link href="https://mahircompany.com/hair-styling-and-hair-cut">Hair Styling &amp; Hair Cut</Link>
          </Typography>

          <Typography component="h2" variant="h2">
            Our Packages:
          </Typography>

          <Typography component="p">
            <Link href="https://mahircompany.com/service-packages">Discount Packages</Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContentSection;