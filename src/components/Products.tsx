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
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Featured Products
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3 text-foreground">
            Premium <span className="neon-text-soft">Body Kits</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            High-quality tuning parts for luxury vehicles. Transform your car with our premium body kits.
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

        {/* More products CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Looking for something specific? We have more products available.
          </p>
          <a 
            href="https://wa.me/201015843591"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary rounded-full font-medium hover:bg-primary/10 transition-colors"
          >
            Request More Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
