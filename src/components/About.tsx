import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, BarChart3, Brain } from "lucide-react";
import profileImage from "@/assets/varun-profile-real.jpg";

const About = () => {
  const skills = [
    { name: "Python", icon: Code, level: "Expert" },
    { name: "Machine Learning", icon: Brain, level: "Advanced" },
    { name: "SQL", icon: Database, level: "Advanced" },
    { name: "TensorFlow", icon: BarChart3, level: "Intermediate" },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-72 h-72 rounded-full overflow-hidden shadow-elegant border-4 border-primary/20"
              >
                <img 
                  src={profileImage} 
                  alt="Varun Purwar" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-primary rounded-full opacity-20 -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Passionate about AI and solving real-world problems
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Recently completed B.Tech in Artificial Intelligence and Data Science at IIT Jodhpur (2021-2025). 
              I specialize in applying AI and Data Science skills to solve real-world problems through data-driven insights, 
              machine learning, and automation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              During my internship at iHub Drishti, I focused on analyzing biomedical data using statistical and computational techniques. 
              I'm passionate about using technology to solve complex problems and contribute to meaningful research. 
              When not coding, you'll find me leading cultural and technical fests at IIT Jodhpur.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-elegant"
              asChild
            >
              <a href="https://drive.google.com/file/d/17hnEeirmqv9e7-wfNRcbuSPVEwpysrPW/view" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
          </motion.div>

        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Skills & Expertise
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="p-3 bg-gradient-primary rounded-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.level}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < (skill.level === "Expert" ? 5 : skill.level === "Advanced" ? 4 : 3)
                                ? "bg-primary"
                                : "bg-muted"
                            }`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            viewport={{ once: true }}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificates Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Certifications & Credentials
          </h3>
          
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;