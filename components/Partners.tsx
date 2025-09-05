'use client';

import React from 'react';
import { Star, Quote, Building } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: 'Office Center', logo: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg' },
    { name: 'Mall Plaza', logo: 'https://images.pexels.com/photos/6177596/pexels-photo-6177596.jpeg' },
    { name: 'Hotel Luxury', logo: 'https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg' },
    { name: 'Business Park', logo: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg' },
    { name: 'Retail Chain', logo: 'https://images.pexels.com/photos/6177599/pexels-photo-6177599.jpeg' },
    { name: 'Medical Center', logo: 'https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg' }
  ];

  const testimonials = [
    {
      name: 'Maria Popescu',
      position: 'Manager General, Office Center',
      content: 'WhisperCleaning oferă servicii excepționale de curățenie. Echipa lor este profesionistă și de încredere. Recomand cu încredere!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
    },
    {
      name: 'Ion Georgescu',
      position: 'Director, Mall Plaza',
      content: 'Colaborăm cu WhisperCleaning de peste 3 ani și suntem foarte mulțumiți. Calitatea serviciilor este constantă și prețurile corecte.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
    },
    {
      name: 'Ana Dumitrescu',
      position: 'Proprietar, Hotel Luxury',
      content: 'Serviciile de curățenie sunt impecabile. Oaspeții noștri apreciază mereu curățenia și ordinea din hotel.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg'
    },
    {
      name: 'Mihai Ionescu',
      position: 'Administrator, Business Park',
      content: 'Echipa WhisperCleaning este foarte atentă la detalii și respectă întotdeauna termenele. Suntem foarte mulțumiți de colaborare.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg'
    },
    {
      name: 'Elena Stoica',
      position: 'Manager, Retail Chain',
      content: 'Profesionalismul și promptitudinea echipei WhisperCleaning ne-au câștigat încrederea. Servicii de calitate superioară!',
      rating: 5,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      name: 'Radu Popa',
      position: 'Director Medical, Medical Center',
      content: 'În domeniul medical, curățenia este esențială. WhisperCleaning înțelege perfect nevoile noastre și livrează servicii impecabile.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2182976/pexels-photo-2182976.jpeg'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Partenerii Noștri
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem mândri să colaborăm cu companii de top și să primim recenzii excelente pentru serviciile noastre.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Clienții Noștri
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="text-center">
                  <Building className="w-6 h-6 text-[#134016] mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900">{partner.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce Spun Clienții Noștri
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative"
              >
                <Quote className="w-8 h-8 text-[#134016] opacity-20 absolute top-4 right-4" />
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-[#134016] to-green-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-8">Rezultatele Noastre Vorbesc</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Clienți Fideli</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Rată Satisfacție</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Proiecte Complete</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Suport Client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}