import { X, Check } from "lucide-react";
import { useEffect, useState, useRef } from "react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
}

const ProductModal = ({
  isOpen,
  onClose,
  image,
  title
}: ProductModalProps) => {
  const [isZooming, setIsZooming] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => setIsZooming(true);
  const handleMouseLeave = () => setIsZooming(false);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm" 
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden border border-border shadow-2xl" 
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image with zoom */}
        <div 
          ref={imageContainerRef}
          className="relative w-full overflow-hidden cursor-zoom-in"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-contain max-h-[60vh] transition-transform duration-200"
            style={{
              transform: isZooming ? 'scale(2)' : 'scale(1)',
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`
            }}
          />
          
          {/* Zoom hint */}
          {!isZooming && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background/80 rounded-full text-xs text-muted-foreground backdrop-blur-sm border border-border/50">
              Hover to zoom
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">
            {title}
          </h3>
          
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Available Now</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Shipping All Egypt</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cash on Delivery</span>
            </div>
          </div>

          <a 
            href="https://wa.me/201015843591" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 w-full py-4 gradient-neon rounded-xl font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;