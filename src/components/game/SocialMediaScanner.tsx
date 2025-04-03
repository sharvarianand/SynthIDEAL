
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function SocialMediaScanner() {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Social Media Scanner</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm mb-4">
          Scan a social media post to check if it's AI-generated.
        </p>
        <Button className="w-full" onClick={() => navigate('/login')}>
          Scan Post
        </Button>
      </CardContent>
    </Card>
  );
}
