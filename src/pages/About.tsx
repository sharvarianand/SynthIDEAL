
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Target, Zap } from "lucide-react";
import ChatBot from "@/components/ChatBot";

export default function About() {
  useEffect(() => {
    document.title = "About - SynthIDEAL";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">
              About SynthIDEAL
            </h1>
            <p className="text-lg text-muted-foreground">
              Leading the future of AI content analysis with advanced detection technology.
            </p>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-3xl mx-auto dark:prose-invert">
              <p>
                At SynthIDEAL, we're dedicated to developing innovative solutions that help identify AI-generated content in a world where the line between human and artificial creation is increasingly blurred.
              </p>
              <p>
                Our team of experts in machine learning, digital analysis, and content evaluation has created a sophisticated platform that can detect subtle patterns and signatures hidden within text, images, and audio.
              </p>
              <p>
                We believe in the ethical use of AI and empowering creators, publishers, and consumers with tools to maintain transparency in digital content.
              </p>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">Our Technology</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pattern Analysis</h3>
                  <p className="text-muted-foreground">
                    Our proprietary algorithms can identify patterns and signatures in AI-generated content.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Linguistic Analysis</h3>
                  <p className="text-muted-foreground">
                    We analyze linguistic patterns and statistical anomalies that are characteristic of AI-generated content.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Multi-Modal Analysis</h3>
                  <p className="text-muted-foreground">
                    Our technology works across text, images, and audio to provide comprehensive detection.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { name: "Sharvari Bhondekar", icon: <Code className="h-6 w-6 text-primary" /> },
                { name: "Shruti Gauchandra", icon: <Code className="h-6 w-6 text-primary" /> },
                { name: "Aman Mehtar", icon: <Users className="h-6 w-6 text-primary" /> },
                { name: "Roma Dsouza", icon: <Target className="h-6 w-6 text-primary" /> }
              ].map((member, i) => (
                <Card key={i} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="h-24 w-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                      {member.icon}
                    </div>
                    <h3 className="font-bold">{member.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-violet-400 bg-clip-text text-transparent">Send a Message to Us</h2>
            <p className="mb-6 text-muted-foreground">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <form className="space-y-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border rounded-md bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border rounded-md bg-background"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border rounded-md bg-background resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="button" className="bg-primary text-primary-foreground py-2 px-6 rounded-md hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <ChatBot />
    </div>
  );
}
