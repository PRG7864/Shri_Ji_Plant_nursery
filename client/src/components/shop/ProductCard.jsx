import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star, Sparkles, Sun, Droplets } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isFavorited = isInWishlist(product._id || product.id);
  const primaryImage = product.images?.[0] || 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=600&q=80';
  const secondaryImage = product.images?.[1] || primaryImage;

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes?.[0]?.name || 'Standard';
    const defaultPrice = product.sizes?.[0]?.price || product.price;
    addToCart(product, 1, defaultSize, defaultPrice);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
      className="group relative flex flex-col bg-[#FCFBF7] rounded-3xl overflow-hidden border border-[#12372A]/8 hover:border-[#8FAF91]/60 shadow-sm hover:shadow-card-elevated transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="VIEW"
    >
      {/* Image Container with Hover Swap & Badges */}
      <Link to={`/product/${product.slug}`} className="block relative aspect-[4/5] overflow-hidden bg-[#EADBCC]/20">
        {/* Primary Image */}
        <img
          src={primaryImage}
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
            isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
          }`}
          loading="lazy"
        />

        {/* Secondary Image */}
        <img
          src={secondaryImage}
          alt={`${product.name} alternate view`}
          className={`w-full h-full object-cover absolute inset-0 transition-all duration-700 ease-out ${
            isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0 pointer-events-none'
          }`}
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#12372A]/90 text-[#F5F1E7] backdrop-blur-md shadow-sm">
              {product.badge}
            </span>
          )}
          {product.discount > 0 && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#C86D51] text-white shadow-sm w-max">
              -{product.discount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlistClick}
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all z-20 ${
            isFavorited
              ? 'bg-[#C86D51] text-white shadow-md'
              : 'bg-white/80 hover:bg-white text-[#18201B] hover:text-[#C86D51] opacity-90 group-hover:opacity-100'
          }`}
        >
          <Heart className={`w-4 h-4 ${isFavorited ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add To Garden Overlay Button */}
        <div className="absolute inset-x-3 bottom-3 z-20 transition-all duration-300 transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={handleQuickAdd}
            className="w-full bg-[#12372A]/95 hover:bg-[#1F513A] text-[#F5F1E7] py-2.5 px-4 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 shadow-lg backdrop-blur-md transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#8FAF91]" />
            <span>Quick Add +</span>
          </button>
        </div>
      </Link>

      {/* Content Info */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Reviews */}
          <div className="flex items-center gap-1.5 mb-1.5 text-xs text-[#526057]">
            <div className="flex items-center text-[#D4AF37]">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="font-bold text-[#18201B] text-xs">{product.rating || 4.8}</span>
            <span className="text-[11px] text-[#526057]">({product.reviewCount || 42})</span>
          </div>

          {/* Plant Title */}
          <Link to={`/product/${product.slug}`} className="block group/title">
            <h3 className="font-serif text-base sm:text-lg font-bold text-[#12372A] group-hover/title:text-[#1F513A] transition-colors line-clamp-1">
              {product.name}
            </h3>
            {product.botanicalName && (
              <p className="text-[11px] italic font-serif text-[#657A55] line-clamp-1 mt-0.5">
                {product.botanicalName}
              </p>
            )}
          </Link>

          {/* Mini Care Chips */}
          {product.care?.light && (
            <div className="flex items-center gap-2 mt-2 text-[10px] text-[#526057]">
              <span className="flex items-center gap-1 bg-[#F5F1E7] px-2 py-0.5 rounded-md font-medium truncate">
                <Sun className="w-3 h-3 text-[#A47752] shrink-0" />
                <span className="truncate">{product.care.light.split('(')[0]}</span>
              </span>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="mt-4 pt-3 border-t border-[#12372A]/5 flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-serif text-lg sm:text-xl font-bold text-[#12372A]">
              ₹{product.price}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-[#526057] line-through font-sans">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          {product.stock <= 15 && product.stock > 0 && (
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              Only {product.stock} left
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
