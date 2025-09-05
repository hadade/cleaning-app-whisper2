'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#134016] to-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Ai Nevoie de Servicii de Curățenie?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Contactează-ne acum pentru o ofertă gratuită și personalizată. 
          Echipa noastră este pregătită să îți ofere servicii de cea mai înaltă calitate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-[#134016] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Solicită Ofertă Gratuită
          </Link>
          <a
            href="tel:+40712345678"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#134016] transition-all duration-300 flex items-center justify-center"
          >
            <Phone className="w-5 h-5 mr-2" />
            Sună Acum: +40 712 345 678
          </a>
        </div>
      </div>
    </section>
  );
}