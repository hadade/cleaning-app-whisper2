'use client';

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CTA from './CTA';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-green-50">
      <Header />
      <main>
        {children}
      </main>
      <CTA />
      <Footer />
    </div>
  );
}