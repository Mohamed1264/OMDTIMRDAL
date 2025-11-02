export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partenaire fiable en plâtre, décoration & construction
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              OMD TIMRDAL est une entreprise marocaine spécialisée dans <strong>les travaux du plâtre</strong>,
              la <strong>décoration intérieure et extérieure</strong> ainsi que la <strong>construction et rénovation</strong>.
              Nous mettons notre expertise au service des particuliers et professionnels pour créer des espaces modernes,
              durables et adaptés aux besoins de chaque client.
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Notre Mission</h3>
                <p className="text-gray-600">
                  Offrir des solutions innovantes en plâtrerie et construction tout en garantissant
                  des finitions haut de gamme, le respect des délais et la satisfaction totale du client.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Notre Vision</h3>
                <p className="text-gray-600">
                  Devenir une référence incontournable dans le domaine du plâtre décoratif et
                  de la rénovation au Maroc grâce à notre qualité, expertise et créativité.
                </p>
              </div>

              <div className="border-l-4 border-orange-600 pl-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nos Valeurs</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    Qualité & finitions parfaites
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    Créativité & solutions sur-mesure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    Respect des délais & engagement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
                    Sécurité & durabilité
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
                alt="Travaux du plâtre et décoration"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-orange-600 text-white p-8 rounded-xl shadow-xl">
              <div className="text-5xl font-bold mb-2">1+</div>
              <div className="text-lg">Années d’expérience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
