import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Analyst",
      company: "TechCorp Solutions",
      location: "New York, NY",
      duration: "Jan 2023 - Present",
      description: [
        "Led data-driven initiatives that increased operational efficiency by 25%",
        "Developed and maintained 15+ Tableau dashboards for executive reporting",
        "Collaborated with cross-functional teams to implement ML models in production",
        "Mentored junior analysts and established best practices for data quality"
      ]
    },
    {
      title: "Data Analyst",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      duration: "Jun 2021 - Dec 2022",
      description: [
        "Built automated ETL pipelines processing 1M+ records daily",
        "Performed A/B testing analysis resulting in 18% conversion rate improvement",
        "Created predictive models for customer lifetime value estimation",
        "Presented insights to stakeholders and influenced strategic decisions"
      ]
    },
    {
      title: "Junior Data Analyst",
      company: "DataInsights Inc",
      location: "Austin, TX",
      duration: "Aug 2020 - May 2021",
      description: [
        "Analyzed customer behavior patterns using SQL and Python",
        "Supported senior analysts in developing machine learning models",
        "Created data visualization reports for various departments",
        "Participated in agile development processes and daily standups"
      ]
    },
    {
      title: "Data Science Intern",
      company: "InnovateAI",
      location: "Boston, MA",
      duration: "May 2020 - Aug 2020",
      description: [
        "Developed proof-of-concept ML models for fraud detection",
        "Conducted exploratory data analysis on large financial datasets",
        "Collaborated with data engineering team on pipeline optimization",
        "Presented final project to executive leadership team"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in data analysis and AI development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
                
                <Card className="ml-20 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {experience.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {experience.duration}
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-semibold">
                      <span className="mr-3">{experience.company}</span>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-4 w-4" />
                        {experience.location}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <ul className="space-y-2">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;