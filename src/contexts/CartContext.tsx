import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
//Did this in a context as a context or a redux or a zustand would store all user-specific data that needs to be accessed globally
//like a user pfp, user id, cart count, etc.,
//Context is much simpler for this scope so a context it is
interface CartContextInterface {
  cartCount: number;
  incrementCart: () => void;
  decrementCart: () => void;
}
const CartContext = createContext<CartContextInterface>({
  cartCount: 0,
  incrementCart: () => {},
  decrementCart: () => {},
});

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState(0);

  function incrementCart() {
    setCartCount((c) => c + 1);
  }
  function decrementCart() {
    setCartCount((c) => (c > 0 ? c - 1 : 0));
  }

  return (
    <CartContext.Provider value={{ cartCount, incrementCart, decrementCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const cartContext = useContext(CartContext);
  if (!cartContext)
    throw new Error("useCart must be used within a CartProvider");
  return cartContext;
}
