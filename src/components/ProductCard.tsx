import { useState } from "react";
import { Eye, ShoppingBag } from "lucide-react";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard = ({ image, title }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <>
      <div className="group gradient-card rounded-2xl overflow-hidden border border-border/50 card-hover premium-border">
        {/* Image Container */}
        <div 
          className="relative overflow-hidden cursor-pointer bg-secondary/30"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Loading skeleton */}
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse" />
          )}
          
          <img 
            src={image} 
            alt={title} 
            className={`w-full h-auto object-contain transition-all duration-700 group-hover:scale-110 ${
              isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsImageLoaded(true)}
          />
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-center">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-primary text-sm font-medium">
                <Eye className="h-4 w-4" />
                View Details
              </span>
            </div>
          </div>
          
          {/* Premium Badge */}
          <div className="absolute top-3 left-3 px-3 py-1.5 gradient-neon text-primary-foreground text-xs font-bold rounded-full shadow-lg">
            Available
          </div>

          {/* Shine effect overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 
            className="font-display text-sm font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-relaxed cursor-pointer" 
            onClick={() => setIsModalOpen(true)}
          >
            {title}
          </h3>

          <a 
            href="https://wa.me/201015843591" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 w-full py-3.5 gradient-neon rounded-xl font-bold text-sm text-primary-foreground hover:scale-[1.02] transition-all duration-300 shine-effect"
          >
            <ShoppingBag className="h-4 w-4" />
            Order Now
          </a>
        </div>
      </div>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        image={image} 
        title={title} 
      />
    </>
  );
};

export default ProductCard;
