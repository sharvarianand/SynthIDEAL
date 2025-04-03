
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { 
  User, 
  Mail, 
  Calendar, 
  Star, 
  FileText, 
  ChevronRight, 
  Edit, 
  Shield 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ChatBot from "@/components/ChatBot";

export default function Profile() {
  useEffect(() => {
    document.title = "My Profile - SynthIDEAL";
  }, []);

  // Mock user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joined: "January 2023",
    plan: "Pro",
    usageThisMonth: 87,
    usageLimit: 100,
    recentDetections: [
      { id: 1, name: "Essay Analysis", date: "2 days ago", result: "98% AI" },
      { id: 2, name: "Image Detection", date: "1 week ago", result: "23% AI" },
      { id: 3, name: "Audio Analysis", date: "2 weeks ago", result: "76% AI" }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="md:col-span-1">
              <Card>
                <CardHeader className="pb-0 pt-6 px-6">
                  <div className="flex flex-col items-center">
                    <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <User className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{user.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{user.plan} Plan</p>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{user.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">Joined {user.joined}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium">Usage This Month</h3>
                    <div className="w-full h-2 bg-secondary rounded-full">
                      <div 
                        className="h-2 bg-primary rounded-full" 
                        style={{ width: `${(user.usageThisMonth / user.usageLimit) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {user.usageThisMonth} of {user.usageLimit} detections
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <Button className="w-full" variant="outline">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Account Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Subscription Details</h3>
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium">{user.plan} Subscription</p>
                            <p className="text-sm text-muted-foreground">Renews on May 15, 2023</p>
                          </div>
                          <Button variant="outline" size="sm">Manage</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Account Security</h3>
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Shield className="h-5 w-5 mr-2 text-primary" />
                            <div>
                              <p className="font-medium">Two-factor authentication</p>
                              <p className="text-sm text-muted-foreground">Enhance your account security</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Enable</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Recent Detections</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {user.recentDetections.map(detection => (
                      <div 
                        key={detection.id} 
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                            <FileText className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{detection.name}</p>
                            <p className="text-sm text-muted-foreground">{detection.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="mr-3">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary">
                              {detection.result}
                            </span>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Saved Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-8 border-2 border-dashed rounded-lg border-muted-foreground/20">
                    <div className="text-center">
                      <Star className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <h3 className="font-medium mb-1">No saved reports</h3>
                      <p className="text-sm text-muted-foreground mb-4">Save your detection reports for future reference</p>
                      <Button>Create New Report</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <ChatBot />
    </div>
  );
}
