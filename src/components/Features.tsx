import { Truck, CreditCard, Shield, Headphones, Package, Clock } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Nationwide Shipping",
    description: "Fast delivery to all Egyptian governorates"
  },
  {
    icon: CreditCard,
    title: "Cash on Delivery",
    description: "Pay when you receive your order"
  },
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Original quality parts with warranty"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Always here to help via WhatsApp"
  },
  {
    icon: Package,
    title: "Secure Packaging",
    description: "Protected shipping for all orders"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Orders processed within 24 hours"
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
            Why Choose <span className="neon-text-soft">Cars Club</span>?
          </h2>
          <p className="text-muted-foreground">
            We provide the best experience for our customers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-xl bg-secondary/30 border border-border card-glow"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
