import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";

const allProducts = [
  {
    id: 1,
    name: "Classic Aviator",
    price: 129.99,
    originalPrice: 189.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "sunglasses",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Modern Square",
    price: 89.99,
    originalPrice: 139.99,
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "prescription",
    badge: "New",
  },
  {
    id: 3,
    name: "Round Vintage",
    price: 99.99,
    originalPrice: 149.99,
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "designer",
    badge: "Limited",
  },
  {
    id: 4,
    name: "Cat Eye Chic",
    price: 119.99,
    originalPrice: 169.99,
    image:
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "designer",
    badge: "Trending",
  },
  {
    id: 5,
    name: "Blue Light Shield",
    price: 79.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1577803645773-f96470509666?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "computer",
    badge: "Sale",
  },
  {
    id: 6,
    name: "Sport Pro",
    price: 149.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1556306535-38febf6782e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "sunglasses",
  },
  {
    id: 7,
    name: "Titanium Elite",
    price: 299.99,
    originalPrice: 399.99,
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "prescription",
    badge: "Premium",
  },
  {
    id: 8,
    name: "Retro Wave",
    price: 109.99,
    originalPrice: 159.99,
    image:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "sunglasses",
  },
];

export function Products() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [products, setProducts] = useState(allProducts);
  const { addItem } = useCart();
  const [favorites, setFavorites] = useState<number[]>([]);

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
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 rounded-3xl border-2"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-secondary/50 to-background rounded-t-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.badge && (
                  <Badge className="absolute top-4 left-4 bg-[hsl(var(--gold))] text-primary rounded-full px-3 py-1">
                    {product.badge}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full ${
                    favorites.includes(product.id) ? "text-red-500" : ""
                  }`}
                  onClick={() => toggleFavorite(product.id)}
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
                  <span className="text-2xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <Button
                  variant="hero"
                  className="w-full rounded-full"
                  onClick={() => addItem(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
