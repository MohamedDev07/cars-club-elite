import logo from "@/assets/logo.jpg";
import { Instagram, Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Cars Club Logo" 
                className="h-10 w-10 rounded-lg object-contain"
              />
              <span className="font-display text-lg font-bold text-foreground">
                CARS <span className="text-primary">CLUB</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium car tuning parts for BMW, Mercedes, Audi, and Porsche. Quality guaranteed with nationwide shipping.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Home</a>
              <a href="#products" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Products</a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors text-sm">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/201015843591"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                +20 10 15843591
              </a>
              <a 
                href="tel:+201015843591"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Phone className="h-4 w-4" />
                +20 10 15843591
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
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} Cars Club. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Shipping all over Egypt • Cash on Delivery
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
