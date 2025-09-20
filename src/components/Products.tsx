
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useCart } from "@/hooks/useCart";
import { Badge, Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

import { Product, allProducts } from "./Product_Data";
import { Card } from "./ui/card";

export function Products() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [products, setProducts] = useState<Product[]>(allProducts);
  const { addItem } = useCart();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (activeFilter === "all") {
      setProducts(allProducts);
    } else {
      setProducts(allProducts.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fId) => fId !== id) : [...prev, id]
    );
  };

  const filters = [
    { value: "all", label: "All" },
    { value: "prescription", label: "Prescription" },
    { value: "sunglasses", label: "Sunglasses" },
    { value: "designer", label: "Designer" },
    { value: "computer", label: "Computer" },
  ];

  return (
    <section id="eyewear" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-8">
            Best-selling Glasses
          </h2>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.value)}
                className="rounded-full"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 rounded-3xl border-2 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/50 to-background rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-[hsl(var(--gold))] text-primary rounded-full px-3 py-1">
                    {product.badge}
                  </Badge>
                )} */}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full z-10 ${
                    favorites.includes(product.id) ? "text-red-500" : ""
                  }`}
                  onClick={(e) => {
                    e.stopPropagation(); // prevent modal open
                    toggleFavorite(product.id);
                  }}
                >
                  <Heart
                    className={`h-5 w-5 ${
                      favorites.includes(product.id) ? "fill-current" : ""
                    }`}
                  />
                </Button>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="font-semibold text-lg">{product.name}</h3>

                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-lg rounded-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProduct.name}</DialogTitle>
              </DialogHeader>

              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full rounded-xl mb-4"
              />

              <div className="space-y-3">
                <p className="text-lg font-semibold">
                  Price: ₹{selectedProduct.price}
                </p>
                {selectedProduct.originalPrice && (
                  <p className="text-sm line-through text-muted-foreground">
                    MRP: ₹{selectedProduct.originalPrice}
                  </p>
                )}
                <p className="text-sm text-muted-foreground">
                  Category: {selectedProduct.category}
                </p>
                {selectedProduct.badge && (
                  <Badge className="bg-[hsl(var(--gold))] text-primary rounded-full px-3 py-1">
                    {selectedProduct.badge}
                  </Badge>
                )}
              </div>

              <Button
                variant="hero"
                className="w-full mt-4 rounded-full"
                onClick={() => addItem(selectedProduct)}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
