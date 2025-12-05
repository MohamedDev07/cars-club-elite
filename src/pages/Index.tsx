import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
