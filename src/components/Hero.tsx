import logo from "@/assets/logo.jpg";
import { ChevronDown, Truck, CreditCard, Store, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative gradient-dark pt-20 overflow-hidden">
      {/* Premium background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(75_90%_48%_/_0.08)_0%,_transparent_60%)]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--neon) / 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(var(--neon) / 0.3) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }} 
        />
        
        {/* Animated glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Premium badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect premium-border mb-8 animate-fade-in-up">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground/80">Premium Car Parts</span>
        </div>

        {/* Logo with glow effect */}
        <div className="mb-8 relative inline-block float-animation">
          <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full scale-150 opacity-60" />
          <img 
            src={logo} 
            alt="Cars Club Logo" 
            className="h-40 w-40 md:h-52 md:w-52 mx-auto rounded-3xl object-contain relative z-10 premium-border" 
          />
        </div>

        {/* Brand name with intense glow */}
        <h1 className="font-display text-5xl md:text-7xl font-black mb-4 tracking-widest animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="neon-text-intense">CARS CLUB</span>
        </h1>

        {/* Tagline with gradient */}
        <p className="text-2xl md:text-3xl font-display font-semibold mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-primary">Car Tuning Parts</span>
        </p>

        {/* Brands with separator dots */}
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          {["BMW", "Mercedes", "Audi", "Porsche"].map((brand, i) => (
            <span key={brand} className="flex items-center gap-4 md:gap-6">
              <span className="text-lg md:text-xl font-display font-medium text-foreground/70 hover:text-primary transition-colors duration-300 cursor-default">
                {brand}
              </span>
              {i < 3 && <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />}
            </span>
          ))}
        </div>

        {/* Features with premium styling */}
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: Store, label: "Online Store" },
            { icon: Truck, label: "Shipping All Egypt" },
            { icon: CreditCard, label: "Cash On Delivery" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 px-5 py-3 rounded-xl glass-effect premium-border group hover:border-primary/30 transition-all duration-300">
              <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-foreground/80">{label}</span>
            </div>
          ))}
        </div>

        {/* CTA Button with premium effects */}
        <a 
          href="#products" 
          className="inline-flex items-center gap-2 px-12 py-4 gradient-neon rounded-full font-display font-bold text-lg text-primary-foreground hover:scale-105 transition-all duration-300 shine-effect pulse-glow animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          View Products
        </a>
      </div>

      {/* Scroll indicator with glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
