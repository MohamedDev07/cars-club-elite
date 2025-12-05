const brands = [
  { name: "BMW", letter: "B" },
  { name: "Mercedes-Benz", letter: "M" },
  { name: "Audi", letter: "A" },
  { name: "Porsche", letter: "P" },
];

const Brands = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Brands We Support
          </p>
        </div>

        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 px-6 py-4 bg-secondary/30 rounded-xl border border-border card-glow"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-display font-bold text-primary">{brand.letter}</span>
              </div>
              <span className="font-display font-semibold text-foreground">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
