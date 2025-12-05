import { Phone, Instagram, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Contact <span className="neon-text-soft">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to upgrade your car? Get in touch with us for orders, prices, and inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* WhatsApp */}
          <a 
            href="https://wa.me/201015843591"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 gradient-card rounded-2xl border border-border card-glow group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <MessageCircle className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">WhatsApp</h3>
            <p className="text-muted-foreground text-sm">+20 10 15843591</p>
            <span className="mt-3 text-xs text-primary">Chat Now →</span>
          </a>

          {/* Phone */}
          <a 
            href="tel:+201015843591"
            className="flex flex-col items-center p-6 gradient-card rounded-2xl border border-border card-glow group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <Phone className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">Phone</h3>
            <p className="text-muted-foreground text-sm">+20 10 15843591</p>
            <span className="mt-3 text-xs text-primary">Call Now →</span>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/cars.club.eg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 gradient-card rounded-2xl border border-border card-glow group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <Instagram className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-base mb-1 group-hover:text-primary transition-colors">Instagram</h3>
            <p className="text-muted-foreground text-sm">@cars.club.eg</p>
            <span className="mt-3 text-xs text-primary">Follow Us →</span>
          </a>

          {/* Working Hours */}
          <div className="flex flex-col items-center p-6 gradient-card rounded-2xl border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
              <Clock className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-base mb-1">Working Hours</h3>
            <p className="text-muted-foreground text-sm">Daily: 10AM - 10PM</p>
            <span className="mt-3 text-xs text-muted-foreground">Egypt Time</span>
          </div>
        </div>

        {/* Shipping info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/50 rounded-full border border-border">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-foreground/80 font-medium">Shipping All Over Egypt</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground text-sm">Cash On Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
