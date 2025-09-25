import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Market", href: "#market" },
    { label: "Revenue", href: "#revenue" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6">
        <div className="mt-6 flex items-center justify-between h-16 rounded-full border border-border/60 bg-background/40 backdrop-blur-2xl px-6 shadow-glow transition-all duration-500 hover:bg-background/55">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero shadow-glow" />
            <span className="text-2xl font-semibold tracking-tight text-foreground">Ranto</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="shadow-glow">
              Get Started
            </Button>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-3 rounded-3xl border border-border/60 bg-background/70 backdrop-blur-xl py-6 px-6 shadow-elegant animate-fade-in">
            <div className="flex flex-col space-y-4 text-sm">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" size="sm" className="mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};