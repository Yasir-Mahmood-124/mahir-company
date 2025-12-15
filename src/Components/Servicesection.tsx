// // ============================================
// // ServicesSection.tsx
// // ============================================
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
//   { id: "ac", name: "AC Services", href: "/Home/handyman/ac-services", img: "https://cdn.mrmahir.com/services/ac.svg", alt: "AC Services" },
//   { id: "plumber", name: "Plumber", href: "/Home/handyman/plumber-services", img: "https://cdn.mrmahir.com/services/plumber.svg", alt: "Plumber" },
//   { id: "electrician", name: "Electrician", href: "/Home/handyman/electrician-services", img: "https://cdn.mrmahir.com/services/electrician.svg", alt: "Electrician" },
//   { id: "handyman", name: "Handyman", href: "/Home/handyman/handyman-services", img: "https://cdn.mrmahir.com/services/handyman.svg", alt: "Handyman" },
//   { id: "carpenter", name: "Carpenter", href: "/Home/handyman/carpenter-services", img: "https://cdn.mrmahir.com/services/carpenter.svg", alt: "Carpenter" },
//   { id: "painter", name: "Painter", href: "/Home/handyman/painter-services", img: "https://cdn.mrmahir.com/services/painter.svg", alt: "Painter" },
//   { id: "appliances", name: "Home Appliances", href: "/Home/handyman/home-appliances-repair", img: "https://cdn.mrmahir.com/services/appliance-repair.svg", alt: "Home Appliances" },
//   { id: "geyser", name: "Geyser", href: "/Home/handyman/geyser-services", img: "https://cdn.mrmahir.com/services/geyser.svg", alt: "Geyser" },
//   { id: "pest", name: "Pest Control", href: "/Home/handyman/pest-control-services", img: "https://cdn.mrmahir.com/svgs/pest-control.svg", alt: "Pest Control" },
//   { id: "inspection", name: "Home Inspection", href: "/Home/handyman/home-inspection-services", img: "https://cdn.mrmahir.com/svgs/house_inspection_updated.svg", alt: "Home Inspection" },
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

//         {/* Service Grid using Flexbox */}
//         <Box
//           sx={{
//             display: "flex",
//             flexWrap: "wrap",
//             gap: { xs: 3, sm: 4, md: 5 },
//             justifyContent: "center",
//           }}
//         >
//           {services.map((service) => (
//             <Box
//               key={service.id}
//               sx={{
//                 width: {
//                   xs: "calc(50% - 12px)",
//                   sm: "calc(33.333% - 21.33px)",
//                   md: "calc(25% - 30px)",
//                   lg: "calc(16.666% - 33.33px)",
//                 },
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Link href={service.href} style={{ textDecoration: "none" }}>
//                 <Box
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     gap: 1.5,
//                     transition: "transform 0.25s ease, opacity 0.25s ease",
//                     "&:hover": {
//                       transform: "translateY(-6px)",
//                       opacity: 0.9,
//                     },
//                   }}
//                 >
//                   <Image
//                     src={service.img}
//                     alt={service.alt}
//                     width={80}
//                     height={80}
//                     style={{ objectFit: "contain" }}
//                   />
//                   <Typography
//                     sx={{
//                       mt: 1,
//                       color: "#000",
//                       fontSize: { xs: "0.95rem", md: "1rem" },
//                       fontWeight: 600,
//                       textAlign: "center",
//                     }}
//                   >
//                     {service.name}
//                   </Typography>
//                 </Box>
//               </Link>
//             </Box>
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

type Product = {
  id: string;
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
  image?: string; // Product image
};

type ServicesSectionProps = {
  categorySlug?: string; // e.g., "home-services"
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ categorySlug = "home-services" }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();

        if (data.success) {
          // Filter products by main category
          const filteredProducts = data.data.filter(
            (product: Product) => product.mainCategory.toLowerCase().replace(/\s+/g, '-') === categorySlug
          );
          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  // Group products by subCategory
  const groupedBySubCategory = products.reduce((acc: { [key: string]: Product[] }, product) => {
    const subCat = product.subCategory;
    if (!acc[subCat]) {
      acc[subCat] = [];
    }
    acc[subCat].push(product);
    return acc;
  }, {});

  // Get unique subcategories for display
  const uniqueSubCategories = Object.keys(groupedBySubCategory);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (products.length === 0) {
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
          <Typography variant="h5" color="text.secondary">
            No services available yet. Add products from the dashboard!
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
          Choose from our wide range of services
        </Typography>

        {/* Service Grid - Showing SubCategories */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: { xs: 3, sm: 4, md: 5 },
            justifyContent: "center",
          }}
        >
          {uniqueSubCategories.map((subCategory) => {
            const firstProduct = groupedBySubCategory[subCategory][0];
            const productCount = groupedBySubCategory[subCategory].length;
            
            // Create slug from subcategory name
            const subCategorySlug = subCategory.toLowerCase().replace(/\s+/g, '-');

            return (
              <Box
                key={subCategory}
                sx={{
                  width: {
                    xs: "calc(50% - 12px)",
                    sm: "calc(33.333% - 21.33px)",
                    md: "calc(25% - 30px)",
                    lg: "calc(16.666% - 33.33px)",
                  },
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Link 
                  href={`/Home/${categorySlug}/${subCategorySlug}`} 
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
                      position: "relative",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        opacity: 0.9,
                      },
                    }}
                  >
                    {/* Badge showing number of products */}
                    {productCount > 1 && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: -10,
                          right: -10,
                          background: "#667eea",
                          color: "#fff",
                          borderRadius: "50%",
                          width: 28,
                          height: 28,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          zIndex: 1,
                        }}
                      >
                        {productCount}
                      </Box>
                    )}

                    {/* Service Image */}
                    {firstProduct.image ? (
                      <Image
                        src={firstProduct.image}
                        alt={subCategory}
                        width={80}
                        height={80}
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      // Fallback default image based on category
                      <Image
                        src={`https://cdn.mrmahir.com/services/${subCategorySlug}.svg`}
                        alt={subCategory}
                        width={80}
                        height={80}
                        style={{ objectFit: "contain" }}
                        onError={(e) => {
                          // If CDN image fails, use placeholder
                          e.currentTarget.src = "https://via.placeholder.com/80?text=" + subCategory.charAt(0);
                        }}
                      />
                    )}

                    {/* Service Name */}
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

                    {/* Price Range (optional) */}
                    {productCount > 0 && (
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          color: "#667eea",
                          fontWeight: 600,
                        }}
                      >
                        Starting from PKR {Math.min(...groupedBySubCategory[subCategory].map(p => p.discountPrice))}
                      </Typography>
                    )}
                  </Box>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;