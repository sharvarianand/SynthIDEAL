
import { Button } from "@/components/ui/button";
import { ConfidenceOption } from "./types";

interface GuessButtonsProps {
  onGuess: (confidence: ConfidenceOption) => void;
}

export default function GuessButtons({ onGuess }: GuessButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-3">
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full bg-aiGenerated/10 hover:bg-aiGenerated/20 border-aiGenerated/30"
          onClick={() => onGuess('definitely_ai')}
        >
          Definitely AI
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full bg-aiGenerated/5 hover:bg-aiGenerated/10 border-aiGenerated/20"
          onClick={() => onGuess('probably_ai')}
        >
          Probably AI
        </Button>
      </div>
      <div className="space-y-3">
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full bg-humanContent/10 hover:bg-humanContent/20 border-humanContent/30"
          onClick={() => onGuess('definitely_human')}
        >
          Definitely Human
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full bg-humanContent/5 hover:bg-humanContent/10 border-humanContent/20"
          onClick={() => onGuess('probably_human')}
        >
          Probably Human
        </Button>
      </div>
    </div>
  );
}
