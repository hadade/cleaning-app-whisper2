'use client';

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contactează-ne
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem aici pentru a răspunde întrebărilor tale și pentru a-ți oferi cea mai bună ofertă pentru serviciile de curățenie.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Solicită Ofertă</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mulțumim!</h3>
                <p className="text-gray-600">Mesajul tău a fost trimis cu succes. Te vom contacta în curând!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume Complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#134016] focus:border-transparent"
                      placeholder="Numele tău"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#134016] focus:border-transparent"
                      placeholder="email@exemplu.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#134016] focus:border-transparent"
                      placeholder="0712 345 678"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviciu de Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#134016] focus:border-transparent"
                    >
                      <option value="">Selectează serviciul</option>
                      <option value="birouri">Curățenie Birouri</option>
                      <option value="rezidential">Curățenie Rezidențială</option>
                      <option value="industrial">Curățenie Industrială</option>
                      <option value="constructor">Curățenie După Constructor</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#134016] focus:border-transparent"
                    placeholder="Descrie nevoile tale de curățenie..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#134016] to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Trimite Mesajul
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-[#134016] to-green-600 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Informații Contact</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Telefon</h3>
                    <p className="text-white/90">+40 712 345 678</p>
                    <p className="text-white/90">+40 213 456 789</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-white/90">office@WhisperCleaning.ro</p>
                    <p className="text-white/90">contact@WhisperCleaning.ro</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresă</h3>
                    <p className="text-white/90">Str. Curățeniei Nr. 123</p>
                    <p className="text-white/90">Sector 2, București</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Program</h3>
                    <p className="text-white/90">Luni - Vineri: 08:00 - 20:00</p>
                    <p className="text-white/90">Weekend: 09:00 - 17:00</p>
                    <p className="text-white/90 text-sm mt-2">Urgențe: 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="font-semibold">Harta cu Locația</p>
                <p className="text-sm">București, Sector 2</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contactare Rapidă</h3>
              <p className="text-gray-600 mb-4">Pentru urgențe sau programări de ultimă oră:</p>
              <div className="space-y-3">
                <a
                  href="tel:+40712345678"
                  className="block w-full bg-green-500 text-white px-4 py-3 rounded-lg font-semibold text-center hover:bg-green-600 transition-colors"
                >
                  Sună Acum: +40 712 345 678
                </a>
                <a
                  href="mailto:office@WhisperCleaning.ro"
                  className="block w-full border border-[#134016] text-[#134016] px-4 py-3 rounded-lg font-semibold text-center hover:bg-[#134016] hover:text-white transition-colors"
                >
                  Trimite Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}