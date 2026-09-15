import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Truck, ShieldCheck, Sprout } from 'lucide-react';

const announcements = [
  { text: '🌿 FREE SHIPPING ON ALL ORDERS ABOVE ₹599', icon: Truck },
  { text: '🌱 7-DAY HEALTHY PLANT REPLACEMENT GUARANTEE', icon: ShieldCheck },
  { text: '🪴 NURSERY-GROWN SPECIMENS IN ECO-ARMOR PACKAGING', icon: Sprout },
  { text: '✨ USE CODE "GREEN10" FOR 10% OFF YOUR FIRST GARDEN', icon: Sparkles },
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = announcements[index].icon;

  return (
    <div className="bg-[#12372A] text-[#F5F1E7] text-xs py-2 px-4 font-medium tracking-wider uppercase overflow-hidden border-b border-[#1F513A]/40 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center relative min-h-[1.5rem]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="flex items-center gap-2 text-center"
          >
            <CurrentIcon className="w-3.5 h-3.5 text-[#8FAF91] shrink-0" />
            <span>{announcements[index].text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnnouncementBar;
