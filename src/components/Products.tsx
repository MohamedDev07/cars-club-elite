import { useState } from "react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
import audiA3_8V5 from "@/assets/Audi_A3_8V.5_Rs_Body_Kit.jpg";
import audiA3_8Y from "@/assets/Audi_A3_8Y_Rs_Body_Kit.jpg";
import audiA4_B9 from "@/assets/Audi_A4_B9_Rs_Body_Kit.jpg";
import audiA4_B95 from "@/assets/Audi_A4_B9.5_Rs_Body_Kit.jpg";
import audiA5_B9 from "@/assets/Audi_A5_B9_Rs_Body_Kit.jpg";
import audiA5_B95 from "@/assets/Audi_A5_B9.5_Rs_Body_Kit.jpg";
import bmw2_F22 from "@/assets/BMW_2-Series_F22_M2_Body_Kit.jpg";
import bmw3_E90 from "@/assets/BMW_3-Series_E90_M3_Body_Kit.jpg";
import bmw3_F30 from "@/assets/BMW_3-Series_F30_M3_Body_Kit.jpg";
import bmw3_G20_Lci from "@/assets/BMW_3-Series_G20_Lci_M3_Body_Kit.jpg";
import mercedesW177 from "@/assets/Mercedes_Benz_A-Class_W177_A45_AMG_Body_Kit.jpg";
import mercedesW176 from "@/assets/Mercedes_Benz_A-Class_W176_A45_AMG_Body_Kit.jpg";
import bmw3_G20 from "@/assets/BMW_3-Series_G20_M3_Body_Kit.jpg";
import bmw4_G22 from "@/assets/BMW_4-Series_G22_M4_Body_Kit.jpg";
import bmw5_E60 from "@/assets/BMW_5-Series_E60_M5_Body_Kit.jpg";
import bmw5_F10 from "@/assets/BMW_5-Series_F10_M5_Body_Kit.jpg";
import bmw5_G30_Lci from "@/assets/BMW_5-Series_G30_Lci_M5_Body_Kit.jpg";
import bmw5_G30 from "@/assets/BMW_5-Series_G30_M5_Body_Kit.jpg";
import bmw6_F12 from "@/assets/BMW_6-Series_F12_M6_Body_Kit.jpg";
import bmwX6_F16 from "@/assets/BMW_X-Series_X6_F16_X6M_Body_Kit.jpg";
import bmwX6_G06 from "@/assets/BMW_X-Series_X6_G06_X6M_Body_Kit.jpg";
import mercedesGLC_X253_FL from "@/assets/Mercedes_Benz_GLC-Class_X253_Face_Lift_GC63_AMG_Body_Kit.jpg";
import mercedesGLC_X253 from "@/assets/Mercedes_Benz_GLC-Class_X253_GC63_AMG_Body_Kit.jpg";
import mercedesC_W204 from "@/assets/Mercedes_Benz_C-Class_W204_C63_AMG_Body_Kit.jpg";
import mercedesC_W205 from "@/assets/Mercedes_Benz_C-Class_W205_C63_AMG_Body_Kit.jpg";
import mercedesC_W206 from "@/assets/Mercedes_Benz_C-Class_W206_C63_AMG_Body_Kit.jpg";
import mercedesCla_W117 from "@/assets/Mercedes_Benz_Cla-Class_W117_Cla45_AMG_Body_Kit.jpg";
import mercedesCla_W118 from "@/assets/Mercedes_Benz_Cla-Class_W118_Cla45_AMG_Body_Kit.jpg";
import mercedesE_W212 from "@/assets/Mercedes_Benz_E-Class_W212_E63_AMG_Body_Kit.jpg";
import mercedesE_W213 from "@/assets/Mercedes_Benz_E-Class_W213_E63_AMG_Body_Kit.jpg";
import mercedesE_W213_FL from "@/assets/Mercedes_Benz_E-Class_W213_Face_Lift_E63_AMG_Body_Kit.jpg";
import mercedesG_W264 from "@/assets/Mercedes_Benz_G-Class_W264_G63_Brabus_Body_Kit.jpg";
import porsche718 from "@/assets/Porsche_718_Gt4_Rs.jpg";
import porsche981 from "@/assets/Porsche_981_Gt4_Rs.jpg";

