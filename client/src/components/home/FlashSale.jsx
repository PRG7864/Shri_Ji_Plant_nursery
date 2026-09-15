import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Tag, Timer } from 'lucide-react';

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 36,
    seconds: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNum = (n) => String(n).padStart(2, '0');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#12372A] text-[#FCFBF7] relative overflow-hidden">
      {/* Botanical Background Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#1F513A]/60 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#8FAF91]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Column: Heading & Timer */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F513A] border border-[#8FAF91]/30 text-xs font-bold tracking-wider uppercase text-[#8FAF91]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Limited Botanical Flash Event</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            GREEN <br />
            <span className="italic text-[#8FAF91]">WEEK.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#8FAF91] max-w-lg font-light leading-relaxed">
            Up to <strong className="text-[#FCFBF7] font-bold">40% OFF</strong> on rare tropical statement plants, handmade ceramic planters, and heirloom organic seeds.
          </p>

          {/* Countdown Clock Display */}
          <div className="pt-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8FAF91] mb-3">
              <Timer className="w-4 h-4 text-[#C86D51]" />
              <span>Offer Closes In:</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 font-mono">
              <div className="flex flex-col items-center bg-[#0E281E]/80 border border-[#8FAF91]/20 rounded-2xl p-3 sm:p-4 min-w-[64px] sm:min-w-[76px] backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-bold text-[#FCFBF7]">
                  {formatNum(timeLeft.days)}
                </span>
                <span className="text-[10px] text-[#8FAF91] uppercase tracking-widest mt-1 font-sans">Days</span>
              </div>
              <span className="text-xl font-bold text-[#8FAF91]">:</span>

              <div className="flex flex-col items-center bg-[#0E281E]/80 border border-[#8FAF91]/20 rounded-2xl p-3 sm:p-4 min-w-[64px] sm:min-w-[76px] backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-bold text-[#FCFBF7]">
                  {formatNum(timeLeft.hours)}
                </span>
                <span className="text-[10px] text-[#8FAF91] uppercase tracking-widest mt-1 font-sans">Hours</span>
              </div>
              <span className="text-xl font-bold text-[#8FAF91]">:</span>

              <div className="flex flex-col items-center bg-[#0E281E]/80 border border-[#8FAF91]/20 rounded-2xl p-3 sm:p-4 min-w-[64px] sm:min-w-[76px] backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-bold text-[#FCFBF7]">
                  {formatNum(timeLeft.minutes)}
                </span>
                <span className="text-[10px] text-[#8FAF91] uppercase tracking-widest mt-1 font-sans">Mins</span>
              </div>
              <span className="text-xl font-bold text-[#8FAF91]">:</span>

              <div className="flex flex-col items-center bg-[#0E281E]/80 border border-[#8FAF91]/20 rounded-2xl p-3 sm:p-4 min-w-[64px] sm:min-w-[76px] backdrop-blur-md">
                <span className="text-2xl sm:text-3xl font-bold text-[#C86D51]">
                  {formatNum(timeLeft.seconds)}
                </span>
                <span className="text-[10px] text-[#8FAF91] uppercase tracking-widest mt-1 font-sans">Secs</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#8FAF91] hover:bg-[#FCFBF7] text-[#12372A] text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-xl hover:scale-105"
            >
              <span>Shop the Green Week Sale</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Visual Product Collage */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#8FAF91]/20 aspect-[4/3] sm:aspect-[16/10] bg-[#0E281E]">
            <img
              src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&w=1000&q=80"
              alt="Green Week Botanical Collection"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#12372A] via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0E281E]/90 backdrop-blur-md border border-[#8FAF91]/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#1F513A] text-[#8FAF91]">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#FCFBF7]">Use Code: GREENYCUP20</div>
                  <div className="text-[11px] text-[#8FAF91]">Extra 20% OFF at Checkout</div>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#C86D51] text-white">
                Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
