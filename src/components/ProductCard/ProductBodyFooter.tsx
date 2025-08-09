import { useState } from "react";
import toast from "react-hot-toast";
import { useCart } from "../../contexts/CartContext";

export default function ProductCardFooter(props: { price: number }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const { incrementCart, decrementCart } = useCart();

  function cartButtonHandler(event: React.MouseEvent) {
    event.stopPropagation();
    setIsAddedToCart(!isAddedToCart);
    if (!isAddedToCart) {
      incrementCart();
      toast.success("Product added to cart");
    } else {
      decrementCart();
      toast.error("Product removed from cart");
    }
  }
  return (
    <div className="mt-auto">
      <p className="text-2xl font-bold text-green-600 mb-3">${props.price}</p>
      <div className="flex flex-row gap-2 mb-2">
        <button
          className={`flex-1 ${
            isAddedToCart
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          } transition duration-300 text-white font-semibold py-2 px-4 rounded`}
          onClick={cartButtonHandler}
        >
          {isAddedToCart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
