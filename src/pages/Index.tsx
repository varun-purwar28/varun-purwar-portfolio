import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Extracurricular from "@/components/Extracurricular";
import SupportMe from "@/components/SupportMe";
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
        <SupportMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;