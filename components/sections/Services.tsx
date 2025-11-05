import Card from '../Card';

export default function Services() {
  const services = [
    {
      title: 'Plafonds décoratifs',
      description: 'Réalisation de plafonds en plâtre avec moulures, rosaces et design sur mesure pour appartements et studios.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16v16H4z" />
        </svg>
      )
    },
    {
      title: 'Corniches et moulures',
      description: 'Création et pose de corniches et moulures en plâtre pour une finition élégante et raffinée des pièces.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      )
    },
    {
      title: 'Niches et décor mural',
      description: 'Décoration murale avec niches en plâtre pour intégrer des éléments lumineux ou décoratifs.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16v12H4z" />
        </svg>
      )
    },
    {
      title: 'Finitions artistiques',
      description: 'Travail sur mesure pour des finitions artistiques et modernes, incluant motifs, reliefs et formes géométriques.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l8 8-8 8-8-8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes en décoration et finitions en plâtre
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
