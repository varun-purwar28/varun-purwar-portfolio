import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & Credentials
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: "AI TOOLS WORKSHOP", issuer: "Be10x", year: "Jun 2025", type: "Virtual" },
            { name: "Deloitte Australia - Data Analytics Job Simulation", issuer: "Forage", year: "Jun 2025", type: "Virtual" },
            { name: "Python GUI Programming Recipes Using PyQt5", issuer: "Infosys Springboard", year: "Jun 2023", type: "Virtual" },
            { name: "Cryptography: Introduction To Cryptography Services", issuer: "Infosys Springboard", year: "Mar 2023", type: "Virtual" },
            { name: "Data Science For Marketing Analytics", issuer: "Infosys Springboard", year: "Dec 2022", type: "Virtual" }
          ].map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground text-sm">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-primary font-medium">{cert.year}</p>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{cert.type}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            variant="outline"
            size="lg"
            className="hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://www.linkedin.com/in/varun-purwar-39a384247/" target="_blank" rel="noopener noreferrer">
              View All Credentials on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Certificates;