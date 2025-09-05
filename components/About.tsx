'use client';

import React from 'react';
import { Users, Target, Heart, Zap } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Despre WhisperCleaning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cu peste 10 ani de experiență în domeniul curățeniei profesionale, 
            ne-am construit reputația pe baza calității serviciilor și încrederii clienților.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-[#134016] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Echipă Experimentată</h3>
            <p className="text-gray-600">Personal calificat și format continuu pentru standardele cele mai înalte.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <Target className="w-12 h-12 text-[#134016] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Precizie</h3>
            <p className="text-gray-600">Atenție la detalii și rezultate impecabile la fiecare proiect.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 text-[#134016] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Pasiune</h3>
            <p className="text-gray-600">Ne place ceea ce facem și se vede în calitatea serviciilor noastre.</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
            <Zap className="w-12 h-12 text-[#134016] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Eficiență</h3>
            <p className="text-gray-600">Tehnologii moderne și metode eficiente pentru rezultate rapide.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#134016] to-green-600 rounded-2xl p-8 text-white">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Misiunea Noastră</h3>
              <p className="text-lg opacity-90 mb-6">
                Să oferim servicii de curățenie de cea mai înaltă calitate, 
                creând spații curate și sănătoase pentru clienții noștri, 
                folosind cele mai eficiente metode și produse ecologice.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">Clienți Mulțumiți</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-80">Ani Experiență</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-sm opacity-80">Disponibilitate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm opacity-80">Satisfacție</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}