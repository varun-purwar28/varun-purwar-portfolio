import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Lightbulb, Rocket } from "lucide-react";

const Collaborate = () => {
  const collaborationAreas = [
    {
      icon: Target,
      title: "Data Science Projects",
      description: "ML models, predictive analytics, and automated data pipelines for business insights",
      examples: "Healthcare analytics, financial modeling, customer segmentation"
    },
    {
      icon: Lightbulb,
      title: "AI Research",
      description: "Deep learning, computer vision, and NLP solutions for complex challenges",
      examples: "Document digitization, image recognition, text analysis"
    },
    {
      icon: Users,
      title: "Consulting & Training",
      description: "Data strategy consulting and AI/ML training for teams and organizations",
      examples: "Workshop delivery, technical mentoring, implementation guidance"
    },
    {
      icon: Rocket,
      title: "Startup Collaboration",
      description: "Early-stage data infrastructure and AI product development",
      examples: "MVP development, data architecture, proof-of-concept projects"
    }
  ];

  return (
    <section id="collaborate" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Collaborate
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to turn your data challenges into competitive advantages? Let's work together to create AI solutions that drive real business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {collaborationAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="h-full hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-primary rounded-lg">
                      <area.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {area.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="text-sm text-primary/80 italic">
                    Examples: {area.examples}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently available for freelance projects, consulting engagements, and full-time opportunities. 
                Let's discuss how we can leverage data and AI to solve your most pressing challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-glow"
                  asChild
                >
                  <a href="#contact">
                    <Users className="mr-2 h-5 w-5" />
                    Let's Talk
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/17hnEeirmqv9e7-wfNRcbuSPVEwpysrPW/view" target="_blank" rel="noopener noreferrer">
                    View My Work History
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaborate;