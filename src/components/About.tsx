import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Code, Database, BarChart3, Brain } from "lucide-react";
import profileImage from "/PassPortPhoto.jpg";

const About = () => {
  const skillCategories = {
    "Programming & ML": [
      { name: "Python", icon: Code, evidence: "3 years, 12+ projects including deep learning & NLP" },
      { name: "Machine Learning", icon: Brain, evidence: "Scikit-learn, TensorFlow, 15% accuracy improvement" },
    ],
    "Data & Analytics": [
      { name: "SQL & Databases", icon: Database, evidence: "MySQL, PostgreSQL, 1M+ records processed" },
      { name: "Data Visualization", icon: BarChart3, evidence: "Power BI, Matplotlib, executive dashboards" },
    ]
  };

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
              From Data Complexity to Real-World Impact
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>The Challenge:</strong> In today's data-driven world, organizations struggle to extract meaningful insights from complex datasets. 
              During my B.Tech in AI & Data Science at IIT Jodhpur (2021-2025), I discovered my passion for bridging this gap between raw data and actionable intelligence.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>My Approach:</strong> At iHub Drishti, I processed and analyzed <strong>1M+ biomedical data points</strong>, improving wound healing assessment accuracy by <strong>15%</strong> using Python, statistical modeling, and machine learning algorithms. This experience taught me to transform complex datasets into clear, decision-ready insights.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              <strong>Beyond Code:</strong> Leadership runs through my DNA. I've led <strong>40+ volunteers</strong> in cultural fests, managed <strong>₹5 lakh budgets</strong>, and coordinated with <strong>15+ sponsors</strong> — skills that translate directly to stakeholder management and project coordination in data science roles.
              <br/><br/>
              <strong>Next Goal:</strong> Seeking opportunities to leverage AI for healthcare, finance, and automation where data science can create measurable business impact.
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
          
          <div className="space-y-8">
            {Object.entries(skillCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <div className="w-4 h-4 bg-gradient-primary rounded mr-3" />
                  {category}
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <motion.div 
                              className="p-3 bg-gradient-primary rounded-lg"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              <skill.icon className="h-6 w-6 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-foreground mb-1">{skill.name}</h5>
                              <p className="text-sm text-muted-foreground leading-relaxed">{skill.evidence}</p>
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