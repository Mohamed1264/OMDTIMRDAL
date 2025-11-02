'use client';

import { useState } from 'react';
import ProjectCard from '../ProjectCard';

export default function FeaturedProjects() {
  const projects = [
    {
      name: 'Villa Moderne Atlas - Projet Résidentiel | OMD Timrdal',
      category: 'Résidentiel',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      alt: 'Villa moderne de luxe au Maroc construite par OMD Timrdal'
    },
    {
      name: 'Centre Commercial Marina - Bureaux & Commerce | OMD Timrdal',
      category: 'Bureaux & Commerce',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg',
      alt: 'Centre commercial moderne réalisé par OMD Timrdal'
    },
    {
      name: 'Rénovation Hôtel Riad - Aménagement & Design | OMD Timrdal',
      category: 'Rénovation & Aménagement',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      alt: 'Projet de rénovation hôtel riad par OMD Timrdal au Maroc'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="featured-projects-title"
    >
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h2
            id="featured-projects-title"
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nos Projets Phares – OMD Timrdal
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Réalisations modernes et innovantes au service de l’architecture au Maroc
          </p>
        </header>

        <div className="relative">
          {/* Desktop */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                category={project.category}
                image={project.image}
                alt={project.alt}
                loading="lazy"
              />
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <ProjectCard
              name={projects[currentIndex].name}
              category={projects[currentIndex].category}
              image={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              loading="lazy"
            />

            <button
              onClick={prevSlide}
              aria-label="Voir le projet précédent"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              aria-label="Voir le projet suivant"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Voir projet ${index + 1}`}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
