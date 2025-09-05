'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-[#134016] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">WhisperCleaning</h3>
                <p className="text-xs text-white/80">Servicii de Curățenie</p>
              </div>
            </Link>
            <p className="text-white/80 mb-6">
              Cu peste 10 ani de experiență, oferim servicii de curățenie profesionale 
              pentru birouri, spații rezidențiale și industriale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviciile Noastre</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/servicii" className="hover:text-white transition-colors">Curățenie Birouri</Link></li>
              <li><Link href="/servicii" className="hover:text-white transition-colors">Curățenie Rezidențială</Link></li>
              <li><Link href="/servicii" className="hover:text-white transition-colors">Curățenie Industrială</Link></li>
              <li><Link href="/servicii" className="hover:text-white transition-colors">Curățenie După Constructor</Link></li>
              <li><Link href="/servicii" className="hover:text-white transition-colors">Întreținere Generală</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Companie</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Despre Noi</Link></li>
              <li><Link href="/proiecte" className="hover:text-white transition-colors">Proiectele Noastre</Link></li>
              <li><Link href="/parteneri" className="hover:text-white transition-colors">Parteneri</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Cariere</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5" />
                <div>
                  <p>+40 712 345 678</p>
                  <p>+40 213 456 789</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 mr-3 mt-0.5" />
                <div>
                  <p>office@WhisperCleaning.ro</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5" />
                <div>
                  <p>Str. Curățeniei Nr. 123</p>
                  <p>Sector 2, București</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 WhisperCleaning. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/politica-confidentialitate" className="text-white/60 hover:text-white text-sm transition-colors">
                Politica de Confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-white/60 hover:text-white text-sm transition-colors">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}