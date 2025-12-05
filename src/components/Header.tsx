import logo from "@/assets/logo.jpg";
import { Phone, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Cars Club Logo" 
            className="h-12 w-12 rounded-lg object-contain"
          />
          <span className="font-display text-xl font-bold neon-text">CARS CLUB</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Home
          </a>
          <a href="#products" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Products
          </a>
          <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.me/201015843591" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/50 hover-glow text-primary text-sm font-medium"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
