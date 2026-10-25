export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  stock: number;
  thumbnail: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Essence Mascara",
    price: 10.99,
    category: "beauty",
    stock: 25,
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    description: "A volumising mascara.",
  },
  {
    id: 2,
    title: "Eyeshadow Palette",
    price: 19.99,
    category: "beauty",
    stock: 12,
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
    description: "An eyeshadow palette with mirror.",
  },
  {
    id: 3,
    title: "Smartphone",
    price: 499,
    category: "electronics",
    stock: 8,
    thumbnail: "https://cdn.dummyjson.com/products/images/smartphones/iPhone%205/thumbnail.png",
    description: "A smartphone for everyday use.",
  },
  {
    id: 4,
    title: "Powder Canister",
    price: 14.99,
    category: "beauty",
    stock: 0,
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png",
    description: "A powder canister.",
  },
];
