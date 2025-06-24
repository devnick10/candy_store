import AboutUs from './AboutUs';
import { Contactus } from './Contactus';
import Features from './Features';
import Footer from './Footer';
import HeroSection from './HeroSection';
import { DotPattern } from './magicui/dot-pattern';
import Navbar from './Navbar';
import Process from './Process';
import { Products } from './Products';
import Testimonials from './Testimonials';

export default function LandingPage() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="fixed inset-0 -z-50">
        <DotPattern
          className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"
          size={40}
          radius={1}
        />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Us */}
      <AboutUs />

      {/* Featured Products */}
      <Products />

      {/* Features */}
      <Features />

      {/* Process */}
      <Process />

      {/* Testimonial */}
      <Testimonials />

      {/* Contact Section */}
      <Contactus />

      {/* Footer */}
      <Footer />
    </div>
  );
}
