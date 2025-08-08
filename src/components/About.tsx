import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, BarChart3, Brain } from "lucide-react";
import profileImage from "/PassPortPhoto.jpg";

const About = () => {
  const skillCategories = [
    {
      title: "Programming & ML",
      skills: [
        { name: "Python", icon: Code, description: "4+ years, 15+ projects including deep learning, NLP, and data pipelines" },
        { name: "Machine Learning", icon: Brain, description: "Scikit-learn, TensorFlow, PyTorch for classification, regression, and neural networks" },
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: "SQL & Databases", icon: Database, description: "MySQL, PostgreSQL for complex queries and data warehouse management" },
        { name: "Data Visualization", icon: BarChart3, description: "Power BI, Matplotlib, Seaborn for interactive dashboards and insights" },
      ]
    }
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
              From Complex Problems to Clear Solutions
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>The Challenge:</strong> Healthcare and research organizations struggle with vast amounts of unstructured biomedical data that takes weeks to analyze manually.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>My Approach:</strong> During my B.Tech in AI & Data Science at IIT Jodhpur (2021-2025), I specialized in developing automated data pipelines and ML models. At iHub Drishti, I processed and analyzed 1M+ biomedical data points, improving wound healing assessment accuracy by 15%.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <strong>The Impact:</strong> My solutions reduced analysis time by 40% while maintaining 95%+ accuracy. Beyond academics, I've led 40+ volunteers in cultural and technical fests, managing ₹5 lakh budgets and coordinating with 15+ sponsors — skills that translate directly to project management and stakeholder communication in data science roles.
            </p>
            <p className="text-primary font-medium mb-8">
              Now seeking opportunities to leverage AI for healthcare, finance, and automation — turning data challenges into business advantages.
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
            Technical Expertise
          </h3>
          
          <div className="space-y-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">{category.title}</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <motion.div 
                              className="p-3 bg-gradient-primary rounded-lg flex-shrink-0"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <skill.icon className="h-6 w-6 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-foreground mb-2">{skill.name}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;