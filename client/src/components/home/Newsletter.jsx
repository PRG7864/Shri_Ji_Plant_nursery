import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, ArrowRight, CheckCircle2, Leaf } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F1E7]">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-[3rem] bg-[#12372A] text-[#FCFBF7] p-8 sm:p-14 md:p-16 relative overflow-hidden shadow-2xl">
          {/* Background Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1F513A]/50 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8FAF91]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl mx-auto text-center space-y-6 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#1F513A] text-[#8FAF91] flex items-center justify-center mx-auto shadow-md">
              <Leaf className="w-6 h-6" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Grow with us.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#8FAF91] font-light max-w-lg mx-auto leading-relaxed">
              Receive monthly horticultural care calendars, seasonal repotting reminders, new greenhouse arrivals, and exclusive subscriber botanical discounts.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 rounded-2xl bg-[#1F513A]/60 border border-[#8FAF91]/40 flex items-center justify-center gap-3 text-sm text-[#FCFBF7]"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#8FAF91]" />
                  <span>Welcome to the Verdora Conservatory! Check your inbox for a 10% welcome gift.</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2 max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address..."
                      className="flex-1 px-5 py-3.5 rounded-full bg-[#FCFBF7] text-[#18201B] placeholder-[#526057]/70 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#8FAF91] shadow-inner"
                    />
                    <button
                      type="submit"
                      className="px-7 py-3.5 rounded-full bg-[#8FAF91] hover:bg-[#FCFBF7] text-[#12372A] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-1.5 shrink-0"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {error && <p className="text-xs text-[#C86D51] font-medium">{error}</p>}
                </form>
              )}
            </AnimatePresence>

            <div className="text-[11px] text-[#8FAF91]/70">
              Zero spam. Unsubscribe anytime with 1-click.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
