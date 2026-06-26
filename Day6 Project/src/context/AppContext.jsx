import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  // Cart State
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const syncCart = (nextCart) => {
    setCart(nextCart);
    setCartCount(nextCart.reduce((total, item) => total + item.quantity, 0));
  };

  // Cart Functions
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      const nextCart = existing
        ? prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          )
        : [...prev, { ...item, quantity: 1 }];

      syncCart(nextCart);
      return nextCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prev) => {
      const nextCart = prev
        .map((i) => (i.id === itemId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);

      syncCart(nextCart);
      return nextCart;
    });
  };

  const getCartCount = () => cartCount;

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        removeFromCart,
        getCartCount,
        getCartTotal,
        isLoginOpen,
        setIsLoginOpen,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
