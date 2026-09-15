import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  CheckCircle2,
  Lock,
  Leaf,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

const CheckoutPage = () => {
  const { cartItems, subtotal, shippingFee, total, discountAmount, coupon, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    fullName: user?.addresses?.[0]?.fullName || user?.name || '',
    phone: user?.addresses?.[0]?.phone || user?.phone || '',
    email: user?.email || '',
    addressLine1: user?.addresses?.[0]?.addressLine1 || '',
    addressLine2: user?.addresses?.[0]?.addressLine2 || '',
    city: user?.addresses?.[0]?.city || 'Bengaluru',
    state: user?.addresses?.[0]?.state || 'Karnataka',
    pincode: user?.addresses?.[0]?.pincode || '560038',
  });

  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [upiId, setUpiId] = useState('greenycup@okhdfcbank');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '', name: '' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 bg-[#F5F1E7] text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-[#12372A]">Your Cart is Empty</h2>
        <p className="text-xs text-[#526057]">Please add plants to your garden before proceeding to checkout.</p>
        <Link to="/shop" className="px-6 py-2.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase">
          Explore Plants →
        </Link>
      </div>
    );
  }

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setError('');

    if (!address.fullName || !address.phone || !address.addressLine1 || !address.pincode) {
      setError('Please fill in all required shipping address fields.');
      return;
    }

    setIsProcessing(true);

    try {
      const orderPayload = {
        items: cartItems.map((item) => ({
          productId: item.productId,
          price: item.price,
          quantity: item.quantity,
          size: item.size
        })),
        shippingAddress: address,
        paymentMethod,
        couponCode: coupon?.code || '',
        discountAmount: discountAmount || 0,
      };

      const createdOrder = await api.createOrder(orderPayload);
      clearCart();
      navigate(`/order-success/${createdOrder.orderNumber || createdOrder._id}`);
    } catch (err) {
      console.error('Order placement error:', err);
      setError(err.message || 'Failed to complete order. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#657A55]">
          <Link to="/cart" className="hover:text-[#12372A]">Garden Cart</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#12372A] font-bold">Secure Checkout</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
          Complete Your Botanical Order
        </h1>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Shipping & Payment Options */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Shipping Address */}
            <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 border border-[#12372A]/10 space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#12372A]/10">
                <div className="w-6 h-6 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold flex items-center justify-center">
                  1
                </div>
                <h3 className="font-serif font-bold text-lg text-[#12372A]">
                  Delivery Address
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Full Recipient Name *</label>
                  <input
                    type="text"
                    required
                    value={address.fullName}
                    onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                    placeholder="e.g. Aarav Mehta"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">Contact Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={address.phone}
                    onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#12372A] mb-1">Email Address for Tracking *</label>
                  <input
                    type="email"
                    required
                    value={address.email}
                    onChange={(e) => setAddress({ ...address, email: e.target.value })}
                    placeholder="aarav.mehta@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-bold text-[#12372A] mb-1">Street Address / Apartment *</label>
                  <input
                    type="text"
                    required
                    value={address.addressLine1}
                    onChange={(e) => setAddress({ ...address, addressLine1: e.target.value })}
                    placeholder="Flat 402, Lotus Greens, 14th Main"
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">City *</label>
                  <input
                    type="text"
                    required
                    value={address.city}
                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#12372A] mb-1">State & Pincode *</label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      required
                      value={address.state}
                      onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      placeholder="State"
                      className="w-full px-3 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                    />
                    <input
                      type="text"
                      required
                      value={address.pincode}
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      placeholder="Pincode"
                      className="w-full px-3 py-2.5 rounded-xl border border-[#12372A]/15 bg-white focus:outline-none focus:border-[#1F513A]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method (UPI, Card, COD) */}
            <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-8 border border-[#12372A]/10 space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 pb-3 border-b border-[#12372A]/10">
                <div className="w-6 h-6 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold flex items-center justify-center">
                  2
                </div>
                <h3 className="font-serif font-bold text-lg text-[#12372A]">
                  Payment Method (Mock Simulation)
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'UPI', label: 'Instant UPI / QR', icon: QrCode },
                  { id: 'Card', label: 'Debit / Credit Card', icon: CreditCard },
                  { id: 'COD', label: 'Cash on Delivery', icon: Banknote },
                ].map((item) => {
                  const IconC = item.icon;
                  const isSelected = paymentMethod === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPaymentMethod(item.id)}
                      className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-3 transition-all ${
                        isSelected
                          ? 'border-[#12372A] bg-[#12372A] text-[#F5F1E7] shadow-md font-bold'
                          : 'border-[#12372A]/10 bg-white text-[#18201B] hover:border-[#8FAF91]'
                      }`}
                    >
                      <IconC className={`w-5 h-5 ${isSelected ? 'text-[#8FAF91]' : 'text-[#1F513A]'}`} />
                      <span className="text-xs">{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Payment Method UI Details */}
              {paymentMethod === 'UPI' && (
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/5 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#12372A]">
                    <QrCode className="w-4 h-4 text-[#1F513A]" />
                    <span>Scan UPI QR or enter UPI VPA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-xl bg-white border border-[#12372A]/15 text-xs font-mono"
                    />
                    <span className="text-[11px] font-bold text-[#1F513A] bg-[#8FAF91]/20 px-2.5 py-1.5 rounded-xl">
                      ✓ Auto Verified
                    </span>
                  </div>
                </div>
              )}

              {paymentMethod === 'Card' && (
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/5 space-y-3 text-xs">
                  <div>
                    <label className="block font-bold text-[#12372A] mb-1">Card Number</label>
                    <input
                      type="text"
                      placeholder="4532 •••• •••• 8912"
                      value={cardDetails.number}
                      onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl bg-white border border-[#12372A]/15 font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-[#12372A] mb-1">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiry}
                        onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-white border border-[#12372A]/15 font-mono"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-[#12372A] mb-1">CVV</label>
                      <input
                        type="password"
                        maxLength="3"
                        placeholder="•••"
                        value={cardDetails.cvv}
                        onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl bg-white border border-[#12372A]/15 font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'COD' && (
                <div className="p-4 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/5 text-xs text-[#526057]">
                  Pay in cash or via mobile UPI upon doorstep inspection of your live plants.
                </div>
              )}

              {error && <p className="text-xs font-bold text-red-600">{error}</p>}
            </div>
          </div>

          {/* Right Column: Order Review & Place Order Button */}
          <div className="lg:col-span-4 space-y-5">
            <div className="bg-[#FCFBF7] rounded-3xl p-6 sm:p-7 border border-[#12372A]/10 space-y-5 shadow-sm sticky top-28">
              <h3 className="font-serif font-bold text-lg text-[#12372A]">
                Your Order ({cartItems.length} items)
              </h3>

              {/* Items Mini List */}
              <div className="space-y-3 max-h-56 overflow-y-auto pr-1">
                {cartItems.map((item) => (
                  <div key={`${item.productId}-${item.size}`} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover bg-white shrink-0" />
                      <div>
                        <div className="font-semibold text-[#12372A] line-clamp-1">{item.name}</div>
                        <div className="text-[10px] text-[#657A55]">Qty: {item.quantity} • {item.size}</div>
                      </div>
                    </div>
                    <span className="font-bold text-[#18201B]">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              {/* Price Calculations */}
              <div className="space-y-2 pt-4 border-t border-[#12372A]/10 text-xs text-[#526057]">
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
                  <span>Eco-Armor Shipping</span>
                  <span className="font-semibold text-[#18201B]">
                    {shippingFee === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${shippingFee}`}
                  </span>
                </div>
                <div className="pt-3 border-t border-[#12372A]/10 flex justify-between items-center text-base font-bold text-[#12372A]">
                  <span>Total Payable</span>
                  <span className="font-serif text-xl">₹{total}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 rounded-2xl bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Confirm Order & Pay ₹{total}</span>
                    <ArrowRight className="w-4 h-4 text-[#8FAF91]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#657A55]">
                <Lock className="w-3 h-3 text-[#1F513A]" />
                <span>256-Bit Encrypted Green Checkout</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
