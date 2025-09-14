import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ShoppingCart } from "@/components/ShoppingCart";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Products />
        <About />
      </main>
      <Footer />
      <ShoppingCart />
    </div>
  );
};

export default Index;
