import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import {
  CheckCircle2,
  Package,
  Truck,
  Leaf,
  Calendar,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { api } from '../services/api';

const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fire festive botanical confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#12372A', '#1F513A', '#8FAF91', '#C86D51', '#D4AF37']
    });

    const fetchOrder = async () => {
      try {
        const data = await api.getOrder(orderId);
        setOrder(data);
      } catch (err) {
        console.error('Failed to load order details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (orderId) fetchOrder();
  }, [orderId]);

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Celebration Card */}
        <div className="bg-[#FCFBF7] rounded-[2.5rem] p-8 sm:p-12 border border-[#12372A]/10 text-center space-y-5 shadow-xl relative overflow-hidden">
          <div className="w-20 h-20 rounded-full bg-[#1F513A] text-[#8FAF91] flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
              Order Confirmed
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A] mt-1">
              Your garden is on its way.
            </h1>
            <p className="font-mono text-sm font-bold text-[#1F513A] mt-2">
              Order Reference #{order?.orderNumber || orderId}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-[#526057] max-w-md mx-auto leading-relaxed">
            Our greenhouse team is hand-inspecting and packing your botanical specimens in Eco-Armor transit protection.
          </p>

          {/* Plant Care Starter Advice Box */}
          <div className="p-5 rounded-2xl bg-[#FAF8F2] border border-[#12372A]/8 text-left space-y-2 mt-6">
            <div className="flex items-center gap-2 text-xs font-bold text-[#12372A]">
              <Sparkles className="w-4 h-4 text-[#A47752]" />
              <span>Plant Arrival Care Protocol:</span>
            </div>
            <ul className="text-xs text-[#526057] space-y-1.5 list-disc list-inside">
              <li>Unpack your plant immediately upon delivery and gently mist the leaves.</li>
              <li>Place in bright indirect light and allow 48 hours for the plant to acclimate before repotting.</li>
              <li>Check soil moisture — water thoroughly if the top 2 inches feel dry.</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/account?tab=orders"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider transition-all shadow-md"
            >
              Track Order Status →
            </Link>
            <Link
              to="/shop"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FCFBF7] hover:bg-[#F5F1E7] text-[#12372A] border border-[#12372A]/15 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessPage;
