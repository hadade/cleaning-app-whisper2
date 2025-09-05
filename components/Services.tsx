'use client';

import React, { useState } from 'react';
import { Building2, Home, Warehouse, Car, Sparkles, CheckCircle, Clock, DollarSign } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 0,
      icon: Building2,
      title: 'Curățenie Birouri',
      shortDesc: 'Servicii complete pentru spații comerciale',
      image: 'https://images.pexels.com/photos/7578946/pexels-photo-7578946.jpeg',
      description: 'Oferim servicii complete de curățenie pentru birouri, spații comerciale și clădiri de birouri. Echipa noastră profesionistă asigură un mediu curat și sănătos pentru angajații și clienții tăi.',
      features: [
        'Aspirarea și spălarea podelelor',
        'Curățarea și dezinfectarea birourilor',
        'Golirea coșurilor de gunoi',
        'Curățarea geamurilor interior',
        'Dezinfectarea zonelor comune',
        'Curățarea bucătăriilor și toaletelor'
      ],
      duration: '2-4 ore',
      price: 'De la 150 RON'
    },
    {
      id: 1,
      icon: Home,
      title: 'Curățenie Rezidențială',
      shortDesc: 'Servicii pentru case și apartamente',
      image: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg',
      description: 'Servicii de curățenie rezidențială pentru case și apartamente. Ne ocupăm de toate aspectele curățeniei casei tale, de la camerele de zi până la băi și bucătării.',
      features: [
        'Curățarea tuturor camerelor',
        'Aspirarea și spălarea podelelor',
        'Ștersul prafului și dezinfectarea',
        'Curățarea bucătăriei complet',
        'Curățarea băilor și toaletelor',
        'Schimbarea lenjeriei de pat'
      ],
      duration: '3-6 ore',
      price: 'De la 200 RON'
    },
    {
      id: 2,
      icon: Warehouse,
      title: 'Curățenie Industrială',
      shortDesc: 'Specializați în spații industriale',
      image: 'https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg',
      description: 'Servicii specializate de curățenie industrială pentru fabrici, depozite și spații de producție. Folosim echipamente profesionale și produse specifice industriei.',
      features: [
        'Curățarea spațiilor mari',
        'Echipamente industriale specializate',
        'Curățarea mașinilor și utilajelor',
        'Dezinfectarea zonelor de producție',
        'Eliminarea deșeurilor industriale',
        'Respectarea normelor de siguranță'
      ],
      duration: '4-8 ore',
      price: 'Preț pe măsură'
    },
    {
      id: 3,
      icon: Car,
      title: 'Curățenie După Constructor',
      shortDesc: 'Curățenie finală după renovări',
      image: 'https://images.pexels.com/photos/8553918/pexels-photo-8553918.jpeg',
      description: 'Curățenie specializată după lucrări de construcție sau renovare. Eliminăm praful, resturile de materiale și pregătim spațiul pentru utilizare.',
      features: [
        'Eliminarea prafului de construcție',
        'Curățarea resturilor de materiale',
        'Spălarea completă a suprafețelor',
        'Curățarea geamurilor și oglinzilor',
        'Aspirarea și dezinfectarea',
        'Pregătirea pentru habitare'
      ],
      duration: '1-3 zile',
      price: 'De la 400 RON'
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim servicii complete de curățenie profesională adaptate nevoilor specifice ale fiecărui client.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  selectedService === index
                    ? 'bg-gradient-to-br from-[#134016] to-green-600 text-white shadow-xl'
                    : 'bg-white shadow-md hover:shadow-lg'
                }`}
                onClick={() => setSelectedService(index)}
              >
                <IconComponent className={`w-12 h-12 mb-4 ${
                  selectedService === index ? 'text-white' : 'text-[#134016]'
                }`} />
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className={`text-sm ${
                  selectedService === index ? 'text-white/80' : 'text-gray-600'
                }`}>
                  {service.shortDesc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Service Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                src={services[selectedService].image}
                alt={services[selectedService].title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                {React.createElement(services[selectedService].icon, {
                  className: "w-8 h-8 text-[#134016] mr-3"
                })}
                <h2 className="text-3xl font-bold text-gray-900">
                  {services[selectedService].title}
                </h2>
              </div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                {services[selectedService].description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce Include:</h3>
                <div className="grid gap-3">
                  {services[selectedService].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#134016] mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Durată</div>
                    <div className="font-semibold">{services[selectedService].duration}</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 text-[#134016] mr-2" />
                  <div>
                    <div className="text-sm text-gray-500">Preț</div>
                    <div className="font-semibold">{services[selectedService].price}</div>
                  </div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-[#134016] to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Solicită Ofertă pentru {services[selectedService].title}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}