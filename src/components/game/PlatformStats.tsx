
import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PlatformStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-primary" />
          Platform Statistics
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-muted-foreground">Global Success Rate</span>
            <span className="font-mono font-medium">76%</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-muted-foreground">Challenges Completed</span>
            <span className="font-mono font-medium">10,642</span>
          </div>
          <div className="flex justify-between items-center pb-2 border-b">
            <span className="text-muted-foreground">AI Content Detected</span>
            <span className="font-mono font-medium">8,291</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Active Users</span>
            <span className="font-mono font-medium">2,184</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
