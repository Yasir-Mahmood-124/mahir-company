// src/models/Order.ts
// MongoDB Schema for Order with Contact Number

import mongoose, { Schema, model, models } from 'mongoose';

const OrderSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [3, 'Name must be at least 3 characters long'],
      maxlength: [100, 'Name cannot exceed 100 characters'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
      minlength: [10, 'Address must be at least 10 characters long'],
      maxlength: [500, 'Address cannot exceed 500 characters'],
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required'],
      trim: true,
      validate: {
        validator: function(v: string) {
          // Pakistani phone number validation: 03XX-XXXXXXX or +92-3XX-XXXXXXX
          return /^(03\d{2}-?\d{7}|\+92-?3\d{2}-?\d{7}|3\d{9})$/.test(v.replace(/\s/g, ''));
        },
        message: 'Please provide a valid Pakistani contact number (e.g., 03XX-XXXXXXX or +92-3XX-XXXXXXX)',
      },
    },
    serviceName: {
      type: String,
      required: [true, 'Service name is required'],
      trim: true,
      minlength: [3, 'Service name must be at least 3 characters long'],
      maxlength: [200, 'Service name cannot exceed 200 characters'],
    },
    status: {
      type: String,
      enum: ['pending', 'processing', 'completed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Order = models.Order || model('Order', OrderSchema);

export default Order;