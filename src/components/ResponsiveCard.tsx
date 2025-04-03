
import { cn } from "@/lib/utils";

interface ResponsiveCardProps {
  children: React.ReactNode;
  className?: string;
  isAIGenerated?: boolean;
  isHumanContent?: boolean;
}

export default function ResponsiveCard({ 
  children, 
  className,
  isAIGenerated,
  isHumanContent
}: ResponsiveCardProps) {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200 hover:shadow-md",
        isAIGenerated && "border-aiGenerated/30 shadow-aiGenerated/10", 
        isHumanContent && "border-humanContent/30 shadow-humanContent/10",
        className
      )}
    >
      {isAIGenerated && (
        <div className="absolute top-3 right-3 flex items-center space-x-1 px-2 py-1 rounded-full bg-aiGenerated/10 text-aiGenerated">
          <div className="w-2 h-2 rounded-full bg-aiGenerated" />
          <span className="text-xs font-medium">AI Generated</span>
        </div>
      )}
      
      {isHumanContent && (
        <div className="absolute top-3 right-3 flex items-center space-x-1 px-2 py-1 rounded-full bg-humanContent/10 text-humanContent">
          <div className="w-2 h-2 rounded-full bg-humanContent" />
          <span className="text-xs font-medium">Human Content</span>
        </div>
      )}
      
      {children}
    </div>
  );
}
