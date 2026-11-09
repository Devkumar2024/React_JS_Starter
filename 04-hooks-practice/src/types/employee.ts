// src/types/product.ts

export interface ProductReview {
  rating: number;
  comment: string;
  date: string;        // ISO 8601
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductMeta {
  createdAt: string;   // ISO 8601
  updatedAt: string;   // ISO 8601
  barcode: string;
  qrCode: string;      // URL
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand?: string;              // some products omit this
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;  // e.g. "Low Stock"
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  thumbnail: string;           // URL
  images: string[];            // URLs
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}