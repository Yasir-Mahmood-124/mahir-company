// src/app/api/cart/[id]/route.ts
// Single Cart Item API - GET, PATCH (update quantity), DELETE
// Fixed for Next.js 15 - params is now async

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Cart from '@/models/Cart';
import mongoose from 'mongoose';

// GET - Fetch single cart item by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    // Await params in Next.js 15
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid cart item ID',
        },
        { status: 400 }
      );
    }

    const cartItem = await Cart.findById(id);
    
    if (!cartItem) {
      return NextResponse.json(
        {
          success: false,
          message: 'Cart item not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        cartItem: cartItem,
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('GET Cart Item Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error fetching cart item',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// PATCH - Update cart item quantity
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    // Await params in Next.js 15
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid cart item ID',
        },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { quantity } = body;

    // Validation
    if (quantity === undefined || quantity === null) {
      return NextResponse.json(
        {
          success: false,
          message: 'Quantity is required',
        },
        { status: 400 }
      );
    }

    if (quantity < 1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Quantity must be at least 1',
        },
        { status: 400 }
      );
    }

    if (!Number.isInteger(quantity)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Quantity must be a whole number',
        },
        { status: 400 }
      );
    }

    const cartItem = await Cart.findByIdAndUpdate(
      id,
      { quantity },
      { new: true, runValidators: true }
    );
    
    if (!cartItem) {
      return NextResponse.json(
        {
          success: false,
          message: 'Cart item not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Quantity updated successfully!',
        cartItem: cartItem,
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('PATCH Cart Item Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error updating cart item',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE - Remove item from cart
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    // Await params in Next.js 15
    const { id } = await params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid cart item ID',
        },
        { status: 400 }
      );
    }

    const cartItem = await Cart.findByIdAndDelete(id);
    
    if (!cartItem) {
      return NextResponse.json(
        {
          success: false,
          message: 'Cart item not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Item removed from cart successfully!',
        cartItem: cartItem,
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('DELETE Cart Item Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error removing cart item',
        error: error.message,
      },
      { status: 500 }
    );
  }
}