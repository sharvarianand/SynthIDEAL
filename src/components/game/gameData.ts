
import { Challenge, Character } from "./types";

// Sample challenges for the AI detection game
export const sampleChallenges: Challenge[] = [
  {
    id: 1,
    content: "The neural networks converged after 500 epochs, achieving accuracy of 98.5% on the test set. The hyperparameters were tuned using Bayesian optimization.",
    type: "text",
    isAI: true,
    hint: "This text contains unnaturally consistent statistical patterns in word choice.",
    image: ""
  },
  {
    id: 2,
    content: "The sunset painted the sky with vibrant hues of orange and pink, casting long shadows across the tranquil beach as waves gently lapped at the shore.",
    type: "text",
    isAI: true,
    hint: "This description lacks personal perspective or unique observations.",
    image: ""
  },
  {
    id: 3,
    content: "I couldn't believe what I saw when I opened the door. My entire living room was filled with balloons - some floating, some on the floor. My roommate stood there with a sheepish grin.",
    type: "text",
    isAI: false,
    hint: "This narrative contains natural speech patterns and specific details.",
    image: ""
  },
  {
    id: 4,
    content: "",
    type: "image",
    isAI: true,
    hint: "Look for unnatural symmetry in facial features and background elements.",
    image: "/ai-image-2.jpg"
  },
  {
    id: 5,
    content: "",
    type: "image",
    isAI: false,
    hint: "Natural lighting and subtle imperfections indicate human photography.",
    image: "/ai-image-3.jpg"
  }
];

// Animated character assets
export const characters: Character[] = [
  { 
    name: "Detective Pixel", 
    description: "Your guide to spotting digital patterns", 
    position: "left",
    animation: "floating"
  },
  { 
    name: "Inspector Binary", 
    description: "Expert at finding hidden codes", 
    position: "right",
    animation: "pulse"
  }
];
