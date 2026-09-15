import React from 'react';
import { motion } from 'framer-motion';

const SeedLoader = () => {
  return (
    <div className="fixed inset-0 bg-[#F5F1E7] z-50 flex flex-col items-center justify-center p-6 select-none">
      <div className="relative flex flex-col items-center">
        {/* Animated Sprout Graphic */}
        <div className="w-24 h-24 relative flex items-center justify-center">
          {/* Seed Base */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
            className="w-8 h-8 rounded-full bg-[#12372A] shadow-md flex items-center justify-center relative z-10"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#8FAF91]" />
          </motion.div>

          {/* Sprouting Stem */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 32, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, repeat: Infinity, repeatDelay: 1 }}
            className="absolute bottom-12 w-1.5 bg-[#1F513A] rounded-full origin-bottom"
          />

          {/* Sprouting Leaf Left */}
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: -40 }}
            transition={{ duration: 0.6, delay: 0.4, repeat: Infinity, repeatDelay: 1.2 }}
            className="absolute -top-1 left-4 w-5 h-3 bg-[#8FAF91] rounded-full origin-bottom-right"
          />

          {/* Sprouting Leaf Right */}
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 40 }}
            transition={{ duration: 0.6, delay: 0.5, repeat: Infinity, repeatDelay: 1.1 }}
            className="absolute -top-2 right-4 w-6 h-3.5 bg-[#1F513A] rounded-full origin-bottom-left"
          />
        </div>

        {/* Brand Typography */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-4 space-y-1"
        >
          <div className="font-serif text-2xl tracking-[0.25em] font-bold text-[#12372A] uppercase">
            VERDORA
          </div>
          <div className="text-xs text-[#657A55] tracking-widest uppercase font-medium">
            Cultivating your digital garden...
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SeedLoader;
