import {
  Home,
  ShoppingBag,
  Tag,
  User,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import toast from "react-hot-toast";
//This is purely to sell the idea of a real site, along with organically having the cart counter

export default function NavBar() {
  const { cartCount } = useCart();
  function buttonClickhandler() {
    toast.error("Page not Implemented");
  }
  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold text-green-600 tracking-tight">
          Le Shop
        </span>
        <button
          onClick={buttonClickhandler}
          className="flex items-center cursor-pointer gap-1 text-gray-700 hover:text-green-600 font-semibold px-3 py-2 rounded transition"
        >
          <Home className="w-5 h-5" /> Home
        </button>
        <button
          onClick={buttonClickhandler}
          className="flex items-center cursor-pointer gap-1 text-gray-700 hover:text-green-600 font-semibold px-3 py-2 rounded transition duration-300"
        >
          <ShoppingBag className="w-5 h-5" /> Products
        </button>
        <button
          onClick={buttonClickhandler}
          className="flex items-center cursor-pointer gap-1 text-gray-700 hover:text-green-600 font-semibold px-3 py-2 rounded transition duration-300"
        >
          <Tag className="w-5 h-5" /> Deals
        </button>
        <button
          onClick={buttonClickhandler}
          className="flex items-center cursor-pointer gap-1 text-gray-700 hover:text-green-600 font-semibold px-3 py-2 rounded transition duration-300"
        >
          <User className="w-5 h-5" /> Account
        </button>
      </div>
      <div className="flex items-center">
        <button
          onClick={buttonClickhandler}
          className="relative cursor-pointer"
        >
          <ShoppingCart className="w-7 h-7 text-gray-700 hover:text-green-600 transition duration-300" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
