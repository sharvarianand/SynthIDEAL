
import { useState } from "react";
import { Search, User, Menu, X, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-primary to-purple-300 flex items-center justify-center">
              <span className="text-white font-semibold text-sm">S</span>
            </div>
            <span className="ml-2 text-xl font-heading font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              SynthIDEAL
            </span>
          </Link>

          {/* Desktop Navigation - Middle */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <Link to="/pricing" className="nav-item">Pricing</Link>
            <Link to="/about" className="nav-item">About</Link>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className={cn(
                  "py-2 pl-8 pr-4 rounded-md bg-secondary w-40 focus:outline-none focus:ring-2 focus:ring-primary/50 expandSearch",
                  isSearchExpanded && "w-64"
                )}
                onFocus={() => setIsSearchExpanded(true)}
                onBlur={() => setIsSearchExpanded(false)}
              />
              <Search
                size={16}
                className="absolute left-2.5 top-2.5 text-muted-foreground"
              />
            </div>
            <LanguageSelector />
            <ThemeToggle />
            <Button variant="default" className="font-medium" onClick={() => navigate('/login')}>
              Login
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full h-9 w-9 p-0">
                  <User size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/settings')}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/login')}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="pt-4 pb-3 space-y-4 md:hidden fadeIn">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 pl-8 pr-4 rounded-md bg-secondary w-full focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Search
                size={16}
                className="absolute left-2.5 top-2.5 text-muted-foreground"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="px-3 py-2 rounded-md hover:bg-secondary">Home</Link>
              <Link to="/dashboard" className="px-3 py-2 rounded-md hover:bg-secondary">Dashboard</Link>
              <Link to="/pricing" className="px-3 py-2 rounded-md hover:bg-secondary">Pricing</Link>
              <Link to="/about" className="px-3 py-2 rounded-md hover:bg-secondary">About</Link>
              <Link to="/profile" className="px-3 py-2 rounded-md hover:bg-secondary">Profile</Link>
              <Link to="/settings" className="px-3 py-2 rounded-md hover:bg-secondary">Settings</Link>
            </div>
            <div className="flex items-center space-x-2 pt-2 border-t">
              <LanguageSelector />
              <Button variant="default" className="flex-1" onClick={() => navigate('/login')}>Login</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
