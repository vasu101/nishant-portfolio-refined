import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TechCarousel from "@/components/TechCarousel";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#F7F7F7] text-gray-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <TechCarousel />
      <About />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
