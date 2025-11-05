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
              Entreprise marocaine spécialisée dans la décoration et finitions en plâtre pour appartements et studios depuis plus de 10 ans.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Nos Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-orange-500 transition">Plafonds décoratifs</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition">Corniches & moulures</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition">Niches & décor mural</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition">Finitions artistiques</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-orange-500 transition">À propos</a></li>
              <li><a href="#portfolio" className="hover:text-orange-500 transition">Réalisations</a></li>
              <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
              <li><a href="#careers" className="hover:text-orange-500 transition">Carrières</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Réseaux sociaux</h4>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/abdlali.ouhmad.5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.406.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.311h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.324V1.325C24 .595 23.406 0 22.675 0z"/>
                </svg>
              </a>

                         
            

              {/* Instagram */}
              <a
                href="https://www.instagram.com/omd.timrdal?igsh=NTRlZGtnejR4amZp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="bg-gray-800 p-3 rounded-lg hover:bg-orange-600 transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.338 3.608 1.312.975.975 1.25 2.243 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.338 2.633-1.312 3.608-.975.975-2.243 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.338-3.608-1.312-.975-.975-1.25-2.243-1.312-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.338-2.633 1.312-3.608.975-.975 2.243-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.603.443 3.635 1.41c-.968.968-1.28 2.14-1.338 3.417C2.013 6.332 2 6.741 2 12s.013 5.668.072 6.948c.058 1.277.37 2.449 1.338 3.417.968.968 2.14 1.28 3.417 1.338C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.058 2.449-.37 3.417-1.338.968-.968 1.28-2.14 1.338-3.417C23.987 17.668 24 17.259 24 12s-.013-5.668-.072-6.948c-.058-1.277-.37-2.449-1.338-3.417-.968-.968-2.14-1.28-3.417-1.338C15.668.013 15.259 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z"/>
                </svg>
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
    </footer>
  );
}
