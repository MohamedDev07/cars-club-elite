import logo from "@/assets/logo.jpg";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "glass-effect shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={logo} 
              alt="Cars Club Logo" 
              className="h-11 w-11 rounded-xl object-contain transition-transform duration-300 group-hover:scale-110" 
            />
            <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
          </div>
          <span className="font-display text-xl font-bold tracking-wide">
            <span className="neon-text">CARS</span>
            <span className="text-foreground ml-1">CLUB</span>
          </span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "Products", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative text-foreground/70 hover:text-primary transition-all duration-300 text-sm font-medium tracking-wide group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* WhatsApp Button - Desktop */}
          <a 
            href="https://wa.me/201015843591" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 gradient-neon rounded-full font-medium text-sm text-primary-foreground hover:scale-105 transition-transform duration-300 shine-effect"
          >
            <Phone className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2.5 rounded-xl glass-effect text-foreground hover:text-primary transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container mx-auto px-6 py-6 flex flex-col gap-2 glass-effect border-t border-border/50">
          {["Home", "Products", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 py-3 px-4 rounded-xl font-medium" 
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/201015843591" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 px-4 py-3.5 gradient-neon rounded-xl font-semibold text-primary-foreground mt-2"
          >
            <Phone className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
