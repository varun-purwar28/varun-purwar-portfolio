import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import heroImage from "@/assets/hero-clean.jpg";

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-20" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I turn complex data into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              clear decisions
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Blending AI, analytics, and automation to solve real-world challenges
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            B.Tech AI & Data Science graduate from IIT Jodhpur • Processed 1M+ data points • Seeking opportunities in healthcare, finance & automation
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-xl font-semibold rounded-full shadow-glow border-2 border-primary"
                onClick={scrollToNext}
              >
                Explore My Work
                <ArrowDown className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
            
            <Button 
              variant="outline"
              size="lg"
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              asChild
            >
              <a href="https://drive.google.com/file/d/17hnEeirmqv9e7-wfNRcbuSPVEwpysrPW/view" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;