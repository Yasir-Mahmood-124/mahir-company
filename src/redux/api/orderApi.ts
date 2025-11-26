// src/store/api/orderApi.ts
// RTK Query API Slice with TypeScript

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IOrder, OrderFormData, ApiResponse } from '@/types/order';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api' 
  }),
  tagTypes: ['Order'],
  endpoints: (builder) => ({
    // Get all orders
    getOrders: builder.query<ApiResponse<IOrder>, void>({
      query: () => '/orders',
      providesTags: ['Order'],
    }),
    
    // Get single order by ID
    getOrderById: builder.query<ApiResponse<IOrder>, string>({
      query: (id) => `/orders/${id}`,
      providesTags: (result, error, id) => [{ type: 'Order', id }],
    }),
    
    // Create new order
    createOrder: builder.mutation<ApiResponse<IOrder>, OrderFormData>({
      query: (orderData) => ({
        url: '/orders',
        method: 'POST',
        body: orderData,
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const { 
  useGetOrdersQuery, 
  useGetOrderByIdQuery, 
  useCreateOrderMutation 
} = orderApi;