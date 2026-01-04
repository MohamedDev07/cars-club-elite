import { Phone, Instagram, Facebook, MapPin, MessageCircle } from "lucide-react";

const contactItems = [
  {
    href: "https://wa.me/201015843591",
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+20 10 15843591",
    gradient: "from-green-500/20 to-green-600/10",
  },
  {
    href: "https://instagram.com/cars.club.eg",
    icon: Instagram,
    title: "Instagram",
    value: "@cars.club.eg",
    gradient: "from-pink-500/20 to-purple-600/10",
  },
  {
    href: "https://www.facebook.com/carsclubabdelrahmanamr",
    icon: Facebook,
    title: "Facebook",
    value: "Cars Club",
    gradient: "from-blue-500/20 to-blue-600/10",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 gradient-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-effect premium-border text-sm font-medium text-primary mb-6">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4 tracking-wide">
            <span className="neon-text-intense">Contact Us</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            For orders and inquiries, reach out through any of our channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map(({ href, icon: Icon, title, value, gradient }) => (
            <a 
              key={title}
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center p-8 gradient-card rounded-3xl border border-border/50 hover-glow premium-border relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl gradient-neon-subtle border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-muted-foreground text-lg font-medium group-hover:text-foreground/80 transition-colors duration-300">
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Location Badge */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center gap-3 px-6 py-3 glass-effect rounded-full premium-border">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium tracking-wide">Cairo • Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
