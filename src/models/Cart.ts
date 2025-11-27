// src/models/Cart.ts
// Mongoose Cart Schema

import mongoose, { Schema, Model } from 'mongoose';
import { ICartItem } from '@/types/cart';

const CartSchema = new Schema<ICartItem>(
  {
    serviceId: {
      type: Number,
      required: [true, 'Service ID is required'],
    },
    serviceName: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
    },
    servicePrice: {
      type: Number,
      required: [true, 'Service price is required'],
    },
    serviceImage: {
      type: String,
      required: [true, 'Service image is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      default: 1,
      min: [1, 'Quantity must be at least 1'],
    },
  },
  {
    timestamps: true,
  }
);

const Cart: Model<ICartItem> = 
  mongoose.models.Cart || mongoose.model<ICartItem>('Cart', CartSchema);

export default Cart;