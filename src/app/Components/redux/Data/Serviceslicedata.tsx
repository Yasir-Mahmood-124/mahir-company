import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CityPricing {
  price: number;
  appPrice: number;
  webDiscount: number;
  mbmDiscount: number;
}

interface MetaData {
  rated: number;
  done: number;
  hours: number;
  multiple: boolean;
  title: string;
  prefix: string;
  cities: Record<string, CityPricing>;
  repair: boolean;
  inspection: boolean;
}

export interface ServiceItem {
  id: number;
  title: string;
  slug: string;
  earningSplit: number;
  discount: number | null;
  price: number;
  appPrice: number;
  priceComment: string;
  image: string;
  imageAlt: string;
  meta: MetaData;
}

interface ServiceState {
  services: ServiceItem[];
}

const initialState: ServiceState = {
  services: [
    {
      id: 58,
      title: 'AC General Service',
      slug: 'ac-general-service',
      earningSplit: 23,
      discount: null,
      price: 3500,
      appPrice: 2000,
      priceComment: 'Per AC (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/21bfef41-4036-4ec2-bec9-22de3a30f4eb.png',
      imageAlt: 'AC General Service',
      meta: {
        rated: 4.3,
        done: 14447,
        hours: 2,
        multiple: true,
        title: 'How many ACs need to be serviced',
        prefix: 'AC',
        cities: {
          lahore: { price: 3000, appPrice: 1850, webDiscount: 1850, mbmDiscount: 1670 },
          islamabad: { price: 3500, appPrice: 1850, webDiscount: 1850, mbmDiscount: 1670 },
          rawalpindi: { price: 3500, appPrice: 1850, webDiscount: 1850, mbmDiscount: 1670 },
          multan: { price: 3650, appPrice: 2000, webDiscount: 2000, mbmDiscount: 0 },
        },
        repair: true,
        inspection: true,
      },
    },
    {
      id: 69,
      title: 'AC Installation',
      slug: 'ac-installation',
      earningSplit: 25,
      discount: null,
      price: 3500,
      appPrice: 3000,
      priceComment: 'Installation with 10 Feet pipe (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/5d7438de-4b81-4b80-ad0f-6d9fd5d381b2.jpg',
      imageAlt: 'AC Installation',
      meta: {
        rated: 4.4,
        done: 5089,
        hours: 3,
        multiple: true,
        title: 'How many ACs need installation',
        prefix: 'AC',
        cities: {
          lahore: { price: 3500, appPrice: 3000, webDiscount: 3000, mbmDiscount: 2700 },
          islamabad: { price: 3500, appPrice: 3000, webDiscount: 3000, mbmDiscount: 2700 },
          rawalpindi: { price: 3500, appPrice: 3000, webDiscount: 3000, mbmDiscount: 2700 },
          multan: { price: 3500, appPrice: 3000, webDiscount: 3000, mbmDiscount: 0 },
        },
        repair: false,
        inspection: true,
      },
    },
    {
      id: 92,
      title: 'AC Repairing',
      slug: 'ac-repairing',
      earningSplit: 20,
      discount: null,
      price: 1000,
      appPrice: 800,
      priceComment: 'Visit and Inspection Charges',
      image: 'https://cdn.mrmahir.com/uploads/ebe80b6b-28e5-41d4-9c59-d2174cb1e714.png',
      imageAlt: 'AC Repairing',
      meta: {
        rated: 4.3,
        done: 11257,
        hours: 2,
        multiple: false,
        title: 'AC Repair Service',
        prefix: 'AC',
        cities: {
          lahore: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 720 },
          islamabad: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 720 },
          rawalpindi: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 720 },
          multan: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
        },
        repair: true,
        inspection: true,
      },
    },
    {
      id: 93,
      title: 'AC Mounting and Dismounting',
      slug: 'ac-mounting-and-dismounting',
      earningSplit: 22,
      discount: null,
      price: 4200,
      appPrice: 3500,
      priceComment: 'Per AC (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/518e8b60-2ad5-4ac3-bff5-9d34bb37775b.png',
      imageAlt: 'AC Mounting and Dismounting',
      meta: {
        rated: 4.6,
        done: 2004,
        hours: 4,
        multiple: true,
        title: 'How many ACs',
        prefix: 'AC',
        cities: {
          lahore: { price: 4200, appPrice: 3500, webDiscount: 3500, mbmDiscount: 3150 },
          islamabad: { price: 4200, appPrice: 3500, webDiscount: 3500, mbmDiscount: 3150 },
          rawalpindi: { price: 4200, appPrice: 3500, webDiscount: 3500, mbmDiscount: 3150 },
          multan: { price: 4200, appPrice: 3500, webDiscount: 3500, mbmDiscount: 0 },
        },
        repair: false,
        inspection: false,
      },
    },
    {
      id: 235,
      title: 'AC Dismounting',
      slug: 'ac-dismounting',
      earningSplit: 20,
      discount: null,
      price: 1200,
      appPrice: 1000,
      priceComment: 'Per AC (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/ba7ac294-6fa9-4138-b7fd-e1bd35f113ef.png',
      imageAlt: 'AC Dismounting',
      meta: {
        rated: 4.8,
        done: 1036,
        hours: 2,
        multiple: true,
        title: 'How many ACs',
        prefix: 'AC',
        cities: {
          lahore: { price: 1200, appPrice: 1000, webDiscount: 1000, mbmDiscount: 900 },
          islamabad: { price: 1200, appPrice: 1000, webDiscount: 1000, mbmDiscount: 900 },
          rawalpindi: { price: 1200, appPrice: 1000, webDiscount: 1000, mbmDiscount: 900 },
          multan: { price: 1200, appPrice: 1000, webDiscount: 1000, mbmDiscount: 0 },
        },
        repair: false,
        inspection: false,
      },
    },
    // ✅ CARPENTER SERVICES KA DETAILED DATA
    {
      id: 164,
      title: 'Wardrobe Repairing',
      slug: 'wardrobe-repairing',
      earningSplit: 18,
      discount: null,
      price: 800,
      appPrice: 500,
      priceComment: 'Visit & Inspection Charges',
      image: 'https://cdn.mrmahir.com/uploads/1d396a94-eeaa-48b0-9312-dc8505aa7a36.png',
      imageAlt: 'Wardrobe Repairing Service',
      meta: {
        rated: 4.3,
        done: 331,
        hours: 2,
        multiple: false,
        title: 'Wardrobe Repair Service',
        prefix: 'Wardrobe',
        cities: {
          lahore: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          islamabad: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          rawalpindi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          multan: { price: 850, appPrice: 550, webDiscount: 550, mbmDiscount: 0 },
        },
        repair: true,
        inspection: true,
      },
    },
    {
      id: 167,
      title: 'Door Installation',
      slug: 'door-installation',
      earningSplit: 20,
      discount: null,
      price: 1500,
      appPrice: 1000,
      priceComment: 'Starting From',
      image: 'https://cdn.mrmahir.com/uploads/c53b43d5-d3bc-452e-a9f7-f5f187a19f1f.png',
      imageAlt: 'Door Installation Service',
      meta: {
        rated: 4.3,
        done: 206,
        hours: 3,
        multiple: true,
        title: 'How many doors need installation',
        prefix: 'Door',
        cities: {
          lahore: { price: 1500, appPrice: 1000, webDiscount: 1000, mbmDiscount: 900 },
          islamabad: { price: 1500, appPrice: 1000, webDiscount: 1000, mbmDiscount: 900 },
          rawalpindi: { price: 1500, appPrice: 1000, webDiscount: 1000, mbmDiscount: 900 },
          multan: { price: 1600, appPrice: 1100, webDiscount: 1100, mbmDiscount: 0 },
        },
        repair: false,
        inspection: true,
      },
    },
    {
      id: 168,
      title: 'Door Repairing',
      slug: 'door-repairing',
      earningSplit: 18,
      discount: null,
      price: 800,
      appPrice: 500,
      priceComment: 'Visit & Inspection Charges',
      image: 'https://cdn.mrmahir.com/uploads/789dc5bd-6fd2-403b-ba8b-5bc0d56c01a8.png',
      imageAlt: 'Door Repairing Service',
      meta: {
        rated: 4.2,
        done: 560,
        hours: 2,
        multiple: false,
        title: 'Door Repair Service',
        prefix: 'Door',
        cities: {
          lahore: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          islamabad: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          rawalpindi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          multan: { price: 850, appPrice: 550, webDiscount: 550, mbmDiscount: 0 },
        },
        repair: true,
        inspection: true,
      },
    },
    {
      id: 177,
      title: 'Carpenter Work',
      slug: 'carpenter-work',
      earningSplit: 18,
      discount: null,
      price: 800,
      appPrice: 500,
      priceComment: 'Visit & Inspection Charges',
      image: 'https://cdn.mrmahir.com/uploads/5105bf9b-993b-4df9-a15f-3847d71a4c9d.png',
      imageAlt: 'Professional Carpenter Work',
      meta: {
        rated: 4.3,
        done: 5938,
        hours: 2,
        multiple: false,
        title: 'Carpenter Service',
        prefix: 'Service',
        cities: {
          lahore: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          islamabad: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          rawalpindi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          multan: { price: 850, appPrice: 550, webDiscount: 550, mbmDiscount: 0 },
        },
        repair: true,
        inspection: true,
      },
    },
    {
      id: 204,
      title: 'Drawer Repairing',
      slug: 'drawer-repairing',
      earningSplit: 18,
      discount: null,
      price: 800,
      appPrice: 500,
      priceComment: 'Vary After Inspection',
      image: 'https://cdn.mrmahir.com/uploads/50e17f32-bbbe-4922-a72c-1ac457e22b67.png',
      imageAlt: 'Drawer Repairing Service',
      meta: {
        rated: 4.6,
        done: 364,
        hours: 1,
        multiple: true,
        title: 'How many drawers need repair',
        prefix: 'Drawer',
        cities: {
          lahore: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          islamabad: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          rawalpindi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          multan: { price: 850, appPrice: 550, webDiscount: 550, mbmDiscount: 0 },
        },
        repair: true,
        inspection: true,
      },
    },
    {
      id: 210,
      title: 'Furniture Repairing',
      slug: 'furniture-repairing',
      earningSplit: 17,
      discount: null,
      price: 500,
      appPrice: 400,
      priceComment: 'Visit & Inspection Charges',
      image: 'https://cdn.mrmahir.com/uploads/33591831-d2d1-47a0-a1db-9dbb08a3e73a.png',
      imageAlt: 'Furniture Repairing Service',
      meta: {
        rated: 4.6,
        done: 644,
        hours: 2,
        multiple: false,
        title: 'Furniture Repair Service',
        prefix: 'Item',
        cities: {
          lahore: { price: 500, appPrice: 400, webDiscount: 400, mbmDiscount: 360 },
          islamabad: { price: 500, appPrice: 400, webDiscount: 400, mbmDiscount: 360 },
          rawalpindi: { price: 500, appPrice: 400, webDiscount: 400, mbmDiscount: 360 },
          multan: { price: 550, appPrice: 450, webDiscount: 450, mbmDiscount: 0 },
        },
        repair: true,
        inspection: true,
      },
    },
    {
      id: 236,
      title: 'Room Door Lock installation',
      slug: 'room-door-lock-installation',
      earningSplit: 20,
      discount: null,
      price: 1500,
      appPrice: 1200,
      priceComment: 'Vary After inspection',
      image: 'https://cdn.mrmahir.com/uploads/4807f4f6-fdc9-46a0-8ace-5adfcd234361.png',
      imageAlt: 'Room Door Lock Installation',
      meta: {
        rated: 4.8,
        done: 36,
        hours: 1,
        multiple: true,
        title: 'How many locks need installation',
        prefix: 'Lock',
        cities: {
          lahore: { price: 1500, appPrice: 1200, webDiscount: 1200, mbmDiscount: 1080 },
          islamabad: { price: 1500, appPrice: 1200, webDiscount: 1200, mbmDiscount: 1080 },
          rawalpindi: { price: 1500, appPrice: 1200, webDiscount: 1200, mbmDiscount: 1080 },
          multan: { price: 1600, appPrice: 1300, webDiscount: 1300, mbmDiscount: 0 },
        },
        repair: false,
        inspection: false,
      },
    },
    {
      id: 237,
      title: 'Drawer Lock installation',
      slug: 'drawer-lock-installation',
      earningSplit: 18,
      discount: null,
      price: 800,
      appPrice: 500,
      priceComment: 'Per Lock',
      image: 'https://cdn.mrmahir.com/uploads/6b5e2fb0-70b6-480e-a81f-de7a4566a61b.png',
      imageAlt: 'Drawer Lock Installation',
      meta: {
        rated: 4.0,
        done: 185,
        hours: 1,
        multiple: true,
        title: 'How many locks',
        prefix: 'Lock',
        cities: {
          lahore: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          islamabad: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          rawalpindi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          multan: { price: 850, appPrice: 550, webDiscount: 550, mbmDiscount: 0 },
        },
        repair: false,
        inspection: false,
      },
    },
    {
      id: 238,
      title: 'Catcher Replacement',
      slug: 'catcher-replacement',
      earningSplit: 18,
      discount: null,
      price: 800,
      appPrice: 500,
      priceComment: 'Per Catcher',
      image: 'https://cdn.mrmahir.com/uploads/34a94ace-38c9-4ea3-ad08-b7c661940786.png',
      imageAlt: 'Catcher Replacement Service',
      meta: {
        rated: 5.0,
        done: 37,
        hours: 1,
        multiple: true,
        title: 'How many catchers',
        prefix: 'Catcher',
        cities: {
          lahore: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          islamabad: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          rawalpindi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 450 },
          multan: { price: 850, appPrice: 550, webDiscount: 550, mbmDiscount: 0 },
        },
        repair: false,
        inspection: false,
      },
      
    },
    // ✅ GEYSER SERVICES KA DETAILED DATA

