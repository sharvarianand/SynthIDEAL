
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm SynthIDEAL Assistant. How can I help you with AI content detection today?",
      isBot: true
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    const userMessageId = Date.now();
    setMessages(prev => [...prev, { id: userMessageId, text: newMessage, isBot: false }]);
    setNewMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "SynthIDEAL uses advanced watermarking detection to identify AI-generated content.",
        "Our technology can detect content from popular AI models with over 90% accuracy.",
        "You can upload text, images, or audio files for analysis on our dashboard.",
        "The free tier allows up to 5 analyses per day, while premium plans offer unlimited usage.",
        "Try our AI detection game to test your skills at spotting AI-generated content!",
        "Feel free to ask any other questions about our AI detection technology!"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { id: userMessageId + 1, text: randomResponse, isBot: true }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat toggle button */}
      <Button
        onClick={toggleChat}
        className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <div className="relative">
          <MessageCircle className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse"></span>
        </div>
      </Button>

      {/* Chat window */}
      <div 
        className={`bg-card rounded-lg shadow-xl overflow-hidden transition-all duration-300 flex flex-col
          ${isOpen ? 'opacity-100 scale-100 h-96 w-80 sm:w-96' : 'opacity-0 scale-75 h-0 w-0'}`}
      >
        {/* Chat header */}
        <div className="bg-primary p-4 flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/assistant-avatar.png" alt="AI Assistant" />
              <AvatarFallback className="bg-primary-foreground text-primary text-xs">AI</AvatarFallback>
            </Avatar>
            <span className="font-medium text-primary-foreground">SynthIDEAL Assistant</span>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 text-primary-foreground hover:text-primary-foreground/80"
            onClick={toggleChat}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              {message.isBot && (
                <Avatar className="h-8 w-8 mr-2 self-end">
                  <AvatarImage src="/assistant-avatar.png" alt="AI Assistant" />
                  <AvatarFallback className="bg-primary-foreground text-primary text-xs">AI</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg 
                  ${message.isBot ? 'bg-secondary text-foreground' : 'bg-primary text-primary-foreground'}`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Chat input */}
        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={!newMessage.trim()}
              size="icon"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
