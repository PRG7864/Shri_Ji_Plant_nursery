import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, ShieldCheck, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F5F1E7] via-[#FAF8F2] to-[#F5F1E7]">
      {/* Floating Botanical Leaf Elements in Background */}
      <motion.div
        animate={{
          y: [-10, 15, -10],
          rotate: [0, 8, -6, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 left-[5%] w-36 h-36 rounded-full bg-[#8FAF91]/15 blur-2xl pointer-events-none"
      />
      <motion.div
        animate={{
          y: [15, -15, 15],
          rotate: [0, -10, 8, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-16 right-[8%] w-56 h-56 rounded-full bg-[#1F513A]/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Editorial Headline & Actions */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Tag Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12372A]/5 border border-[#12372A]/10 text-xs font-semibold text-[#1F513A]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A47752]" />
            <span>Next-Gen Digital Botanical Garden</span>
          </motion.div>

          {/* Main Large Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#12372A] leading-[1.05]"
          >
            Bring more <br />
            <span className="italic font-normal font-serif text-[#1F513A] underline decoration-[#8FAF91]/50 underline-offset-8">
              life
            </span>{' '}
            home.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#526057] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
          >
            Discover hand-nurtured indoor plants, artisan ceramic planters, heirloom seeds, and expert botanical care designed to transform your space into a lush living sanctuary.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
          >
            <Link
              to="/shop"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#12372A] hover:bg-[#1F513A] text-[#F5F1E7] text-sm font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              data-cursor="EXPLORE"
            >
              <span>Explore Plants</span>
              <ArrowRight className="w-4 h-4 text-[#8FAF91] group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/quiz"
              className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FCFBF7] hover:bg-[#F5F1E7] text-[#12372A] border border-[#12372A]/15 text-sm font-semibold transition-all flex items-center justify-center gap-2 group"
              data-cursor="QUIZ"
            >
              <Compass className="w-4 h-4 text-[#1F513A] group-hover:rotate-45 transition-transform" />
              <span>Find Your Plant →</span>
            </Link>
          </motion.div>

          {/* Social Proof Mini Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-6 border-t border-[#12372A]/8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#526057]"
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#12372A]">40+</span>
              <span>Living Varieties</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#8FAF91]" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#12372A]">100%</span>
              <span>Transit Guarantee</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#8FAF91]" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#12372A]">4.9★</span>
              <span>Botanical Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: High-Impact Visual Botanical Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 relative"
        >
          {/* Main Visual Card */}
          <div className="relative mx-auto max-w-md lg:max-w-none rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-[#FCFBF7] bg-[#EADBCC]/30 aspect-[4/5] group">
            <img
              src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Monstera Deliciosa Living Art"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/80 via-transparent to-transparent pointer-events-none" />

            {/* Floating Tag Card 1: Monstera Highlight */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FCFBF7]/95 backdrop-blur-md border border-[#12372A]/10 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#657A55]">
                    Featured Botanical
                  </span>
                  <h3 className="font-serif font-bold text-sm text-[#12372A]">
                    Monstera Deliciosa
                  </h3>
                  <p className="text-[11px] text-[#526057]">
                    Fenestrated split leaves • NASA Air Filter
                  </p>
                </div>
                <Link
                  to="/product/monstera-deliciosa"
                  className="p-2 rounded-full bg-[#12372A] text-[#F5F1E7] hover:bg-[#1F513A] transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Floating Orbiting Badge: 7-Day Guarantee */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -top-4 -left-4 sm:-left-8 bg-[#FCFBF7] p-3.5 rounded-2xl shadow-xl border border-[#12372A]/10 flex items-center gap-3"
          >
            <div className="p-2 rounded-xl bg-[#1F513A] text-[#8FAF91]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#12372A]">Eco-Armor Shield</div>
              <div className="text-[10px] text-[#526057]">Safe All-India Delivery</div>
            </div>
          </motion.div>

          {/* Floating Orbiting Badge: Oxygen Rating */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/3 -right-4 sm:-right-6 bg-[#FCFBF7] p-3 rounded-2xl shadow-xl border border-[#12372A]/10 flex items-center gap-2.5"
          >
            <div className="p-2 rounded-xl bg-[#8FAF91]/30 text-[#12372A]">
              <Leaf className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#12372A]">100% Organic Soil</div>
              <div className="text-[10px] text-[#526057]">Zero Chemical Fertilizers</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
