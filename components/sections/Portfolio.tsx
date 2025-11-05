export default function Portfolio() {
  const projects = [{
    name: 'Projet Amira Fi Dari',
    client: 'Dakhla Patrimoine',
    location: 'Dakhla, Maroc',
    description: 'Décoration de platre des appartements et studios.',
    image: '/images/amira_fi_dari.webp'
  }]
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
