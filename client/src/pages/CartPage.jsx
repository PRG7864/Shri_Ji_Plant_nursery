import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShoppingBag,
  Tag,
  Truck,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const {
    cartItems,
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

  if (cartItems.length === 0) {
    return (
      <div className="bg-[#F5F1E7] min-h-[75vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center bg-[#FCFBF7] rounded-3xl p-10 border border-[#12372A]/10 shadow-sm space-y-5">
          <div className="w-20 h-20 rounded-full bg-[#8FAF91]/20 text-[#1F513A] flex items-center justify-center mx-auto">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#12372A]">
            Your garden is waiting
          </h2>
          <p className="text-xs text-[#526057] leading-relaxed">
            Looks like you haven&apos;t added any plant specimens or planters to your cart yet.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider hover:bg-[#1F513A] transition-colors shadow-md"
          >
            Explore Botanical Catalog →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#657A55]">
          <Link to="/" className="hover:text-[#12372A]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#12372A] font-bold">Shopping Garden Cart</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
          Your Garden Cart ({totalItemsCount} items)
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {/* Free shipping banner */}
            <div className="p-4 rounded-2xl bg-[#FCFBF7] border border-[#12372A]/10 space-y-2">
              <div className="flex items-center justify-between text-xs font-medium">
                <span className="flex items-center gap-2 text-[#12372A]">
                  <Truck className="w-4 h-4 text-[#1F513A]" />
                  {amountNeededForFreeShipping > 0
                    ? `Add ₹${amountNeededForFreeShipping} more for Free All-India Eco-Armor Shipping!`
                    : '🎉 Free Eco-Armor Shipping Unlocked!'}
                </span>
                <span className="font-bold text-[#1F513A]">{Math.round(freeShippingProgress)}%</span>
              </div>
              <div className="w-full h-2 bg-[#8FAF91]/30 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1F513A] transition-all duration-500 rounded-full"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>

            {/* Items */}
            <div className="bg-[#FCFBF7] rounded-3xl p-6 border border-[#12372A]/10 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={`${item.productId}-${item.size}`}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-[#12372A]/8 last:border-b-0"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-2xl object-cover bg-[#F5F1E7] shrink-0"
                    />
                    <div>
                      <Link
                        to={`/product/${item.slug}`}
                        className="font-serif font-bold text-sm sm:text-base text-[#12372A] hover:text-[#1F513A]"
                      >
                        {item.name}
                      </Link>
                      <div className="text-xs text-[#657A55] mt-0.5">
                        Pot Size: <span className="font-medium text-[#18201B]">{item.size}</span>
                      </div>
                      <div className="text-xs font-bold text-[#18201B] sm:hidden mt-1">
                        ₹{item.price} each
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto sm:gap-6">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#12372A]/20 rounded-xl bg-white p-0.5">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)}
                        className="p-1.5 hover:bg-[#F5F1E7] rounded-lg text-[#12372A]"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold text-[#18201B]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)}
                        className="p-1.5 hover:bg-[#F5F1E7] rounded-lg text-[#12372A]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Total item price */}
                    <div className="text-right">
                      <span className="font-serif font-bold text-base text-[#12372A]">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>

                    {/* Delete button */}
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.productId, item.size)}
                      className="text-[#657A55] hover:text-red-600 p-1 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-7 border border-[#12372A]/10 space-y-5 sticky top-28 shadow-sm">
              <h3 className="font-serif font-bold text-lg text-[#12372A]">
                Order Summary
              </h3>

              {/* Promo code */}
              {coupon ? (
                <div className="flex items-center justify-between p-3 rounded-2xl bg-[#1F513A]/10 border border-[#1F513A]/20 text-xs">
                  <div className="flex items-center gap-2 text-[#12372A] font-medium">
                    <Tag className="w-4 h-4 text-[#1F513A]" />
                    <span>{coupon.code} (-₹{discountAmount})</span>
                  </div>
                  <button
                    type="button"
                    onClick={removeCoupon}
                    className="text-xs font-bold text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="space-y-1">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      placeholder="Coupon (e.g. GREEN10)"
                      className="flex-1 px-3 py-2 text-xs rounded-xl bg-white border border-[#12372A]/15 uppercase font-medium focus:outline-none focus:border-[#1F513A]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider hover:bg-[#1F513A]"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-[11px] text-red-600">{couponError}</p>}
                </form>
              )}

              {/* Price rows */}
              <div className="space-y-2.5 pt-3 border-t border-[#12372A]/10 text-xs text-[#526057]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#18201B]">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#1F513A]">
                    <span>Promotional Discount</span>
                    <span className="font-semibold">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Eco-Armor Delivery</span>
                  <span className="font-semibold text-[#18201B]">
                    {shippingFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="pt-3 border-t border-[#12372A]/10 flex justify-between items-center text-base font-bold text-[#12372A]">
                  <span>Total Amount</span>
                  <span className="font-serif text-xl">₹{total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={() => navigate('/checkout')}
                className="w-full py-4 rounded-2xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#8FAF91]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#657A55]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1F513A]" />
                <span>100% Secure Checkout Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
