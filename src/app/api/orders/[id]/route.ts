// src/app/api/orders/[id]/route.ts
// App Router API - Get, Update, Delete single order by ID

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Order from '@/models/Order';
import mongoose from 'mongoose';

// Helper function for contact number validation
function validateContactNumber(contactNumber: string): boolean {
  const cleanNumber = contactNumber.replace(/\s/g, '');
  return /^(03\d{2}-?\d{7}|\+92-?3\d{2}-?\d{7}|3\d{9})$/.test(cleanNumber);
}

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

// PATCH - Update order (including status update)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    // Await params in Next.js 15
    const { id } = await params;
    
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid order ID',
        },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { name, address, contactNumber, serviceName, status } = body;

    // Find existing order
    const existingOrder = await Order.findById(id);
    if (!existingOrder) {
      return NextResponse.json(
        {
          success: false,
          message: 'Order not found',
        },
        { status: 404 }
      );
    }

    // Validate fields if provided
    if (name !== undefined && name.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name must be at least 3 characters long',
        },
        { status: 400 }
      );
    }

    if (address !== undefined && address.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          message: 'Address must be at least 10 characters long',
        },
        { status: 400 }
      );
    }

    if (contactNumber !== undefined && !validateContactNumber(contactNumber)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid contact number! Please use format: 03XX-XXXXXXX or +92-3XX-XXXXXXX',
        },
        { status: 400 }
      );
    }

    if (serviceName !== undefined && serviceName.trim().length < 3) {
      return NextResponse.json(
        {
          success: false,
          message: 'Service name must be at least 3 characters long',
        },
        { status: 400 }
      );
    }

    if (status !== undefined && !['pending', 'processing', 'completed', 'cancelled'].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid status! Must be: pending, processing, completed, or cancelled',
        },
        { status: 400 }
      );
    }

    // Update order
    const updateData: any = {};
    if (name !== undefined) updateData.name = name.trim();
    if (address !== undefined) updateData.address = address.trim();
    if (contactNumber !== undefined) updateData.contactNumber = contactNumber.trim();
    if (serviceName !== undefined) updateData.serviceName = serviceName.trim();
    if (status !== undefined) updateData.status = status;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Order updated successfully!',
        order: updatedOrder,
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('PATCH Order Error:', error);
    
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
        message: 'Server error updating order',
        error: error.message,
      },
      { status: 500 }
    );
  }
}

// DELETE - Delete order by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();
    
    // Await params in Next.js 15
    const { id } = await params;
    
    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid order ID',
        },
        { status: 400 }
      );
    }

    const order = await Order.findByIdAndDelete(id);
    
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
        message: 'Order deleted successfully!',
        order: order,
      },
      { status: 200 }
    );
    
  } catch (error: any) {
    console.error('DELETE Order Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Server error deleting order',
        error: error.message,
      },
      { status: 500 }
    );
  }
}