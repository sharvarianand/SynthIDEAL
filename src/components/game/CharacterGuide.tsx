
import { Gamepad, MessageCircle } from "lucide-react";
import { Character } from "./types";

interface CharacterGuideProps {
  activeCharacter: Character;
  message: string;
}

export default function CharacterGuide({ activeCharacter, message }: CharacterGuideProps) {
  return (
    <div className="relative flex items-center p-4 rounded-lg mb-4 bg-gradient-to-r from-purple-600/10 to-violet-400/10 border border-purple-500/20">
      <div className={`h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center ${activeCharacter.animation}`}>
        <div className="h-16 w-16 rounded-full bg-primary/30 flex items-center justify-center text-primary">
          {activeCharacter.position === "left" ? 
            <Gamepad className="h-8 w-8" /> : 
            <MessageCircle className="h-8 w-8" />
          }
        </div>
      </div>
      <div className="ml-4 flex-1">
        <h3 className="font-bold text-lg">{activeCharacter.name}</h3>
        <p className="text-sm text-muted-foreground">{activeCharacter.description}</p>
        <div className="mt-1 text-sm bg-background/80 p-2 rounded-md border border-border animate-fade-in">
          {message}
        </div>
      </div>
    </div>
  );
}
