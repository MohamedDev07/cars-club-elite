import logo from "@/assets/logo.jpg";
import { ChevronDown, Truck, CreditCard, Store } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative gradient-dark pt-16 overflow-hidden">
      {/* Subtle glow effect behind content */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-[0.12] blur-[150px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(var(--neon) / 0.3) 0%, transparent 60%)'
        }}
      />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src={logo} 
            alt="Cars Club Logo" 
            className="h-36 w-36 md:h-44 md:w-44 mx-auto rounded-2xl object-contain" 
          />
        </div>

        {/* Brand name */}
        <h1 className="font-display text-4xl md:text-6xl font-bold mb-3 tracking-wider">
          <span className="neon-text">CARS CLUB</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl font-display text-primary/90 mb-6">
          Car Tuning Parts
        </p>

        {/* Brands */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 font-medium tracking-wide">
          BMW · Mercedes · Audi · Porsche
        </p>

        {/* Features */}
        <div className="flex items-center justify-center gap-6 md:gap-10 flex-wrap mb-10">
          <div className="flex items-center gap-2 text-foreground/80">
            <Store className="h-5 w-5 text-primary" />
            <span className="text-sm">Online Store</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <Truck className="h-5 w-5 text-primary" />
            <span className="text-sm">Shipping All Egypt</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/80">
            <CreditCard className="h-5 w-5 text-primary" />
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
