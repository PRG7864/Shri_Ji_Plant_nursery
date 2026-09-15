import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import ProductCard from '../shop/ProductCard';
import { api } from '../../services/api';

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const data = await api.getProducts({ bestseller: 'true', limit: 8 });
        setBestsellers(data.products || []);
      } catch (err) {
        console.error('Failed to load bestsellers:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchBestsellers();
  }, []);

  const scrollContainer = (direction) => {
    const container = document.getElementById('bestsellers-scroll-container');
    if (container) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF8F2] border-b border-[#12372A]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#657A55]">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Nursery Favorites</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#12372A] mt-2">
              The plants everyone <br />
              <span className="italic font-normal">loves.</span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="mt-4 sm:mt-0 flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollContainer('left')}
              className="p-3 rounded-full border border-[#12372A]/15 bg-[#FCFBF7] hover:bg-[#12372A] text-[#12372A] hover:text-[#F5F1E7] transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollContainer('right')}
              className="p-3 rounded-full border border-[#12372A]/15 bg-[#FCFBF7] hover:bg-[#12372A] text-[#12372A] hover:text-[#F5F1E7] transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-[4/5] bg-[#EADBCC]/30 rounded-3xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div
            id="bestsellers-scroll-container"
            className="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 no-scrollbar scroll-smooth snap-x"
          >
            {bestsellers.map((product) => (
              <div
                key={product._id}
                className="w-[280px] sm:w-[300px] shrink-0 snap-start"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center sm:hidden">
          <Link
            to="/shop?sort=bestseller"
            className="inline-block text-xs font-bold uppercase tracking-wider text-[#12372A] underline"
          >
            View All Bestsellers →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
