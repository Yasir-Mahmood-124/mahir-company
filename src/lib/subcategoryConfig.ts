// lib/subcategoryConfig.ts
// ✅ Single source of truth for all subcategories

export interface SubCategoryConfig {
  name: string;
  slug: string;
  image: string; // CDN URL
  mainCategory: string;
}

// ✅ Complete subcategory configuration with CDN images
export const SUBCATEGORY_CONFIG: SubCategoryConfig[] = [
  // Home Services
  {
    name: "AC Services",
    slug: "ac-services",
    image: "https://cdn.mrmahir.com/services/ac.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Plumber",
    slug: "plumber",
    image: "https://cdn.mrmahir.com/services/plumber.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Electrician",
    slug: "electrician",
    image: "https://cdn.mrmahir.com/services/electrician.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Handyman",
    slug: "handyman",
    image: "https://cdn.mrmahir.com/services/handyman.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Carpenter",
    slug: "carpenter",
    image: "https://cdn.mrmahir.com/services/carpenter.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Painter",
    slug: "painter",
    image: "https://cdn.mrmahir.com/services/painter.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Home Appliances",
    slug: "home-appliances",
    image: "https://cdn.mrmahir.com/services/appliance-repair.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Geyser",
    slug: "geyser",
    image: "https://cdn.mrmahir.com/services/geyser.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Pest Control",
    slug: "pest-control",
    image: "https://cdn.mrmahir.com/svgs/pest-control.svg",
    mainCategory: "Home Services"
  },
  {
    name: "Home Inspection",
    slug: "home-inspection",
    image: "https://cdn.mrmahir.com/svgs/house_inspection_updated.svg",
    mainCategory: "Home Services"
  },

  // Cleaning Services
  {
    name: "Sofa Cleaning Services",
    slug: "sofa-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/sofa.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Chair Cleaning Services",
    slug: "chair-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/chair.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Carpet Cleaning Services",
    slug: "carpet-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/carpet.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Curtain Cleaning Services",
    slug: "curtain-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/curtain.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Mattress Cleaning Services",
    slug: "mattress-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/mattress.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Plastic Water Tank Cleaning Services",
    slug: "plastic-water-tank-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/water_tank_plastic.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Cement Water Tank Cleaning Services",
    slug: "cement-water-tank-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/water_tank_cement.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Deep Cleaning Services",
    slug: "house-deep-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/commercial_deep_cleaning.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Car Detailing Services",
    slug: "car-detailing-services",
    image: "https://cdn.mrmahir.com/svgs/detailing.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Commercial Deep Cleaning Services",
    slug: "commercial-deep-cleaning-services",
    image: "https://cdn-sapce-sqp1.sgp1.digitaloceanspaces.com/svgs/commercial_deep_cleaning.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Solar Panel Cleaning Services",
    slug: "solar-panel-cleaning-services",
    image: "https://cdn.mrmahir.com/svgs/solar_cleaning.svg",
    mainCategory: "Cleaning Services"
  },

  // ✅ Personal Care (Beautician Services)
  {
    name: "Makeup Services",
    slug: "makeup-services",
    image: "https://cdn.mrmahir.com/svgs/makeup3.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Hair Treatment",
    slug: "hair-treatment-services",
    image: "https://cdn.mrmahir.com/services/hair.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Waxing Services",
    slug: "waxing-services",
    image: "https://cdn.mrmahir.com/services/waxing.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Massage Services for Women",
    slug: "massage-services",
    image: "https://cdn.mrmahir.com/services/massage.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Mani Pedi",
    slug: "mani-pedi-services",
    image: "https://cdn.mrmahir.com/services/nails.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Facial Services",
    slug: "facial-services",
    image: "https://cdn.mrmahir.com/services/facial.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Mehndi Services",
    slug: "mehndi-services",
    image: "https://cdn.mrmahir.com/services/mehndi.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Hair Styling & Hair Cut",
    slug: "hair-styling-and-hair-cut",
    image: "https://cdn.mrmahir.com/svgs/hair-cut-logo.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Monthly Beauty Deals",
    slug: "monthly-beauty-deals",
    image: "https://cdn.mrmahir.com/services/service-packages.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Salon Packages",
    slug: "salon-packages",
    image: "https://cdn.mrmahir.com/services/service-packages.svg",
    mainCategory: "Personal Care"
  },

  // Solar Installation Services
  {
    name: "Solar Installation",
    slug: "solar-installation",
    image: "https://cdn.mrmahir.com/services/solar-installation.svg",
    mainCategory: "Solar Installation Services"
  },
  {
    name: "Solar Maintenance",
    slug: "solar-maintenance",
    image: "https://cdn.mrmahir.com/services/solar-maintenance.svg",
    mainCategory: "Solar Installation Services"
  },

  // Home Inspection
  {
    name: "Pre-Purchase Inspection",
    slug: "pre-purchase-inspection",
    image: "https://cdn.mrmahir.com/services/pre-purchase-inspection.svg",
    mainCategory: "Home Inspection"
  },
  {
    name: "Structural Inspection",
    slug: "structural-inspection",
    image: "https://cdn.mrmahir.com/services/structural-inspection.svg",
    mainCategory: "Home Inspection"
  },

  // Maintained by UstadonCall
  {
    name: "MBM Service 1",
    slug: "mbm-service-1",
    image: "https://cdn.mrmahir.com/services/mbm-service-1.svg",
    mainCategory: "Maintained by UstadonCall"
  },
  {
    name: "MBM Service 2",
    slug: "mbm-service-2",
    image: "https://cdn.mrmahir.com/services/mbm-service-2.svg",
    mainCategory: "Maintained by UstadonCall"
  }
];

