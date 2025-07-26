import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, BarChart3, Brain } from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Passionate about AI and solving real-world problems
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently pursuing B.Tech in Artificial Intelligence and Data Science at IIT Jodhpur (2021-2025). 
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
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Skills & Expertise
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <skill.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.level}</p>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < (skill.level === "Expert" ? 5 : skill.level === "Advanced" ? 4 : 3)
                                ? "bg-primary"
                                : "bg-muted"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;