{
  id: 1,
  title: 'Instant Geyser Service',
  slug: 'instant-geyser-service',
  earningSplit: 20,
  discount: null,
  price: 2000,
  appPrice: 1800,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/9eef2550-868f-4acd-92b0-7dbd59ed3060.png',
  imageAlt: 'Instant Geyser Service',
  meta: {
    rated: 4.6,
    done: 392,
    hours: 2,
    multiple: true,
    title: 'How many geysers need service',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 2000, appPrice: 1800, webDiscount: 1800, mbmDiscount: 1620 },
      karachi: { price: 2000, appPrice: 1800, webDiscount: 1800, mbmDiscount: 0 },
      islamabad: { price: 2250, appPrice: 2000, webDiscount: 2000, mbmDiscount: 1800 },
      rawalpindi: { price: 2250, appPrice: 2000, webDiscount: 2000, mbmDiscount: 1800 },
      multan: { price: 2250, appPrice: 2000, webDiscount: 0, mbmDiscount: 0 },
    },
    repair: true,
    inspection: true,
  },
},
{
  id: 2,
  title: 'Instant Geyser Installation',
  slug: 'instant-geyser-installation',
  earningSplit: 20,
  discount: null,
  price: 2500,
  appPrice: 2000,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/3e6aad26-4d09-4e58-84e5-8419b6037959.png',
  imageAlt: 'Instant Geyser Installation',
  meta: {
    rated: 4.8,
    done: 406,
    hours: 3,
    multiple: true,
    title: 'How many geysers need installation',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 2500, appPrice: 2000, webDiscount: 2000, mbmDiscount: 1800 },
      karachi: { price: 2500, appPrice: 2000, webDiscount: 2000, mbmDiscount: 0 },
      islamabad: { price: 2800, appPrice: 2250, webDiscount: 2250, mbmDiscount: 2025 },
      rawalpindi: { price: 2800, appPrice: 2250, webDiscount: 2250, mbmDiscount: 2025 },
      multan: { price: 2500, appPrice: 2200, webDiscount: 0, mbmDiscount: 0 },
    },
    repair: false,
    inspection: true,
  },
},
{
  id: 3,
  title: 'Gas Geyser Service',
  slug: 'gas-geyser-service',
  earningSplit: 20,
  discount: null,
  price: 2500,
  appPrice: 2000,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/149d48ea-5841-4c0f-ac17-b6766ad66365.png',
  imageAlt: 'Gas Geyser Service',
  meta: {
    rated: 4.7,
    done: 795,
    hours: 2,
    multiple: true,
    title: 'How many gas geysers need service',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 2500, appPrice: 2000, webDiscount: 2000, mbmDiscount: 1800 },
      karachi: { price: 2500, appPrice: 2000, webDiscount: 2000, mbmDiscount: 0 },
      islamabad: { price: 2500, appPrice: 2250, webDiscount: 2250, mbmDiscount: 2025 },
      rawalpindi: { price: 2500, appPrice: 2250, webDiscount: 2250, mbmDiscount: 2025 },
      multan: { price: 2500, appPrice: 2200, webDiscount: 0, mbmDiscount: 0 },
    },
    repair: true,
    inspection: true,
  },
},
{
  id: 4,
  title: 'Gas Geyser Installation',
  slug: 'gas-geyser-installation',
  earningSplit: 20,
  discount: null,
  price: 3000,
  appPrice: 2500,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/eb31b6c2-23d4-40c6-9b9d-0a8bf48663e4.png',
  imageAlt: 'Gas Geyser Installation',
  meta: {
    rated: 4.7,
    done: 227,
    hours: 3,
    multiple: true,
    title: 'How many gas geysers need installation',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 3000, appPrice: 2500, webDiscount: 2500, mbmDiscount: 2250 },
      karachi: { price: 3000, appPrice: 2500, webDiscount: 2500, mbmDiscount: 0 },
      islamabad: { price: 3000, appPrice: 2800, webDiscount: 2800, mbmDiscount: 2520 },
      rawalpindi: { price: 3000, appPrice: 2800, webDiscount: 2800, mbmDiscount: 2520 },
      multan: { price: 3000, appPrice: 2500, webDiscount: 0, mbmDiscount: 0 },
    },
    repair: false,
    inspection: true,
  },
},
{
  id: 5,
  title: 'Instant Electric Geyser Repairing',
  slug: 'instant-electric-geyser-repairing',
  earningSplit: 20,
  discount: null,
  price: 1000,
  appPrice: 800,
  priceComment: 'Visit & Inspection Charges',
  image: 'https://cdn.mrmahir.com/uploads/7d6870b4-01fd-486a-bed5-5ab249c1d58e.png',
  imageAlt: 'Instant Electric Geyser Repairing',
  meta: {
    rated: 4.6,
    done: 316,
    hours: 2,
    multiple: false,
    title: 'Electric Geyser Repair Service',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      karachi: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      islamabad: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      rawalpindi: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      multan: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
    },
    repair: true,
    inspection: true,
  },
},
{
  id: 6,
  title: 'Instant Electric Geyser Installation',
  slug: 'instant-electric-geyser-installation',
  earningSplit: 20,
  discount: null,
  price: 2500,
  appPrice: 2000,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/be6b33bd-6d2d-4416-ae8c-1986e8c58644.png',
  imageAlt: 'Instant Electric Geyser Installation',
  meta: {
    rated: 4.5,
    done: 180,
    hours: 3,
    multiple: true,
    title: 'How many electric geysers need installation',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 2500, appPrice: 2000, webDiscount: 2000, mbmDiscount: 1800 },
      karachi: { price: 2500, appPrice: 2000, webDiscount: 2000, mbmDiscount: 0 },
      islamabad: { price: 2800, appPrice: 2250, webDiscount: 2250, mbmDiscount: 2025 },
      rawalpindi: { price: 2800, appPrice: 2250, webDiscount: 2250, mbmDiscount: 2025 },
      multan: { price: 2500, appPrice: 2200, webDiscount: 0, mbmDiscount: 0 },
    },
    repair: false,
    inspection: true,
  },
},
{
  id: 7,
  title: 'Instant Electric Geyser Dismounting',
  slug: 'instant-electric-geyser-dismounting',
  earningSplit: 20,
  discount: null,
  price: 1000,
  appPrice: 800,
  priceComment: 'Fixed Price',
  image: 'https://cdn.mrmahir.com/uploads/2cc200c5-5f25-4634-8df4-76db84bb686a.png',
  imageAlt: 'Instant Electric Geyser Dismounting',
  meta: {
    rated: 4.4,
    done: 35,
    hours: 1,
    multiple: true,
    title: 'How many geysers need dismounting',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 720 },
      karachi: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      islamabad: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 720 },
      rawalpindi: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 720 },
      multan: { price: 1200, appPrice: 1000, webDiscount: 800, mbmDiscount: 0 },
    },
    repair: false,
    inspection: false,
  },
},
{
  id: 8,
  title: 'Gas Geyser Repairing',
  slug: 'gas-geyser-repairing',
  earningSplit: 20,
  discount: null,
  price: 1000,
  appPrice: 800,
  priceComment: 'Visit & Inspection Charges',
  image: 'https://cdn.mrmahir.com/uploads/5688b537-0882-4879-b0c3-262d7817abfc.png',
  imageAlt: 'Gas Geyser Repairing',
  meta: {
    rated: 4.6,
    done: 1117,
    hours: 2,
    multiple: false,
    title: 'Gas Geyser Repair Service',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      karachi: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      islamabad: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      rawalpindi: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
      multan: { price: 1000, appPrice: 800, webDiscount: 800, mbmDiscount: 0 },
    },
    repair: true,
    inspection: true,
  },
},
{
  id: 9,
  title: 'Gas Geyser Dismounting',
  slug: 'gas-geyser-dismounting',
  earningSplit: 20,
  discount: null,
  price: 1500,
  appPrice: 1000,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/d0f18184-7918-48ea-a25d-1ead327bea3f.png',
  imageAlt: 'Gas Geyser Dismounting',
  meta: {
    rated: 5.0,
    done: 75,
    hours: 1,
    multiple: true,
    title: 'How many gas geysers need dismounting',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 1500, appPrice: 1000, webDiscount: 1000, mbmDiscount: 900 },
      karachi: { price: 1500, appPrice: 1000, webDiscount: 1000, mbmDiscount: 0 },
      islamabad: { price: 1500, appPrice: 1000, webDiscount: 1000, mbmDiscount: 0 },
      rawalpindi: { price: 1500, appPrice: 1000, webDiscount: 1000, mbmDiscount: 0 },
      multan: { price: 1500, appPrice: 1200, webDiscount: 1000, mbmDiscount: 0 },
    },
    repair: false,
    inspection: false,
  },
},
{
  id: 10,
  title: 'Instant Geyser Repairing',
  slug: 'instant-geyser-repairing',
  earningSplit: 20,
  discount: null,
  price: 800,
  appPrice: 500,
  priceComment: 'Visit & Inspection Charges',
  image: 'https://cdn.mrmahir.com/uploads/38d460fd-ac48-461f-8cf2-9cf8837f1d72.png',
  imageAlt: 'Instant Geyser Repairing',
  meta: {
    rated: 4.6,
    done: 571,
    hours: 2,
    multiple: false,
    title: 'Instant Geyser Repair Service',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 0 },
      karachi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 0 },
      islamabad: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 0 },
      rawalpindi: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 0 },
      multan: { price: 800, appPrice: 500, webDiscount: 500, mbmDiscount: 0 },
    },
    repair: true,
    inspection: true,
  },
},
{
  id: 11,
  title: 'Instant Electric Geyser Service',
  slug: 'instant-electric-geyser-service',
  earningSplit: 20,
  discount: null,
  price: 2000,
  appPrice: 1800,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/0586f99f-ddb7-4cbe-8c41-ee4f4b50893d.png',
  imageAlt: 'Instant Electric Geyser Service',
  meta: {
    rated: 4.9,
    done: 2649,
    hours: 2,
    multiple: false,
    title: 'Electric Geyser Service',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 2000, appPrice: 1800, webDiscount: 1800, mbmDiscount: 1620 },
      karachi: { price: 2000, appPrice: 1800, webDiscount: 1800, mbmDiscount: 0 },
      islamabad: { price: 2250, appPrice: 2000, webDiscount: 2000, mbmDiscount: 1800 },
      rawalpindi: { price: 2250, appPrice: 2000, webDiscount: 2000, mbmDiscount: 1800 },
      multan: { price: 2250, appPrice: 2000, webDiscount: 0, mbmDiscount: 0 },
    },
    repair: true,
    inspection: true,
  },
},
{
  id: 12,
  title: 'Instant Geyser Dismounting',
  slug: 'instant-geyser-dismounting',
  earningSplit: 20,
  discount: null,
  price: 1200,
  appPrice: 1000,
  priceComment: 'Discounted Price',
  image: 'https://cdn.mrmahir.com/uploads/bf7b8c84-f380-4808-a73c-1d57e1995ff5.jpg',
  imageAlt: 'Instant Geyser Dismounting',
  meta: {
    rated: 0,
    done: 0,
    hours: 1,
    multiple: false,
    title: 'Geyser Dismounting Service',
    prefix: 'Geyser',
    cities: {
      lahore: { price: 1200, appPrice: 1000, webDiscount: 1000, mbmDiscount: 0 },
      karachi: { price: 1200, appPrice: 1000, webDiscount: 0, mbmDiscount: 0 },
      islamabad: { price: 1200, appPrice: 1000, webDiscount: 0, mbmDiscount: 0 },
      rawalpindi: { price: 1200, appPrice: 1000, webDiscount: 0, mbmDiscount: 0 },
      multan: { price: 1500, appPrice: 1200, webDiscount: 0, mbmDiscount: 0 },
    },
    repair: false,
    inspection: false,
  },

},
  {
    "id": 23,
    "title": "Ceiling Fan Installation",
    "slug": "ceiling-fan-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Per Fan",
    "image": "https://cdn.mrmahir.com/uploads/38064e7c-485c-4370-a775-973893017aad.png",
    "imageAlt": "ceiling fan installation",
    "meta": {
      "rated": 4.5,
      "done": 1070,
      "hours": 2,
      "multiple": true,
      "title": "How many fans need to be installed",
      "prefix": "fans",
      "cities": {
        "lahore": { "price": 900, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 720 },
        "karachi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 720 },
        "rawalpindi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 720 },
        "multan": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 24,
    "title": "SMD Lights Installation (Without Wiring)",
    "slug": "smd-lights-installation-without-wiring",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Per Light (Discount on more then 2)",
    "image": "https://cdn.mrmahir.com/uploads/e6d052be-e08f-40dd-ad83-8e9f3136451a.png",
    "imageAlt": "SMD lights Installation",
    "meta": {
      "rated": 4.8,
      "done": 519,
      "hours": 2,
      "multiple": true,
      "title": "How many lights need to be installed",
      "prefix": "lights",
      "cities": {
        "lahore": { "price": 800, "appPrice": 500, "webDiscount": 500, "mbmDiscount": 450 },
        "karachi": { "price": 800, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 800, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 450 },
        "rawalpindi": { "price": 800, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 450 },
        "multan": { "price": 800, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 25,
    "title": "32-42 Inch LED TV or LCD Mounting",
    "slug": "32-42-inch-led-tv-or-lcd-mounting",
    "earningSplit": 20,
    "discount": null,
    "price": 1250,
    "appPrice": 0,
    "priceComment": "Very After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/011a5157-b598-4583-a878-2c9f9512ccc3.png",
    "imageAlt": "LED TV or LCD Mounting",
    "meta": {
      "rated": 4.5,
      "done": 619,
      "hours": 2,
      "multiple": true,
      "title": "How many TVs need to be mounted",
      "prefix": "TVs",
      "cities": {
        "lahore": { "price": 1500, "appPrice": 1250, "webDiscount": 1250, "mbmDiscount": 1125 },
        "karachi": { "price": 1500, "appPrice": 1250, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1500, "appPrice": 1250, "webDiscount": 0, "mbmDiscount": 1125 },
        "rawalpindi": { "price": 1500, "appPrice": 1250, "webDiscount": 0, "mbmDiscount": 1125 },
        "multan": { "price": 1500, "appPrice": 1250, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 95,
    "title": "Curtain Rod Installation",
    "slug": "curtain-rod-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 650,
    "appPrice": 0,
    "priceComment": "Per Rod",
    "image": "https://cdn.mrmahir.com/uploads/6363c48d-efe4-4d9b-a937-024bdd7fc06f.png",
    "imageAlt": "Curtain Rod Installation",
    "meta": {
      "rated": 4.2,
      "done": 383,
      "hours": 2,
      "multiple": true,
      "title": "How many rods need to be installed",
      "prefix": "rods",
      "cities": {
        "lahore": { "price": 800, "appPrice": 650, "webDiscount": 650, "mbmDiscount": 580 },
        "karachi": { "price": 800, "appPrice": 650, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 800, "appPrice": 650, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 800, "appPrice": 650, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 800, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 98,
    "title": "Art Hanging",
    "slug": "art-hanging",
    "earningSplit": 20,
    "discount": null,
    "price": 600,
    "appPrice": 0,
    "priceComment": "Per Piece",
    "image": "https://cdn.mrmahir.com/uploads/5aed8ae2-72ea-4df0-a9ea-cb869d8928fc.png",
    "imageAlt": "Art Hanging",
    "meta": {
      "rated": 5,
      "done": 113,
      "hours": 2,
      "multiple": true,
      "title": "How many arts need to be hanged",
      "prefix": "arts",
      "cities": {
        "lahore": { "price": 800, "appPrice": 600, "webDiscount": 600, "mbmDiscount": 360 },
        "karachi": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 800, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 99,
    "title": "Mirror hanging",
    "slug": "mirror-hanging",
    "earningSplit": 20,
    "discount": null,
    "price": 600,
    "appPrice": 0,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/9ff87bf4-22b2-46eb-afc4-90e6e2bf51bd.png",
    "imageAlt": "Mirror hanging",
    "meta": {
      "rated": 4.5,
      "done": 72,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 800, "appPrice": 600, "webDiscount": 600, "mbmDiscount": 0 },
        "karachi": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 800, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 100,
    "title": "Picture Hanging",
    "slug": "picture-hanging",
    "earningSplit": 20,
    "discount": null,
    "price": 600,
    "appPrice": 0,
    "priceComment": "Per Picture",
    "image": "https://cdn.mrmahir.com/uploads/0eaddc02-f9ee-470e-b9ae-f8417e0d8503.png",
    "imageAlt": "Picture Hanging",
    "meta": {
      "rated": 5,
      "done": 42,
      "hours": 2,
      "multiple": true,
      "title": "How many pictures need to be hanged",
      "prefix": "pictures",
      "cities": {
        "lahore": { "price": 800, "appPrice": 600, "webDiscount": 600, "mbmDiscount": 360 },
        "karachi": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 800, "appPrice": 600, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 101,
    "title": "Shelf Hanging",
    "slug": "shelf-hanging",
    "earningSplit": 20,
    "discount": null,
    "price": 700,
    "appPrice": 650,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/55b7e97e-9e7e-4889-8a76-3773e2db438d.png",
    "imageAlt": "Shelf Hanging",
    "meta": {
      "rated": 5,
      "done": 51,
      "hours": 2,
      "multiple": true,
      "title": "How many shelves need to be hanged",
      "prefix": "shelfs",
      "cities": {
        "lahore": { "price": 800, "appPrice": 700, "webDiscount": 700, "mbmDiscount": 0 },
        "karachi": { "price": 800, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 800, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 800, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 800, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 249,
    "title": "Room Clock Hanging",
    "slug": "room-clock-hanging",
    "earningSplit": 20,
    "discount": null,
    "price": 650,
    "appPrice": 0,
    "priceComment": "Per Clock ",
    "image": "https://cdn.mrmahir.com/uploads/cf7bda28-4e6a-4a58-84b8-a6f44ac9847e.jpg",
    "imageAlt": "Room Clock Hanging",
    "meta": {
      "rated": 4.2,
      "done": 15,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 800, "appPrice": 650, "webDiscount": 650, "mbmDiscount": 0 },
        "karachi": { "price": 800, "appPrice": 650, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 800, "appPrice": 650, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 800, "appPrice": 650, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 800, "appPrice": 650, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },

  {
    "id": 208,
    "title": "Cooking Range Repairing",
    "slug": "cooking-range-repairing",
    "earningSplit": 23,
    "discount": null,
    "price": 500,
    "appPrice": 500,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/e27f22ac-826a-4c19-aa5a-ce42d435eb55.png",
    "imageAlt": "Cooking Range Repairing",
    "meta": {
      "rated": 4.2,
      "done": 1010,
      "hours": 2,
      "multiple": true,
      "title": "How many cooking ranges need to be repaired",
      "prefix": "range",
      "cities": {
        "lahore": { "price": 800, "appPrice": 500, "webDiscount": 500, "mbmDiscount": 0 },
        "karachi": { "price": 800, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 281,
    "title": "Automatic Washing Machine Repairing",
    "slug": "automatic-washing-machine-repairing",
    "earningSplit": 23,
    "discount": null,
    "price": 800,
    "appPrice": 800,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/c7ff1262-ab1a-4813-9ced-540d48e6032f.png",
    "imageAlt": "Automatic Washing Machine Repairing",
    "meta": {
      "rated": 4.6,
      "done": 0,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 1000, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 0 },
        "karachi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 1633,
    "title": "Oven Range Services",
    "slug": "oven-range-services",
    "earningSplit": 20,
    "discount": null,
    "price": 2000,
    "appPrice": 1800,
    "priceComment": "Per Oven Range",
    "image": "https://cdn.mrmahir.com/uploads/380feccd-201f-43f9-9888-a83542a31548.jpg",
    "imageAlt": "Oven Range Service",
    "meta": {
      "rated": 4.6,
      "done": 0,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 2000, "appPrice": 1600, "webDiscount": 1600, "mbmDiscount": 1440 },
        "islamabad": { "price": 2000, "appPrice": 1800, "webDiscount": 1800, "mbmDiscount": 1620 },
        "rawalpindi": { "price": 2000, "appPrice": 1600, "webDiscount": 1600, "mbmDiscount": 1620 }
      },
      "repair": false,
      "inspection": false
    }
  },
  {
    "id": 1654,
    "title": "Kitchen Hood Installation",
    "slug": "kitchen-hood-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Visit and Inspection charges",
    "image": "https://cdn.mrmahir.com/uploads/94e427be-6bf8-4426-8b28-a91f77c39e8c.png",
    "imageAlt": "Kitchen Hood Installation",
    "meta": {
      "rated": 4.5,
      "done": 0,
      "hours": 0,
      "multiple": false,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 1000, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 0 },
        "karachi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": false
    }
  },
  {
    "id": 1655,
    "title": "Kitchen Hood Repairing",
    "slug": "kitchen-hood-repairing",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Visit and Inspection charges",
    "image": "https://cdn.mrmahir.com/uploads/6ac3b11c-48b8-418b-ae0f-f35773343ff5.png",
    "imageAlt": "Kitchen Hood Repairing",
    "meta": {
      "rated": 4.5,
      "done": 0,
      "hours": 0,
      "multiple": false,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 1000, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 0 },
        "karachi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 1656,
    "title": "Automatic Washing Machine General Service",
    "slug": "automatic-washing-machine-general-service",
    "earningSplit": 23,
    "discount": null,
    "price": 5000,
    "appPrice": 0,
    "priceComment": "Top-Loaded ( Per Washing Machine )\n",
    "image": "https://cdn.mrmahir.com/uploads/0cba6403-3c1e-4501-82df-ade117140aaf.png",
    "imageAlt": "Automatic Washing Machine General Service",
    "meta": {
      "rated": 4.8,
      "done": 0,
      "hours": 0,
      "multiple": false,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 4000, "appPrice": 3000, "webDiscount": 3000, "mbmDiscount": 2800 },
        "karachi": { "price": 5000, "appPrice": 4000, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 5000, "appPrice": 4000, "webDiscount": 4000, "mbmDiscount": 0 },
        "rawalpindi": { "price": 5000, "appPrice": 4000, "webDiscount": 4000, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": false
    }
  },
  {
    "id": 1641,
    "title": "3 to 5 Marlas",
    "slug": "3-to-5-marlas",
    "earningSplit": 20,
    "discount": null,
    "price": 10000,
    "appPrice": 6000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/073a63ef-c016-41f3-9efa-b655ca15d667.png",
    "imageAlt": "3 to 5 Marlas",
    "meta": {
      "rated": 4.8,
      "done": 987,
      "hours": 0,
      "multiple": false,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 10000, "appPrice": 6000, "webDiscount": 6000, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": true
    }
  },
  {
    "id": 1642,
    "title": "7 to 10 Marlas",
    "slug": "7-to-10-marlas",
    "earningSplit": 20,
    "discount": null,
    "price": 15000,
    "appPrice": 9000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/be3b11d4-8281-40ba-a99e-c9c5ba7a96b6.png",
    "imageAlt": "7 to 10 Marlas",
    "meta": {
      "rated": 4.7,
      "done": 597,
      "hours": 0,
      "multiple": false,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 15000, "appPrice": 9000, "webDiscount": 9000, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": true
    }
  },
  {
    "id": 1643,
    "title": "1 Kanal",
    "slug": "1-kanal",
    "earningSplit": 20,
    "discount": null,
    "price": 20000,
    "appPrice": 12000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/755be818-921c-4561-a244-33f892714833.png",
    "imageAlt": "1 Kanal",
    "meta": {
      "rated": 4.9,
      "done": 375,
      "hours": 0,
      "multiple": false,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 20000, "appPrice": 12000, "webDiscount": 12000, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": true
    }
  },
  {
    "id": 1644,
    "title": "2 Kanals",
    "slug": "2-kanals",
    "earningSplit": 20,
    "discount": null,
    "price": 34000,
    "appPrice": 20000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/59924826-a557-437a-82d5-30b0c385f603.png",
    "imageAlt": "2 Kanals",
    "meta": {
      "rated": 4.8,
      "done": 480,
      "hours": 0,
      "multiple": false,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 34000, "appPrice": 20000, "webDiscount": 20000, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": true
    }
  },
  {
    "id": 190,
    "title": "House Paint (outdoor)",
    "slug": "house-paint-outdoor",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/5d69bb37-5803-4cb8-959f-655125658114.png",
    "imageAlt": "House Paint (outdoor)",
    "meta": {
      "rated": 4.1,
      "done": 1049,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 500 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 500 },
        "islamabad": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 191,
    "title": "House Paint (indoor)",
    "slug": "house-paint-indoor",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/95bca824-158b-48f9-9088-1947d9b02c3a.png",
    "imageAlt": "House Paint (indoor)",
    "meta": {
      "rated": 4.4,
      "done": 1146,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 500 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 500 },
        "islamabad": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 192,
    "title": "Furniture Polishing",
    "slug": "furniture-polishing",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/f2377898-cf60-4987-be72-e615e1390cbd.png",
    "imageAlt": "Furniture Polishing",
    "meta": {
      "rated": 3.8,
      "done": 624,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 100 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 500 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 262,
    "title": "Gray structure Paint",
    "slug": "gray-structure-paint",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 100,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/21534635-fe5a-4315-8c83-9d97a4ed0fbe.png",
    "imageAlt": "Gray structure Paint",
    "meta": {
      "rated": 4.2,
      "done": 42,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 100 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 500 },
        "islamabad": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 263,
    "title": "Door Polish",
    "slug": "door-polish",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/142ec1fd-f78c-4222-8895-e970b1dae109.png",
    "imageAlt": "Door Polish",
    "meta": {
      "rated": 4.6,
      "done": 127,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 500 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 500 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 264,
    "title": "Tables Polish",
    "slug": "tables-polish",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/108f620b-c25b-462e-99d8-91efe0325c9c.png",
    "imageAlt": "Tables Polish",
    "meta": {
      "rated": 4.2,
      "done": 31,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 0 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 265,
    "title": "Window Paint",
    "slug": "window-paint",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/04e8bf32-c7f0-4504-acbb-477d6c3b5d26.png",
    "imageAlt": "Window Paint",
    "meta": {
      "rated": 4.2,
      "done": 22,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 0 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 266,
    "title": "Wooden Door Paint",
    "slug": "wooden-door-paint",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/1ccd68c2-7d81-498a-b9b0-265008b4adf1.png",
    "imageAlt": "Wooden Door Paint",
    "meta": {
      "rated": 4.8,
      "done": 54,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 500, "appPrice": 0, "webDiscount": 500, "mbmDiscount": 0 },
        "karachi": { "price": 500, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },

  {
    "id": 282,
    "title": "General Fumigation",
    "slug": "general-fumigation",
    "earningSplit": 20,
    "discount": null,
    "price": 5000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/bd4b091c-28f5-4eaf-98ff-4a2370a4300c.jpg",
    "imageAlt": "General Fumigation ",
    "meta": {
      "rated": 4.9,
      "done": 0,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 4500, "appPrice": 3500, "webDiscount": 3500, "mbmDiscount": 0 },
        "islamabad": { "price": 5500, "appPrice": 4500, "webDiscount": 4500, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": false
    }
  },
  {
    "id": 283,
    "title": "Cockroach Treatment",
    "slug": "cockroach-treatment",
    "earningSplit": 20,
    "discount": null,
    "price": 5000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/6f8bf935-1a46-4b4a-8770-96206181185e.jpg",
    "imageAlt": "Cockroach Treatment",
    "meta": {
      "rated": 4.7,
      "done": 0,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 4500, "appPrice": 3500, "webDiscount": 3500, "mbmDiscount": 0 },
        "islamabad": { "price": 5000, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 5000, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": false
    }
  },
  {
    "id": 284,
    "title": "Bed Bugs Treatment",
    "slug": "bed-bugs-treatment",
    "earningSplit": 20,
    "discount": null,
    "price": 10000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/d26bdafd-964e-4826-865e-0fc8e3417c83.jpg",
    "imageAlt": "Bed Bugs Treatment",
    "meta": {
      "rated": 4.8,
      "done": 0,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 7500, "appPrice": 6000, "webDiscount": 6000, "mbmDiscount": 0 },
        "islamabad": { "price": 10000, "appPrice": 0, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": false
    }
  },
  {
    "id": 286,
    "title": "Dengue Spray",
    "slug": "dengue-spray",
    "earningSplit": 20,
    "discount": null,
    "price": 5000,
    "appPrice": 5000,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/203ec02d-268a-40b7-875e-92985a104745.jfif",
    "imageAlt": "Dengue Spray",
    "meta": {
      "rated": 4.9,
      "done": 0,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 6000, "appPrice": 5000, "webDiscount": 5000, "mbmDiscount": 0 },
        "islamabad": { "price": 6000, "appPrice": 5000, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 6000, "appPrice": 5000, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": false
    }
  },
  {
    "id": 289,
    "title": "Disinfection Services",
    "slug": "disinfection-services",
    "earningSplit": 20,
    "discount": null,
    "price": 5000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/3b0fb97e-6d99-4fa4-9ec9-6c356c3cd49d.jpg",
    "imageAlt": "Disinfection Services",
    "meta": {
      "rated": 4.6,
      "done": 0,
      "hours": 0,
      "multiple": true,
      "title": "",
      "prefix": "",
      "cities": {
        "lahore": { "price": 6000, "appPrice": 5000, "webDiscount": 5000, "mbmDiscount": 0 },
        "islamabad": { "price": 6000, "appPrice": 5000, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": false,
      "inspection": false
    }
  },


  {
    "id": 73,
    "title": "Mixer Tap Installation",
    "slug": "mixer-tap-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 850,
    "appPrice": 0,
    "priceComment": "Per Tap",
    "image": "https://cdn.mrmahir.com/uploads/412cbaf4-08c9-4d2e-a465-d461f2e95f9d.png",
    "imageAlt": "Mixer tap Installation",
    "meta": {
      "rated": 4.7,
      "done": 535,
      "hours": 2,
      "multiple": true,
      "title": "How many taps need to be fixed",
      "prefix": "taps",
      "cities": {
        "lahore": { "price": 950, "appPrice": 850, "webDiscount": 850, "mbmDiscount": 770 },
        "karachi": { "price": 950, "appPrice": 850, "webDiscount": 850, "mbmDiscount": 0 },
        "islamabad": { "price": 950, "appPrice": 850, "webDiscount": 850, "mbmDiscount": 770 },
        "rawalpindi": { "price": 950, "appPrice": 850, "webDiscount": 850, "mbmDiscount": 770 },
        "multan": { "price": 950, "appPrice": 850, "webDiscount": 850, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 74,
    "title": "Single tap Installation",
    "slug": "single-tap-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 700,
    "appPrice": 700,
    "priceComment": "Per Tap (Discount on more than 2)",
    "image": "https://cdn.mrmahir.com/uploads/34067dbc-36a4-4223-9a36-6b848c5e62c9.png",
    "imageAlt": "Single tap Installation",
    "meta": {
      "rated": 4.5,
      "done": 811,
      "hours": 2,
      "multiple": true,
      "title": "How many taps need to be fixed",
      "prefix": "taps",
      "cities": {
        "lahore": { "price": 900, "appPrice": 700, "webDiscount": 700, "mbmDiscount": 720 },
        "karachi": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 720 },
        "rawalpindi": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 720 },
        "multan": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 75,
    "title": "Sink Spindle Change",
    "slug": "sink-spindle-change",
    "earningSplit": 20,
    "discount": null,
    "price": 700,
    "appPrice": 700,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/5ca61cd1-35e9-4880-8943-1bead8696f3c.png",
    "imageAlt": "Sink spindle change",
    "meta": {
      "rated": 4.7,
      "done": 401,
      "hours": 2,
      "multiple": true,
      "title": "How many spindles need to be changed",
      "prefix": "spindles",
      "cities": {
        "lahore": { "price": 900, "appPrice": 700, "webDiscount": 700, "mbmDiscount": 720 },
        "karachi": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 720 },
        "rawalpindi": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 720 },
        "multan": { "price": 900, "appPrice": 700, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 76,
    "title": "Muslim Shower Replacement",
    "slug": "muslim-shower-replacement",
    "earningSplit": 20,
    "discount": null,
    "price": 850,
    "appPrice": 0,
    "priceComment": "Per Muslim Shower",
    "image": "https://cdn.mrmahir.com/uploads/81f9a623-a94a-428d-9247-272c73447fb9.png",
    "imageAlt": "Muslim shower replacement",
    "meta": {
      "rated": 4.4,
      "done": 934,
      "hours": 2,
      "multiple": true,
      "title": "How many showers need to be replaced",
      "prefix": "showers",
      "cities": {
        "lahore": { "price": 950, "appPrice": 850, "webDiscount": 850, "mbmDiscount": 770 },
        "karachi": { "price": 950, "appPrice": 850, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 950, "appPrice": 850, "webDiscount": 0, "mbmDiscount": 770 },
        "rawalpindi": { "price": 950, "appPrice": 850, "webDiscount": 0, "mbmDiscount": 770 },
        "multan": { "price": 950, "appPrice": 850, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 77,
    "title": "Water Motor Installation",
    "slug": "water-motor-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 1200,
    "appPrice": 0,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/156d25fc-210c-4280-a1ca-0b607b393cad.png",
    "imageAlt": "Water motor Installation",
    "meta": {
      "rated": 4,
      "done": 193,
      "hours": 2,
      "multiple": true,
      "title": "How many motors need to be installed",
      "prefix": "motors",
      "cities": {
        "lahore": { "price": 1350, "appPrice": 1200, "webDiscount": 1200, "mbmDiscount": 1080 },
        "karachi": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 1080 },
        "rawalpindi": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 1080 },
        "multan": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 78,
    "title": "Kitchen Leakage Repairing",
    "slug": "kitchen-leakage-repairing",
    "earningSplit": 20,
    "discount": null,
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/1a85d07e-e358-4e66-8d43-53eabb70b5f7.png",
    "imageAlt": "Kitchen Leakage Repairing",
    "meta": {
      "rated": 4.6,
      "done": 273,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 600, "appPrice": 500, "webDiscount": 500, "mbmDiscount": 450 },
        "karachi": { "price": 600, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 600, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 720 },
        "rawalpindi": { "price": 600, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 720 },
        "multan": { "price": 600, "appPrice": 500, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 79,
    "title": "Commode Tank Machine Repairing",
    "slug": "commode-tank-machine-repairing",
    "earningSplit": 20,
    "discount": null,
    "price": 1200,
    "appPrice": 0,
    "priceComment": "Per Tank",
    "image": "https://cdn.mrmahir.com/uploads/f3d52ad2-325f-44bd-a97f-b3cd3c73983b.png",
    "imageAlt": "Commode Tank Machine repairing",
    "meta": {
      "rated": 4.2,
      "done": 955,
      "hours": 2,
      "multiple": true,
      "title": "How many buttons need to be repaired",
      "prefix": "buttons",
      "cities": {
        "lahore": { "price": 1350, "appPrice": 1200, "webDiscount": 1200, "mbmDiscount": 1080 },
        "karachi": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 1080 },
        "rawalpindi": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 1080 },
        "multan": { "price": 1350, "appPrice": 1200, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 80,
    "title": "Hot or Cold Water Piping",
    "slug": "hot-or-cold-water-piping",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/9cff8356-ae11-441e-9a9e-5b084bb8377b.png",
    "imageAlt": "Hot or Cold Water Piping",
    "meta": {
      "rated": 4.4,
      "done": 331,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 1000, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 720 },
        "karachi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 720 },
        "rawalpindi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 720 },
        "multan": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 81,
    "title": "Washroom Accessory Installation",
    "slug": "washroom-accessory-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 1800,
    "appPrice": 0,
    "priceComment": "Bathroom Shelves, Soap Dispensers, Towel Rails, Toothbrush Holders",
    "image": "https://cdn.mrmahir.com/uploads/d9cbc8de-c68e-4a54-8d10-b2d237148476.png",
    "imageAlt": "Washroom Accessory Installation",
    "meta": {
      "rated": 4.8,
      "done": 271,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 2000, "appPrice": 1800, "webDiscount": 1800, "mbmDiscount": 1620 },
        "karachi": { "price": 2000, "appPrice": 1800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 2000, "appPrice": 1800, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 2000, "appPrice": 1800, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 2000, "appPrice": 1800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 82,
    "title": "Kitchen Drain Blockage",
    "slug": "kitchen-drain-blockage",
    "earningSplit": 20,
    "discount": null,
    "price": 1000,
    "appPrice": 0,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/070cc67e-0e04-437e-b30a-522eef1f4402.png",
    "imageAlt": "Kitchen Drain Blockage",
    "meta": {
      "rated": 4.2,
      "done": 873,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 1200, "appPrice": 1000, "webDiscount": 1000, "mbmDiscount": 900 },
        "karachi": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 900 },
        "rawalpindi": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 900 },
        "multan": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 83,
    "title": "Automatic Washing Machine Installation (With Wiring)",
    "slug": "automatic-washing-machine-installation-with-wiring",
    "earningSplit": 20,
    "discount": null,
    "price": 2500,
    "appPrice": 2000,
    "priceComment": "Vary After inspection",
    "image": "https://cdn.mrmahir.com/uploads/7370a93d-2270-4742-9607-eae1e07a2a1a.png",
    "imageAlt": "Automatic Washing Machine Installation (With Wiring)",
    "meta": {
      "rated": 4.6,
      "done": 625,
      "hours": 2,
      "multiple": true,
      "title": "How many machines need to be installed",
      "prefix": "machines",
      "cities": {
        "lahore": { "price": 2800, "appPrice": 2500, "webDiscount": 2500, "mbmDiscount": 2250 },
        "karachi": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 2250 },
        "rawalpindi": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 2250 },
        "multan": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 110,
    "title": "Commode Tank Machine Replacement",
    "slug": "commode-tank-machine-replacement",
    "earningSplit": 20,
    "discount": null,
    "price": 1000,
    "appPrice": 0,
    "priceComment": "Per Tank",
    "image": "https://cdn.mrmahir.com/uploads/754d24b5-e22f-4410-bb24-f71df54f4e1e.png",
    "imageAlt": "Commode Tank Machine Replacement",
    "meta": {
      "rated": 4.7,
      "done": 182,
      "hours": 2,
      "multiple": true,
      "title": "How many walls need to be repaired",
      "prefix": "walls",
      "cities": {
        "lahore": { "price": 1200, "appPrice": 1000, "webDiscount": 1000, "mbmDiscount": 900 },
        "karachi": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 900 },
        "rawalpindi": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 900 },
        "multan": { "price": 1200, "appPrice": 1000, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 111,
    "title": "Water Motor Repairing",
    "slug": "water-motor-repairing",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/732c37e0-c8a4-4361-8c72-d50de244385b.png",
    "imageAlt": "Water Motor Repairing",
    "meta": {
      "rated": 4.3,
      "done": 870,
      "hours": 2,
      "multiple": true,
      "title": "How many motors need to be repaired",
      "prefix": "motors",
      "cities": {
        "lahore": { "price": 1000, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 720 },
        "karachi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 720 },
        "rawalpindi": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 720 },
        "multan": { "price": 1000, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 112,
    "title": "Oven Range Service",
    "slug": "oven-range-service",
    "earningSplit": 20,
    "discount": null,
    "price": 1500,
    "appPrice": 1500,
    "priceComment": "Per Oven Range",
    "image": "https://cdn.mrmahir.com/uploads/c8ddd521-dde6-4b7c-b349-e1dc4422885f.png",
    "imageAlt": "Oven Range Service",
    "meta": {
      "rated": 4.2,
      "done": 413,
      "hours": 2,
      "multiple": true,
      "title": "How many ovens need to be serviced",
      "prefix": "ovens",
      "cities": {
        "lahore": { "price": 1800, "appPrice": 1500, "webDiscount": 1500, "mbmDiscount": 1350 },
        "islamabad": { "price": 1800, "appPrice": 1500, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 1800, "appPrice": 1500, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 116,
    "title": "Water Tank Supply Issue",
    "slug": "water-tank-supply-issue",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/26e1fded-458a-471c-b16e-4fe4eabcbb92.png",
    "imageAlt": "Water Tank Supply Issue",
    "meta": {
      "rated": 4.3,
      "done": 586,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 900, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 0 },
        "karachi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 120,
    "title": "Gas Pipe Wiring",
    "slug": "gas-pipe-wiring",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/c655fa5e-ba54-4702-8278-cfc32ef17aa0.png",
    "imageAlt": "Gas Pipe Wiring",
    "meta": {
      "rated": 4.4,
      "done": 305,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 900, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 0 },
        "karachi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 128,
    "title": "House Plumbing Work",
    "slug": "house-plumbing-work",
    "earningSplit": 20,
    "discount": null,
    "price": 800,
    "appPrice": 0,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/00efac99-e38f-48d8-ae0e-160a04191e5e.jpg",
    "imageAlt": "Plumbing Work",
    "meta": {
      "rated": 4.4,
      "done": 8028,
      "hours": 2,
      "multiple": true,
      "title": "How many sofas need to be cleaned",
      "prefix": "seats",
      "cities": {
        "lahore": { "price": 900, "appPrice": 800, "webDiscount": 800, "mbmDiscount": 0 },
        "karachi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 900, "appPrice": 800, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 144,
    "title": "Commode Installation",
    "slug": "commode-installation",
    "earningSplit": 20,
    "discount": null,
    "price": 2500,
    "appPrice": 2500,
    "priceComment": "Vary After inspection",
    "image": "https://cdn.mrmahir.com/uploads/ebc5be54-bfff-4c14-8bf1-8e76028e48c5.png",
    "imageAlt": "Commode installation",
    "meta": {
      "rated": 4.4,
      "done": 607,
      "hours": 2,
      "multiple": true,
      "title": "How many commodes need to be installed",
      "prefix": "commodes",
      "cities": {
        "lahore": { "price": 2800, "appPrice": 2500, "webDiscount": 2500, "mbmDiscount": 0 },
        "karachi": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 0 },
        "islamabad": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 0 },
        "rawalpindi": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 0 },
        "multan": { "price": 2800, "appPrice": 2500, "webDiscount": 0, "mbmDiscount": 0 }
      },
      "repair": true,
      "inspection": false
    }
  },

  {
    "id": 198,
    "title": "Car Detailing Hatchback",
    "slug": "car-detailing-hatchback",
    "earningSplit": 23,
    "discount": null,
    "price": 10000,
    "appPrice": 6500,
    "priceComment": "Per Car",
    "image": "https://cdn.mrmahir.com/uploads/51444db1-1f74-4372-bab7-e3cfa9a4b2aa.jpg",
    "imageAlt": "Car Detailing Hatchback",
    "meta": {
      "rated": 4.4,
      "done": 1111,
      "hours": 2,
      "multiple": true,
      "title": "How many cars need to be detailed",
      "prefix": "cars",
      "cities": {
        "lahore": {
          "price": 10000,
          "appPrice": 6500,
          "webDiscount": 6500,
          "mbmDiscount": 5850
        }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 199,
    "title": "Car Detailing Sedan",
    "slug": "car-detailing-sedan",
    "earningSplit": 23,
    "discount": null,
    "price": 12000,
    "appPrice": 7500,
    "priceComment": "Per Car",
    "image": "https://cdn.mrmahir.com/uploads/4c0155f6-d779-4f52-b580-cf55ce4d08a1.png",
    "imageAlt": "Car Detailing Sedan",
    "meta": {
      "rated": 4.4,
      "done": 11163,
      "hours": 2,
      "multiple": true,
      "title": "How many cars need to be detailed",
      "prefix": "cars",
      "cities": {
        "lahore": {
          "price": 12000,
          "appPrice": 7500,
          "webDiscount": 7500,
          "mbmDiscount": 6750
        }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 200,
    "title": "Car Detailing Luxury Sedan",
    "slug": "car-detailing-luxury-sedan",
    "earningSplit": 23,
    "discount": null,
    "price": 12000,
    "appPrice": 7500,
    "priceComment": "Per Car",
    "image": "https://cdn.mrmahir.com/uploads/943c74e9-2474-4593-9c6c-97884c488df1.jpg",
    "imageAlt": "Car Detailing Luxury Sedan",
    "meta": {
      "rated": 4.4,
      "done": 89,
      "hours": 2,
      "multiple": true,
      "title": "How many cars need to be detailed",
      "prefix": "cars",
      "cities": {
        "lahore": {
          "price": 12000,
          "appPrice": 7500,
          "webDiscount": 7500,
          "mbmDiscount": 6750
        }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 201,
    "title": "Car Detailing Crossover",
    "slug": "car-detailing-crossover",
    "earningSplit": 23,
    "discount": null,
    "price": 14000,
    "appPrice": 9000,
    "priceComment": "Per Car",
    "image": "https://cdn.mrmahir.com/uploads/d003c96c-aea8-4bd4-9018-20b0bf7a5cbf.png",
    "imageAlt": "Car Detailing Crossover",
    "meta": {
      "rated": 4.1,
      "done": 121,
      "hours": 2,
      "multiple": true,
      "title": "How many cars need to be detailed",
      "prefix": "cars",
      "cities": {
        "lahore": {
          "price": 14000,
          "appPrice": 9000,
          "webDiscount": 9000,
          "mbmDiscount": 8100
        }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 202,
    "title": "Car Detailing SUV",
    "slug": "car-detailing-suv",
    "earningSplit": 23,
    "discount": null,
    "price": 15000,
    "appPrice": 12500,
    "priceComment": "Per Car",
    "image": "https://cdn.mrmahir.com/uploads/d0e9a963-c2c6-4b30-9c56-c59e628983d2.png",
    "imageAlt": "Car Detailing SUV",
    "meta": {
      "rated": 4.5,
      "done": 161,
      "hours": 2,
      "multiple": true,
      "title": "How many cars need to be detailed",
      "prefix": "cars",
      "cities": {
        "lahore": {
          "price": 15000,
          "appPrice": 12500,
          "webDiscount": 12500,
          "mbmDiscount": 11250
        }
      },
      "repair": true,
      "inspection": false
    }
  },
  {
    "id": 1614,
    "title": "Car Detailing Minivan",
    "slug": "car-detailing-minivan",
    "earningSplit": 23,
    "discount": null,
    "price": 10000,
    "appPrice": 7500,
    "priceComment": "Per Car",
    "image": "https://cdn.mrmahir.com/uploads/87e10537-68af-4643-9374-8e87715623f1.png",
    "imageAlt": "Car Detailing Minivan",
    "meta": {
      "rated": 4.8,
      "done": 457,
      "hours": 0,
      "multiple": true,
      "title": "How many cars need to be detailed",
      "prefix": "cars",
      "cities": {
        "lahore": {
          "price": 10000,
          "appPrice": 7500,
          "webDiscount": 7500,
          "mbmDiscount": 6750
        }
      },
      "repair": true,
      "inspection": false
    }
  }

  
  ],
};

const serviceSlice = createSlice({
  name: 'Servicesslice',
  initialState,
  reducers: {
    addService: (state, action: PayloadAction<ServiceItem>) => {
      state.services.push(action.payload);
    },
  },
});

export const { addService } = serviceSlice.actions;

// Selector to get service by ID
export const selectServiceDetailById = (state: { Servicesslice: ServiceState }, serviceId: number) => 
  state.Servicesslice.services.find(service => service.id === serviceId);

export default serviceSlice.reducer;