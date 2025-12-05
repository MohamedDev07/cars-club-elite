import logo from "@/assets/logo.jpg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative gradient-dark pt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--neon)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo */}
        <div className="mb-8 animate-float">
          <img 
            src={logo} 
            alt="Cars Club Logo" 
            className="h-48 w-48 mx-auto rounded-2xl neon-border object-contain"
          />
        </div>

        {/* Brand name */}
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 tracking-wider">
          <span className="neon-text">CARS CLUB</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-display text-primary mb-6 animate-pulse-neon">
          Car Tuning Parts 🏁
        </p>

        {/* Brands */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-medium">
          BMW · Mercedes · Audi · Porsche
        </p>

        {/* Description */}
        <div className="max-w-xl mx-auto space-y-2 mb-12">
          <p className="text-foreground/90 text-lg">Online Store</p>
          <p className="text-primary font-semibold text-lg">Shipping All Over Egypt</p>
          <p className="text-foreground/80">Cash On Delivery</p>
        </div>

        {/* CTA */}
        <a 
          href="#products"
          className="inline-flex items-center gap-2 px-8 py-4 gradient-neon rounded-full font-display font-bold text-primary-foreground hover:scale-105 transition-transform neon-glow"
        >
          View Products
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
