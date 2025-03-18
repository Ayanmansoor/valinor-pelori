import { createContext, useState, useEffect, useContext } from "react";

const WishlistContext = createContext();

function WishlistProvider({ children }) {
  // Check if there's an existing wishlist in localStorage on initial load
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : []; // Default to an empty array if no data
  });

  // Update localStorage whenever wishlist changes
  useEffect(() => {
    if (wishlist.length > 0) {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } else {
      localStorage.removeItem("wishlist");
    }
  }, [wishlist]);

  // Function to add an item to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // Prevent adding duplicates
      if (!prevWishlist.some((item) => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  // Function to remove an item from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  // Method to check if a product is already in the wishlist
  const isProductInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isProductInWishlist, // Expose the method to check if product is in wishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

const useWishlists = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error("useWishlists must be used within a WishlistProvider");
  }

  return context;
};

export { WishlistProvider, useWishlists };
