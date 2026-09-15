import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/shop/ProductCard';

const WishlistPage = () => {
  const { wishlistItems, wishlistCount } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistCount === 0) {
    return (
      <div className="bg-[#F5F1E7] min-h-[75vh] flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center bg-[#FCFBF7] rounded-3xl p-10 border border-[#12372A]/10 shadow-sm space-y-5">
          <div className="w-20 h-20 rounded-full bg-[#C86D51]/15 text-[#C86D51] flex items-center justify-center mx-auto">
            <Heart className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#12372A]">
            Your wishlist is empty
          </h2>
          <p className="text-xs text-[#526057] leading-relaxed">
            Explore our collection of indoor botanicals, bonsai, and planters to save your favorite specimens.
          </p>
          <Link
            to="/shop"
            className="inline-block px-8 py-3.5 rounded-full bg-[#12372A] text-[#F5F1E7] text-xs font-bold uppercase tracking-wider hover:bg-[#1F513A] transition-colors shadow-md"
          >
            Explore Plants →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F5F1E7] min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#657A55]">
            Saved Botanicals
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#12372A]">
            My Wishlist ({wishlistCount} saved)
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
