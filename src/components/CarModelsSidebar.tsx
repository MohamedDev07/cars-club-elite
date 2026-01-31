import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarModel {
  name: string;
  code: string;
}

interface Brand {
  name: string;
  models: CarModel[];
}

const carBrands: Brand[] = [
  {
    name: "BMW",
    models: [
      { name: "1-Series", code: "F20" },
      { name: "2-Series", code: "F22" },
      { name: "3-Series", code: "E90" },
      { name: "3-Series", code: "F30" },
      { name: "3-Series", code: "G20" },
      { name: "3-Series", code: "G20 LCI" },
      { name: "4-Series", code: "G22" },
      { name: "5-Series", code: "E60" },
      { name: "5-Series", code: "F10" },
      { name: "5-Series", code: "G30" },
      { name: "5-Series", code: "G30 LCI" },
      { name: "X6", code: "F16" },
      { name: "X6", code: "G06" },
      { name: "X6", code: "G06 LCI" },
    ]
  },
  {
    name: "Mercedes Benz",
    models: [
      { name: "A-Class", code: "W176" },
      { name: "A-Class", code: "W177" },
      { name: "C-Class", code: "W204" },
      { name: "C-Class", code: "W205" },
      { name: "C-Class", code: "W206" },
      { name: "CLA-Class", code: "W117" },
      { name: "CLA-Class", code: "W118" },
      { name: "E-Class", code: "W212" },
      { name: "E-Class", code: "W213" },
      { name: "E-Class", code: "W213 FL" },
      { name: "G-Class", code: "W463" },
      { name: "GLC-Class", code: "X253" },
      { name: "GLC-Class", code: "X253 FL" },
      { name: "GLC-Class", code: "X254" },
    ]
  },
  {
    name: "Audi",
    models: [
      { name: "A3", code: "8V.5" },
      { name: "A3", code: "8Y" },
      { name: "A4", code: "B9" },
      { name: "A4", code: "B9.5" },
      { name: "A5", code: "B9" },
      { name: "A5", code: "B9.5" },
    ]
  },
  {
    name: "Porsche",
    models: [
      { name: "718", code: "GT4 RS" },
      { name: "981", code: "GT4 RS" },
    ]
  }
];

interface CarModelsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModel: (searchTerm: string) => void;
}

const CarModelsSidebar = ({ isOpen, onClose, onSelectModel }: CarModelsSidebarProps) => {
  const [expandedBrands, setExpandedBrands] = useState<string[]>(["BMW"]);

  const toggleBrand = (brandName: string) => {
    setExpandedBrands(prev => 
      prev.includes(brandName) 
        ? prev.filter(b => b !== brandName) 
        : [...prev, brandName]
    );
  };

  const handleModelClick = (brand: string, model: CarModel) => {
    const searchTerm = `${brand} ${model.name} ${model.code}`;
    onSelectModel(searchTerm);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-card border-l border-border z-50",
          "transform transition-transform duration-300 ease-in-out",
          "overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-bold text-primary">Car Models</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Brands List */}
        <div className="p-2">
          {carBrands.map((brand, brandIndex) => (
            <div key={brand.name}>
              {/* Brand Header */}
              <button
                onClick={() => toggleBrand(brand.name)}
                className="w-full flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors"
              >
                <span className="font-semibold text-foreground">{brand.name}</span>
                {expandedBrands.includes(brand.name) ? (
                  <ChevronUp className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                )}
              </button>

              {/* Models List */}
              {expandedBrands.includes(brand.name) && (
                <div className="ml-2 mb-2">
                  {brand.models.map((model, modelIndex) => (
                    <button
                      key={`${model.name}-${model.code}`}
                      onClick={() => handleModelClick(brand.name, model)}
                      className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/30 rounded-lg transition-colors"
                    >
                      {model.name} {model.code}
                    </button>
                  ))}
                </div>
              )}

              {/* Divider between brands */}
              {brandIndex < carBrands.length - 1 && (
                <div className="mx-3 border-b border-border/50" />
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default CarModelsSidebar;