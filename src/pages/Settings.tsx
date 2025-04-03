
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { 
  Bell, 
  Moon, 
  Sun, 
  Globe, 
  Lock, 
  CreditCard, 
  UserX, 
  DollarSign,
  MessageSquare,
  Eye,
  EyeOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ChatBot from "@/components/ChatBot";

export default function Settings() {
  useEffect(() => {
    document.title = "Settings - SynthIDEAL";
  }, []);

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8">Settings</h1>
          
          <Tabs defaultValue="account" className="space-y-8">
            <TabsList className="mb-4 flex flex-wrap">
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="appearance">Appearance</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="privacy">Privacy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="account">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                          <input 
                            id="firstName" 
                            type="text" 
                            className="w-full px-3 py-2 border rounded-md bg-background"
                            defaultValue="John"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                          <input 
                            id="lastName" 
                            type="text" 
                            className="w-full px-3 py-2 border rounded-md bg-background"
                            defaultValue="Doe"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <input 
                          id="email" 
                          type="email" 
                          className="w-full px-3 py-2 border rounded-md bg-background"
                          defaultValue="john.doe@example.com"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <div className="relative">
                          <input 
                            id="password" 
                            type={showPassword ? "text" : "password"} 
                            className="w-full px-3 py-2 border rounded-md bg-background pr-10"
                            defaultValue="********"
                          />
                          <button 
                            type="button" 
                            className="absolute right-3 top-2.5 text-muted-foreground"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                          </button>
                        </div>
                      </div>
                      
                      <Button type="button">Save Changes</Button>
                    </form>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border border-destructive/20 rounded-lg bg-destructive/5">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium">Delete Account</h3>
                          <p className="text-sm text-muted-foreground">
                            Once you delete your account, there is no going back. This action cannot be undone.
                          </p>
                        </div>
                        <Button variant="destructive" size="sm">
                          <UserX className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="appearance">
              <Card>
                <CardHeader>
                  <CardTitle>Appearance Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Theme</h3>
                        <p className="text-sm text-muted-foreground">Change the theme of the application</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sun className="h-5 w-5 text-muted-foreground" />
                        <Switch id="theme-toggle" />
                        <Moon className="h-5 w-5 text-muted-foreground" />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Language</h3>
                        <p className="text-sm text-muted-foreground">Select your preferred language</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5 text-muted-foreground" />
                        <select className="bg-background border rounded-md px-3 py-1.5">
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-muted-foreground">Receive updates about your account via email</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Product Updates</h3>
                        <p className="text-sm text-muted-foreground">Be notified about new features and improvements</p>
                      </div>
                      <Switch id="product-updates" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Marketing Communications</h3>
                        <p className="text-sm text-muted-foreground">Receive marketing emails and promotions</p>
                      </div>
                      <Switch id="marketing-emails" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <DollarSign className="h-5 w-5 mr-2 text-primary" />
                          <div>
                            <p className="font-medium">Pro Plan</p>
                            <p className="text-sm text-muted-foreground">$19/month</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Change Plan</Button>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-3">Payment Method</h3>
                      <div className="bg-secondary/50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
                            <div>
                              <p className="font-medium">•••• •••• •••• 4242</p>
                              <p className="text-sm text-muted-foreground">Expires 12/25</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Update</Button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-3">Billing History</h3>
                      <div className="border rounded-lg overflow-hidden">
                        <table className="w-full">
                          <thead className="bg-secondary/50">
                            <tr>
                              <th className="text-left p-3 text-sm font-medium">Date</th>
                              <th className="text-left p-3 text-sm font-medium">Amount</th>
                              <th className="text-left p-3 text-sm font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y">
                            <tr>
                              <td className="p-3 text-sm">Apr 15, 2023</td>
                              <td className="p-3 text-sm">$19.00</td>
                              <td className="p-3 text-sm">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400">
                                  Paid
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-3 text-sm">Mar 15, 2023</td>
                              <td className="p-3 text-sm">$19.00</td>
                              <td className="p-3 text-sm">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-400">
                                  Paid
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <Lock className="h-4 w-4 mr-2" />
                        Enable
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Data Usage</h3>
                        <p className="text-sm text-muted-foreground">Allow us to use your data for service improvements</p>
                      </div>
                      <Switch id="data-usage" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <h3 className="font-medium">Usage History</h3>
                        <p className="text-sm text-muted-foreground">Store your AI detection history for future reference</p>
                      </div>
                      <Switch id="usage-history" defaultChecked />
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-2">
                      <h3 className="font-medium">Chat History</h3>
                      <p className="text-sm text-muted-foreground">Manage your chat history with our AI assistants</p>
                      <div className="mt-2 p-4 border rounded-lg bg-secondary/50">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <MessageSquare className="h-5 w-5 mr-2 text-muted-foreground" />
                            <span className="text-sm">You have 23 saved conversations</span>
                          </div>
                          <Button variant="outline" size="sm">Clear History</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <ChatBot />
    </div>
  );
}
