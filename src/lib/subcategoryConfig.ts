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
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    image: "https://cdn.mrmahir.com/services/deep-cleaning.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Regular Cleaning",
    slug: "regular-cleaning",
    image: "https://cdn.mrmahir.com/services/regular-cleaning.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Carpet Cleaning",
    slug: "carpet-cleaning",
    image: "https://cdn.mrmahir.com/services/carpet-cleaning.svg",
    mainCategory: "Cleaning Services"
  },
  {
    name: "Disinfection",
    slug: "disinfection",
    image: "https://cdn.mrmahir.com/services/disinfection.svg",
    mainCategory: "Cleaning Services"
  },

  // Personal Care
  {
    name: "Salon Services",
    slug: "salon-services",
    image: "https://cdn.mrmahir.com/services/salon-services.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Spa Services",
    slug: "spa-services",
    image: "https://cdn.mrmahir.com/services/spa-services.svg",
    mainCategory: "Personal Care"
  },
  {
    name: "Bridal Services",
    slug: "bridal-services",
    image: "https://cdn.mrmahir.com/services/bridal-services.svg",
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

  // Home Inspection (duplicate category, different services)
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
    "Deep Cleaning",
    "Regular Cleaning",
    "Carpet Cleaning",
    "Disinfection"
  ],
  "Personal Care": [
    "Salon Services",
    "Spa Services",
    "Bridal Services"
  ],
  "Solar Installation Services": [
    "Solar Installation",
    "Solar Maintenance"
  ],
  "Home Inspection": [
    "Pre-Purchase Inspection",
    "Structural Inspection"
  ],
  "Maintained by UstadonCall": [
    "MBM Service 1",
    "MBM Service 2"
  ]
};