// Hood & Fender imports
import gtrHoodM5FendersF10 from "@/assets/Gtr_Hood_M5_Fenders_For_Bmw_F10.jpg";
import c63HoodFendersW204 from "@/assets/C63_Hood_C63_Fenders_For_Mercedes_Benz_W204.jpg";
import c63HoodFendersW205 from "@/assets/C63_Hood_C63_Fenders_For_Mercedes_Benz_W205.jpg";
import c63HoodFendersW206 from "@/assets/C63_Hood_C63_Fenders_For_Mercedes_Benz_W206.jpg";
import csHoodM3FendersG20 from "@/assets/Cs_Hood_M3_Fenders_For_Bmw_G20.jpg";
import csHoodM5FendersG30 from "@/assets/Cs_Hood_M5_Fenders_For_Bmw_G30.jpg";
import e63HoodFendersW212 from "@/assets/E63_Hood_E63_Fenders_For_Mercedes_Benz_W212.jpg";
import e63HoodFendersW213 from "@/assets/E63_Hood_E63_Fenders_For_Mercedes_Benz_W213.jpg";
import e63HoodFendersW213FL from "@/assets/E63_Hood_E63_Fenders_For_Mercedes_Benz_W213_Facelift.jpg";
import gtrHoodM5FendersE60 from "@/assets/Gtr_Hood_M5_Fenders_For_Bmw_E60.jpg";
import m3HoodM3FendersE90 from "@/assets/M3_Hood_M3_Fenders_For_Bmw_E90.jpg";
import gtsHoodM3FendersF30 from "@/assets/Gts_Hood_M3_Fenders_For_Bmw_F30.jpg";

// Wheels Rims imports
import bmwWheels1 from "@/assets/Bmw_Wheels_1.jpg";
import bmwWheels2 from "@/assets/Bmw_Wheels_2.jpg";
import bmwWheels3 from "@/assets/Bmw_Wheels_3.jpg";
import bmwWheels4 from "@/assets/Bmw_Wheels_4.jpg";
import bmwWheels5 from "@/assets/Bmw_Wheels_5.jpg";
import bmwWheels6 from "@/assets/Bmw_Wheels_6.jpg";
import bmwWheels7 from "@/assets/Bmw_Wheels_7.jpg";
import bmwWheels8 from "@/assets/Bmw_Wheels_8.jpg";
import bmwWheels9 from "@/assets/Bmw_Wheels_9.png";
import bmwWheels10 from "@/assets/Bmw_Wheels_10.png";

const bodyKitProducts = [{
  image: mercedesC_W206,
  title: "Mercedes Benz C-Class W206 C63 AMG Body Kit"
}, {
  image: bmw4_G22,
  title: "BMW 4-Series G22 M4 Body Kit"
}, {
  image: product3,
  title: "BMW X-Series X6 G06 LCI X6M Body Kit"
}, {
  image: product4,
  title: "Mercedes Benz GLC-Class X254 GC63 AMG Body Kit"
}, {
  image: mercedesW176,
  title: "Mercedes Benz A-Class W176 A45 AMG Body Kit"
}, {
  image: product2,
  title: "BMW 1-Series F20 M1 Body Kit"
}, {
  image: audiA3_8V5,
  title: "Audi A3 8V.5 Rs Body Kit"
}, {
  image: audiA3_8Y,
  title: "Audi A3 8Y Rs Body Kit"
}, {
  image: audiA4_B9,
  title: "Audi A4 B9 Rs Body Kit"
}, {
  image: audiA4_B95,
  title: "Audi A4 B9.5 Rs Body Kit"
}, {
  image: audiA5_B9,
  title: "Audi A5 B9 Rs Body Kit"
}, {
  image: audiA5_B95,
  title: "Audi A5 B9.5 Rs Body Kit"
}, {
  image: bmw2_F22,
  title: "BMW 2-Series F22 M2 Body Kit"
}, {
  image: bmw3_E90,
  title: "BMW 3-Series E90 M3 Body Kit"
}, {
  image: bmw3_F30,
  title: "BMW 3-Series F30 M3 Body Kit"
}, {
  image: bmw3_G20_Lci,
  title: "BMW 3-Series G20 Lci M3 Body Kit"
}, {
  image: mercedesW177,
  title: "Mercedes Benz A-Class W177 A45 AMG Body Kit"
}, {
  image: bmw3_G20,
  title: "BMW 3-Series G20 M3 Body Kit"
}, {
  image: bmw5_E60,
  title: "BMW 5-Series E60 M5 Body Kit"
}, {
  image: bmw5_F10,
  title: "BMW 5-Series F10 M5 Body Kit"
}, {
  image: bmw5_G30_Lci,
  title: "BMW 5-Series G30 Lci M5 Body Kit"
}, {
  image: bmw5_G30,
  title: "BMW 5-Series G30 M5 Body Kit"
}, {
  image: bmw6_F12,
  title: "BMW 6-Series F12 M6 Body Kit"
}, {
  image: bmwX6_F16,
  title: "BMW X-Series X6 F16 X6M Body Kit"
}, {
  image: bmwX6_G06,
  title: "BMW X-Series X6 G06 X6M Body Kit"
}, {
  image: mercedesGLC_X253_FL,
  title: "Mercedes Benz GLC-Class X253 Face Lift GC63 AMG Body Kit"
}, {
  image: mercedesGLC_X253,
  title: "Mercedes Benz GLC-Class X253 GC63 AMG Body Kit"
}, {
  image: mercedesC_W204,
  title: "Mercedes Benz C-Class W204 C63 AMG Body Kit"
}, {
  image: mercedesC_W205,
  title: "Mercedes Benz C-Class W205 C63 AMG Body Kit"
}, {
  image: mercedesCla_W117,
  title: "Mercedes Benz Cla-Class W117 Cla45 AMG Body Kit"
}, {
  image: mercedesCla_W118,
  title: "Mercedes Benz Cla-Class W118 Cla45 AMG Body Kit"
}, {
  image: mercedesE_W212,
  title: "Mercedes Benz E-Class W212 E63 AMG Body Kit"
}, {
  image: mercedesE_W213,
  title: "Mercedes Benz E-Class W213 E63 AMG Body Kit"
}, {
  image: mercedesE_W213_FL,
  title: "Mercedes Benz E-Class W213 Face Lift E63 AMG Body Kit"
}, {
  image: mercedesG_W264,
  title: "Mercedes Benz G-Class W463 G63 Brabus Body Kit"
}, {
  image: porsche718,
  title: "Porsche 718 Gt4 Rs Body Kit"
}, {
  image: porsche981,
  title: "Porsche 981 Gt4 Rs Body Kit"
}];
const hoodFenderProducts = [{
  image: m3HoodM3FendersE90,
  title: "M3 Hood M3 Fenders For Bmw E90"
}, {
  image: gtsHoodM3FendersF30,
  title: "Gts Hood M3 Fenders For Bmw F30"
}, {
  image: c63HoodFendersW205,
  title: "C63 Hood C63 Fenders For Mercedes Benz W205"
}, {
  image: c63HoodFendersW206,
  title: "C63 Hood C63 Fenders For Mercedes Benz W206"
}, {
  image: gtrHoodM5FendersE60,
  title: "Gtr Hood M5 Fenders For Bmw E60"
}, {
  image: gtrHoodM5FendersF10,
  title: "Gtr Hood M5 Fenders For Bmw F10"
}, {
  image: csHoodM3FendersG20,
  title: "Cs Hood M3 Fenders For Bmw G20"
}, {
  image: csHoodM5FendersG30,
  title: "Cs Hood M5 Fenders For Bmw G30"
}, {
  image: c63HoodFendersW204,
  title: "C63 Hood C63 Fenders For Mercedes Benz W204"
}, {
  image: e63HoodFendersW212,
  title: "E63 Hood E63 Fenders For Mercedes Benz W212"
}, {
  image: e63HoodFendersW213,
  title: "E63 Hood E63 Fenders For Mercedes Benz W213"
}, {
  image: e63HoodFendersW213FL,
  title: "E63 Hood E63 Fenders For Mercedes Benz W213 Facelift"
}];

