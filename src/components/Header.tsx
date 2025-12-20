import logo from "@/assets/logo.jpg";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Cars Club Logo" className="h-10 w-10 rounded-lg object-contain" />
          <span className="font-display text-lg font-bold text-primary">
            CARS <span className="text-primary">CLUB</span>
          </span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
            Home
          </a>
          <a href="#products" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
            Products
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors text-sm font-medium">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#home" className="text-foreground/70 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#products" className="text-foreground/70 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Products
            </a>
            <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
            <a href="https://wa.me/201015843591" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium">
              <Phone className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </nav>
        </div>}
    </header>;
};
export default Header;