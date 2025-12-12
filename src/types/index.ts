export interface Product {
  id: string;
  name: string;
  currentPrice: number;
  discountPrice: number;
  mainCategory: string;
  subCategory: string;
  service: string;
  description: string;
  reviews: number;
  includes: string[];
  notIncludes: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface Category {
  name: string;
  subCategories: {
    [key: string]: string[];
  };
}

export interface CategoryData {
  [key: string]: Category;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}