const wheelsRimsProducts = [{
  image: bmwWheels1,
  title: "Bmw Wheels 1"
}, {
  image: bmwWheels2,
  title: "Bmw Wheels 2"
}, {
  image: bmwWheels3,
  title: "Bmw Wheels 3"
}, {
  image: bmwWheels4,
  title: "Bmw Wheels 4"
}, {
  image: bmwWheels5,
  title: "Bmw Wheels 5"
}, {
  image: bmwWheels6,
  title: "Bmw Wheels 6"
}, {
  image: bmwWheels7,
  title: "Bmw Wheels 7"
}, {
  image: bmwWheels8,
  title: "Bmw Wheels 8"
}, {
  image: bmwWheels9,
  title: "Bmw Wheels 9"
}, {
  image: bmwWheels10,
  title: "Bmw Wheels 10"
}];

const brands = ["BMW", "Mercedes", "Audi", "Porsche"] as const;
const categories = ["Sports Body Kit", "Sports Hood & Sports Fender", "Sports Wheels Rims"] as const;
const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Sports Body Kit");
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]);
  };
  const currentProducts = selectedCategory === "Sports Body Kit" 
    ? bodyKitProducts 
    : selectedCategory === "Sports Hood & Sports Fender" 
      ? hoodFenderProducts 
      : wheelsRimsProducts;
  const filteredProducts = currentProducts.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.some(brand => product.title.toLowerCase().includes(brand.toLowerCase()));
    return matchesSearch && matchesBrand;
  });
  return <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            <span className="neon-text">Products</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">{selectedCategory}</p>
        </div>

        {/* Search bar and filters */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary" />
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg bg-card border-2 border-primary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" style={{
            boxShadow: "0 0 15px hsl(var(--primary) / 0.5)"
          }} placeholder="Search BMW, Mercedes, Audi, Porsche..." />
          </div>
          
          {/* Category filter buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-2">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 ${selectedCategory === category ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.7)]" : "bg-card text-foreground border-border hover:border-primary hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)]"}`}>
                {category}
              </button>)}
          </div>

          {/* Brand filter buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {brands.map(brand => <button key={brand} onClick={() => toggleBrand(brand)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border-2 ${selectedBrands.includes(brand) ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(var(--primary)/0.6)]" : "bg-card text-foreground border-border hover:border-primary hover:shadow-[0_0_10px_hsl(var(--primary)/0.3)]"}`}>
                {brand}
              </button>)}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product, index) => <ProductCard key={index} image={product.image} title={product.title} />)}
        </div>
      </div>
    </section>;
};
export default Products;