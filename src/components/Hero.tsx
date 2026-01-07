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
        <div className="mb-6">
        <img 
            src="/logo.jpg" 
            alt="Cars Club Logo" 
            width={176}
            height={176}
            fetchPriority="high"
            decoding="sync"
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
          Bmw · Mercedes · Audi · Porsche
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
