import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, Heart, Coffee } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import upiQR from "@/assets/upi-qr-final.png";

const SupportMe = () => {
  const { toast } = useToast();
  const upiId = "varunpurwar9@okaxis";

  const copyUpiId = () => {
    navigator.clipboard.writeText(upiId);
    toast({
      title: "UPI ID Copied!",
      description: "You can now paste it in your UPI app",
    });
  };

  return (
    <section id="support" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Support My Work
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If you find my projects helpful and would like to support my journey in AI and data science, 
            I'd be grateful for your contribution ☕
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="text-center shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center justify-center gap-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  Buy me a coffee
                  <Coffee className="h-6 w-6 text-amber-600" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 bg-white rounded-lg shadow-lg"
                  >
                    <img 
                      src={upiQR} 
                      alt="UPI QR Code" 
                      className="w-48 h-48 mx-auto"
                    />
                  </motion.div>
                </div>
                
                <div className="space-y-3">
                  <p className="text-muted-foreground">
                    Scan QR code with any UPI app or use UPI ID below:
                  </p>
                  
                  <div className="flex items-center space-x-2 bg-muted p-3 rounded-lg">
                    <code className="flex-1 text-center font-mono text-sm">
                      {upiId}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyUpiId}
                      className="shrink-0"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>💡 Fun fact:</strong> Every cup of coffee fuels hours of coding 
                    and helps me create better AI solutions! Your support means the world to me. 🚀
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportMe;