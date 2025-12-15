import { Product } from '@/types';

class ProductStorage {
  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  add(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: string, updates: Partial<Product>): Product | null {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return null;
    
    this.products[index] = {
      ...this.products[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    return this.products[index];
  }

  delete(id: string): boolean {
    const initialLength = this.products.length;
    this.products = this.products.filter(p => p.id !== id);
    return this.products.length < initialLength;
  }

  // ✅ NEW - Get products by main category
  getByMainCategory(mainCategory: string): Product[] {
    return this.products.filter(p => p.mainCategory === mainCategory);
  }

  // ✅ NEW - Get products by subcategory
  getBySubCategory(mainCategory: string, subCategory: string): Product[] {
    return this.products.filter(
      p => p.mainCategory === mainCategory && p.subCategory === subCategory
    );
  }
}

export const productStorage = new ProductStorage();