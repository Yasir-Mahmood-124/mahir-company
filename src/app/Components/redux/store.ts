// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './Data/Serviceslice';
import ServicesslicedataReducer from "./Data/Serviceslicedata"
export const store = configureStore({
  reducer: {
    services: servicesReducer,
    Servicesslice:ServicesslicedataReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;