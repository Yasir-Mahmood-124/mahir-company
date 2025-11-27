// src/app/api/cart/[id]/route.ts
// Single Cart Item API - GET, PATCH (update quantity), DELETE

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Cart from '@/models/Cart';
import mongoose from 'mongoose';

// GET - Fetch single cart item by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid cart item ID',
        },
        { status: 400 }
      );
    }

    const cartItem = await Cart.findById(params.id);
    
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
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
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

    if (!quantity || quantity < 1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Valid quantity is required',
        },
        { status: 400 }
      );
    }

    const cartItem = await Cart.findByIdAndUpdate(
      params.id,
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
        message: 'Quantity updated!',
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
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid cart item ID',
        },
        { status: 400 }
      );
    }

    const cartItem = await Cart.findByIdAndDelete(params.id);
    
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
        message: 'Item removed from cart!',
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