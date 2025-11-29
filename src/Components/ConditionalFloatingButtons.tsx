'use client';

import { usePathname } from 'next/navigation';
import FloatingContactButtons from '@/Components/floating_contact_buttons';

export default function ConditionalFloatingButtons() {
  const pathname = usePathname();
  
  // Dashboard route pe floating buttons nahi dikhayenge
  if (pathname.startsWith('/dashboard')) {
    return null;
  }
  
  return <FloatingContactButtons />;
}