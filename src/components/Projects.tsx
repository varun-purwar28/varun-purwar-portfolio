import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1Image from "@/assets/project1.jpg";
import project2Image from "@/assets/project2.jpg";
import project3Image from "@/assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sanskrit Text Recognition & Translation",
      challenge: "Ancient Sanskrit documents are digitally inaccessible due to complex script recognition challenges",
      approach: "Built an unsupervised deep learning pipeline using CNN + RNN architecture with transfer learning",
      result: "Achieved 94% character recognition accuracy, enabling automatic digitization of 1000+ Sanskrit manuscripts",
      image: project1Image,
      technologies: ["Python", "TensorFlow", "Computer Vision", "NLP", "Transfer Learning"],
      keywords: "Deep Learning, OCR, Sanskrit NLP, Cultural Heritage AI",
      github: "https://github.com/varun-purwar28",
      demo: "https://docs.google.com/document/d/1OTDnJBxFwmkkEHuvdMHdSFnI4ypqCv4ptWZwdWhO3q8/edit?tab=t.0"
    },
    {
      title: "House Price Prediction Model",
      challenge: "Real estate firms struggled with 25% pricing errors due to manual valuation methods",
      approach: "Developed gradient boosting model using 50+ features including location, amenities, and market trends",
      result: "Achieved 92% R² score, enabling 18% improvement in pricing accuracy for real estate clients",
      image: project2Image,
      technologies: ["Python", "XGBoost", "Pandas", "Feature Engineering", "EDA"],
      keywords: "Predictive Modeling, Real Estate Analytics, Regression Analysis",
      github: "https://github.com/varun-purwar28",
      demo: "https://colab.research.google.com/drive/1ZiCmBbrFv5yEetPRrD9ZoY9vdKu-f6-r"
    },
    {
      title: "Pulsar Star Classification",
      challenge: "Detecting rare pulsar stars from massive astronomical datasets with 99.8% noise ratio",
      approach: "Applied ensemble learning with Random Forest and SVM on UCI pulsar dataset using signal processing features",
      result: "Achieved 98.2% precision in pulsar detection, reducing false positives by 60% compared to traditional methods",
      image: project3Image,
      technologies: ["Python", "Scikit-learn", "Random Forest", "SVM", "Signal Processing"],
      keywords: "Astronomy Data Mining, Classification, Ensemble Learning, Anomaly Detection",
      github: "https://github.com/varun-purwar28",
      demo: "https://kaggle.com/varunpurwar28"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore some of my recent work in data analysis, machine learning, and business intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
              whileHover={{ scale: 1.03 }}
            >
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-red-600">Challenge:</span>
                      <span className="text-muted-foreground ml-2">{project.challenge}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-blue-600">Approach:</span>
                      <span className="text-muted-foreground ml-2">{project.approach}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-green-600">Result:</span>
                      <span className="text-muted-foreground ml-2">{project.result}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-xs text-muted-foreground italic">
                    Keywords: {project.keywords}
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {project.title.includes("Sanskrit") ? "Report" : "Demo"}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;