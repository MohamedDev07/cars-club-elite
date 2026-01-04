import { useState } from "react";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard = ({ image, title }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="group gradient-card rounded-xl overflow-hidden border border-border card-hover">
        {/* Image */}
        <div 
          className="relative overflow-hidden cursor-pointer" 
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="text-primary text-sm font-medium">View Details</span>
          </div>
          
          {/* Badge */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            Available
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 
            className="font-display text-sm font-semibold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors leading-tight cursor-pointer" 
            onClick={() => setIsModalOpen(true)}
          >
            {title}
          </h3>

          <a 
            href="https://wa.me/201015843591" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 w-full py-3 gradient-neon rounded-lg font-semibold text-sm text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Order
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
