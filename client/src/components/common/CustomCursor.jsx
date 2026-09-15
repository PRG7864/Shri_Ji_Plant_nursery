import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleElementHover = (e) => {
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text);
        setCursorVariant('badge');
      } else {
        const isClickable = e.target.closest('a, button, input, select, textarea');
        if (isClickable) {
          setCursorVariant('hover');
          setCursorText('');
        } else {
          setCursorVariant('default');
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleElementHover);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: 'rgba(31, 81, 58, 0.4)',
      border: '1px solid rgba(143, 175, 145, 0.8)',
      transition: { type: 'spring', damping: 28, stiffness: 400, mass: 0.2 }
    },
    hover: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      height: 36,
      width: 36,
      backgroundColor: 'rgba(143, 175, 145, 0.25)',
      border: '1px solid rgba(31, 81, 58, 0.5)',
      transition: { type: 'spring', damping: 22, stiffness: 350, mass: 0.3 }
    },
    badge: {
      x: mousePosition.x - 36,
      y: mousePosition.y - 36,
      height: 72,
      width: 72,
      backgroundColor: 'rgba(18, 55, 42, 0.92)',
      border: '1px solid rgba(143, 175, 145, 0.8)',
      transition: { type: 'spring', damping: 20, stiffness: 300, mass: 0.3 }
    }
  };

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-[10px] font-bold tracking-widest text-[#F5F1E7] uppercase shadow-md backdrop-blur-[2px]"
    >
      {cursorVariant === 'badge' && cursorText}
    </motion.div>
  );
};

export default CustomCursor;
