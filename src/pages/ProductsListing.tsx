import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard/ProductCard";
import type { Product } from "../interfaces/ProductsInterfaces";
import { getProducts } from "../services/ProductServices";
import LoadingScreen from "../components/ProductCard/LoadingScreen";
import ErrorScreen from "../components/ProductCard/ErrorScreen";
import NavBar from "../components/NavBar/NavBar";

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
  return (
    <>
      <NavBar />
      <h1 className="text-4xl font-bold m-4">Products</h1>
      <div className="flex flex-wrap justify-center">
        {isProductsFetching && <LoadingScreen />}
        {isProductsError && <ErrorScreen />}
        {productsData &&
          (productsData.length > 0 ? (
            productsData.map((product: Product) => {
              return <ProductCard key={product.id} product={product} />;
            })
          ) : (
            <p>No Products available at the moment</p>
          ))}
      </div>
    </>
  );
}
