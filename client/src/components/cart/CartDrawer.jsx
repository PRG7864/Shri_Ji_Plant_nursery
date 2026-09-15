import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Sparkles,
  Tag,
  Truck
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartDrawer = () => {
  const {
    cartItems,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    total,
    discountAmount,
    coupon,
    applyCoupon,
    removeCoupon,
    freeShippingProgress,
    amountNeededForFreeShipping,
    totalItemsCount
  } = useCart();

  const [couponInput, setCouponInput] = useState('');
  const [couponError, setCouponError] = useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    setCouponError('');
    if (!couponInput.trim()) return;
    
    const res = applyCoupon(couponInput);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-[#12372A]/60 backdrop-blur-sm"
          />

          {/* Drawer Body */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#FCFBF7] shadow-2xl flex flex-col border-l border-[#12372A]/10"
          >
            {/* Header */}
            <div className="p-5 border-b border-[#12372A]/10 flex items-center justify-between bg-[#F5F1E7]/70">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#1F513A]" />
                <h3 className="font-serif text-lg font-bold text-[#12372A]">
                  Your Garden
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#12372A] text-[#F5F1E7]">
                  {totalItemsCount}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full text-[#657A55] hover:text-[#12372A] hover:bg-[#F5F1E7] transition-colors"
                aria-label="Close cart drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Progress Meter */}
            <div className="bg-[#12372A]/5 p-3.5 border-b border-[#12372A]/5">
              <div className="flex items-center justify-between text-xs font-medium mb-1.5">
                <span className="flex items-center gap-1.5 text-[#12372A]">
                  <Truck className="w-3.5 h-3.5 text-[#1F513A]" />
                  {amountNeededForFreeShipping > 0
                    ? `Add ₹${amountNeededForFreeShipping} more for Free Shipping!`
                    : '🎉 You have unlocked Free Eco Shipping!'}
                </span>
                <span className="font-bold text-[#1F513A]">{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full h-1.5 bg-[#8FAF91]/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${freeShippingProgress}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-[#1F513A] rounded-full"
                />
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                  <div className="w-20 h-20 rounded-full bg-[#8FAF91]/20 flex items-center justify-center text-[#1F513A]">
                    <ShoppingBag className="w-9 h-9" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-[#12372A]">
                      Your garden is waiting
                    </h4>
                    <p className="text-xs text-[#526057] mt-1 max-w-xs">
                      Looks like your cart is empty. Explore our nursery catalog to bring fresh greenery into your space.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/shop');
                    }}
                    className="bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] px-6 py-2.5 rounded-full text-xs font-semibold transition-colors"
                  >
                    Explore Plants →
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={`${item.productId}-${item.size}`}
                    className="flex gap-3.5 p-3 rounded-2xl bg-[#F5F1E7]/70 border border-[#12372A]/5 relative group"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover shrink-0 bg-white"
                    />
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/product/${item.slug}`}
                            onClick={() => setIsCartOpen(false)}
                            className="font-serif font-bold text-xs text-[#12372A] hover:text-[#1F513A] line-clamp-1"
                          >
                            {item.name}
                          </Link>
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.productId, item.size)}
                            className="text-[#657A55] hover:text-red-600 transition-colors p-0.5"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-[11px] text-[#526057] mt-0.5">
                          Size: <span className="font-medium text-[#18201B]">{item.size}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#12372A]/15 rounded-lg bg-white overflow-hidden">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                            className="p-1 hover:bg-[#F5F1E7] text-[#12372A] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2.5 text-xs font-bold text-[#18201B]">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                            className="p-1 hover:bg-[#F5F1E7] text-[#12372A] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-xs font-bold text-[#12372A]">
                            ₹{item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {cartItems.length > 0 && (
              <div className="p-5 bg-[#F5F1E7] border-t border-[#12372A]/10 space-y-3.5">
                {/* Coupon Input */}
                {coupon ? (
                  <div className="flex items-center justify-between p-2.5 bg-[#1F513A]/10 border border-[#1F513A]/20 rounded-xl text-xs">
                    <div className="flex items-center gap-1.5 text-[#12372A] font-medium">
                      <Tag className="w-3.5 h-3.5 text-[#1F513A]" />
                      <span>{coupon.code} applied (-₹{discountAmount})</span>
                    </div>
                    <button
                      type="button"
                      onClick={removeCoupon}
                      className="text-[11px] font-bold text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Promo code (e.g. GREEN10)"
                      className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-white border border-[#12372A]/15 uppercase font-medium focus:outline-none focus:border-[#1F513A]"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-1.5 rounded-xl bg-[#12372A] text-[#F5F1E7] text-xs font-semibold hover:bg-[#1F513A] transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
                {couponError && (
                  <p className="text-[11px] text-red-600 -mt-2">{couponError}</p>
                )}

                {/* Subtotal & Total */}
                <div className="space-y-1.5 text-xs text-[#526057]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-[#18201B]">₹{subtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-[#1F513A]">
                      <span>Discount</span>
                      <span className="font-semibold">-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Eco Shipping</span>
                    <span className="font-semibold text-[#18201B]">
                      {shippingFee === 0 ? (
                        <span className="text-emerald-700 font-bold">FREE</span>
                      ) : (
                        `₹${shippingFee}`
                      )}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-[#12372A]/10 flex justify-between items-center text-sm font-bold text-[#12372A]">
                    <span>Total Amount</span>
                    <span className="font-serif text-lg">₹{total}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate('/cart');
                    }}
                    className="w-full py-3 rounded-xl border border-[#12372A] text-[#12372A] text-xs font-bold hover:bg-[#12372A]/5 transition-colors text-center"
                  >
                    View Full Cart
                  </button>
                  <button
                    type="button"
                    onClick={handleProceedToCheckout}
                    className="w-full py-3 rounded-xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Checkout</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
