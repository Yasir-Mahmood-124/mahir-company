// src/redux/api/orderApi.ts
// Order API with status update mutation

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, IOrder, OrderFormData } from '@/types/order';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
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
      providesTags: ['Order'],
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

    // Update order status
    updateOrderStatus: builder.mutation<
      ApiResponse<IOrder>,
      { id: string; status: string }
    >({
      query: ({ id, status }) => ({
        url: `/orders/${id}`,
        method: 'PATCH',
        body: { status },
      }),
      invalidatesTags: ['Order'],
    }),

    // Delete order
    deleteOrder: builder.mutation<ApiResponse<IOrder>, string>({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Order'],
    }),
  }),
});

export const {
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useCreateOrderMutation,
  useUpdateOrderStatusMutation,
  useDeleteOrderMutation,
} = orderApi;