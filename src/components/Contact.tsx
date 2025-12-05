import { Phone, Instagram, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Contact Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Get in touch for orders and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/201015843591"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover-glow group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <MessageCircle className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">WhatsApp</h3>
            <p className="text-muted-foreground text-sm">+20 10 15843591</p>
          </a>

          {/* Phone */}
          <a 
            href="tel:+201015843591"
            className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover-glow group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Phone</h3>
            <p className="text-muted-foreground text-sm">+20 10 15843591</p>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/cars.club.eg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-card rounded-2xl border border-border hover-glow group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
              <Instagram className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">Instagram</h3>
            <p className="text-muted-foreground text-sm">@cars.club.eg</p>
          </a>
        </div>

        {/* Shipping info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/30">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Shipping All Over Egypt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
