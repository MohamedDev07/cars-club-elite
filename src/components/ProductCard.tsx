import { Phone, Check, ExternalLink } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  delay?: number;
}

const ProductCard = ({ image, title, delay = 0 }: ProductCardProps) => {
  return (
    <div 
      className="group gradient-card rounded-xl overflow-hidden border border-border hover-lift"
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 1
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
          Available
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-base font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        
        <div className="space-y-2 text-sm text-muted-foreground mb-5">
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>Shipping all over Egypt</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>Cash on Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            <span>Original Quality</span>
          </div>
        </div>

        <div className="flex gap-2">
          <a 
            href="https://wa.me/201015843591"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg font-medium transition-all hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            Order
          </a>
          <a 
            href="tel:+201015843591"
            className="px-4 py-3 bg-secondary border border-border rounded-lg text-foreground hover:border-primary/50 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
