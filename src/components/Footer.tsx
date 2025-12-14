import logo from "@/assets/logo.jpg";
import { Instagram, Phone, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Cars Club Logo" 
              className="h-10 w-10 rounded-lg object-contain"
            />
            <span className="font-display text-lg font-bold">
              <span className="neon-text">CARS CLUB</span>
            </span>
          </div>

          {/* Contact links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://wa.me/201015843591"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              01015843591
            </a>
            <a 
              href="https://instagram.com/cars.club.eg"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Instagram className="h-4 w-4" />
              @cars.club.eg
            </a>
            <a 
              href="https://www.facebook.com/carsclubabdelrahmanamr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <Facebook className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Cars Club
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
