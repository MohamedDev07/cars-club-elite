import { X, Check } from "lucide-react";
import { useEffect } from "react";
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
  if (!isOpen) return null;
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden border border-border shadow-2xl" onClick={e => e.stopPropagation()}>
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center text-foreground hover:text-primary transition-colors">
          <X className="h-5 w-5" />
        </button>

        {/* Image */}
        <div className="w-full">
          <img src={image} alt={title} className="w-full h-auto object-contain max-h-[60vh]" />
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

          <a href="https://wa.me/201015843591" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-4 gradient-neon rounded-xl font-display font-semibold text-primary-foreground hover:opacity-90 transition-opacity">Order Now
            Order Now - 01015843591
          </a>
        </div>
      </div>
    </div>;
};
export default ProductModal;