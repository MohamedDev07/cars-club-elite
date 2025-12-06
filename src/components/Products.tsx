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
import bmw3_G20 from "@/assets/BMW_3-Series_G20_Lci_M3_Body_Kit.jpg";

const products = [
  {
    image: product1,
    title: "Mercedes Benz A-Class W176 A45 AMG Body Kit"
  },
  {
    image: product2,
    title: "BMW 1-Series F20 M1 Body Kit"
  },
  {
    image: product3,
    title: "BMW X-Series X6 G06 LCI X6M Body Kit"
  },
  {
    image: product4,
    title: "Mercedes Benz GLC-Class X254 GC63 AMG Body Kit"
  },
  {
    image: audiA3_8V5,
    title: "Audi A3 8V.5 Rs Body Kit"
  },
  {
    image: audiA3_8Y,
    title: "Audi A3 8Y Rs Body Kit"
  },
  {
    image: audiA4_B9,
    title: "Audi A4 B9 Rs Body Kit"
  },
  {
    image: audiA4_B95,
    title: "Audi A4 B9.5 Rs Body Kit"
  },
  {
    image: audiA5_B9,
    title: "Audi A5 B9 Rs Body Kit"
  },
  {
    image: audiA5_B95,
    title: "Audi A5 B9.5 Rs Body Kit"
  },
  {
    image: bmw2_F22,
    title: "BMW 2-Series F22 M2 Body Kit"
  },
  {
    image: bmw3_E90,
    title: "BMW 3-Series E90 M3 Body Kit"
  },
  {
    image: bmw3_F30,
    title: "BMW 3-Series F30 M3 Body Kit"
  },
  {
    image: bmw3_G20,
    title: "BMW 3-Series G20 Lci M3 Body Kit"
  }
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            <span className="neon-text">Our Products</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">Sports Body Kits</p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} image={product.image} title={product.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
