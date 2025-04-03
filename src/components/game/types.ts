
export interface Challenge {
  id: number;
  content: string;
  type: "text" | "image";
  isAI: boolean;
  hint: string;
  image: string;
}

export interface GameHistoryItem {
  id: number;
  correct: boolean;
}

export interface Character {
  name: string;
  description: string;
  position: "left" | "right";
  animation: "floating" | "pulse";
}

export type ConfidenceOption = 'definitely_ai' | 'probably_ai' | 'probably_human' | 'definitely_human';
