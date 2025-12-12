
import { Product, ApiResponse } from '@/types';

const API_BASE = '/api';

export const api = {
  // Get all products
  getProducts: async (): Promise<ApiResponse<Product[]>> => {
    const res = await fetch(`${API_BASE}/products`);
    return res.json();
  },

  // Get single product
  getProduct: async (id: string): Promise<ApiResponse<Product>> => {
    const res = await fetch(`${API_BASE}/products/${id}`);
    return res.json();
  },

  // Create product
  createProduct: async (product: Omit<Product, 'id'>): Promise<ApiResponse<Product>> => {
    const res = await fetch(`${API_BASE}/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return res.json();
  },

  // Update product
  updateProduct: async (id: string, product: Partial<Product>): Promise<ApiResponse<Product>> => {
    const res = await fetch(`${API_BASE}/products/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    });
    return res.json();
  },

  // Delete product
  deleteProduct: async (id: string): Promise<ApiResponse<void>> => {
    const res = await fetch(`${API_BASE}/products/${id}`, {
      method: 'DELETE',
    });
    return res.json();
  },

  // Get categories
  getCategories: async (): Promise<ApiResponse<any>> => {
    const res = await fetch(`${API_BASE}/categories`);
    return res.json();
  },
};