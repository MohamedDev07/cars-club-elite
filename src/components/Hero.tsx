import logo from "@/assets/logo.jpg";
import { ChevronDown, Truck, CreditCard, Store } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative gradient-dark pt-16">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--neon)) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }} 
        />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 relative flex justify-center">
          <div className="absolute inset-0 bg-primary/40 blur-[80px] rounded-full" />
          <img 
            src={logo} 
            alt="Cars Club Logo" 
            className="h-36 w-36 md:h-48 md:w-48 rounded-2xl object-contain relative z-10" 
          />
        </div>

        {/* Brand name */}
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-wider">
          <span className="neon-text">CARS CLUB</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-display text-primary mb-8">
          Car Tuning Parts
        </p>

        {/* Brands */}
        <p className="text-base md:text-lg text-muted-foreground mb-10 font-medium tracking-widest uppercase">
          BMW · Mercedes · Audi · Porsche
        </p>

        {/* Features */}
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap mb-12">
          <div className="flex items-center gap-2 text-foreground/70">
            <Store className="h-5 w-5 text-primary/80" />
            <span className="text-sm">Online Store</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Truck className="h-5 w-5 text-primary/80" />
            <span className="text-sm">Shipping All Egypt</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <CreditCard className="h-5 w-5 text-primary/80" />
            <span className="text-sm">Cash On Delivery</span>
          </div>
        </div>

        {/* CTA */}
        <a 
          href="#products" 
          className="inline-block px-10 py-4 gradient-neon rounded-full font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
        >
          View Products
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-60">
        <ChevronDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
