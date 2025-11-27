// src/types/cart.ts
// TypeScript Interfaces for Cart

export interface ICartItem {
  _id?: string;
  serviceId: number;
  serviceName: string;
  servicePrice: number;
  serviceImage: string;
  quantity: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartFormData {
  serviceId: number;
  serviceName: string;
  servicePrice: number;
  serviceImage: string;
  quantity?: number;
}

export interface ApiCartResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  cartItems?: T[];
  cartItem?: T;
  count?: number;
  error?: string;
}