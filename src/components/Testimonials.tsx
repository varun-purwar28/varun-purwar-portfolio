import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Research Supervisor",
      role: "Senior Researcher, iHub Drishti",
      company: "IIT Jodhpur",
      content: "Varun demonstrated exceptional analytical skills during his internship. His ability to process complex biomedical datasets and deliver accurate insights was impressive. His statistical modeling improved our research efficiency significantly.",
      rating: 5
    },
    {
      name: "Prof. Academic Mentor",
      role: "Associate Professor",
      company: "IIT Jodhpur",
      content: "Outstanding student with strong technical foundation in AI and Data Science. Varun's leadership in organizing major college events while maintaining academic excellence shows remarkable time management and organizational skills.",
      rating: 5
    },
    {
      name: "Project Collaborator",
      role: "ML Engineer",
      company: "Tech Startup",
      content: "Worked with Varun on Sanskrit OCR project. His deep learning expertise and problem-solving approach resulted in 85% accuracy improvement. Great team player with excellent communication skills.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Testimonials from colleagues, mentors, and collaborators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-4 right-4 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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

export default Testimonials;