import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  const lineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "6rem",
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section id="certificates" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
          >
            <Award className="w-8 h-8 text-primary" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Certifications & Credentials
          </h2>
          
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-1 bg-gradient-primary mx-auto mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Continuous learning and professional development through industry-recognized certifications
          </motion.p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { name: "AI TOOLS WORKSHOP", issuer: "Be10x", year: "Jun 2025", type: "Virtual", color: "bg-blue-500/10 border-blue-500/20" },
            { name: "Deloitte Australia - Data Analytics Job Simulation", issuer: "Forage", year: "Jun 2025", type: "Virtual", color: "bg-green-500/10 border-green-500/20" },
            { name: "Python GUI Programming Recipes Using PyQt5", issuer: "Infosys Springboard", year: "Jun 2023", type: "Virtual", color: "bg-purple-500/10 border-purple-500/20" },
            { name: "Cryptography: Introduction To Cryptography Services", issuer: "Infosys Springboard", year: "Mar 2023", type: "Virtual", color: "bg-orange-500/10 border-orange-500/20" },
            { name: "Data Science For Marketing Analytics", issuer: "Infosys Springboard", year: "Dec 2022", type: "Virtual", color: "bg-pink-500/10 border-pink-500/20" }
          ].map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <Card className={`h-full hover:shadow-elegant transition-all duration-300 border-l-4 border-l-primary backdrop-blur-sm ${cert.color} group-hover:border-primary/40`}>
                <CardContent className="p-6 relative overflow-hidden">
                  {/* Animated background pattern */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 0.1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-2 right-2 w-12 h-12 bg-primary rounded-full"
                  />
                  
                  <div className="relative z-10">
                    <motion.h4 
                      className="font-semibold text-foreground text-sm mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {cert.name}
                    </motion.h4>
                    
                    <p className="text-xs text-muted-foreground mb-3 font-medium">{cert.issuer}</p>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3 text-primary" />
                        <p className="text-xs text-primary font-medium">{cert.year}</p>
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                          {cert.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="hover:bg-primary hover:text-primary-foreground group relative overflow-hidden"
              asChild
            >
              <a href="https://www.linkedin.com/in/varun-purwar-39a384247/" target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="absolute inset-0 bg-gradient-primary opacity-10"
                />
                <span className="relative flex items-center">
                  View All Credentials on LinkedIn
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;