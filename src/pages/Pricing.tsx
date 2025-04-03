
import { useEffect } from "react";
import { Check, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ChatBot from "@/components/ChatBot";

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic AI content detection for individuals",
    features: [
      "10 AI content detections per day",
      "Basic accuracy level",
      "Text-only analysis",
      "Email support"
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    description: "Advanced features for professionals",
    features: [
      "100 AI content detections per day",
      "High accuracy level",
      "Text & image analysis",
      "API access",
      "Priority support",
      "Export results"
    ],
    buttonText: "Try Pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations with specific needs",
    features: [
      "Unlimited AI content detections",
      "Highest accuracy level",
      "Text, image & audio analysis",
      "Custom API integration",
      "Dedicated support",
      "Team collaboration tools",
      "Custom watermark detection"
    ],
    buttonText: "Contact Sales",
    popular: false
  }
];

export default function Pricing() {
  const navigate = useNavigate();
  
  useEffect(() => {
    document.title = "Pricing - SynthIDEAL";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. All plans include our cutting-edge AI detection technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  plan.popular 
                    ? "border-2 border-primary shadow-lg" 
                    : "border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                <div className="p-6 md:p-8 bg-card">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl md:text-4xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <Button 
                    className="w-full mb-6" 
                    variant={plan.popular ? "default" : "outline"}
                    onClick={() => navigate('/login')}
                  >
                    {plan.buttonText}
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're here to help! Contact our team for custom pricing options or to learn more about how SynthIDEAL can work for your organization.
            </p>
            <Button 
              size="lg" 
              className="group" 
              onClick={() => navigate('/about')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </main>
      <ChatBot />
    </div>
  );
}
