import ProductCard from "./ProductCard";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";

const products = [
  {
    image: product1,
    title: "Mercedes Benz A-Class W176 A45 AMG Body Kit",
  },
  {
    image: product2,
    title: "BMW 1-Series F20 M1 Body Kit",
  },
  {
    image: product3,
    title: "BMW X-Series X6 G06 LCI X6M Body Kit",
  },
  {
    image: product4,
    title: "Mercedes Benz GLC-Class X254 GC63 AMG Body Kit",
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text">Our Products</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium body kits and tuning parts for luxury vehicles
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              image={product.image}
              title={product.title}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
