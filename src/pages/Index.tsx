
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FloatingParticles from "@/components/FloatingParticles";
import ChatBot from "@/components/ChatBot";
import AINewsSection from "@/components/AINewsSection";

const Index = () => {
  useEffect(() => {
    document.title = "SynthIDEAL - AI Content Detection";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 relative">
        <FloatingParticles />
        <HeroSection />
        <AINewsSection />
        <ChatBot />
      </main>
    </div>
  );
};

export default Index;
