import logo from "@/assets/logo.jpg";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & brand */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Cars Club Logo" 
              className="h-10 w-10 rounded-lg object-contain"
            />
            <span className="font-display text-lg font-bold neon-text">CARS CLUB</span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-sm text-center">
            Premium Car Tuning Parts · BMW · Mercedes · Audi · Porsche
          </p>

          {/* Social */}
          <a 
            href="https://instagram.com/cars.club.eg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-sm">@cars.club.eg</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Cars Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
