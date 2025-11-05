'use client';

import { Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import Button from '../Button';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-label="Pied de page OMD Timrdal">
      
      {/* Section CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construisons l’avenir du Maroc, ensemble
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Contactez OMD TIMRDAL pour une étude et un devis gratuits
          </p>
          <Button href="#contact" variant="secondary">
            Demander un devis gratuit
          </Button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">

          {/* Branding */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-500">
              OMD TIMRDAL
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Entreprise marocaine spécialisée dans la construction, rénovation et aménagement depuis plus de 10 ans.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Nos Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-orange-500 transition">Construction résidentielle</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition">Construction commerciale</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition">Rénovation & Aménagement</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition">Études & Ingénierie</a></li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-orange-500 transition">À propos</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500 transition">Réalisations</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
              <li><a href="#careers" className="hover:text-orange-500 transition">Carrières</a></li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Réseaux sociaux</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition">
                <Facebook className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition">
                <Linkedin className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} OMD TIMRDAL. Tous droits réservés.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/212653121596"
        target="_blank"
        aria-label="Contact WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </footer>
  );
}
