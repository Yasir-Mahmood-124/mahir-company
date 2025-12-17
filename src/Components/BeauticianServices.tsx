// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Box,
//   Container,
//   Typography,
//   useTheme,
//   useMediaQuery,
// } from "@mui/material";

// type Service = {
//   id: string;
//   name: string;
//   href: string;
//   img: string;
//   alt: string;
// };

// const services: Service[] = [
//   { id: "makeup", name: "Makeup", href: "/Home/beautician/makeup-services", img: "https://cdn.mrmahir.com/svgs/makeup3.svg", alt: "Makeup Services" },
//   { id: "hair-treatment", name: "Hair Treatment", href: "/Home/beautician/hair-treatment-services", img: "https://cdn.mrmahir.com/services/hair.svg", alt: "Hair Treatment" },
//   { id: "waxing", name: "Waxing", href: "/Home/beautician/waxing-services", img: "https://cdn.mrmahir.com/services/waxing.svg", alt: "Waxing Services" },
//   { id: "massage", name: "Massage for Women", href: "/Home/beautician/massage-services", img: "https://cdn.mrmahir.com/services/massage.svg", alt: "Massage Services" },
//   { id: "mani-pedi", name: "Mani Pedi", href: "/Home/beautician/mani-pedi-services", img: "https://cdn.mrmahir.com/services/nails.svg", alt: "Mani Pedi" },
//   { id: "facial", name: "Facial", href: "/Home/beautician/facial-services", img: "https://cdn.mrmahir.com/services/facial.svg", alt: "Facial Services" },
//   { id: "mehndi", name: "Mehndi", href: "/Home/beautician/mehndi-services", img: "https://cdn.mrmahir.com/services/mehndi.svg", alt: "Mehndi Services" },
//   { id: "hair-styling", name: "Hair Styling & Hair Cut", href: "/Home/beautician/hair-styling-and-hair-cut", img: "https://cdn.mrmahir.com/svgs/hair-cut-logo.svg", alt: "Hair Styling & Hair Cut" },
//   { id: "beauty-deals", name: "Monthly Beauty Deals", href: "/Home/beautician/monthly-beauty-deals", img: "https://cdn.mrmahir.com/services/service-packages.svg", alt: "Monthly Beauty Deals" },
//   { id: "salon-packages", name: "Salon Packages", href: "/Home/beautician/salon-packages", img: "https://cdn.mrmahir.com/services/service-packages.svg", alt: "Salon Packages" },
// ];

// const ServicesSection: React.FC = () => {
//   const theme = useTheme();
//   const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box
//       component="section"
//       sx={{
//         py: { xs: 6, md: 10 },
//         textAlign: "center",
//         backgroundColor: "#fff",
//       }}
//     >
//       <Container maxWidth="lg">
//         {/* Section Title */}
//         <Typography
//           component="h2"
//           sx={{
//             fontWeight: 700,
//             fontSize: { xs: "2rem", md: "2.5rem" },
//             mb: 1,
//           }}
//         >
//           Services
//         </Typography>
//         <Typography
//           sx={{
//             color: "#6b7280",
//             fontSize: { xs: "1rem", md: "1.1rem" },
//             mb: { xs: 5, md: 7 },
//           }}
//         >
//           Choose from our wide range of services
//         </Typography>

//         {/* Service Grid using CSS Grid */}
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "repeat(2, 1fr)",
//               sm: "repeat(3, 1fr)",
//               md: "repeat(4, 1fr)",
//               lg: "repeat(5, 1fr)",
//             },
//             gap: { xs: 3, sm: 4, md: 5 },
//             justifyItems: "center",
//           }}
//         >
//           {services.map((service) => (
//             <Link 
//               key={service.id} 
//               href={service.href} 
//               style={{ textDecoration: "none", width: "100%" }}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: 1.5,
//                   transition: "transform 0.25s ease, opacity 0.25s ease",
//                   "&:hover": {
//                     transform: "translateY(-6px)",
//                     opacity: 0.9,
//                   },
//                 }}
//               >
//                 <Image
//                   src={service.img}
//                   alt={service.alt}
//                   width={69}
//                   height={69}
//                   style={{ objectFit: "contain" }}
//                 />
//                 <Typography
//                   sx={{
//                     mt: 1,
//                     color: "#000",
//                     fontSize: { xs: "0.95rem", md: "1rem" },
//                     fontWeight: 600,
//                     textAlign: "center",
//                   }}
//                 >
//                   {service.name}
//                 </Typography>
//               </Box>
//             </Link>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default ServicesSection;

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { getSubCategoryImage, getSubCategorySlug } from "@/lib/subcategoryConfig";

type Product = {
  _id?: string;
  id?: string;
  name: string;
  currentPrice: number;
  discountPrice: number;
  mainCategory: string;
  subCategory: string;
  service: string;
  description: string;
  reviews: number;
  includes: string[];
  notIncludes: string[];
  image?: string;
};

const BeauticianServicesSection: React.FC = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [services, setServices] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/products?mainCategory=Personal Care');
      const data = await res.json();

      if (data.success) {
        setServices(data.data);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  // ✅ Get unique subCategories
  const uniqueSubCategoriesMap = services.reduce((acc: { [key: string]: Product }, service) => {
    const subCat = service.subCategory;
    if (!acc[subCat]) {
      acc[subCat] = service;
    }
    return acc;
  }, {});

  const uniqueSubCategories = Object.keys(uniqueSubCategoriesMap);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (services.length === 0) {
    return (
      <Box
        component="section"
        sx={{
          py: { xs: 6, md: 10 },
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 1,
            }}
          >
            Services
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mt: 4 }}>
            No beautician services available yet. Add services from the dashboard!
          </Typography>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        textAlign: "center",
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          component="h2"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "2rem", md: "2.5rem" },
            mb: 1,
          }}
        >
          Services
        </Typography>
        <Typography
          sx={{
            color: "#6b7280",
            fontSize: { xs: "1rem", md: "1.1rem" },
            mb: { xs: 5, md: 7 },
          }}
        >
          Choose from our wide range of beautician services
        </Typography>

        {/* Service Grid using CSS Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: { xs: 3, sm: 4, md: 5 },
            justifyItems: "center",
          }}
        >
          {uniqueSubCategories.map((subCategory) => {
            const firstService = uniqueSubCategoriesMap[subCategory];
            const subCategorySlug = getSubCategorySlug(subCategory);
            
            // ✅ Get CDN image automatically
            const cdnImage = getSubCategoryImage(subCategory);

            return (
              <Link 
                key={subCategory} 
                href={`/Home/beautician/${subCategorySlug}`} 
                style={{ textDecoration: "none", width: "100%" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    transition: "transform 0.25s ease, opacity 0.25s ease",
                    cursor: "pointer",
                    "&:hover": {
                      transform: "translateY(-6px)",
                      opacity: 0.9,
                    },
                  }}
                >
                  {/* ✅ Auto CDN Image */}
                  <Image
                    src={cdnImage}
                    alt={subCategory}
                    width={69}
                    height={69}
                    style={{ objectFit: "contain" }}
                    onError={(e) => {
                      // Fallback to placeholder
                      e.currentTarget.src = "https://via.placeholder.com/69?text=" + subCategory.charAt(0);
                    }}
                  />
                  <Typography
                    sx={{
                      mt: 1,
                      color: "#000",
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {subCategory}
                  </Typography>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default BeauticianServicesSection;