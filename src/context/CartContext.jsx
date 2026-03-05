import { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Hook personalizado para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addItem = (item, quantity) => {
    // Verificar si el producto ya está en el carrito
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
      // Si existe, actualizar la cantidad
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Si no existe, agregarlo
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Remover producto del carrito
  const removeItem = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  // Limpiar todo el carrito
  const clear = () => {
    setCart([]);
  };

  // Verificar si un producto está en el carrito
  const isInCart = (itemId) => {
    return cart.some(item => item.id === itemId);
  };

  // Obtener la cantidad total de productos en el carrito
  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Obtener el precio total del carrito
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Obtener la cantidad de un producto específico en el carrito
  const getItemQuantity = (itemId) => {
    const item = cart.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clear,
      isInCart,
      getTotalQuantity,
      getTotalPrice,
      getItemQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};
