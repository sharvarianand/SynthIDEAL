
import useGameLogic from "./game/useGameLogic";
import CharacterGuide from "./game/CharacterGuide";
import ChallengeCard from "./game/ChallengeCard";
import PlatformStats from "./game/PlatformStats";
import SocialMediaScanner from "./game/SocialMediaScanner";

export default function GameDashboard() {
  const {
    currentChallenge,
    score,
    feedback,
    showHint,
    hasGuessed,
    characterMessage,
    activeCharacter,
    successRate,
    getNextChallenge,
    handleGuess,
    setShowHint
  } = useGameLogic();

  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="space-y-6">
        {/* Animated Character */}
        <CharacterGuide 
          activeCharacter={activeCharacter} 
          message={characterMessage} 
        />
      
        {/* Challenge Card */}
        <ChallengeCard 
          currentChallenge={currentChallenge}
          score={score}
          successRate={successRate}
          feedback={feedback}
          hasGuessed={hasGuessed}
          showHint={showHint}
          onGuess={handleGuess}
          getNextChallenge={getNextChallenge}
          setShowHint={setShowHint}
        />
        
        {/* Platform Stats Card */}
        <PlatformStats />
        
        {/* Social Media Scanner Card */}
        <SocialMediaScanner />
      </div>
    </div>
  );
}
