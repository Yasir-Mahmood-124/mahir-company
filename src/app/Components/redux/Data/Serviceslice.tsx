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
  }
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