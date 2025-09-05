'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Shield, Clock, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Servicii de Curățenie
              <span className="bg-gradient-to-r from-[#134016] to-green-600 bg-clip-text text-transparent block">
                Profesionale
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Echipa noastră oferă servicii complete de curățenie pentru birouri, spații comerciale și rezidențiale. 
              Calitate garantată și personal experimentat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#134016] to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Solicită Ofertă Gratuită
              </Link>
              <Link
                href="/servicii"
                className="border-2 border-[#134016] text-[#134016] px-8 py-4 rounded-full font-semibold hover:bg-[#134016] hover:text-white transition-all duration-300 text-center"
              >
                Vezi Serviciile
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-8 h-8 text-[#134016] mx-auto mb-2" />
                <p className="text-sm font-semibold">Asigurat</p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-[#134016] mx-auto mb-2" />
                <p className="text-sm font-semibold">24/7</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-[#134016] mx-auto mb-2" />
                <p className="text-sm font-semibold">Certificat</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg"
                alt="Echipa de curățenie profesională"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-[#CECECE] to-[#134016] rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-green-400 to-[#134016] rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}