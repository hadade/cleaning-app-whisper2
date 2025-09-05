'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Calendar, MapPin, X } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'Toate' },
    { id: 'office', name: 'Birouri' },
    { id: 'residential', name: 'Rezidențial' },
    { id: 'industrial', name: 'Industrial' },
    { id: 'construction', name: 'Post-Construcție' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Centrul de Afaceri Downtown',
      category: 'office',
      location: 'București, Sector 1',
      date: '2024',
      description: 'Curățenie completă pentru un centru de afaceri modern cu 15 etaje.',
      beforeImage: 'https://images.pexels.com/photos/7578946/pexels-photo-7578946.jpeg',
      afterImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      video: null,
      gallery: [
        'https://images.pexels.com/photos/7578947/pexels-photo-7578947.jpeg',
        'https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg'
      ]
    },
    {
      id: 2,
      title: 'Vila de Lux Snagov',
      category: 'residential',
      location: 'Snagov, Ilfov',
      date: '2024',
      description: 'Curățenie generală pentru o vilă de 400mp cu piscină și grădină.',
      beforeImage: 'https://images.pexels.com/photos/4239037/pexels-photo-4239037.jpeg',
      afterImage: 'https://images.pexels.com/photos/6782342/pexels-photo-6782342.jpeg',
      video: null,
      gallery: [
        'https://images.pexels.com/photos/6782351/pexels-photo-6782351.jpeg',
        'https://images.pexels.com/photos/4238510/pexels-photo-4238510.jpeg'
      ]
    },
    {
      id: 3,
      title: 'Fabrica de Producție Auto',
      category: 'industrial',
      location: 'Mioveni, Argeș',
      date: '2024',
      description: 'Curățenie industrială pentru o fabrică de producție auto cu suprafața de 10.000mp.',
      beforeImage: 'https://images.pexels.com/photos/5029857/pexels-photo-5029857.jpeg',
      afterImage: 'https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg',
      video: null,
      gallery: [
        'https://images.pexels.com/photos/5029860/pexels-photo-5029860.jpeg',
        'https://images.pexels.com/photos/6169672/pexels-photo-6169672.jpeg'
      ]
    },
    {
      id: 4,
      title: 'Complex Rezidențial NorthPark',
      category: 'construction',
      location: 'Cluj-Napoca',
      date: '2024',
      description: 'Curățenie finală după construcție pentru un complex rezidențial cu 120 apartamente.',
      beforeImage: 'https://images.pexels.com/photos/8553918/pexels-photo-8553918.jpeg',
      afterImage: 'https://images.pexels.com/photos/6782343/pexels-photo-6782343.jpeg',
      video: null,
      gallery: [
        'https://images.pexels.com/photos/8553920/pexels-photo-8553920.jpeg',
        'https://images.pexels.com/photos/6782344/pexels-photo-6782344.jpeg'
      ]
    },
    {
      id: 5,
      title: 'Mall Comercial Plaza',
      category: 'office',
      location: 'Timișoara',
      date: '2024',
      description: 'Curățenie și întreținere pentru cel mai mare mall din vestul țării.',
      beforeImage: 'https://images.pexels.com/photos/6177596/pexels-photo-6177596.jpeg',
      afterImage: 'https://images.pexels.com/photos/6177599/pexels-photo-6177599.jpeg',
      video: null,
      gallery: [
        'https://images.pexels.com/photos/6177597/pexels-photo-6177597.jpeg',
        'https://images.pexels.com/photos/6177598/pexels-photo-6177598.jpeg'
      ]
    },
    {
      id: 6,
      title: 'Apartament Penthouse',
      category: 'residential',
      location: 'București, Sector 2',
      date: '2024',
      description: 'Curățenie de lux pentru un apartament penthouse cu terasă panoramică.',
      beforeImage: 'https://images.pexels.com/photos/4238511/pexels-photo-4238511.jpeg',
      afterImage: 'https://images.pexels.com/photos/6782340/pexels-photo-6782340.jpeg',
      video: null,
      gallery: [
        'https://images.pexels.com/photos/6782341/pexels-photo-6782341.jpeg',
        'https://images.pexels.com/photos/4238512/pexels-photo-4238512.jpeg'
      ]
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Proiectele Noastre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă transformările spectaculoase pe care le realizăm pentru clienții noștri. 
            Fiecare proiect demonstrează angajamentul nostru pentru excelență.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#134016] to-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              <div className="relative">
                <div className="grid grid-cols-2 h-56">
                  <div className="relative">
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Înainte`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                      Înainte
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - După`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      După
                    </div>
                  </div>
                </div>
                {project.video && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="w-6 h-6 text-[#134016]" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.location}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">{project.date}</span>
                </div>
                <p className="text-gray-700 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-gradient-to-r from-[#134016] to-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-auto"
                >
                  Vezi Detaliile
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 bg-gradient-to-r from-[#CECECE] to-[#134016] rounded-2xl p-12 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-white/80">Proiecte Finalizate</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-white/80">mp Curățați</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-white/80">Satisfacție Clienți</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">48h</div>
              <div className="text-white/80">Timp Răspuns</div>
            </div>
          </div>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="font-semibold mb-2">Înainte</h3>
                    <img
                      src={selectedProject.beforeImage}
                      alt="Înainte"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">După</h3>
                    <img
                      src={selectedProject.afterImage}
                      alt="După"
                      className="w-full h-80 object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{selectedProject.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{selectedProject.description}</p>
                </div>
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Galerie Suplimentară</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Galerie ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}