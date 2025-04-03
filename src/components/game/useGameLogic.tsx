
import { useState, useEffect } from "react";
import { Challenge, Character, ConfidenceOption, GameHistoryItem } from "./types";
import { sampleChallenges, characters } from "./gameData";

export default function useGameLogic() {
  const [currentChallenge, setCurrentChallenge] = useState<Challenge>(sampleChallenges[0]);
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [feedback, setFeedback] = useState<{message: string, correct: boolean} | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [gameHistory, setGameHistory] = useState<GameHistoryItem[]>([]);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [characterMessage, setCharacterMessage] = useState("Ready to play? Let's see if you can tell what's real!");
  const [activeCharacter, setActiveCharacter] = useState<Character>(characters[0]);

  useEffect(() => {
    // Switch characters periodically to make the UI more dynamic
    const interval = setInterval(() => {
      setActiveCharacter(prev => {
        const nextIndex = characters.findIndex(c => c.name === prev.name) === 0 ? 1 : 0;
        return characters[nextIndex];
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    // Update character messages based on game state
    if (feedback) {
      if (feedback.correct) {
        setCharacterMessage("Great job! You've got a keen eye for spotting patterns!");
      } else {
        setCharacterMessage("Don't worry! This is tricky - even experts get fooled sometimes.");
      }
    } else if (hasGuessed) {
      setCharacterMessage("Ready for the next challenge? Let's continue!");
    } else {
      setCharacterMessage("Study the content carefully. What does your intuition tell you?");
    }
  }, [feedback, hasGuessed]);

  const getNextChallenge = () => {
    const remainingChallenges = sampleChallenges.filter(
      challenge => !gameHistory.some(item => item.id === challenge.id)
    );
    
    if (remainingChallenges.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingChallenges.length);
      setCurrentChallenge(remainingChallenges[randomIndex]);
    } else {
      // Reset game if all challenges have been used
      setGameHistory([]);
      const randomIndex = Math.floor(Math.random() * sampleChallenges.length);
      setCurrentChallenge(sampleChallenges[randomIndex]);
    }
    
    setShowHint(false);
    setHasGuessed(false);
    setFeedback(null);
  };

  const handleGuess = (confidence: ConfidenceOption) => {
    if (hasGuessed) return;
    
    let guessedAI = confidence === 'definitely_ai' || confidence === 'probably_ai';
    const isHighConfidence = confidence === 'definitely_ai' || confidence === 'definitely_human';
    
    const isCorrect = guessedAI === currentChallenge.isAI;
    
    // Update score and stats
    if (isCorrect) {
      // Award more points for high confidence correct answers
      const confidenceMultiplier = isHighConfidence ? 2 : 1;
      const pointsEarned = 10 * confidenceMultiplier;
      setScore(prev => prev + pointsEarned);
      setCorrectGuesses(prev => prev + 1);
      setFeedback({
        message: `+${pointsEarned} points! ${currentChallenge.isAI ? 
          "You correctly identified AI-generated content!" : 
          "You correctly identified human-created content!"}`,
        correct: true
      });
    } else {
      setFeedback({
        message: currentChallenge.isAI ? 
          "This was AI-generated. Look for statistical patterns and unnatural consistency." : 
          "This was human-created. Notice the unique perspective and natural variations.",
        correct: false
      });
    }
    
    // Update game history and attempts
    setGameHistory(prev => [...prev, {id: currentChallenge.id, correct: isCorrect}]);
    setTotalAttempts(prev => prev + 1);
    setHasGuessed(true);
  };

  // Calculate success rate
  const successRate = totalAttempts > 0 ? Math.round((correctGuesses / totalAttempts) * 100) : 0;

  return {
    currentChallenge,
    score,
    totalAttempts,
    correctGuesses,
    feedback,
    showHint,
    gameHistory,
    hasGuessed,
    characterMessage,
    activeCharacter,
    successRate,
    getNextChallenge,
    handleGuess,
    setShowHint
  };
}
