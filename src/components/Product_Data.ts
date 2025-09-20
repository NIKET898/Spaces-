// src/data/productsData.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  badge?: string;
}

export const allProducts: Product[] = [
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
