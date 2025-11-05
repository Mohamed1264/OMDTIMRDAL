'use client';

import { useState } from 'react';
import Button from '../Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous reviendrons vers vous dans les plus brefs délais.');
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      projectType: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* SEO + Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez OMD TIMRDAL – Experts en Plâtrerie & Construction au Maroc
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expliquez-nous votre projet et recevez un devis gratuit pour les travaux de plâtrerie, faux plafonds,
            décoration, rénovation et construction au Maroc.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* CONTACT FORM */}
          <div>

            {/* CTA Persuasive */}
            <div className="mb-8 bg-orange-50 border-l-4 border-orange-600 p-4 rounded-lg text-left shadow-sm">
              <p className="text-gray-700">
                🧱 Votre projet mérite des professionnels ! OMD TIMRDAL met à votre service une équipe spécialisée
                dans les travaux de <strong>plâtre, staff, décoration intérieure, rénovation et construction</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600"
                  placeholder="+212 6 XX XX XX XX"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                  Type de projet *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600"
                >
                  <option value="">Sélectionnez un type</option>
                  <option value="platre">Travaux de Plâtre & Staff</option>
                  <option value="decoration">Décoration Intérieure</option>
                  <option value="renovation">Rénovation & Remodelage</option>
                  <option value="construction">Construction Globale</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 resize-none"
                  placeholder="Donnez quelques détails sur votre projet..."
                />
              </div>

              <Button type="submit" className="w-full">
                Demander un devis gratuit
              </Button>

            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-8">

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact & Intervention au Maroc</h3>

              <div className="space-y-6">

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 text-white p-3 rounded-lg">
                    📍
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                    <p className="text-gray-600">
                      Dakhla, Maroc<br />
                      Hay Ennahda 01, Rue Omar Ibn Yasser 117 , Dakhla

                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 cursor-pointer">
                  <div className="bg-orange-600 text-white p-3 rounded-lg">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Téléphone / WhatsApp</h4>
                    <p className="text-gray-600">+212 6 53 12 15 96</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-600 text-white p-3 rounded-lg">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">omdtimrdal@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Horaires</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between"><span>Lun - Ven</span><span className="font-semibold">8h00 - 18h00</span></div>
                <div className="flex justify-between"><span>Samedi</span><span className="font-semibold">9h00 - 14h00</span></div>
                <div className="flex justify-between"><span>Dimanche</span><span className="font-semibold text-orange-600">Fermé</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/212653121596"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg text-lg font-bold hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.52 3.48a11.05 11.05 0 00-15.64 15.64l-1.72 5.99 6.16-1.62a11.05 11.05 0 0011.2-20.01zm-8.6 16.16c-2.16 0-4.3-.63-6.12-1.82l-.44-.27-3.63.95.97-3.54-.28-.45a9.893 9.893 0 0114.92-12.02 9.886 9.886 0 01-5.42 17.25zm5.95-7.87c-.33-.17-1.94-.96-2.24-1.07-.3-.11-.52-.17-.74.17s-.85 1.07-1.04 1.29c-.19.22-.39.25-.72.08-.33-.17-1.38-.51-2.63-1.62-.97-.86-1.63-1.92-1.82-2.25-.19-.33-.02-.51.14-.68.14-.14.33-.36.5-.54.17-.18.22-.33.33-.55.11-.22.06-.41-.03-.58-.09-.17-.74-1.78-1.02-2.45-.27-.64-.55-.55-.75-.56-.19-.01-.41-.01-.63-.01s-.58.09-.88.41c-.3.33-1.14 1.12-1.14 2.72s1.17 3.15 1.33 3.37c.17.22 2.3 3.51 5.58 4.92.78.34 1.38.54 1.85.69.78.25 1.49.21 2.05.13.63-.09 1.94-.79 2.22-1.55.28-.76.28-1.41.2-1.55-.07-.14-.26-.22-.55-.39z"/>
  </svg>
        </svg>
      </a>
    </section>
  );
}
