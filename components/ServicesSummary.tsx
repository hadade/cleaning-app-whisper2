'use client';

import React from 'react';
import Link from 'next/link';
import { Building2, Home, Warehouse, Car, ChevronRight } from 'lucide-react';

export default function ServicesSummary() {
  const services = [
    {
      icon: Building2,
      title: 'Curățenie Birouri',
      description: 'Servicii complete de curățenie pentru spații comerciale și birouri.',
      image: 'https://images.pexels.com/photos/7578946/pexels-photo-7578946.jpeg'
    },
    {
      icon: Home,
      title: 'Curățenie Rezidențială',
      description: 'Curățenie profesională pentru case și apartamente.',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg'
    },
    {
      icon: Warehouse,
      title: 'Curățenie Industrială',
      description: 'Servicii specializate pentru spații industriale și depozite.',
      image: 'https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg'
    },
    {
      icon: Car,
      title: 'Curățenie După Constructor',
      description: 'Curățenie finală după lucrări de construcții și renovări.',
      image: 'https://images.pexels.com/photos/8553918/pexels-photo-8553918.jpeg'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferim o gamă completă de servicii de curățenie adaptate nevoilor tale specifice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#134016] to-green-600 rounded-full flex items-center justify-center mr-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex items-center text-[#134016] font-semibold group-hover:text-green-600 transition-colors">
                    <span>Află mai multe</span>
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/servicii"
            className="inline-flex items-center bg-gradient-to-r from-[#134016] to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Vezi Toate Serviciile
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}