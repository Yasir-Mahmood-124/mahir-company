// src/models/Order.ts
// Mongoose Order Schema with TypeScript

import mongoose, { Schema, Model } from 'mongoose';
import { IOrder } from '@/types/order';

const OrderSchema = new Schema<IOrder>(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    serviceName: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
    },
    status: {
      type: String,
      default: 'pending',
      enum: ['pending', 'processing', 'completed', 'cancelled'],
    },
  },
  {
    timestamps: true,
  }
);

const Order: Model<IOrder> = 
  mongoose.models.Order || mongoose.model<IOrder>('Order', OrderSchema);

export default Order;