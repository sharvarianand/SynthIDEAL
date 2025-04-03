
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// AI-generated images for showcase
const images = [
  '/ai-image-1.jpg',
  '/ai-image-2.jpg',
  '/ai-image-3.jpg',
  '/ai-image-4.jpg'
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-16 md:py-24 relative overflow-hidden hero-gradient">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Detect the Undetectable{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                  AI Content
                </span>
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-lg">
                SynthIDEAL uses cutting-edge watermarking technology to 
                detect AI-generated content with unprecedented accuracy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" asChild>
                <Link to="/login">
                  Try Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            <div className="pt-4 flex items-center space-x-4 text-sm">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/80" />
                ))}
              </div>
              <p className="text-muted-foreground">
                Trusted by <strong>10,000+</strong> professionals
              </p>
            </div>
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
            <div className="absolute inset-0">
              {images.map((src, i) => (
                <div 
                  key={i} 
                  className="absolute inset-0 transition-opacity duration-1000 rounded-lg overflow-hidden shadow-xl bg-card flex items-center justify-center"
                  style={{ opacity: currentImage === i ? 1 : 0 }}
                >
                  <div className="relative w-full h-full">
                    <img 
                      src={src} 
                      alt={`AI generated content ${i + 1}`} 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 rounded-full bg-aiGenerated animate-pulse" />
                          <span className="text-white text-sm">AI-Generated</span>
                        </div>
                        <span className="text-white/80 text-xs">{i + 1}/{images.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-float" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/30 rounded-full blur-xl animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
