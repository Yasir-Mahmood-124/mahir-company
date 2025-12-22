import connectDB from './mongodb';
import UserModel from '@/models/User';
import bcrypt from 'bcryptjs';

export async function initializeAdmin() {
  try {
    await connectDB();

    const ADMIN_NAME = process.env.ADMIN_NAME || 'Admin User';
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@example.com';
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

    // Check if admin already exists
    const existingAdmin = await UserModel.findOne({ email: ADMIN_EMAIL });

    if (!existingAdmin) {
      // Hash password
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

      // Create admin user
      await UserModel.create({
        name: ADMIN_NAME,
        email: ADMIN_EMAIL,
        password: hashedPassword,
        role: 'admin',
      });

      console.log('✅ Admin user created successfully!');
    } else {
      console.log('ℹ️ Admin user already exists');
    }
  } catch (error) {
    console.error('❌ Error initializing admin:', error);
  }
}