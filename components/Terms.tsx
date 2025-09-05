'use client';

import React from 'react';
import { FileText, AlertCircle, CheckCircle, XCircle, DollarSign, Clock } from 'lucide-react';

export default function Terms() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <FileText className="w-16 h-16 text-[#134016] mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Termeni și Condiții
          </h1>
          <p className="text-xl text-gray-600">
            Condițiile generale de prestare a serviciilor WhisperCleaning
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
              <AlertCircle className="w-6 h-6 mr-2 text-[#134016]" />
              1. Dispoziții generale
            </h2>
            <p className="text-gray-700 mb-6">
              Prezentii Termeni și Condiții reglementează relația contractuală între WhisperCleaning SRL 
              (denumită în continuare "Furnizorul") și clientul care beneficiază de serviciile de curățenie 
              (denumit în continuare "Clientul").
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Serviciile oferite</h2>
            <p className="text-gray-700 mb-4">WhisperCleaning oferă următoarele servicii:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Servicii de curățenie pentru birouri și spații comerciale</li>
              <li>Servicii de curățenie rezidențială</li>
              <li>Servicii de curățenie industrială</li>
              <li>Servicii de curățenie după construcții/renovări</li>
              <li>Servicii de întreținere și menaj</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-green-600" />
              3. Obligațiile furnizorului
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Să presteze serviciile la standardele de calitate agreate</li>
              <li>Să folosească personal calificat și echipamente profesionale</li>
              <li>Să respecte programul stabilit prin contract</li>
              <li>Să mențină confidențialitatea informațiilor clientului</li>
              <li>Să aibă încheiată asigurare de răspundere civilă</li>
              <li>Să înlocuiască sau să repare obiectele deteriorate prin culpa sa</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <AlertCircle className="w-6 h-6 mr-2 text-orange-500" />
              4. Obligațiile clientului
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Să asigure accesul la locațiile unde se prestează serviciile</li>
              <li>Să furnizeze informații corecte despre spațiile de curățat</li>
              <li>Să efectueze plata în termenii stabiliți</li>
              <li>Să anunțe în timp util modificările de program</li>
              <li>Să păstreze în siguranță obiectele de valoare</li>
              <li>Să permită verificarea calității serviciilor prestate</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <DollarSign className="w-6 h-6 mr-2 text-[#134016]" />
              5. Tarife și plăți
            </h2>
            <p className="text-gray-700 mb-4">Condițiile de plată sunt următoarele:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Tarifele sunt stabilite în funcție de tipul și complexitatea serviciului</li>
              <li>Plata se poate face în numerar, prin transfer bancar sau card</li>
              <li>Pentru servicii regulate, plata se face lunar, în avans</li>
              <li>Pentru servicii punctuale, plata se face la finalizarea lucrării</li>
              <li>Întârzierea plății poate atrage penalități de 0.1% pe zi</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Programări și anulări</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Programările se fac cu minimum 24 ore în avans</li>
              <li>Anulările se pot face cu minimum 12 ore înainte</li>
              <li>Anulările tardive pot fi taxate cu 50% din valoarea serviciului</li>
              <li>În cazul de urgențe, se percepe o taxă suplimentară de 30%</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Garanții și reclamații</h2>
            <p className="text-gray-700 mb-4">WhisperCleaning garantează:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Calitatea serviciilor prestate conform standardelor agreate</li>
              <li>Refacerea gratuită a lucrărilor în cazul de deficiențe</li>
              <li>Timpul de răspuns la reclamații: maximum 48 ore</li>
              <li>Compensarea daunelor cauzate prin neglijență</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <XCircle className="w-6 h-6 mr-2 text-red-500" />
              8. Limitări de răspundere
            </h2>
            <p className="text-gray-700 mb-4">Furnizorul nu răspunde pentru:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6">
              <li>Daunele preexistente în spațiile de curățat</li>
              <li>Obiectele de valoare nelăsate în siguranță</li>
              <li>Întârzierea cauzată de forță majoră</li>
              <li>Daunele cauzate de respectarea instrucțiunilor greșite ale clientului</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Rezilierea contractului</h2>
            <p className="text-gray-700 mb-6">
              Contractul poate fi reziliat de oricare dintre părți cu un preaviz de 30 zile. 
              În caz de încălcare gravă a obligațiilor contractuale, rezilierea poate fi imediată.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Soluționarea litigiilor</h2>
            <p className="text-gray-700 mb-6">
              Litigiile se soluționează pe cale amiabilă. În caz de nesoluționare, 
              părțile se vor adresa instanțelor competente din București.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700"><strong>WhisperCleaning SRL</strong></p>
              <p className="text-gray-700"><strong>Email:</strong> office@WhisperCleaning.ro</p>
              <p className="text-gray-700"><strong>Telefon:</strong> +40 712 345 678</p>
              <p className="text-gray-700"><strong>Adresa:</strong> Str. Curățeniei Nr. 123, Sector 2, București</p>
              <p className="text-gray-700"><strong>CUI:</strong> RO12345678</p>
              <p className="text-gray-700"><strong>J40/1234/2020</strong></p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mt-8">
              <p className="text-green-800">
                <strong>Acceptarea termenilor:</strong> Utilizarea serviciilor WhisperCleaning implică 
                acceptarea acestor termeni și condiții. Pentru clarificări suplimentare, 
                ne poți contacta oricând.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}