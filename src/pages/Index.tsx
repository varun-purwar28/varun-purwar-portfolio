import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Extracurricular from "@/components/Extracurricular";
import Certificates from "@/components/Certificates";
import SupportMe from "@/components/SupportMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Extracurricular />
        <Certificates />
        <Testimonials />
        <SupportMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;