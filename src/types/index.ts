// types/index.ts
export interface Product {
  _id?: string;
  id?: string; // For compatibility
  name: string;
  currentPrice: number;
  discountPrice: number;
  mainCategory: string;
  subCategory: string;
  subCategoryImage?: string;
  service: string;
  description: string;
  reviews: number;
  includes: string[];
  notIncludes: string[];
  image?: string;
  isActive?: boolean;
  createdAt?: string | Date;
  updatedAt?: string | Date;
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
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface ProductFilters {
  mainCategory?: string;
  subCategory?: string;
  isActive?: boolean;
  page?: number;
  limit?: number;
}