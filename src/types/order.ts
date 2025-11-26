// src/types/order.ts
// TypeScript Interfaces for Order

export interface IOrder {
  _id?: string;
  name: string;
  address: string;
  serviceName: string;
  status?: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt?: string;
  updatedAt?: string;
}

export interface OrderFormData {
  name: string;
  address: string;
  serviceName: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  orders?: T[];
  order?: T;
  count?: number;
  error?: string;
}