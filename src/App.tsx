import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductsListing from "./pages/ProductsListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./contexts/CartContext";
function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsListing />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
