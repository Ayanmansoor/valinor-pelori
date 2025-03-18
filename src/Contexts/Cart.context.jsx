import React, { createContext, useState, useEffect, useContext } from 'react';

// Create Cart Context
const CartContext = createContext();

// Cart Provider component
const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if exists, otherwise an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Update localStorage whenever cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('cart'); // Clear cart from localStorage if empty
    }
  }, [cart]);

  // Add product to cart, but only if it's not already in the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is alre
      const exist = prevCart.some((item) =>
        item.id === product.id &&
        item?.colors === product?.colors &&
        item?.sizes === product?.sizes
      );
      if (exist) {
        return prevCart;
      }
      return [...prevCart, product];
    });
  };

  const updateQuantity = (productId, newQuantity, currentProduct) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => (
          item.id === productId &&
          item.colors?.name === currentProduct.colors?.name &&
          item.sizes?.size === currentProduct.sizes?.size
        )
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];

        if (newQuantity === 0) {
          updatedCart.splice(existingProductIndex, 1);
        } else {
          updatedCart[existingProductIndex].quentity = newQuantity;
        }

        return updatedCart;
      } else {
        return prevCart;
      }
    });
  };

  const isInCart = (productId) => {
    return cart.some(product => product.id === productId);
  };

  // Delete product from cart by id
  const deleteFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
  };

  // Clear all products in the cart
  const clearCart = () => {
    setCart([]);
  };

  const getCartProduct = (productId) => {
    return cart.find(product => String(product.id) == productId);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteFromCart, clearCart, isInCart, updateQuantity, getCartProduct }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export { CartProvider, useCart };
