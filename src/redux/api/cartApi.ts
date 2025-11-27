// src/redux/api/cartApi.ts
// RTK Query Cart API Slice - Fixed Exports

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICartItem, CartFormData, ApiCartResponse } from '@/types/cart';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: '/api',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Cart'],
  endpoints: (builder) => ({
    // Get all cart items
    getCartItems: builder.query<ApiCartResponse<ICartItem>, void>({
      query: () => '/cart',
      providesTags: ['Cart'],
    }),
    
    // Get single cart item by ID
    getCartItemById: builder.query<ApiCartResponse<ICartItem>, string>({
      query: (id) => `/cart/${id}`,
      providesTags: (result, error, id) => [{ type: 'Cart', id }],
    }),
    
    // Add item to cart
    addToCart: builder.mutation<ApiCartResponse<ICartItem>, CartFormData>({
      query: (cartData) => ({
        url: '/cart',
        method: 'POST',
        body: cartData,
      }),
      invalidatesTags: ['Cart'],
    }),
    
    // Update cart item quantity
    updateCartQuantity: builder.mutation<
      ApiCartResponse<ICartItem>, 
      { id: string; quantity: number }
    >({
      query: ({ id, quantity }) => ({
        url: `/cart/${id}`,
        method: 'PATCH',
        body: { quantity },
      }),
      invalidatesTags: ['Cart'],
    }),
    
    // Remove item from cart
    removeFromCart: builder.mutation<ApiCartResponse<ICartItem>, string>({
      query: (id) => ({
        url: `/cart/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
    
    // Clear entire cart
    clearCart: builder.mutation<ApiCartResponse<ICartItem>, void>({
      query: () => ({
        url: '/cart',
        method: 'DELETE',
      }),
      invalidatesTags: ['Cart'],
    }),
  }),
});

// Export hooks
export const { 
  useGetCartItemsQuery,
  useGetCartItemByIdQuery,
  useAddToCartMutation,
  useUpdateCartQuantityMutation,
  useRemoveFromCartMutation,
  useClearCartMutation,
} = cartApi;

// Export the API itself (for store configuration)
export default cartApi;