import { Phone } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  delay?: number;
}

const ProductCard = ({ image, title, delay = 0 }: ProductCardProps) => {
  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden border border-border card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Available Now
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-muted-foreground mb-4">
          <p>✓ Shipping all over Egypt</p>
          <p>✓ Cash on Delivery</p>
        </div>

        <a 
          href="https://wa.me/201015843591"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 bg-secondary hover:bg-primary hover:text-primary-foreground rounded-lg font-medium transition-all duration-300 hover-glow"
        >
          <Phone className="h-4 w-4" />
          Order Now
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
