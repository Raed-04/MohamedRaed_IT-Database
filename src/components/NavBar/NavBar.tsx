import {
  Home,
  ShoppingBag,
  Tag,
  User,
  ShoppingCart,
  Menu as MenuIcon,
  X as CloseIcon,
} from "lucide-react";
import { useCart } from "../../contexts/CartContext";
import toast from "react-hot-toast";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  function buttonClickhandler() {
    toast.error("Page not Implemented");
  }

  const menuButtons = (
    <>
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
    </>
  );

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex items-center justify-between">
      <span className="text-2xl font-bold text-green-600 tracking-tight">
        Le Shop
      </span>
      <div className="hidden md:flex items-center gap-4">{menuButtons}</div>
      <div className="flex items-center gap-2">
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
        <button
          className="md:hidden ml-2"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open menu"
        >
          {menuOpen ? (
            <CloseIcon className="w-7 h-7 text-gray-700" />
          ) : (
            <MenuIcon className="w-7 h-7 text-gray-700" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 flex md:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white w-64 h-full shadow-lg p-6 flex flex-col gap-2 ml-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-green-600 tracking-tight">
                  Le Shop
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon className="w-7 h-7 text-gray-700" />
                </button>
              </div>
              {menuButtons}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
