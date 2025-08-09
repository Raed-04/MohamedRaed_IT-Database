import type { Product } from "../../interfaces/ProductsInterfaces";
import ProductCardImage from "./ProductCardImage";
import ProductCardBody from "./ProductCardBody";
import ProductCardFooter from "./ProductBodyFooter";
import toast from "react-hot-toast";
export default function ProductCard(props: { product: Product }) {
  function cardClickHandler() {
    toast.error("Viewing full details is not implemented");
  }
  return (
    <div
    onClick={cardClickHandler} className="bg-white rounded-lg m-2 border border-gray-200 shadow-md hover:shadow-lg hover:bg-gray-100 cursor-pointer transition duration-300 overflow-hidden max-w-sm mx-auto flex flex-col h-full min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
      <ProductCardImage
        image={props.product.image}
        id={props.product.id}
      />
      <div className="p-4 flex flex-col flex-grow">
        <ProductCardBody
          title={props.product.title}
          description={props.product.description}
          category={props.product.category}
        />
       <ProductCardFooter price={props.product.price} />
      </div>
    </div>
  );
}