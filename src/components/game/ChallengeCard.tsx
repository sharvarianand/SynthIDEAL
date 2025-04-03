
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ChallengeDisplay from "./ChallengeDisplay";
import FeedbackDisplay from "./FeedbackDisplay";
import GuessButtons from "./GuessButtons";
import { Challenge, ConfidenceOption } from "./types";

interface ChallengeCardProps {
  currentChallenge: Challenge;
  score: number;
  successRate: number;
  feedback: { message: string; correct: boolean } | null;
  hasGuessed: boolean;
  showHint: boolean;
  onGuess: (confidence: ConfidenceOption) => void;
  getNextChallenge: () => void;
  setShowHint: (show: boolean) => void;
}

export default function ChallengeCard({
  currentChallenge,
  score,
  successRate,
  feedback,
  hasGuessed,
  showHint,
  onGuess,
  getNextChallenge,
  setShowHint
}: ChallengeCardProps) {
  return (
    <Card className="bg-card border shadow-md overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-600/10 to-violet-400/10 pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="font-bold text-2xl">AI or Human?</CardTitle>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="font-mono flex items-center gap-1">
              <span>Score: {score}</span>
            </Badge>
            <Badge className="bg-primary/80 font-mono">
              Success Rate: {successRate}%
            </Badge>
          </div>
        </div>
        <p className="text-muted-foreground">Analyze the content and decide if it was created by AI or a human</p>
      </CardHeader>
      <CardContent className="p-6">
        <div className="min-h-[200px] flex flex-col justify-between">
          <ChallengeDisplay challenge={currentChallenge} />
          
          {feedback && <FeedbackDisplay message={feedback.message} correct={feedback.correct} />}

          {showHint && !feedback && (
            <div className="rounded-lg p-4 mb-6 bg-primary/10 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-primary">Hint:</span> {currentChallenge.hint}
              </p>
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-4">
            {!hasGuessed ? (
              <GuessButtons onGuess={onGuess} />
            ) : (
              <Button size="lg" className="animate-pulse" onClick={getNextChallenge}>
                Next Challenge
              </Button>
            )}
          </div>
          
          {!hasGuessed && !showHint && (
            <Button variant="ghost" size="sm" className="mt-4 text-muted-foreground" onClick={() => setShowHint(true)}>
              Show Hint
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
