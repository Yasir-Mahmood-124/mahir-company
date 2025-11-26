// src/app/api/orders/route.ts
// App Router API - GET all orders & POST new order

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

// GET - Fetch all orders
export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({
      success: true,
      count: orders.length,
      orders: orders,
    }, { status: 200 });
    
  } catch (error: any) {
    console.error('GET Orders Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error fetching orders',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// POST - Create new order
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    
    const body = await request.json();
    const { name, address, serviceName } = body;

    // Validation
    if (!name || !address || !serviceName) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, address aur service name zaroori hain!',
        },
        { status: 400 }
      );
    }

    // Create order
    const order = await Order.create({
      name,
      address,
      serviceName,
    });
    
    return NextResponse.json(
      {
        success: true,
        message: 'Order successfully placed!',
        order: order,
      },
      { status: 201 }
    );
    
  } catch (error: any) {
    console.error('POST Order Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error creating order',
        error: error.message,
      },
      { status: 500 }
    );
  }
}