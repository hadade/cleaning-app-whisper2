'use client';

import React from 'react';
import { Shield, Eye, Lock, UserCheck, FileText, Clock } from 'lucide-react';

export default function Privacy() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Shield className="w-16 h-16 text-[#134016] mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="text-xl text-gray-600">
            Protejarea datelor tale personale este o prioritate pentru noi
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-400 mr-2" />
                <p className="text-sm text-blue-800 font-medium">
                  Ultima actualizare: 1 ianuarie 2024
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2 text-[#134016]" />
              1. Introducere
            </h2>
            <p className="text-gray-700 mb-6">
              WhisperCleaning respectă confidențialitatea datelor tale personale și se angajează să le protejeze 
              în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română în vigoare.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-[#134016]" />
              2. Datele pe care le colectăm
            </h2>
            <p className="text-gray-700 mb-4">Colectăm următoarele tipuri de date personale:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Date de identificare:</strong> nume, prenume, număr de telefon, adresă email</li>
              <li><strong>Date de contact:</strong> adresa postală, informații despre companie</li>
              <li><strong>Date despre servicii:</strong> tipul de servicii solicitate, programările</li>
              <li><strong>Date tehnice:</strong> adresa IP, informații despre browser, cookies</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <UserCheck className="w-6 h-6 mr-2 text-[#134016]" />
              3. Cum folosim datele tale
            </h2>
            <p className="text-gray-700 mb-4">Utilizăm datele personale pentru:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Furnizarea serviciilor de curățenie solicitate</li>
              <li>Comunicarea cu tine în legătură cu serviciile noastre</li>
              <li>Procesarea plăților și facturarea</li>
              <li>Îmbunătățirea calității serviciilor noastre</li>
              <li>Respectarea obligațiilor legale</li>
              <li>Marketing direct (doar cu acordul tău explicit)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2 text-[#134016]" />
              4. Protejarea datelor
            </h2>
            <p className="text-gray-700 mb-6">
              Implementăm măsuri de securitate tehnice și organizatorice pentru a proteja datele tale împotriva 
              accesului neautorizat, modificării, divulgării sau distrugerii. Acestea includ criptarea datelor, 
              controlul accesului și formarea personalului.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Partajarea datelor</h2>
            <p className="text-gray-700 mb-4">Nu vindem, închiriem sau transferăm datele tale personale către terți, cu excepția:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Furnizorilor de servicii cu care colaborăm (processori de plăți, servicii de hosting)</li>
              <li>Autorităților publice, când este obligatoriu prin lege</li>
              <li>În cazul unei fuziuni, achiziții sau transferului de active</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Drepturile tale</h2>
            <p className="text-gray-700 mb-4">În conformitate cu GDPR, ai următoarele drepturi:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li><strong>Dreptul de acces:</strong> să știi ce date avem despre tine</li>
              <li><strong>Dreptul de rectificare:</strong> să corectezi datele inexacte</li>
              <li><strong>Dreptul de ștergere:</strong> să soliciti ștergerea datelor</li>
              <li><strong>Dreptul de restricționare:</strong> să limitezi procesarea datelor</li>
              <li><strong>Dreptul de portabilitate:</strong> să primești datele într-un format structurat</li>
              <li><strong>Dreptul de opoziție:</strong> să te opui procesării datelor</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Website-ul nostru folosește cookies pentru a îmbunătăți experiența de navigare. 
              Poți controla și șterge cookies prin setările browser-ului tău.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Perioada de stocare</h2>
            <p className="text-gray-700 mb-6">
              Păstrăm datele tale personale doar pe perioada necesară îndeplinirii scopurilor pentru care 
              au fost colectate sau conform obligațiilor legale.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
            <p className="text-gray-700 mb-4">
              Pentru întrebări despre această politică sau pentru exercitarea drepturilor tale, 
              ne poți contacta la:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> privacy@WhisperCleaning.ro</p>
              <p className="text-gray-700"><strong>Telefon:</strong> +40 712 345 678</p>
              <p className="text-gray-700"><strong>Adresa:</strong> Str. Curățeniei Nr. 123, Sector 2, București</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
              <p className="text-green-800">
                <strong>Notă:</strong> Această politică poate fi actualizată periodic. 
                Te încurajăm să o verifici regulat pentru a fi la curent cu modificările.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}