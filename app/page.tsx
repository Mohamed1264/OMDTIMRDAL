import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <FeaturedProjects />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
