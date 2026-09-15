import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const Toast = () => {
  const { toastMessage } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-[9990] pointer-events-none">
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="bg-[#12372A] text-[#FCFBF7] px-4 py-3 rounded-2xl shadow-2xl border border-[#8FAF91]/30 flex items-center gap-3 pointer-events-auto backdrop-blur-md"
          >
            <div className="p-1 rounded-full bg-[#1F513A] text-[#8FAF91]">
              <Leaf className="w-4 h-4 animate-spin-slow" />
            </div>
            <span className="text-xs font-semibold tracking-wide">
              {toastMessage}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
