export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
}

export type ProductCategory =
  | "men's clothing"
  | "women's clothing"
  | "electronics"
  | "jewelry";

export const categories: ProductCategory[] = [
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelry",
];

export interface ProductFilterOptions {
  name: string;
  category: ProductCategory | "";
  minPrice: number | "";
  maxPrice: number | "";
}
