import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  const { pathname } = request.nextUrl;

  console.log('🔍 Middleware - Path:', pathname);
  console.log('🔍 Middleware - Session exists:', !!session);

  // Dashboard route protection
  if (pathname.startsWith('/dashboard')) {
    // If no session, redirect to home
    if (!session) {
      console.log('❌ No session found, redirecting to login');
      const url = request.nextUrl.clone();
      url.pathname = '/';
      url.searchParams.set('login', 'required');
      return NextResponse.redirect(url);
    }

    // Parse session data
    try {
      const userData = JSON.parse(session);
      
      console.log('✅ Session parsed:', userData);

      // Check if user is admin
      if (userData.role !== 'admin') {
        console.log('❌ Not admin, role:', userData.role);
        const url = request.nextUrl.clone();
        url.pathname = '/';
        url.searchParams.set('error', 'admin-only');
        return NextResponse.redirect(url);
      }

      console.log('✅ Admin verified, allowing access');
      return NextResponse.next();
      
    } catch (error) {
      console.error('❌ Session parse error:', error);
      const url = request.nextUrl.clone();
      url.pathname = '/';
      url.searchParams.set('login', 'required');
      const response = NextResponse.redirect(url);
      response.cookies.delete('session');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};