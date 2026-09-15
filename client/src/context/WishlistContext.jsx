import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { api } from '../services/api';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [wishlistItems, setWishlistItems] = useState(() => {
    try {
      const saved = localStorage.getItem('greenycup_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Sync with user's wishlist from server when logged in
  useEffect(() => {
    if (isAuthenticated && user?.wishlist) {
      setWishlistItems(user.wishlist);
    }
  }, [isAuthenticated, user]);

  // Persist locally
  useEffect(() => {
    try {
      localStorage.setItem('greenycup_wishlist', JSON.stringify(wishlistItems));
    } catch (e) {
      console.error('Failed to save wishlist:', e);
    }
  }, [wishlistItems]);

  const toggleWishlist = async (product) => {
    const productId = product._id || product.id;
    const exists = wishlistItems.some(item => (item._id || item.id || item) === productId);

    let updated;
    if (exists) {
      updated = wishlistItems.filter(item => (item._id || item.id || item) !== productId);
    } else {
      updated = [...wishlistItems, product];
    }

    setWishlistItems(updated);

    if (isAuthenticated) {
      try {
        await api.toggleWishlist(productId);
      } catch (err) {
        console.error('Wishlist sync failed:', err.message);
      }
    }
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => (item._id || item.id || item) === productId);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        wishlistCount: wishlistItems.length,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used within a WishlistProvider');
  return context;
};
