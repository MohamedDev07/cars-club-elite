import logo from "@/assets/logo.jpg";
import { ChevronDown, Truck, CreditCard, Shield } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative gradient-dark pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--neon)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src={logo} 
            alt="Cars Club Logo" 
            className="h-40 w-40 md:h-48 md:w-48 mx-auto rounded-2xl border-2 border-primary/40 object-contain shadow-lg"
          />
        </div>

        {/* Brand name */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-wider text-foreground">
          CARS <span className="neon-text-soft">CLUB</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-display text-primary mb-4">
          Car Tuning Parts 🏁
        </p>

        {/* Brands */}
        <div className="flex items-center justify-center gap-3 md:gap-6 flex-wrap mb-8">
          {["BMW", "Mercedes", "Audi", "Porsche"].map((brand) => (
            <span 
              key={brand}
              className="px-4 py-2 bg-secondary/50 rounded-full text-sm md:text-base font-medium text-foreground/80 border border-border"
            >
              {brand}
            </span>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Truck className="h-5 w-5 text-primary" />
            <span className="text-sm">Shipping All Egypt</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <CreditCard className="h-5 w-5 text-primary" />
            <span className="text-sm">Cash On Delivery</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm">Quality Guaranteed</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#products"
            className="px-8 py-3 gradient-neon rounded-full font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Products
          </a>
          <a 
            href="https://wa.me/201015843591"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-secondary border border-border rounded-full font-display font-semibold text-foreground hover:border-primary/50 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
