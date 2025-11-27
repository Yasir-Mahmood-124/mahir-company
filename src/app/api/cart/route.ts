// src/app/api/cart/route.ts
// Cart API - GET all items, POST new item, DELETE all

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Cart from '@/models/Cart';

// GET - Fetch all cart items
export async function GET() {
  try {
    await connectDB();
    const cartItems = await Cart.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      count: cartItems.length,
      cartItems: cartItems,
    }, { status: 200 });
    
  } catch (error: any) {
    console.error('GET Cart Items Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error fetching cart items',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST - Add item to cart
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { serviceId, serviceName, servicePrice, serviceImage, quantity } = body;

    // Validation
    if (!serviceId || !serviceName || !servicePrice || !serviceImage) {
      return NextResponse.json(
        {
          success: false,
          message: 'Service ID, name, price, and image are required!',
        },
        { status: 400 }
      );
    }

    // Check if item already exists in cart
    const existingItem = await Cart.findOne({ serviceId });

    if (existingItem) {
      // Update quantity if item exists
      existingItem.quantity += quantity || 1;
      await existingItem.save();

      return NextResponse.json(
        {
          success: true,
          message: 'Cart item quantity updated!',
          cartItem: existingItem,
        },
        { status: 200 }
      );
    }

    // Create new cart item
    const cartItem = await Cart.create({
      serviceId,
      serviceName,
      servicePrice,
      serviceImage,
      quantity: quantity || 1,
    });
    
    return NextResponse.json(
      {
        success: true,
        message: 'Item added to cart!',
        cartItem: cartItem,
      },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('POST Cart Item Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error adding to cart',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE - Clear all cart items
export async function DELETE() {
  try {
    await connectDB();
    
    await Cart.deleteMany({});
    
    return NextResponse.json(
      {
        success: true,
        message: 'Cart cleared successfully!',
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('DELETE Cart Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error clearing cart',
        error: error.message,
      },
      { status: 500 }
    );
  }
}