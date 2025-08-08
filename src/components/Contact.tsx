import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Instagram, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission and email to varunpurwar9@gmail.com
    const mailtoLink = `mailto:varunpurwar9@gmail.com?subject=Portfolio Contact: ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.open(mailtoLink, '_blank');
    
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:varunpurwar9@gmail.com",
      handle: "varunpurwar9@gmail.com"
    },
    {
      name: "Phone",
      icon: Phone,
      href: "tel:+918824083799",
      handle: "+91 8824083799"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/varun-purwar-39a384247/",
      handle: "/in/varun-purwar-39a384247"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/varun-purwar28",
      handle: "/varun-purwar28"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/varun_purwar_28?igsh=M3p2c2Jkem03YWh3",
      handle: "@varun_purwar_28"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <div className="flex justify-center gap-4 mb-6">
            <a href="https://www.linkedin.com/in/varun-purwar-39a384247/" target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://github.com/varun-purwar28" target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors">
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss how we can work together on your next data project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 shadow-glow"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, collaboration on interesting AI/ML projects, 
                or conversations about data science and artificial intelligence. Feel free to reach out through 
                any of the channels below.
              </p>
            </div>

            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                        <link.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{link.handle}</p>
                      </div>
                    </a>
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

export default Contact;