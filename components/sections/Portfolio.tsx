export default function Portfolio() {
  const projects = [
    {
      name: 'Résidence Océan Bleu',
      client: 'Promoteur Immobilier XYZ',
      location: 'Casablanca, Maroc',
      description: 'Complexe résidentiel de luxe avec 120 appartements, piscine et espaces verts.',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg'
    },
    {
      name: 'Centre Commercial Atlas',
      client: 'Groupe Commercial ABC',
      location: 'Rabat, Maroc',
      description: 'Centre commercial moderne de 15 000 m² avec 80 boutiques et restaurants.',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg'
    },
    {
      name: 'Bureaux Tech Hub',
      client: 'Société Tech Solutions',
      location: 'Marrakech, Maroc',
      description: 'Immeuble de bureaux écologique avec certifications environnementales.',
      image: 'https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg'
    },
    {
      name: 'Rénovation Hôtel Imperial',
      client: 'Chaîne Hôtelière Royale',
      location: 'Fès, Maroc',
      description: 'Rénovation complète d\'un hôtel historique avec préservation du patrimoine.',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
    },
    {
      name: 'Pont de la Vallée',
      client: 'Ministère des Infrastructures',
      location: 'Agadir, Maroc',
      description: 'Construction d\'un pont moderne reliant deux quartiers de la ville.',
      image: 'https://images.pexels.com/photos/417273/pexels-photo-417273.jpeg'
    },
    {
      name: 'Villa Moderne Sahara',
      client: 'Client Privé',
      location: 'Tanger, Maroc',
      description: 'Villa contemporaine de 450 m² avec vue panoramique et piscine à débordement.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portfolio de Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre expertise à travers nos réalisations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.name}</h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-orange-600">Client:</span> {project.client}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-orange-600">Localisation:</span> {project.location}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
