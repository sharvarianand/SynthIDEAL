
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import GameDashboard from "@/components/GameDashboard";
import ContentGenerator from "@/components/ContentGenerator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Dashboard - SynthIDEAL";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 font-heading bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground mb-8">
              Generate content or play our AI detection game to test your skills.
            </p>
            
            <Tabs defaultValue="generator" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="generator">Content Generator</TabsTrigger>
                <TabsTrigger value="game">AI Detection Game</TabsTrigger>
              </TabsList>
              <TabsContent value="generator">
                <ContentGenerator />
              </TabsContent>
              <TabsContent value="game">
                <GameDashboard />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
