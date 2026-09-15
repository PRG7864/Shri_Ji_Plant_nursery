import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

const FREE_SHIPPING_THRESHOLD = 599;
const DEFAULT_SHIPPING_FEE = 99;

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('greenycup_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [coupon, setCoupon] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('greenycup_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart:', e);
    }
  }, [cartItems]);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const addToCart = (product, quantity = 1, size = 'Standard', customPrice = null) => {
    const itemPrice = customPrice !== null ? customPrice : product.price;
    const itemImage = product.images?.[0] || 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80';

    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.productId === (product._id || product.id) && item.size === size
      );

      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            productId: product._id || product.id,
            name: product.name,
            slug: product.slug,
            image: itemImage,
            price: itemPrice,
            originalPrice: product.originalPrice || itemPrice,
            size,
            quantity,
            botanicalName: product.botanicalName || '',
            stock: product.stock !== undefined ? product.stock : 20,
          }
        ];
      }
    });

    showToast(`✓ Added ${product.name} to your garden`);
  };

  const updateQuantity = (productId, size, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId, size);
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.productId === productId && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev =>
      prev.filter(item => !(item.productId === productId && item.size === size))
    );
    showToast('Removed item from garden');
  };

  const clearCart = () => {
    setCartItems([]);
    setCoupon(null);
  };

  // Pricing calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  
  const shippingFee = subtotal >= FREE_SHIPPING_THRESHOLD || subtotal === 0 ? 0 : DEFAULT_SHIPPING_FEE;
  const freeShippingProgress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const amountNeededForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  // Coupon calculations
  let discountAmount = 0;
  if (coupon) {
    if (coupon.type === 'percentage') {
      discountAmount = Math.round((subtotal * coupon.value) / 100);
    } else if (coupon.type === 'fixed') {
      discountAmount = Math.min(subtotal, coupon.value);
    }
  }

  const total = Math.max(0, subtotal + shippingFee - discountAmount);

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'GREEN10') {
      setCoupon({ code: 'GREEN10', type: 'percentage', value: 10, description: '10% Botanical Discount' });
      showToast('🌿 Promo code GREEN10 applied: 10% OFF!');
      return { success: true };
    } else if (cleanCode === 'GREENYCUP20' || cleanCode === 'VERDORA20') {
      setCoupon({ code: 'GREENYCUP20', type: 'percentage', value: 20, description: '20% Green Week Discount' });
      showToast('🌿 Promo code GREENYCUP20 applied: 20% OFF!');
      return { success: true };
    } else if (cleanCode === 'GREENYCUP100' || cleanCode === 'VERDORA100') {
      setCoupon({ code: 'GREENYCUP100', type: 'fixed', value: 100, description: '₹100 Welcome Discount' });
      showToast('🌿 Promo code GREENYCUP100 applied: ₹100 OFF!');
      return { success: true };
    } else {
      return { success: false, message: 'Invalid coupon code. Try GREEN10, GREENYCUP20, or GREENYCUP100' };
    }
  };

  const removeCoupon = () => {
    setCoupon(null);
    showToast('Promo code removed');
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        subtotal,
        shippingFee,
        total,
        discountAmount,
        coupon,
        applyCoupon,
        removeCoupon,
        totalItemsCount,
        freeShippingProgress,
        amountNeededForFreeShipping,
        FREE_SHIPPING_THRESHOLD,
        toastMessage,
        showToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
