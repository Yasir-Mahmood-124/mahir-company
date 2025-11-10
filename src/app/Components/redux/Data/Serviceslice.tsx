// store/servicesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Service {
  id: number;
  title: string;
  slug: string;
  price: number;
  appPrice: number;
  priceComment: string;
  image: string;
  rating: number;
  done: number;
  tag?: string;
}

interface ServicesState {
  services: Service[];
  cart: { [key: number]: number };
}

const initialState: ServicesState = {
  services: [
    {
      id: 58,
      title: 'AC General Services',
      slug: 'ac-general-service',
      price: 3000,
      appPrice: 1850,
      priceComment: 'Per AC (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/21bfef41-4036-4ec2-bec9-22de3a30f4eb.png',
      rating: 4.3,
      done: 14447,
      tag: 'Most Popular',
    },
    {
      id: 69,
      title: 'AC Installation',
      slug: 'ac-installation',
      price: 3500,
      appPrice: 3000,
      priceComment: 'Installation with 10 Feet pipe (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/5d7438de-4b81-4b80-ad0f-6d9fd5d381b2.jpg',
      rating: 4.4,
      done: 5089,
    },
    {
      id: 92,
      title: 'AC Repairing',
      slug: 'ac-repairing',
      price: 1000,
      appPrice: 800,
      priceComment: 'Visit and Inspection Charges',
      image: 'https://cdn.mrmahir.com/uploads/ebe80b6b-28e5-41d4-9c59-d2174cb1e714.png',
      rating: 4.3,
      done: 11257,
    },
    {
      id: 93,
      title: 'AC Mounting and Dismounting',
      slug: 'ac-mounting-and-dismounting',
      price: 4200,
      appPrice: 3500,
      priceComment: 'Per AC (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/518e8b60-2ad5-4ac3-bff5-9d34bb37775b.png',
      rating: 4.6,
      done: 2004,
    },
    {
      id: 235,
      title: 'AC Dismounting',
      slug: 'ac-dismounting',
      price: 1200,
      appPrice: 1000,
      priceComment: 'Per AC (1 to 2.5 tons)',
      image: 'https://cdn.mrmahir.com/uploads/ba7ac294-6fa9-4138-b7fd-e1bd35f113ef.png',
      rating: 4.8,
      done: 1036,
      tag: 'Premium',
    },
    {
    id: 164,
    title: 'Wardrobe Repairing',
    slug: 'wardrobe-repairing',
    price: 800,
    appPrice: 500,
    priceComment: 'Visit & Inspection Charges',
    image: 'https://cdn.mrmahir.com/uploads/1d396a94-eeaa-48b0-9312-dc8505aa7a36.png',
    rating: 4.3,
    done: 331,
  },
  {
    id: 167,
    title: 'Door Installation',
    slug: 'door-installation',
    price: 1500,
    appPrice: 1000,
    priceComment: 'Starting From',
    image: 'https://cdn.mrmahir.com/uploads/c53b43d5-d3bc-452e-a9f7-f5f187a19f1f.png',
    rating: 4.3,
    done: 206,
  },
  {
    id: 168,
    title: 'Door Repairing',
    slug: 'door-repairing',
    price: 800,
    appPrice: 500,
    priceComment: 'Visit & Inspection Charges',
    image: 'https://cdn.mrmahir.com/uploads/789dc5bd-6fd2-403b-ba8b-5bc0d56c01a8.png',
    rating: 4.2,
    done: 560,
  },
  {
    id: 177,
    title: 'Carpenter Work',
    slug: 'carpenter-work',
    price: 800,
    appPrice: 500,
    priceComment: 'Visit & Inspection Charges',
    image: 'https://cdn.mrmahir.com/uploads/5105bf9b-993b-4df9-a15f-3847d71a4c9d.png',
    rating: 4.3,
    done: 5938,
    tag: 'Most Popular',
  },
  {
    id: 204,
    title: 'Drawer Repairing',
    slug: 'drawer-repairing',
    price: 800,
    appPrice: 500,
    priceComment: 'Vary After Inspection',
    image: 'https://cdn.mrmahir.com/uploads/50e17f32-bbbe-4922-a72c-1ac457e22b67.png',
    rating: 4.6,
    done: 364,
  },
  {
    id: 210,
    title: 'Furniture Repairing',
    slug: 'furniture-repairing',
    price: 500,
    appPrice: 400,
    priceComment: 'Visit & Inspection Charges',
    image: 'https://cdn.mrmahir.com/uploads/33591831-d2d1-47a0-a1db-9dbb08a3e73a.png',
    rating: 4.6,
    done: 644,
  },
  {
    id: 236,
    title: 'Room Door Lock installation',
    slug: 'room-door-lock-installation',
    price: 1500,
    appPrice: 1200,
    priceComment: 'Vary After inspection',
    image: 'https://cdn.mrmahir.com/uploads/4807f4f6-fdc9-46a0-8ace-5adfcd234361.png',
    rating: 4.8,
    done: 36,
    tag: 'Premium',
  },
  {
    id: 237,
    title: 'Drawer Lock installation',
    slug: 'drawer-lock-installation',
    price: 800,
    appPrice: 500,
    priceComment: 'Per Lock',
    image: 'https://cdn.mrmahir.com/uploads/6b5e2fb0-70b6-480e-a81f-de7a4566a61b.png',
    rating: 4.0,
    done: 185,
  },
  {
    id: 238,
    title: 'Catcher Replacement',
    slug: 'catcher-replacement',
    price: 800,
    appPrice: 500,
    priceComment: 'Per Catcher',
    image: 'https://cdn.mrmahir.com/uploads/34a94ace-38c9-4ea3-ad08-b7c661940786.png',
    rating: 5.0,
    done: 37,
    tag: 'Top Rated',
  },
      {
    "id": 1,
    "title": "Instant Geyser Service",
    "slug": "instant-geyser-service",
    "price": 2000,
    "appPrice": 1800,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/9eef2550-868f-4acd-92b0-7dbd59ed3060.png",
    "rating": 4.6,
    "done": 392
  },
  {
    "id": 2,
    "title": "Instant Geyser Installation",
    "slug": "instant-geyser-installation",
    "price": 2500,
    "appPrice": 2000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/3e6aad26-4d09-4e58-84e5-8419b6037959.png",
    "rating": 4.8,
    "done": 406
  },
  {
    "id": 3,
    "title": "Gas Geyser Service",
    "slug": "gas-geyser-service",
    "price": 2500,
    "appPrice": 2000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/149d48ea-5841-4c0f-ac17-b6766ad66365.png",
    "rating": 4.7,
    "done": 795
  },
  {
    "id": 4,
    "title": "Gas Geyser Installation",
    "slug": "gas-geyser-installation",
    "price": 3000,
    "appPrice": 2500,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/eb31b6c2-23d4-40c6-9b9d-0a8bf48663e4.png",
    "rating": 4.7,
    "done": 227
  },
  {
    "id": 5,
    "title": "Instant Electric Geyser Repairing",
    "slug": "instant-electric-geyser-repairing",
    "price": 1000,
    "appPrice": 800,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/7d6870b4-01fd-486a-bed5-5ab249c1d58e.png",
    "rating": 4.6,
    "done": 316
  },
  {
    "id": 6,
    "title": "Instant Electric Geyser Installation",
    "slug": "instant-electric-geyser-installation",
    "price": 2500,
    "appPrice": 2000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/be6b33bd-6d2d-4416-ae8c-1986e8c58644.png",
    "rating": 4.5,
    "done": 180
  },
  {
    "id": 7,
    "title": "Instant Electric Geyser Dismounting",
    "slug": "instant-electric-geyser-dismounting",
    "price": 1000,
    "appPrice": 800,
    "priceComment": "Fixed Price",
    "image": "https://cdn.mrmahir.com/uploads/2cc200c5-5f25-4634-8df4-76db84bb686a.png",
    "rating": 4.4,
    "done": 35
  },
  {
    "id": 8,
    "title": "Gas Geyser Repairing",
    "slug": "gas-geyser-repairing",
    "price": 1000,
    "appPrice": 800,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/5688b537-0882-4879-b0c3-262d7817abfc.png",
    "rating": 4.6,
    "done": 1117
  },
  {
    "id": 9,
    "title": "Gas Geyser Dismounting",
    "slug": "gas-geyser-dismounting",
    "price": 1500,
    "appPrice": 1000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/d0f18184-7918-48ea-a25d-1ead327bea3f.png",
    "rating": 5.0,
    "done": 75
  },
  {
    "id": 10,
    "title": "Instant Geyser Repairing",
    "slug": "instant-geyser-repairing",
    "price": 800,
    "appPrice": 500,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/38d460fd-ac48-461f-8cf2-9cf8837f1d72.png",
    "rating": 4.6,
    "done": 571
  },
  {
    "id": 11,
    "title": "Instant Electric Geyser Service",
    "slug": "instant-electric-geyser-service",
    "price": 2000,
    "appPrice": 1800,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/0586f99f-ddb7-4cbe-8c41-ee4f4b50893d.png",
    "rating": 4.9,
    "done": 2649
  },
  {
    "id": 12,
    "title": "Instant Geyser Dismounting",
    "slug": "instant-geyser-dismounting",
    "price": 1200,
    "appPrice": 1000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/bf7b8c84-f380-4808-a73c-1d57e1995ff5.jpg",
    "rating": 0,
    "done": 0
  },
  {
    "id": 23,
    "title": "Ceiling Fan Installation",
    "slug": "ceiling-fan-installation",
    "price": 800,
    "appPrice": 900,
    "priceComment": "Per Fan",
    "image": "https://cdn.mrmahir.com/uploads/38064e7c-485c-4370-a775-973893017aad.png",
    "rating": 4.5,
    "done": 1070
  },
  {
    "id": 24,
    "title": "SMD Lights Installation (Without Wiring)",
    "slug": "smd-lights-installation-without-wiring",
    "price": 500,
    "appPrice": 800,
    "priceComment": "Per Light (Discount on more then 2)",
    "image": "https://cdn.mrmahir.com/uploads/e6d052be-e08f-40dd-ad83-8e9f3136451a.png",
    "rating": 4.8,
    "done": 519
  },
  {
    "id": 25,
    "title": "32-42 Inch LED TV or LCD Mounting",
    "slug": "32-42-inch-led-tv-or-lcd-mounting",
    "price": 1250,
    "appPrice": 1500,
    "priceComment": "Very After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/011a5157-b598-4583-a878-2c9f9512ccc3.png",
    "rating": 4.5,
    "done": 619
  },
   {
    "id": 95,
    "title": "Curtain Rod Installation",
    "slug": "curtain-rod-installation",
    "price": 650,
    "appPrice": 800,
    "priceComment": "Per Rod",
    "image": "https://cdn.mrmahir.com/uploads/6363c48d-efe4-4d9b-a937-024bdd7fc06f.png",
    "rating": 4.2,
    "done": 383
  },
  {
    "id": 98,
    "title": "Art Hanging",
    "slug": "art-hanging",
    "price": 600,
    "appPrice": 800,
    "priceComment": "Per Piece",
    "image": "https://cdn.mrmahir.com/uploads/5aed8ae2-72ea-4df0-a9ea-cb869d8928fc.png",
    "rating": 5,
    "done": 113
  },
  {
    "id": 99,
    "title": "Mirror hanging",
    "slug": "mirror-hanging",
    "price": 600,
    "appPrice": 800,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/9ff87bf4-22b2-46eb-afc4-90e6e2bf51bd.png",
    "rating": 4.5,
    "done": 72
  },
  {
    "id": 100,
    "title": "Picture Hanging",
    "slug": "picture-hanging",
    "price": 600,
    "appPrice": 800,
    "priceComment": "Per Picture",
    "image": "https://cdn.mrmahir.com/uploads/0eaddc02-f9ee-470e-b9ae-f8417e0d8503.png",
    "rating": 5,
    "done": 42
  },
  {
    "id": 101,
    "title": "Shelf Hanging",
    "slug": "shelf-hanging",
    "price": 700,
    "appPrice": 800,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/55b7e97e-9e7e-4889-8a76-3773e2db438d.png",
    "rating": 5,
    "done": 51
  },
  {
    "id": 249,
    "title": "Room Clock Hanging",
    "slug": "room-clock-hanging",
    "price": 650,
    "appPrice": 800,
    "priceComment": "Per Clock",
    "image": "https://cdn.mrmahir.com/uploads/cf7bda28-4e6a-4a58-84b8-a6f44ac9847e.jpg",
    "rating": 4.2,
    "done": 15
  },
   {
    "id": 208,
    "title": "Cooking Range Repairing",
    "slug": "cooking-range-repairing",
    "price": 500,
    "appPrice": 800,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/e27f22ac-826a-4c19-aa5a-ce42d435eb55.png",
    "rating": 4.2,
    "done": 1010
  },
  {
    "id": 281,
    "title": "Automatic Washing Machine Repairing",
    "slug": "automatic-washing-machine-repairing",
    "price": 800,
    "appPrice": 1000,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/c7ff1262-ab1a-4813-9ced-540d48e6032f.png",
    "rating": 4.6,
    "done": 0
  },
  {
    "id": 1633,
    "title": "Oven Range Services",
    "slug": "oven-range-services",
    "price": 1600,
    "appPrice": 2000,
    "priceComment": "Per Oven Range",
    "image": "https://cdn.mrmahir.com/uploads/380feccd-201f-43f9-9888-a83542a31548.jpg",
    "rating": 4.6,
    "done": 0
  },
  {
    "id": 1654,
    "title": "Kitchen Hood Installation",
    "slug": "kitchen-hood-installation",
    "price": 800,
    "appPrice": 1000,
    "priceComment": "Visit and Inspection charges",
    "image": "https://cdn.mrmahir.com/uploads/94e427be-6bf8-4426-8b28-a91f77c39e8c.png",
    "rating": 4.5,
    "done": 0
  },
  {
    "id": 1655,
    "title": "Kitchen Hood Repairing",
    "slug": "kitchen-hood-repairing",
    "price": 800,
    "appPrice": 1000,
    "priceComment": "Visit and Inspection charges",
    "image": "https://cdn.mrmahir.com/uploads/6ac3b11c-48b8-418b-ae0f-f35773343ff5.png",
    "rating": 4.5,
    "done": 0
  },
  {
    "id": 1656,
    "title": "Automatic Washing Machine General Service",
    "slug": "automatic-washing-machine-general-service",
    "price": 3000,
    "appPrice": 4000,
    "priceComment": "Top-Loaded ( Per Washing Machine )",
    "image": "https://cdn.mrmahir.com/uploads/0cba6403-3c1e-4501-82df-ade117140aaf.png",
    "rating": 4.8,
    "done": 0
  },
  {
    "id": 1641,
    "title": "3 to 5 Marlas",
    "slug": "3-to-5-marlas",
    "price": 6000,
    "appPrice": 10000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/073a63ef-c016-41f3-9efa-b655ca15d667.png",
    "rating": 4.8,
    "done": 987
  },
  {
    "id": 1642,
    "title": "7 to 10 Marlas",
    "slug": "7-to-10-marlas",
    "price": 9000,
    "appPrice": 15000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/be3b11d4-8281-40ba-a99e-c9c5ba7a96b6.png",
    "rating": 4.7,
    "done": 597
  },
  {
    "id": 1643,
    "title": "1 Kanal",
    "slug": "1-kanal",
    "price": 12000,
    "appPrice": 20000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/755be818-921c-4561-a244-33f892714833.png",
    "rating": 4.9,
    "done": 375
  },
  {
    "id": 1644,
    "title": "2 Kanals",
    "slug": "2-kanals",
    "price": 20000,
    "appPrice": 34000,
    "priceComment": "Discounted Price",
    "image": "https://cdn.mrmahir.com/uploads/59924826-a557-437a-82d5-30b0c385f603.png",
    "rating": 4.8,
    "done": 480
  },






  {
    "id": 190,
    "title": "House Paint (outdoor)",
    "slug": "house-paint-outdoor",
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/5d69bb37-5803-4cb8-959f-655125658114.png",
    "rating": 4.1,
    "done": 1049
  },
  {
    "id": 191,
    "title": "House Paint (indoor)",
    "slug": "house-paint-indoor",
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/95bca824-158b-48f9-9088-1947d9b02c3a.png",
    "rating": 4.4,
    "done": 1146
  },
  {
    "id": 192,
    "title": "Furniture Polishing",
    "slug": "furniture-polishing",
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/f2377898-cf60-4987-be72-e615e1390cbd.png",
    "rating": 3.8,
    "done": 624
  },
  {
    "id": 262,
    "title": "Gray structure Paint",
    "slug": "gray-structure-paint",
    "price": 500,
    "appPrice": 100,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/21534635-fe5a-4315-8c83-9d97a4ed0fbe.png",
    "rating": 4.2,
    "done": 42
  },
  {
    "id": 263,
    "title": "Door Polish",
    "slug": "door-polish",
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/142ec1fd-f78c-4222-8895-e970b1dae109.png",
    "rating": 4.6,
    "done": 127
  },
  {
    "id": 264,
    "title": "Tables Polish",
    "slug": "tables-polish",
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/108f620b-c25b-462e-99d8-91efe0325c9c.png",
    "rating": 4.2,
    "done": 31
  },
  {
    "id": 265,
    "title": "Window Paint",
    "slug": "window-paint",
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/04e8bf32-c7f0-4504-acbb-477d6c3b5d26.png",
    "rating": 4.2,
    "done": 22
  },
  {
    "id": 266,
    "title": "Wooden Door Paint",
    "slug": "wooden-door-paint",
    "price": 500,
    "appPrice": 0,
    "priceComment": "Visit & Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/1ccd68c2-7d81-498a-b9b0-265008b4adf1.png",
    "rating": 4.8,
    "done": 54
  },


  {
    "id": 282,
    "title": "General Fumigation",
    "slug": "general-fumigation",
    "price": 5000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/bd4b091c-28f5-4eaf-98ff-4a2370a4300c.jpg",
    "rating": 4.9,
    "done": 0
  },
  {
    "id": 283,
    "title": "Cockroach Treatment",
    "slug": "cockroach-treatment",
    "price": 5000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/6f8bf935-1a46-4b4a-8770-96206181185e.jpg",
    "rating": 4.7,
    "done": 0
  },
  {
    "id": 284,
    "title": "Bed Bugs Treatment",
    "slug": "bed-bugs-treatment",
    "price": 10000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/d26bdafd-964e-4826-865e-0fc8e3417c83.jpg",
    "rating": 4.8,
    "done": 0
  },
  {
    "id": 286,
    "title": "Dengue Spray",
    "slug": "dengue-spray",
    "price": 5000,
    "appPrice": 5000,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/203ec02d-268a-40b7-875e-92985a104745.jfif",
    "rating": 4.9,
    "done": 0
  },
  {
    "id": 289,
    "title": "Disinfection Services",
    "slug": "disinfection-services",
    "price": 5000,
    "appPrice": 0,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/3b0fb97e-6d99-4fa4-9ec9-6c356c3cd49d.jpg",
    "rating": 4.6,
    "done": 0
  },


  {
    "id": 73,
    "title": "Mixer Tap Installation",
    "slug": "mixer-tap-installation",
    "price": 950,
    "appPrice": 850,
    "priceComment": "Per Tap",
    "image": "https://cdn.mrmahir.com/uploads/412cbaf4-08c9-4d2e-a465-d461f2e95f9d.png",
    "rating": 4.7,
    "done": 535
  },
  {
    "id": 74,
    "title": "Single tap Installation",
    "slug": "single-tap-installation",
    "price": 900,
    "appPrice": 700,
    "priceComment": "Per Tap (Discount on more than 2)",
    "image": "https://cdn.mrmahir.com/uploads/34067dbc-36a4-4223-9a36-6b848c5e62c9.png",
    "rating": 4.5,
    "done": 811
  },
  {
    "id": 75,
    "title": "Sink Spindle Change",
    "slug": "sink-spindle-change",
    "price": 900,
    "appPrice": 700,
    "priceComment": "Starting From",
    "image": "https://cdn.mrmahir.com/uploads/5ca61cd1-35e9-4880-8943-1bead8696f3c.png",
    "rating": 4.7,
    "done": 401
  },
  {
    "id": 76,
    "title": "Muslim Shower Replacement",
    "slug": "muslim-shower-replacement",
    "price": 950,
    "appPrice": 850,
    "priceComment": "Per Muslim Shower",
    "image": "https://cdn.mrmahir.com/uploads/81f9a623-a94a-428d-9247-272c73447fb9.png",
    "rating": 4.4,
    "done": 934
  },
  {
    "id": 77,
    "title": "Water Motor Installation",
    "slug": "water-motor-installation",
    "price": 1350,
    "appPrice": 1200,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/156d25fc-210c-4280-a1ca-0b607b393cad.png",
    "rating": 4,
    "done": 193
  },
  {
    "id": 78,
    "title": "Kitchen Leakage Repairing",
    "slug": "kitchen-leakage-repairing",
    "price": 600,
    "appPrice": 500,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/1a85d07e-e358-4e66-8d43-53eabb70b5f7.png",
    "rating": 4.6,
    "done": 273
  },
  {
    "id": 79,
    "title": "Commode Tank Machine Repairing",
    "slug": "commode-tank-machine-repairing",
    "price": 1350,
    "appPrice": 1200,
    "priceComment": "Per Tank",
    "image": "https://cdn.mrmahir.com/uploads/f3d52ad2-325f-44bd-a97f-b3cd3c73983b.png",
    "rating": 4.2,
    "done": 955
  },
  {
    "id": 80,
    "title": "Hot or Cold Water Piping",
    "slug": "hot-or-cold-water-piping",
    "price": 1000,
    "appPrice": 800,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/9cff8356-ae11-441e-9a9e-5b084bb8377b.png",
    "rating": 4.4,
    "done": 331
  },
  {
    "id": 81,
    "title": "Washroom Accessory Installation",
    "slug": "washroom-accessory-installation",
    "price": 2000,
    "appPrice": 1800,
    "priceComment": "Bathroom Shelves, Soap Dispensers, Towel Rails, Toothbrush Holders",
    "image": "https://cdn.mrmahir.com/uploads/d9cbc8de-c68e-4a54-8d10-b2d237148476.png",
    "rating": 4.8,
    "done": 271
  },
  {
    "id": 82,
    "title": "Kitchen Drain Blockage",
    "slug": "kitchen-drain-blockage",
    "price": 1200,
    "appPrice": 1000,
    "priceComment": "Vary After Inspection",
    "image": "https://cdn.mrmahir.com/uploads/070cc67e-0e04-437e-b30a-522eef1f4402.png",
    "rating": 4.2,
    "done": 873
  },
  {
    "id": 83,
    "title": "Automatic Washing Machine Installation (With Wiring)",
    "slug": "automatic-washing-machine-installation-with-wiring",
    "price": 2800,
    "appPrice": 2500,
    "priceComment": "Vary After inspection",
    "image": "https://cdn.mrmahir.com/uploads/7370a93d-2270-4742-9607-eae1e07a2a1a.png",
    "rating": 4.6,
    "done": 625
  },
  {
    "id": 110,
    "title": "Commode Tank Machine Replacement",
    "slug": "commode-tank-machine-replacement",
    "price": 1200,
    "appPrice": 1000,
    "priceComment": "Per Tank",
    "image": "https://cdn.mrmahir.com/uploads/754d24b5-e22f-4410-bb24-f71df54f4e1e.png",
    "rating": 4.7,
    "done": 182
  },
  {
    "id": 111,
    "title": "Water Motor Repairing",
    "slug": "water-motor-repairing",
    "price": 1000,
    "appPrice": 800,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/732c37e0-c8a4-4361-8c72-d50de244385b.png",
    "rating": 4.3,
    "done": 870
  },
  {
    "id": 112,
    "title": "Oven Range Service",
    "slug": "oven-range-service",
    "price": 1800,
    "appPrice": 1500,
    "priceComment": "Per Oven Range",
    "image": "https://cdn.mrmahir.com/uploads/c8ddd521-dde6-4b7c-b349-e1dc4422885f.png",
    "rating": 4.2,
    "done": 413
  },
  {
    "id": 116,
    "title": "Water Tank Supply Issue",
    "slug": "water-tank-supply-issue",
    "price": 900,
    "appPrice": 800,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/26e1fded-458a-471c-b16e-4fe4eabcbb92.png",
    "rating": 4.3,
    "done": 586
  },
  {
    "id": 120,
    "title": "Gas Pipe Wiring",
    "slug": "gas-pipe-wiring",
    "price": 900,
    "appPrice": 800,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/c655fa5e-ba54-4702-8278-cfc32ef17aa0.png",
    "rating": 4.4,
    "done": 305
  },
  {
    "id": 128,
    "title": "House Plumbing Work",
    "slug": "house-plumbing-work",
    "price": 900,
    "appPrice": 800,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/00efac99-e38f-48d8-ae0e-160a04191e5e.jpg",
    "rating": 4.4,
    "done": 8028
  },
  {
    "id": 144,
    "title": "Commode Installation",
    "slug": "commode-installation",
    "price": 2800,
    "appPrice": 2500,
    "priceComment": "Vary After inspection",
    "image": "https://cdn.mrmahir.com/uploads/ebc5be54-bfff-4c14-8bf1-8e76028e48c5.png",
    "rating": 4.4,
    "done": 607
  },
  {
    "id": 145,
    "title": "Pipeline Water Leakage",
    "slug": "pipeline-water-leakage",
    "price": 900,
    "appPrice": 800,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/d6529260-5196-464d-b7c8-2f26bff7cfbe.png",
    "rating": 4.5,
    "done": 1311
  },
  {
    "id": 147,
    "title": "Drain Pipe Installation",
    "slug": "drain-pipe-installation",
    "price": 900,
    "appPrice": 800,
    "priceComment": "Visit and Inspection Charges",
    "image": "https://cdn.mrmahir.com/uploads/a383122a-2f12-4835-a838-bdab3c22e88b.png",
    "rating": 4.8,
    "done": 409
  },
  

  ],
  cart: {},
};

const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const serviceId = action.payload;
      state.cart[serviceId] = (state.cart[serviceId] || 0) + 1;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const serviceId = action.payload;
      if (state.cart[serviceId] > 1) {
        state.cart[serviceId] -= 1;
      } else {
        delete state.cart[serviceId];
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        delete state.cart[id];
      } else {
        state.cart[id] = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = servicesSlice.actions;

// Selectors
export const selectAllServices = (state: { services: ServicesState }) => 
  state.services.services;

export const selectServiceById = (state: { services: ServicesState }, serviceId: number) => 
  state.services.services.find(service => service.id === serviceId);

export const selectCart = (state: { services: ServicesState }) => 
  state.services.cart;

export const selectCartItemQuantity = (state: { services: ServicesState }, serviceId: number) => 
  state.services.cart[serviceId] || 0;

export default servicesSlice.reducer;