
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send, Copy, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function ContentGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Mock user auth check - in a real app, this would check against your auth system
  const isLoggedIn = false;

  const handleGenerate = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // Mock content generation - in a real app, this would call an API
    setTimeout(() => {
      const responses = [
        "Here's a comprehensive analysis of the topic you requested. The key points to consider are the historical context, current trends, and future implications. Experts suggest that this evolution will continue to accelerate in the coming years.",
        "I've analyzed your request and found several interesting perspectives. The main challenge seems to be balancing innovation with practical implementation. Many organizations are exploring new approaches to solve this exact problem.",
        "Based on the latest research, there are three primary factors to consider: economic impact, social dynamics, and technological feasibility. Each of these dimensions offers different opportunities and challenges.",
        "The concept you're asking about has evolved significantly over the past decade. Recent developments have shifted the paradigm in unexpected ways, creating new opportunities for those who understand the underlying principles.",
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setGeneratedContent(randomResponse);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    toast({
      title: "Copied to clipboard",
      description: "The generated content has been copied to your clipboard."
    });
  };

  return (
    <Card className="bg-card border shadow-md">
      <CardHeader className="bg-gradient-to-r from-purple-600/10 to-violet-400/10 pb-4">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-5 w-5 text-primary" />
          Content Generator
        </CardTitle>
        <p className="text-muted-foreground">
          Get AI-powered content for any topic you need
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="relative">
            <Textarea 
              placeholder="Enter your prompt here... (e.g., 'Write a short blog post about sustainable technology')"
              className="min-h-[120px] resize-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Button 
              className="absolute bottom-3 right-3"
              size="sm"
              disabled={!prompt.trim() || isGenerating}
              onClick={handleGenerate}
            >
              {isGenerating ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>

          {generatedContent && (
            <div className="border rounded-md p-4 bg-muted/20 relative">
              <p className="whitespace-pre-line text-foreground">{generatedContent}</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute top-2 right-2"
                onClick={handleCopy}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          )}
          
          {!isLoggedIn && (
            <div className="bg-primary/5 p-4 rounded-md">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">Note:</span> You need to be logged in to generate content. 
                <Button 
                  variant="link" 
                  className="h-auto p-0 pl-1"
                  onClick={() => navigate('/login')}
                >
                  Log in now
                </Button>
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
