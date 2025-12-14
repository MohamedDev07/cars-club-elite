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
  const [scale, setScale] = useState(1);
  const [touchStart, setTouchStart] = useState<{ distance: number } | null>(null);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);
  const [totalDistance, setTotalDistance] = useState(0);
  const [isInZoomArea, setIsInZoomArea] = useState(false);
  const zoomTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const MIN_DISTANCE = 15; // Minimum pixels to move before zoom activates
  const EDGE_ZONE = 18; // Percentage of edge to ignore zoom

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsZooming(false);
      setScale(1);
      setStartPos(null);
      setTotalDistance(0);
      setIsInZoomArea(false);
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
      }
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const rawX = ((e.clientX - rect.left) / rect.width) * 100;
    const rawY = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Check if mouse is in the edge zones (no zoom there)
    const inEdgeZone = rawX < EDGE_ZONE || rawX > (100 - EDGE_ZONE);
    
    if (inEdgeZone) {
      setIsInZoomArea(false);
      setIsZooming(false);
      if (zoomTimeoutRef.current) {
        clearTimeout(zoomTimeoutRef.current);
        zoomTimeoutRef.current = null;
      }
      return;
    }
    
    setIsInZoomArea(true);
    setZoomPosition({ x: rawX, y: rawY });
    
    // Track distance moved
    if (!startPos) {
      setStartPos({ x: e.clientX, y: e.clientY });
    } else {
      const dx = e.clientX - startPos.x;
      const dy = e.clientY - startPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance > totalDistance) {
        setTotalDistance(distance);
      }
      
      if (totalDistance >= MIN_DISTANCE && !isZooming && !zoomTimeoutRef.current) {
        zoomTimeoutRef.current = setTimeout(() => {
          setIsZooming(true);
          zoomTimeoutRef.current = null;
        }, 80);
      }
    }
  };

  const handleMouseEnter = () => {
    setStartPos(null);
    setTotalDistance(0);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
    setIsInZoomArea(false);
    setStartPos(null);
    setTotalDistance(0);
    if (zoomTimeoutRef.current) {
      clearTimeout(zoomTimeoutRef.current);
      zoomTimeoutRef.current = null;
    }
  };

  // Touch handlers for pinch zoom
  const getDistance = (touches: React.TouchList) => {
    if (touches.length < 2) return 0;
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      setTouchStart({ distance: getDistance(e.touches) });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStart) {
      e.preventDefault();
      const currentDistance = getDistance(e.touches);
      const newScale = Math.min(Math.max(1, scale * (currentDistance / touchStart.distance)), 3);
      setScale(newScale);
      setTouchStart({ distance: currentDistance });
    }
  };

  const handleTouchEnd = () => {
    setTouchStart(null);
    if (scale < 1.2) setScale(1);
  };

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
          className="relative w-full overflow-hidden cursor-zoom-in touch-none"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* CARS CLUB Watermark */}
          <div className="absolute top-0 left-0 right-0 flex justify-center z-10 pointer-events-none">
            <div className="bg-[#e8e8e8] px-6 py-1.5 text-black text-sm font-bold tracking-[0.15em]">
              CARS CLUB
            </div>
          </div>
          
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-contain max-h-[60vh] select-none transition-transform duration-500 ease-out"
            draggable={false}
            style={{
              transform: isZooming && isInZoomArea ? `scale(2)` : `scale(${scale})`,
              transformOrigin: isZooming && isInZoomArea ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center'
            }}
          />
          
          {/* Zoom hint - Desktop */}
          {!isZooming && scale === 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background/80 rounded-full text-xs text-muted-foreground backdrop-blur-sm border border-border/50 hidden md:block">
              Hover to zoom
            </div>
          )}
          
          {/* Zoom hint - Mobile */}
          {scale === 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-background/80 rounded-full text-xs text-muted-foreground backdrop-blur-sm border border-border/50 md:hidden">
              Pinch to zoom
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