// ✅ Helper functions
export const getSubCategoriesByMainCategory = (mainCategory: string): SubCategoryConfig[] => {
  return SUBCATEGORY_CONFIG.filter(sub => sub.mainCategory === mainCategory);
};

export const getSubCategoryByName = (subCategoryName: string): SubCategoryConfig | undefined => {
  return SUBCATEGORY_CONFIG.find(sub => sub.name === subCategoryName);
};

export const getSubCategoryImage = (subCategoryName: string): string => {
  const config = getSubCategoryByName(subCategoryName);
  return config?.image || `https://cdn.mrmahir.com/services/default.svg`;
};

export const getSubCategorySlug = (subCategoryName: string): string => {
  const config = getSubCategoryByName(subCategoryName);
  return config?.slug || subCategoryName.toLowerCase().replace(/\s+/g, '-');
};

// ✅ For backward compatibility
export const subcategoriesByMainCategory: { [key: string]: string[] } = {
  "Home Services": [
    "AC Services",
    "Plumber",
    "Electrician",
    "Handyman",
    "Carpenter",
    "Painter",
    "Home Appliances",
    "Geyser",
    "Pest Control",
    "Home Inspection"
  ],
  "Cleaning Services": [
    "Sofa Cleaning Services",
    "Chair Cleaning Services",
    "Carpet Cleaning Services",
    "Curtain Cleaning Services",
    "Mattress Cleaning Services",
    "Plastic Water Tank Cleaning Services",
    "Cement Water Tank Cleaning Services",
    "Deep Cleaning Services",
    "Car Detailing Services",
    "Commercial Deep Cleaning Services",
    "Solar Panel Cleaning Services"
  ],
  "Personal Care": [
    "Makeup Services",
    "Hair Treatment",
    "Waxing Services",
    "Massage Services for Women",
    "Mani Pedi",
    "Facial Services",
    "Mehndi Services",
    "Hair Styling & Hair Cut",
    "Monthly Beauty Deals",
    "Salon Packages"
  ],
  "Solar Installation Services": [
  ],
  "Home Inspection": [
  ],
  "Maintained by UstadonCall": [
  ]
};