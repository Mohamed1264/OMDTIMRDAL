import Button from '../Button';

export default function HeroWithRegions() {
  const regions = [
    { name: "Dakhla - Oued Eddahab", img: "https://images.pexels.com/photos/3568445/pexels-photo-3568445.jpeg", link: "#dakhla" },
    { name: "Boujdour", img: "https://images.pexels.com/photos/1751279/pexels-photo-1751279.jpeg", link: "#boujdour" },
    { name: "Laâyoune", img: "https://images.pexels.com/photos/3889926/pexels-photo-3889926.jpeg", link: "#laayoune" },
    { name: "Bir Guendouz", img: "https://images.pexels.com/photos/1270167/pexels-photo-1270167.jpeg", link: "#birguendouz" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg')] bg-cover bg-center"></div>
        </div>

        {/* Logo */}
        <div className="relative z-10 mb-8">
          <img src="/logo.png" alt="OMD TIMRDAL" className="w-40 mx-auto" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            OMD TIMRDAL
          </h1>
          <p className="text-2xl md:text-3xl text-orange-500 font-semibold mb-6">
            Construire l'avenir, restaurer le passé
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Solutions de construction et décoration de haute qualité pour projets résidentiels, commerciaux et industriels.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button href="#services">Nos services</Button>
            <Button href="#contact" variant="secondary">Demander un devis</Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Regions Section */}
      <section id="regions" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Nos Zones d’Intervention
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group">
                <div className="h-48 overflow-hidden">
                  <img
                    src={region.img}
                    alt={region.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-800 mb-3">
                    {region.name}
                  </h3>
                  <a
                    href={region.link}
                    className="inline-block bg-orange-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-orange-600 transition"
                  >
                    Découvrir
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
