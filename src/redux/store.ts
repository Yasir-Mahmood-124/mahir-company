// redux/store.ts
// Complete Redux Store with Services, Cart & Order API

import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './Data/Serviceslice';
import ServicesslicedataReducer from './Data/Serviceslicedata';
import { orderApi } from './api/orderApi';
import { cartApi } from './api/cartApi';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,

    // Existing reducers
    services: servicesReducer,
    Servicesslice: ServicesslicedataReducer,
    
    // RTK Query API reducers
    [orderApi.reducerPath]: orderApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(orderApi.middleware)
      .concat(cartApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;