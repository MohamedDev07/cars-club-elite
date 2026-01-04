import logo from "@/assets/logo.jpg";
import { Instagram, Phone, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 glass-effect border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <img 
                src={logo} 
                alt="Cars Club Logo" 
                className="h-12 w-12 rounded-xl object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-xl bg-primary/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
            </div>
            <span className="font-display text-xl font-bold tracking-wide">
              <span className="neon-text">CARS CLUB</span>
            </span>
          </div>

          {/* Contact links */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://wa.me/201015843591", icon: Phone, label: "01015843591" },
              { href: "https://instagram.com/cars.club.eg", icon: Instagram, label: "@cars.club.eg" },
              { href: "https://www.facebook.com/carsclubabdelrahmanamr", icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <a 
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} <span className="text-primary font-medium">Cars Club</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
