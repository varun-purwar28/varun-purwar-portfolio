import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Extracurricular from "@/components/Extracurricular";
import Certificates from "@/components/Certificates";
import Collaborate from "@/components/Collaborate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Extracurricular />
        <Certificates />
        <Collaborate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;