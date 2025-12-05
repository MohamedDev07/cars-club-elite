import { Phone, Instagram, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            <span className="neon-text">Contact Us</span>
          </h2>
          <p className="text-muted-foreground">
            For orders and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* WhatsApp & Phone */}
          <a 
            href="https://wa.me/201015843591"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 gradient-card rounded-2xl border border-border hover-glow group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              WhatsApp & Phone
            </h3>
            <p className="text-muted-foreground text-lg font-medium">+20 10 15843591</p>
            <span className="mt-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Chat Now
            </span>
          </a>

          {/* Instagram */}
          <a 
            href="https://instagram.com/cars.club.eg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 gradient-card rounded-2xl border border-border hover-glow group"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
              <Instagram className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              Instagram
            </h3>
            <p className="text-muted-foreground text-lg font-medium">@cars.club.eg</p>
            <span className="mt-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Follow Us
            </span>
          </a>
        </div>

        {/* Shipping info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/50 rounded-full border border-border">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="text-foreground/70 text-sm">Shipping All Over Egypt · Cash On Delivery</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
