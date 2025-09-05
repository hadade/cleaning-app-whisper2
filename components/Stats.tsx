'use client';

import React from 'react';

export default function Stats() {
  const stats = [
    { number: '500+', label: 'Clienți Mulțumiți' },
    { number: '1000+', label: 'Proiecte Finalizate' },
    { number: '10+', label: 'Ani Experiență' },
    { number: '24/7', label: 'Suport Client' }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#CECECE] to-[#134016]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}