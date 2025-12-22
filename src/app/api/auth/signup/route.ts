// import { NextRequest, NextResponse } from 'next/server';
// import connectDB from '@/lib/mongodb';
// import UserModel from '@/models/User';
// import { hashPassword } from '@/lib/auth';
// import { generateToken } from '@/lib/jwt';
// import { AuthResponse } from '@/types/user';

// export async function POST(req: NextRequest) {
//   try {
//     // Connect to database
//     await connectDB();

//     const body = await req.json();
//     const { name, email, password } = body;

//     // Validation
//     if (!name || !email || !password) {
//       return NextResponse.json<AuthResponse>(
//         {
//           success: false,
//           message: 'Name, email and password are all required',
//         },
//         { status: 400 }
//       );
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json<AuthResponse>(
//         {
//           success: false,
//           message: 'Invalid email format',
//         },
//         { status: 400 }
//       );
//     }

//     // Password length check
//     if (password.length < 6) {
//       return NextResponse.json<AuthResponse>(
//         {
//           success: false,
//           message: 'Password must be at least 6 characters long',
//         },
//         { status: 400 }
//       );
//     }

//     // Check if user already exists
//     const existingUser = await UserModel.findOne({ email: email.toLowerCase() });

//     if (existingUser) {
//       return NextResponse.json<AuthResponse>(
//         {
//           success: false,
//           message: 'User already exists with this email',
//         },
//         { status: 400 }
//       );
//     }

//     // Hash password
//     const hashedPassword = await hashPassword(password);

//     // Create new user
//     const newUser = await UserModel.create({
//       name,
//       email: email.toLowerCase(),
//       password: hashedPassword,
//       role: 'user',
//     });

//     // Generate token
//     const token = generateToken(newUser._id.toString(), newUser.email, newUser.role);

//     // Return response
//     return NextResponse.json<AuthResponse>(
//       {
//         success: true,
//         message: 'Signup successful',
//         user: {
//           id: newUser._id.toString(),
//           name: newUser.name,
//           email: newUser.email,
//           role: newUser.role,
//         },
//         token,
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error('Signup error:', error);
//     return NextResponse.json<AuthResponse>(
//       {
//         success: false,
//         message: 'Server error occurred',
//       },
//       { status: 500 }
//     );
//   }
// }