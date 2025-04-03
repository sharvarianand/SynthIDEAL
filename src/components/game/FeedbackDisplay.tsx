
import { CheckCircle, XCircle } from "lucide-react";

interface FeedbackDisplayProps {
  message: string;
  correct: boolean;
}

export default function FeedbackDisplay({ message, correct }: FeedbackDisplayProps) {
  return (
    <div className={`rounded-lg p-4 mb-6 ${correct ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
      <div className="flex items-start gap-3">
        {correct ? 
          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" /> : 
          <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
        }
        <div>
          <p className={correct ? 'text-green-600 dark:text-green-400 font-medium' : 'text-red-600 dark:text-red-400 font-medium'}>
            {correct ? 'Correct!' : 'Not quite...'}
          </p>
          <p className="text-muted-foreground text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
}
