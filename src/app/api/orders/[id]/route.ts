// src/app/api/orders/[id]/route.ts
// App Router API - Get single order by ID

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import mongoose from 'mongoose';

// GET - Fetch order by ID
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid order ID',
        },
        { status: 400 }
      );
    }

    const order = await Order.findById(params.id);
    
    if (!order) {
      return NextResponse.json(
        {
          success: false,
          message: 'Order not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        order: order,
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('GET Order By ID Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error fetching order',
        error: error.message,
      },
      { status: 500 }
    );
  }
}