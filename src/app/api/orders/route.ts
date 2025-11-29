// src/app/api/orders/route.ts
// App Router API - GET all orders & POST new order with validation

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';

// Helper function for contact number validation
function validateContactNumber(contactNumber: string): boolean {
  const cleanNumber = contactNumber.replace(/\s/g, '');
  // Pakistani phone number: 03XX-XXXXXXX or +92-3XX-XXXXXXX or 3XXXXXXXXX
  return /^(03\d{2}-?\d{7}|\+92-?3\d{2}-?\d{7}|3\d{9})$/.test(cleanNumber);
}

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
    const { name, address, contactNumber, serviceName } = body;

    // Validation - Check if all fields are provided
    if (!name || !address || !contactNumber || !serviceName) {
      return NextResponse.json(
        {
          success: false,
          message: 'All fields are required! (Name, Address, Contact Number, Service Name)',
        },
        { status: 400 }
      );
    }

    // Validate name length
    if (name.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name must be at least 3 characters long',
        },
        { status: 400 }
      );
    }

    // Validate address length
    if (address.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: 'Address must be at least 10 characters long',
        },
        { status: 400 }
      );
    }

    // Validate contact number format
    if (!validateContactNumber(contactNumber)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid contact number! Please use format: 03XX-XXXXXXX or +92-3XX-XXXXXXX',
        },
        { status: 400 }
      );
    }

    // Validate service name length
    if (serviceName.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: 'Service name must be at least 3 characters long',
        },
        { status: 400 }
      );
    }

    // Create order
    const order = await Order.create({
      name: name.trim(),
      address: address.trim(),
      contactNumber: contactNumber.trim(),
      serviceName: serviceName.trim(),
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
    
    // Handle Mongoose validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err: any) => err.message);
      return NextResponse.json(
        {
          success: false,
          message: messages.join(', '),
        },
        { status: 400 }
      );
    }
    
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