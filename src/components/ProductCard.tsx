import { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

interface ProductCardProps {
  image: string;
  title: string;
}

const ProductCard = ({ image, title }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [currentImage, setCurrentImage] = useState(image);

  // When image changes, hide old image immediately, then show new one for progressive loading
  useEffect(() => {
    if (image !== currentImage) {
      setShowImage(false); // Hide immediately
      const timer = setTimeout(() => {
        setCurrentImage(image);
        setShowImage(true); // Show new image (loads progressively)
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [image, currentImage]);

  return (
    <>
      <div className="group gradient-card rounded-xl overflow-hidden border border-border card-hover">
        {/* Image */}
        <div 
          className="relative overflow-hidden cursor-pointer" 
          onClick={() => setIsModalOpen(true)}
        >
          {/* Loading skeleton - shows when transitioning */}
          {!showImage && (
            <div 
              className="absolute inset-0 bg-muted animate-pulse"
              style={{ aspectRatio: '306/382' }}
            />
          )}
          <img 
            src={currentImage} 
            alt={title} 
            loading="lazy"
            decoding="async"
            width="306"
            height="382"
            style={{ aspectRatio: '306/382' }}
            className={`w-full h-auto object-contain ${showImage ? 'opacity-100' : 'opacity-0'}`}
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
