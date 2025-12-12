import { NextRequest, NextResponse } from 'next/server';
import { productStorage } from '@/lib/storage';

// GET - Fetch all products
export async function GET(request: NextRequest) {
  try {
    const products = productStorage.getAll();
    return NextResponse.json({
      success: true,
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// POST - Create new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newProduct = {
      ...body,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    const product = productStorage.add(newProduct);
    
    return NextResponse.json(
      {
        success: true,
        message: 'Product added successfully',
        data: product,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create product' },
      { status: 500 }
    );
  }
}