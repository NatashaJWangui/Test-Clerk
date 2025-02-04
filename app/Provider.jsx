'use client'
import Hero from '@/components/Hero';
import React from 'react';
import { usePathname } from 'next/navigation';

function Provider({children}) {
  const pathname = usePathname(); // Get the current route
  const isHomePage = pathname === '/'; // Check if it's the homepage
  return (
    <div className="flex flex-col min-h-screen">
      {isHomePage && <Hero />}
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}

export default Provider