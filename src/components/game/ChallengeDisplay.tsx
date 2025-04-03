
import { Challenge } from "./types";

interface ChallengeDisplayProps {
  challenge: Challenge;
}

export default function ChallengeDisplay({ challenge }: ChallengeDisplayProps) {
  return (
    <div className="mb-6">
      {challenge.type === "text" ? (
        <div className="bg-muted/40 rounded-lg p-6 text-lg">
          "{challenge.content}"
        </div>
      ) : (
        <div className="aspect-video bg-muted/40 rounded-lg overflow-hidden">
          <img 
            src={challenge.image} 
            alt="Challenge content" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
