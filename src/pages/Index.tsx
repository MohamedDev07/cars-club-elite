import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load components below the fold
const Products = lazy(() => import("@/components/Products"));
const Contact = lazy(() => import("@/components/Contact"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div className="py-20 text-center"><div className="animate-pulse h-96 bg-muted rounded-lg max-w-6xl mx-auto" /></div>}>
          <Products />
        </Suspense>
        <Suspense fallback={<div className="py-20 text-center"><div className="animate-pulse h-64 bg-muted rounded-lg max-w-4xl mx-auto" /></div>}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
