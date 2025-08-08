import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, Zap, Trophy } from "lucide-react";

const Extracurricular = () => {
  const activities = [
    {
      title: "Head, Cultural Fest",
      organization: "IGNUS'24, IIT Jodhpur",
      year: "2024",
      icon: Trophy,
      description: "Led 40+ volunteers and managed ₹5 lakh budget for IIT Jodhpur's premier cultural festival. Coordinated with 15+ sponsors and managed stakeholder relationships. Demonstrated leadership, budget management, and project coordination skills directly applicable to data science team management."
    },
    {
      title: "Assistant Head, Sports Fest",
      organization: "VARCHAS'23, IIT Jodhpur",
      year: "2023",
      icon: Award,
      description: "Coordinated logistics for 2000+ participants across 25+ sports events. Managed cross-functional teams and ensured seamless event execution. Developed skills in resource optimization and process management—key competencies for data pipeline management."
    },
    {
      title: "Assistant Head, Technical Fest",
      organization: "Prometeo'23, IIT Jodhpur",
      year: "2023",
      icon: Zap,
      description: "Organized technical competitions and workshops for 1500+ participants. Managed speaker coordination and technical infrastructure. Built expertise in technical communication and stakeholder management essential for client-facing data science roles."
    },
    {
      title: "Assistant Head, Youth Conclave",
      organization: "INAE SERB Youth Conclave, IIT Jodhpur",
      year: "2022",
      icon: Users,
      description: "Coordinated with 20+ industry professionals and 500+ students for prestigious youth conclave. Demonstrated networking abilities and professional communication skills crucial for collaborative data science projects and client engagement."
    }
  ];

  return (
    <section id="extracurricular" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Extracurricular Activities
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and organizational experience at IIT Jodhpur
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                      <activity.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {activity.title}
                      </CardTitle>
                      <p className="text-primary font-semibold mt-1">{activity.organization}</p>
                      <p className="text-sm text-muted-foreground mt-1">{activity.year}</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto bg-gradient-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Academic Achievement
              </h3>
              <p className="text-lg text-muted-foreground">
                Secured a good rank in <span className="text-primary font-semibold">JEE Mains and JEE Advanced</span>, 
                earning admission to the prestigious Indian Institute of Technology Jodhpur
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Extracurricular;