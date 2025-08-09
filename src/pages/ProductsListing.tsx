import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard/ProductCard";
import type { Product } from "../interfaces/ProductsInterfaces";
import { getProducts } from "../services/ProductServices";
import LoadingScreen from "../components/ProductCard/LoadingScreen";
import ErrorScreen from "../components/ProductCard/ErrorScreen";
import NavBar from "../components/NavBar/NavBar";
import ProductFilters from "../components/ProductCard/ProductFilters";
import type { ProductCategory } from "../interfaces/ProductsInterfaces";
import { useState } from "react";

export default function ProductsListing() {
  const {
    data: productsData,
    isFetching: isProductsFetching,
    isError: isProductsError,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
    enabled: true,
    refetchOnWindowFocus: false,
  });

  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<ProductCategory | "">("");
  const [minPrice, setMinPrice] = useState<number | "">("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");

  function filterProducts(products: Product[]): Product[] {
    return products.filter((product) => {
      const matchesName =
        name === "" || product.title.toLowerCase().includes(name.toLowerCase());
      const matchesCategory = category === "" || product.category === category;
      const matchesMinPrice =
        minPrice === "" || product.price >= Number(minPrice);
      const matchesMaxPrice =
        maxPrice === "" || product.price <= Number(maxPrice);
      return (
        matchesName && matchesCategory && matchesMinPrice && matchesMaxPrice
      );
    });
  }

  return (
    <>
      <NavBar />
      <h1 className="text-4xl font-bold m-4">Products</h1>
      <ProductFilters
        name={name}
        setName={setName}
        category={category}
        setCategory={setCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <div className="flex flex-wrap justify-center">
        {isProductsFetching && <LoadingScreen />}
        {isProductsError && <ErrorScreen />}
        {productsData &&
          (filterProducts(productsData).length > 0 ? (
            filterProducts(productsData).map((product: Product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          ) : (
            <p>No Products available at the moment</p>
          ))}
      </div>
    </>
  );
}
