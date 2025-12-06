import ProductCard from "./ProductCard";
import product1 from "@/assets/product1.jpg";
import product2 from "@/assets/product2.jpg";
import product3 from "@/assets/product3.jpg";
import product4 from "@/assets/product4.jpg";
const products = [{
  image: product1,
  title: "Mercedes Benz A-Class W176 A45 AMG Body Kit"
}, {
  image: product2,
  title: "BMW 1-Series F20 M1 Body Kit"
}, {
  image: product3,
  title: "BMW X-Series X6 G06 LCI X6M Body Kit"
}, {
  image: product4,
  title: "Mercedes Benz GLC-Class X254 GC63 AMG Body Kit"
}];
const Products = () => {
  return <section id="products" className="py-20 bg-background">
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
          {products.map((product, index) => <ProductCard key={index} image={product.image} title={product.title} />)}
        </div>
      </div>
    </section>;
};
export default Products;